# Quick Start: Image Pipeline

## Terminal Commands

### 1. Test run (see what would happen, no downloads)
```bash
cd /Users/armaanagarwal/Desktop/performance-museum
npx tsx scripts/fetchObjectImages.ts --dry-run --limit=5
```

### 2. Download images for missing objects only (recommended first run)
```bash
npx tsx scripts/fetchObjectImages.ts --only-missing --update-data
```

### 3. Process first 20 objects (test batch)
```bash
npx tsx scripts/fetchObjectImages.ts --limit=20 --update-data --only-missing
```

### 4. Force re-download all images
```bash
npx tsx scripts/fetchObjectImages.ts --force --overwrite --update-data
```

### 5. With optional API keys (better results)
```bash
export SMITHSONIAN_API_KEY="your-key"
export EUROPEANA_API_KEY="your-key"
npx tsx scripts/fetchObjectImages.ts --only-missing --update-data
```

## Verify Results

### Check report
```bash
cat reports/image-audit.csv | head -20
```

### Check success rate
```bash
grep "successRate" reports/image-audit.json
```

### List downloaded images
```bash
ls -lh public/objects/images/ | head -20
```

### Count downloaded images
```bash
ls public/objects/images/*.{jpg,png,webp} 2>/dev/null | wc -l
```

## Expected Output

After running `--only-missing --update-data`:

```
Starting image pipeline...
Flags: force=false, overwrite=false, update-data=true, dry-run=false, only-missing=true, limit=Infinity
Processing 45 objects...

[1/45] Processing: Ancient Greek Running Sandals (ancient-sandals)
  ✓ Found: Wikimedia Commons (artifact-photo)
  ✓ Downloaded: objects/images/ancient-sandals.jpg

[2/45] Processing: Ancient Greek Discus (greek-discus)
  ✓ Found: Wikipedia (artifact-photo)
  ✓ Downloaded: objects/images/greek-discus.jpg

...

✅ Complete!
   Success: 36
   Failed: 9
   Success rate: 80.0%

Reports written to:
   reports/image-audit.json
   reports/image-audit.csv
```

## Next Steps

1. Review `reports/image-audit.csv` for failures
2. Add manual overrides in `src/data/imageOverrides.ts` for failed objects
3. Re-run with `--only-missing` to catch remaining objects
4. Test on frontend: `npm run dev` and visit object pages








