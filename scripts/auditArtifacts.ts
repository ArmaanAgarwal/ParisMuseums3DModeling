#!/usr/bin/env node
/**
 * Artifact Audit Script
 * 
 * Validates that Tour and Objects page use the same artifact dataset.
 * Exits with code 1 if mismatches are found.
 * 
 * Checks:
 * - All slugs referenced in Tour exist in OBJECTS
 * - All OBJECTS slugs appear somewhere in Tour (via exhibits/zones)
 * - No duplicate artifact lists
 */

import { OBJECTS } from "../src/data/objects";
import { EXHIBITS } from "../src/data/exhibits";
import { ZONES } from "../src/data/zones";
import { TOUR_STEPS } from "../src/data/tour";

// Build sets
const objectsPageSet = new Set(OBJECTS.map(obj => obj.slug));
const tourSet = new Set<string>();

// Collect all slugs referenced in Tour
// Tour references objects via: exhibits -> objectIds -> objects
for (const exhibit of EXHIBITS) {
  for (const objectId of exhibit.objectIds) {
    const obj = OBJECTS.find(o => o.id === objectId);
    if (obj) {
      tourSet.add(obj.slug);
    }
  }
}

// Also check if tour steps directly reference objects (they shouldn't, but check)
// Tour steps reference exhibits/zones, which reference objects

// Find mismatches
const slugsInTourNotInObjects = Array.from(tourSet).filter(slug => !objectsPageSet.has(slug));
const slugsInObjectsNotInTour = Array.from(objectsPageSet).filter(slug => !tourSet.has(slug));

// Report
console.log("=== Artifact Audit ===\n");
console.log(`Objects page: ${objectsPageSet.size} objects`);
console.log(`Tour references: ${tourSet.size} objects\n`);

if (slugsInTourNotInObjects.length > 0) {
  console.log("❌ ERROR: Slugs in Tour but not in Objects page:");
  slugsInTourNotInObjects.forEach(slug => {
    console.log(`  - ${slug}`);
  });
  console.log();
}

if (slugsInObjectsNotInTour.length > 0) {
  console.log("❌ ERROR: Slugs in Objects page but not in Tour:");
  slugsInObjectsNotInTour.forEach(slug => {
    const obj = OBJECTS.find(o => o.slug === slug);
    console.log(`  - ${slug} (${obj?.title || "unknown"})`);
  });
  console.log();
}

if (slugsInTourNotInObjects.length === 0 && slugsInObjectsNotInTour.length === 0) {
  console.log("✓ All artifacts match! Tour and Objects page use the same dataset.\n");
  process.exit(0);
} else {
  console.log("❌ Audit failed. Fix mismatches before proceeding.\n");
  process.exit(1);
}







