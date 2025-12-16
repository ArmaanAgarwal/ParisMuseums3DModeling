"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const questions = [
  {
    question: "Which object represents the first major shift from qualitative to quantitative performance measurement?",
    options: [
      "Ancient Greek Running Sandals",
      "Heuer Stopwatch, 1916",
      "Electronic Timing System, 1968",
      "Motion Capture Rig, 2010",
    ],
    correct: 1,
    explanation: "The first stopwatch made precise timing accessible, transforming 'fast' from subjective observation to quantifiable data.",
    relatedObject: "first-stopwatch",
  },
  {
    question: "What technology made biomechanical analysis accessible outside of laboratories?",
    options: [
      "Force plates",
      "Wearable IMU sensors",
      "Motion capture systems",
      "Heart rate monitors",
    ],
    correct: 1,
    explanation: "Wearable IMU sensors brought biomechanical measurement from the lab to the athlete's body, making advanced analysis accessible anywhere.",
    relatedObject: "biomechanics-sensor",
  },
];

export function MeasurementQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);

  const q = questions[currentQuestion];

  const handleAnswer = (index: number) => {
    setSelectedAnswer(index);
    setShowExplanation(true);
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    }
  };

  return (
    <div className="rounded-xl border border-white/15 bg-white/5 p-8">
      <h3 className="mb-6 text-xl font-semibold">Spot the Measurement Revolution</h3>
      <p className="mb-6 text-sm text-white/70">
        Test your understanding of performance measurement milestones
      </p>

      <div className="mb-4 text-sm text-white/60">
        Question {currentQuestion + 1} of {questions.length}
      </div>

      <div className="mb-6">
        <h4 className="mb-4 text-lg font-medium">{q.question}</h4>
        <div className="space-y-3">
          {q.options.map((option, i) => (
            <button
              key={i}
              onClick={() => handleAnswer(i)}
              disabled={showExplanation}
              className={`block w-full rounded-lg border p-4 text-left transition ${
                showExplanation
                  ? i === q.correct
                    ? "border-emerald-500/50 bg-emerald-500/10"
                    : i === selectedAnswer
                    ? "border-red-500/50 bg-red-500/10"
                    : "border-white/10 bg-white/5"
                  : "border-white/10 bg-white/5 hover:border-white/20 hover:bg-white/10"
              }`}
            >
              {option}
              {showExplanation && i === q.correct && (
                <span className="ml-2 text-emerald-400">✓</span>
              )}
              {showExplanation && i === selectedAnswer && i !== q.correct && (
                <span className="ml-2 text-red-400">✗</span>
              )}
            </button>
          ))}
        </div>
      </div>

      {showExplanation && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 rounded-lg border border-cyan-500/30 bg-cyan-500/10 p-4"
        >
          <p className="mb-3 text-sm font-medium text-cyan-300">Explanation:</p>
          <p className="mb-3 text-sm text-white/90">{q.explanation}</p>
          <a
            href={`/objects/${q.relatedObject}`}
            className="text-sm text-cyan-400 hover:text-cyan-300 transition"
          >
            View related object →
          </a>
        </motion.div>
      )}

      {showExplanation && currentQuestion < questions.length - 1 && (
        <button
          onClick={nextQuestion}
          className="w-full rounded-lg border border-white/20 bg-white/10 px-6 py-3 font-medium transition hover:bg-white/15"
        >
          Next Question →
        </button>
      )}
    </div>
  );
}








