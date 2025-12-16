#!/usr/bin/env node
/**
 * Museum-Grade Image Sourcing Pipeline
 * 
 * Finds period-accurate images for museum objects from reliable sources:
 * - Wikimedia Commons API
 * - The Metropolitan Museum of Art Open Access API
 * - Art Institute of Chicago API
 * - Smithsonian Open Access API
 * - Europeana API (optional)
 * - Rijksmuseum API (optional)
 * 
 * Features:
 * - Query expansion with multiple variants
 * - Entity constraints (ancient signals for ancient objects)
 * - Scoring system with provenance preference
 * - Review mode for manual overrides
 * - Comprehensive reporting
 * 
 * Usage:
 *   npx tsx scripts/fetchObjectImages.ts --only-missing
 *   npx tsx scripts/fetchObjectImages.ts --review
 */

import * as fs from "fs";
import * as path from "path";
import { createHash } from "crypto";
import { OBJECTS } from "../src/data/objects";

// CLI flags
const args = process.argv.slice(2);
const FORCE = args.includes("--force");
const ONLY_MISSING = args.includes("--only-missing");
const REVIEW = args.includes("--review");
const UPDATE_DATA = args.includes("--update-data") || (!args.includes("--dry-run") && !REVIEW);
const LIMIT_ARG = args.find((a) => a.startsWith("--limit="));
const LIMIT = LIMIT_ARG ? Number(LIMIT_ARG.split("=")[1]) : Infinity;

// Paths
const ROOT = process.cwd();
const PUBLIC_DIR = path.join(ROOT, "public");
const IMAGES_DIR = path.join(PUBLIC_DIR, "objects", "images");
const REPORTS_DIR = path.join(ROOT, "reports", "image-fetch");
const OVERRIDES_FILE = path.join(ROOT, "scripts", "image-overrides.json");
const DATA_FILE = path.join(ROOT, "src", "data", "objects.ts");

// Ensure directories exist
if (!fs.existsSync(IMAGES_DIR)) fs.mkdirSync(IMAGES_DIR, { recursive: true });
if (!fs.existsSync(REPORTS_DIR)) fs.mkdirSync(REPORTS_DIR, { recursive: true });

// Rate limiting
let lastRequestTime = 0;
const MIN_REQUEST_INTERVAL = 300;

// API keys (optional)
const SMITHSONIAN_API_KEY = process.env.SMITHSONIAN_API_KEY;
const EUROPEANA_API_KEY = process.env.EUROPEANA_API_KEY;
const RIJKSMUSEUM_API_KEY = process.env.RIJKSMUSEUM_API_KEY;

// Types
interface ImageCandidate {
  url: string;
  source: string;
  sourceUrl: string;
  title: string;
  institution?: string;
  creator?: string;
  license: string;
  metadata: string;
  categories: string[];
  score: number;
  thumbnailUrl?: string;
}

interface Attribution {
  title?: string;
  institution?: string;
  creator?: string;
  license?: string;
  sourceUrl?: string;
}

interface ReportEntry {
  slug: string;
  title: string;
  dateLabel: string;
  success: boolean;
  chosenSource?: string;
  institution?: string;
  license?: string;
  score?: number;
  thumbnailUrl?: string;
  sourceUrl?: string;
  reason?: string;
}

interface SuspiciousEntry {
  slug: string;
  title: string;
  dateLabel: string;
  reason: string;
  candidate?: {
    source: string;
    title: string;
    score: number;
  };
}

interface FailedEntry {
  slug: string;
  title: string;
  dateLabel: string;
  reason: string;
}

const reportEntries: ReportEntry[] = [];
const suspiciousEntries: SuspiciousEntry[] = [];
const failedEntries: FailedEntry[] = [];

// Utility functions
function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function rateLimitedFetch(url: string, options?: RequestInit): Promise<Response> {
  const now = Date.now();
  const timeSinceLastRequest = now - lastRequestTime;
  if (timeSinceLastRequest < MIN_REQUEST_INTERVAL) {
    await sleep(MIN_REQUEST_INTERVAL - timeSinceLastRequest);
  }
  lastRequestTime = Date.now();

  const response = await fetch(url, {
    ...options,
    headers: {
      "User-Agent": "MuseumOfHumanPerformance/1.0",
      ...options?.headers,
    },
  });

  if (!response.ok && response.status === 429) {
    await sleep(2000);
    return rateLimitedFetch(url, options);
  }

  return response;
}

function isPlaceholderPath(imagePath: string | undefined): boolean {
  if (!imagePath) return true;
  const norm = imagePath.replace(/\\/g, "/");
  return norm.includes("/placeholders/") || norm.endsWith(".svg");
}

function shouldProcess(obj: any): boolean {
  if (FORCE) return true;
  if (ONLY_MISSING) {
    const imagePath = obj?.media?.imagePath;
    if (!imagePath) return true;
    if (isPlaceholderPath(imagePath)) return true;
    const fullPath = path.join(PUBLIC_DIR, imagePath);
    return !fs.existsSync(fullPath);
  }
    return true;
  }

function parseYear(dateLabel: string): number | null {
  const bceMatch = dateLabel.match(/(\d+)\s*BCE/i);
  if (bceMatch) return -Number(bceMatch[1]);
  const ceMatch = dateLabel.match(/(\d{4})/);
  if (ceMatch) return Number(ceMatch[1]);
  return null;
}

function isAncient(obj: any): boolean {
  const dateLabel = obj.dateLabel || "";
  if (dateLabel.includes("BCE")) return true;
  const year = parseYear(dateLabel);
  return year !== null && year < 500;
}

function isSpeculative(obj: any): boolean {
  const title = (obj.title || "").toLowerCase();
  const year = parseYear(obj.dateLabel || "");
  if (year !== null && year >= 2025) return true;
  const speculativeKeywords = ["prototype", "neural", "bio-integrated", "holographic", "future", "predictive"];
  return speculativeKeywords.some(keyword => title.includes(keyword));
}

function containsModernKeywords(text: string): boolean {
  const modernKeywords = [
    "adidas", "nike", "puma", "reebok", "slides", "sneakers", "crocs", "yeezy",
    "amazon", "ebay", "walmart", "stock photo", "shutterstock", "getty", "istock",
    "commercial", "product", "retail"
  ];
  const lower = text.toLowerCase();
  return modernKeywords.some(keyword => lower.includes(keyword));
}

function hasAncientPlausibilitySignal(text: string): boolean {
  const signals = [
    "ancient", "greek", "roman", "classical", "antiquity", "archaeological",
    "museum", "collection", "excavated", "artifact", "antique", "bc", "bce",
    "hellenistic", "byzantine", "medieval"
  ];
  const lower = text.toLowerCase();
  return signals.some(signal => lower.includes(signal));
}

// Domain whitelist - only allow images from trusted open-access sources
const ALLOWED_DOMAINS = [
  "commons.wikimedia.org",
  "upload.wikimedia.org",
  "metmuseum.org",
  "artic.edu",
  "si.edu",
  "europeana.eu",
  "rijksmuseum.nl",
];

function isAllowedDomain(url: string): boolean {
  try {
    const urlObj = new URL(url);
    return ALLOWED_DOMAINS.some(domain => urlObj.hostname.includes(domain));
  } catch {
    return false;
  }
}

// Negative keywords for technology/modern objects - reject art/paintings
const NEGATIVE_KEYWORDS_TECH = [
  "painting", "portrait", "canvas", "oil on canvas", "watercolor",
  "drawing", "sketch", "illustration", "artwork", "art piece",
  "myth", "mythology", "allegory", "allegorical", "symbolic",
  "still life", "landscape", "genre scene", "historical painting",
  "portrait painting", "figure painting", "religious painting"
];

function containsNegativeKeywords(text: string, obj: any): boolean {
  const lower = text.toLowerCase();
  const objTitle = (obj.title || "").toLowerCase();
  const objTags = (obj.tags || []).join(" ").toLowerCase();
  
  // Check if object is tech/modern (not ancient)
  const isTech = !isAncient(obj) && (
    objTags.includes("software") || objTags.includes("ai") || 
    objTags.includes("digital") || objTags.includes("technology") ||
    objTags.includes("system") || objTags.includes("device") ||
    objTitle.includes("software") || objTitle.includes("system") ||
    objTitle.includes("ai") || objTitle.includes("digital")
  );
  
  if (isTech) {
    return NEGATIVE_KEYWORDS_TECH.some(keyword => lower.includes(keyword));
  }
  
  return false;
}

// Required keyword overlap - must have at least N keywords from object title
function hasRequiredKeywordOverlap(candidate: ImageCandidate, obj: any, minOverlap: number = 2): boolean {
  const objTitle = (obj.title || "").toLowerCase();
  const objWords = objTitle.split(/\s+/).filter((w: string) => w.length > 3);
  
  if (objWords.length === 0) return true; // Skip if no meaningful words
  
  const candidateText = `${candidate.title} ${candidate.metadata} ${candidate.categories.join(" ")}`.toLowerCase();
  const matchingWords = objWords.filter((w: string) => candidateText.includes(w));
  
  return matchingWords.length >= minOverlap;
}

// Query expansion
function buildQueryVariants(obj: any): string[] {
  const title = (obj.title || "").trim();
  const variants = new Set<string>();
  
  // Exact title
  variants.add(title);
  
  // Title without commas/year
  variants.add(title.replace(/,.*$/, "").replace(/\s*\([^)]*\)\s*/g, ""));
  
  // Title + "artifact"
  variants.add(`${title} artifact`);
  
  // For ancient items
  if (isAncient(obj)) {
    variants.add(`${title} ancient museum`);
    variants.add(`${title} archaeological`);
  }
  
  // Extract key terms
  const words = title.split(/\s+/).filter((w: string) => w.length > 3);
  if (words.length > 0) {
    variants.add(words.join(" "));
  }
  
  return Array.from(variants).filter(v => v.length > 2);
}

// Scoring function
function calculateScore(candidate: ImageCandidate, obj: any): number {
  let score = 0;
  const objTitle = (obj.title || "").toLowerCase();
  const candidateTitle = candidate.title.toLowerCase();
  const candidateMeta = (candidate.metadata + " " + candidate.categories.join(" ")).toLowerCase();
  
  // Source reliability (museum sources score higher)
  if (candidate.source === "The Met Museum") score += 40;
  else if (candidate.source === "Art Institute of Chicago") score += 40;
  else if (candidate.source === "Smithsonian") score += 35;
  else if (candidate.source === "Rijksmuseum") score += 35;
  else if (candidate.source === "Europeana") score += 30;
  else if (candidate.source === "Wikimedia Commons") score += 25;
  
  // Title keyword matching
  const objWords = objTitle.split(/\s+/).filter((w: string) => w.length > 3);
  const titleWords = candidateTitle.split(/\s+/).filter((w: string) => w.length > 3);
  const matchingWords = objWords.filter((w: string) => titleWords.includes(w));
  score += matchingWords.length * 15;
  
  // Metadata matching
  const metaWords = objWords.filter((w: string) => candidateMeta.includes(w));
  score += metaWords.length * 8;
  
  // License preference
  const license = candidate.license.toLowerCase();
  if (license.includes("public domain") || license.includes("cc0")) {
    score += 15;
  } else if (license.includes("cc by")) {
    score += 10;
  }
  
  // Institution preference
  if (candidate.institution) score += 5;
  
  return score;
}

// Validate candidate for ancient objects
function validateAncientCandidate(candidate: ImageCandidate, obj: any): { valid: boolean; reason?: string } {
  const combinedText = `${candidate.title} ${candidate.metadata} ${candidate.categories.join(" ")}`.toLowerCase();
  
  // Reject modern keywords
  if (containsModernKeywords(combinedText)) {
    return { valid: false, reason: "Contains modern keywords" };
  }
  
  // Require ancient plausibility signal
  if (!hasAncientPlausibilitySignal(combinedText)) {
    return { valid: false, reason: "Missing ancient plausibility signals" };
  }
  
  return { valid: true };
}

// Source 1: Wikimedia Commons
async function searchCommons(query: string): Promise<ImageCandidate[]> {
  try {
    const searchUrl = `https://commons.wikimedia.org/w/api.php?action=query&format=json&list=search&srnamespace=6&srlimit=10&srsearch=${encodeURIComponent(query + " filetype:bitmap")}`;
    const search = await rateLimitedFetch(searchUrl);
    if (!search.ok) return [];
    
    const data = await search.json();
    const hits = data.query?.search || [];
    const candidates: ImageCandidate[] = [];
    
    for (const hit of hits) {
      const fileName = hit.title;
      await sleep(100);
      
      const infoUrl = `https://commons.wikimedia.org/w/api.php?action=query&format=json&titles=${encodeURIComponent(fileName)}&prop=imageinfo|categories&iiprop=url|extmetadata&cllimit=10`;
      const infoResponse = await rateLimitedFetch(infoUrl);
      if (!infoResponse.ok) continue;
      
      const infoData = await infoResponse.json();
      const pages = infoData.query?.pages;
      const page = Object.values(pages || {})[0] as any;
      const imageInfo = page?.imageinfo?.[0];
      
      if (!imageInfo?.url) continue;
      
      const metadata = imageInfo.extmetadata || {};
      const license = metadata.LicenseShortName?.value || metadata.License?.value || "";
      const licenseLower = license.toLowerCase();
      
      // Only allow open licenses
      const allowedLicenses = ["cc by", "cc by-sa", "cc0", "public domain", "pd"];
      if (!allowedLicenses.some(allowed => licenseLower.includes(allowed))) continue;
      
      const categories = page.categories?.map((c: any) => c.title?.replace("Category:", "") || "") || [];
      
      candidates.push({
        url: imageInfo.url,
        source: "Wikimedia Commons",
        sourceUrl: `https://commons.wikimedia.org/wiki/${encodeURIComponent(fileName)}`,
        title: fileName.replace("File:", "").replace(/\.[^.]+$/, ""),
        institution: "Wikimedia Commons",
        creator: metadata.Artist?.value || metadata.Creator?.value || undefined,
        license: license,
        score: 0,
        metadata: `${metadata.Description?.value || ""} ${metadata.ObjectName?.value || ""}`.trim(),
        categories: categories,
        thumbnailUrl: imageInfo.thumburl || imageInfo.url,
      });
    }
    
    return candidates;
  } catch (e) {
    return [];
  }
}

// Source 2: The Met Museum
async function searchMetMuseum(query: string): Promise<ImageCandidate[]> {
  try {
    const searchUrl = `https://collectionapi.metmuseum.org/public/collection/v1/search?q=${encodeURIComponent(query)}&hasImages=true`;
    const search = await rateLimitedFetch(searchUrl);
    if (!search.ok) return [];
    
    const data = await search.json();
    const objectIds = (data.objectIDs || []).slice(0, 10);
    const candidates: ImageCandidate[] = [];
    
    for (const objectId of objectIds) {
      await sleep(100);
      const objectUrl = `https://collectionapi.metmuseum.org/public/collection/v1/objects/${objectId}`;
      const objResponse = await rateLimitedFetch(objectUrl);
      if (!objResponse.ok) continue;
      
      const obj = await objResponse.json();
      if (obj.isPublicDomain !== true) continue;
      if (!obj.primaryImage) continue;
      
      candidates.push({
        url: obj.primaryImage,
        source: "The Met Museum",
        sourceUrl: `https://www.metmuseum.org/art/collection/search/${objectId}`,
        title: obj.title || "",
        institution: "The Metropolitan Museum of Art",
        creator: obj.artistDisplayName || undefined,
        license: "Public Domain",
        score: 0,
        metadata: `${obj.culture || ""} ${obj.period || ""} ${obj.dynasty || ""} ${obj.medium || ""}`.trim(),
        categories: obj.tags?.map((t: any) => t.term || "") || [],
        thumbnailUrl: obj.primaryImageSmall || obj.primaryImage,
      });
    }
    
    return candidates;
  } catch (e) {
    return [];
  }
}

// Source 3: Art Institute of Chicago
async function searchArtInstitute(query: string): Promise<ImageCandidate[]> {
  try {
    const searchUrl = `https://api.artic.edu/api/v1/artworks/search?q=${encodeURIComponent(query)}&limit=10&fields=id,title,image_id,thumbnail,is_public_domain,artist_title`;
    const search = await rateLimitedFetch(searchUrl);
    if (!search.ok) return [];
    
    const data = await search.json();
    const artworks = data.data || [];
    const candidates: ImageCandidate[] = [];
    
    for (const artwork of artworks) {
      if (artwork.is_public_domain !== true) continue;
      if (!artwork.image_id) continue;
      
      const imageUrl = `https://www.artic.edu/iiif/2/${artwork.image_id}/full/843,/0/default.jpg`;
      
      candidates.push({
        url: imageUrl,
        source: "Art Institute of Chicago",
        sourceUrl: `https://www.artic.edu/artworks/${artwork.id}`,
        title: artwork.title || "",
        institution: "Art Institute of Chicago",
        creator: artwork.artist_title || undefined,
        license: "Public Domain",
        score: 0,
        metadata: "",
        categories: [],
        thumbnailUrl: artwork.thumbnail?.lqip || imageUrl,
      });
    }
    
    return candidates;
  } catch (e) {
    return [];
  }
}

// Source 4: Smithsonian (optional)
async function searchSmithsonian(query: string): Promise<ImageCandidate[]> {
  if (!SMITHSONIAN_API_KEY) return [];
  
  try {
    const searchUrl = `https://api.si.edu/openaccess/api/v1.0/search?api_key=${SMITHSONIAN_API_KEY}&q=${encodeURIComponent(query)}&rows=10`;
    const search = await rateLimitedFetch(searchUrl);
    if (!search.ok) return [];
    
    const data = await search.json();
    const results = data.response?.rows || [];
    const candidates: ImageCandidate[] = [];
    
    for (const result of results) {
      const media = result?.content?.descriptiveNonRepeating?.online_media?.media || [];
      const image = media.find((m: any) => m?.type === "Images");
      
      if (image?.content) {
        candidates.push({
          url: image.content,
          source: "Smithsonian",
          sourceUrl: result?.content?.descriptiveNonRepeating?.record_link || "",
          title: result?.content?.descriptiveNonRepeating?.title || "",
          institution: "Smithsonian Institution",
          license: "CC0",
          score: 0,
          metadata: result?.content?.indexedStructured?.topic || "",
          categories: [],
        });
      }
    }
    
    return candidates;
  } catch (e) {
    return [];
  }
}

// Source 5: Europeana (optional)
async function searchEuropeana(query: string): Promise<ImageCandidate[]> {
  if (!EUROPEANA_API_KEY) return [];
  
  try {
    const searchUrl = `https://api.europeana.eu/record/v2/search.json?wskey=${EUROPEANA_API_KEY}&query=${encodeURIComponent(query)}&media=true&rows=10`;
    const search = await rateLimitedFetch(searchUrl);
    if (!search.ok) return [];
    
    const data = await search.json();
    const items = data.items || [];
    const candidates: ImageCandidate[] = [];
    
    for (const item of items) {
      const edmIsShownBy = item?.edmIsShownBy?.[0];
      if (edmIsShownBy) {
        candidates.push({
          url: edmIsShownBy,
          source: "Europeana",
          sourceUrl: item?.guid || "",
          title: item?.title?.[0] || "",
          institution: item?.dataProvider?.[0] || "Europeana",
          license: item?.rights?.[0] || "Unknown",
          score: 0,
          metadata: item?.dcDescription?.[0] || "",
          categories: [],
        });
      }
    }
    
    return candidates;
  } catch (e) {
    return [];
  }
}

// Source 6: Rijksmuseum (optional)
async function searchRijksmuseum(query: string): Promise<ImageCandidate[]> {
  if (!RIJKSMUSEUM_API_KEY) return [];
  
  try {
    const searchUrl = `https://www.rijksmuseum.nl/api/en/collection?key=${RIJKSMUSEUM_API_KEY}&q=${encodeURIComponent(query)}&ps=10&imgonly=true`;
    const search = await rateLimitedFetch(searchUrl);
    if (!search.ok) return [];
    
    const data = await search.json();
    const artworks = data.artObjects || [];
    const candidates: ImageCandidate[] = [];
    
    for (const artwork of artworks) {
      if (artwork.webImage?.url) {
        candidates.push({
          url: artwork.webImage.url,
          source: "Rijksmuseum",
          sourceUrl: artwork.links?.web || "",
          title: artwork.title || "",
          institution: "Rijksmuseum",
          creator: artwork.principalOrFirstMaker || undefined,
          license: "Public Domain",
          score: 0,
          metadata: artwork.longTitle || "",
          categories: [],
          thumbnailUrl: artwork.headerImage?.url || artwork.webImage.url,
        });
      }
    }
    
    return candidates;
  } catch (e) {
    return [];
  }
}

// Find best image for object
async function findImageForObject(obj: any): Promise<{ candidate: ImageCandidate | null; status: "success" | "suspicious" | "failed" }> {
  // Skip speculative objects
  if (isSpeculative(obj)) {
    return { candidate: null, status: "failed" };
  }
  
  const isAncientObj = isAncient(obj);
  const queries = buildQueryVariants(obj);
  
  const allCandidates: ImageCandidate[] = [];
  
  // Search all sources
  for (const query of queries) {
    if (query.length < 3) continue;
    
    const [commons, met, artInst, smith, europeana, rijks] = await Promise.all([
      searchCommons(query),
      searchMetMuseum(query),
      searchArtInstitute(query),
      searchSmithsonian(query),
      searchEuropeana(query),
      searchRijksmuseum(query),
    ]);
    
    allCandidates.push(...commons, ...met, ...artInst, ...smith, ...europeana, ...rijks);
  }
  
  // Score and filter candidates with strict validation
  const scoredCandidates = allCandidates
    .map(c => ({ ...c, score: calculateScore(c, obj) }))
    .filter(c => {
      // Domain whitelist check
      if (!isAllowedDomain(c.url)) {
        return false;
      }
      
      // Ancient object validation
      if (isAncientObj) {
        const validation = validateAncientCandidate(c, obj);
        if (!validation.valid) return false;
      }
      
      // Reject negative keywords for tech objects
      const combinedText = `${c.title} ${c.metadata} ${c.categories.join(" ")}`;
      if (containsNegativeKeywords(combinedText, obj)) {
        return false;
      }
      
      // Required keyword overlap
      if (!hasRequiredKeywordOverlap(c, obj, 2)) {
        return false;
      }
      
      return true;
    })
    .sort((a, b) => b.score - a.score);
  
  if (scoredCandidates.length === 0) {
    return { candidate: null, status: "failed" };
  }
  
  const topCandidate = scoredCandidates[0];
  const threshold = 50; // Increased minimum score threshold for stricter matching
  
  if (topCandidate.score < threshold) {
    return { candidate: topCandidate, status: "suspicious" };
  }
  
  // Final validation check even if score is high
  const combinedText = `${topCandidate.title} ${topCandidate.metadata}`.toLowerCase();
  
  // Reject if contains negative keywords
  if (containsNegativeKeywords(combinedText, obj)) {
    return { candidate: topCandidate, status: "suspicious" };
  }
  
  // Double-check keyword overlap
  if (!hasRequiredKeywordOverlap(topCandidate, obj, 2)) {
    return { candidate: topCandidate, status: "suspicious" };
  }
  
  return { candidate: topCandidate, status: "success" };
}

// Download image with better error handling
async function downloadImage(url: string, slug: string): Promise<{ success: boolean; path?: string; error?: string }> {
  try {
    const response = await rateLimitedFetch(url);
    if (!response.ok) {
      return { success: false, error: `HTTP ${response.status}: ${response.statusText}` };
    }
    
    const contentType = response.headers.get("content-type") || "";
    if (!contentType.includes("image/")) {
      return { success: false, error: "Response is not an image" };
    }
    
    let ext = ".jpg";
    if (contentType.includes("png")) ext = ".png";
    else if (contentType.includes("webp")) ext = ".webp";
    else if (contentType.includes("gif")) ext = ".gif";
    
    const buffer = await response.arrayBuffer();
    if (buffer.byteLength === 0) {
      return { success: false, error: "Empty image file" };
    }
    
    // Validate minimum image size (at least 1KB)
    if (buffer.byteLength < 1024) {
      return { success: false, error: "Image file too small, likely invalid" };
    }
    
    const filename = `${slug}${ext}`;
    const filepath = path.join(IMAGES_DIR, filename);
    
    fs.writeFileSync(filepath, Buffer.from(buffer));
    
    // Verify file was written
    if (!fs.existsSync(filepath)) {
      return { success: false, error: "File write failed" };
    }
    
    return { success: true, path: `objects/images/${filename}` };
  } catch (e: any) {
    return { success: false, error: e.message || "Unknown error" };
  }
}

// Update objects.ts
function updateObjectsFile(updates: Map<string, { imagePath: string; attribution: Attribution; imageKind?: string; imageStatus?: string }>): void {
  let content = fs.readFileSync(DATA_FILE, "utf8");
  
  for (const [slug, data] of Array.from(updates.entries())) {
    const slugPattern = `slug:\\s*"${slug.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}"`;
    const objectRegex = new RegExp(
      `(\\{[^}]*${slugPattern}[^}]*media:\\s*\\{[^}]*)(imagePath:\\s*"[^"]*")?([^}]*\\})`,
      "s"
    );
    
    content = content.replace(objectRegex, (match, prefix, existingPath, suffix) => {
      const imagePathLine = `imagePath: "${data.imagePath.replace(/"/g, '\\"')}",`;
      
      // Build attribution object string
      const attr = data.attribution;
      const attrParts: string[] = [];
      if (attr.title) attrParts.push(`title: "${attr.title.replace(/"/g, '\\"')}"`);
      if (attr.institution) attrParts.push(`institution: "${attr.institution.replace(/"/g, '\\"')}"`);
      if (attr.creator) attrParts.push(`creator: "${attr.creator.replace(/"/g, '\\"')}"`);
      if (attr.license) attrParts.push(`license: "${attr.license.replace(/"/g, '\\"')}"`);
      if (attr.sourceUrl) attrParts.push(`sourceUrl: "${attr.sourceUrl.replace(/"/g, '\\"')}"`);
      
      const attributionLine = attrParts.length > 0 
        ? `attribution: { ${attrParts.join(", ")} },`
        : "";
      
      // Add imageKind and imageStatus
      const imageKindLine = data.imageKind ? `imageKind: "${data.imageKind}",` : "";
      const imageStatusLine = data.imageStatus ? `imageStatus: "${data.imageStatus}",` : "";
      
      const additionalLines: string[] = [];
      if (attributionLine) additionalLines.push(attributionLine);
      if (imageKindLine) additionalLines.push(imageKindLine);
      if (imageStatusLine) additionalLines.push(imageStatusLine);
      
      if (existingPath) {
        const newContent = prefix + imagePathLine;
        if (additionalLines.length > 0) {
          return newContent + "\n      " + additionalLines.join("\n      ") + suffix.replace(/imagePath:[^,}]+/, "");
        }
        return newContent + suffix.replace(/imagePath:[^,}]+/, "");
    } else {
        const newContent = prefix + imagePathLine;
        if (additionalLines.length > 0) {
          return newContent + "\n      " + additionalLines.join("\n      ") + suffix;
        }
        return newContent + suffix;
      }
    });
  }
  
  fs.writeFileSync(DATA_FILE, content);
}

// Generate HTML report
function generateHTMLReport(): string {
  const successCount = reportEntries.filter(e => e.success).length;
  const failCount = reportEntries.filter(e => !e.success).length;
  const suspiciousCount = suspiciousEntries.length;
  const failedCount = failedEntries.length;
  
  return `<!DOCTYPE html>
<html>
<head>
  <title>Image Fetch Report</title>
  <style>
    body { font-family: system-ui, sans-serif; margin: 40px; background: #1a1a1a; color: #e0e0e0; }
    h1 { color: #fff; }
    .stats { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; margin: 20px 0; }
    .stat { background: #2a2a2a; padding: 20px; border-radius: 8px; }
    .stat-number { font-size: 2em; font-weight: bold; }
    .success { color: #4ade80; }
    .fail { color: #f87171; }
    .suspicious { color: #fbbf24; }
    table { width: 100%; border-collapse: collapse; margin: 20px 0; background: #2a2a2a; }
    th, td { padding: 12px; text-align: left; border-bottom: 1px solid #404040; }
    th { background: #333; font-weight: 600; }
    .success-row { background: #1a3a1a; }
    .fail-row { background: #3a1a1a; }
    .thumbnail { width: 80px; height: 60px; object-fit: cover; border-radius: 4px; }
    a { color: #60a5fa; }
  </style>
</head>
<body>
  <h1>Image Fetch Report</h1>
  <div class="stats">
    <div class="stat">
      <div class="stat-number success">${successCount}</div>
      <div>Success</div>
    </div>
    <div class="stat">
      <div class="stat-number fail">${failCount}</div>
      <div>Failed</div>
    </div>
    <div class="stat">
      <div class="stat-number suspicious">${suspiciousCount}</div>
      <div>Suspicious</div>
    </div>
    <div class="stat">
      <div class="stat-number">${reportEntries.length}</div>
      <div>Total</div>
    </div>
  </div>
  
  <h2>Results</h2>
  <table>
    <thead>
      <tr>
        <th>Thumbnail</th>
        <th>Object</th>
        <th>Status</th>
        <th>Source</th>
        <th>Institution</th>
        <th>Score</th>
        <th>License</th>
        <th>Link</th>
      </tr>
    </thead>
    <tbody>
      ${reportEntries.map(e => `
        <tr class="${e.success ? "success-row" : "fail-row"}">
          <td>${e.thumbnailUrl ? `<img src="${e.thumbnailUrl}" class="thumbnail" alt="" />` : "-"}</td>
          <td><strong>${e.title}</strong><br/><small>${e.slug}</small></td>
          <td>${e.success ? "✓" : "✗"}</td>
          <td>${e.chosenSource || "-"}</td>
          <td>${e.institution || "-"}</td>
          <td>${e.score || "-"}</td>
          <td>${e.license || "-"}</td>
          <td>${e.sourceUrl ? `<a href="${e.sourceUrl}" target="_blank">View</a>` : "-"}</td>
        </tr>
      `).join("")}
    </tbody>
  </table>
</body>
</html>`;
}

// Review mode
function reviewMode() {
  console.log("\n=== Review Mode ===\n");
  
  if (suspiciousEntries.length > 0) {
    console.log("Suspicious Objects:");
    suspiciousEntries.forEach((entry, i) => {
      console.log(`${i + 1}. ${entry.title} (${entry.slug})`);
      console.log(`   Reason: ${entry.reason}`);
      if (entry.candidate) {
        console.log(`   Candidate: ${entry.candidate.source} - ${entry.candidate.title} (score: ${entry.candidate.score})`);
      }
      console.log();
    });
  }
  
  if (failedEntries.length > 0) {
    console.log("Failed Objects:");
    failedEntries.forEach((entry, i) => {
      console.log(`${i + 1}. ${entry.title} (${entry.slug})`);
      console.log(`   Reason: ${entry.reason}`);
      console.log();
    });
  }
  
  console.log("\nTo add manual overrides, edit scripts/image-overrides.json");
  console.log("Format: { \"slug\": \"image-url-or-source-url\" }");
  console.log("\nOpening report.html...");
  
  // Open report.html (macOS)
  const reportPath = path.join(REPORTS_DIR, "report.html");
  if (fs.existsSync(reportPath)) {
    const { exec } = require("child_process");
    exec(`open "${reportPath}"`);
  }
}

// Process overrides
async function processOverrides(): Promise<Map<string, string>> {
  const overrides = new Map<string, string>();
  
  if (!fs.existsSync(OVERRIDES_FILE)) return overrides;
  
  try {
    const overrideData = JSON.parse(fs.readFileSync(OVERRIDES_FILE, "utf8"));
    for (const [slug, url] of Object.entries(overrideData)) {
      overrides.set(slug, url as string);
    }
  } catch (e) {
    console.error("Error reading overrides file:", e);
  }
  
  return overrides;
}

// Main execution
async function main() {
  if (REVIEW) {
    // Load existing reports
    const reportPath = path.join(REPORTS_DIR, "report.json");
    if (fs.existsSync(reportPath)) {
      const reportData = JSON.parse(fs.readFileSync(reportPath, "utf8"));
      reportEntries.push(...(reportData.entries || []));
    }
    
    const suspiciousPath = path.join(REPORTS_DIR, "suspicious.json");
    if (fs.existsSync(suspiciousPath)) {
      const suspiciousData = JSON.parse(fs.readFileSync(suspiciousPath, "utf8"));
      suspiciousEntries.push(...suspiciousData);
    }
    
    const failedPath = path.join(REPORTS_DIR, "failed.json");
    if (fs.existsSync(failedPath)) {
      const failedData = JSON.parse(fs.readFileSync(failedPath, "utf8"));
      failedEntries.push(...failedData);
    }
    
    reviewMode();
    return;
  }
  
  console.log("Starting museum-grade image fetch pipeline...");
  console.log(`Flags: force=${FORCE}, only-missing=${ONLY_MISSING}, update-data=${UPDATE_DATA}, limit=${LIMIT}`);
  
  const objectsToProcess = OBJECTS.filter(shouldProcess).slice(0, LIMIT);
  console.log(`Processing ${objectsToProcess.length} objects...\n`);
  
  const updates = new Map<string, { imagePath: string; attribution: Attribution; imageKind?: string; imageStatus?: string }>();
  const overrides = await processOverrides();
  
  for (let i = 0; i < objectsToProcess.length; i++) {
    const obj = objectsToProcess[i];
    console.log(`[${i + 1}/${objectsToProcess.length}] ${obj.title} (${obj.slug})`);
    
    // Check for override
    if (overrides.has(obj.slug)) {
      const overrideUrl = overrides.get(obj.slug)!;
      console.log(`  🔧 Using override: ${overrideUrl}`);
      const downloadResult = await downloadImage(overrideUrl, obj.slug);
      if (downloadResult.success && downloadResult.path) {
        updates.set(obj.slug, {
          imagePath: downloadResult.path,
          attribution: {
            sourceUrl: overrideUrl,
            institution: "Manual Override",
          },
        });
        reportEntries.push({
          slug: obj.slug,
          title: obj.title,
          dateLabel: obj.dateLabel,
          success: true,
          chosenSource: "Manual Override",
          sourceUrl: overrideUrl,
        });
      } else {
        console.log(`  ❌ Override download failed: ${downloadResult.error}`);
      }
      continue;
    }

    // Check if speculative - mark as concept with placeholder
    if (isSpeculative(obj)) {
      console.log("  ⏭️  Marking as concept with placeholder: speculative/future object");
      // Don't skip - mark with placeholder and concept kind
      updates.set(obj.slug, {
        imagePath: `objects/placeholders/${obj.slug}.svg`,
        attribution: {},
        imageKind: "concept",
        imageStatus: "placeholder",
      });
      reportEntries.push({
        slug: obj.slug,
        title: obj.title,
        dateLabel: obj.dateLabel,
        success: false,
        reason: "Speculative/future object - using placeholder",
      });
      continue;
    }

    // Find image
    const { candidate, status } = await findImageForObject(obj);
    
    if (!candidate) {
      console.log("  ❌ No valid candidate found");
      failedEntries.push({
        slug: obj.slug,
        title: obj.title,
        dateLabel: obj.dateLabel,
        reason: "No valid candidate found",
      });
      reportEntries.push({
        slug: obj.slug,
        title: obj.title,
        dateLabel: obj.dateLabel,
        success: false,
        reason: "No valid candidate found",
      });
      continue;
    }
    
    if (status === "suspicious") {
      console.log(`  ⚠️  Suspicious candidate: ${candidate.source} (score: ${candidate.score})`);
      suspiciousEntries.push({
        slug: obj.slug,
        title: obj.title,
        dateLabel: obj.dateLabel,
        reason: "Low score or conflict signals",
        candidate: {
          source: candidate.source,
          title: candidate.title,
          score: candidate.score,
        },
      });
      // Still download but mark as suspicious
    } else {
      console.log(`  ✓ Found: ${candidate.source} (score: ${candidate.score})`);
    }
    
    // Download
    const downloadResult = await downloadImage(candidate.url, obj.slug);
    
    if (!downloadResult.success || !downloadResult.path) {
      console.log(`  ❌ Download failed: ${downloadResult.error || "Unknown error"}`);
      failedEntries.push({
        slug: obj.slug,
        title: obj.title,
        dateLabel: obj.dateLabel,
        reason: downloadResult.error || "Download failed",
      });
      continue;
    }

    console.log(`  ✓ Downloaded: ${downloadResult.path}`);
    
    // Determine imageKind and imageStatus
    const isSpeculativeObj = isSpeculative(obj);
    const imageKind = isSpeculativeObj ? "concept" : "artifact";
    const imageStatus = status === "suspicious" ? "needsReview" : "approved";
    
    updates.set(obj.slug, {
      imagePath: downloadResult.path,
      attribution: {
        title: candidate.title,
        institution: candidate.institution,
        creator: candidate.creator,
        license: candidate.license,
        sourceUrl: candidate.sourceUrl,
      },
      imageKind,
      imageStatus,
    });
    
    reportEntries.push({
      slug: obj.slug,
      title: obj.title,
      dateLabel: obj.dateLabel,
      success: status === "success",
      chosenSource: candidate.source,
      institution: candidate.institution,
      score: candidate.score,
      license: candidate.license,
      sourceUrl: candidate.sourceUrl,
      thumbnailUrl: candidate.thumbnailUrl,
      reason: status === "suspicious" ? "Suspicious candidate" : undefined,
    });
  }
  
  // Update data file
  if (updates.size > 0) {
    if (UPDATE_DATA) {
      console.log(`\nUpdating ${updates.size} objects in ${DATA_FILE}...`);
      updateObjectsFile(updates);
      } else {
      console.log(`\n[DRY RUN] Would update ${updates.size} objects in ${DATA_FILE}`);
      console.log("Run with --update-data to apply changes");
    }
  }
  
  // Write reports
  const reportData = {
    timestamp: new Date().toISOString(),
    total: objectsToProcess.length,
    success: reportEntries.filter(e => e.success).length,
    failed: failedEntries.length,
    suspicious: suspiciousEntries.length,
    entries: reportEntries,
  };
  
  fs.writeFileSync(
    path.join(REPORTS_DIR, "report.json"),
    JSON.stringify(reportData, null, 2)
  );
  
  fs.writeFileSync(
    path.join(REPORTS_DIR, "suspicious.json"),
    JSON.stringify(suspiciousEntries, null, 2)
  );
  
  fs.writeFileSync(
    path.join(REPORTS_DIR, "failed.json"),
    JSON.stringify(failedEntries, null, 2)
  );
  
  fs.writeFileSync(
    path.join(REPORTS_DIR, "report.html"),
    generateHTMLReport()
  );

  console.log(`\n✅ Complete!`);
  console.log(`   Success: ${reportData.success}`);
  console.log(`   Failed: ${reportData.failed}`);
  console.log(`   Suspicious: ${reportData.suspicious}`);
  console.log(`\nReports:`);
  console.log(`   ${path.join(REPORTS_DIR, "report.json")}`);
  console.log(`   ${path.join(REPORTS_DIR, "report.html")}`);
  console.log(`   ${path.join(REPORTS_DIR, "suspicious.json")}`);
  console.log(`   ${path.join(REPORTS_DIR, "failed.json")}`);
}

main().catch((e) => {
  console.error("Fatal error:", e);
  process.exit(1);
});
