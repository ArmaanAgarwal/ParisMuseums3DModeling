"use client";

import { motion } from "framer-motion";
import { getLevel } from "@/data/client";

interface TourStepLevel2EntryProps {
  onNext: () => void;
  onPrevious: () => void;
}

export function TourStepLevel2Entry({ onNext, onPrevious }: TourStepLevel2EntryProps) {
  const level = getLevel("l2");

  if (!level) return null;

  return (
    <div className="min-h-screen bg-black py-20">
      <div className="mx-auto max-w-4xl px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-12"
        >
          <div>
            <h1 className="mb-6 text-4xl font-semibold md:text-5xl">
              {level.title}
            </h1>
            <p className="mb-6 text-xl leading-relaxed text-white/80">
              {level.levelIntro}
            </p>
          </div>

          {/* What You Will Learn */}
          <div className="rounded-2xl border border-white/15 bg-white/5 p-8">
            <h2 className="mb-4 text-2xl font-semibold">What You Will Learn</h2>
            <ol className="space-y-3">
              {level.learningGoals.map((goal, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-cyan-500/20 text-sm font-medium text-cyan-300">
                    {i + 1}
                  </span>
                  <span className="leading-relaxed text-white/80">{goal}</span>
                </li>
              ))}
            </ol>
          </div>

          {/* Key Questions */}
          <div className="rounded-2xl border border-white/15 bg-white/5 p-8">
            <h2 className="mb-4 text-2xl font-semibold">Key Questions</h2>
            <ol className="space-y-3">
              {level.keyQuestions.map((question, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-white/10 text-sm font-medium text-white/70">
                    {i + 1}
                  </span>
                  <span className="leading-relaxed text-white/80">{question}</span>
                </li>
              ))}
            </ol>
          </div>

          {/* How to Explore */}
          <div className="rounded-2xl border border-cyan-500/30 bg-cyan-500/10 p-8">
            <h2 className="mb-4 text-xl font-semibold text-cyan-300">How to Explore This Level</h2>
            <p className="mb-4 leading-relaxed text-white/90">
              Use the map on the next step to see all zones in this level. Click any zone to preview what is inside. Each zone focuses on a different way that technology measures and analyzes performance. You can explore zones in any order, but the tour will guide you through them step by step.
            </p>
            <p className="leading-relaxed text-white/90">
              As you explore, notice how measurement technology reveals things we cannot see with our eyes. Motion capture shows movement patterns. Sensors measure invisible forces. Data visualization makes complex information understandable. This level shows how technology transformed performance from observation to data.
            </p>
          </div>

          {/* Navigation */}
          <div className="flex justify-between">
            <button
              onClick={onPrevious}
              className="rounded-xl border border-white/20 bg-white/5 px-8 py-4 font-medium transition hover:bg-white/10"
            >
              ← Previous
            </button>
            <button
              onClick={onNext}
              className="rounded-xl border border-cyan-500/30 bg-cyan-500/20 px-8 py-4 font-medium transition hover:bg-cyan-500/30"
            >
              View Level 2 Map →
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}








