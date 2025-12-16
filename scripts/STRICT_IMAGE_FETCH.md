# Strict Image Fetch Script - Terminal Commands

## Quick Start

### 1. Fetch images for missing objects only (recommended first run)
```bash
cd /Users/armaanagarwal/Desktop/performance-museum
npx tsx scripts/fetchObjectImages.ts --only-missing
```

### 2. Test with first 5 objects
```bash
npx tsx scripts/fetchObjectImages.ts --only-missing --limit=5
```

### 3. Force re-fetch all images
```bash
npx tsx scripts/fetchObjectImages.ts --force
```

### 4. Process specific number of objects
```bash
npx tsx scripts/fetchObjectImages.ts --only-missing --limit=20
```

## Verify Results

### Check report
```bash
cat reports/image-fetch/report.json | jq '.success, .failed, .suspicious, .skipped'
```

### View HTML report
```bash
open reports/image-fetch/report.html
```

### Check suspicious objects
```bash
cat reports/image-fetch/suspicious.json | jq '.[] | {slug, title, reason}'
```

### Count downloaded images
```bash
ls -1 public/objects/images/*.{jpg,png,webp} 2>/dev/null | wc -l
```

### List downloaded images
```bash
ls -lh public/objects/images/ | head -20
```

## After Fetching Images

### 1. Start dev server to see results
```bash
npm run dev
```

Then visit: `http://localhost:3000/objects/ancient-sandals` (or any object)

### 2. Review suspicious objects
Check `reports/image-fetch/suspicious.json` for objects that were rejected due to:
- Ancient objects with modern keywords
- Missing ancient plausibility signals
- No valid candidates found

### 3. Review HTML report
Open `reports/image-fetch/report.html` in your browser for a visual summary.

## What the Script Does

1. **Only uses reliable sources:**
   - The Metropolitan Museum of Art (public domain only)
   - Art Institute of Chicago (public domain only)
   - Wikimedia Commons (CC BY, CC BY-SA, CC0, or Public Domain only)

2. **Strict rules for ancient artifacts:**
   - Rejects candidates with modern keywords (adidas, nike, etc.)
   - Requires ancient plausibility signals (ancient, greek, roman, etc.)
   - Marks suspicious objects in `suspicious.json`

3. **Skips speculative objects:**
   - Objects with year >= 2025
   - Objects with keywords: prototype, neural, bio-integrated, holographic, future

4. **Scoring system:**
   - Museum sources score higher than Commons
   - Keyword matching increases score
   - Public domain preferred

5. **Automatic updates:**
   - Downloads images to `public/objects/images/<slug>-<hash>.<ext>`
   - Updates `src/data/objects.ts` with new `imagePath`
   - Generates comprehensive reports

## Expected Output

```
Starting strict image fetch pipeline...
Flags: force=false, only-missing=true, limit=Infinity
Processing 45 objects...

[1/45] Ancient Greek Running Sandals (ancient-sandals)
  ✓ Found: The Met Museum (score: 45)
  ✓ Downloaded: objects/images/ancient-sandals-a1b2c3d4.jpg

[2/45] Ancient Greek Discus (greek-discus)
  ✓ Found: Wikimedia Commons (score: 35)
  ✓ Downloaded: objects/images/greek-discus-e5f6g7h8.jpg

...

✅ Complete!
   Success: 32
   Failed: 8
   Suspicious: 3
   Skipped: 2

Reports:
   reports/image-fetch/report.json
   reports/image-fetch/report.html
   reports/image-fetch/suspicious.json
```








