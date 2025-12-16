// Client-safe data exports
import { GALLERIES, getGallery, getAllGalleries } from "./galleries";
import { EXHIBITS, getExhibit, getAllExhibits } from "./exhibits";
import {
  OBJECTS,
  getObjectBySlug,
  getObjectById,
  getObjectsByGallery,
  getAllObjects,
} from "./objects";
import { LEVELS, getLevel } from "./levels";
import { ZONES, getZone, getZonesByLevel } from "./zones";
import { Gallery, Exhibit, MuseumObject, LevelId } from "./types";

// Re-export types
export type { Gallery, Exhibit, MuseumObject, LevelId };

// Export data arrays
export { GALLERIES, EXHIBITS, OBJECTS, LEVELS, ZONES };

// Export helper functions
export {
  getGallery,
  getAllGalleries,
  getExhibit,
  getAllExhibits,
  getObjectBySlug,
  getObjectById,
  getObjectsByGallery,
  getAllObjects,
  getLevel,
  getZone,
  getZonesByLevel,
};

// Helper to get objects by exhibit
export function getObjectsByExhibit(exhibitId: string): MuseumObject[] {
  const exhibit = getExhibit(exhibitId);
  if (!exhibit) return [];
  return exhibit.stopIds
    .map((id) => getObjectById(id))
    .filter((obj): obj is MuseumObject => obj !== undefined);
}

// Helper to get exhibits by zone
// Maps zone IDs (gallery-1, gallery-2, gallery-3) to gallery IDs (origins-icons, data-motion-body, recovery-ethics-future)
// then finds exhibits that include those galleries
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

// Wrapper for getObjectById (for backward compatibility)
export function getObject(id: string): MuseumObject | undefined {
  return getObjectById(id);
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

// Helper to get featured objects (returns first N objects)
export function getFeaturedObjects(count: number = 10): MuseumObject[] {
  return getAllObjects().slice(0, count);
}
