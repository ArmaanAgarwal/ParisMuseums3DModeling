// Helper functions for generating routes - single source of truth
// No hardcoded href strings in UI components

import { EXHIBITS } from "@/data/exhibits";
import { ZONES } from "@/data/zones";
import { OBJECTS } from "@/data/objects";

export function getExhibitHref(exhibitId: string): string {
  const exhibit = EXHIBITS.find((e) => e.id === exhibitId);
  if (!exhibit) {
    console.warn(`Exhibit not found: ${exhibitId}`);
    return "/exhibits";
  }
  return `/exhibits/${exhibit.id}`;
}

export function getZoneHref(zoneId: string): string {
  const zone = ZONES.find((z) => z.id === zoneId);
  if (!zone) {
    console.warn(`Zone not found: ${zoneId}`);
    return "/collections";
  }
  // Zones are displayed within exhibit pages, so link to the exhibit
  const exhibit = EXHIBITS.find((e) => e.zoneId === zoneId);
  if (exhibit) {
    return `/exhibits/${exhibit.id}#zone-${zoneId}`;
  }
  return `/collections?zone=${zoneId}`;
}

export function getObjectHref(objectId: string): string {
  const object = OBJECTS.find((o) => o.id === objectId);
  if (!object) {
    console.warn(`Object not found: ${objectId}`);
    return "/objects";
  }
  return `/objects/${object.slug}`;
}

export function validateRouteExists(route: string): boolean {
  // Basic validation - check if route pattern is valid
  const validPatterns = [
    /^\/$/, // home
    /^\/tour/, // tour routes
    /^\/exhibits\/[^/]+$/, // exhibit detail
    /^\/objects\/[^/]+$/, // object detail
    /^\/paths\/[^/]+$/, // pathway detail
    /^\/collections/, // collections
    /^\/location$/, // location
    /^\/architecture$/, // architecture
    /^\/didactics$/, // didactics
    /^\/rubric$/, // rubric
  ];
  return validPatterns.some((pattern) => pattern.test(route));
}








