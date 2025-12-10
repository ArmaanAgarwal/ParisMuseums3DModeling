"use client";

import { motion } from "framer-motion";
import { ContinueButton } from "./ContinueButton";

interface TourChapter3Props {
  onContinue: () => void;
}

export function TourChapter3({ onContinue }: TourChapter3Props) {
  return (
    <section className="min-h-screen flex items-center justify-center py-20 border-b border-white/10">
      <div className="mx-auto max-w-4xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-8 text-center">
            <h2 className="mb-4 text-4xl font-semibold md:text-5xl">
              Architectural DNA
            </h2>
            <p className="text-lg text-white/70">
              Three architectural languages in harmony
            </p>
          </div>

          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-white/15 bg-white/5 p-8"
            >
              <h3 className="mb-4 text-xl font-semibold">Louvre Logic</h3>
              <p className="leading-relaxed text-white/80">
                The ordered procession and central axis create a sense of ceremony
                and importance. The museum's approach sequence—axis, gardens,
                reflecting pool—transforms arrival into an experience.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="rounded-2xl border border-fuchsia-500/20 bg-fuchsia-500/10 p-8"
            >
              <h3 className="mb-4 text-xl font-semibold text-fuchsia-200">
                Pompidou Systems
              </h3>
              <p className="leading-relaxed text-fuchsia-200/90">
                The exposed tech facade celebrates the building's structure and
                systems. Color-coded service runs, visible circulation, and
                transparent elements make the building's inner workings readable.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="rounded-2xl border border-amber-500/20 bg-amber-500/10 p-8"
            >
              <h3 className="mb-4 text-xl font-semibold text-amber-200">
                Brick Archive Wing
              </h3>
              <p className="leading-relaxed text-amber-200/90">
                A grounded, tactile counterpoint with real brick materiality. The
                warm interior glow visible through regular window openings creates
                depth and material presence, connecting the museum to tradition.
              </p>
            </motion.div>
          </div>

          <div className="mt-8 rounded-2xl border border-white/15 bg-white/5 p-6">
            <p className="text-center leading-relaxed text-white/80">
              Together, these three architectural languages create a hybrid that is
              both ordered and dynamic, both transparent and material, both
              ceremonial and functional. This is not a warehouse box—it's a
              deliberate composition that tells a story.
            </p>
          </div>

          <ContinueButton onContinue={onContinue} />
        </motion.div>
      </div>
    </section>
  );
}







