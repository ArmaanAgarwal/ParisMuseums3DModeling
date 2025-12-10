// Central export for all museum data
// Note: paths.ts is only exported from museum.ts for server components
// to avoid bundling issues in client components
export * from "./types";
export * from "./levels";
export * from "./zones";
export * from "./exhibits";
export * from "./objects";
export * from "./didactics";
// Re-export helper functions
export { getObjectsByExhibit, getObjectBySlug, getObjectsByGallery, getAllObjects } from "./objects";
export { getExhibit, getAllExhibits } from "./exhibits";
export { getGallery, getAllGalleries } from "./galleries";
// Legacy zone exports - kept for backward compatibility
export { getZonesByLevel, getZone } from "./zones";
export { getLevel } from "./levels";
// Do not export paths here - import directly from ./paths or ./museum for server components

