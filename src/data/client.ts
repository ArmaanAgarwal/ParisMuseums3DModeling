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
import { Gallery, Exhibit, MuseumObject } from "./types";

// Re-export types
export type { Gallery, Exhibit, MuseumObject };

// Export data arrays
export { GALLERIES, EXHIBITS, OBJECTS };

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
};

// Helper to get objects by exhibit
export function getObjectsByExhibit(exhibitId: string): MuseumObject[] {
  const exhibit = getExhibit(exhibitId);
  if (!exhibit) return [];
  return exhibit.stopIds
    .map((id) => getObjectById(id))
    .filter((obj): obj is MuseumObject => obj !== undefined);
}
