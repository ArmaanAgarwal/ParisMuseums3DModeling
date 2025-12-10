// Build-time validation to ensure data integrity
import { OBJECTS } from "./objects";
import { EXHIBITS } from "./exhibits";
import { ZONES } from "./zones";
import { LEVELS } from "./levels";
import { PATHWAYS } from "./paths";
import { getExhibitHref, getZoneHref, getObjectHref, validateRouteExists } from "@/lib/routes";

export function validateDataIntegrity() {
  const errors: string[] = [];

  // Check all object slugs are unique
  const slugs = OBJECTS.map((obj) => obj.slug);
  const duplicateSlugs = slugs.filter((slug, index) => slugs.indexOf(slug) !== index);
  if (duplicateSlugs.length > 0) {
    errors.push(`Duplicate object slugs found: ${duplicateSlugs.join(", ")}`);
  }

  // Check all objects have valid exhibit references
  OBJECTS.forEach((obj) => {
    const exhibit = EXHIBITS.find((e) => e.id === obj.exhibitId);
    if (!exhibit) {
      errors.push(`Object "${obj.id}" references non-existent exhibit "${obj.exhibitId}"`);
    }
  });

  // Check all exhibits have valid zone references
  EXHIBITS.forEach((exhibit) => {
    const zone = ZONES.find((z) => z.id === exhibit.zoneId);
    if (!zone) {
      errors.push(`Exhibit "${exhibit.id}" references non-existent zone "${exhibit.zoneId}"`);
    }
  });

  // Check all zones have valid level references
  ZONES.forEach((zone) => {
    const level = LEVELS.find((l) => l.id === zone.levelId);
    if (!level) {
      errors.push(`Zone "${zone.id}" references non-existent level "${zone.levelId}"`);
    }
  });

  // Check pathway object references
  PATHWAYS.forEach((pathway) => {
    pathway.stops.forEach((stop) => {
      const object = OBJECTS.find((o) => o.id === stop.objectId);
      if (!object) {
        errors.push(`Pathway "${pathway.id}" references non-existent object "${stop.objectId}"`);
      }
    });
  });

  // Check exhibit object references
  EXHIBITS.forEach((exhibit) => {
    exhibit.objectIds.forEach((objectId) => {
      const object = OBJECTS.find((o) => o.id === objectId);
      if (!object) {
        errors.push(`Exhibit "${exhibit.id}" references non-existent object "${objectId}"`);
      }
    });
  });

  // Check object related references
  OBJECTS.forEach((obj) => {
    obj.relatedObjectIds.forEach((relatedId) => {
      const related = OBJECTS.find((o) => o.id === relatedId);
      if (!related) {
        errors.push(`Object "${obj.id}" references non-existent related object "${relatedId}"`);
      }
    });
  });

  // Validate all generated routes exist
  EXHIBITS.forEach((exhibit) => {
    const href = getExhibitHref(exhibit.id);
    if (!validateRouteExists(href)) {
      errors.push(`Exhibit "${exhibit.id}" generates invalid route: ${href}`);
    }
  });

  ZONES.forEach((zone) => {
    const href = getZoneHref(zone.id);
    if (!validateRouteExists(href)) {
      errors.push(`Zone "${zone.id}" generates invalid route: ${href}`);
    }
  });

  OBJECTS.forEach((obj) => {
    const href = getObjectHref(obj.id);
    if (!validateRouteExists(href)) {
      errors.push(`Object "${obj.id}" generates invalid route: ${href}`);
    }
  });

  if (errors.length > 0) {
    console.error("Museum data validation errors:");
    errors.forEach((error) => console.error(`  - ${error}`));
    if (process.env.NODE_ENV === "development") {
      throw new Error(`Data validation failed: ${errors.length} error(s) found`);
    }
  } else {
    console.log("✓ Museum data validation passed");
  }

  return errors;
}

// Run validation in development
if (typeof window === "undefined" && process.env.NODE_ENV === "development") {
  validateDataIntegrity();
}
