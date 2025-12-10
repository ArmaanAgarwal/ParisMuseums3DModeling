"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export function ForcePlateInteractive() {
  const [jumpHeight, setJumpHeight] = useState(30);

  // Simulate force curve based on jump height
  const generateForceCurve = (height: number) => {
    const points = [];
    const peakForce = 2.5 + (height / 50) * 1.5; // Higher jump = more force
    for (let i = 0; i <= 100; i++) {
      const x = i;
      let y = 0;
      if (i < 20) {
        // Loading phase
        y = (peakForce * i) / 20;
      } else if (i < 40) {
        // Peak force
        y = peakForce;
      } else if (i < 60) {
        // Unloading phase
        y = peakForce - ((peakForce * (i - 40)) / 20);
      } else {
        // Air phase (no force)
        y = 0;
      }
      points.push({ x, y });
    }
    return points;
  };

  const forceCurve = generateForceCurve(jumpHeight);

  return (
    <div className="space-y-6">
      <div>
        <label className="mb-4 block text-sm font-medium text-white/70">
          Jump Height: {jumpHeight} cm
        </label>
        <input
          type="range"
          min="10"
          max="80"
          value={jumpHeight}
          onChange={(e) => setJumpHeight(Number(e.target.value))}
          className="w-full"
        />
        <div className="mt-2 flex justify-between text-xs text-white/60">
          <span>10 cm</span>
          <span>80 cm</span>
        </div>
      </div>

      <div className="rounded-lg border border-white/10 bg-white/5 p-6">
        <h3 className="mb-4 text-sm font-medium">Ground Reaction Force Curve</h3>
        <div className="relative h-48 w-full">
          <svg viewBox="0 0 100 50" className="h-full w-full">
            {/* Grid lines */}
            {[0, 10, 20, 30, 40, 50].map((y) => (
              <line
                key={y}
                x1="0"
                y1={50 - y}
                x2="100"
                y2={50 - y}
                stroke="rgba(255,255,255,0.1)"
                strokeWidth="0.5"
              />
            ))}
            {/* Force curve */}
            <motion.polyline
              points={forceCurve.map((p) => `${p.x},${50 - p.y * 10}`).join(" ")}
              fill="none"
              stroke="rgb(34, 211, 238)"
              strokeWidth="2"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.5 }}
            />
          </svg>
          <div className="absolute bottom-0 left-0 text-xs text-white/60">
            Time (ms)
          </div>
          <div className="absolute left-0 top-0 text-xs text-white/60">
            Force (x body weight)
          </div>
        </div>
        <div className="mt-4 text-sm text-white/80">
          <p>
            <strong>Peak Force:</strong> {(2.5 + (jumpHeight / 50) * 1.5).toFixed(2)}x body weight
          </p>
          <p className="mt-2">
            <strong>Insight:</strong> Higher jumps require more force generation. The force plate measures this invisible physics, 
            revealing how athletes generate power and how technique affects efficiency.
          </p>
        </div>
      </div>
    </div>
  );
}







