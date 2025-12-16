"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface QuizQuestion {
  question: string;
  options: string[];
  correct: number;
  explanation?: string;
}

interface QuizPanelProps {
  title: string;
  questions: QuizQuestion[];
  className?: string;
}

export function QuizPanel({ title, questions, className = "" }: QuizPanelProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState<boolean[]>(new Array(questions.length).fill(false));
  const [userAnswers, setUserAnswers] = useState<(number | null)[]>(new Array(questions.length).fill(null));

  const question = questions[currentQuestion];
  const isCorrect = selectedAnswer === question.correct;
  const isLastQuestion = currentQuestion === questions.length - 1;

  const handleAnswerSelect = (index: number) => {
    if (answered[currentQuestion]) return;
    
    setSelectedAnswer(index);
    setUserAnswers(prev => {
      const newAnswers = [...prev];
      newAnswers[currentQuestion] = index;
      return newAnswers;
    });
    
    if (index === question.correct) {
      setScore(prev => prev + 1);
    }
    setAnswered(prev => {
      const newAnswered = [...prev];
      newAnswered[currentQuestion] = true;
      return newAnswered;
    });
    setShowExplanation(true);
  };

  const handleNext = () => {
    if (isLastQuestion) {
      // Reset quiz
      setCurrentQuestion(0);
      setSelectedAnswer(null);
      setShowExplanation(false);
      setScore(0);
      setAnswered(new Array(questions.length).fill(false));
      setUserAnswers(new Array(questions.length).fill(null));
    } else {
      setCurrentQuestion(prev => prev + 1);
      setSelectedAnswer(userAnswers[currentQuestion + 1]);
      setShowExplanation(answered[currentQuestion + 1]);
    }
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className={`rounded-2xl border border-white/15 bg-white/5 p-8 ${className}`}>
      <div className="mb-6">
        <h3 className="mb-2 text-2xl font-semibold">{title}</h3>
        <div className="mb-4 flex items-center justify-between text-sm text-white/60">
          <span>Question {currentQuestion + 1} of {questions.length}</span>
          <span>Score: {score} / {questions.length}</span>
        </div>
        <div className="h-2 bg-white/10 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-cyan-500"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentQuestion}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
        >
          <div className="mb-6">
            <h4 className="mb-6 text-lg font-medium text-white/90">{question.question}</h4>
            <div className="space-y-3">
              {question.options.map((option, index) => {
                const isSelected = selectedAnswer === index;
                const isCorrectAnswer = index === question.correct;
                const showResult = answered[currentQuestion];

                let buttonClass = "w-full rounded-xl border px-6 py-4 text-left transition ";
                if (showResult) {
                  if (isCorrectAnswer) {
                    buttonClass += "border-green-500/50 bg-green-500/20 text-green-200";
                  } else if (isSelected && !isCorrectAnswer) {
                    buttonClass += "border-red-500/50 bg-red-500/20 text-red-200";
                  } else {
                    buttonClass += "border-white/10 bg-white/5 text-white/50";
                  }
                } else {
                  buttonClass += isSelected
                    ? "border-cyan-500/50 bg-cyan-500/10 text-cyan-300"
                    : "border-white/15 bg-white/5 text-white/70 hover:border-white/30 hover:bg-white/10";
                }

                return (
                  <button
                    key={index}
                    onClick={() => handleAnswerSelect(index)}
                    disabled={answered[currentQuestion]}
                    className={buttonClass}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`flex h-8 w-8 items-center justify-center rounded-full border ${
                        showResult
                          ? isCorrectAnswer
                            ? "border-green-400 bg-green-500/20 text-green-300"
                            : isSelected
                            ? "border-red-400 bg-red-500/20 text-red-300"
                            : "border-white/20 bg-white/5 text-white/40"
                          : isSelected
                          ? "border-cyan-400 bg-cyan-500/20 text-cyan-300"
                          : "border-white/20 bg-white/5 text-white/60"
                      }`}>
                        {String.fromCharCode(65 + index)}
                      </div>
                      <span>{option}</span>
                      {showResult && isCorrectAnswer && (
                        <span className="ml-auto text-green-400">✓</span>
                      )}
                      {showResult && isSelected && !isCorrectAnswer && (
                        <span className="ml-auto text-red-400">✗</span>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {showExplanation && question.explanation && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6 rounded-xl border border-cyan-500/30 bg-cyan-500/10 p-4"
            >
              <div className="mb-2 text-sm font-semibold text-cyan-300">
                {isCorrect ? "Correct!" : "Not quite right"}
              </div>
              <p className="text-sm leading-relaxed text-cyan-200">{question.explanation}</p>
            </motion.div>
          )}

          <div className="flex justify-end">
            <button
              onClick={handleNext}
              disabled={!answered[currentQuestion]}
              className="rounded-xl border border-cyan-500/30 bg-cyan-500/20 px-6 py-3 font-medium text-white transition disabled:opacity-30 disabled:cursor-not-allowed hover:bg-cyan-500/30"
            >
              {isLastQuestion ? "Restart Quiz" : "Next Question →"}
            </button>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}


