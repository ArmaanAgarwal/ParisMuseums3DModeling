"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "@/components/icons";

interface ContinueButtonProps {
  onContinue: () => void;
  label?: string;
}

export function ContinueButton({
  onContinue,
  label = "Continue",
}: ContinueButtonProps) {
  return (
    <motion.div
      className="mt-16 flex justify-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.5 }}
    >
      <motion.button
        onClick={onContinue}
        className="group flex items-center gap-3 rounded-xl border border-white/20 bg-white/10 px-8 py-4 font-medium text-white transition hover:border-white/30 hover:bg-white/15"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <span>{label}</span>
        <motion.div
          animate={{ y: [0, 4, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown className="h-5 w-5" />
        </motion.div>
      </motion.button>
    </motion.div>
  );
}

