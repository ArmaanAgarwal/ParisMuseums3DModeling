"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { OBJECTS } from "@/data/client";
import { getObjectHref } from "@/lib/routes";
import Link from "next/link";

export function DataWallInteractive() {
  const [measureFilter, setMeasureFilter] = useState<string>("all");
  const [eraFilter, setEraFilter] = useState<string>("all");
  const [bodyFocusFilter, setBodyFocusFilter] = useState<string>("all");

  const measureTypes = ["time", "force", "motion", "physiology", "all"];
  const eras = ["ancient", "1800s", "1900s", "2000s", "future", "all"];
  const bodyFocuses = ["full-body", "lower-body", "upper-body", "cardio", "all"];

  const filteredObjects = useMemo(() => {
    return OBJECTS.filter((obj) => {
      if (measureFilter !== "all" && !obj.tags.includes(measureFilter)) return false;
      if (eraFilter !== "all") {
        const year = obj.yearNumber || 0;
        if (eraFilter === "ancient" && year > 0) return false;
        if (eraFilter === "1800s" && (year < 1800 || year >= 1900)) return false;
        if (eraFilter === "1900s" && (year < 1900 || year >= 2000)) return false;
        if (eraFilter === "2000s" && year < 2000) return false;
        if (eraFilter === "future" && year < 2020) return false;
      }
      if (bodyFocusFilter !== "all" && !obj.tags.includes(bodyFocusFilter)) return false;
      return true;
    }).slice(0, 6);
  }, [measureFilter, eraFilter, bodyFocusFilter]);

  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-3">
        <div>
          <label className="mb-2 block text-sm font-medium text-white/70">What It Measures</label>
          <select
            value={measureFilter}
            onChange={(e) => setMeasureFilter(e.target.value)}
            className="w-full rounded-lg border border-white/20 bg-white/5 px-4 py-2 text-white"
          >
            {measureTypes.map((type) => (
              <option key={type} value={type}>
                {type === "all" ? "All" : type.charAt(0).toUpperCase() + type.slice(1)}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="mb-2 block text-sm font-medium text-white/70">Era</label>
          <select
            value={eraFilter}
            onChange={(e) => setEraFilter(e.target.value)}
            className="w-full rounded-lg border border-white/20 bg-white/5 px-4 py-2 text-white"
          >
            {eras.map((era) => (
              <option key={era} value={era}>
                {era === "all" ? "All" : era.charAt(0).toUpperCase() + era.slice(1)}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="mb-2 block text-sm font-medium text-white/70">Body Focus</label>
          <select
            value={bodyFocusFilter}
            onChange={(e) => setBodyFocusFilter(e.target.value)}
            className="w-full rounded-lg border border-white/20 bg-white/5 px-4 py-2 text-white"
          >
            {bodyFocuses.map((focus) => (
              <option key={focus} value={focus}>
                {focus === "all" ? "All" : focus.replace("-", " ")}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="rounded-lg border border-white/10 bg-white/5 p-4">
        <div className="mb-4 text-sm font-medium text-white/90">
          Matching Objects: {filteredObjects.length}
        </div>
        <div className="grid gap-3 md:grid-cols-2">
          {filteredObjects.map((obj) => (
            <Link
              key={obj.id}
              href={getObjectHref(obj.id)}
              className="rounded-lg border border-white/10 bg-white/5 p-3 transition hover:border-cyan-400/50 hover:bg-cyan-500/10"
            >
              <div className="font-medium text-white/90">{obj.title}</div>
              <div className="mt-1 text-xs text-white/60">{obj.dateLabel}</div>
            </Link>
          ))}
        </div>
        {filteredObjects.length === 0 && (
          <div className="text-sm text-white/60">No objects match these filters</div>
        )}
      </div>
    </div>
  );
}








