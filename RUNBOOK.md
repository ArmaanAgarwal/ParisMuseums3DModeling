# Museum Content Consistency Runbook

## Commands to Run

### 1. Audit Museum Content
```bash
npm run audit
```
or
```bash
npx tsx scripts/auditMuseumContent.ts
```

**What to expect:**
- Checks all references between Objects, Exhibits, Zones, and Tour
- Validates image status and kind
- Reports any inconsistencies
- Exits with code 1 if errors found, 0 if only warnings

**Output:**
- Console: Summary of errors and warnings
- `reports/content-audit.json`: Detailed JSON report

### 2. Fetch Images for Objects
```bash
npm run images:fetch
```
or
```bash
npx tsx scripts/fetchObjectImages.ts --only-missing --update-data
```

**What to expect:**
- Processes objects missing images or with placeholders
- Searches only whitelisted domains (Wikimedia Commons, Met Museum, Art Institute, etc.)
- Applies strict validation (rejects paintings for tech objects, requires keyword overlap)
- Downloads images to `public/objects/images/`
- Updates `src/data/objects.ts` with imagePath, imageKind, imageStatus, and attribution
- Marks suspicious/failed objects for review

**Output:**
- Console: Progress for each object
- `reports/image-fetch/report.json`: Detailed JSON report
- `reports/image-fetch/report.html`: HTML report with thumbnails (saved to this location)
- `reports/image-fetch/suspicious.json`: Objects needing manual review
- `reports/image-fetch/failed.json`: Objects with no matches

### 3. Review Suspicious Images
```bash
npm run images:review
```
or
```bash
npx tsx scripts/fetchObjectImages.ts --review
```

**What to expect:**
- Lists all suspicious and failed objects
- Opens HTML report in browser
- Allows you to add manual overrides to `scripts/image-overrides.json`

### 4. Start Dev Server
```bash
npm run dev
```

**What to expect:**
- Starts Next.js dev server on http://localhost:3000
- All routes should work
- Object pages show images with proper labels
- Tour covers all exhibits and zones

## Report Locations

- **Content Audit:** `reports/content-audit.json`
- **Image Fetch Report:** `reports/image-fetch/report.html` (opens automatically in review mode)
- **Suspicious Images:** `reports/image-fetch/suspicious.json`
- **Failed Images:** `reports/image-fetch/failed.json`

## Key Constants

- **PREVIEW_OBJECT_COUNT:** 4 (used consistently across all previews)
- **Image Status Values:** "approved", "needsReview", "placeholder"
- **Image Kind Values:** "artifact", "representative", "concept"

## Important Notes

- AI Performance Coach is set to placeholder with needsReview status
- Future/speculative objects (year >= 2025) use "concept" imageKind
- All images must pass strict validation (domain whitelist, keyword overlap, negative keyword filters)
- Tour only references existing objects/exhibits/zones (validated by audit script)
- All exhibit.objectIds must match object.exhibitId (single source of truth)

