# Image Pipeline Documentation

## Overview

The image pipeline automatically finds and downloads images for museum objects from multiple open sources. It searches in this order:

1. **Manual overrides** (`src/data/imageOverrides.ts`)
2. **Wikimedia Commons / Wikidata** (P18 property)
3. **Wikipedia** page images
4. **Wikimedia Commons** file search
5. **The Met Museum** Collection API
6. **Smithsonian Open Access** API (optional, requires `SMITHSONIAN_API_KEY`)
7. **Europeana** API (optional, requires `EUROPEANA_API_KEY`)
8. **Representative image fallback** (keyword-based generic images)

## Why the Old Approach Failed

The previous script only downloaded ~6 images because:

1. **Limited query variants**: It didn't generate enough search variations for generic objects
2. **Single source focus**: It primarily relied on Wikidata P18, which fails for conceptual/prototype objects
3. **No fallback strategy**: When exact matches failed, it gave up instead of finding representative images
4. **Poor handling of generic terms**: Objects like "Predictive Performance Analytics" or "Exoskeleton Prototype" don't match specific Wikidata entities

## How This Pipeline Fixes It

1. **Multiple query variants**: Generates 5-10 search variations per object (removes years, generic terms, etc.)
2. **Multiple sources**: Tries 7+ different APIs in order
3. **Representative images**: For conceptual objects, finds keyword-based representative images (e.g., "force plate" for force measurement systems)
4. **Better query generation**: Removes "system", "prototype", "dashboard" and other generic terms
5. **Rate limiting**: Prevents API blocking with proper delays and retries
6. **Attribution tracking**: Stores source, license, author for each image

## Installation

No additional packages needed. Uses Node.js built-in `fetch` (Node 18+).

## Usage

### Basic: Download images for missing objects only

```bash
npx tsx scripts/fetchObjectImages.ts --only-missing --update-data
```

### Test run (dry-run, no downloads)

```bash
npx tsx scripts/fetchObjectImages.ts --dry-run --limit=10
```

### Force re-download all images

```bash
npx tsx scripts/fetchObjectImages.ts --force --overwrite --update-data
```

### Process first 20 objects only

```bash
npx tsx scripts/fetchObjectImages.ts --limit=20 --update-data
```

### With optional API keys

```bash
export SMITHSONIAN_API_KEY="your-key-here"
export EUROPEANA_API_KEY="your-key-here"
npx tsx scripts/fetchObjectImages.ts --only-missing --update-data
```

## CLI Flags

- `--force`: Re-download even if image exists
- `--overwrite`: Overwrite existing images
- `--update-data`: Update `src/data/objects.ts` with new image paths and metadata
- `--only-missing`: Only process objects without images or with placeholders
- `--dry-run`: Don't download, just show what would be done
- `--limit=NUMBER`: Process only first N objects

## Manual Overrides

Edit `src/data/imageOverrides.ts` to manually specify images for specific objects:

```typescript
export const IMAGE_OVERRIDES: Record<string, { url: string; source: string; license?: string; author?: string }> = {
  "ancient-sandals": {
    url: "https://commons.wikimedia.org/wiki/File:Ancient_sandals.jpg",
    source: "Wikimedia Commons",
    license: "CC BY-SA 4.0",
    author: "Museum Name"
  }
};
```

## Output

### Images
Downloaded to: `public/objects/images/<slug>.<ext>`

### Reports
- `reports/image-audit.json`: Full audit with all metadata
- `reports/image-audit.csv`: Spreadsheet-friendly format

### Data Updates
If `--update-data` is used, `src/data/objects.ts` is updated with:
- `media.imagePath`: Path to downloaded image
- `media.imageCredit`: Attribution credit
- `media.imageLicense`: License information
- `media.imageSource`: Source name (e.g., "Wikimedia Commons")
- `media.imageSourceUrl`: Link to original source
- `media.imageAuthor`: Author/creator if available
- `media.imageKind`: "artifact-photo" or "representative"

## Representative Images

For conceptual objects (e.g., "Predictive Performance Analytics", "Exoskeleton Prototype"), the pipeline will find representative images based on keywords. These are marked with `imageKind: "representative"` and will show a "Representative image" label on the frontend.

## Frontend Display

The `ObjectImage` component automatically:
- Shows the image if it exists
- Falls back to placeholder if missing
- Displays "Representative image" badge for representative images
- Shows attribution on click (Credit button)
- Links to source URL if available

## Verification

After running the pipeline:

1. Check the report:
   ```bash
   cat reports/image-audit.csv
   ```

2. Verify images were downloaded:
   ```bash
   ls -la public/objects/images/ | head -20
   ```

3. Check success rate in report:
   ```bash
   grep "successRate" reports/image-audit.json
   ```

4. Test on frontend:
   ```bash
   npm run dev
   # Visit /objects/ancient-sandals (or any object)
   ```

## Troubleshooting

### Low success rate
- Check `reports/image-audit.csv` for failure reasons
- Add manual overrides for objects that consistently fail
- Consider adding more keyword mappings in `buildQueryVariants()`

### Rate limiting errors
- The script includes automatic rate limiting (200ms between requests)
- If you see 429 errors, the script will retry after 2 seconds
- For large batches, consider using `--limit` to process in chunks

### Images not updating on frontend
- Clear Next.js cache: `rm -rf .next`
- Restart dev server
- Check that `--update-data` flag was used

### Data file not updating correctly
- The regex-based update can be fragile
- If updates fail, manually update `src/data/objects.ts` using the report data
- Or use a more robust approach (e.g., AST parsing) for production

## Expected Results

After running the pipeline:
- **80%+ success rate** for objects with real images
- **All conceptual objects** have representative images
- **Full attribution** stored for each image
- **CSV report** shows what succeeded/failed and why








