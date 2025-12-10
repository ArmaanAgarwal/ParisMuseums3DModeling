"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MuseumObject } from "@/data/types";
import { getGallery } from "@/data/client";

interface CompareDrawerProps {
  selectedObjects: MuseumObject[];
  onRemove: (id: string) => void;
  onClose: () => void;
}

export function CompareDrawer({ selectedObjects, onRemove, onClose }: CompareDrawerProps) {
  return (
    <AnimatePresence>
      {selectedObjects.length > 0 && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
          />
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 z-50 h-full w-full max-w-2xl overflow-y-auto border-l border-white/10 bg-black/95 backdrop-blur-xl p-6"
          >
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-2xl font-bold text-white">
                Compare ({selectedObjects.length}/3)
              </h2>
              <button
                onClick={onClose}
                className="rounded-lg border border-white/15 bg-white/5 p-2 text-white/70 hover:bg-white/10"
                aria-label="Close"
              >
                ✕
              </button>
            </div>

            <div className="space-y-4">
              {selectedObjects.map((obj) => {
                const gallery = obj.galleryId ? getGallery(obj.galleryId) : null;
                return (
                  <div
                    key={obj.id}
                    className="rounded-xl border border-white/15 bg-white/5 p-6"
                  >
                    <div className="mb-4 flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="mb-2 text-xl font-semibold text-white">{obj.title}</h3>
                        <div className="mb-2 flex items-center gap-2 text-sm text-white/60">
                          <span>{obj.dateLabel}</span>
                          {gallery && <span>• {gallery.title}</span>}
                        </div>
                      </div>
                      <button
                        onClick={() => onRemove(obj.id)}
                        className="rounded-lg border border-white/15 bg-white/5 p-2 text-white/70 hover:bg-red-500/20 hover:text-red-300"
                        aria-label="Remove"
                      >
                        ✕
                      </button>
                    </div>

                    <div className="mb-4">
                      <div className="mb-2 text-xs font-semibold text-white/60">Key Idea</div>
                      <p className="text-sm text-white/80">
                        {obj.shortLabel || obj.description}
                      </p>
                    </div>

                    {obj.howItChangedPerformance && (
                      <div className="mb-4">
                        <div className="mb-2 text-xs font-semibold text-white/60">How It Works</div>
                        <p className="text-sm text-white/80">
                          {obj.howItChangedPerformance}
                        </p>
                      </div>
                    )}

                    {(obj.measurementAngle || obj.designAngle) && (
                      <div className="mb-4">
                        <div className="mb-2 text-xs font-semibold text-white/60">Tradeoffs</div>
                        <div className="space-y-2 text-sm text-white/80">
                          {obj.measurementAngle && (
                            <p><span className="font-medium">Measurement:</span> {obj.measurementAngle}</p>
                          )}
                          {obj.designAngle && (
                            <p><span className="font-medium">Design:</span> {obj.designAngle}</p>
                          )}
                        </div>
                      </div>
                    )}

                    <div>
                      <div className="mb-2 text-xs font-semibold text-white/60">Tags</div>
                      <div className="flex flex-wrap gap-2">
                        {obj.tags.slice(0, 5).map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full border border-white/10 bg-white/5 px-2 py-1 text-xs text-white/70"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {selectedObjects.length < 3 && (
              <div className="mt-6 rounded-lg border border-white/10 bg-white/5 p-4 text-center text-sm text-white/60">
                Select up to 3 objects to compare
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

