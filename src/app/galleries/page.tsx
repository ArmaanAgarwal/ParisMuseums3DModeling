"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { GALLERIES, getObjectsByGallery } from "@/data/client";

export default function GalleriesPage() {
  // Fail-safe check
  if (!GALLERIES || GALLERIES.length === 0) {
    return (
      <div className="min-h-screen bg-black">
        <section className="border-b border-white/10 bg-gradient-to-b from-black to-zinc-950 py-20">
          <div className="mx-auto max-w-7xl px-4 md:px-6">
            <div className="mx-auto max-w-4xl">
              <h1 className="mb-4 text-4xl font-semibold md:text-5xl">Galleries</h1>
            </div>
          </div>
        </section>
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-4 md:px-6">
            <div className="rounded-xl border border-red-500/30 bg-red-500/10 p-8 text-center">
              <div className="mb-2 text-lg font-semibold text-red-300">No galleries loaded (data issue)</div>
              <div className="text-sm text-red-200/70">
                GALLERIES array is empty or undefined. Check src/data/galleries.ts and src/data/client.ts exports.
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  const galleryKeyQuestions: Record<string, string[]> = {
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

  return (
    <div className="min-h-screen bg-black">
      <section className="border-b border-white/10 bg-gradient-to-b from-black to-zinc-950 py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mx-auto max-w-4xl"
          >
            <h1 className="mb-4 text-4xl font-semibold md:text-5xl">Galleries</h1>
            <p className="mb-6 text-lg text-white/70">
              Explore the museum's three thematic galleries, each containing 4 carefully curated objects that tell a story about how innovation has reshaped sport.
            </p>
            <p className="text-white/60 leading-relaxed">
              These galleries trace how new ideas, tools, and systems changed what athletes could do—from early standardization to modern data-driven training and recovery technologies. Each object represents a moment when innovation reshaped sport.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-3">
            {GALLERIES.map((gallery, i) => {
              const objects = getObjectsByGallery(gallery.id);
              const keyQuestions = galleryKeyQuestions[gallery.id] || [];
              
              return (
                <motion.div
                  key={gallery.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className="group block h-full rounded-2xl border border-white/15 bg-gradient-to-br from-white/5 to-white/0 p-8 transition-all hover:border-white/30 hover:shadow-xl hover:shadow-cyan-500/10">
                    <Link href={`/galleries/${gallery.id}`} className="block">
                      <h3 className="mb-3 text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                        {gallery.title}
                      </h3>
                      <p className="mb-6 text-white/70 leading-relaxed line-clamp-2">
                        {gallery.blurb}
                      </p>
                    </Link>
                    
                    {/* Key Questions */}
                    {keyQuestions.length > 0 && (
                      <div className="mb-6">
                        <div className="mb-3 text-xs font-semibold text-white/60 uppercase tracking-wide">Key Questions</div>
                        <ul className="space-y-2">
                          {keyQuestions.map((q, qi) => (
                            <li key={qi} className="flex items-start gap-2 text-sm text-white/70">
                              <span className="mt-1 text-cyan-400">•</span>
                              <span>{q}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    <div className="mb-6 flex flex-wrap gap-2">
                      {gallery.themeBullets?.slice(0, 3).map((bullet, bi) => (
                        <span
                          key={bi}
                          className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70"
                        >
                          {bullet}
                        </span>
                      ))}
                    </div>
                    
                    <div className="mt-6 flex items-center gap-4">
                      <Link
                        href={`/galleries/${gallery.id}`}
                        className="flex-1 rounded-lg border border-white/20 bg-white/5 px-4 py-2 text-center text-sm font-medium text-white transition hover:bg-white/10"
                      >
                        Explore Objects
                      </Link>
                      <Link
                        href={`/tour?gallery=${gallery.id}`}
                        className="flex-1 rounded-lg border border-cyan-500/30 bg-cyan-500/20 px-4 py-2 text-center text-sm font-medium text-white transition hover:bg-cyan-500/30"
                      >
                        Start Gallery Tour
                      </Link>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
