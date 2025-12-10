"use client";

import { useState } from "react";
import { motion } from "framer-motion";

interface Argument {
  stance: string;
  points: string[];
  counterarguments: string[];
}

interface ArgumentMapProps {
  title: string;
  description: string;
  argumentList: Argument[];
  className?: string;
}

export function ArgumentMap({ title, description, argumentList: args, className = "" }: ArgumentMapProps) {
  const [selectedStance, setSelectedStance] = useState<number | null>(null);

  const selected = selectedStance !== null ? args[selectedStance] : null;

  return (
    <div className={`rounded-2xl border border-white/15 bg-white/5 p-8 ${className}`}>
      <h3 className="mb-4 text-2xl font-semibold">{title}</h3>
      <p className="mb-6 text-white/80 leading-relaxed">{description}</p>

      <div className="mb-6 grid gap-4 md:grid-cols-2">
        {args.map((arg, index) => {
          const isSelected = selectedStance === index;
          return (
            <motion.button
              key={index}
              onClick={() => setSelectedStance(isSelected ? null : index)}
              className={`rounded-xl border p-6 text-left transition ${
                isSelected
                  ? "border-cyan-500/50 bg-cyan-500/10"
                  : "border-white/15 bg-white/5 hover:border-white/30 hover:bg-white/10"
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="text-lg font-semibold text-white">{arg.stance}</div>
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
            <div className="mb-4 text-lg font-semibold text-cyan-300">Your Stance: {selected.stance}</div>
            <div className="mb-4 space-y-2">
              <div className="text-sm font-semibold text-white/90">Key Points:</div>
              {selected.points.map((point, index) => (
                <div key={index} className="flex items-start gap-2 text-sm text-white/80">
                  <span className="text-cyan-400">•</span>
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-amber-500/30 bg-amber-500/10 p-6">
            <div className="mb-4 text-lg font-semibold text-amber-300">Counterarguments:</div>
            <div className="space-y-2">
              {selected.counterarguments.map((counter, index) => (
                <div key={index} className="flex items-start gap-2 text-sm text-amber-200">
                  <span className="text-amber-400">→</span>
                  <span>{counter}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      )}

      <div className="mt-6 rounded-lg border border-white/10 bg-white/5 p-4">
        <p className="text-sm leading-relaxed text-white/80">
          This technology created real debate about equipment and records. There are valid arguments on both sides. Where do you stand?
        </p>
      </div>
    </div>
  );
}

