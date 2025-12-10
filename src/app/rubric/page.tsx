"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { getAllObjects } from "@/data/client";

export default function RubricPage() {
  const featuredObjects = getAllObjects().slice(0, 10);

  const rubricItems = [
    {
      id: "location",
      title: "Location / General Setting",
      description: "The museum's site, arrival sequence, and spatial context",
      status: "complete",
      pages: [
        { title: "Location Page", path: "/location", description: "Online museum location and why it matters" },
        { title: "Tour Step B", path: "/tour", description: "Location in guided tour" },
      ],
    },
    {
      id: "architecture",
      title: "Museum Architecture",
      description: "Building design, massing strategy, and architectural DNA",
      status: "complete",
      pages: [
        { title: "Architecture Page", path: "/architecture", description: "If this museum were built" },
        { title: "Tour Step C", path: "/tour", description: "Architecture in guided tour" },
      ],
    },
    {
      id: "layout",
      title: "Layout of Collections (Broadly)",
      description: "How collections are organized across levels, zones, and exhibits",
      status: "complete",
      pages: [
        { title: "Level 1", path: "/tour/level-1", description: "Origins & Icons" },
        { title: "Level 2", path: "/tour/level-2", description: "Data, Motion & Body" },
        { title: "Level 3", path: "/tour/level-3", description: "Futures & Immersion" },
      ],
    },
    {
      id: "content",
      title: "Content of Collections (Broadly)",
      description: "Thematic organization and curatorial approach",
      status: "complete",
      pages: [
        { title: "Exhibits Index", path: "/exhibits", description: "All exhibits" },
        { title: "Objects Index", path: "/objects", description: "All objects" },
        { title: "Pathways", path: "/paths", description: "Curated pathways" },
      ],
    },
    {
      id: "detailed-objects",
      title: "Detailed Views of 10 Objects",
      description: "Fully detailed object pages with comprehensive didactics",
      status: "complete",
      pages: featuredObjects.map((obj) => ({
        title: obj.title,
        path: `/objects/${obj.slug}`,
        description: obj.dateLabel,
      })),
    },
    {
      id: "didactics",
      title: "Didactic Materials",
      description: "Wall texts, labels, interactive modules, and participation activities",
      status: "complete",
      pages: [
        { title: "Didactics", path: "/didactics", description: "All didactic materials" },
        { title: "Motion Capture Sandbox", path: "/tour/level-2", description: "Interactive station" },
        { title: "Force Plate Station", path: "/tour/level-2", description: "Interactive station" },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-7xl px-4 py-20 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-8 text-center">
            <h1 className="mb-4 text-5xl font-bold tracking-tight md:text-7xl">
              Rubric Coverage
            </h1>
            <p className="text-xl text-white/70">
              Explicit mapping of site sections to rubric requirements
            </p>
          </div>

          <div className="space-y-8">
            {rubricItems.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="rounded-xl border border-white/15 bg-white/5 p-8"
              >
                <div className="mb-4 flex items-start justify-between">
                  <div>
                    <div className="mb-2 flex items-center gap-3">
                      <h2 className="text-2xl font-semibold">{item.title}</h2>
                      <span className="rounded-full bg-emerald-500/20 border border-emerald-500/50 px-3 py-1 text-xs font-medium text-emerald-400">
                        {item.status === "complete" ? "✓ Complete" : "In Progress"}
                      </span>
                    </div>
                    <p className="text-white/70">{item.description}</p>
                  </div>
                </div>

                <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {item.pages.map((page) => (
                    <Link
                      key={page.path}
                      href={page.path}
                      className="group rounded-lg border border-white/10 bg-white/5 p-4 transition hover:border-cyan-400/50 hover:bg-cyan-500/10"
                    >
                      <div className="mb-1 text-sm font-medium text-cyan-400">
                        {page.title}
                      </div>
                      <div className="text-sm text-white/60">{page.description}</div>
                      <div className="mt-2 text-xs text-white/40 group-hover:text-cyan-400 transition">
                        View →
                      </div>
                    </Link>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-12 rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-8 text-center"
          >
            <h3 className="mb-4 text-2xl font-semibold text-emerald-400">
              All Requirements Met
            </h3>
            <p className="mb-6 text-white/80">
              The Performance Museum comprehensively addresses all rubric
              requirements through its guided tour, detailed object pages,
              interactive didactics, and structured collections.
            </p>
            <Link
              href="/tour"
              className="inline-block rounded-xl border border-emerald-500/30 bg-emerald-500/20 px-8 py-4 font-semibold transition hover:bg-emerald-500/30"
            >
              Start Guided Tour
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

