"use client";

import { motion } from "framer-motion";
import { ContinueButton } from "./ContinueButton";

interface TourChapter2Props {
  onContinue: () => void;
}

export function TourChapter2({ onContinue }: TourChapter2Props) {
  return (
    <section className="min-h-screen flex items-center justify-center py-20 border-b border-white/10 bg-gradient-to-b from-black to-zinc-950">
      <div className="mx-auto max-w-4xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-8 text-center">
            <h2 className="mb-4 text-4xl font-semibold md:text-5xl">
              Arrival Sequence
            </h2>
            <p className="text-lg text-white/70">
              The journey begins before you enter the museum
            </p>
          </div>

          <div className="space-y-8">
            {[
              {
                step: "1",
                title: "The Long Axis",
                description:
                  "Visitors approach along a deliberate central axis, inspired by the Louvre's grand approach. This axis creates a sense of procession and arrival, building anticipation as visitors move toward the museum.",
              },
              {
                step: "2",
                title: "Parterre Gardens",
                description:
                  "The approach passes through carefully designed parterre gardens, where repeated landscape elements create a rhythmic, ordered sequence. This is not random landscaping—it's deliberate spatial organization.",
              },
              {
                step: "3",
                title: "The Reflecting Pool",
                description:
                  "Just before the museum entrance, a reflecting pool creates a moment of pause and reflection. The water plane amplifies the building's silhouette, creating a doubled image that emphasizes the museum's presence.",
              },
              {
                step: "4",
                title: "Threshold",
                description:
                  "The entry sequence culminates at the museum's threshold, where the axis, gardens, and reflecting pool all converge. The entrance marks the shift from exterior to interior, from approach to experience.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-2xl border border-white/15 bg-white/5 p-8"
              >
                <div className="mb-2 text-sm font-medium text-white/60">
                  Step {item.step}
                </div>
                <h3 className="mb-4 text-xl font-semibold">{item.title}</h3>
                <p className="leading-relaxed text-white/80">{item.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Interactive Axis Diagram */}
          <div className="mt-12 rounded-2xl border border-white/15 bg-white/5 p-8">
            <h3 className="mb-6 text-center text-xl font-semibold">
              Central Axis Concept
            </h3>
            <div className="relative h-64 overflow-hidden rounded-xl">
              <div className="absolute left-1/2 top-0 h-full w-1 -translate-x-1/2 bg-gradient-to-b from-sky-400/50 via-white/30 to-sky-400/50" />
              {["Approach", "Gardens", "Pool", "Entry", "Museum"].map(
                (label, i) => (
                  <div
                    key={label}
                    className="absolute top-1/2 -translate-y-1/2"
                    style={{ left: `${20 + i * 20}%` }}
                  >
                    <div className="rounded-lg border border-white/20 bg-white/10 px-4 py-2 text-sm">
                      {label}
                    </div>
                  </div>
                )
              )}
            </div>
          </div>

          <ContinueButton onContinue={onContinue} />
        </motion.div>
      </div>
    </section>
  );
}








