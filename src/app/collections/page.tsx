"use client";

import { useState, useMemo, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { FloorPlan } from "@/components/FloorPlan";
import { LEVELS, type Level, getAllObjects } from "@/lib/museumData";

function CollectionsContent() {
  const searchParams = useSearchParams();
  const [selectedLevel, setSelectedLevel] = useState<Level>("l1");
  const [selectedZone, setSelectedZone] = useState<string | undefined>();

  useEffect(() => {
    const levelParam = searchParams.get("level") as Level;
    if (levelParam && ["l1", "l2", "l3"].includes(levelParam)) {
      setSelectedLevel(levelParam);
    }
  }, [searchParams]);

  const currentLevel = useMemo(
    () => LEVELS.find((l) => l.id === selectedLevel),
    [selectedLevel]
  );

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
              Collections Layout
            </h1>
            <p className="text-lg text-white/70">
              Explore how the three levels are organized, how visitors move
              through zones, and how the narrative unfolds from Origins to Data
              to Futures.
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

      {/* Current Level Info */}
      {currentLevel && (
        <section className="border-b border-white/10 py-20">
          <div className="mx-auto max-w-7xl px-4 md:px-6">
            <div className="mb-8">
              <h2 className="mb-2 text-3xl font-semibold">
                {currentLevel.title}
              </h2>
              <p className="text-lg text-white/70">{currentLevel.subtitle}</p>
              <p className="mt-4 max-w-3xl leading-relaxed text-white/80">
                {currentLevel.description}
              </p>
            </div>

            {/* Floor Plan */}
            <FloorPlan
              level={selectedLevel}
              selectedZone={selectedZone}
              onZoneClick={setSelectedZone}
            />
          </div>
        </section>
      )}

      {/* Zones Detail */}
      {currentLevel && selectedZone && (
        <section className="border-b border-white/10 py-20">
          <div className="mx-auto max-w-7xl px-4 md:px-6">
            {(() => {
              const zone = currentLevel.zones.find((z) => z.id === selectedZone);
              if (!zone) return null;

              return (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="rounded-2xl border border-white/15 bg-white/5 p-8"
                >
                  <h3 className="mb-4 text-2xl font-semibold">{zone.name}</h3>
                  <p className="mb-6 leading-relaxed text-white/80">
                    {zone.description}
                  </p>

                  <div className="mb-4 text-sm font-medium text-white/60">
                    Objects in this zone:
                  </div>
                  <div className="grid gap-3 md:grid-cols-2">
                    {zone.objects.map((objectId) => {
                      const object = getAllObjects().find(obj => obj.id === objectId);
                      return (
                      <Link
                        key={objectId}
                          href={`/objects/${object?.slug || objectId}`}
                        className="rounded-lg border border-white/10 bg-white/5 p-4 transition hover:border-white/20 hover:bg-white/10"
                      >
                        <div className="font-medium text-white/90">
                            {object?.title || objectId.replace(/-/g, " ")}
                        </div>
                          {object?.subtitle && (
                        <div className="mt-1 text-xs text-white/60">
                              {object.subtitle}
                            </div>
                          )}
                          <div className="mt-2 text-xs text-white/50">
                          View details →
                        </div>
                      </Link>
                      );
                    })}
                  </div>
                </motion.div>
              );
            })()}
          </div>
        </section>
      )}

      {/* Visitor Flow */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <h2 className="mb-12 text-center text-3xl font-semibold">
            Visitor Flow
          </h2>

          <div className="mx-auto max-w-4xl space-y-6">
            <div className="rounded-2xl border border-white/15 bg-white/5 p-8">
              <h3 className="mb-4 text-xl font-semibold">Circulation Strategy</h3>
              <p className="mb-4 leading-relaxed text-white/80">
                Visitors enter at Level 1 and progress upward through the three
                levels, following the narrative arc from Origins to Data to
                Futures. Each level has clear wayfinding, with zones that can be
                explored in sequence or selectively.
              </p>
              <p className="leading-relaxed text-white/80">
                The circulation is designed to be flexible: visitors can follow
                the guided tour path or explore independently. Vertical
                circulation (stairs, elevators) is clearly expressed, and each
                level has its own internal organization that supports both
                linear and non-linear exploration.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {LEVELS.map((level, i) => (
                <div
                  key={level.id}
                  className="rounded-xl border border-white/15 bg-white/5 p-6"
                >
                  <div className="mb-2 text-sm font-medium text-white/60">
                    Level {i + 1}
                  </div>
                  <div className="font-semibold">{level.title}</div>
                  <div className="mt-2 text-sm text-white/70">
                    {level.zones.length} zones,{" "}
                    {level.zones.reduce((sum, z) => sum + z.objects.length, 0)}{" "}
                    objects
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default function CollectionsPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-black" />}>
      <CollectionsContent />
    </Suspense>
  );
}

