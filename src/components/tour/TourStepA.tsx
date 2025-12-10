"use client";

import { motion } from "framer-motion";

interface TourStepProps {
  onNext: () => void;
  onPrevious: () => void;
}

export function TourStepA({ onNext }: TourStepProps) {
  return (
    <div className="min-h-[calc(100vh-200px)] flex items-center justify-center py-20">
      <div className="mx-auto max-w-4xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/70">
            <span className="inline-block h-2 w-2 rounded-full bg-emerald-400/80 animate-pulse" />
            Step A: Welcome
          </div>

          <h1 className="mb-6 text-5xl font-bold tracking-tight md:text-7xl">
            Welcome to the Performance Museum
          </h1>
          <p className="mb-8 text-2xl text-white/80 font-light">
            Louvre × Pompidou × Brick Archive Hybrid
          </p>

          <div className="mx-auto mb-12 max-w-3xl space-y-6 text-lg leading-relaxed text-white/80">
            <div className="rounded-xl border border-white/15 bg-white/5 p-8 text-left">
              <h2 className="mb-4 text-2xl font-semibold text-white">
                The Museum's Thesis
              </h2>
              <p className="mb-4">
                The Performance Museum explores how human achievement has been
                measured, analyzed, and enhanced across history. This museum
                tells a story in three acts: from the ancient origins of
                performance optimization, through the data-driven revolution
                that made movement measurable, to the future where technology
                promises to transform human capability itself.
              </p>
              <p>
                Every object, every exhibit, every level builds on this
                narrative: performance optimization is not a modern invention,
                but a human constant. What has changed is our ability to measure,
                understand, and enhance it.
              </p>
            </div>

            <div className="rounded-xl border border-cyan-500/30 bg-cyan-500/10 p-6 text-left">
              <h3 className="mb-3 text-lg font-semibold text-cyan-300">
                Why This Matters
              </h3>
              <p>
                Understanding the history and future of performance technology
                helps us see how measurement transforms what we can achieve,
                how data reveals invisible patterns, and how technology raises
                fundamental questions about human limits and enhancement.
              </p>
            </div>
          </div>

          <motion.button
            onClick={onNext}
            className="rounded-xl border border-cyan-500/30 bg-cyan-500/20 px-12 py-6 text-xl font-semibold transition hover:bg-cyan-500/30"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Begin Your Visit →
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}







