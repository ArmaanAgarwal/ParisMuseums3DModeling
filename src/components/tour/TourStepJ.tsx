"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { getFeaturedObjects } from "@/data/client";

interface TourStepProps {
  onNext: () => void;
  onPrevious: () => void;
}

export function TourStepJ({ onNext }: TourStepProps) {
  const featuredObjects = getFeaturedObjects(6);

  return (
    <div className="min-h-[calc(100vh-200px)] py-20">
      <div className="mx-auto max-w-7xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-8 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/70">
              Step J: Reflection
            </div>
            <h1 className="mb-6 text-5xl font-bold tracking-tight md:text-7xl">
              What You've Learned
            </h1>
          </div>

          <div className="mx-auto max-w-4xl space-y-8">
            <div className="rounded-xl border border-white/15 bg-white/5 p-8">
              <h2 className="mb-4 text-2xl font-semibold">Key Takeaways</h2>
              <ul className="space-y-4 text-white/80">
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-cyan-400">•</span>
                  <span>
                    Performance optimization is not a modern invention—ancient
                    athletes understood biomechanics intuitively
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-cyan-400">•</span>
                  <span>
                    Measurement technology transformed performance from subjective
                    observation to objective data
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-cyan-400">•</span>
                  <span>
                    Sensors and data visualization make invisible patterns visible,
                    enabling precise optimization
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-cyan-400">•</span>
                  <span>
                    The future of performance raises fundamental questions about
                    enhancement, access, and the meaning of achievement
                  </span>
                </li>
              </ul>
            </div>

            <div className="rounded-xl border border-white/15 bg-white/5 p-8">
              <h2 className="mb-4 text-2xl font-semibold">Continue Exploring</h2>
              <div className="grid gap-4 md:grid-cols-2">
                <Link
                  href="/paths"
                  className="rounded-lg border border-white/10 bg-white/5 p-4 transition hover:border-cyan-400/50 hover:bg-cyan-500/10"
                >
                  <h3 className="mb-2 font-semibold">Curated Pathways</h3>
                  <p className="text-sm text-white/70">
                    Explore thematic journeys through the collection
                  </p>
                </Link>
                <Link
                  href="/objects"
                  className="rounded-lg border border-white/10 bg-white/5 p-4 transition hover:border-cyan-400/50 hover:bg-cyan-500/10"
                >
                  <h3 className="mb-2 font-semibold">All Objects</h3>
                  <p className="text-sm text-white/70">
                    Browse the complete collection
                  </p>
                </Link>
                <Link
                  href="/rubric"
                  className="rounded-lg border border-white/10 bg-white/5 p-4 transition hover:border-cyan-400/50 hover:bg-cyan-500/10"
                >
                  <h3 className="mb-2 font-semibold">Rubric Coverage</h3>
                  <p className="text-sm text-white/70">
                    See how this museum meets all requirements
                  </p>
                </Link>
                <Link
                  href="/"
                  className="rounded-lg border border-white/10 bg-white/5 p-4 transition hover:border-cyan-400/50 hover:bg-cyan-500/10"
                >
                  <h3 className="mb-2 font-semibold">Return Home</h3>
                  <p className="text-sm text-white/70">
                    Start a new visit or explore differently
                  </p>
                </Link>
              </div>
            </div>

            <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-8 text-center">
              <h2 className="mb-4 text-2xl font-semibold text-emerald-300">
                Thank You for Visiting
              </h2>
              <p className="mb-6 text-white/90">
                The Performance Museum is an ongoing exploration of how we
                measure, understand, and enhance human achievement. We hope this
                visit has deepened your understanding of performance technology's
                past, present, and future.
              </p>
              <Link
                href="/"
                className="inline-block rounded-xl border border-emerald-500/30 bg-emerald-500/20 px-8 py-4 font-semibold transition hover:bg-emerald-500/30"
              >
                Return to Home
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

