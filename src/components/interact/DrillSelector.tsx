"use client";

import { useState } from "react";
import { motion } from "framer-motion";

interface Drill {
  id: string;
  name: string;
  description: string;
  tradeoffs: {
    skill: number;
    endurance: number;
    safety: number;
  };
  explanation: string;
}

interface DrillSelectorProps {
  title: string;
  description: string;
  drills: Drill[];
  className?: string;
}

export function DrillSelector({ title, description, drills, className = "" }: DrillSelectorProps) {
  const [selectedDrill, setSelectedDrill] = useState<string | null>(null);

  const selected = drills.find(d => d.id === selectedDrill);

  return (
    <div className={`rounded-2xl border border-white/15 bg-white/5 p-8 ${className}`}>
      <h3 className="mb-4 text-2xl font-semibold">{title}</h3>
      <p className="mb-6 text-white/80 leading-relaxed">{description}</p>

      <div className="mb-6 grid gap-4 md:grid-cols-2">
        {drills.map((drill) => {
          const isSelected = selectedDrill === drill.id;
          return (
            <motion.button
              key={drill.id}
              onClick={() => setSelectedDrill(isSelected ? null : drill.id)}
              className={`rounded-xl border p-6 text-left transition ${
                isSelected
                  ? "border-cyan-500/50 bg-cyan-500/10"
                  : "border-white/15 bg-white/5 hover:border-white/30 hover:bg-white/10"
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="mb-2 text-lg font-semibold text-white">{drill.name}</div>
              <p className="text-sm text-white/70">{drill.description}</p>
            </motion.button>
          );
        })}
      </div>

      {selected && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-4"
        >
          <div className="rounded-xl border border-cyan-500/30 bg-cyan-500/10 p-6">
            <div className="mb-4 text-lg font-semibold text-cyan-300">{selected.name}</div>
            <p className="mb-4 leading-relaxed text-white/90">{selected.explanation}</p>
            
            <div className="space-y-2">
              <div className="text-sm font-semibold text-white/90">Training Tradeoffs:</div>
              <div className="grid grid-cols-3 gap-2">
                <div className="rounded-lg border border-white/10 bg-white/5 p-3">
                  <div className="mb-1 text-xs text-white/60">Skill Development</div>
                  <div className="text-lg font-bold text-white">{selected.tradeoffs.skill}/10</div>
                </div>
                <div className="rounded-lg border border-white/10 bg-white/5 p-3">
                  <div className="mb-1 text-xs text-white/60">Endurance</div>
                  <div className="text-lg font-bold text-white">{selected.tradeoffs.endurance}/10</div>
                </div>
                <div className="rounded-lg border border-white/10 bg-white/5 p-3">
                  <div className="mb-1 text-xs text-white/60">Safety</div>
                  <div className="text-lg font-bold text-white">{selected.tradeoffs.safety}/10</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}

      <div className="mt-6 rounded-lg border border-white/10 bg-white/5 p-4">
        <p className="text-sm leading-relaxed text-white/80">
          VR training lets you design environments impossible in the real world. Each drill has tradeoffs—what you gain in one area, you might lose in another.
        </p>
      </div>
    </div>
  );
}

