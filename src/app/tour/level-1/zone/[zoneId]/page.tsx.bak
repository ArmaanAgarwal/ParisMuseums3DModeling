"use client";

import { use } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { TourProgressWidget } from "@/components/TourProgressWidget";
import { getZone, getExhibitsByZone, getLevel } from "@/data/museum";
import { notFound } from "next/navigation";

interface ZonePageProps {
  params: Promise<{ zoneId: string }>;
}

export default function ZonePage({ params }: ZonePageProps) {
  const { zoneId } = use(params);
  const zone = getZone(zoneId);
  const level = zone ? getLevel(zone.levelId) : null;
  const exhibits = zone ? getExhibitsByZone(zone.id) : [];

  if (!zone || !level) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <TourProgressWidget currentStep="level-1" />

      <div className="mx-auto max-w-7xl px-4 py-20 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-8">
            <Link
              href={`/tour/level-1`}
              className="mb-4 inline-flex items-center text-white/60 hover:text-white transition"
            >
              ← Back to Level 1
            </Link>
            <div className="mb-4 text-sm font-medium uppercase tracking-wider text-amber-400">
              {level.title} • {zone.title}
            </div>
            <h1 className="mb-6 text-5xl font-bold tracking-tight md:text-7xl">
              {zone.title}
            </h1>
            <p className="mb-6 text-xl text-white/80">{zone.summary}</p>
            <div className="rounded-xl border border-amber-500/30 bg-amber-500/10 p-6">
              <h2 className="mb-3 text-lg font-semibold">Zone Intent</h2>
              <p className="text-white/90 leading-relaxed">{zone.zoneIntent}</p>
            </div>
          </div>

          {zone.whatToNotice && zone.whatToNotice.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-12"
            >
              <h2 className="mb-4 text-2xl font-semibold">What to Notice</h2>
              <ul className="space-y-2">
                {zone.whatToNotice.map((notice, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-1 text-amber-400">•</span>
                    <span className="text-white/80">{notice}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-12"
          >
            <h2 className="mb-6 text-2xl font-semibold">Exhibits in This Zone</h2>
            <div className="grid gap-6 md:grid-cols-2">
              {exhibits.map((exhibit) => (
                <Link
                  key={exhibit.id}
                  href={`/exhibits/${exhibit.id}`}
                  className="group rounded-xl border border-white/15 bg-white/5 p-6 transition hover:border-amber-400/50 hover:bg-amber-500/10"
                >
                  <h3 className="mb-2 text-xl font-semibold group-hover:text-amber-400 transition">
                    {exhibit.title}
                  </h3>
                  <p className="mb-4 text-sm text-white/70 line-clamp-3">
                    {exhibit.thesis}
                  </p>
                  <div className="text-sm text-amber-400">View Exhibit →</div>
                </Link>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-center"
          >
            <Link
              href="/tour/level-1"
              className="inline-block rounded-xl border border-white/20 bg-white/10 px-8 py-4 font-semibold transition hover:border-white/30 hover:bg-white/15"
            >
              Back to Level 1
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

