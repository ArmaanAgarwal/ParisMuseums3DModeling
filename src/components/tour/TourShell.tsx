"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GALLERIES } from "@/data/client";
import type { TourConfig } from "@/data/tours";
import { getObjectById } from "@/data/client";
import { useTranslation } from "@/hooks/useTranslation";

interface TourShellProps {
  tourConfig: TourConfig;
  currentStep: number;
  onStepChange: (step: number) => void;
  onBack: () => void;
  onFinish?: () => void;
  children: React.ReactNode;
}

export function TourShell({
  tourConfig,
  currentStep,
  onStepChange,
  onBack,
  onFinish,
  children,
}: TourShellProps) {
  const [showTourMap, setShowTourMap] = useState(false);
  const { t } = useTranslation();

  const progress = ((currentStep + 1) / tourConfig.stops.length) * 100;
  const currentStop = tourConfig.stops[currentStep];
  
  // Get current gallery info
  const currentGallery = currentStop?.type === "object" && currentStop.objectId
    ? getObjectById(currentStop.objectId)?.galleryId
    : null;
  const galleryTitle = currentGallery 
    ? GALLERIES.find(g => g.id === currentGallery)?.title 
    : null;

  return (
    <>
      {/* Header */}
      <div className="border-b border-white/10 bg-black/95 backdrop-blur-xl sticky top-0 z-40">
        <div className="mx-auto max-w-7xl px-4 py-4 md:px-6">
          <div className="flex items-center justify-between mb-4">
            <button
              onClick={onBack}
              className="text-sm text-white/60 hover:text-white transition"
            >
              {t("ui.common.backToSelection")}
            </button>
            <div className="flex items-center gap-4">
              {galleryTitle && (
                <div className="text-sm text-white/60">
                  {galleryTitle} • {t("ui.tourUI.stepLabel", { current: currentStep + 1, total: tourConfig.stops.length })}
                </div>
              )}
              {!galleryTitle && (
                <div className="text-sm text-white/60">
                  {t("ui.tourUI.stepLabel", { current: currentStep + 1, total: tourConfig.stops.length })}
                </div>
              )}
              <button
                onClick={() => setShowTourMap(true)}
                className="rounded-lg border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/10"
              >
                {t("ui.common.tourMap")}
              </button>
            </div>
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

      {/* Content */}
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation - Fixed Bottom */}
      <div className="fixed bottom-0 left-0 right-0 border-t border-white/10 bg-black/95 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-4 py-6 md:px-6">
          <div className="flex items-center justify-between gap-4">
            <button
              onClick={() => onStepChange(currentStep - 1)}
              disabled={currentStep === 0}
              className="rounded-xl border border-white/20 bg-white/5 px-6 py-3 font-medium text-white transition disabled:opacity-30 disabled:cursor-not-allowed hover:bg-white/10"
            >
              {t("ui.buttons.previous")}
            </button>
            
            <div className="flex items-center gap-4">
              <select
                onChange={(e) => {
                  const galleryId = e.target.value;
                  if (!galleryId) return;
                  const index = tourConfig.stops.findIndex(
                    (stop) => {
                      if (stop.type === "object" && stop.objectId) {
                        const obj = getObjectById(stop.objectId);
                        return obj?.galleryId === galleryId;
                      }
                      return false;
                    }
                  );
                  if (index !== -1) {
                    onStepChange(index);
                  }
                }}
                value=""
                className="rounded-lg border border-white/15 bg-white/5 px-4 py-2 text-sm text-white focus:border-cyan-500/50 focus:outline-none"
              >
                <option value="">Jump to Gallery</option>
                {GALLERIES.map((g) => (
                  <option key={g.id} value={g.id}>
                    {g.title}
                  </option>
                ))}
              </select>
              <div className="text-sm text-white/60">
                {currentStep + 1} / {tourConfig.stops.length}
              </div>
            </div>

            <button
              onClick={() => {
                if (currentStep >= tourConfig.stops.length - 1) {
                  onFinish?.();
                } else {
                  onStepChange(currentStep + 1);
                }
              }}
              className="rounded-xl border border-cyan-500/30 bg-cyan-500/20 px-6 py-3 font-medium text-white transition hover:bg-cyan-500/30"
            >
              {currentStep >= tourConfig.stops.length - 1 ? t("ui.buttons.finish") : t("ui.buttons.next")}
            </button>
          </div>
        </div>
      </div>

      {/* Tour Map Modal */}
      <AnimatePresence>
        {showTourMap && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowTourMap(false)}
              className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="fixed left-1/2 top-1/2 z-50 w-full max-w-2xl -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-white/15 bg-black p-8"
            >
              <div className="mb-6 flex items-center justify-between">
                <h2 className="text-2xl font-bold">{t("ui.common.tourMap")}</h2>
                <button
                  onClick={() => setShowTourMap(false)}
                  className="rounded-lg border border-white/15 bg-white/5 p-2 text-white/70 hover:bg-white/10"
                >
                  ✕
                </button>
              </div>
              <div className="max-h-[60vh] space-y-2 overflow-y-auto">
                {tourConfig.stops.map((stop, idx) => {
                  const isCurrent = idx === currentStep;
                  const object = stop.type === "object" && stop.objectId 
                    ? getObjectById(stop.objectId)
                    : null;
                  
                  return (
                    <button
                      key={idx}
                      onClick={() => {
                        onStepChange(idx);
                        setShowTourMap(false);
                      }}
                      className={`w-full rounded-lg border p-4 text-left transition ${
                        isCurrent
                          ? "border-cyan-500/50 bg-cyan-500/20"
                          : "border-white/10 bg-white/5 hover:border-white/20 hover:bg-white/10"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold ${
                          isCurrent
                            ? "bg-cyan-500 text-white"
                            : "bg-white/10 text-white/60"
                        }`}>
                          {idx + 1}
                        </div>
                        <div className="flex-1">
                          <div className="mb-1 text-xs font-medium text-white/60">
                            {stop.type === "context" ? "Context Stop" : "Object"}
                          </div>
                          <div className="font-semibold text-white">
                            {stop.type === "context" ? stop.title : object?.title || stop.title}
                          </div>
                        </div>
                        {isCurrent && (
                          <div className="text-xs text-cyan-400">{t("ui.common.current")}</div>
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

