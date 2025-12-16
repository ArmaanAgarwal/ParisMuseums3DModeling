import { notFound } from "next/navigation";
import { ZONES, EXHIBITS, OBJECTS, LEVELS } from "@/data/client";
import { getZone, getExhibitsByZone, getObjectsByExhibit, getLevel } from "@/data/client";
import { ZonePageContent } from "./ZonePageContent";

export function generateStaticParams() {
  const params: Array<{ levelSlug: string; zoneSlug: string }> = [];
  
  ZONES.forEach((zone) => {
    const level = LEVELS.find((l) => l.id === zone.levelId);
    if (level) {
      params.push({
        levelSlug: level.id,
        zoneSlug: zone.id,
      });
    }
  });
  
  return params;
}

interface ZonePageProps {
  params: Promise<{ levelSlug: string; zoneSlug: string }>;
}

export default async function ZonePage({ params }: ZonePageProps) {
  const { levelSlug, zoneSlug } = await params;
  
  const level = getLevel(levelSlug as "l1" | "l2" | "l3");
  const zone = getZone(zoneSlug);
  
  if (!level || !zone || zone.levelId !== levelSlug) {
    notFound();
  }
  
  const exhibits = getExhibitsByZone(zone.id);
  const allObjects = exhibits.flatMap((exhibit) => getObjectsByExhibit(exhibit.id));
  
  return (
    <ZonePageContent
      level={level}
      zone={zone}
      exhibits={exhibits}
      objects={allObjects}
    />
  );
}








