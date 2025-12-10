import fs from "fs";
import path from "path";
import { OBJECTS } from "../src/data/objects";

const publicDir = path.join(process.cwd(), "public");
const objectsDir = path.join(publicDir, "objects");
const placeholdersDir = path.join(objectsDir, "placeholders");

// Ensure directories exist
if (!fs.existsSync(objectsDir)) {
  fs.mkdirSync(objectsDir, { recursive: true });
}
if (!fs.existsSync(placeholdersDir)) {
  fs.mkdirSync(placeholdersDir, { recursive: true });
}

function generatePlaceholderSVG(
  title: string,
  dateLabel: string,
  slug: string
): string {
  // Clean title for display (no dashes)
  const displayTitle = title.replace(/-/g, " ");
  const shortTitle = displayTitle.length > 40 ? displayTitle.substring(0, 37) + "..." : displayTitle;

  return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="800" height="600" xmlns="http://www.w3.org/2000/svg">
  <!-- Dark background -->
  <rect width="800" height="600" fill="#0a0a0a"/>
  
  <!-- Frame border -->
  <rect x="20" y="20" width="760" height="560" fill="none" stroke="rgba(255,255,255,0.1)" stroke-width="2"/>
  
  <!-- Inner frame -->
  <rect x="40" y="40" width="720" height="520" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.05)" stroke-width="1"/>
  
  <!-- Title -->
  <text x="400" y="200" font-family="system-ui, -apple-system, sans-serif" font-size="32" font-weight="600" fill="rgba(255,255,255,0.9)" text-anchor="middle">${shortTitle}</text>
  
  <!-- Date -->
  <text x="400" y="250" font-family="system-ui, -apple-system, sans-serif" font-size="18" fill="rgba(255,255,255,0.6)" text-anchor="middle">${dateLabel}</text>
  
  <!-- Digital surrogate label -->
  <text x="400" y="450" font-family="system-ui, -apple-system, sans-serif" font-size="14" fill="rgba(255,255,255,0.4)" text-anchor="middle">Digital surrogate</text>
  
  <!-- Decorative corner elements -->
  <circle cx="60" cy="60" r="3" fill="rgba(255,255,255,0.2)"/>
  <circle cx="740" cy="60" r="3" fill="rgba(255,255,255,0.2)"/>
  <circle cx="60" cy="540" r="3" fill="rgba(255,255,255,0.2)"/>
  <circle cx="740" cy="540" r="3" fill="rgba(255,255,255,0.2)"/>
</svg>`;
}

console.log("Checking object images...\n");

let created = 0;
let missing = 0;

OBJECTS.forEach((obj) => {
  const imagePath = obj.media?.imagePath;
  
  if (!imagePath) {
    missing++;
    console.log(`⚠️  Missing imagePath for: ${obj.title}`);
    return;
  }

  const fullPath = path.join(publicDir, imagePath);
  const placeholderPath = path.join(placeholdersDir, `${obj.slug}.svg`);

  // Check if image exists
  if (!fs.existsSync(fullPath)) {
    // Generate placeholder if it doesn't exist
    if (!fs.existsSync(placeholderPath)) {
      const svg = generatePlaceholderSVG(obj.title, obj.dateLabel, obj.slug);
      fs.writeFileSync(placeholderPath, svg);
      created++;
      console.log(`✓ Created placeholder for: ${obj.title}`);
    } else {
      console.log(`ℹ️  Placeholder already exists for: ${obj.title}`);
    }
  } else {
    console.log(`✓ Image exists: ${obj.title}`);
  }
});

console.log(`\n✅ Complete!`);
console.log(`   Created ${created} placeholder(s)`);
console.log(`   ${missing} object(s) missing imagePath in data`);








