"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { EXHIBITS } from "@/data/client";

export default function ExhibitsPage() {
  // Fail-safe check
  if (!EXHIBITS || EXHIBITS.length === 0) {
    return (
      <div className="min-h-screen bg-black">
        <section className="border-b border-white/10 bg-gradient-to-b from-black to-zinc-950 py-20">
          <div className="mx-auto max-w-7xl px-4 md:px-6">
            <div className="mx-auto max-w-4xl">
              <h1 className="mb-4 text-4xl font-semibold md:text-5xl">Exhibits</h1>
            </div>
          </div>
        </section>
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-4 md:px-6">
            <div className="rounded-xl border border-red-500/30 bg-red-500/10 p-8 text-center">
              <div className="mb-2 text-lg font-semibold text-red-300">No exhibits loaded (data issue)</div>
              <div className="text-sm text-red-200/70">
                EXHIBITS array is empty or undefined. Check src/data/exhibits.ts and src/data/client.ts exports.
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black">
      <section className="border-b border-white/10 bg-gradient-to-b from-black to-zinc-950 py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mx-auto max-w-4xl"
          >
            <h1 className="mb-4 text-4xl font-semibold md:text-5xl">Exhibits</h1>
            <p className="text-lg text-white/70">
              Explore curated stories that connect objects across galleries. Each exhibit is a mini-tour with stops, duration estimates, and a narrative thread.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-3">
            {EXHIBITS.map((exhibit, i) => (
              <motion.div
                key={exhibit.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="group block h-full rounded-2xl border border-white/15 bg-gradient-to-br from-white/5 to-white/0 p-8 transition-all hover:border-white/30 hover:shadow-xl hover:shadow-cyan-500/10">
                  <div className="mb-3 text-sm font-medium text-cyan-400">{exhibit.subtitle}</div>
                  <h3 className="mb-4 text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                    {exhibit.title}
                  </h3>
                  <p className="mb-6 line-clamp-4 text-white/70 leading-relaxed">
                    {exhibit.intro}
                  </p>
                  <div className="mb-6 flex items-center justify-between text-sm text-white/60">
                    <span>{exhibit.stopIds.length} stops</span>
                    <span>{exhibit.durationEstimate}</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <Link
                      href={`/exhibits/${exhibit.id}`}
                      className="flex-1 rounded-lg border border-cyan-500/30 bg-cyan-500/20 px-4 py-3 text-center text-sm font-medium text-white transition hover:bg-cyan-500/30"
                    >
                      Start Exhibit
                    </Link>
                    <Link
                      href={`/exhibits/${exhibit.id}`}
                      className="rounded-lg border border-white/20 bg-white/5 px-4 py-3 text-sm font-medium text-white transition hover:bg-white/10"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
