"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

interface TimingComparisonProps {
  title: string;
  description: string;
  className?: string;
}

export function TimingComparison({ title, description, className = "" }: TimingComparisonProps) {
  const [isTiming, setIsTiming] = useState(false);
  const [handTime, setHandTime] = useState<number | null>(null);
  const [recordedTime, setRecordedTime] = useState<number | null>(null);
  const [startTime, setStartTime] = useState<number | null>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const handleStart = () => {
    setIsTiming(true);
    setHandTime(null);
    setRecordedTime(null);
    const start = Date.now();
    setStartTime(start);
    
    // Simulate a random event time between 9.5 and 10.5 seconds
    const eventTime = 9500 + Math.random() * 1000;
    setRecordedTime(eventTime);

    // Stop timing after event
    timerRef.current = setTimeout(() => {
      setIsTiming(false);
    }, eventTime);
  };

  const handleStop = () => {
    if (startTime && !handTime) {
      const elapsed = Date.now() - startTime;
      setHandTime(elapsed);
      setIsTiming(false);
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    }
  };

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);

  const difference = handTime && recordedTime ? Math.abs(handTime - recordedTime) : null;
  const accuracy = difference && recordedTime ? ((1 - difference / recordedTime) * 100).toFixed(1) : null;

  return (
    <div className={`rounded-2xl border border-white/15 bg-white/5 p-8 ${className}`}>
      <h3 className="mb-4 text-2xl font-semibold">{title}</h3>
      <p className="mb-6 text-white/80 leading-relaxed">{description}</p>

      <div className="space-y-6">
        <div className="rounded-xl border border-white/10 bg-white/5 p-6">
          <div className="mb-4 text-center">
            {!isTiming && !handTime && (
              <button
                onClick={handleStart}
                className="rounded-xl border border-cyan-500/50 bg-cyan-500/20 px-8 py-4 font-semibold text-white transition hover:bg-cyan-500/30"
              >
                Start Timing
              </button>
            )}
            {isTiming && (
              <div className="space-y-4">
                <div className="text-4xl font-bold text-cyan-400">Timing...</div>
                <button
                  onClick={handleStop}
                  className="rounded-xl border border-red-500/50 bg-red-500/20 px-8 py-4 font-semibold text-white transition hover:bg-red-500/30"
                >
                  Stop
                </button>
              </div>
            )}
          </div>

          {handTime && recordedTime && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-4"
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                  <div className="mb-2 text-sm text-white/60">Your Time</div>
                  <div className="text-2xl font-bold text-white">{(handTime / 1000).toFixed(2)}s</div>
                </div>
                <div className="rounded-lg border border-cyan-500/30 bg-cyan-500/10 p-4">
                  <div className="mb-2 text-sm text-cyan-300">Recorded Time</div>
                  <div className="text-2xl font-bold text-cyan-400">{(recordedTime / 1000).toFixed(2)}s</div>
                </div>
              </div>
              {difference && (
                <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                  <div className="mb-2 text-sm text-white/60">Difference</div>
                  <div className="text-xl font-bold text-white">{(difference / 1000).toFixed(2)}s</div>
                  {accuracy && (
                    <div className="mt-2 text-sm text-white/70">Accuracy: {accuracy}%</div>
                  )}
                </div>
              )}
              <div className="rounded-lg border border-amber-500/30 bg-amber-500/10 p-4">
                <p className="text-sm leading-relaxed text-amber-200">
                  This is why mechanical timing became essential. Human judgment varies, but precise measurement creates official facts.
                </p>
              </div>
              <button
                onClick={handleStart}
                className="w-full rounded-xl border border-white/20 bg-white/5 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/10"
              >
                Try Again
              </button>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}
