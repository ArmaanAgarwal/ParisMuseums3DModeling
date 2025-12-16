// Central export for all museum data
// Note: paths.ts is only exported from museum.ts for server components
// to avoid bundling issues in client components
export * from "./types";
export * from "./levels";
export * from "./zones";
export * from "./exhibits";
export * from "./objects";
export * from "./didactics";
// Re-export data arrays
export { LEVELS } from "./levels";
export { ZONES } from "./zones";
// Re-export helper functions
export { getObjectsByExhibit, getObjectBySlug, getObjectsByGallery, getAllObjects, getObjectById } from "./objects";
export { getExhibit, getAllExhibits } from "./exhibits";
export { getGallery, getAllGalleries } from "./galleries";
// Legacy zone exports - kept for backward compatibility
export { getZonesByLevel, getZone } from "./zones";
export { getLevel } from "./levels";
// Wrapper for getObjectById (for backward compatibility)
export function getObject(id: string) {
  const { getObjectById } = require("./objects");
  return getObjectById(id);
}
// Helper to get exhibits by zone (maps zones to galleries, then finds exhibits)
import { EXHIBITS } from "./exhibits";
import type { Exhibit } from "./exhibits";
import { getObjectsByGallery, getAllObjects } from "./objects";
import type { MuseumObject } from "./objects";
import type { LevelId } from "./types";

export function getExhibitsByZone(zoneId: string): Exhibit[] {
  const zoneToGalleryMap: Record<string, string> = {
    "gallery-1": "origins-icons",
    "gallery-2": "data-motion-body",
    "gallery-3": "recovery-ethics-future",
  };
  
  const galleryId = zoneToGalleryMap[zoneId];
  if (!galleryId) return [];
  
  return EXHIBITS.filter((exhibit) => exhibit.galleryIds.includes(galleryId));
}

// Helper to get objects by level (maps level to galleries, then gets objects)
export function getObjectsByLevel(levelId: LevelId): MuseumObject[] {
  const levelToGalleryMap: Record<LevelId, string> = {
    "l1": "origins-icons",
    "l2": "data-motion-body",
    "l3": "recovery-ethics-future",
  };
  
  const galleryId = levelToGalleryMap[levelId];
  if (!galleryId) return [];
  
  return getObjectsByGallery(galleryId);
}
// Do not export paths here - import directly from ./paths or ./museum for server components

