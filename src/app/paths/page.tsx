"use client";

import Link from "next/link";
import { getAllPathways } from "@/data/paths";

export default function PathwaysPage() {
  const pathways = getAllPathways();

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-6">
        <div className="mb-12">
          <h1 className="mb-4 text-5xl font-bold tracking-tight">
            Curated Pathways
          </h1>
          <p className="text-xl text-white/70">
            Explore the museum through thematic journeys, each with a clear
            curatorial thesis and object-by-object rationale.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {pathways.map((pathway) => (
            <Link
              key={pathway.id}
              href={`/paths/${pathway.slug}`}
              className="group rounded-xl border border-white/15 bg-white/5 p-6 transition hover:border-white/30 hover:bg-white/10"
            >
              <h2 className="mb-3 text-2xl font-semibold group-hover:text-cyan-400 transition">
                {pathway.title}
              </h2>
              <p className="mb-4 text-sm text-white/60 line-clamp-3">
                {pathway.thesis}
              </p>
              <div className="flex items-center justify-between text-sm text-white/50">
                <span>{pathway.stops.length} stops</span>
                <span>{pathway.timeEstimate}</span>
              </div>
            </Link>
          ))}
        </div>

        {/* Navigation */}
        <div className="mt-12 border-t border-white/10 pt-12">
          <div className="flex justify-between">
            <Link
              href="/objects"
              className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-6 py-3 font-medium transition hover:bg-white/10"
            >
              ← Objects
            </Link>
            <Link
              href="/tour"
              className="inline-flex items-center gap-2 rounded-xl border border-cyan-500/30 bg-cyan-500/20 px-6 py-3 font-medium transition hover:bg-cyan-500/30"
            >
              Start Tour →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
