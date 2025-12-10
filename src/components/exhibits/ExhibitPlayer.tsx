"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Exhibit, MuseumObject } from "@/data/types";
import Link from "next/link";

interface ExhibitPlayerProps {
  exhibit: Exhibit;
  objects: MuseumObject[];
  onClose: () => void;
}

export function ExhibitPlayer({ exhibit, objects, onClose }: ExhibitPlayerProps) {
  const [currentStop, setCurrentStop] = useState(0);
  const [saved, setSaved] = useState(false);

  const isIntro = currentStop === 0;
  const currentObject = isIntro ? null : objects[currentStop - 1];
  const totalStops = objects.length + 1; // +1 for intro
  const progress = ((currentStop + 1) / totalStops) * 100;

  const handleNext = () => {
    if (currentStop < totalStops - 1) {
      setCurrentStop(currentStop + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStop > 0) {
      setCurrentStop(currentStop - 1);
    }
  };

  const handleSave = () => {
    setSaved(true);
    const savedExhibits = JSON.parse(localStorage.getItem("savedExhibits") || "[]");
    if (!savedExhibits.includes(exhibit.id)) {
      localStorage.setItem("savedExhibits", JSON.stringify([...savedExhibits, exhibit.id]));
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black">
      {/* Header */}
      <div className="border-b border-white/10 bg-black/95 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-4 py-4 md:px-6">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm text-white/60">{exhibit.subtitle}</div>
              <h1 className="text-xl font-semibold text-white">{exhibit.title}</h1>
            </div>
            <div className="flex items-center gap-4">
              {!saved && (
                <button
                  onClick={handleSave}
                  className="rounded-lg border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/70 hover:bg-white/10"
                >
                  Save Exhibit
                </button>
              )}
              {saved && (
                <div className="rounded-lg border border-green-500/30 bg-green-500/10 px-4 py-2 text-sm text-green-300">
                  ✓ Saved
                </div>
              )}
              <button
                onClick={onClose}
                className="rounded-lg border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/70 hover:bg-white/10"
              >
                Close
              </button>
            </div>
          </div>
          {/* Progress */}
          <div className="mt-4">
            <div className="mb-2 flex items-center justify-between text-xs text-white/60">
              <span>Stop {currentStop + 1} of {totalStops}</span>
              <span>{exhibit.durationEstimate}</span>
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-white/10">
              <motion.div
                className="h-full bg-cyan-500"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-4xl px-4 py-12 md:px-6">
        <AnimatePresence mode="wait">
          {isIntro ? (
            <motion.div
              key="intro"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold text-white">Introduction</h2>
              <p className="text-lg leading-relaxed text-white/80">{exhibit.intro}</p>
              <div className="rounded-xl border border-white/15 bg-white/5 p-6">
                <div className="mb-2 text-sm font-semibold text-white/90">About This Exhibit</div>
                <div className="space-y-2 text-sm text-white/70">
                  <div>• {exhibit.stopIds.length} stops across {exhibit.galleryIds.length} galleries</div>
                  <div>• Estimated time: {exhibit.durationEstimate}</div>
                </div>
              </div>
            </motion.div>
          ) : (
            currentObject && (
              <motion.div
                key={currentObject.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <div className="text-sm text-white/60">Stop {currentStop} of {objects.length}</div>
                <h2 className="text-3xl font-bold text-white">{currentObject.title}</h2>
                <div className="text-lg text-white/70">{currentObject.dateLabel}</div>
                <div className="relative aspect-video overflow-hidden rounded-xl bg-white/5">
                  {currentObject.imagePath ? (
                    <img
                      src={currentObject.imagePath}
                      alt={currentObject.title}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center text-white/30">
                      <div className="text-6xl">📷</div>
                    </div>
                  )}
                </div>
                <p className="text-lg leading-relaxed text-white/80">
                  {currentObject.longDescription || currentObject.description}
                </p>
                <Link
                  href={`/objects/${currentObject.slug}`}
                  className="inline-block rounded-lg border border-cyan-500/30 bg-cyan-500/10 px-6 py-3 text-sm font-medium text-cyan-300 transition hover:bg-cyan-500/20"
                >
                  View Full Object Details →
                </Link>
              </motion.div>
            )
          )}
        </AnimatePresence>
      </div>

      {/* Navigation */}
      <div className="fixed bottom-0 left-0 right-0 border-t border-white/10 bg-black/95 backdrop-blur-xl">
        <div className="mx-auto max-w-4xl px-4 py-6 md:px-6">
          <div className="flex items-center justify-between">
            <button
              onClick={handlePrevious}
              disabled={currentStop === 0}
              className="rounded-xl border border-white/20 bg-white/5 px-6 py-3 font-medium text-white transition disabled:opacity-30 disabled:cursor-not-allowed hover:bg-white/10"
            >
              ← Previous
            </button>
            <div className="text-sm text-white/60">
              {currentStop + 1} / {totalStops}
            </div>
            <button
              onClick={handleNext}
              disabled={currentStop >= totalStops - 1}
              className="rounded-xl border border-cyan-500/30 bg-cyan-500/20 px-6 py-3 font-medium text-white transition disabled:opacity-30 disabled:cursor-not-allowed hover:bg-cyan-500/30"
            >
              {currentStop >= totalStops - 1 ? "Finish" : "Next →"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

