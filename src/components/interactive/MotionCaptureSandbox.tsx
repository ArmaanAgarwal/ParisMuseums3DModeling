"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export function MotionCaptureSandbox() {
  const [noise, setNoise] = useState(0.1);
  const [samplingRate, setSamplingRate] = useState(200);
  const [filtering, setFiltering] = useState(true);

  const getExplanation = () => {
    let explanation = "Motion capture systems work by tracking markers on the body. ";
    
    if (noise > 0.3) {
      explanation += "High noise levels make it difficult to distinguish actual movement from measurement error. ";
    } else if (noise < 0.1) {
      explanation += "Low noise provides clean, reliable data. ";
    }
    
    if (samplingRate < 100) {
      explanation += "Low sampling rates miss rapid movements and create choppy data. ";
    } else if (samplingRate > 300) {
      explanation += "High sampling rates capture every detail but generate massive datasets. ";
    } else {
      explanation += "Moderate sampling rates balance detail with data size. ";
    }
    
    if (filtering) {
      explanation += "Filtering smooths the data, removing artifacts and making patterns clearer. ";
    } else {
      explanation += "Without filtering, raw data includes measurement errors and noise. ";
    }
    
    return explanation;
  };

  return (
    <div className="rounded-2xl border border-white/15 bg-white/5 p-8">
      <h3 className="mb-6 text-xl font-semibold">Motion Capture Sandbox</h3>
      <p className="mb-6 text-sm text-white/70">
        Adjust parameters to see how they affect motion capture data quality
      </p>

      <div className="space-y-6">
        {/* Noise Control */}
        <div>
          <div className="mb-2 flex items-center justify-between">
            <label className="text-sm font-medium text-white/90">Noise Level</label>
            <span className="text-sm text-white/60">{(noise * 100).toFixed(0)}%</span>
          </div>
          <input
            type="range"
            min="0"
            max="0.5"
            step="0.05"
            value={noise}
            onChange={(e) => setNoise(Number(e.target.value))}
            className="w-full"
          />
          <div className="mt-1 flex justify-between text-xs text-white/50">
            <span>Clean</span>
            <span>Noisy</span>
          </div>
        </div>

        {/* Sampling Rate */}
        <div>
          <div className="mb-2 flex items-center justify-between">
            <label className="text-sm font-medium text-white/90">Sampling Rate</label>
            <span className="text-sm text-white/60">{samplingRate} Hz</span>
          </div>
          <input
            type="range"
            min="50"
            max="500"
            step="50"
            value={samplingRate}
            onChange={(e) => setSamplingRate(Number(e.target.value))}
            className="w-full"
          />
          <div className="mt-1 flex justify-between text-xs text-white/50">
            <span>Low (50 Hz)</span>
            <span>High (500 Hz)</span>
          </div>
        </div>

        {/* Filtering Toggle */}
        <div>
          <label className="flex items-center gap-3">
            <input
              type="checkbox"
              checked={filtering}
              onChange={(e) => setFiltering(e.target.checked)}
              className="h-4 w-4 rounded border-white/20 bg-white/5"
            />
            <span className="text-sm font-medium text-white/90">
              Enable Filtering
            </span>
          </label>
        </div>

        {/* Explanation */}
        <motion.div
          key={`${noise}-${samplingRate}-${filtering}`}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-xl border border-cyan-500/20 bg-cyan-500/10 p-4"
        >
          <div className="mb-2 text-xs font-medium text-cyan-200/70">
            How These Settings Affect Data
          </div>
          <p className="text-sm leading-relaxed text-cyan-200/90">
            {getExplanation()}
          </p>
        </motion.div>

        {/* Visual Representation */}
        <div className="rounded-xl border border-white/10 bg-white/5 p-6">
          <div className="mb-3 text-xs font-medium text-white/60">
            Data Visualization
          </div>
          <div className="h-32 w-full overflow-hidden rounded-lg bg-black/50">
            <svg viewBox="0 0 400 100" className="h-full w-full">
              <defs>
                <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="rgba(147,197,253,0.8)" />
                  <stop offset="100%" stopColor="rgba(147,197,253,0.4)" />
                </linearGradient>
              </defs>
              <motion.path
                d={`M 0,50 ${Array.from({ length: 40 }, (_, i) => {
                  const x = (i / 40) * 400;
                  const baseY = 50;
                  const wave = Math.sin((i / 40) * Math.PI * 4) * 20;
                  const noiseY = (Math.random() - 0.5) * noise * 40;
                  const y = baseY + wave + noiseY;
                  return `L ${x},${y}`;
                }).join(" ")}`}
                fill="none"
                stroke="url(#waveGradient)"
                strokeWidth="2"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1 }}
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}







