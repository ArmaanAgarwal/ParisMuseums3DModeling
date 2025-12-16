"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export function ForcePlateJump() {
  const [weight, setWeight] = useState(70);
  const [jumpHeight, setJumpHeight] = useState(0.5);

  // Simple physics: F = ma, work = mgh, power = work/time
  // Assuming jump time of ~0.3 seconds
  const jumpTime = 0.3;
  const gravity = 9.81;
  const takeoffVelocity = Math.sqrt(2 * gravity * jumpHeight);
  const averageForce = (weight * takeoffVelocity) / jumpTime;
  const peakForce = averageForce * 1.5; // Peak is typically 1.5x average
  const power = (weight * gravity * jumpHeight) / jumpTime;

  const getInterpretation = () => {
    if (jumpHeight < 0.3) {
      return {
        level: "Beginner",
        color: "blue",
        text: "This jump height suggests developing explosive power. Focus on plyometric training and technique.",
      };
    } else if (jumpHeight < 0.5) {
      return {
        level: "Intermediate",
        color: "green",
        text: "Good jump height! This indicates solid lower body strength and power. Continue building on this foundation.",
      };
    } else if (jumpHeight < 0.7) {
      return {
        level: "Advanced",
        color: "amber",
        text: "Excellent jump height! This demonstrates strong explosive power and efficient movement mechanics.",
      };
    } else {
      return {
        level: "Elite",
        color: "red",
        text: "Exceptional jump height! This level of performance requires elite-level strength, power, and technique.",
      };
    }
  };

  const interpretation = getInterpretation();

  return (
    <div className="rounded-2xl border border-white/15 bg-white/5 p-8">
      <h3 className="mb-6 text-xl font-semibold">Force Plate Jump Station</h3>
      <p className="mb-6 text-sm text-white/70">
        Enter your measurements to see how force plates analyze jump performance
      </p>

      <div className="space-y-6">
        {/* Inputs */}
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm font-medium text-white/90">
              Body Weight (kg)
            </label>
            <input
              type="number"
              min="30"
              max="150"
              value={weight}
              onChange={(e) => setWeight(Number(e.target.value))}
              className="w-full rounded-lg border border-white/15 bg-white/5 px-4 py-2 text-white placeholder:text-white/40"
            />
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium text-white/90">
              Jump Height (m)
            </label>
            <input
              type="number"
              min="0.1"
              max="1.5"
              step="0.05"
              value={jumpHeight}
              onChange={(e) => setJumpHeight(Number(e.target.value))}
              className="w-full rounded-lg border border-white/15 bg-white/5 px-4 py-2 text-white placeholder:text-white/40"
            />
          </div>
        </div>

        {/* Results */}
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-xl border border-white/10 bg-white/5 p-4">
            <div className="mb-1 text-xs text-white/60">Peak Force</div>
            <div className="text-2xl font-semibold text-white">
              {peakForce.toFixed(0)} N
            </div>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-4">
            <div className="mb-1 text-xs text-white/60">Power Output</div>
            <div className="text-2xl font-semibold text-white">
              {power.toFixed(0)} W
            </div>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-4">
            <div className="mb-1 text-xs text-white/60">Takeoff Velocity</div>
            <div className="text-2xl font-semibold text-white">
              {takeoffVelocity.toFixed(1)} m/s
            </div>
          </div>
        </div>

        {/* Interpretation */}
        <motion.div
          key={jumpHeight}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className={`rounded-xl border p-4 ${
            interpretation.color === "blue"
              ? "border-blue-500/20 bg-blue-500/10"
              : interpretation.color === "green"
              ? "border-green-500/20 bg-green-500/10"
              : interpretation.color === "amber"
              ? "border-amber-500/20 bg-amber-500/10"
              : "border-red-500/20 bg-red-500/10"
          }`}
        >
          <div className="mb-2 text-xs font-medium uppercase tracking-wider text-white/70">
            Performance Level: {interpretation.level}
          </div>
          <p className="text-sm leading-relaxed text-white/90">
            {interpretation.text}
          </p>
        </motion.div>

        {/* Disclaimer */}
        <div className="rounded-lg border border-white/10 bg-white/5 p-3 text-xs text-white/50">
          <strong>Note:</strong> This is a simplified calculation for educational
          purposes. Real force plate analysis includes many additional factors and
          should be interpreted by qualified professionals.
        </div>
      </div>
    </div>
  );
}








