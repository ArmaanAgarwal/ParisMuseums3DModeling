# Museum Consistency Implementation Summary

## Modified Files

### Core Data Files
- `src/data/types.ts` - Updated image schema with `imageKind` ("artifact" | "representative" | "concept") and `imageStatus` ("approved" | "needsReview" | "placeholder")
- `src/data/objects.ts` - Fixed AI Performance Coach image (placeholder with needsReview), updated all objects to use new schema, fixed future objects to use "concept" imageKind
- `src/data/exhibits.ts` - Fixed exhibit-object mismatches, removed duplicate object references
- `src/data/constants.ts` - NEW: Added `PREVIEW_OBJECT_COUNT = 4` constant for consistent previews

### Scripts
- `scripts/auditMuseumContent.ts` - NEW: Comprehensive audit script that validates all references
- `scripts/fetchObjectImages.ts` - Enhanced with strict validation:
  - Domain whitelist (Wikimedia Commons, Met Museum, Art Institute, etc.)
  - Negative keyword filters (rejects paintings for tech objects)
  - Required keyword overlap (minimum 2 keywords)
  - Higher threshold (50 instead of 30)
  - Sets imageKind and imageStatus automatically

### Components
- `src/components/ui/ObjectImage.tsx` - Updated to show imageKind labels ("Representative image", "Concept image", "Needs review")
- `src/components/zones/ZoneModal.tsx` - Updated to use `PREVIEW_OBJECT_COUNT` constant
- `src/app/tour/page.tsx` - Fixed back button to use tour step index

### Package Configuration
- `package.json` - Added `npm run audit` script

### Documentation
- `RUNBOOK.md` - NEW: Complete runbook with commands and expectations
- `TERMINAL_COMMANDS.md` - Updated with new commands

## Key Fixes

1. **AI Performance Coach**: Set to placeholder with `imageStatus: "needsReview"` (was incorrectly using Met Museum painting)
2. **Image Schema**: All objects now have `imageKind` and `imageStatus` fields
3. **Future Objects**: All objects with year >= 2025 use `imageKind: "concept"`
4. **Exhibit Consistency**: Removed duplicate object references, all exhibit.objectIds match object.exhibitId
5. **Preview Consistency**: All previews use `PREVIEW_OBJECT_COUNT = 4` constant
6. **Image Validation**: Strict validation prevents incorrect image assignments (paintings for tech objects, etc.)

## Commands to Run

```bash
# 1. Audit content consistency
npm run audit
# or: npx tsx scripts/auditMuseumContent.ts

# 2. Fetch images (only missing ones)
npm run images:fetch
# or: npx tsx scripts/fetchObjectImages.ts --only-missing --update-data

# 3. Review suspicious/failed images
npm run images:review
# or: npx tsx scripts/fetchObjectImages.ts --review

# 4. Start dev server
npm run dev
```

## Report Locations

- **Content Audit Report:** `reports/content-audit.json`
- **Image Fetch HTML Report:** `reports/image-fetch/report.html`
- **Suspicious Images:** `reports/image-fetch/suspicious.json`
- **Failed Images:** `reports/image-fetch/failed.json`

## Verification

✅ Build successful: `npm run build` completes without errors
✅ Audit passes: `npm run audit` exits with code 0 (warnings only)
✅ All object references validated
✅ All exhibit-object relationships consistent
✅ Image schema updated across all objects
✅ Preview consistency implemented








