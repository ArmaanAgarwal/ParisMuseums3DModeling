"use client";

import { useState } from "react";
import { motion } from "framer-motion";

interface FeedbackMetric {
  metric: string;
  value: number;
  target: number;
  feedback: string;
  reward: "positive" | "neutral" | "negative";
}

interface AIFeedbackScreenProps {
  title: string;
  description: string;
  scenarios: Array<{
    name: string;
    metrics: FeedbackMetric[];
    explanation: string;
  }>;
  className?: string;
}

export function AIFeedbackScreen({ title, description, scenarios, className = "" }: AIFeedbackScreenProps) {
  const [selectedScenario, setSelectedScenario] = useState<number>(0);

  const current = scenarios[selectedScenario];

  return (
    <div className={`rounded-2xl border border-white/15 bg-white/5 p-8 ${className}`}>
      <h3 className="mb-4 text-2xl font-semibold">{title}</h3>
      <p className="mb-6 text-white/80 leading-relaxed">{description}</p>

      <div className="mb-6 space-y-2">
        {scenarios.map((scenario, index) => (
          <button
            key={index}
            onClick={() => setSelectedScenario(index)}
            className={`w-full rounded-lg border p-3 text-left transition ${
              selectedScenario === index
                ? "border-cyan-500/50 bg-cyan-500/10 text-cyan-300"
                : "border-white/10 bg-white/5 text-white/70 hover:border-white/20 hover:bg-white/10"
            }`}
          >
            {scenario.name}
          </button>
        ))}
      </div>

      <motion.div
        key={selectedScenario}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-4"
      >
        <div className="rounded-xl border border-white/10 bg-white/5 p-6">
          <div className="mb-4 text-lg font-semibold text-white">AI Coach Feedback</div>
          <div className="space-y-3">
            {current.metrics.map((metric, index) => {
              const isPositive = metric.reward === "positive";
              const isNegative = metric.reward === "negative";
              return (
                <div
                  key={index}
                  className={`rounded-lg border p-4 ${
                    isPositive
                      ? "border-green-500/30 bg-green-500/10"
                      : isNegative
                      ? "border-red-500/30 bg-red-500/10"
                      : "border-white/10 bg-white/5"
                  }`}
                >
                  <div className="mb-2 flex items-center justify-between">
                    <div className="font-semibold text-white">{metric.metric}</div>
                    <div className="text-sm text-white/70">
                      {metric.value} / {metric.target}
                    </div>
                  </div>
                  <div className="mb-2 h-2 overflow-hidden rounded-full bg-white/10">
                    <div
                      className={`h-full ${
                        isPositive ? "bg-green-500" : isNegative ? "bg-red-500" : "bg-white/30"
                      }`}
                      style={{ width: `${Math.min((metric.value / metric.target) * 100, 100)}%` }}
                    />
                  </div>
                  <p className="text-sm text-white/80">{metric.feedback}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="rounded-lg border border-cyan-500/30 bg-cyan-500/10 p-4">
          <p className="text-sm leading-relaxed text-cyan-200">{current.explanation}</p>
        </div>
      </motion.div>

      <div className="mt-6 rounded-lg border border-white/10 bg-white/5 p-4">
        <p className="text-sm leading-relaxed text-white/80">
          AI coaching changes who gets guidance and how authority works. The system rewards what it's programmed to value. What does this mean for human expertise?
        </p>
      </div>
    </div>
  );
}

