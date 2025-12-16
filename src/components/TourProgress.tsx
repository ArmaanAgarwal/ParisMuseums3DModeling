"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface TourChapter {
  id: string;
  title: string;
  anchor: string;
}

interface TourProgressProps {
  chapters: TourChapter[];
  activeChapter: number;
  onChapterClick: (index: number) => void;
}

export function TourProgress({
  chapters,
  activeChapter,
  onChapterClick,
}: TourProgressProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  if (isMobile) {
    // Compact top bar for mobile
    return (
      <div className="sticky top-0 z-50 border-b border-white/10 bg-black/90 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-4 py-3">
          <div className="flex items-center gap-2 overflow-x-auto">
            {chapters.map((chapter, i) => (
              <button
                key={chapter.id}
                onClick={() => onChapterClick(i)}
                className={`flex-shrink-0 rounded-lg px-3 py-1.5 text-xs font-medium transition ${
                  i === activeChapter
                    ? "bg-white/15 text-white"
                    : "text-white/60 hover:text-white/80"
                }`}
              >
                {i + 1}. {chapter.title.split(":")[0]}
              </button>
            ))}
          </div>
          <div className="mt-2 h-1 w-full bg-white/5 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-white/30"
              initial={{ width: 0 }}
              animate={{ width: `${((activeChapter + 1) / chapters.length) * 100}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>
      </div>
    );
  }

  // Side stepper for desktop
  return (
    <div className="fixed left-4 top-1/2 -translate-y-1/2 z-40 hidden lg:block">
      <div className="relative">
        {/* Progress line */}
        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-white/10" />
        <motion.div
          className="absolute left-4 top-0 w-0.5 bg-white/50"
          initial={{ height: 0 }}
          animate={{
            height: `${(activeChapter / (chapters.length - 1)) * 100}%`,
          }}
          transition={{ duration: 0.3 }}
        />

        {/* Chapter dots */}
        <div className="relative space-y-8">
          {chapters.map((chapter, i) => (
            <button
              key={chapter.id}
              onClick={() => onChapterClick(i)}
              className="group relative flex items-center gap-4"
            >
              <motion.div
                className={`relative z-10 h-8 w-8 rounded-full border-2 transition ${
                  i === activeChapter
                    ? "border-white bg-white"
                    : i < activeChapter
                    ? "border-white/50 bg-white/20"
                    : "border-white/20 bg-white/5 group-hover:border-white/40"
                }`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {i < activeChapter && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <div className="h-2 w-2 rounded-full bg-white" />
                  </motion.div>
                )}
                {i === activeChapter && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <div className="h-3 w-3 rounded-full bg-white" />
                  </motion.div>
                )}
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{
                  opacity: i === activeChapter ? 1 : 0.6,
                  x: i === activeChapter ? 0 : -10,
                }}
                className="text-sm font-medium text-white/90"
              >
                {i + 1}. {chapter.title}
              </motion.div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}








