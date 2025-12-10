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

export function TourStepArchitecture({ onNext }: TourStepProps) {
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
            Step 3: Architecture DNA
          </div>

          <h1 className="mb-6 text-5xl font-bold tracking-tight md:text-7xl">
            If This Museum Were Built
          </h1>
          <p className="mb-8 text-xl text-white/80">
            Architectural DNA and Why It Matters
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="space-y-8"
        >
          {/* Introduction */}
          <div className="rounded-2xl border border-white/15 bg-white/5 p-8">
            <h2 className="mb-4 text-2xl font-semibold">Hypothetical Physical Building</h2>
            <p className="mb-4 leading-relaxed text-white/80 text-lg">
              While this museum exists online, its design draws from three distinct
              architectural traditions. If it were built physically, it would synthesize
              the Louvre's procession and axis logic, the Pompidou's exposed structural
              systems, and the grounded materiality of a brick archive wing. Each element
              serves the museum's mission: making performance visible, understandable, and
              meaningful.
            </p>
            <p className="leading-relaxed text-white/80 text-lg">
              The architecture is not decorative—it is didactic. Every design choice
              reinforces the museum's core themes: transparency of measurement, infrastructure
              of performance technology, and the grounding of history.
            </p>
          </div>

          {/* Louvre Axis Logic */}
          <div className="rounded-2xl border border-amber-500/30 bg-amber-500/10 p-8">
            <h2 className="mb-4 text-2xl font-semibold text-amber-300">
              Louvre Logic: The Central Axis
            </h2>
            <p className="mb-4 leading-relaxed text-white/90">
              <strong>What it is:</strong> A strong central axis that organizes the entire
              building, creating clear orientation and a sense of procession from arrival
              through the galleries.
            </p>
            <p className="mb-4 leading-relaxed text-white/90">
              <strong>Why it matters for this museum:</strong> Performance measurement
              requires clarity and order. The axis provides wayfinding that mirrors the
              logical progression of the museum's narrative: from origins, through data,
              to futures. Visitors never feel lost because the path is clear.
            </p>
            <p className="mb-4 leading-relaxed text-white/90">
              <strong>What it contributes:</strong> The axis creates a threshold moment
              (arrival sequence with gardens and reflecting pool) that transitions visitors
              from the everyday world into the contemplative space of the museum. This
              mirrors how performance measurement creates thresholds: before and after
              precise timing, before and after data-driven analysis.
            </p>
            <div className="mt-4 rounded-lg border border-amber-500/20 bg-amber-500/5 p-4">
              <p className="text-sm text-white/80">
                <strong>Connection to concept:</strong> The axis represents the linear
                progression of performance understanding—each level builds on the last,
                creating a clear narrative arc that visitors can follow intuitively.
              </p>
            </div>
          </div>

          {/* Pompidou Exposed Systems */}
          <div className="rounded-2xl border border-cyan-500/30 bg-cyan-500/10 p-8">
            <h2 className="mb-4 text-2xl font-semibold text-cyan-300">
              Pompidou Energy: Exposed Systems
            </h2>
            <p className="mb-4 leading-relaxed text-white/90">
              <strong>What it is:</strong> One facade reveals the building's technical
              infrastructure: exposed structure, color-coded systems (pipes, frames,
              circulation), and visible mechanical systems.
            </p>
            <p className="mb-4 leading-relaxed text-white/90">
              <strong>Why it matters for this museum:</strong> Performance technology is
              fundamentally about making the invisible visible. Motion capture reveals
              biomechanical patterns. Sensors reveal physiological data. The exposed facade
              makes this principle architectural: the infrastructure that enables the museum
              is visible, just as the technology that enables performance measurement is
              visible in the exhibits.
            </p>
            <p className="mb-4 leading-relaxed text-white/90">
              <strong>What it contributes:</strong> Transparency. Visitors see how the
              building works, just as they see how performance technology works. The
              color-coded systems (blue for data, red for circulation, green for structure)
              create a visual language that extends into the exhibits, where different
              technologies are similarly categorized and explained.
            </p>
            <div className="mt-4 rounded-lg border border-cyan-500/20 bg-cyan-500/5 p-4">
              <p className="text-sm text-white/80">
                <strong>Connection to concept:</strong> The exposed systems represent the
                museum's Level 2 theme: performance as data. Just as the building's
                infrastructure is visible, so is the data infrastructure of performance
                measurement.
              </p>
            </div>
          </div>

          {/* Brick Archive Wing */}
          <div className="rounded-2xl border border-orange-500/30 bg-orange-500/10 p-8">
            <h2 className="mb-4 text-2xl font-semibold text-orange-300">
              Brick Archive Wing: Grounded Warmth
            </h2>
            <p className="mb-4 leading-relaxed text-white/90">
              <strong>What it is:</strong> A distinct brick-clad wing that houses archival
              materials, historical collections, and research spaces. Clearly connected to
              the main building but with its own material identity.
            </p>
            <p className="mb-4 leading-relaxed text-white/90">
              <strong>Why it matters for this museum:</strong> Performance has deep
              historical roots. The brick wing provides a grounded, tactile counterpoint to
              the technical facade, representing the continuity of human achievement across
              time. It houses the museum's memory: documents, records, early artifacts that
              establish the foundation for everything else.
            </p>
            <p className="mb-4 leading-relaxed text-white/90">
              <strong>What it contributes:</strong> Material warmth and historical grounding.
              The brick creates intimate reading spaces, quiet research areas, and
              contemplative zones where visitors can engage deeply with historical context.
              The warm interior glow contrasts with the cool technical facade, creating
              visual and experiential variety.
            </p>
            <div className="mt-4 rounded-lg border border-orange-500/20 bg-orange-500/5 p-4">
              <p className="text-sm text-white/80">
                <strong>Connection to concept:</strong> The brick wing represents Level 1:
                Origins & Icons. It grounds the museum in history, showing that performance
                optimization is not a modern invention but a human constant.
              </p>
            </div>
          </div>

          {/* Concept → Space → Flow Diagram */}
          <div className="rounded-2xl border border-white/15 bg-white/5 p-8">
            <h2 className="mb-4 text-2xl font-semibold">Concept → Space → Visitor Flow</h2>
            <div className="space-y-6">
              <div>
                <h3 className="mb-2 font-semibold text-white">Concept</h3>
                <p className="text-white/80">
                  Performance measurement evolves from observation to data to intelligence.
                  Three levels tell this story.
                </p>
              </div>
              <div className="flex items-center justify-center">
                <div className="text-4xl text-white/40">↓</div>
              </div>
              <div>
                <h3 className="mb-2 font-semibold text-white">Space</h3>
                <p className="text-white/80">
                  Architecture supports the narrative: axis for clarity, exposed systems for
                  transparency, brick wing for grounding. Vertical circulation connects
                  levels, creating a journey through time and technology.
                </p>
              </div>
              <div className="flex items-center justify-center">
                <div className="text-4xl text-white/40">↓</div>
              </div>
              <div>
                <h3 className="mb-2 font-semibold text-white">Visitor Flow</h3>
                <p className="text-white/80">
                  Visitors enter along the axis, experience the threshold (gardens, pool),
                  ascend through three levels, and exit through the archive wing. The
                  architecture guides the narrative, ensuring every visitor experiences the
                  complete story.
                </p>
              </div>
            </div>
          </div>

          {/* Light and Circulation */}
          <div className="rounded-2xl border border-white/15 bg-white/5 p-8">
            <h2 className="mb-4 text-2xl font-semibold">Light & Circulation</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <h3 className="mb-3 font-semibold text-white">Lighting Strategy</h3>
                <ul className="space-y-2 text-white/80">
                  <li>• Level 1: Warm, natural daylight through brick windows</li>
                  <li>• Level 2: Cool, technical lighting with data visualization displays</li>
                  <li>• Level 3: Immersive, dynamic lighting for VR and future tech</li>
                  <li>• Artifacts: Dramatic spotlighting for key objects</li>
                </ul>
              </div>
              <div>
                <h3 className="mb-3 font-semibold text-white">Circulation</h3>
                <ul className="space-y-2 text-white/80">
                  <li>• Central axis provides primary path</li>
                  <li>• Vertical circulation (stairs/elevator) connects levels</li>
                  <li>• Branching paths allow exploration within levels</li>
                  <li>• Archive wing accessible from all levels</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

