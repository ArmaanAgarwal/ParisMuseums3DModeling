"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { OBJECTS } from "@/data/client";

export function InteractiveTimeline() {
  const [selectedYear, setSelectedYear] = useState(1900);
  
  // Get objects around the selected year
  const relevantObjects = OBJECTS.filter(
    (obj) => obj.yearNumber && Math.abs(obj.yearNumber - selectedYear) <= 50
  ).slice(0, 3);

  const minYear = -500;
  const maxYear = 2030;

  return (
    <div className="rounded-xl border border-white/15 bg-white/5 p-8">
      <h3 className="mb-6 text-xl font-semibold">Interactive Timeline</h3>
      <p className="mb-6 text-sm text-white/70">
        Scrub through time to see how performance technology evolved
      </p>

      <div className="mb-6">
        <input
          type="range"
          min={minYear}
          max={maxYear}
          value={selectedYear}
          onChange={(e) => setSelectedYear(Number(e.target.value))}
          className="w-full"
        />
        <div className="mt-2 flex justify-between text-xs text-white/60">
          <span>{minYear} BCE</span>
          <span className="font-semibold text-white">{selectedYear}</span>
          <span>{maxYear}</span>
        </div>
      </div>

      <div className="rounded-lg border border-white/10 bg-white/5 p-4">
        <div className="mb-4 text-sm font-medium text-white/90">
          Objects from this era:
        </div>
        {relevantObjects.length > 0 ? (
          <div className="space-y-3">
            {relevantObjects.map((obj) => (
              <div key={obj.id} className="text-sm text-white/70">
                <div className="font-medium">{obj.title}</div>
                <div className="text-xs text-white/50">{obj.dateLabel}</div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-sm text-white/50">
            No objects from this period in the collection
          </div>
        )}
      </div>
    </div>
  );
}

