"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const GLOSSARY_TERMS = [
  {
    term: "VO2 Max",
    definition:
      "The maximum rate of oxygen consumption during exercise. It's a key indicator of cardiovascular fitness and aerobic endurance capacity.",
    category: "Physiology",
  },
  {
    term: "Force Plate",
    definition:
      "A device that measures ground reaction forces in three dimensions. Used to analyze how forces are applied during movement, revealing biomechanical patterns.",
    category: "Biomechanics",
  },
  {
    term: "IMU (Inertial Measurement Unit)",
    definition:
      "A sensor that combines accelerometer, gyroscope, and magnetometer to track movement and orientation. Used in wearable devices for real-time motion analysis.",
    category: "Technology",
  },
  {
    term: "Motion Capture",
    definition:
      "Technology that records movement by tracking markers or using computer vision. Creates three-dimensional data that reveals biomechanical patterns invisible to the naked eye.",
    category: "Technology",
  },
  {
    term: "Biomechanics",
    definition:
      "The study of the mechanical laws relating to the movement of living organisms. In performance, it focuses on how the body moves and how movement can be optimized.",
    category: "Science",
  },
  {
    term: "Ground Reaction Force",
    definition:
      "The force exerted by the ground on a body in contact with it. Analyzing these forces reveals how efficiently movement is performed.",
    category: "Biomechanics",
  },
  {
    term: "Plyometrics",
    definition:
      "Exercises that involve rapid stretching and contracting of muscles to increase power. Examples include jumping and bounding movements.",
    category: "Training",
  },
  {
    term: "Periodization",
    definition:
      "The systematic planning of training to optimize performance. Involves varying intensity, volume, and focus over time to prevent overtraining and peak at the right moment.",
    category: "Training",
  },
  {
    term: "Markerless Motion Capture",
    definition:
      "Motion capture technology that doesn't require physical markers on the body. Uses computer vision and machine learning to track movement from video.",
    category: "Technology",
  },
  {
    term: "Haptic Feedback",
    definition:
      "Technology that provides tactile sensations through vibrations or forces. Used in VR training to simulate physical contact and enhance immersion.",
    category: "Technology",
  },
];

const CATEGORIES = ["All", "Technology", "Biomechanics", "Physiology", "Training", "Science"];

export default function GlossaryPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredTerms = GLOSSARY_TERMS.filter((term) => {
    const matchesCategory =
      selectedCategory === "All" || term.category === selectedCategory;
    const matchesSearch =
      term.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
      term.definition.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-black">
      {/* Hero */}
      <section className="border-b border-white/10 bg-gradient-to-b from-black to-zinc-950 py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mx-auto max-w-4xl"
          >
            <h1 className="mb-4 text-4xl font-semibold md:text-5xl">
              Glossary
            </h1>
            <p className="text-lg text-white/70">
              Key terms and concepts in performance science and technology
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="border-b border-white/10 py-8">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="mb-4">
            <input
              type="text"
              placeholder="Search terms..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full rounded-lg border border-white/15 bg-white/5 px-4 py-2 text-white placeholder:text-white/40 focus:border-white/30 focus:outline-none"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`rounded-lg border px-4 py-2 text-sm font-medium transition ${
                  selectedCategory === category
                    ? "border-white/30 bg-white/10 text-white"
                    : "border-white/15 bg-white/5 text-white/70 hover:border-white/25 hover:bg-white/8"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Terms */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-4 md:px-6">
          {filteredTerms.length === 0 ? (
            <div className="rounded-2xl border border-white/15 bg-white/5 p-12 text-center">
              <div className="text-white/60">No terms found</div>
            </div>
          ) : (
            <div className="space-y-4">
              {filteredTerms.map((term, i) => (
                <motion.div
                  key={term.term}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="rounded-xl border border-white/15 bg-white/5 p-6"
                >
                  <div className="mb-2 flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-white">
                      {term.term}
                    </h3>
                    <span className="rounded-full border border-white/15 bg-white/5 px-2 py-1 text-xs text-white/70">
                      {term.category}
                    </span>
                  </div>
                  <p className="leading-relaxed text-white/80">{term.definition}</p>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}








