"use client";

import { motion } from "framer-motion";
import { LevelTransition } from "@/components/LevelTransition";

interface TourStepProps {
  onNext: () => void;
  onPrevious: () => void;
}

export function TourStepG({ onNext }: TourStepProps) {
  return (
    <div className="min-h-[calc(100vh-200px)] flex flex-col">
      <LevelTransition
        fromLevel="Level 2: Data, Motion & Body"
        toLevel="Level 3: Futures & Immersion"
        narrative="When data becomes guidance; when guidance becomes augmentation"
      />
      <div className="mx-auto max-w-4xl px-4 py-12 text-center flex-1 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <p className="mb-8 text-lg text-white/80 leading-relaxed">
            You have explored how performance became data. Now, you ascend to the
            future—where data becomes intelligence, where measurement becomes
            guidance, and where technology promises to transform human capability.
          </p>
          <motion.button
            onClick={onNext}
            className="rounded-xl border border-violet-500/30 bg-violet-500/20 px-8 py-4 font-semibold transition hover:bg-violet-500/30"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Enter Level 3 →
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}

