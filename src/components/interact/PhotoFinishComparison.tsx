"use client";

import { useState } from "react";
import { motion } from "framer-motion";

interface PhotoFinishComparisonProps {
  title: string;
  description: string;
  className?: string;
}

export function PhotoFinishComparison({ title, description, className = "" }: PhotoFinishComparisonProps) {
  const [userJudgment, setUserJudgment] = useState<"A" | "B" | null>(null);
  const [showResult, setShowResult] = useState(false);
  
  // Simulated race result - A wins by 0.03 seconds
  const actualWinner = "A";
  const margin = 0.03;

  const handleJudge = (choice: "A" | "B") => {
    setUserJudgment(choice);
  };

  const handleReveal = () => {
    setShowResult(true);
  };

  const handleReset = () => {
    setUserJudgment(null);
    setShowResult(false);
  };

  const isCorrect = userJudgment === actualWinner;

  return (
    <div className={`rounded-2xl border border-white/15 bg-white/5 p-8 ${className}`}>
      <h3 className="mb-4 text-2xl font-semibold">{title}</h3>
      <p className="mb-6 text-white/80 leading-relaxed">{description}</p>

      <div className="space-y-6">
        {/* Photo finish visualization */}
        <div className="rounded-xl border border-white/10 bg-white/5 p-6">
          <div className="mb-4 text-center text-sm text-white/60">Photo Finish</div>
          <div className="relative h-32 overflow-hidden rounded-lg bg-gradient-to-r from-zinc-900 to-zinc-800">
            {/* Finish line */}
            <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-white" />
            {/* Runners */}
            <div className="absolute left-[48%] top-1/2 h-16 w-16 -translate-y-1/2 rounded-full bg-cyan-500/50" />
            <div className="absolute left-[52%] top-1/2 h-16 w-16 -translate-y-1/2 rounded-full bg-purple-500/50" />
            <div className="absolute left-1/2 top-0 flex h-full w-0.5 items-center justify-center">
              <div className="text-xs font-bold text-white">FINISH</div>
            </div>
          </div>
        </div>

        {!userJudgment ? (
          <div className="space-y-3">
            <p className="text-center text-white/80">Who won? Make your judgment:</p>
            <div className="grid grid-cols-2 gap-4">
              <button
                onClick={() => handleJudge("A")}
                className="rounded-xl border border-cyan-500/50 bg-cyan-500/10 px-6 py-4 font-semibold text-cyan-300 transition hover:bg-cyan-500/20"
              >
                Runner A
              </button>
              <button
                onClick={() => handleJudge("B")}
                className="rounded-xl border border-purple-500/50 bg-purple-500/10 px-6 py-4 font-semibold text-purple-300 transition hover:bg-purple-500/20"
              >
                Runner B
              </button>
            </div>
          </div>
        ) : !showResult ? (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            <div className="rounded-lg border border-white/10 bg-white/5 p-4">
              <p className="text-center text-white/90">You chose: Runner {userJudgment}</p>
            </div>
            <button
              onClick={handleReveal}
              className="w-full rounded-xl border border-cyan-500/50 bg-cyan-500/20 px-8 py-4 font-semibold text-white transition hover:bg-cyan-500/30"
            >
              Reveal Measured Result →
            </button>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            <div className={`rounded-lg border p-4 ${
              isCorrect
                ? "border-green-500/50 bg-green-500/10"
                : "border-red-500/50 bg-red-500/10"
            }`}>
              <div className="mb-2 text-center font-semibold">
                {isCorrect ? "✓ Correct!" : "Not quite"}
              </div>
              <div className="text-center text-sm text-white/90">
                Actual winner: Runner {actualWinner} by {margin}s
              </div>
            </div>
            <div className="rounded-lg border border-cyan-500/30 bg-cyan-500/10 p-4">
              <p className="text-sm leading-relaxed text-cyan-200">
                Electronic timing made tiny differences official facts. This {margin}-second margin would be impossible to judge by eye, but technology made it measurable and fair.
              </p>
            </div>
            <button
              onClick={handleReset}
              className="w-full rounded-xl border border-white/20 bg-white/5 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/10"
            >
              Try Again
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
}
