"use client";

import { useState } from "react";
import { motion } from "framer-motion";

interface ForcePoint {
  time: number;
  force: number;
  label: string;
  description: string;
}

interface ForceCurveExplorerProps {
  title: string;
  description: string;
  points: ForcePoint[];
  className?: string;
}

export function ForceCurveExplorer({ title, description, points, className = "" }: ForceCurveExplorerProps) {
  const [hoveredPoint, setHoveredPoint] = useState<number | null>(null);

  const maxForce = Math.max(...points.map(p => p.force));
  const maxTime = Math.max(...points.map(p => p.time));

  return (
    <div className={`rounded-2xl border border-white/15 bg-white/5 p-8 ${className}`}>
      <h3 className="mb-4 text-2xl font-semibold">{title}</h3>
      <p className="mb-6 text-white/80 leading-relaxed">{description}</p>

      <div className="space-y-6">
        {/* Force curve visualization */}
        <div className="rounded-xl border border-white/10 bg-white/5 p-6">
          <div className="mb-4 text-center text-sm text-white/60">Force Over Time</div>
          <div className="relative h-64 rounded-lg bg-gradient-to-br from-zinc-900 to-zinc-800 p-4">
            <svg className="h-full w-full" viewBox="0 0 400 200">
              {/* Grid lines */}
              {[0, 25, 50, 75, 100].map((y) => (
                <line
                  key={y}
                  x1="0"
                  y1={y * 2}
                  x2="400"
                  y2={y * 2}
                  stroke="rgba(255,255,255,0.1)"
                  strokeWidth="1"
                />
              ))}
              {/* Force curve */}
              <polyline
                points={points.map((p, i) => `${(i / (points.length - 1)) * 400},${200 - (p.force / maxForce) * 200}`).join(" ")}
                fill="none"
                stroke="#06b6d4"
                strokeWidth="3"
              />
              {/* Interactive points */}
              {points.map((point, index) => {
                const x = (index / (points.length - 1)) * 400;
                const y = 200 - (point.force / maxForce) * 200;
                const isHovered = hoveredPoint === index;
                return (
                  <g key={index}>
                    <circle
                      cx={x}
                      cy={y}
                      r={isHovered ? 8 : 5}
                      fill={isHovered ? "#06b6d4" : "#06b6d4"}
                      opacity={isHovered ? 1 : 0.7}
                      onMouseEnter={() => setHoveredPoint(index)}
                      onMouseLeave={() => setHoveredPoint(null)}
                      className="cursor-pointer"
                    />
                    {isHovered && (
                      <text
                        x={x}
                        y={y - 15}
                        textAnchor="middle"
                        fill="#06b6d4"
                        fontSize="12"
                        fontWeight="bold"
                      >
                        {point.label}
                      </text>
                    )}
                  </g>
                );
              })}
            </svg>
          </div>
        </div>

        {/* Point information */}
        {hoveredPoint !== null && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-lg border border-cyan-500/30 bg-cyan-500/10 p-4"
          >
            <div className="mb-2 text-lg font-semibold text-cyan-300">
              {points[hoveredPoint].label}
            </div>
            <div className="mb-2 text-sm text-white/70">
              Time: {points[hoveredPoint].time.toFixed(2)}s | Force: {points[hoveredPoint].force.toFixed(1)}N
            </div>
            <p className="text-sm leading-relaxed text-cyan-200">
              {points[hoveredPoint].description}
            </p>
          </motion.div>
        )}

        <div className="rounded-lg border border-white/10 bg-white/5 p-4">
          <p className="text-sm leading-relaxed text-white/80">
            Hover over points on the curve to learn what each part means. This shows how performance becomes a set of forces, not just a result time.
          </p>
        </div>
      </div>
    </div>
  );
}
