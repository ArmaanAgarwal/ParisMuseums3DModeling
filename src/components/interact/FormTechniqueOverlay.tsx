"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface FormTechniqueOverlayProps {
  title: string;
  bodyDemands: Array<{
    area: string;
    description: string;
    technique: string;
  }>;
  className?: string;
}

export function FormTechniqueOverlay({ title, bodyDemands, className = "" }: FormTechniqueOverlayProps) {
  const [selectedArea, setSelectedArea] = useState<string | null>(null);

  return (
    <div className={`rounded-2xl border border-white/15 bg-white/5 p-8 ${className}`}>
      <h3 className="mb-6 text-2xl font-semibold">{title}</h3>
      <p className="mb-6 text-white/80 leading-relaxed">
        This object demanded specific form and technique from the body. Explore what each part of the body had to do to achieve optimal performance.
      </p>

      <div className="grid gap-4 md:grid-cols-2">
        {bodyDemands.map((demand, index) => {
          const isSelected = selectedArea === demand.area;
          return (
            <motion.button
              key={index}
              onClick={() => setSelectedArea(isSelected ? null : demand.area)}
              className={`rounded-xl border p-6 text-left transition ${
                isSelected
                  ? "border-cyan-500/50 bg-cyan-500/10"
                  : "border-white/15 bg-white/5 hover:border-white/30 hover:bg-white/10"
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="mb-2 text-lg font-semibold text-white">{demand.area}</div>
              <div className="mb-3 text-sm text-white/70">{demand.technique}</div>
              <AnimatePresence>
                {isSelected && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="mt-3 rounded-lg border border-cyan-500/30 bg-cyan-500/10 p-4">
                      <p className="text-sm leading-relaxed text-cyan-200">{demand.description}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}
