"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { getZonesByLevel, getExhibitsByZone, getObjectsByExhibit } from "@/data/client";
import { ObjectImage } from "@/components/ui/ObjectImage";
import { getZoneHref, getObjectHref } from "@/lib/routes";

interface TourStepLevel2Zone1Props {
  onNext: () => void;
  onPrevious: () => void;
}

export function TourStepLevel2Zone1({ onNext, onPrevious }: TourStepLevel2Zone1Props) {
  const zones = getZonesByLevel("l2");
  const firstZone = zones[0];
  const exhibits = firstZone ? getExhibitsByZone(firstZone.id) : [];
  const objects = exhibits.flatMap((ex) => getObjectsByExhibit(ex.id));
  const featuredObjects = objects.slice(0, 4);

  if (!firstZone) return null;

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
              {firstZone.title}
            </h1>
            <p className="mb-6 text-xl leading-relaxed text-white/80">
              {firstZone.zoneIntent || firstZone.summary}
            </p>
          </div>

          {/* What to Notice */}
          {firstZone.whatToNotice && firstZone.whatToNotice.length > 0 && (
            <div className="mx-auto max-w-4xl rounded-2xl border border-white/15 bg-white/5 p-8">
              <h2 className="mb-4 text-xl font-semibold">What to Notice in This Zone</h2>
              <ul className="space-y-3">
                {firstZone.whatToNotice.map((notice, i) => (
                  <li key={i} className="flex items-start gap-3 text-white/80">
                    <span className="text-cyan-400 mt-1">•</span>
                    <span>{notice}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Featured Objects */}
          {featuredObjects.length > 0 && (
            <div className="mx-auto max-w-4xl">
              <h2 className="mb-6 text-2xl font-semibold">Featured Objects</h2>
              <div className="grid gap-6 md:grid-cols-2">
                {featuredObjects.map((obj, i) => (
                  <motion.div
                    key={obj.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Link
                      href={`${getObjectHref(obj.id)}?fromTour=1&tourStep=level2-zone1`}
                      className="group block rounded-2xl border border-white/15 bg-white/5 overflow-hidden transition hover:border-white/30 hover:bg-white/10"
                    >
                      <div className="aspect-video overflow-hidden">
                        <ObjectImage object={obj}
                          aspectRatio="video"
                          className="h-full"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="mb-2 text-lg font-semibold group-hover:text-white/90">
                          {obj.title}
                        </h3>
                        <p className="mb-2 text-sm text-white/70">{obj.dateLabel}</p>
                        <p className="text-sm text-white/60 line-clamp-2">{obj.subtitle}</p>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* Actions */}
          <div className="mx-auto max-w-4xl flex gap-4">
            <Link
              href={`${getZoneHref(firstZone.id)}?fromTour=1&tourStep=level2-zone1`}
              className="flex-1 rounded-xl border border-cyan-500/30 bg-cyan-500/20 px-8 py-4 text-center font-medium transition hover:bg-cyan-500/30"
            >
              Enter This Zone
            </Link>
            <button
              onClick={onNext}
              className="rounded-xl border border-white/20 bg-white/5 px-8 py-4 font-medium transition hover:bg-white/10"
            >
              Continue Tour →
            </button>
          </div>

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
              Next Zone →
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}








