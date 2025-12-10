"use client";

import { motion } from "framer-motion";
import { getAllObjects } from "@/lib/museumData";

export default function DidacticsPage() {
  const objects = getAllObjects().slice(0, 3); // Sample objects for examples

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
              Didactic Materials
            </h1>
            <p className="text-lg text-white/70">
              Examples of wall texts, labels, interactive touchscreens, and
              participation stations that enhance and clarify the collection.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Wall Text Panels */}
      <section className="border-b border-white/10 py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <h2 className="mb-12 text-center text-3xl font-semibold">
            Wall Text Panels
          </h2>

          <div className="mx-auto max-w-4xl space-y-8">
            {/* Introduction Panel */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-white/15 bg-white/5 p-10"
            >
              <div className="mb-2 text-sm font-medium text-white/60">
                Introduction Panel
              </div>
              <h3 className="mb-4 text-2xl font-semibold">
                Performance Museum
              </h3>
              <p className="mb-4 leading-relaxed text-white/80">
                Welcome to the Performance Museum, where we explore the
                relationship between human achievement and the tools,
                technologies, and techniques that enable it. This museum tells
                the story of performance across three levels: from the origins of
                measurement and equipment, through the data-driven analysis of
                movement, to the future of immersive training and enhancement.
              </p>
              <p className="leading-relaxed text-white/80">
                Each level builds on the last, creating a narrative arc that
                shows how our understanding of performance has evolved, and how
                technology has transformed both how we measure achievement and
                how we pursue it.
              </p>
            </motion.div>

            {/* Section Header */}
            {["Level 1: Origins & Icons", "Level 2: Data, Motion & Body", "Level 3: Futures & Immersion"].map(
              (title, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="rounded-2xl border border-white/15 bg-white/5 p-8"
                >
                  <div className="mb-2 text-sm font-medium text-white/60">
                    Section Header
                  </div>
                  <h3 className="text-xl font-semibold">{title}</h3>
                </motion.div>
              )
            )}
          </div>
        </div>
      </section>

      {/* Object Labels */}
      <section className="border-b border-white/10 py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <h2 className="mb-12 text-center text-3xl font-semibold">
            Object Labels
          </h2>

          <div className="mx-auto max-w-4xl space-y-6">
            {objects.map((obj, i) => (
              <motion.div
                key={obj.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="space-y-4"
              >
                {/* Short Label */}
                <div className="rounded-xl border border-white/15 bg-white/5 p-6">
                  <div className="mb-2 text-xs font-medium text-white/60">
                    Short Label (Wall Label)
                  </div>
                  <div className="font-semibold">{obj.wallLabel}</div>
                </div>

                {/* Extended Label */}
                <div className="rounded-xl border border-white/15 bg-white/5 p-6">
                  <div className="mb-2 text-xs font-medium text-white/60">
                    Extended Label
                  </div>
                  <p className="leading-relaxed text-white/80">
                    {obj.extendedLabel}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Touchscreen */}
      <section className="border-b border-white/10 py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <h2 className="mb-12 text-center text-3xl font-semibold">
            Interactive Touchscreen Mock-up
          </h2>

          <div className="mx-auto max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl border-4 border-white/20 bg-zinc-900 p-8 shadow-2xl"
            >
              <div className="mb-6 flex items-center justify-between border-b border-white/10 pb-4">
                <h3 className="text-xl font-semibold">Object Explorer</h3>
                <div className="flex gap-2">
                  <div className="h-3 w-3 rounded-full bg-red-500/50" />
                  <div className="h-3 w-3 rounded-full bg-yellow-500/50" />
                  <div className="h-3 w-3 rounded-full bg-green-500/50" />
                </div>
              </div>

              {/* Tabs */}
              <div className="mb-6 flex gap-2 border-b border-white/10">
                {["Context", "Close-ups", "Data", "Try it"].map((tab, i) => (
                  <button
                    key={tab}
                    className={`border-b-2 px-4 py-2 text-sm font-medium transition ${
                      i === 0
                        ? "border-white/50 text-white"
                        : "border-transparent text-white/60 hover:text-white/80"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {/* Content Area */}
              <div className="min-h-[400px] rounded-lg border border-white/10 bg-white/5 p-6">
                <div className="mb-4">
                  <h4 className="font-semibold">Historical Context</h4>
                  <p className="mt-2 text-sm text-white/70">
                    This object represents a key moment in the evolution of
                    performance measurement. Understanding its context helps us
                    see how technology has transformed our ability to understand
                    and improve human achievement.
                  </p>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                    <div className="mb-2 text-xs text-white/60">Timeline</div>
                    <div className="text-sm text-white/80">
                      See how this object fits into the broader history of
                      performance technology
                    </div>
                  </div>
                  <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                    <div className="mb-2 text-xs text-white/60">Related Objects</div>
                    <div className="text-sm text-white/80">
                      Explore other objects from the same era or with similar
                      significance
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 text-center text-xs text-white/50">
                Touch to interact • Swipe to navigate
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Participation Activities */}
      <section className="border-b border-white/10 py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <h2 className="mb-12 text-center text-3xl font-semibold">
            Participation Activities
          </h2>

          <div className="mx-auto max-w-4xl space-y-8">
            {/* Measure Your Jump */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-white/15 bg-white/5 p-8"
            >
              <h3 className="mb-4 text-xl font-semibold">
                Measure Your Jump Station
              </h3>
              <p className="mb-6 leading-relaxed text-white/80">
                Step onto the force plate and jump as high as you can. The
                system measures your ground reaction forces, jump height, and
                power output. Compare your results to elite athletes and see how
                technique affects performance.
              </p>
              <div className="rounded-lg border border-white/10 bg-white/5 p-6">
                <div className="mb-4 text-center">
                  <div className="text-4xl">📏</div>
                  <div className="mt-2 text-sm text-white/60">
                    Interactive Station
                  </div>
                </div>
                <div className="space-y-2 text-sm text-white/70">
                  <div>• Step on the force plate</div>
                  <div>• Jump when ready</div>
                  <div>• View your metrics</div>
                  <div>• Compare to benchmarks</div>
                </div>
              </div>
            </motion.div>

            {/* Motion Capture Silhouette */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="rounded-2xl border border-white/15 bg-white/5 p-8"
            >
              <h3 className="mb-4 text-xl font-semibold">
                Motion Capture Silhouette Station
              </h3>
              <p className="mb-6 leading-relaxed text-white/80">
                Stand in the motion capture zone and perform a movement. Watch
                as your silhouette is captured and analyzed in real-time. See
                your joint angles, movement patterns, and biomechanical data
                displayed on the screen.
              </p>
              <div className="rounded-lg border border-white/10 bg-white/5 p-6">
                <div className="mb-4 text-center">
                  <div className="text-4xl">🎭</div>
                  <div className="mt-2 text-sm text-white/60">
                    Motion Capture Zone
                  </div>
                </div>
                <div className="space-y-2 text-sm text-white/70">
                  <div>• Enter the capture zone</div>
                  <div>• Perform your movement</div>
                  <div>• View real-time analysis</div>
                  <div>• Learn about your biomechanics</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Video/Projection Description */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <h2 className="mb-12 text-center text-3xl font-semibold">
            Video & Projection Installations
          </h2>

          <div className="mx-auto max-w-4xl space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-white/15 bg-white/5 p-8"
            >
              <h3 className="mb-4 text-xl font-semibold">
                Performance Timeline Loop
              </h3>
              <p className="mb-4 leading-relaxed text-white/80">
                A continuous video projection that cycles through key moments in
                performance history. From ancient Olympic competitions to modern
                world records, the loop creates a visual timeline that
                contextualizes the objects on display.
              </p>
              <div className="rounded-lg border border-white/10 bg-white/5 p-4 text-sm text-white/70">
                <div className="mb-2 font-medium">Content:</div>
                <ul className="space-y-1">
                  <li>• Historical footage and reconstructions</li>
                  <li>• Record-breaking moments</li>
                  <li>• Evolution of equipment and technique</li>
                  <li>• 15-minute loop, continuously playing</li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="rounded-2xl border border-white/15 bg-white/5 p-8"
            >
              <h3 className="mb-4 text-xl font-semibold">
                Data Visualization Wall
              </h3>
              <p className="mb-4 leading-relaxed text-white/80">
                A large-scale projection that visualizes performance data in
                real-time. Visitors can see how different athletes compare,
                how records have evolved over time, and how technology has
                changed our ability to measure and understand performance.
              </p>
              <div className="rounded-lg border border-white/10 bg-white/5 p-4 text-sm text-white/70">
                <div className="mb-2 font-medium">Features:</div>
                <ul className="space-y-1">
                  <li>• Real-time data updates</li>
                  <li>• Interactive elements (touch to explore)</li>
                  <li>• Comparative visualizations</li>
                  <li>• Historical data overlays</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

