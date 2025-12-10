"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function LocationPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero */}
      <section className="border-b border-white/10 bg-gradient-to-b from-black to-zinc-950 py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mx-auto max-w-4xl"
          >
            <h1 className="mb-4 text-4xl font-semibold md:text-5xl">
              Location: The Online Museum
            </h1>
            <p className="text-lg text-white/70">
              Why this museum exists online and what that enables
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="border-b border-white/10 py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="mx-auto max-w-4xl space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="rounded-2xl border border-white/15 bg-white/5 p-8"
            >
              <h2 className="mb-4 text-2xl font-semibold">This Museum Lives Online by Design</h2>
              <p className="mb-4 leading-relaxed text-white/80">
                The Performance Museum exists on the web, accessible from anywhere
                in the world, at any time, to anyone with an internet connection.
                This is not a limitation or a compromise. It is a deliberate choice
                that reflects the museum's core mission and the nature of what we
                collect and display.
              </p>
              <p className="leading-relaxed text-white/80">
                Just as performance measurement technology moved from exclusive
                laboratories to everyday wearables, this museum moves from physical
                constraints to global accessibility. The web becomes our building,
                the browser becomes our gallery, and the interface becomes our
                architecture.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="rounded-2xl border border-cyan-500/30 bg-cyan-500/10 p-8"
            >
              <h2 className="mb-4 text-2xl font-semibold text-cyan-300">Why Online is the Right Location</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="mb-2 text-lg font-semibold">Global Access</h3>
                  <p className="text-white/90">
                    Performance data and technology are global phenomena. An online
                    museum reflects this reality, making the collection accessible
                    to athletes, researchers, and enthusiasts worldwide, free from
                    geographic or economic barriers.
                  </p>
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-semibold">Data as Medium</h3>
                  <p className="text-white/90">
                    This museum is about data, measurement, and digital technology.
                    An online format allows us to demonstrate these concepts through
                    the medium itself. Interactive visualizations, real time data
                    displays, and simulations work naturally in a digital environment.
                  </p>
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-semibold">Democratized Learning</h3>
                  <p className="text-white/90">
                    Just as wearable sensors democratized performance data, an online
                    museum democratizes access to this knowledge. Students, athletes,
                    researchers, and curious visitors can all access the same depth
                    of information, regardless of location or resources.
                  </p>
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-semibold">Digital Preservation</h3>
                  <p className="text-white/90">
                    Performance technology evolves rapidly. An online museum can be
                    continuously updated, preserving both historical artifacts and
                    emerging technologies in real time. The collection can grow and
                    adapt as new technologies emerge.
                  </p>
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-semibold">Interactive Tools</h3>
                  <p className="text-white/90">
                    Online format enables interactive simulations, data visualizations,
                    and participatory activities that would be difficult or impossible
                    in a physical space. Visitors can manipulate data, compare objects,
                    and explore relationships in ways that enhance understanding.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="rounded-2xl border border-white/15 bg-white/5 p-8"
            >
              <h2 className="mb-4 text-2xl font-semibold">The Interface as Architecture</h2>
              <p className="mb-4 leading-relaxed text-white/80">
                In this online museum, the interface itself becomes the architecture.
                Navigation becomes wayfinding. Scroll becomes procession. Transitions
                become movement through space. The digital environment creates the same
                sense of discovery, contemplation, and learning as a physical museum,
                but through the medium of performance technology itself.
              </p>
              <p className="leading-relaxed text-white/80">
                The guided tour creates a clear path through the collection, just as
                a physical museum's layout guides visitors. Interactive elements
                provide depth and engagement, just as physical museums provide
                touchscreens and participatory stations. The online format enhances
                rather than limits the museum experience.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="rounded-2xl border border-white/15 bg-white/5 p-8"
            >
              <h2 className="mb-4 text-2xl font-semibold">If This Museum Were Built</h2>
              <p className="mb-4 leading-relaxed text-white/80">
                While this museum exists online, we can imagine what a physical
                building might look like. The conceptual architecture draws from three
                traditions: the Louvre's central axis and procession, the Pompidou's
                exposed systems and transparency, and the grounded warmth of a brick
                archive wing.
              </p>
              <p className="mb-4 leading-relaxed text-white/80">
                If built, the museum would be located on a prominent site with clear
                approach vectors. Visitors would arrive along a central axis, pass
                through formal gardens, past a reflecting pool, and into the main
                entrance. The building would have three distinct levels, each with
                its own material language and lighting strategy.
              </p>
              <Link
                href="/architecture"
                className="inline-block rounded-xl border border-white/20 bg-white/10 px-6 py-3 font-semibold transition hover:bg-white/15"
              >
                Learn About the Conceptual Architecture →
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
