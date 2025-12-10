"use client";

import { useState, useMemo, useEffect } from "react";
import { EXHIBITS, getAllObjects, getObjectById } from "@/data/client";
import { motion } from "framer-motion";
import { GALLERIES } from "@/data/client";
import { getTourAllConfig, getGalleryTourConfig } from "@/data/tours";
import Link from "next/link";
import { TourShell } from "./TourShell";
import { TourStopRenderer } from "./TourStopRenderer";
import { TourMapModal } from "./TourMapModal";

interface TourPlayerProps {
  selectedGallery: string | "all";
  onBack: () => void;
}

export function TourPlayer({ selectedGallery, onBack }: TourPlayerProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number | null>>({});
  const [showFeedback, setShowFeedback] = useState<Record<number, boolean>>({});
  const [showCompletion, setShowCompletion] = useState(false);
  const [finalReflection, setFinalReflection] = useState("");
  const [showTourMap, setShowTourMap] = useState(false);

  // Load tour state from localStorage
  useEffect(() => {
    if (typeof window === "undefined") return;
    
    try {
      const savedState = localStorage.getItem(`tourState_${selectedGallery}`);
      if (savedState) {
        const state = JSON.parse(savedState);
        setCurrentStep(state.currentStep || 0);
        setAnswers(state.answers || {});
        // Restore feedback states for answered questions
        const feedbackStates: Record<number, boolean> = {};
        Object.keys(state.answers || {}).forEach((key) => {
          if (state.answers[key] !== null) {
            feedbackStates[parseInt(key)] = true;
          }
        });
        setShowFeedback(feedbackStates);
      }
    } catch (e) {
      // Ignore errors, use defaults
    }
  }, [selectedGallery]);

  // Save tour state
  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        localStorage.setItem(`tourState_${selectedGallery}`, JSON.stringify({
          currentStep,
          answers,
        }));
        localStorage.setItem("tourAnswers", JSON.stringify(answers));
      } catch (e) {
        // Ignore
      }
    }
  }, [currentStep, answers, selectedGallery]);

  const tourConfig = useMemo(() => {
    try {
      if (selectedGallery === "all") {
        return getTourAllConfig();
      } else {
        return getGalleryTourConfig(selectedGallery);
      }
    } catch (e) {
      console.error("Error loading tour config:", e);
      return null;
    }
  }, [selectedGallery]);

  const currentStop = tourConfig?.stops[currentStep];
  const isLastStep = currentStep >= (tourConfig?.stops.length || 0) - 1;

  const handleAnswer = (stopIndex: number, choiceIndex: number) => {
    const newAnswers = { ...answers, [stopIndex]: choiceIndex };
    setAnswers(newAnswers);
    setShowFeedback({ ...showFeedback, [stopIndex]: true });
  };

  const handleStepChange = (newStep: number) => {
    if (newStep >= 0 && newStep < (tourConfig?.stops.length || 0)) {
      setCurrentStep(newStep);
    }
  };

  const handleFinish = () => {
    if (isLastStep) {
      setShowCompletion(true);
    }
  };

  const handleSaveObject = (objectId: string) => {
    if (typeof window !== "undefined") {
      try {
        const saved = JSON.parse(localStorage.getItem("savedObjects") || "[]");
        if (!saved.includes(objectId)) {
          localStorage.setItem("savedObjects", JSON.stringify([...saved, objectId]));
        }
      } catch (e) {
        // Ignore
      }
    }
  };

  // Generate Tour Lens from answers
  const generateTourLens = () => {
    const valueCounts: Record<string, number> = {};
    
    Object.entries(answers).forEach(([stopIdx, answerIdx]) => {
      if (answerIdx === null) return;
      const stop = tourConfig?.stops[parseInt(stopIdx)];
      if (!stop) return;

      if (stop.type === "object" && stop.objectId) {
        const obj = getObjectById(stop.objectId);
        const choice = obj?.tourContent?.reflectionChoices?.[answerIdx];
        if (choice?.value) {
          valueCounts[choice.value] = (valueCounts[choice.value] || 0) + 1;
        }
      } else if (stop.reflectionChoices?.[answerIdx]) {
        const choice = stop.reflectionChoices[answerIdx];
        if (choice.value) {
          valueCounts[choice.value] = (valueCounts[choice.value] || 0) + 1;
        }
      }
    });

    const topValue = Object.entries(valueCounts).sort((a, b) => b[1] - a[1])[0]?.[0];
    
    if (topValue?.includes("Accuracy")) {
      return {
        title: "The Precision Seeker",
        description: "You prioritize accuracy and objectivity. You value measurement that makes performance comparable and fair.",
        bullets: [
          "You trust mechanical precision over human judgment",
          "You see standardization as a path to fairness",
          "You value data that makes performance comparable",
          "You're concerned about consistency and verifiability"
        ]
      };
    } else if (topValue?.includes("Context")) {
      return {
        title: "The Contextual Thinker",
        description: "You recognize that innovation's impact depends on where, when, and who uses it.",
        bullets: [
          "You see that tools mean different things in different contexts",
          "You're aware of how access shapes innovation's impact",
          "You value understanding over standardization",
          "You recognize that the same tool can help or harm depending on context"
        ]
      };
    } else if (topValue?.includes("Fairness")) {
      return {
        title: "The Equity Advocate",
        description: "You prioritize fairness and access. You're concerned with who benefits from innovation.",
        bullets: [
          "You value tools that expand access, not restrict it",
          "You're concerned about equity and inclusion",
          "You question who benefits from new technologies",
          "You see fairness as more important than precision"
        ]
      };
    }
    
    return {
      title: "The Thoughtful Explorer",
      description: "Your answers show you're engaging deeply with the questions these objects raise.",
      bullets: [
        "You recognize complexity in innovation",
        "You see both benefits and tradeoffs",
        "You value nuanced thinking over simple answers"
      ]
    };
  };

  // Completion screen
  if (showCompletion && isLastStep) {
    const tourLens = generateTourLens();
    const allGalleries = GALLERIES;
    const allExhibits = EXHIBITS;
    const allObjects = getAllObjects();
    
    const suggestedGallery = allGalleries[0] || null;
    const suggestedExhibit = allExhibits[0] || null;
    const suggestedObjects = allObjects.slice(0, 2);

    return (
      <div className="min-h-screen bg-black">
        <div className="mx-auto max-w-4xl px-4 py-20 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            <div className="text-center">
              <h1 className="mb-4 text-5xl font-bold">Tour Complete</h1>
              <p className="text-xl text-white/70">Thank you for exploring the museum</p>
            </div>

            {/* Your Tour Lens */}
            <div className="rounded-2xl border border-white/15 bg-white/5 p-8">
              <h2 className="mb-4 text-2xl font-semibold">Your Tour Lens</h2>
              <h3 className="mb-2 text-xl font-semibold text-cyan-400">{tourLens.title}</h3>
              <p className="mb-4 text-white/80 leading-relaxed">{tourLens.description}</p>
              <ul className="space-y-2">
                {tourLens.bullets.map((bullet, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-1 text-cyan-400">•</span>
                    <span className="text-white/80">{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* What you learned */}
            <div className="rounded-2xl border border-white/15 bg-white/5 p-8">
              <h2 className="mb-4 text-2xl font-semibold">What You Learned</h2>
              <ul className="space-y-3 text-white/80">
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-cyan-400">•</span>
                  <span>Innovation in sport happens through tools, measurement, and design—not just training.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-cyan-400">•</span>
                  <span>Every innovation raises questions about fairness, access, and what "progress" means.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-cyan-400">•</span>
                  <span>Your perspective on these questions shapes how you understand sport's evolution.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-cyan-400">•</span>
                  <span>Measurement changes what we can see, but it also changes what we prioritize.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-cyan-400">•</span>
                  <span>The line between enhancement and unfair advantage is constantly being redrawn.</span>
                </li>
              </ul>
            </div>

            {/* Your answers recap */}
            {Object.keys(answers).length > 0 && (
              <div className="rounded-2xl border border-white/15 bg-white/5 p-8">
                <h2 className="mb-4 text-2xl font-semibold">Your Answers</h2>
                <p className="text-white/70">
                  You answered {Object.keys(answers).length} reflection prompts during your tour. 
                  These responses helped shape your understanding of how innovation reshapes sport.
                </p>
              </div>
            )}

            {/* Final reflection */}
            <div className="rounded-2xl border border-white/15 bg-white/5 p-8">
              <h2 className="mb-4 text-2xl font-semibold">Final Reflection</h2>
              <textarea
                value={finalReflection}
                onChange={(e) => setFinalReflection(e.target.value)}
                placeholder="What will you take away from this tour? What questions remain?"
                className="w-full rounded-lg border border-white/15 bg-white/5 p-4 text-white placeholder:text-white/40 focus:border-cyan-500/50 focus:outline-none min-h-[120px]"
              />
              <button
                onClick={() => {
                  if (typeof window !== "undefined") {
                    try {
                      localStorage.setItem("tourFinalReflection", finalReflection);
                    } catch (e) {
                      // Ignore
                    }
                  }
                }}
                className="mt-4 rounded-lg border border-cyan-500/30 bg-cyan-500/20 px-6 py-2 text-sm font-medium text-white transition hover:bg-cyan-500/30"
              >
                Save Reflection
              </button>
            </div>

            {/* Continue exploring */}
            <div className="rounded-2xl border border-white/15 bg-white/5 p-8">
              <h2 className="mb-4 text-2xl font-semibold">Continue Exploring</h2>
              <div className="grid gap-4 md:grid-cols-2">
                {suggestedGallery && (
                  <Link
                    href={`/galleries/${suggestedGallery.id}`}
                    className="rounded-xl border border-white/15 bg-white/5 p-6 transition hover:border-cyan-400/50 hover:bg-cyan-500/10"
                  >
                    <div className="mb-2 text-sm font-medium text-cyan-400">Gallery</div>
                    <h3 className="mb-2 text-lg font-semibold text-white">{suggestedGallery.title}</h3>
                    <p className="text-sm text-white/70 line-clamp-2">{suggestedGallery.blurb}</p>
                  </Link>
                )}
                {suggestedExhibit && (
                  <Link
                    href={`/exhibits/${suggestedExhibit.id}`}
                    className="rounded-xl border border-white/15 bg-white/5 p-6 transition hover:border-cyan-400/50 hover:bg-cyan-500/10"
                  >
                    <div className="mb-2 text-sm font-medium text-cyan-400">Exhibit</div>
                    <h3 className="mb-2 text-lg font-semibold text-white">{suggestedExhibit.title}</h3>
                    <p className="text-sm text-white/70 line-clamp-2">{suggestedExhibit.intro}</p>
                  </Link>
                )}
                {suggestedObjects.map((obj) => (
                  <Link
                    key={obj.id}
                    href={`/objects/${obj.slug}`}
                    className="rounded-xl border border-white/15 bg-white/5 p-6 transition hover:border-cyan-400/50 hover:bg-cyan-500/10"
                  >
                    <div className="mb-2 text-xs text-white/60">{obj.dateLabel}</div>
                    <h3 className="mb-2 text-lg font-semibold text-white">{obj.title}</h3>
                    <p className="text-sm text-white/70 line-clamp-2">{obj.shortLabel || obj.description}</p>
                  </Link>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center justify-center gap-4">
              <Link
                href="/exhibits"
                className="rounded-xl border border-cyan-500/30 bg-cyan-500/20 px-6 py-3 font-medium text-white transition hover:bg-cyan-500/30"
              >
                Start an Exhibit
              </Link>
              <Link
                href="/"
                className="rounded-xl border border-white/20 bg-white/5 px-6 py-3 font-medium text-white transition hover:bg-white/10"
              >
                Return Home
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  if (!tourConfig || !currentStop) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <p className="text-white/70 mb-4">No tour stops available</p>
          <button
            onClick={onBack}
            className="rounded-xl border border-white/20 bg-white/5 px-6 py-3 text-white hover:bg-white/10"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  // Check for missing reflection config
  if (currentStop.type === "context" && (!currentStop.reflectionChoices || currentStop.reflectionChoices.length === 0)) {
    console.error(`Context stop "${currentStop.title}" missing reflectionChoices`);
  }
  if (currentStop.type === "object" && currentStop.objectId) {
    const obj = getObjectById(currentStop.objectId);
    if (obj && (!obj.tourContent?.reflectionChoices || obj.tourContent.reflectionChoices.length === 0)) {
      console.error(`Object stop "${obj.title}" missing tourContent.reflectionChoices`);
    }
  }

  const handleFinishClick = () => {
    if (isLastStep) {
      handleFinish();
    } else {
      handleStepChange(currentStep + 1);
    }
  };

  return (
    <TourShell
      tourConfig={tourConfig}
      currentStep={currentStep}
      onStepChange={handleStepChange}
      onBack={onBack}
      onFinish={handleFinish}
    >
      <TourStopRenderer
        stop={currentStop}
        stopIndex={currentStep}
        totalStops={tourConfig.stops.length}
        currentAnswer={answers[currentStep] ?? null}
        showFeedback={showFeedback[currentStep] || false}
        onAnswer={(choiceIndex) => handleAnswer(currentStep, choiceIndex)}
        onSaveObject={handleSaveObject}
      />
    </TourShell>
  );
}
