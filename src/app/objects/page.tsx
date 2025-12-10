"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { OBJECTS, getExhibit, getGallery } from "@/data/client";
import { ObjectImage } from "@/components/ui/ObjectImage";

export default function ObjectsPage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero - Enhanced */}
      <section className="relative overflow-hidden border-b border-white/10 bg-gradient-to-b from-black via-zinc-950 to-black">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-0 h-[600px] w-[1000px] -translate-x-1/2 rounded-full bg-gradient-to-b from-purple-500/10 to-transparent blur-3xl" />
        </div>
        
        <div className="relative mx-auto max-w-7xl px-4 py-24 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mx-auto max-w-4xl text-center"
          >
            <h1 className="mb-6 text-5xl font-bold tracking-tight text-white md:text-6xl">
              Museum Objects
            </h1>
            <p className="text-xl text-white/80 md:text-2xl">
              Explore {OBJECTS.length} detailed objects from the collection
            </p>
            <p className="mt-4 text-lg text-white/60">
              Each object tells a story of performance, innovation, and human achievement
            </p>
          </motion.div>
        </div>
      </section>

      {/* Objects Grid - Enhanced */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="mb-12 flex flex-wrap items-center justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold text-white">All Objects</h2>
              <p className="mt-2 text-white/60">{OBJECTS.length} objects across 3 levels</p>
            </div>
            <div className="flex gap-2">
              <Link
                href="/exhibits"
                className="rounded-lg border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-white/80 transition hover:bg-white/10 hover:text-white"
              >
                View Exhibits
              </Link>
              <Link
                href="/collections"
                className="rounded-lg border border-cyan-500/30 bg-cyan-500/20 px-4 py-2 text-sm font-medium text-white transition hover:bg-cyan-500/30"
              >
                Browse Collections
              </Link>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {OBJECTS.map((obj, i) => {
              const exhibit = obj.exhibitId ? getExhibit(obj.exhibitId) : null;
              // Legacy zone/level references removed - using galleries now
              const gallery = obj.galleryId ? getGallery(obj.galleryId) : null;

              return (
                <motion.div
                  key={obj.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="group"
                >
                  <Link
                    href={`/objects/${obj.slug}`}
                    className="block h-full rounded-2xl border border-white/15 bg-gradient-to-br from-white/5 to-white/0 p-6 transition-all hover:border-white/30 hover:shadow-xl hover:shadow-purple-500/10"
                  >
                    {/* Image */}
                    <div className="relative mb-4 aspect-video overflow-hidden rounded-xl">
                      <ObjectImage
                        object={obj}
                        aspectRatio="video"
                        className="transition-transform group-hover:scale-105"
                      />
                    </div>

                    {/* Badges */}
                    <div className="mb-3 flex flex-wrap items-center gap-2">
                      {gallery && (
                        <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-2.5 py-1 text-xs font-medium text-cyan-300">
                          {gallery.title}
                        </span>
                      )}
                      <span className="rounded-full border border-white/15 bg-white/5 px-2.5 py-1 text-xs text-white/70">
                        {obj.dateLabel}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="mb-2 text-xl font-bold text-white group-hover:text-purple-400 transition-colors">
                      {obj.title}
                    </h3>
                    <p className="mb-4 line-clamp-2 text-sm text-white/70">
                      {obj.subtitle}
                    </p>

                    {/* Tags */}
                    <div className="mb-4 flex flex-wrap gap-1.5">
                      {obj.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-xs text-white/60"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* CTA */}
                    <div className="flex items-center gap-2 text-sm font-medium text-purple-400 opacity-0 transition-opacity group-hover:opacity-100">
                      View details
                      <span className="transition-transform group-hover:translate-x-1">→</span>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Navigation - Enhanced */}
      <section className="border-t border-white/10 py-12">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-6 py-3 font-medium text-white transition hover:bg-white/10"
            >
              ← Home
            </Link>
            <div className="flex gap-4">
              <Link
                href="/exhibits"
                className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3 font-medium text-white/80 transition hover:bg-white/10"
              >
                View Exhibits →
              </Link>
              <Link
                href="/tour"
                className="inline-flex items-center gap-2 rounded-xl border border-cyan-500/30 bg-cyan-500/20 px-6 py-3 font-medium text-white transition hover:bg-cyan-500/30"
              >
                Start Tour →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
