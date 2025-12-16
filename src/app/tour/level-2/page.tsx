"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { TourProgressWidget } from "@/components/TourProgressWidget";
import {
  getLevel,
  getZonesByLevel,
  getExhibitsByZone,
  getObjectsByLevel,
} from "@/data/museum";

export default function Level2Page() {
  const level = getLevel("l2");
  const zones = getZonesByLevel("l2");
  const featuredObjects = getObjectsByLevel("l2").slice(0, 6);

  if (!level) return null;

  return (
    <div className="min-h-screen bg-black text-white">
      <TourProgressWidget currentStep="level-2" />

      <div className="mx-auto max-w-7xl px-4 py-20 md:px-6">
        {/* Level Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="mb-4 text-sm font-medium uppercase tracking-wider text-cyan-400">
            Level 2
          </div>
          <h1 className="mb-6 text-5xl font-bold tracking-tight md:text-7xl">
            {level.title}
          </h1>
          <p className="mb-6 text-xl text-white/80">{level.summary}</p>
          <div className="rounded-xl border border-cyan-500/30 bg-cyan-500/10 p-6">
            <p className="text-white/90 leading-relaxed">{level.levelIntro}</p>
          </div>
        </motion.div>

        {/* Learning Goals */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <h2 className="mb-4 text-2xl font-semibold">Learning Goals</h2>
          <ul className="grid gap-3 md:grid-cols-2">
            {level.learningGoals.map((goal, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-1 text-cyan-400">•</span>
                <span className="text-white/80">{goal}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Interactive Mini-Map */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-12"
        >
          <h2 className="mb-6 text-2xl font-semibold">Level 2 Floor Plan</h2>
          <div className="rounded-xl border border-white/15 bg-white/5 p-8">
            <div className="relative aspect-video bg-gradient-to-br from-cyan-950/20 to-black">
              <div className="absolute inset-0 grid grid-cols-2 gap-4 p-4">
                {zones.map((zone) => (
                  <Link
                    key={zone.id}
                    href={`/tour/level-2/zone/${zone.id}`}
                    className="group rounded-lg border border-white/20 bg-white/5 p-4 transition hover:border-cyan-400/50 hover:bg-cyan-500/10"
                  >
                    <h3 className="mb-2 font-semibold group-hover:text-cyan-400 transition">
                      {zone.title}
                    </h3>
                    <p className="text-sm text-white/60">{zone.summary}</p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Featured Exhibits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mb-12"
        >
          <h2 className="mb-6 text-2xl font-semibold">Featured Exhibits</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {zones.slice(0, 4).map((zone) => {
              const exhibits = getExhibitsByZone(zone.id);
              return exhibits.slice(0, 1).map((exhibit) => (
                <Link
                  key={exhibit.id}
                  href={`/exhibits/${exhibit.id}`}
                  className="group rounded-xl border border-white/15 bg-white/5 p-6 transition hover:border-cyan-400/50 hover:bg-cyan-500/10"
                >
                  <div className="mb-2 text-sm font-medium text-cyan-400">
                    {zone.title}
                  </div>
                  <h3 className="mb-2 text-xl font-semibold group-hover:text-cyan-400 transition">
                    {exhibit.title}
                  </h3>
                  <p className="mb-4 text-sm text-white/70 line-clamp-2">
                    {exhibit.thesis}
                  </p>
                  <div className="text-sm text-cyan-400">View Exhibit →</div>
                </Link>
              ));
            })}
          </div>
        </motion.div>

        {/* Featured Objects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mb-12"
        >
          <h2 className="mb-6 text-2xl font-semibold">Featured Objects</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {featuredObjects.map((obj) => (
              <Link
                key={obj.id}
                href={`/objects/${obj.slug}`}
                className="group rounded-xl border border-white/15 bg-white/5 p-6 transition hover:border-cyan-400/50 hover:bg-cyan-500/10"
              >
                <div className="mb-2 text-sm font-medium text-white/60">
                  {obj.dateLabel}
                </div>
                <h3 className="mb-2 text-lg font-semibold group-hover:text-cyan-400 transition">
                  {obj.title}
                </h3>
                <p className="mb-4 text-sm text-white/70 line-clamp-2">
                  {obj.description}
                </p>
                <div className="text-sm text-cyan-400">View Object →</div>
              </Link>
            ))}
          </div>
        </motion.div>

        {/* Continue CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0 }}
          className="text-center"
        >
          <Link
            href="/tour/transition-2-3"
            className="inline-block rounded-xl border border-white/20 bg-white/10 px-12 py-6 text-xl font-semibold transition hover:border-white/30 hover:bg-white/15"
          >
            Continue to Level 3 →
          </Link>
        </motion.div>
      </div>
    </div>
  );
}








