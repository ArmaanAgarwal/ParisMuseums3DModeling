"use client";

import { motion } from "framer-motion";

interface TourStepProps {
  onNext: () => void;
  onPrevious: () => void;
}

export function TourStepB({ onNext }: TourStepProps) {
  return (
    <div className="min-h-[calc(100vh-200px)] flex items-center justify-center py-20">
      <div className="mx-auto max-w-4xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-6 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/70">
              Step B: Location
            </div>
            <h1 className="mb-6 text-5xl font-bold tracking-tight md:text-7xl">
              The Online Museum
            </h1>
          </div>

          <div className="space-y-8 text-lg leading-relaxed text-white/80">
            <div className="rounded-xl border border-white/15 bg-white/5 p-8">
              <h2 className="mb-4 text-2xl font-semibold text-white">
                Where This Museum Lives
              </h2>
              <p className="mb-4">
                The Performance Museum exists online—accessible from anywhere,
                at any time, to anyone with an internet connection. This is not
                a limitation, but a deliberate choice that reflects the museum's
                core mission: to democratize access to the history and future
                of performance technology.
              </p>
              <p>
                Just as performance measurement technology moved from exclusive
                laboratories to everyday wearables, this museum moves from
                physical constraints to global accessibility. The web becomes
                our building, the browser becomes our gallery, and the interface
                becomes our architecture.
              </p>
            </div>

            <div className="rounded-xl border border-cyan-500/30 bg-cyan-500/10 p-8">
              <h3 className="mb-4 text-xl font-semibold text-cyan-300">
                Why Online is the Right Location
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-cyan-400">•</span>
                  <span>
                    <strong>Global Access:</strong> Performance data and
                    technology are global phenomena. An online museum reflects
                    this reality, making the collection accessible to athletes,
                    researchers, and enthusiasts worldwide.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-cyan-400">•</span>
                  <span>
                    <strong>Data as Medium:</strong> This museum is about data,
                    measurement, and digital technology. An online format allows
                    us to demonstrate these concepts through the medium itself.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-cyan-400">•</span>
                  <span>
                    <strong>Democratized Learning:</strong> Just as wearable
                    sensors democratized performance data, an online museum
                    democratizes access to this knowledge, free from geographic
                    or economic barriers.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-cyan-400">•</span>
                  <span>
                    <strong>Digital Preservation:</strong> Performance technology
                    evolves rapidly. An online museum can be continuously updated,
                    preserving both historical artifacts and emerging technologies
                    in real-time.
                  </span>
                </li>
              </ul>
            </div>

            <div className="rounded-xl border border-white/15 bg-white/5 p-8">
              <h3 className="mb-4 text-xl font-semibold text-white">
                The Interface as Architecture
              </h3>
              <p>
                In this online museum, the interface itself becomes the
                architecture. Navigation becomes wayfinding. Scroll becomes
                procession. Transitions become movement through space. The
                digital environment creates the same sense of discovery,
                contemplation, and learning as a physical museum, but through
                the medium of performance technology itself.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}








