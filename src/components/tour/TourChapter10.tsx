"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { getAllObjects } from "@/data";

export function TourChapter10() {
  const allObjects = getAllObjects();
  const featuredObjects = allObjects.slice(0, 9);

  return (
    <section className="min-h-screen flex items-center justify-center py-20">
      <div className="mx-auto max-w-6xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="mb-6 text-4xl font-semibold md:text-5xl">
            What You Take With You
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-lg leading-relaxed text-white/80">
            You've journeyed through the Performance Museum, from ancient origins
            to future possibilities. The story of performance is ongoing—and you're
            part of it. Continue exploring the collection, dive deeper into objects
            that intrigued you, and consider how these ideas shape your own
            understanding of human achievement.
          </p>

          <div className="mb-12 rounded-2xl border border-white/15 bg-white/5 p-8">
            <h3 className="mb-6 text-2xl font-semibold">Continue Exploring</h3>
            <div className="grid gap-4 md:grid-cols-3">
              {featuredObjects.map((obj, i) => (
                <motion.div
                  key={obj.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={`/objects/${obj.slug}`}
                    className="group block rounded-xl border border-white/10 bg-white/5 p-4 transition hover:border-white/20 hover:bg-white/10"
                  >
                    <div className="mb-2 text-sm font-medium text-white/90 group-hover:text-white">
                      {obj.title}
                    </div>
                    <div className="text-xs text-white/60">{obj.dateLabel}</div>
                  </Link>
                </motion.div>
              ))}
            </div>
            <Link
              href="/objects"
              className="mt-6 inline-block rounded-xl border border-white/20 bg-white/10 px-6 py-3 font-medium text-white transition hover:bg-white/15"
            >
              View All Objects →
            </Link>
          </div>

          <div className="space-y-4">
            <Link
              href="/"
              className="inline-block rounded-xl border border-white/20 bg-white/10 px-8 py-4 font-medium text-white transition hover:bg-white/15"
            >
              Return to Home
            </Link>
            <div className="text-sm text-white/60">
              Thank you for visiting the Performance Museum
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}







