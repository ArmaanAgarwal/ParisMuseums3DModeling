"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ObjectImage } from "@/components/ui/ObjectImage";
import type { Level, Exhibit, MuseumObject } from "@/data/types";
import type { Zone } from "@/data/zones";
import { getObjectHref, getExhibitHref } from "@/lib/routes";
import { ComparePanel } from "@/components/interact/ComparePanel";
import { TimelineScrubber } from "@/components/interact/TimelineScrubber";
import { TryItLab } from "@/components/interact/TryItLab";
import { OBJECTS } from "@/data/client";
import { PREVIEW_OBJECT_COUNT } from "@/data/constants";

interface ZonePageContentProps {
  level: Level;
  zone: Zone;
  exhibits: Exhibit[];
  objects: MuseumObject[];
}

export function ZonePageContent({
  level,
  zone,
  exhibits,
  objects,
}: ZonePageContentProps) {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero */}
      <section className="border-b border-white/10 bg-gradient-to-b from-black to-zinc-950 py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="mx-auto max-w-4xl">
            <Breadcrumbs
              items={[
                { label: "Home", href: "/" },
                { label: level.title, href: `/tour?step=${level.id === "l1" ? 3 : level.id === "l2" ? 5 : 7}` },
                { label: zone.title },
              ]}
            />

            <div className="mb-4 flex flex-wrap items-center gap-3">
              <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-sm text-white/70">
                {level.title}
              </span>
            </div>

            <h1 className="mb-4 text-4xl font-semibold md:text-5xl">
              {zone.title}
            </h1>
            <p className="text-xl text-white/70">{zone.summary}</p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="border-b border-white/10 py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="mx-auto max-w-4xl">
            {/* Zone Intent */}
            {zone.zoneIntent && (
              <div className="mb-12 rounded-2xl border border-white/15 bg-white/5 p-8">
                <h2 className="mb-4 text-xl font-semibold">About This Zone</h2>
                <p className="leading-relaxed text-white/80">{zone.zoneIntent}</p>
              </div>
            )}

            {/* Interactive Moment */}
            {zone.interactionType && zone.interactionConfig && (
              <div className="mb-12">
                {zone.interactionType === "compare" && zone.interactionConfig.compare && (
                  <ComparePanel
                    title="Compare: Then and Now"
                    optionA={zone.interactionConfig.compare.optionA}
                    optionB={zone.interactionConfig.compare.optionB}
                  />
                )}
                {zone.interactionType === "timeline" && zone.interactionConfig.timeline && (
                  <TimelineScrubber
                    title="Explore Performance History"
                    events={zone.interactionConfig.timeline.events}
                    objects={OBJECTS}
                  />
                )}
                {zone.interactionType === "try-it" && zone.interactionConfig.tryIt && (
                  <TryItLab
                    type={zone.interactionConfig.tryIt.type}
                    title={zone.interactionConfig.tryIt.title}
                  />
                )}
              </div>
            )}

            {/* What to Notice */}
            {zone.whatToNotice && zone.whatToNotice.length > 0 && (
              <div className="mb-12 rounded-2xl border border-white/15 bg-white/5 p-8">
                <h2 className="mb-4 text-xl font-semibold">What to Notice</h2>
                <ul className="space-y-3">
                  {zone.whatToNotice.map((notice, i) => (
                    <li key={i} className="flex items-start gap-3 text-white/80">
                      <span className="text-cyan-400 mt-1">•</span>
                      <span>{notice}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Exhibits */}
            {exhibits.length > 0 && (
              <div className="mb-12">
                <h2 className="mb-6 text-2xl font-semibold">
                  Exhibits in This Zone ({exhibits.length})
                </h2>
                <div className="space-y-4">
                  {exhibits.map((exhibit) => (
                    <Link
                      key={exhibit.id}
                      href={getExhibitHref(exhibit.id)}
                      className="group block rounded-2xl border border-white/15 bg-white/5 p-6 transition hover:border-white/30 hover:bg-white/10"
                    >
                      <h3 className="mb-2 text-xl font-semibold group-hover:text-white/90">
                        {exhibit.title}
                      </h3>
                      <p className="mb-4 text-white/70">{exhibit.thesis}</p>
                      <div className="text-sm text-white/50 group-hover:text-white/70">
                        View exhibit →
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Objects Preview */}
            {objects.length > 0 && (
              <div>
                <h2 className="mb-6 text-2xl font-semibold">
                  Featured Objects (Preview)
                </h2>
                <p className="mb-4 text-sm text-white/60">
                  Showing {Math.min(PREVIEW_OBJECT_COUNT, objects.length)} of {objects.length} objects
                </p>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12">
                  {objects.slice(0, PREVIEW_OBJECT_COUNT).map((obj, i) => (
                    <motion.div
                      key={obj.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05 }}
                    >
                      <Link
                        href={getObjectHref(obj.id)}
                        className="group block h-full rounded-2xl border border-white/15 bg-white/5 overflow-hidden transition hover:border-white/30 hover:bg-white/10"
                      >
                        <div className="aspect-video overflow-hidden">
                          <ObjectImage
                            object={obj}
                            aspectRatio="video"
                            className="h-full"
                          />
                        </div>
                        <div className="p-4">
                          <div className="mb-2 flex items-center gap-2">
                            <span className="rounded-full border border-white/15 bg-white/5 px-2 py-1 text-xs text-white/70">
                              {obj.dateLabel}
                            </span>
                          </div>
                          <h3 className="mb-2 text-lg font-semibold group-hover:text-white/90">
                            {obj.title}
                          </h3>
                          <p className="mb-4 text-sm text-white/70 line-clamp-2">{obj.subtitle}</p>
                          <div className="flex items-center gap-2 text-sm text-white/50 group-hover:text-white/70">
                            View details →
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {/* All Objects */}
            {objects.length > PREVIEW_OBJECT_COUNT && (
              <div>
                <h2 className="mb-6 text-2xl font-semibold">
                  All Objects in This Zone ({objects.length})
                </h2>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {objects.map((obj, i) => (
                    <motion.div
                      key={obj.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05 }}
                    >
                      <Link
                        href={getObjectHref(obj.id)}
                        className="group block h-full rounded-2xl border border-white/15 bg-white/5 overflow-hidden transition hover:border-white/30 hover:bg-white/10"
                      >
                        <div className="aspect-video overflow-hidden">
                          <ObjectImage
                            object={obj}
                            aspectRatio="video"
                            className="h-full"
                          />
                        </div>
                        <div className="p-4">
                          <div className="mb-2 flex items-center gap-2">
                            <span className="rounded-full border border-white/15 bg-white/5 px-2 py-1 text-xs text-white/70">
                              {obj.dateLabel}
                            </span>
                          </div>
                          <h3 className="mb-2 text-lg font-semibold group-hover:text-white/90">
                            {obj.title}
                          </h3>
                          <p className="mb-4 text-sm text-white/70 line-clamp-2">{obj.subtitle}</p>
                          <div className="flex items-center gap-2 text-sm text-white/50 group-hover:text-white/70">
                            View details →
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="mx-auto max-w-4xl flex gap-4">
            <Link
              href={`/tour?step=${level.id === "l1" ? 3 : level.id === "l2" ? 5 : 7}`}
              className="rounded-xl border border-white/20 bg-white/5 px-6 py-3 font-medium transition hover:bg-white/10"
            >
              ← Back to {level.title}
            </Link>
            <Link
              href="/tour"
              className="rounded-xl border border-cyan-500/30 bg-cyan-500/20 px-6 py-3 font-medium transition hover:bg-cyan-500/30"
            >
              Continue Guided Tour →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

