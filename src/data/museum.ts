// Unified Museum Data Model - Single Source of Truth
// This file consolidates all museum data into a hierarchical structure

import { Level, Exhibit, MuseumObject, LevelId } from "./types";
import type { Zone } from "./zones";
import { LEVELS, getLevel as getLevelFromLevels } from "./levels";
import { ZONES } from "./zones";
import { EXHIBITS } from "./exhibits";
import { OBJECTS } from "./objects";
// Import PATHWAYS - only used in server components
import type { Pathway } from "./paths";

// Helper functions to get related data
export function getZonesByLevel(levelId: string): Zone[] {
  return ZONES.filter((z) => z.levelId === levelId);
}

export function getZone(id: string): Zone | undefined {
  return ZONES.find((z) => z.id === id);
}

export function getExhibitsByZone(zoneId: string): Exhibit[] {
  return EXHIBITS.filter((e) => e.zoneId === zoneId);
}

export function getObjectsByExhibit(exhibitId: string): MuseumObject[] {
  return OBJECTS.filter((obj) => obj.exhibitId === exhibitId);
}

export function getObjectsByLevel(levelId: string): MuseumObject[] {
  const zones = getZonesByLevel(levelId);
  const zoneIds = zones.map((z) => z.id);
  const exhibits = EXHIBITS.filter((e) => e.zoneId && zoneIds.includes(e.zoneId));
  const exhibitIds = exhibits.map((e) => e.id);
  return OBJECTS.filter((obj) => obj.exhibitId && exhibitIds.includes(obj.exhibitId));
}

export function getFeaturedObjects(count: number = 10): MuseumObject[] {
  // Select objects that have the most complete metadata
  const scored = OBJECTS.map((obj) => ({
    object: obj,
    score:
      (obj.description?.length || 0) +
      (obj.significance?.length || 0) +
      (obj.howItChangedPerformance?.length || 0) +
      (obj.whatToNotice?.length || 0) * 10,
  }));
  return scored
    .sort((a, b) => b.score - a.score)
    .slice(0, count)
    .map((item) => item.object);
}

export function getObjectBySlug(slug: string): MuseumObject | undefined {
  return OBJECTS.find((obj) => obj.slug === slug);
}

export function getExhibit(id: string): Exhibit | undefined {
  return EXHIBITS.find((e) => e.id === id);
}

// Tour steps configuration
export const TOUR_STEPS = [
  { id: "prologue", title: "Prologue", path: "/tour/prologue" },
  { id: "architecture", title: "The Building", path: "/tour/architecture" },
  { id: "level-1", title: "Level 1: Origins & Icons", path: "/tour/level-1" },
  { id: "transition-1-2", title: "Transition", path: "/tour/transition-1-2" },
  { id: "level-2", title: "Level 2: Data, Motion & Body", path: "/tour/level-2" },
  { id: "transition-2-3", title: "Transition", path: "/tour/transition-2-3" },
  { id: "level-3", title: "Level 3: Futures & Immersion", path: "/tour/level-3" },
  { id: "epilogue", title: "Epilogue", path: "/tour/epilogue" },
] as const;

export type TourStepId = (typeof TOUR_STEPS)[number]["id"];

// Re-export helper functions
export function getLevel(id: LevelId): Level | undefined {
  return getLevelFromLevels(id);
}

// Export all data
export { LEVELS, ZONES, EXHIBITS, OBJECTS };
export type { Level, Zone, Exhibit, MuseumObject };
// PATHWAYS exported separately to avoid bundling issues
export { PATHWAYS } from "./paths";
export type { Pathway } from "./paths";

