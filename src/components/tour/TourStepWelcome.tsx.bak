"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface TourStepProps {
  stepNumber: number;
  totalSteps: number;
  onNext: () => void;
  onPrevious: () => void;
  isFirst: boolean;
  isLast: boolean;
}

export function TourStepWelcome({
  onNext,
}: TourStepProps) {
  return (
    <div className="min-h-screen py-20">
      <div className="mx-auto max-w-4xl px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/70">
            <span className="inline-block h-2 w-2 rounded-full bg-emerald-400/80 animate-pulse" />
            Step 1: Welcome
          </div>

          <h1 className="mb-6 text-5xl font-bold tracking-tight md:text-7xl">
            Welcome to the Performance Museum
          </h1>
          <p className="mb-8 text-xl text-white/80 md:text-2xl font-light">
            Louvre × Pompidou × Brick Archive Hybrid
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="space-y-8"
        >
          {/* Wall Text Panel */}
          <div className="rounded-2xl border border-white/15 bg-white/5 p-8">
            <h2 className="mb-4 text-2xl font-semibold">Museum Thesis</h2>
            <p className="mb-4 leading-relaxed text-white/80 text-lg">
              The Performance Museum explores the relationship between human achievement
              and the tools, technologies, and techniques that enable it. This museum
              tells a story across three levels: from the origins of measurement and
              equipment, through the data-driven analysis of movement, to the future of
              immersive training and enhancement.
            </p>
            <p className="leading-relaxed text-white/80 text-lg">
              Each level builds on the last, creating a narrative arc that shows how our
              understanding of performance has evolved, and how technology has transformed
              both how we measure achievement and how we pursue it.
            </p>
          </div>

          {/* Why This Matters */}
          <div className="rounded-2xl border border-cyan-500/30 bg-cyan-500/10 p-8">
            <h2 className="mb-4 text-2xl font-semibold text-cyan-300">
              Why This Museum Matters
            </h2>
            <ul className="space-y-3 text-white/90">
              <li className="flex items-start gap-3">
                <span className="mt-1 text-cyan-400">•</span>
                <span>
                  Performance optimization is not a modern invention—ancient athletes
                  understood biomechanics intuitively, creating equipment that enhanced
                  natural movement over 2,500 years ago.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 text-cyan-400">•</span>
                <span>
                  Measurement technology transformed performance from subjective observation
                  to objective data, creating the foundation for all modern performance
                  analysis.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 text-cyan-400">•</span>
                <span>
                  Sensors and data visualization make invisible patterns visible, enabling
                  precise optimization that was impossible before.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 text-cyan-400">•</span>
                <span>
                  The future of performance raises fundamental questions about enhancement,
                  access, and the meaning of achievement.
                </span>
              </li>
            </ul>
          </div>

          {/* Three Levels Preview */}
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-xl border border-amber-500/30 bg-amber-500/10 p-6">
              <div className="mb-3 text-3xl font-bold text-amber-400">Level 1</div>
              <h3 className="mb-2 text-xl font-semibold">Origins & Icons</h3>
              <p className="text-sm text-white/70">
                Historical roots of performance, from ancient equipment to early
                measurement tools.
              </p>
            </div>
            <div className="rounded-xl border border-cyan-500/30 bg-cyan-500/10 p-6">
              <div className="mb-3 text-3xl font-bold text-cyan-400">Level 2</div>
              <h3 className="mb-2 text-xl font-semibold">Data, Motion & Body</h3>
              <p className="text-sm text-white/70">
                Performance becomes data through motion capture, sensors, and real-time
                analysis.
              </p>
            </div>
            <div className="rounded-xl border border-violet-500/30 bg-violet-500/10 p-6">
              <div className="mb-3 text-3xl font-bold text-violet-400">Level 3</div>
              <h3 className="mb-2 text-xl font-semibold">Futures & Immersion</h3>
              <p className="text-sm text-white/70">
                The future of performance through VR, AI coaching, and immersive
                technologies.
              </p>
            </div>
          </div>

          {/* Interactive Element: Museum Timeline Preview */}
          <div className="rounded-2xl border border-white/15 bg-white/5 p-8">
            <h2 className="mb-4 text-2xl font-semibold">Explore the Timeline</h2>
            <p className="mb-6 text-white/70">
              Drag the timeline to see how performance technology evolved across history.
            </p>
            <div className="relative h-32 bg-white/5 rounded-lg overflow-hidden">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full h-1 bg-white/20 rounded-full">
                  <motion.div
                    className="h-full bg-cyan-400 rounded-full"
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                  />
                </div>
              </div>
              <div className="absolute inset-0 flex items-center justify-between px-4">
                <div className="text-xs text-white/60">500 BCE</div>
                <div className="text-xs text-white/60">1900</div>
                <div className="text-xs text-white/60">2000</div>
                <div className="text-xs text-white/60">2025+</div>
              </div>
            </div>
            <p className="mt-4 text-sm text-white/60">
              From ancient sandals to AI coaching—performance technology spans millennia.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

