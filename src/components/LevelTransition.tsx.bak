"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect } from "react";

interface LevelTransitionProps {
  fromLevel: string;
  toLevel: string;
  narrative: string;
  onComplete?: () => void;
}

export function LevelTransition({
  fromLevel,
  toLevel,
  narrative,
  onComplete,
}: LevelTransitionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const pathLength = useTransform(scrollYProgress, [0.2, 0.8], [0, 1]);
  const opacity = useTransform(
    scrollYProgress,
    [0.1, 0.2, 0.8, 0.9],
    [0, 1, 1, 0]
  );
  const scale = useTransform(scrollYProgress, [0.4, 0.6], [1, 1.05]);
  const dotProgress = useTransform(scrollYProgress, [0.2, 0.8], [0, 1]);

  // Removed auto-complete - let user control navigation

  // Calculate dot position along the path using transforms
  const dotX = useTransform(dotProgress, (p) => {
    // Simplified path: M 100 200 Q 200 150 300 200 T 500 200 T 700 200
    if (p < 0.33) {
      const t = p / 0.33;
      return 100 + (300 - 100) * t;
    } else if (p < 0.66) {
      const t = (p - 0.33) / 0.33;
      return 300 + (500 - 300) * t;
    } else {
      const t = (p - 0.66) / 0.34;
      return 500 + (700 - 500) * t;
    }
  });

  const dotY = useTransform(dotProgress, (p) => {
    // Simplified path Y coordinates
    if (p < 0.33) {
      const t = p / 0.33;
      return 200 + (150 - 200) * t * (1 - t) + (200 - 150) * t;
    } else {
      return 200;
    }
  });

  return (
    <motion.section
      ref={ref}
      className="relative flex min-h-[100vh] items-center justify-center overflow-hidden bg-gradient-to-br from-zinc-950 via-black to-zinc-950 py-20"
      style={{ opacity }}
    >
      <div className="absolute inset-0 opacity-10">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `radial-gradient(circle at 50% 50%, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        style={{ scale }}
      >
        <svg
          className="h-full w-full max-w-4xl"
          viewBox="0 0 800 400"
          preserveAspectRatio="xMidYMid meet"
        >
          <defs>
            <linearGradient id="transitionGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#fbbf24" />
              <stop offset="50%" stopColor="#06b6d4" />
              <stop offset="100%" stopColor="#a855f7" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Central axis path */}
          <motion.path
            d="M 100 200 Q 200 150 300 200 T 500 200 T 700 200"
            fill="none"
            stroke="url(#transitionGradient)"
            strokeWidth="3"
            strokeLinecap="round"
            style={{ pathLength }}
          />

          {/* Branching paths */}
          <motion.path
            d="M 300 200 L 300 100"
            fill="none"
            stroke="rgba(255,255,255,0.3)"
            strokeWidth="2"
            strokeDasharray="4 4"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          />
          <motion.path
            d="M 500 200 L 500 100"
            fill="none"
            stroke="rgba(255,255,255,0.3)"
            strokeWidth="2"
            strokeDasharray="4 4"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ delay: 0.7, duration: 1 }}
          />
          <motion.path
            d="M 500 200 L 500 300"
            fill="none"
            stroke="rgba(255,255,255,0.3)"
            strokeWidth="2"
            strokeDasharray="4 4"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ delay: 0.9, duration: 1 }}
          />

          {/* Moving dot */}
          <motion.circle
            r="10"
            fill="#06b6d4"
            filter="url(#glow)"
            style={{
              cx: dotX,
              cy: dotY,
            }}
          />
        </svg>
      </motion.div>

      <motion.div
        className="relative z-10 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <div className="mb-4 text-sm font-medium uppercase tracking-wider text-white/60">
          {fromLevel} → {toLevel}
        </div>
        <h2 className="mb-4 text-5xl font-bold tracking-tight">
          {narrative}
        </h2>
        <p className="text-xl text-white/70">
          Moving through the museum
        </p>
      </motion.div>
    </motion.section>
  );
}

