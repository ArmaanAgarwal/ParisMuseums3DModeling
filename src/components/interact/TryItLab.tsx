"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

type TryItType = "reaction-time" | "stride-frequency" | "heart-rate-zone" | "force-meter";

interface TryItLabProps {
  type: TryItType;
  title: string;
  className?: string;
}

export function TryItLab({ type, title, className = "" }: TryItLabProps) {
  const [result, setResult] = useState<number | null>(null);
  const [isActive, setIsActive] = useState(false);
  const [startTime, setStartTime] = useState<number | null>(null);
  const [clicks, setClicks] = useState(0);
  const [heartRate, setHeartRate] = useState(70);
  const [force, setForce] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const reset = () => {
    setResult(null);
    setIsActive(false);
    setStartTime(null);
    setClicks(0);
    setHeartRate(70);
    setForce(0);
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };

  const handleReactionTime = () => {
    if (!isActive) {
      setIsActive(true);
      const delay = Math.random() * 3000 + 1000; // 1-4 seconds
      setTimeout(() => {
        setStartTime(Date.now());
      }, delay);
    } else if (startTime) {
      const reactionTime = Date.now() - startTime;
      setResult(reactionTime);
      setIsActive(false);
    }
  };

  const handleStrideFrequency = () => {
    if (!isActive) {
      setIsActive(true);
      setClicks(0);
      setStartTime(Date.now());
      timerRef.current = setInterval(() => {
        setClicks(prev => prev + 1);
      }, 100);
    } else {
      if (timerRef.current) clearInterval(timerRef.current);
      const duration = (Date.now() - (startTime || 0)) / 1000;
      const frequency = clicks / duration;
      setResult(Math.round(frequency * 10) / 10);
      setIsActive(false);
    }
  };

  const handleHeartRateZone = () => {
    if (!isActive) {
      setIsActive(true);
      timerRef.current = setInterval(() => {
        setHeartRate(prev => {
          const change = Math.random() * 6 - 3; // -3 to +3
          return Math.max(60, Math.min(180, prev + change));
        });
      }, 200);
    } else {
      if (timerRef.current) clearInterval(timerRef.current);
      setIsActive(false);
    }
  };

  const handleForceMeter = () => {
    if (!isActive) {
      setIsActive(true);
      timerRef.current = setInterval(() => {
        setForce(prev => {
          if (prev < 100) {
            return prev + Math.random() * 5;
          }
          return prev;
        });
      }, 50);
    } else {
      if (timerRef.current) clearInterval(timerRef.current);
      setResult(Math.round(force));
      setIsActive(false);
    }
  };

  const handleAction = () => {
    switch (type) {
      case "reaction-time":
        handleReactionTime();
        break;
      case "stride-frequency":
        handleStrideFrequency();
        break;
      case "heart-rate-zone":
        handleHeartRateZone();
        break;
      case "force-meter":
        handleForceMeter();
        break;
    }
  };

  useEffect(() => {
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const getExplanation = () => {
    if (result === null) return null;
    
    switch (type) {
      case "reaction-time":
        if (result < 200) return "Excellent reaction time. Elite athletes typically react in 150-200 milliseconds.";
        if (result < 300) return "Good reaction time. Average human reaction is around 250 milliseconds.";
        return "Slower reaction time. Practice and training can improve reaction speed.";
      
      case "stride-frequency":
        if (result > 3.5) return "High stride frequency. Elite runners often maintain 3-4 strides per second.";
        if (result > 2.5) return "Moderate stride frequency. Most runners maintain 2-3 strides per second.";
        return "Lower stride frequency. Increasing cadence can improve running efficiency.";
      
      case "heart-rate-zone":
        if (heartRate < 100) return "Resting heart rate zone. Good for recovery and warm-up.";
        if (heartRate < 140) return "Aerobic zone. Ideal for building endurance and fat burning.";
        if (heartRate < 170) return "Anaerobic zone. High intensity training improves speed and power.";
        return "Maximum effort zone. Used for short bursts and peak performance training.";
      
      case "force-meter":
        if (result > 80) return "High force output. Elite athletes can generate forces 3-5 times body weight.";
        if (result > 50) return "Moderate force. Training can improve force generation through strength and technique.";
        return "Lower force. Building strength and improving technique can increase force output.";
      
      default:
        return null;
    }
  };

  const getButtonLabel = () => {
    if (!isActive) {
      switch (type) {
        case "reaction-time":
          return "Wait for green, then click";
        case "stride-frequency":
          return "Start tapping (simulate running)";
        case "heart-rate-zone":
          return "Start heart rate monitor";
        case "force-meter":
          return "Push harder (hold button)";
        default:
          return "Start";
      }
    } else {
      switch (type) {
        case "reaction-time":
          return startTime ? "Click now!" : "Wait...";
        case "stride-frequency":
          return "Stop";
        case "heart-rate-zone":
          return "Stop monitoring";
        case "force-meter":
          return "Release";
        default:
          return "Stop";
      }
    }
  };

  return (
    <div className={`rounded-2xl border border-white/15 bg-white/5 p-8 ${className}`}>
      <h3 className="mb-6 text-2xl font-semibold">{title}</h3>
      
      {/* Display */}
      <div className="mb-6 text-center">
        {type === "reaction-time" && (
          <div className={`mb-4 h-32 rounded-xl flex items-center justify-center text-4xl font-bold ${
            isActive && startTime ? "bg-green-500/20 text-green-400" : "bg-red-500/20 text-red-400"
          }`}>
            {isActive && startTime ? "CLICK!" : "Wait..."}
          </div>
        )}
        
        {type === "stride-frequency" && (
          <div className="mb-4 text-6xl font-bold text-cyan-400">
            {clicks}
          </div>
        )}
        
        {type === "heart-rate-zone" && (
          <div className="mb-4">
            <div className="text-6xl font-bold text-cyan-400">{Math.round(heartRate)}</div>
            <div className="mt-2 text-sm text-white/60">beats per minute</div>
          </div>
        )}
        
        {type === "force-meter" && (
          <div className="mb-4">
            <div className="mb-2 h-8 rounded-full bg-white/10 overflow-hidden">
              <motion.div
                className="h-full bg-cyan-500"
                initial={{ width: 0 }}
                animate={{ width: `${force}%` }}
                transition={{ duration: 0.1 }}
              />
            </div>
            <div className="text-4xl font-bold text-cyan-400">{Math.round(force)}%</div>
          </div>
        )}
        
        {result !== null && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mt-4 rounded-xl border border-cyan-500/30 bg-cyan-500/10 p-4"
          >
            <div className="text-2xl font-bold text-cyan-300">
              {type === "reaction-time" && `${result} ms`}
              {type === "stride-frequency" && `${result} strides/sec`}
              {type === "force-meter" && `${result}% max force`}
            </div>
            {getExplanation() && (
              <p className="mt-2 text-sm text-cyan-200">{getExplanation()}</p>
            )}
          </motion.div>
        )}
      </div>

      {/* Controls */}
      <div className="flex gap-4">
        <button
          onClick={handleAction}
          className={`flex-1 rounded-xl border px-6 py-4 font-medium transition ${
            isActive
              ? "border-red-500/50 bg-red-500/10 text-red-300 hover:bg-red-500/20"
              : "border-cyan-500/50 bg-cyan-500/10 text-cyan-300 hover:bg-cyan-500/20"
          }`}
        >
          {getButtonLabel()}
        </button>
        <button
          onClick={reset}
          className="rounded-xl border border-white/20 bg-white/5 px-6 py-4 font-medium text-white/70 transition hover:bg-white/10"
        >
          Reset
        </button>
      </div>
    </div>
  );
}







