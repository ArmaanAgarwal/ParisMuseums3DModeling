"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface TourStepLevel2ActivityProps {
  onNext: () => void;
  onPrevious: () => void;
}

export function TourStepLevel2Activity({ onNext, onPrevious }: TourStepLevel2ActivityProps) {
  const [selectedMetric, setSelectedMetric] = useState<string | null>(null);

  const metrics = [
    {
      id: "force",
      label: "Ground Reaction Force",
      devices: ["Force plates", "Pressure mats", "Load cells"],
      why: "Force measurement shows how athletes generate power. It reveals the physics of movement and helps optimize technique. Higher forces mean more power, but technique matters more than raw force.",
      impact: "Understanding force helps athletes improve efficiency. Better technique generates more force with less energy.",
    },
    {
      id: "motion",
      label: "Three Dimensional Motion",
      devices: ["Motion capture systems", "Markerless tracking", "Video analysis"],
      why: "Motion capture shows movement in three dimensions. It reveals patterns invisible to the eye, like how joints move together or how technique affects efficiency.",
      impact: "Motion data helps athletes optimize technique. Small changes in movement can create big improvements in performance.",
    },
    {
      id: "physiology",
      label: "Physiological Data",
      devices: ["Heart rate monitors", "Oxygen sensors", "Temperature sensors"],
      why: "Physiological sensors measure what is happening inside the body. Heart rate shows effort. Oxygen levels show efficiency. Temperature shows stress.",
      impact: "Physiological data helps athletes train at the right intensity. Too hard and you burn out. Too easy and you do not improve.",
    },
    {
      id: "time",
      label: "Time and Speed",
      devices: ["Timing systems", "GPS trackers", "Accelerometers"],
      why: "Time measurement is the foundation of performance. How fast did you run? How long did it take? Speed is distance divided by time.",
      impact: "Precise timing enables records and comparisons. It transforms performance from observation to measurement.",
    },
  ];

  return (
    <div className="min-h-screen bg-black py-20">
      <div className="mx-auto max-w-4xl px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-12"
        >
          <div>
            <h1 className="mb-6 text-4xl font-semibold md:text-5xl">
              Interactive: What Does This Metric Measure?
            </h1>
            <p className="mb-6 text-xl leading-relaxed text-white/80">
              Select a performance metric to see what devices measure it and why it matters. This shows how different measurement technologies reveal different aspects of performance.
            </p>
          </div>

          {/* Metric Selector */}
          <div className="rounded-2xl border border-white/15 bg-white/5 p-8">
            <h2 className="mb-6 text-2xl font-semibold">Select a Metric</h2>
            <div className="grid gap-4 md:grid-cols-2">
              {metrics.map((metric) => (
                <button
                  key={metric.id}
                  onClick={() => setSelectedMetric(selectedMetric === metric.id ? null : metric.id)}
                  className={`rounded-xl border p-4 text-left transition ${
                    selectedMetric === metric.id
                      ? "border-cyan-400/50 bg-cyan-500/10"
                      : "border-white/15 bg-white/5 hover:border-white/30 hover:bg-white/10"
                  }`}
                >
                  <div className="font-semibold">{metric.label}</div>
                </button>
              ))}
            </div>

            {/* Selected Metric Info */}
            <AnimatePresence>
              {selectedMetric && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mt-6 rounded-xl border border-cyan-500/30 bg-cyan-500/10 p-6"
                >
                  {(() => {
                    const metric = metrics.find((m) => m.id === selectedMetric);
                    if (!metric) return null;
                    return (
                      <>
                        <h3 className="mb-4 text-xl font-semibold text-cyan-300">{metric.label}</h3>
                        <div className="mb-4">
                          <div className="mb-2 text-sm font-semibold text-white/90">Devices That Measure This</div>
                          <div className="flex flex-wrap gap-2">
                            {metric.devices.map((device, i) => (
                              <span
                                key={i}
                                className="rounded-lg border border-white/20 bg-white/5 px-3 py-1 text-sm text-white/80"
                              >
                                {device}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div className="mb-4 rounded-lg border border-cyan-500/20 bg-cyan-500/5 p-4">
                          <div className="mb-2 text-sm font-semibold text-cyan-200">Why This Matters</div>
                          <p className="text-sm text-white/90">{metric.why}</p>
                        </div>
                        <div className="rounded-lg border border-white/20 bg-white/5 p-4">
                          <div className="mb-2 text-sm font-semibold text-white/90">Impact on Performance</div>
                          <p className="text-sm text-white/80">{metric.impact}</p>
                        </div>
                      </>
                    );
                  })()}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Learning Point */}
          <div className="rounded-2xl border border-white/15 bg-white/5 p-8">
            <h2 className="mb-4 text-xl font-semibold">What This Teaches</h2>
            <p className="leading-relaxed text-white/80">
              Different metrics reveal different aspects of performance. No single measurement tells the whole story. Force shows power. Motion shows technique. Physiology shows effort. Time shows speed. Together, these measurements create a complete picture of performance. This is why modern athletes use multiple sensors and data sources.
            </p>
          </div>

          {/* Navigation */}
          <div className="flex justify-between">
            <button
              onClick={onPrevious}
              className="rounded-xl border border-white/20 bg-white/5 px-8 py-4 font-medium transition hover:bg-white/10"
            >
              ← Previous
            </button>
            <button
              onClick={onNext}
              className="rounded-xl border border-cyan-500/30 bg-cyan-500/20 px-8 py-4 font-medium transition hover:bg-cyan-500/30"
            >
              Moving to Level 3 →
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}







