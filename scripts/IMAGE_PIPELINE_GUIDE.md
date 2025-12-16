# Museum-Grade Image Pipeline - Complete Guide

## Overview

This pipeline finds period-accurate images for museum objects from reliable sources:
- Wikimedia Commons API
- The Metropolitan Museum of Art Open Access API
- Art Institute of Chicago API
- Smithsonian Open Access API (optional, requires `SMITHSONIAN_API_KEY`)
- Europeana API (optional, requires `EUROPEANA_API_KEY`)
- Rijksmuseum API (optional, requires `RIJKSMUSEUM_API_KEY`)

## Features

✅ **Query Expansion**: Generates multiple search variants per object
✅ **Entity Constraints**: Requires ancient plausibility signals for ancient objects
✅ **Modern Keyword Rejection**: Rejects modern brand keywords for ancient artifacts
✅ **Scoring System**: Museum sources score higher, keyword matching increases score
✅ **Provenance Preference**: Prefers museum/open-access items
✅ **Review Mode**: Lists suspicious/failed objects for manual review
✅ **Manual Overrides**: Support via `scripts/image-overrides.json`
✅ **Comprehensive Reports**: HTML with thumbnails, JSON for programmatic access
✅ **Automatic Updates**: Updates `objects.ts` with image paths and attribution

## Quick Start

### 1. Fetch images for missing objects (recommended first run)

```bash
cd /Users/armaanagarwal/Desktop/performance-museum
npm run images:fetch
```

Or manually:
```bash
npx tsx scripts/fetchObjectImages.ts --only-missing --update-data
```

### 2. Review suspicious/failed objects

```bash
npm run images:review
```

Or manually:
```bash
npx tsx scripts/fetchObjectImages.ts --review
```

### 3. Test with first 5 objects

```bash
npx tsx scripts/fetchObjectImages.ts --only-missing --limit=5
```

### 4. Force re-fetch all images

```bash
npx tsx scripts/fetchObjectImages.ts --force --update-data
```

## Manual Overrides

If an object fails or you want to use a specific image:

1. Edit `scripts/image-overrides.json`:
```json
{
  "ancient-sandals": "https://commons.wikimedia.org/wiki/File:Ancient_sandals.jpg",
  "greek-discus": "https://www.metmuseum.org/art/collection/search/123456"
}
```

2. Run the fetch script again - it will use overrides automatically

## Optional API Keys

For better results, set these environment variables:

```bash
export SMITHSONIAN_API_KEY="your-key"
export EUROPEANA_API_KEY="your-key"
export RIJKSMUSEUM_API_KEY="your-key"

npm run images:fetch
```

## Verify Results

### Check HTML report
```bash
open reports/image-fetch/report.html
```

### Check JSON reports
```bash
cat reports/image-fetch/report.json | jq '.success, .failed, .suspicious'
cat reports/image-fetch/suspicious.json
cat reports/image-fetch/failed.json
```

### Count downloaded images
```bash
ls -1 public/objects/images/*.{jpg,png,webp} 2>/dev/null | wc -l
```

### List downloaded images
```bash
ls -lh public/objects/images/ | head -20
```

## View on Frontend

After fetching images:

```bash
npm run dev
```

Then visit any object page, e.g.:
- `http://localhost:3000/objects/ancient-sandals`
- `http://localhost:3000/objects/greek-discus`

The object pages will:
- Show real images if available (preferred over placeholders)
- Display "Image Credit" expandable section with full attribution
- Show "Credit" button on images for quick attribution view

## How It Works

### Query Expansion
For each object, generates multiple search queries:
- Exact title
- Title without commas/years
- Title + "artifact"
- For ancient items: title + "ancient" + "museum"
- Key terms extraction

### Entity Constraints (Ancient Objects)
For objects with BCE dates or year < 500:
- **Rejects** candidates with modern keywords (adidas, nike, sneakers, etc.)
- **Requires** ancient plausibility signals (ancient, greek, roman, archaeological, museum, etc.)

### Scoring System
- Museum sources: +40 points (Met, Art Institute)
- Smithsonian/Rijksmuseum: +35 points
- Europeana: +30 points
- Wikimedia Commons: +25 points
- Title keyword matching: +15 per match
- Metadata matching: +8 per match
- Public domain/CC0: +15 points
- CC BY: +10 points
- Institution present: +5 points

**Threshold**: Minimum score of 30 required for success

### Output Files

1. **`public/objects/images/<slug>.<ext>`**: Downloaded images (stable filenames, no hashes)
2. **`reports/image-fetch/report.json`**: Full audit data
3. **`reports/image-fetch/report.html`**: Visual report with thumbnails
4. **`reports/image-fetch/suspicious.json`**: Objects with low scores or conflicts
5. **`reports/image-fetch/failed.json`**: Objects with no valid candidates

### Data Updates

The script updates `src/data/objects.ts` with:
- `media.imagePath`: Path to downloaded image
- `media.attribution`: Object with title, institution, creator, license, sourceUrl

## Troubleshooting

### Low success rate
- Check `reports/image-fetch/suspicious.json` for rejected candidates
- Review `reports/image-fetch/failed.json` for objects with no matches
- Add manual overrides for consistently failing objects
- Consider adding more query variants in `buildQueryVariants()`

### Images not showing on frontend
- Clear Next.js cache: `rm -rf .next`
- Restart dev server
- Verify `media.imagePath` exists in `objects.ts`
- Check that image file exists in `public/objects/images/`

### TypeScript errors in objects.ts
The script may encounter syntax errors if `objects.ts` has malformed entries. Fix syntax issues first, then re-run.

## Expected Results

After running the pipeline:
- **70-90% success rate** for objects with real images
- **All ancient objects** have period-accurate images (no modern brands)
- **Full attribution** stored for each image
- **HTML report** shows thumbnails and source links
- **Suspicious objects** flagged for review

## Files Modified/Created

- ✅ `scripts/fetchObjectImages.ts` - Main pipeline script
- ✅ `scripts/image-overrides.json` - Manual override template
- ✅ `src/data/types.ts` - Added `attribution` field to media
- ✅ `src/components/ui/ObjectImage.tsx` - Updated to show attribution
- ✅ `src/app/objects/[slug]/ObjectDetailContent.tsx` - Added "Image Credit" section
- ✅ `package.json` - Added `images:fetch` and `images:review` scripts








