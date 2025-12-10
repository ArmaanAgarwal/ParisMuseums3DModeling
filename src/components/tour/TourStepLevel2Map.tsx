"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FloorPlan } from "@/components/FloorPlan";
import { ZoneModal } from "@/components/zones/ZoneModal";
import { getZonesByLevel, getExhibitsByZone, getObjectsByExhibit } from "@/data/client";

interface TourStepLevel2MapProps {
  onNext: () => void;
  onPrevious: () => void;
}

export function TourStepLevel2Map({ onNext, onPrevious }: TourStepLevel2MapProps) {
  const [selectedZone, setSelectedZone] = useState<string | null>(null);
  const zones = getZonesByLevel("l2");
  const selectedZoneData = selectedZone ? zones.find((z) => z.id === selectedZone) : null;
  const selectedZoneExhibits = selectedZoneData ? getExhibitsByZone(selectedZoneData.id) : [];
  const selectedZoneObjects = selectedZoneExhibits.flatMap((ex) => getObjectsByExhibit(ex.id));

  return (
    <div className="min-h-screen bg-black py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-12"
        >
          <div className="mx-auto max-w-4xl">
            <h1 className="mb-6 text-4xl font-semibold md:text-5xl">
              Level 2 Map
            </h1>
            <p className="mb-6 text-xl leading-relaxed text-white/80">
              This map shows all zones in Level 2. Click any zone to see what is inside. Each zone focuses on a different way that technology measures and analyzes performance. You can explore zones in any order, but the tour will guide you through them.
            </p>
          </div>

          {/* Interactive Map */}
          <div>
            <FloorPlan
              level="l2"
              selectedZone={selectedZone || undefined}
              onZoneClick={(zoneId) => setSelectedZone(zoneId)}
            />
          </div>

          {/* Zone Modal */}
          {selectedZoneData && (
            <ZoneModal
              zone={selectedZoneData}
              exhibits={selectedZoneExhibits}
              objects={selectedZoneObjects}
              isOpen={selectedZone !== null}
              onClose={() => setSelectedZone(null)}
              levelSlug="l2"
            />
          )}

          {/* Navigation */}
          <div className="mx-auto max-w-4xl flex justify-between">
            <button
              onClick={onPrevious}
              className="rounded-xl border border-white/20 bg-white/5 px-8 py-4 font-medium transition hover:bg-white/10"
            >
              ← Previous
            </button>
            <button
              onClick={onNext}
              className="rounded-xl border border-cyan-500/30 bg-cyan-500/20 px-8 py-4 font-medium transition hover:bg-cyan-500/30"
            >
              View Level 2 Exhibits →
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}







