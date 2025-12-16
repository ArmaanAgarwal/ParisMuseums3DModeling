"use client";

import { motion } from "framer-motion";
import { ContinueButton } from "./ContinueButton";
import { ChapterTakeaways } from "./ChapterTakeaways";

interface TourChapter2BigIdeaProps {
  onContinue: () => void;
}

export function TourChapter2BigIdea({ onContinue }: TourChapter2BigIdeaProps) {
  return (
    <section className="min-h-screen flex items-center justify-center py-20 border-b border-white/10">
      <div className="mx-auto max-w-4xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-semibold md:text-5xl">
              The Big Idea
            </h2>
            <p className="text-lg text-white/70">
              How performance became measurable, data became insight, and insight becomes immersion
            </p>
          </div>

          <div className="space-y-8 text-white/80">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-white/15 bg-white/5 p-8"
            >
              <h3 className="mb-4 text-xl font-semibold text-white">
                From Intuition to Measurement
              </h3>
              <p className="mb-4 leading-relaxed">
                For millennia, performance was understood through observation and comparison. 
                Ancient athletes knew what felt fast, what looked strong, what seemed efficient—but 
                these were subjective judgments. The first revolution came when we learned to measure: 
                timing devices transformed "fast" into "exactly how fast." This shift from qualitative 
                to quantitative understanding created the foundation for all modern performance science.
              </p>
              <p className="leading-relaxed">
                But measurement alone wasn't enough. The second revolution came when we learned to 
                analyze: motion capture, sensors, and biomechanics transformed raw data into insights. 
                We could see patterns invisible to the naked eye, understand the physics of movement, 
                and identify the micro-adjustments that separate good from great.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="rounded-2xl border border-white/15 bg-white/5 p-8"
            >
              <h3 className="mb-4 text-xl font-semibold text-white">
                From Analysis to Immersion
              </h3>
              <p className="mb-4 leading-relaxed">
                The third revolution is happening now: insights are becoming experiences. Virtual 
                reality creates training environments impossible in the real world. Artificial 
                intelligence synthesizes vast amounts of data into personalized guidance. Neural 
                interfaces explore direct connections between mind and movement. We're moving from 
                understanding performance to enhancing it, from measuring limits to transcending them.
              </p>
              <p className="leading-relaxed">
                But this future raises profound questions: Who owns performance data? How do we 
                ensure equitable access to enhancement technologies? What are the ethical boundaries 
                of human augmentation? These questions aren't abstract—they're being answered right 
                now, in laboratories, training facilities, and competitive arenas around the world.
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
                The Museum's Thesis
              </h3>
              <p className="leading-relaxed text-amber-200/90">
                This museum tells one story across three levels: how we moved from intuitive 
                understanding to precise measurement, from measurement to analysis, and from analysis 
                to immersive enhancement. But it's not just a story of progress—it's a story of 
                choices. Every technology, every tool, every system represents decisions about what 
                to measure, how to analyze, and what to enhance. Understanding these choices helps 
                us navigate the future of human performance with wisdom and intention.
              </p>
            </motion.div>
          </div>

          <ChapterTakeaways
            takeaways={[
              "Performance understanding evolved in three revolutions: measurement, analysis, and immersion",
              "Each revolution built on the previous, creating cumulative knowledge",
              "The future of performance raises critical ethical questions about data, access, and enhancement",
              "Understanding the history of performance technology helps us make better choices about its future",
            ]}
            nextUp={{
              title: "Arrival Sequence",
              description: "Experience the museum's approach: axis, gardens, and reflecting pool that prepare you for the journey ahead",
            }}
          />

          <ContinueButton onContinue={onContinue} />
        </motion.div>
      </div>
    </section>
  );
}








