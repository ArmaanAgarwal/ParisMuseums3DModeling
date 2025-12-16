"use client";

import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import { LEVELS, ZONES, getZonesByLevel, getExhibitsByZone } from "@/data";
import { FloorPlan } from "@/components/FloorPlan";

function MapContent() {
  const searchParams = useSearchParams();
  const levelParam = searchParams.get("level") as "l1" | "l2" | "l3" | null;
  const zoneParam = searchParams.get("zone");
  
  const [selectedLevel, setSelectedLevel] = useState<"l1" | "l2" | "l3">(
    levelParam || "l1"
  );
  const [selectedZone, setSelectedZone] = useState<string | undefined>(zoneParam || undefined);

  const zones = getZonesByLevel(selectedLevel);

  return (
    <div className="min-h-screen bg-black">
      {/* Hero */}
      <section className="border-b border-white/10 bg-gradient-to-b from-black to-zinc-950 py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mx-auto max-w-4xl"
          >
            <h1 className="mb-4 text-4xl font-semibold md:text-5xl">
              Museum Map
            </h1>
            <p className="text-lg text-white/70">
              Explore the three levels, zones, and exhibits of the Performance Museum
            </p>
          </motion.div>
        </div>
      </section>

      {/* Level Selector */}
      <section className="border-b border-white/10 py-12">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="flex flex-wrap items-center justify-center gap-3">
            {LEVELS.map((level) => (
              <button
                key={level.id}
                onClick={() => {
                  setSelectedLevel(level.id);
                  setSelectedZone(undefined);
                }}
                className={`rounded-xl border px-6 py-3 font-medium transition ${
                  selectedLevel === level.id
                    ? "border-white/30 bg-white/10 text-white"
                    : "border-white/15 bg-white/5 text-white/70 hover:border-white/25 hover:bg-white/8"
                }`}
              >
                {level.title}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Map and Zones */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="mb-8">
            <h2 className="mb-2 text-3xl font-semibold">
              {LEVELS.find((l) => l.id === selectedLevel)?.title}
            </h2>
            <p className="text-white/70">
              {LEVELS.find((l) => l.id === selectedLevel)?.summary}
            </p>
          </div>

          {/* Floor Plan */}
          <FloorPlan
            level={selectedLevel}
            selectedZone={selectedZone}
            onZoneClick={setSelectedZone}
          />

          {/* Zone Details */}
          {selectedZone && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-12 rounded-2xl border border-white/15 bg-white/5 p-8"
            >
              {(() => {
                const zone = zones.find((z) => z.id === selectedZone);
                if (!zone) return null;
                const exhibits = getExhibitsByZone(zone.id);

                return (
                  <>
                    <h3 className="mb-4 text-2xl font-semibold">{zone.title}</h3>
                    <p className="mb-6 text-white/80">{zone.summary}</p>

                    <div className="mb-4 text-sm font-medium text-white/60">
                      Exhibits in this zone:
                    </div>
                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                      {exhibits.map((exhibit) => (
                        <Link
                          key={exhibit.id}
                          href={`/exhibits/${exhibit.id}`}
                          className="group rounded-xl border border-white/10 bg-white/5 p-6 transition hover:border-white/20 hover:bg-white/10"
                        >
                          <h4 className="mb-2 font-semibold text-white/90 group-hover:text-white">
                            {exhibit.title}
                          </h4>
                          <p className="mb-3 text-sm text-white/70">{exhibit.thesis || exhibit.intro}</p>
                          <div className="text-xs text-white/50">
                            {exhibit.stopIds.length} object
                            {exhibit.stopIds.length !== 1 ? "s" : ""}
                          </div>
                        </Link>
                      ))}
                    </div>
                  </>
                );
              })()}
            </motion.div>
          )}
        </div>
      </section>

      {/* Navigation */}
      <section className="border-t border-white/10 py-12">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="flex justify-between">
            <Link
              href="/exhibits"
              className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-6 py-3 font-medium transition hover:bg-white/10"
            >
              ← Exhibits
            </Link>
            <Link
              href="/tour"
              className="inline-flex items-center gap-2 rounded-xl border border-cyan-500/30 bg-cyan-500/20 px-6 py-3 font-medium transition hover:bg-cyan-500/30"
            >
              Start Tour →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default function MapPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-black" />}>
      <MapContent />
    </Suspense>
  );
}

