"use client";

import { motion } from "framer-motion";

interface TourStepProps {
  stepNumber: number;
  totalSteps: number;
  onNext: () => void;
  onPrevious: () => void;
  isFirst: boolean;
  isLast: boolean;
}

export function TourStepLocation({ onNext }: TourStepProps) {
  return (
    <div className="min-h-screen py-20">
      <div className="mx-auto max-w-4xl px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/70">
            <span className="inline-block h-2 w-2 rounded-full bg-emerald-400/80" />
            Step 2: Location
          </div>

          <h1 className="mb-6 text-5xl font-bold tracking-tight md:text-7xl">
            The Museum's Location
          </h1>
          <p className="mb-8 text-xl text-white/80">
            An Online Museum for Global Access
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
            <h2 className="mb-4 text-2xl font-semibold">What It Means to Be an Online Museum</h2>
            <p className="mb-4 leading-relaxed text-white/80 text-lg">
              The Performance Museum exists in digital space—accessible from anywhere in the
              world, at any time, to anyone with an internet connection. This is not a
              limitation; it is a fundamental reimagining of what a museum can be.
            </p>
            <p className="mb-4 leading-relaxed text-white/80 text-lg">
              Unlike physical museums bound by geography, opening hours, and capacity
              constraints, this online museum democratizes access to performance history,
              technology, and knowledge. A student in Nairobi can explore the same artifacts
              as a researcher in Tokyo, at the same moment, with equal depth and detail.
            </p>
            <p className="leading-relaxed text-white/80 text-lg">
              The interface itself becomes the architecture. The screen becomes the gallery
              wall. The scroll becomes the journey through space. This digital location
              enables experiences impossible in physical space: instant comparison across
              millennia, interactive data visualization, and personalized pathways through
              the collection.
            </p>
          </div>

          {/* Why Online is Right for Performance Measurement */}
          <div className="rounded-2xl border border-cyan-500/30 bg-cyan-500/10 p-8">
            <h2 className="mb-4 text-2xl font-semibold text-cyan-300">
              Why Online is the Right Location for Performance Measurement
            </h2>
            <div className="space-y-4 text-white/90">
              <div>
                <h3 className="mb-2 font-semibold text-cyan-400">Data Accessibility</h3>
                <p>
                  Performance measurement is fundamentally about data. An online museum can
                  display data visualizations, interactive charts, and real-time comparisons
                  that would be static or impossible in a physical space. Visitors can
                  manipulate variables, explore relationships, and see how metrics connect
                  across time and technology.
                </p>
              </div>
              <div>
                <h3 className="mb-2 font-semibold text-cyan-400">Global Records</h3>
                <p>
                  Performance records are global by nature. An online museum can instantly
                  connect local achievements to worldwide standards, showing how individual
                  performance fits into the global context of human capability. This
                  connection is natural in digital space.
                </p>
              </div>
              <div>
                <h3 className="mb-2 font-semibold text-cyan-400">Democratized Learning</h3>
                <p>
                  Performance knowledge should not be limited by geography or economic
                  barriers. An online museum makes expert-level content, detailed analysis,
                  and interactive learning accessible to everyone, regardless of location or
                  resources. This aligns with the museum's mission: performance optimization
                  is a human constant, and understanding it should be universally available.
                </p>
              </div>
              <div>
                <h3 className="mb-2 font-semibold text-cyan-400">Digital Preservation</h3>
                <p>
                  Many performance technologies exist primarily in digital form—software,
                  algorithms, data formats. An online museum can preserve and display these
                  in their native environment, maintaining authenticity and functionality that
                  would be lost in physical translation.
                </p>
              </div>
            </div>
          </div>

          {/* Access Information */}
          <div className="rounded-2xl border border-white/15 bg-white/5 p-8">
            <h2 className="mb-4 text-2xl font-semibold">Access & Visitors</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <h3 className="mb-2 font-semibold text-white">Who Can Access</h3>
                <ul className="space-y-2 text-white/80">
                  <li>• Students and educators worldwide</li>
                  <li>• Athletes and coaches seeking historical context</li>
                  <li>• Researchers studying performance technology</li>
                  <li>• Curious visitors interested in human achievement</li>
                  <li>• Anyone with internet access</li>
                </ul>
              </div>
              <div>
                <h3 className="mb-2 font-semibold text-white">How to Navigate</h3>
                <ul className="space-y-2 text-white/80">
                  <li>• Follow the guided tour (recommended)</li>
                  <li>• Explore by level, zone, or exhibit</li>
                  <li>• Follow curated pathways</li>
                  <li>• Search for specific objects or themes</li>
                  <li>• Use interactive elements throughout</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

