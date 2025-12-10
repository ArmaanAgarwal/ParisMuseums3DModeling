"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ChevronLeft, ChevronRight, X } from "./icons";

interface TourStep {
  id: string;
  title: string;
  description: string;
  href: string;
  estimatedTime: string;
}

const TOUR_STEPS: TourStep[] = [
  {
    id: "location",
    title: "Location & Setting",
    description:
      "Explore the site context, arrival sequence, axis, gardens, and reflecting water plane that establish the museum's presence.",
    href: "/location",
    estimatedTime: "5 min",
  },
  {
    id: "architecture",
    title: "Architecture",
    description:
      "Discover the massing strategy, facade systems (exposed tech + brick wing), structure, materials, and lighting design.",
    href: "/architecture",
    estimatedTime: "8 min",
  },
  {
    id: "collections",
    title: "Collections Layout",
    description:
      "Understand how the three levels are organized, how visitors move through zones, and how the narrative unfolds.",
    href: "/collections",
    estimatedTime: "7 min",
  },
  {
    id: "objects",
    title: "Objects Gallery",
    description:
      "Browse the 10 detailed objects that anchor the museum's collection, each with full metadata and didactic materials.",
    href: "/objects",
    estimatedTime: "15 min",
  },
  {
    id: "didactics",
    title: "Didactic Materials",
    description:
      "See examples of wall texts, labels, interactive touchscreens, and participation stations that enhance the collection.",
    href: "/didactics",
    estimatedTime: "10 min",
  },
];

interface GuidedTourProps {
  open: boolean;
  onClose: () => void;
}

export function GuidedTour({ open, onClose }: GuidedTourProps) {
  const [currentStep, setCurrentStep] = useState(0);

  if (!open) return null;

  const step = TOUR_STEPS[currentStep];
  const progress = ((currentStep + 1) / TOUR_STEPS.length) * 100;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          onClick={onClose}
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-2xl rounded-2xl border border-white/15 bg-zinc-950/95 shadow-2xl"
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-white/10 p-6">
            <div>
              <h2 className="text-xl font-semibold">Guided Tour</h2>
              <p className="mt-1 text-sm text-white/70">
                Step {currentStep + 1} of {TOUR_STEPS.length}
              </p>
            </div>
            <button
              onClick={onClose}
              className="rounded-lg border border-white/10 bg-white/5 p-2 transition hover:bg-white/10"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Progress bar */}
          <div className="h-1 bg-white/5">
            <motion.div
              className="h-full bg-white/50"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>

          {/* Content */}
          <div className="p-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={step.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.2 }}
              >
                <div className="mb-2 text-sm font-medium text-white/60">
                  {step.estimatedTime}
                </div>
                <h3 className="text-2xl font-semibold">{step.title}</h3>
                <p className="mt-3 text-white/80">{step.description}</p>

                <Link
                  href={step.href}
                  onClick={onClose}
                  className="mt-6 inline-block rounded-xl border border-white/15 bg-white/8 px-6 py-3 font-medium transition hover:bg-white/12"
                >
                  Visit {step.title} →
                </Link>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between border-t border-white/10 p-6">
            <button
              onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
              disabled={currentStep === 0}
              className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2 transition disabled:opacity-30 disabled:cursor-not-allowed hover:bg-white/10"
            >
              <ChevronLeft className="h-4 w-4" />
              Previous
            </button>

            <div className="flex gap-1">
              {TOUR_STEPS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentStep(i)}
                  className={`h-2 w-2 rounded-full transition ${
                    i === currentStep
                      ? "bg-white/80"
                      : "bg-white/20 hover:bg-white/40"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={() => {
                if (currentStep < TOUR_STEPS.length - 1) {
                  setCurrentStep(currentStep + 1);
                } else {
                  onClose();
                }
              }}
              className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/8 px-4 py-2 font-medium transition hover:bg-white/12"
            >
              {currentStep < TOUR_STEPS.length - 1 ? (
                <>
                  Next
                  <ChevronRight className="h-4 w-4" />
                </>
              ) : (
                "Complete Tour"
              )}
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

