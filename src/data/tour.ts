// Tour steps configuration - single source of truth
export const TOUR_STEPS = [
  { id: "intro", title: "How to Use This Museum", route: "/tour", anchor: "intro" },
  { id: "structure", title: "Online Museum Structure", route: "/tour", anchor: "structure" },
  { id: "level1-entry", title: "Level 1: Origins and Icons", route: "/tour", anchor: "level1-entry" },
  { id: "level1-map", title: "Level 1 Map", route: "/tour", anchor: "level1-map" },
  { id: "level1-exhibits", title: "Level 1 Exhibits", route: "/tour", anchor: "level1-exhibits" },
  { id: "level1-zone1", title: "Level 1 Zone 1", route: "/tour", anchor: "level1-zone1" },
  { id: "level1-zone2", title: "Level 1 Zone 2", route: "/tour", anchor: "level1-zone2" },
  { id: "level1-activity", title: "Level 1 Activity", route: "/tour", anchor: "level1-activity" },
  { id: "transition-1-2", title: "Moving to Level 2", route: "/tour", anchor: "transition-1-2" },
  { id: "level2-entry", title: "Level 2: Data and Motion", route: "/tour", anchor: "level2-entry" },
  { id: "level2-map", title: "Level 2 Map", route: "/tour", anchor: "level2-map" },
  { id: "level2-exhibits", title: "Level 2 Exhibits", route: "/tour", anchor: "level2-exhibits" },
  { id: "level2-zone1", title: "Level 2 Zone 1", route: "/tour", anchor: "level2-zone1" },
  { id: "level2-zone2", title: "Level 2 Zone 2", route: "/tour", anchor: "level2-zone2" },
  { id: "level2-activity", title: "Level 2 Activity", route: "/tour", anchor: "level2-activity" },
  { id: "transition-2-3", title: "Moving to Level 3", route: "/tour", anchor: "transition-2-3" },
  { id: "level3-entry", title: "Level 3: Futures and Immersion", route: "/tour", anchor: "level3-entry" },
  { id: "level3-map", title: "Level 3 Map", route: "/tour", anchor: "level3-map" },
  { id: "level3-exhibits", title: "Level 3 Exhibits", route: "/tour", anchor: "level3-exhibits" },
  { id: "level3-zone1", title: "Level 3 Zone 1", route: "/tour", anchor: "level3-zone1" },
  { id: "level3-zone2", title: "Level 3 Zone 2", route: "/tour", anchor: "level3-zone2" },
  { id: "level3-activity", title: "Level 3 Activity", route: "/tour", anchor: "level3-activity" },
  { id: "reflection", title: "Reflection", route: "/tour", anchor: "reflection" },
] as const;

export type TourStepId = (typeof TOUR_STEPS)[number]["id"];

export function getTourStepById(id: string) {
  return TOUR_STEPS.find((step) => step.id === id);
}

export function getTourStepByIndex(index: number) {
  return TOUR_STEPS[index];
}

export function getTourStepIndexById(id: string): number {
  return TOUR_STEPS.findIndex((step) => step.id === id);
}

