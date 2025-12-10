"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Gallery, MuseumObject } from "@/data/types";
import { ImageWithFallback } from "@/components/ui/ImageWithFallback";
import { EXHIBITS, getExhibit } from "@/data/client";
import { useState } from "react";

interface GalleryDetailContentProps {
  gallery: Gallery;
  objects: MuseumObject[];
}

export function GalleryDetailContent({ gallery, objects }: GalleryDetailContentProps) {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  
  // Get all unique tags from objects
  const allTags = Array.from(new Set(objects.flatMap(obj => obj.tags))).sort();
  
  // Filter objects by tag
  const filteredObjects = selectedTag 
    ? objects.filter(obj => obj.tags.includes(selectedTag))
    : objects;

  // Find recommended exhibit (first exhibit that includes objects from this gallery)
  const recommendedExhibit = EXHIBITS.find(ex => 
    ex.galleryIds.includes(gallery.id)
  ) || EXHIBITS[0];

  const keyQuestions: Record<string, string[]> = {
    "origins-icons": [
      "How did early tools make performance measurable and comparable?",
      "What changed when timing became mechanical instead of human judgment?",
      "Who had access to these innovations, and who was excluded?"
    ],
    "data-motion-body": [
      "How does measurement change what athletes optimize?",
      "What becomes visible when sensors track the body's internal mechanics?",
      "When does data help performance, and when does it limit it?"
    ],
    "recovery-ethics-future": [
      "When does recovery technology become performance enhancement?",
      "How do we draw the line between natural and technological recovery?",
      "Who benefits most from recovery innovations, and who gets left behind?"
    ]
  };

  const questions = keyQuestions[gallery.id] || [];

  return (
    <div className="min-h-screen bg-black">
      {/* Hero */}
      <section className="relative border-b border-white/10 bg-gradient-to-b from-black to-zinc-950 py-20">
        {gallery.heroImage && (
          <div className="absolute inset-0 opacity-10">
            <img
              src={gallery.heroImage}
              alt={`${gallery.title} hero image`}
              className="h-full w-full object-cover"
            />
          </div>
        )}
        <div className="relative mx-auto max-w-7xl px-4 md:px-6">
          <div className="mx-auto max-w-4xl">
            <Link
              href="/galleries"
              className="mb-6 inline-flex items-center gap-2 text-sm text-white/60 hover:text-white transition"
            >
              ← Back to Galleries
            </Link>
            <h1 className="mb-4 text-4xl font-semibold md:text-5xl">{gallery.title}</h1>
            <p className="mb-6 text-xl text-white/70 leading-relaxed">{gallery.blurb}</p>
          </div>
        </div>
      </section>

      {/* Gallery Intro */}
      <section className="border-b border-white/10 py-16">
        <div className="mx-auto max-w-4xl px-4 md:px-6">
          <div className="mb-8 rounded-2xl border border-white/15 bg-white/5 p-8">
            <h2 className="mb-4 text-2xl font-semibold">About This Gallery</h2>
            <p className="mb-6 leading-relaxed text-white/80">
              {gallery.curatorialBlurb || gallery.blurb}
            </p>
            
            {/* Curator Note */}
            {gallery.curatorialBlurb && (
              <div className="mt-6 rounded-xl border border-purple-500/30 bg-purple-500/10 p-6">
                <div className="mb-2 text-xs font-semibold text-purple-400 uppercase tracking-wide">Curator Note</div>
                <p className="text-sm leading-relaxed text-white/80">
                  {gallery.curatorialBlurb}
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Key Questions */}
      {questions.length > 0 && (
        <section className="border-b border-white/10 py-16">
          <div className="mx-auto max-w-4xl px-4 md:px-6">
            <h2 className="mb-6 text-2xl font-semibold">Key Questions</h2>
            <div className="space-y-4">
              {questions.map((q, i) => (
                <div key={i} className="rounded-xl border border-white/10 bg-white/5 p-6">
                  <p className="text-white/90 leading-relaxed">{q}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Objects Grid with Filters */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="mb-8 flex items-center justify-between">
            <h2 className="text-3xl font-bold">Objects in This Gallery</h2>
            <div className="text-sm text-white/60">
              {filteredObjects.length} of {objects.length} objects
            </div>
          </div>

          {/* Tag Filters */}
          {allTags.length > 0 && (
            <div className="mb-8 flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedTag(null)}
                className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
                  selectedTag === null
                    ? "border-cyan-500/50 bg-cyan-500/20 text-cyan-300"
                    : "border-white/15 bg-white/5 text-white/70 hover:border-white/30 hover:bg-white/10"
                }`}
              >
                All
              </button>
              {allTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setSelectedTag(tag)}
                  className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
                    selectedTag === tag
                      ? "border-cyan-500/50 bg-cyan-500/20 text-cyan-300"
                      : "border-white/15 bg-white/5 text-white/70 hover:border-white/30 hover:bg-white/10"
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          )}

          {/* Objects Grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {filteredObjects.map((obj, i) => (
              <motion.div
                key={obj.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <Link
                  href={`/objects/${obj.slug}`}
                  className="group block h-full rounded-xl border border-white/15 bg-white/5 p-6 transition-all hover:border-white/30 hover:bg-white/10"
                >
                  <div className="relative mb-4 aspect-video overflow-hidden rounded-lg">
                    <ImageWithFallback
                      object={obj}
                      className="h-full w-full"
                      aspectRatio="video"
                    />
                  </div>
                  <div className="mb-2 text-xs text-white/60">{obj.dateLabel}</div>
                  <h3 className="mb-2 text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors">
                    {obj.title}
                  </h3>
                  <p className="line-clamp-2 text-sm text-white/70">
                    {obj.didactics?.wallLabel || obj.shortLabel || obj.description}
                  </p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Recommended Exhibit */}
      {recommendedExhibit && (
        <section className="border-t border-white/10 py-20">
          <div className="mx-auto max-w-7xl px-4 md:px-6">
            <h2 className="mb-6 text-2xl font-semibold">Recommended Exhibit</h2>
            <Link
              href={`/exhibits/${recommendedExhibit.id}`}
              className="group block rounded-2xl border border-white/15 bg-gradient-to-br from-white/5 to-white/0 p-8 transition-all hover:border-white/30 hover:shadow-xl hover:shadow-cyan-500/10"
            >
              <div className="mb-3 text-sm font-medium text-cyan-400">{recommendedExhibit.subtitle}</div>
              <h3 className="mb-4 text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                {recommendedExhibit.title}
              </h3>
              <p className="mb-6 text-white/70 leading-relaxed line-clamp-3">
                {recommendedExhibit.intro}
              </p>
              <div className="flex items-center justify-between text-sm text-white/60">
                <span>{recommendedExhibit.stopIds.length} stops</span>
                <span>{recommendedExhibit.durationEstimate}</span>
              </div>
            </Link>
          </div>
        </section>
      )}
    </div>
  );
}
