"use client";

import { motion } from "framer-motion";
import { ContinueButton } from "./ContinueButton";
import { ChapterTakeaways } from "./ChapterTakeaways";

interface TourChapter1Props {
  onContinue: () => void;
}

export function TourChapter1({ onContinue }: TourChapter1Props) {
  return (
    <section className="min-h-screen flex items-center justify-center py-20 border-b border-white/10">
      <div className="mx-auto max-w-4xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/70">
            <span className="inline-block h-2 w-2 rounded-full bg-emerald-400/80 animate-pulse" />
            Welcome to the Performance Museum
          </div>

          <h1 className="mb-6 text-5xl font-semibold tracking-tight md:text-7xl">
            Performance Museum
          </h1>
          <p className="mb-4 text-xl text-white/80 md:text-2xl font-light">
            Louvre x Pompidou x Brick Archive Hybrid
          </p>

          <div className="mx-auto mt-12 max-w-2xl space-y-6 text-left text-white/80">
            <p className="leading-relaxed">
              Welcome to the Performance Museum, where we explore the relationship
              between human achievement and the tools, technologies, and techniques
              that enable it. This museum tells the story of performance across three
              levels: from the origins of measurement and equipment, through the
              data-driven analysis of movement, to the future of immersive training
              and enhancement.
            </p>
            <p className="leading-relaxed">
              Each level builds on the last, creating a narrative arc that shows how
              our understanding of performance has evolved, and how technology has
              transformed both how we measure achievement and how we pursue it.
            </p>
            <p className="leading-relaxed">
              As you journey through this museum, you'll discover artifacts that
              span millennia, technologies that reveal invisible patterns, and
              visions of futures where human capability is enhanced through
              intelligent systems. This is not just a collection—it's an exploration
              of what it means to optimize human potential.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Level 1",
                subtitle: "Origins & Icons",
                description: "Historical roots of performance",
              },
              {
                title: "Level 2",
                subtitle: "Data, Motion & Body",
                description: "Performance becomes measurable data",
              },
              {
                title: "Level 3",
                subtitle: "Futures & Immersion",
                description: "The future of human capability",
              },
            ].map((level, i) => (
              <motion.div
                key={level.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-2xl border border-white/15 bg-white/5 p-6"
              >
                <div className="mb-2 text-2xl font-bold text-white/40">
                  {level.title}
                </div>
                <h3 className="mb-2 text-lg font-semibold">{level.subtitle}</h3>
                <p className="text-sm text-white/70">{level.description}</p>
              </motion.div>
              ))}
            </div>

          <ChapterTakeaways
            takeaways={[
              "This museum explores how performance has been measured, analyzed, and enhanced across history",
              "Three levels tell a story: from ancient origins, through data-driven analysis, to future possibilities",
              "Every object, exhibit, and zone connects to a larger narrative about human achievement",
            ]}
            nextUp={{
              title: "The Big Idea",
              description:
                "Discover the central thesis: how performance became measurable, data became insight, and insight becomes immersion",
            }}
          />

          <ContinueButton onContinue={onContinue} />
        </motion.div>
      </div>
    </section>
  );
}

