"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { OBJECTS } from "@/data/client";

export function CompareObjects() {
  const [object1Id, setObject1Id] = useState<string | null>(null);
  const [object2Id, setObject2Id] = useState<string | null>(null);

  const object1 = object1Id ? OBJECTS.find((o) => o.id === object1Id) : null;
  const object2 = object2Id ? OBJECTS.find((o) => o.id === object2Id) : null;

  return (
    <div className="rounded-xl border border-white/15 bg-white/5 p-8">
      <h3 className="mb-6 text-xl font-semibold">Compare Objects</h3>
      <p className="mb-6 text-sm text-white/70">
        Select two objects to see side-by-side comparison
      </p>

      <div className="mb-6 grid gap-4 md:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-medium">Object 1</label>
          <select
            value={object1Id || ""}
            onChange={(e) => setObject1Id(e.target.value || null)}
            className="w-full rounded-lg border border-white/20 bg-white/5 px-4 py-2 text-white"
          >
            <option value="">Select an object...</option>
            {OBJECTS.slice(0, 10).map((obj) => (
              <option key={obj.id} value={obj.id}>
                {obj.title}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="mb-2 block text-sm font-medium">Object 2</label>
          <select
            value={object2Id || ""}
            onChange={(e) => setObject2Id(e.target.value || null)}
            className="w-full rounded-lg border border-white/20 bg-white/5 px-4 py-2 text-white"
          >
            <option value="">Select an object...</option>
            {OBJECTS.slice(0, 10).map((obj) => (
              <option key={obj.id} value={obj.id}>
                {obj.title}
              </option>
            ))}
          </select>
        </div>
      </div>

      {object1 && object2 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid gap-6 md:grid-cols-2"
        >
          <div className="rounded-lg border border-white/10 bg-white/5 p-4">
            <h4 className="mb-3 font-semibold">{object1.title}</h4>
            <div className="space-y-2 text-sm">
              <div>
                <span className="text-white/60">Date: </span>
                <span className="text-white/90">{object1.dateLabel}</span>
              </div>
              <div>
                <span className="text-white/60">Impact: </span>
                <span className="text-white/90">{object1.howItChangedPerformance}</span>
              </div>
            </div>
          </div>
          <div className="rounded-lg border border-white/10 bg-white/5 p-4">
            <h4 className="mb-3 font-semibold">{object2.title}</h4>
            <div className="space-y-2 text-sm">
              <div>
                <span className="text-white/60">Date: </span>
                <span className="text-white/90">{object2.dateLabel}</span>
              </div>
              <div>
                <span className="text-white/60">Impact: </span>
                <span className="text-white/90">{object2.howItChangedPerformance}</span>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}

