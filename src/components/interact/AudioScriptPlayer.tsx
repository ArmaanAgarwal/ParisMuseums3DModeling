"use client";

import { useState } from "react";
import { motion } from "framer-motion";

interface AudioScriptPlayerProps {
  title: string;
  script: Array<{
    speaker: string;
    text: string;
    context?: string;
  }>;
  className?: string;
}

export function AudioScriptPlayer({ title, script, className = "" }: AudioScriptPlayerProps) {
  const [currentLine, setCurrentLine] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleNext = () => {
    if (currentLine < script.length - 1) {
      setCurrentLine(currentLine + 1);
    } else {
      setCurrentLine(0);
      setIsPlaying(false);
    }
  };

  const handlePlay = () => {
    setIsPlaying(true);
    setCurrentLine(0);
  };

  const currentScript = script[currentLine];

  return (
    <div className={`rounded-2xl border border-white/15 bg-white/5 p-8 ${className}`}>
      <h3 className="mb-6 text-2xl font-semibold">{title}</h3>
      <p className="mb-6 text-white/80 leading-relaxed">
        This object carried political meaning and ceremonial significance. Experience how it was framed as propaganda and spectacle.
      </p>

      {!isPlaying ? (
        <motion.button
          onClick={handlePlay}
          className="w-full rounded-xl border border-cyan-500/50 bg-cyan-500/20 px-8 py-4 font-semibold text-white transition hover:bg-cyan-500/30"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Play Script →
        </motion.button>
      ) : (
        <motion.div
          key={currentLine}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-4"
        >
          {currentScript.context && (
            <div className="rounded-lg border border-white/10 bg-white/5 p-4">
              <p className="text-sm text-white/60 italic">{currentScript.context}</p>
            </div>
          )}
          <div className="rounded-xl border border-cyan-500/30 bg-cyan-500/10 p-6">
            <div className="mb-2 text-sm font-semibold text-cyan-300">{currentScript.speaker}</div>
            <p className="leading-relaxed text-white/90">{currentScript.text}</p>
          </div>
          <div className="flex justify-between">
            <button
              onClick={() => setIsPlaying(false)}
              className="rounded-lg border border-white/20 bg-white/5 px-4 py-2 text-sm text-white/70 hover:bg-white/10"
            >
              Stop
            </button>
            <button
              onClick={handleNext}
              className="rounded-lg border border-cyan-500/30 bg-cyan-500/20 px-6 py-2 text-sm font-medium text-white transition hover:bg-cyan-500/30"
            >
              {currentLine < script.length - 1 ? "Next →" : "Restart"}
            </button>
          </div>
          <div className="text-center text-xs text-white/50">
            {currentLine + 1} of {script.length}
          </div>
        </motion.div>
      )}
    </div>
  );
}
