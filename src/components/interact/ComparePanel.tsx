"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface CompareOption {
  id?: string;
  label: string;
  image?: string;
  description: string;
  explanation: string;
}

interface ComparePanelProps {
  title: string;
  optionA: CompareOption;
  optionB: CompareOption;
  className?: string;
}

export function ComparePanel({ title, optionA, optionB, className = "" }: ComparePanelProps) {
  const [selected, setSelected] = useState<"A" | "B">("A");

  const current = selected === "A" ? optionA : optionB;

  return (
    <div className={`rounded-2xl border border-white/15 bg-white/5 p-8 ${className}`}>
      <h3 className="mb-6 text-2xl font-semibold">{title}</h3>
      
      {/* Toggle */}
      <div className="mb-6 flex gap-4">
        <button
          onClick={() => setSelected("A")}
          className={`flex-1 rounded-xl border px-6 py-4 text-left transition ${
            selected === "A"
              ? "border-cyan-500/50 bg-cyan-500/10 text-cyan-300"
              : "border-white/15 bg-white/5 text-white/70 hover:border-white/30 hover:bg-white/10"
          }`}
        >
          <div className="font-semibold">{optionA.label}</div>
        </button>
        <button
          onClick={() => setSelected("B")}
          className={`flex-1 rounded-xl border px-6 py-4 text-left transition ${
            selected === "B"
              ? "border-cyan-500/50 bg-cyan-500/10 text-cyan-300"
              : "border-white/15 bg-white/5 text-white/70 hover:border-white/30 hover:bg-white/10"
          }`}
        >
          <div className="font-semibold">{optionB.label}</div>
        </button>
      </div>

      {/* Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={selected}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="space-y-4"
        >
          {current.image && (
            <div className="aspect-video overflow-hidden rounded-xl bg-white/5">
              <img
                src={current.image}
                alt={current.label}
                className="h-full w-full object-cover"
              />
            </div>
          )}
          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <p className="mb-4 leading-relaxed text-white/90">{current.description}</p>
            <div className="rounded-lg border border-cyan-500/30 bg-cyan-500/10 p-4">
              <p className="text-sm leading-relaxed text-cyan-200">{current.explanation}</p>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

