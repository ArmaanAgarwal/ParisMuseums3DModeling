"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { getObject } from "@/data";
import Link from "next/link";

interface CompareArtifactsProps {
  objectIds: string[];
}

export function CompareArtifacts({ objectIds }: CompareArtifactsProps) {
  const objects = objectIds.map((id) => getObject(id)).filter((obj): obj is NonNullable<typeof obj> => obj !== undefined);
  const [selectedIndex, setSelectedIndex] = useState(0);

  if (objects.length === 0) return null;

  const selected = objects[selectedIndex];
  if (!selected) return null;

  return (
    <div className="rounded-2xl border border-white/15 bg-white/5 p-8">
      <h3 className="mb-6 text-xl font-semibold">Compare Artifacts</h3>
      <p className="mb-6 text-sm text-white/70">
        Explore how performance equipment evolved by comparing artifacts across time
      </p>

      {/* Object Selector */}
      <div className="mb-6 flex flex-wrap gap-2">
        {objects.map((obj, i) => (
          <button
            key={obj.id}
            onClick={() => setSelectedIndex(i)}
            className={`rounded-lg border px-4 py-2 text-sm font-medium transition ${
              i === selectedIndex
                ? "border-white/30 bg-white/10 text-white"
                : "border-white/15 bg-white/5 text-white/70 hover:border-white/25 hover:bg-white/8"
            }`}
          >
            {obj.title}
          </button>
        ))}
      </div>

      {/* Comparison Display */}
      <div className="space-y-6">
        <motion.div
          key={selected.id}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="rounded-xl border border-white/10 bg-white/5 p-6"
        >
          <div className="mb-4">
            <h4 className="mb-2 text-lg font-semibold">{selected.title}</h4>
            <div className="text-sm text-white/70">{selected.dateLabel}</div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <div className="mb-2 text-xs font-medium text-white/60">
                Materials
              </div>
              <div className="text-sm text-white/80">{selected.materials}</div>
            </div>
            <div>
              <div className="mb-2 text-xs font-medium text-white/60">
                Dimensions
              </div>
              <div className="text-sm text-white/80">{selected.dimensions}</div>
            </div>
          </div>

          <div className="mt-4">
            <div className="mb-2 text-xs font-medium text-white/60">
              How It Changed Performance
            </div>
            <p className="text-sm leading-relaxed text-white/80">
              {selected.howItChangedPerformance}
            </p>
          </div>

          <Link
            href={`/objects/${selected.slug}`}
            className="mt-4 inline-block text-sm text-white/70 hover:text-white/90"
          >
            View full details →
          </Link>
        </motion.div>

        {/* What Changed */}
        {selectedIndex > 0 && (
          <div className="rounded-xl border border-amber-500/20 bg-amber-500/10 p-4">
            <div className="mb-2 text-xs font-medium text-amber-200/70">
              What Changed
            </div>
            <p className="text-sm text-amber-200/90">
              Compare this to {objects[selectedIndex - 1]?.title} to see how
              materials, design, and understanding of biomechanics evolved.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

