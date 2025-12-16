"use client";

import { motion, AnimatePresence } from "framer-motion";
import type { TourConfig } from "@/data/tours";
import { getObjectById } from "@/data/client";

interface TourMapModalProps {
  tourConfig: TourConfig;
  currentStopIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onJumpToStop: (stopIndex: number) => void;
}

export function TourMapModal({
  tourConfig,
  currentStopIndex,
  isOpen,
  onClose,
  onJumpToStop,
}: TourMapModalProps) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm"
          />
          
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed left-1/2 top-1/2 z-50 max-h-[80vh] w-full max-w-2xl -translate-x-1/2 -translate-y-1/2 overflow-y-auto rounded-2xl border border-white/20 bg-black/95 p-6 shadow-2xl"
          >
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-2xl font-bold text-white">Tour Map</h2>
              <button
                onClick={onClose}
                className="rounded-lg p-2 text-white/70 transition hover:bg-white/10 hover:text-white"
              >
                ✕
              </button>
            </div>

            <div className="space-y-2">
              {tourConfig.stops.map((stop, index) => {
                const isCurrent = index === currentStopIndex;
                const isPast = index < currentStopIndex;
                const object = stop.type === "object" && stop.objectId 
                  ? getObjectById(stop.objectId) 
                  : null;

                return (
                  <button
                    key={index}
                    onClick={() => {
                      onJumpToStop(index);
                      onClose();
                    }}
                    className={`w-full rounded-lg border p-4 text-left transition ${
                      isCurrent
                        ? "border-cyan-500/50 bg-cyan-500/20 text-cyan-300"
                        : isPast
                        ? "border-white/10 bg-white/5 text-white/70 hover:border-white/20"
                        : "border-white/10 bg-white/5 text-white/50 hover:border-white/20"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-semibold ${
                          isCurrent
                            ? "bg-cyan-500 text-white"
                            : isPast
                            ? "bg-white/10 text-white/70"
                            : "bg-white/5 text-white/40"
                        }`}
                      >
                        {index + 1}
                      </div>
                      <div className="flex-grow">
                        <div className="mb-1 text-xs font-semibold uppercase tracking-wide text-white/60">
                          {stop.type === "context" ? "Context" : "Object"}
                        </div>
                        <div className="font-medium">
                          {stop.title || object?.title || `Stop ${index + 1}`}
                        </div>
                      </div>
                      {isCurrent && (
                        <div className="text-xs text-cyan-400">Current</div>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4 text-sm text-white/60">
              <div>
                Stop {currentStopIndex + 1} of {tourConfig.stops.length}
              </div>
              <button
                onClick={onClose}
                className="rounded-lg border border-white/20 bg-white/5 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/10"
              >
                Close
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}


