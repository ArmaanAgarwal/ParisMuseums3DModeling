"use client";

import { motion } from "framer-motion";

interface ZoneTransitionProps {
  fromZone: string;
  toZone: string;
  narrative: string;
}

export function ZoneTransition({
  fromZone,
  toZone,
  narrative,
}: ZoneTransitionProps) {
  return (
    <motion.section
      className="relative flex min-h-[50vh] items-center justify-center overflow-hidden border-y border-white/10 bg-gradient-to-r from-transparent via-white/5 to-transparent py-16"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <div className="mx-auto max-w-4xl px-4 text-center">
        <motion.div
          className="mb-4 text-sm font-medium uppercase tracking-wider text-white/60"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          {fromZone} → {toZone}
        </motion.div>
        <motion.p
          className="text-xl text-white/80"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          {narrative}
        </motion.p>
      </div>
    </motion.section>
  );
}







