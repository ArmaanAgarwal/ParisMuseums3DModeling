"use client";

import { motion } from "framer-motion";
import { ContinueButton } from "./ContinueButton";
import { LEVELS, ZONES, getZonesByLevel } from "@/data";
import Link from "next/link";

interface TourChapter4Props {
  onContinue: () => void;
}

export function TourChapter4({ onContinue }: TourChapter4Props) {
  return (
    <section className="min-h-screen flex items-center justify-center py-20 border-b border-white/10">
      <div className="mx-auto max-w-6xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-semibold md:text-5xl">
              Museum Map
            </h2>
            <p className="text-lg text-white/70">
              Explore the three levels and their zones
            </p>
          </div>

          <div className="space-y-12">
            {LEVELS.map((level, levelIndex) => {
              const zones = getZonesByLevel(level.id);
              return (
                <motion.div
                  key={level.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: levelIndex * 0.1 }}
                  className="rounded-2xl border border-white/15 bg-white/5 p-8"
                >
                  <div className="mb-6">
                    <div className="mb-2 text-sm font-medium text-white/60">
                      {level.id.toUpperCase()}
                    </div>
                    <h3 className="text-2xl font-semibold">{level.title}</h3>
                    <p className="mt-2 text-white/70">{level.summary}</p>
                  </div>

                  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {zones.map((zone) => (
                      <div
                        key={zone.id}
                        className="rounded-xl border border-white/10 bg-white/5 p-4"
                      >
                        <h4 className="mb-2 font-semibold">{zone.title}</h4>
                        <p className="text-sm text-white/70">{zone.summary}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>

          <div className="mt-12 rounded-2xl border border-white/15 bg-white/5 p-8 text-center">
            <p className="mb-6 text-white/80">
              Click on zones as you explore, or follow the guided tour to visit
              each level in sequence.
            </p>
            <Link
              href="/collections"
              className="inline-block rounded-xl border border-white/20 bg-white/10 px-6 py-3 font-medium text-white transition hover:bg-white/15"
            >
              Explore Collections Map →
            </Link>
          </div>

          <ContinueButton onContinue={onContinue} />
        </motion.div>
      </div>
    </section>
  );
}








