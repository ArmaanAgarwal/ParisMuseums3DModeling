"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Exhibit, MuseumObject } from "@/data/types";
import { ExhibitPlayer } from "@/components/exhibits/ExhibitPlayer";

interface ExhibitDetailContentProps {
  exhibit: Exhibit;
  objects: MuseumObject[];
}

export function ExhibitDetailContent({ exhibit, objects }: ExhibitDetailContentProps) {
  const [showPlayer, setShowPlayer] = useState(false);

  if (showPlayer) {
    return <ExhibitPlayer exhibit={exhibit} objects={objects} onClose={() => setShowPlayer(false)} />;
  }

  return (
    <div className="min-h-screen bg-black">
      <section className="border-b border-white/10 bg-gradient-to-b from-black to-zinc-950 py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="mx-auto max-w-4xl">
            <Link
              href="/exhibits"
              className="mb-6 inline-flex items-center gap-2 text-sm text-white/60 hover:text-white"
            >
              ← Back to Exhibits
            </Link>
            <div className="mb-4 text-sm font-medium text-cyan-400">{exhibit.subtitle}</div>
            <h1 className="mb-6 text-4xl font-semibold md:text-5xl">{exhibit.title}</h1>
            <p className="mb-8 text-lg text-white/80 leading-relaxed">{exhibit.intro}</p>
            <div className="mb-8 flex items-center gap-6 text-sm text-white/60">
              <span>{exhibit.stopIds.length} stops</span>
              <span>{exhibit.durationEstimate}</span>
            </div>
            <button
              onClick={() => setShowPlayer(true)}
              className="rounded-xl border border-cyan-500/50 bg-gradient-to-r from-cyan-500/20 to-cyan-500/10 px-8 py-4 font-semibold text-white transition-all hover:border-cyan-400/70 hover:from-cyan-500/30 hover:to-cyan-500/20"
            >
              Start Exhibit →
            </button>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <h2 className="mb-12 text-3xl font-bold">Exhibit Stops</h2>
          <div className="space-y-4">
            {objects.map((obj, i) => (
              <motion.div
                key={obj.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Link
                  href={`/objects/${obj.slug}`}
                  className="group block rounded-xl border border-white/15 bg-white/5 p-6 transition-all hover:border-white/30 hover:bg-white/10"
                >
                  <div className="flex items-start gap-6">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-white/15 bg-white/5 text-lg font-bold text-white/60">
                      {i + 1}
                    </div>
                    <div className="flex-1">
                      <div className="mb-2 text-sm text-white/60">{obj.dateLabel}</div>
                      <h3 className="mb-2 text-xl font-semibold text-white group-hover:text-cyan-400 transition-colors">
                        {obj.title}
                      </h3>
                      <p className="text-white/70">{obj.shortLabel || obj.description}</p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

