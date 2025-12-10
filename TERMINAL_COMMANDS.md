# Terminal Commands for Museum Project

## Installation

```bash
cd /Users/armaanagarwal/Desktop/performance-museum
npm install
```

## Fetch Images

Fetch images for all objects (only missing ones by default):

```bash
npm run images:fetch
```

This runs: `tsx scripts/fetchObjectImages.ts --only-missing --update-data`

### Other Image Commands

- Fetch all images (force re-download): `tsx scripts/fetchObjectImages.ts --force --update-data`
- Review suspicious/failed images: `npm run images:review`
- Fetch with limit: `tsx scripts/fetchObjectImages.ts --only-missing --limit=10`
- Dry run (no updates): `tsx scripts/fetchObjectImages.ts --only-missing --dry-run`

## Audit

Check for data integrity issues:

```bash
npm run build
```

This will catch TypeScript errors, missing imports, and data validation issues.

## Start Dev Server

```bash
npm run dev
```

Then open http://localhost:3000

## Build for Production

```bash
npm run build
npm start
```

## Verify Object Links

Check that all object slugs resolve correctly:

```bash
npm run build 2>&1 | grep -E "404|error|Error" | head -20
```

## Image Pipeline Notes

- Images are downloaded to `public/objects/images/`
- Reports are generated in `reports/image-fetch/`
- Manual overrides can be added to `scripts/image-overrides.json`
- The script enforces strict validation for ancient artifacts
- Speculative/future objects are automatically skipped







