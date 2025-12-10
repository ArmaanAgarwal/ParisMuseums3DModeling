"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { LevelId, getLevel, getZonesByLevel, getExhibitsByZone, getObjectsByExhibit } from "@/data/client";
import { getZoneHref } from "@/lib/routes";
import { ZoneModal } from "@/components/zones/ZoneModal";

interface FloorPlanProps {
  level: LevelId;
  selectedZone?: string;
  onZoneClick?: (zoneId: string) => void;
  isInteractiveInTour?: boolean;
  currentTourStepIndex?: number;
}

export function FloorPlan({ level, selectedZone, onZoneClick }: FloorPlanProps) {
  const [modalZone, setModalZone] = useState<string | null>(null);
  const levelInfo = getLevel(level);
  const zones = getZonesByLevel(level);
  if (!levelInfo) return null;

  const handleZoneClick = (zoneId: string) => {
    setModalZone(zoneId);
    onZoneClick?.(zoneId);
  };

  const selectedZoneData = modalZone ? zones.find((z) => z.id === modalZone) : null;
  const selectedZoneExhibits = selectedZoneData ? getExhibitsByZone(selectedZoneData.id) : [];
  const selectedZoneObjects = selectedZoneExhibits.flatMap((ex) => getObjectsByExhibit(ex.id));

  // Simplified floor plan layout - zones as clickable areas
  const zoneLayouts: Record<string, { x: number; y: number; w: number; h: number }> = {
    "intro-gallery": { x: 5, y: 10, w: 30, h: 25 },
    "artifact-hall": { x: 40, y: 10, w: 55, h: 40 },
    "archive-corner": { x: 5, y: 40, w: 30, h: 25 },
    "sprint-track": { x: 10, y: 15, w: 40, h: 35 },
    "metrics-wall": { x: 55, y: 15, w: 40, h: 25 },
    "analysis-lab": { x: 55, y: 45, w: 40, h: 35 },
    "vr-arena": { x: 10, y: 10, w: 50, h: 40 },
    "projection-room": { x: 65, y: 10, w: 30, h: 40 },
    "sky-gallery": { x: 10, y: 55, w: 85, h: 30 },
  };

  return (
    <div className="rounded-2xl border border-white/15 bg-white/5 p-6">
      <div className="mb-4">
        <h3 className="text-lg font-semibold">{levelInfo.title}</h3>
        <p className="mt-1 text-sm text-white/70">{levelInfo.summary}</p>
      </div>

      <div className="relative h-96 w-full overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0">
        {/* Grid background */}
        <div className="absolute inset-0 opacity-20">
          <svg className="h-full w-full">
            <defs>
              <pattern
                id={`grid-${level}`}
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 20 0 L 0 0 0 20"
                  fill="none"
                  stroke="white"
                  strokeWidth="0.5"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill={`url(#grid-${level})`} />
          </svg>
        </div>

        {/* Zones */}
        {zones.map((zone) => {
          const layout = zone.positionOnMap || { x: 10, y: 10, w: 30, h: 30 };
          const isSelected = selectedZone === zone.id;
          const exhibits = getExhibitsByZone(zone.id);
          const zoneHref = getZoneHref(zone.id);
          const firstExhibit = exhibits[0];

          return (
            <button
              key={zone.id}
              onClick={() => handleZoneClick(zone.id)}
              className={`absolute rounded-lg border-2 transition ${
                isSelected
                  ? "border-white/50 bg-white/15"
                  : "border-white/20 bg-white/5 hover:border-white/30 hover:bg-white/10"
              }`}
              style={{
                left: `${layout.x}%`,
                top: `${layout.y}%`,
                width: `${layout.w}%`,
                height: `${layout.h}%`,
              }}
            >
              <motion.div
                className="flex h-full flex-col justify-between p-3 text-left"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div>
                  <div className="text-xs font-medium text-white/90">
                    {zone.title}
                  </div>
                  <div className="mt-1 text-[10px] text-white/60">
                    {exhibits.length > 0 ? `${exhibits.length} exhibit${exhibits.length !== 1 ? "s" : ""}` : "Click to explore"}
                  </div>
                </div>
                {isSelected && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-[10px] text-white/70"
                  >
                    {zone.summary}
                  </motion.div>
                )}
              </motion.div>
            </button>
          );
        })}

        {/* Legend */}
        <div className="absolute bottom-2 right-2 rounded-lg border border-white/10 bg-black/50 px-2 py-1 text-[10px] text-white/70">
          Click zones to explore
        </div>
      </div>

      {/* Zone list */}
      <div className="mt-4 grid gap-2 md:grid-cols-3">
        {zones.map((zone) => {
          const exhibits = getExhibitsByZone(zone.id);
          const firstExhibit = exhibits[0];
          const zoneHref = getZoneHref(zone.id);
          return (
            <Link
              key={zone.id}
              href={firstExhibit ? `/exhibits/${firstExhibit.id}` : zoneHref}
              className={`rounded-lg border p-3 text-left text-sm transition ${
                selectedZone === zone.id
                  ? "border-white/30 bg-white/10"
                  : "border-white/10 bg-white/5 hover:border-white/20 hover:bg-white/8"
              }`}
            >
              <div className="font-medium text-white/90">{zone.title}</div>
              <div className="mt-1 text-xs text-white/60">
                {zone.summary}
              </div>
              <div className="mt-2 text-xs text-white/50">
                {exhibits.length} exhibit{exhibits.length !== 1 ? "s" : ""}
              </div>
            </Link>
          );
        })}
      </div>

      {/* Zone Modal */}
      {selectedZoneData && (
        <ZoneModal
          zone={selectedZoneData}
          exhibits={selectedZoneExhibits}
          objects={selectedZoneObjects}
          isOpen={modalZone !== null}
          onClose={() => setModalZone(null)}
          levelSlug={level}
        />
      )}
    </div>
  );
}

