"use client";

import { motion } from "framer-motion";
import { ContinueButton } from "./ContinueButton";
import Link from "next/link";

interface TourChapter9Props {
  onContinue: () => void;
}

export function TourChapter9({ onContinue }: TourChapter9Props) {
  return (
    <section className="min-h-screen flex items-center justify-center py-20 border-b border-white/10">
      <div className="mx-auto max-w-4xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-semibold md:text-5xl">
              Didactics & Participation
            </h2>
            <p className="text-lg text-white/70">
              How we learn, interact, and engage with performance
            </p>
          </div>

          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-white/15 bg-white/5 p-8"
            >
              <h3 className="mb-4 text-xl font-semibold">Wall Texts & Labels</h3>
              <p className="mb-4 leading-relaxed text-white/80">
                Every exhibit includes carefully crafted wall texts that provide
                context, interpretation, and key questions. Object labels—both short
                and extended—guide visitors in understanding significance and
                noticing important details.
              </p>
              <Link
                href="/didactics"
                className="inline-block rounded-lg border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/15"
              >
                View Didactics Examples →
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="rounded-2xl border border-white/15 bg-white/5 p-8"
            >
              <h3 className="mb-4 text-xl font-semibold">
                Interactive Touchscreens
              </h3>
              <p className="mb-4 leading-relaxed text-white/80">
                Throughout the museum, touchscreen stations provide deeper
                exploration. Visitors can access close-up views, data visualizations,
                comparative analysis, and "try it" simulations that make complex
                concepts accessible.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="rounded-2xl border border-white/15 bg-white/5 p-8"
            >
              <h3 className="mb-4 text-xl font-semibold">
                Participation Stations
              </h3>
              <p className="mb-4 leading-relaxed text-white/80">
                Active engagement stations allow visitors to measure their own
                performance: jump height on force plates, movement patterns through
                motion capture silhouettes, and biomechanical analysis. These
                stations transform observation into experience.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="rounded-2xl border border-white/15 bg-white/5 p-8"
            >
              <h3 className="mb-4 text-xl font-semibold">
                Video & Projection Installations
              </h3>
              <p className="leading-relaxed text-white/80">
                Large-scale projections create immersive environments: performance
                timelines, data visualizations, and historical footage that
                contextualize the objects and create atmosphere.
              </p>
            </motion.div>
          </div>

          <ContinueButton onContinue={onContinue} />
        </motion.div>
      </div>
    </section>
  );
}








