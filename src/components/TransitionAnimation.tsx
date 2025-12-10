"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

interface TransitionAnimationProps {
  onComplete: () => void;
}

export function TransitionAnimation({ onComplete }: TransitionAnimationProps) {
  const [isComplete, setIsComplete] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsComplete(true);
      setTimeout(onComplete, 1000);
    }, 4000); // Total animation time

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-amber-950/20 via-black to-cyan-950/20">
      <div className="absolute inset-0 opacity-20">
        <div className="h-full w-full" style={{
          backgroundImage: `radial-gradient(circle at 50% 50%, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="relative z-10 w-full max-w-6xl px-4">
        {/* SVG Path Animation */}
        <div className="relative h-96 w-full">
          <svg
            viewBox="0 0 800 400"
            className="h-full w-full"
            preserveAspectRatio="xMidYMid meet"
          >
            <defs>
              <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(255,255,255,0.3)" />
                <stop offset="50%" stopColor="rgba(255,255,255,0.6)" />
                <stop offset="100%" stopColor="rgba(147,197,253,0.8)" />
              </linearGradient>
            </defs>

            {/* Central axis path */}
            <motion.path
              d="M 100 200 Q 200 150 300 200 T 500 200 T 700 200"
              fill="none"
              stroke="url(#pathGradient)"
              strokeWidth="3"
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />

            {/* Branching paths to zones */}
            <motion.path
              d="M 300 200 L 300 100"
              fill="none"
              stroke="rgba(255,255,255,0.4)"
              strokeWidth="2"
              strokeDasharray="4 4"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
            />
            <motion.path
              d="M 500 200 L 500 100"
              fill="none"
              stroke="rgba(255,255,255,0.4)"
              strokeWidth="2"
              strokeDasharray="4 4"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ delay: 1.2, duration: 1 }}
            />
            <motion.path
              d="M 500 200 L 500 300"
              fill="none"
              stroke="rgba(255,255,255,0.4)"
              strokeWidth="2"
              strokeDasharray="4 4"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ delay: 1.4, duration: 1 }}
            />

            {/* Moving dot */}
            <motion.circle
              r="8"
              fill="rgba(147,197,253,1)"
              filter="url(#glow)"
              initial={{ cx: 100, cy: 200 }}
              animate={controls}
            />

            <defs>
              <filter id="glow">
                <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
          </svg>
        </div>

        {/* Text overlay */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isComplete ? 1 : 0.6, y: 0 }}
          transition={{ delay: 2 }}
        >
          <h2 className="mb-4 text-3xl font-semibold text-white/90">
            Moving Through the Museum
          </h2>
          <p className="text-lg text-white/70">
            From Origins to Data, Motion & Body
          </p>
        </motion.div>
      </div>
    </section>
  );
}

