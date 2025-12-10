"use client";

import { useState } from "react";
import { motion } from "framer-motion";

interface TrainingZone {
  name: string;
  range: string;
  color: string;
  description: string;
  purpose: string;
}

interface TrainingZoneSelectorProps {
  title: string;
  description: string;
  zones: TrainingZone[];
  className?: string;
}

export function TrainingZoneSelector({ title, description, zones, className = "" }: TrainingZoneSelectorProps) {
  const [selectedZone, setSelectedZone] = useState<number | null>(null);

  return (
    <div className={`rounded-2xl border border-white/15 bg-white/5 p-8 ${className}`}>
      <h3 className="mb-4 text-2xl font-semibold">{title}</h3>
      <p className="mb-6 text-white/80 leading-relaxed">{description}</p>

      <div className="space-y-4">
        {zones.map((zone, index) => {
          const isSelected = selectedZone === index;
          return (
            <motion.button
              key={index}
              onClick={() => setSelectedZone(isSelected ? null : index)}
              className={`w-full rounded-xl border p-6 text-left transition ${
                isSelected
                  ? zone.color === "blue" 
                    ? "border-blue-500/50 bg-blue-500/10"
                    : zone.color === "green"
                    ? "border-green-500/50 bg-green-500/10"
                    : zone.color === "yellow"
                    ? "border-yellow-500/50 bg-yellow-500/10"
                    : zone.color === "orange"
                    ? "border-orange-500/50 bg-orange-500/10"
                    : "border-red-500/50 bg-red-500/10"
                  : "border-white/15 bg-white/5 hover:border-white/30 hover:bg-white/10"
              }`}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
            >
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="mb-2 flex items-center gap-3">
                    <div className={`h-4 w-4 rounded-full ${
                      zone.color === "blue" ? "bg-blue-500"
                      : zone.color === "green" ? "bg-green-500"
                      : zone.color === "yellow" ? "bg-yellow-500"
                      : zone.color === "orange" ? "bg-orange-500"
                      : "bg-red-500"
                    }`} />
                    <div className="text-lg font-semibold text-white">{zone.name}</div>
                    <div className="text-sm text-white/60">({zone.range})</div>
                  </div>
                  {isSelected && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      className="mt-3 space-y-2"
                    >
                      <p className="text-sm leading-relaxed text-white/90">{zone.description}</p>
                      <div className="rounded-lg border border-white/10 bg-white/5 p-3">
                        <div className="text-xs font-semibold text-white/70 mb-1">Training Purpose:</div>
                        <p className="text-sm text-white/80">{zone.purpose}</p>
                      </div>
                    </motion.div>
                  )}
                </div>
              </div>
            </motion.button>
          );
        })}
      </div>

      <div className="mt-6 rounded-lg border border-white/10 bg-white/5 p-4">
        <p className="text-sm leading-relaxed text-white/80">
          This is how heart rate zones are used in training. Each zone targets different adaptations. The monitor made this accessible to everyday athletes, moving measurement out of the lab.
        </p>
      </div>
    </div>
  );
}

