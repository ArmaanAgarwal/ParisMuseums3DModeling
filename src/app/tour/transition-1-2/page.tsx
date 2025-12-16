"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { LevelTransition } from "@/components/LevelTransition";
import { TourProgressWidget } from "@/components/TourProgressWidget";

export default function Transition1To2Page() {
  return (
    <div className="min-h-screen bg-black text-white">
      <TourProgressWidget currentStep="transition-1-2" />
      <LevelTransition
        fromLevel="Level 1: Origins & Icons"
        toLevel="Level 2: Data, Motion & Body"
        narrative="Ascending into the measurement era: where performance becomes data"
      />
      <div className="mx-auto max-w-4xl px-4 py-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <p className="mb-8 text-lg text-white/80 leading-relaxed">
            You have journeyed through the historical foundations of performance.
            Now, you ascend into an era where movement becomes measurable,
            where invisible patterns become visible through technology, and where
            data transforms how we understand human achievement.
          </p>
          <Link
            href="/tour/level-2"
            className="inline-block rounded-xl border border-white/20 bg-white/10 px-12 py-6 text-xl font-semibold transition hover:border-white/30 hover:bg-white/15"
          >
            Enter Level 2 →
          </Link>
        </motion.div>
      </div>
    </div>
  );
}








