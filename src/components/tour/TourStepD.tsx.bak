"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { getLevel, getZonesByLevel, getExhibitsByZone, getObjectsByLevel } from "@/data/client";
import { InteractiveTimeline } from "@/components/interactive/InteractiveTimeline";

interface TourStepProps {
  onNext: () => void;
  onPrevious: () => void;
}

export function TourStepD({ onNext }: TourStepProps) {
  const level = getLevel("l1");
  const zones = getZonesByLevel("l1");
  const featuredObjects = getObjectsByLevel("l1").slice(0, 4);

  if (!level) return null;

  return (
    <div className="min-h-[calc(100vh-200px)] py-20">
      <div className="mx-auto max-w-7xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-8 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/70">
              Step D: Level 1
            </div>
            <h1 className="mb-6 text-5xl font-bold tracking-tight md:text-7xl">
              {level.title}
            </h1>
            <p className="text-xl text-white/70">{level.summary}</p>
          </div>

          <div className="mx-auto max-w-4xl space-y-8 mb-12">
            <div className="rounded-xl border border-amber-500/30 bg-amber-500/10 p-8">
              <h2 className="mb-4 text-2xl font-semibold text-amber-300">
                What This Level Answers
              </h2>
              <p className="mb-4 text-white/90">
                {level.levelIntro}
              </p>
              <div className="mt-6">
                <h3 className="mb-3 font-semibold">Key Questions:</h3>
                <ul className="space-y-2">
                  {level.keyQuestions.slice(0, 3).map((q, i) => (
                    <li key={i} className="flex items-start gap-2 text-white/80">
                      <span className="text-amber-400">•</span>
                      <span>{q}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="rounded-xl border border-white/15 bg-white/5 p-8">
              <h2 className="mb-6 text-2xl font-semibold">Zones & Exhibits</h2>
              <div className="grid gap-4 md:grid-cols-2">
                {zones.slice(0, 4).map((zone) => {
                  const exhibits = getExhibitsByZone(zone.id);
                  return (
                    <div key={zone.id} className="rounded-lg border border-white/10 bg-white/5 p-4">
                      <h3 className="mb-2 font-semibold">{zone.title}</h3>
                      <p className="mb-3 text-sm text-white/70">{zone.summary}</p>
                      <div className="text-xs text-white/60">
                        {exhibits.length} exhibit{exhibits.length !== 1 ? "s" : ""}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="rounded-xl border border-white/15 bg-white/5 p-8">
              <h2 className="mb-6 text-2xl font-semibold">Featured Objects</h2>
              <div className="grid gap-4 md:grid-cols-2">
                {featuredObjects.map((obj) => (
                  <Link
                    key={obj.id}
                    href={`/objects/${obj.slug}`}
                    className="group rounded-lg border border-white/10 bg-white/5 p-4 transition hover:border-amber-400/50 hover:bg-amber-500/10"
                  >
                    <div className="mb-2 text-sm text-white/60">{obj.dateLabel}</div>
                    <h3 className="mb-2 font-semibold group-hover:text-amber-400 transition">
                      {obj.title}
                    </h3>
                    <p className="text-sm text-white/70 line-clamp-2">{obj.description}</p>
                  </Link>
                ))}
              </div>
            </div>

            <InteractiveTimeline />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

