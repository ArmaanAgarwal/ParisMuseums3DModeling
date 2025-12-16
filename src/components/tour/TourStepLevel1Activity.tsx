"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface TourStepLevel1ActivityProps {
  onNext: () => void;
  onPrevious: () => void;
}

export function TourStepLevel1Activity({ onNext, onPrevious }: TourStepLevel1ActivityProps) {
  const [selectedPart, setSelectedPart] = useState<string | null>(null);

  const toolParts = [
    {
      id: "sole",
      label: "Sole",
      description: "The bottom of the sandal that touches the ground. Ancient sandals had thin soles so athletes could feel the ground. This helped with balance and natural movement.",
      why: "Feeling the ground helps athletes adjust their movement in real time. Modern shoes still try to balance protection with ground feel.",
    },
    {
      id: "upper",
      label: "Upper",
      description: "The part that wraps around the foot. Ancient sandals used flexible materials that moved with the foot. This allowed natural foot movement during running.",
      why: "Flexible uppers let the foot move naturally. This principle appears in all modern athletic footwear.",
    },
    {
      id: "lacing",
      label: "Lacing System",
      description: "The cords that secure the sandal to the foot. Ancient lacing systems were adjustable, allowing a custom fit for each athlete.",
      why: "A secure fit prevents injury and improves performance. Every modern shoe uses some form of adjustable fastening.",
    },
    {
      id: "materials",
      label: "Materials",
      description: "Ancient sandals used tanned animal hide and natural fibers. These materials were flexible, durable, and available locally.",
      why: "Material choice affects performance. Modern shoes use advanced materials, but the goal is the same: flexibility, support, and durability.",
    },
  ];

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
              Interactive: Ancient Tool Explorer
            </h1>
            <p className="mb-6 text-xl leading-relaxed text-white/80">
              Click different parts of this ancient running sandal to learn what each part does and why it matters. This shows how ancient athletes understood performance principles that we still use today.
            </p>
          </div>

          {/* Tool Diagram */}
          <div className="rounded-2xl border border-white/15 bg-white/5 p-8">
            <h2 className="mb-6 text-2xl font-semibold">Ancient Running Sandal</h2>
            <div className="mb-6 grid grid-cols-2 gap-4">
              {toolParts.map((part) => (
                <button
                  key={part.id}
                  onClick={() => setSelectedPart(selectedPart === part.id ? null : part.id)}
                  className={`rounded-xl border p-4 text-left transition ${
                    selectedPart === part.id
                      ? "border-cyan-400/50 bg-cyan-500/10"
                      : "border-white/15 bg-white/5 hover:border-white/30 hover:bg-white/10"
                  }`}
                >
                  <div className="mb-2 font-semibold">{part.label}</div>
                  <div className="text-sm text-white/70">Click to learn more</div>
                </button>
              ))}
            </div>

            {/* Selected Part Info */}
            <AnimatePresence>
              {selectedPart && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mt-6 rounded-xl border border-cyan-500/30 bg-cyan-500/10 p-6"
                >
                  {(() => {
                    const part = toolParts.find((p) => p.id === selectedPart);
                    if (!part) return null;
                    return (
                      <>
                        <h3 className="mb-3 text-xl font-semibold text-cyan-300">{part.label}</h3>
                        <p className="mb-4 leading-relaxed text-white/90">{part.description}</p>
                        <div className="rounded-lg border border-cyan-500/20 bg-cyan-500/5 p-4">
                          <div className="mb-2 text-sm font-semibold text-cyan-200">Why This Matters</div>
                          <p className="text-sm text-white/90">{part.why}</p>
                        </div>
                      </>
                    );
                  })()}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Learning Point */}
          <div className="rounded-2xl border border-white/15 bg-white/5 p-8">
            <h2 className="mb-4 text-xl font-semibold">What This Teaches</h2>
            <p className="leading-relaxed text-white/80">
              Ancient athletes understood performance principles intuitively. They designed equipment that solved real problems: how to protect the foot while feeling the ground, how to secure the foot without restricting movement, how to use materials that lasted. These same principles appear in every modern performance shoe. The technology changed, but the human understanding of what works did not.
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
              Moving to Level 2 →
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}








