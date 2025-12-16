"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export function MotionCaptureInteractive() {
  const [selectedJoints, setSelectedJoints] = useState<Set<string>>(new Set(["shoulder", "elbow", "wrist"]));

  const joints = [
    { id: "shoulder", label: "Shoulder", description: "Tracks upper arm movement" },
    { id: "elbow", label: "Elbow", description: "Measures arm flexion and extension" },
    { id: "wrist", label: "Wrist", description: "Captures hand position and rotation" },
    { id: "hip", label: "Hip", description: "Tracks core movement and stability" },
    { id: "knee", label: "Knee", description: "Measures leg flexion and extension" },
    { id: "ankle", label: "Ankle", description: "Captures foot position and ground contact" },
  ];

  const toggleJoint = (jointId: string) => {
    const newSet = new Set(selectedJoints);
    if (newSet.has(jointId)) {
      newSet.delete(jointId);
    } else {
      newSet.add(jointId);
    }
    setSelectedJoints(newSet);
  };

  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {joints.map((joint) => (
          <button
            key={joint.id}
            onClick={() => toggleJoint(joint.id)}
            className={`rounded-lg border p-4 text-left transition ${
              selectedJoints.has(joint.id)
                ? "border-cyan-400/50 bg-cyan-500/10"
                : "border-white/10 bg-white/5 hover:border-white/20"
            }`}
          >
            <div className="mb-2 flex items-center justify-between">
              <span className="font-medium">{joint.label}</span>
              {selectedJoints.has(joint.id) && (
                <span className="text-cyan-400">✓</span>
              )}
            </div>
            <p className="text-sm text-white/70">{joint.description}</p>
          </button>
        ))}
      </div>

      {selectedJoints.size > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-lg border border-cyan-500/30 bg-cyan-500/10 p-4"
        >
          <p className="text-sm text-white/90">
            <strong>Insight:</strong> Motion capture systems track {selectedJoints.size} joint{selectedJoints.size !== 1 ? "s" : ""} to build a three-dimensional model of movement. 
            Each joint provides data about position, rotation, and velocity, enabling precise biomechanical analysis. 
            The more joints tracked, the more complete the movement picture becomes.
          </p>
        </motion.div>
      )}
    </div>
  );
}








