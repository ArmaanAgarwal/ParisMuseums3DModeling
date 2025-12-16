"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface MapPoint {
  time: number;
  lat: number;
  lng: number;
  pace: number;
  elevation: number;
  heartRate?: number;
}

interface MapPlaybackProps {
  title: string;
  description: string;
  route: MapPoint[];
  className?: string;
}

export function MapPlayback({ title, description, route, className = "" }: MapPlaybackProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedMetric, setSelectedMetric] = useState<"pace" | "elevation" | "heartRate">("pace");

  useEffect(() => {
    if (isPlaying && currentIndex < route.length - 1) {
      const timer = setTimeout(() => {
        setCurrentIndex(currentIndex + 1);
      }, 200);
      return () => clearTimeout(timer);
    } else if (currentIndex >= route.length - 1) {
      setIsPlaying(false);
    }
  }, [isPlaying, currentIndex, route.length]);

  const currentPoint = route[currentIndex];
  const progress = ((currentIndex + 1) / route.length) * 100;

  const handlePlay = () => {
    setIsPlaying(true);
    if (currentIndex >= route.length - 1) {
      setCurrentIndex(0);
    }
  };

  const handleReset = () => {
    setIsPlaying(false);
    setCurrentIndex(0);
  };

  const getMetricValue = () => {
    switch (selectedMetric) {
      case "pace":
        return `${currentPoint.pace.toFixed(1)} min/km`;
      case "elevation":
        return `${currentPoint.elevation}m`;
      case "heartRate":
        return currentPoint.heartRate ? `${currentPoint.heartRate} bpm` : "N/A";
    }
  };

  return (
    <div className={`rounded-2xl border border-white/15 bg-white/5 p-8 ${className}`}>
      <h3 className="mb-4 text-2xl font-semibold">{title}</h3>
      <p className="mb-6 text-white/80 leading-relaxed">{description}</p>

      <div className="space-y-6">
        {/* Map visualization */}
        <div className="rounded-xl border border-white/10 bg-white/5 p-6">
          <div className="relative h-64 overflow-hidden rounded-lg bg-gradient-to-br from-zinc-900 to-zinc-800">
            {/* Route line */}
            <svg className="absolute inset-0 h-full w-full">
              <polyline
                points={route.slice(0, currentIndex + 1).map((p, i) => `${(i / route.length) * 100}%,${50 + (p.elevation / 100) * 20}%`).join(" ")}
                fill="none"
                stroke="#06b6d4"
                strokeWidth="3"
              />
              {/* Current position */}
              <circle
                cx={`${(currentIndex / route.length) * 100}%`}
                cy={`${50 + (currentPoint.elevation / 100) * 20}%`}
                r="8"
                fill="#06b6d4"
                className="drop-shadow-lg"
              />
            </svg>
            <div className="absolute bottom-4 left-4 right-4">
              <div className="rounded-lg border border-white/20 bg-black/50 p-3 backdrop-blur-sm">
                <div className="mb-2 flex items-center justify-between text-sm">
                  <span className="text-white/70">Distance</span>
                  <span className="font-semibold text-white">
                    {(currentIndex * 0.1).toFixed(1)} km
                  </span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-white/70">Time</span>
                  <span className="font-semibold text-white">
                    {Math.floor((currentIndex * 0.1) / currentPoint.pace)}:{String(Math.floor(((currentIndex * 0.1) % currentPoint.pace) * 60)).padStart(2, "0")}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <button
              onClick={isPlaying ? () => setIsPlaying(false) : handlePlay}
              className="rounded-lg border border-cyan-500/50 bg-cyan-500/20 px-6 py-2 font-semibold text-white transition hover:bg-cyan-500/30"
            >
              {isPlaying ? "Pause" : "Play"}
            </button>
            <button
              onClick={handleReset}
              className="rounded-lg border border-white/20 bg-white/5 px-6 py-2 text-sm font-medium text-white transition hover:bg-white/10"
            >
              Reset
            </button>
          </div>

          {/* Progress bar */}
          <div className="h-2 overflow-hidden rounded-full bg-white/10">
            <motion.div
              className="h-full bg-cyan-500"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.1 }}
            />
          </div>

          {/* Metric selector */}
          <div className="flex gap-2">
            {(["pace", "elevation", "heartRate"] as const).map((metric) => (
              <button
                key={metric}
                onClick={() => setSelectedMetric(metric)}
                className={`rounded-lg border px-4 py-2 text-sm font-medium transition ${
                  selectedMetric === metric
                    ? "border-cyan-500/50 bg-cyan-500/20 text-cyan-300"
                    : "border-white/15 bg-white/5 text-white/70 hover:border-white/30 hover:bg-white/10"
                }`}
              >
                {metric === "pace" ? "Pace" : metric === "elevation" ? "Elevation" : "Heart Rate"}
              </button>
            ))}
          </div>

          {/* Current metric display */}
          <div className="rounded-lg border border-white/10 bg-white/5 p-4">
            <div className="mb-2 text-sm text-white/60">Current {selectedMetric === "pace" ? "Pace" : selectedMetric === "elevation" ? "Elevation" : "Heart Rate"}</div>
            <div className="text-2xl font-bold text-white">{getMetricValue()}</div>
          </div>
        </div>

        <div className="rounded-lg border border-white/10 bg-white/5 p-4">
          <p className="text-sm leading-relaxed text-white/80">
            The GPS watch measures location, pace, and distance. It turns training into a trackable lifestyle, making every run data.
          </p>
        </div>
      </div>
    </div>
  );
}


