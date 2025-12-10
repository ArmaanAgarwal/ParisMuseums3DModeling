"use client";

import { motion } from "framer-motion";
import { LevelTransition } from "@/components/LevelTransition";

interface TourStepProps {
  onNext: () => void;
  onPrevious: () => void;
}

export function TourStepE({ onNext }: TourStepProps) {
  return (
    <div className="min-h-[calc(100vh-200px)] flex flex-col">
      <LevelTransition
        fromLevel="Level 1: Origins & Icons"
        toLevel="Level 2: Data, Motion & Body"
        narrative="Ascending into the measurement era"
      />
      <div className="mx-auto max-w-4xl px-4 py-12 text-center flex-1 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <p className="mb-8 text-lg text-white/80 leading-relaxed">
            You have journeyed through the historical foundations. Now, you ascend
            into an era where movement becomes measurable, where invisible patterns
            become visible through technology.
          </p>
          <motion.button
            onClick={onNext}
            className="rounded-xl border border-cyan-500/30 bg-cyan-500/20 px-8 py-4 font-semibold transition hover:bg-cyan-500/30"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Enter Level 2 →
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}

