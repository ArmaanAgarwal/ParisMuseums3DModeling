"use client";

import { use } from "react";
import Link from "next/link";
import { getPathway } from "@/data/paths";
import { getObject } from "@/data/objects";
import { notFound } from "next/navigation";

interface PathwayPageProps {
  params: Promise<{ slug: string }>;
}

export default function PathwayPage({ params }: PathwayPageProps) {
  const { slug } = use(params);
  const pathway = getPathway(slug);

  if (!pathway) {
    notFound();
  }

  const stopsWithObjects = pathway.stops
    .map((stop) => ({
      ...stop,
      object: getObject(stop.objectId),
    }))
    .filter((stop) => stop.object)
    .sort((a, b) => a.order - b.order);

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-6">
        <Link
          href="/paths"
          className="mb-8 inline-flex items-center text-white/60 hover:text-white transition"
        >
          ← Back to Pathways
        </Link>

        <div className="mb-12">
          <h1 className="mb-4 text-5xl font-bold tracking-tight">
            {pathway.title}
          </h1>
          <p className="mb-6 text-xl text-white/70">{pathway.thesis}</p>

          <div className="rounded-xl border border-white/15 bg-white/5 p-6">
            <h2 className="mb-4 text-2xl font-semibold">Why This Pathway</h2>
            <ul className="mb-6 space-y-2">
              {pathway.why.map((reason, i) => (
                <li key={i} className="flex items-start">
                  <span className="mr-2 text-cyan-400">•</span>
                  <span className="text-white/80">{reason}</span>
                </li>
              ))}
            </ul>

            <h2 className="mb-4 text-2xl font-semibold">Inclusion Criteria</h2>
            <p className="mb-3 text-sm text-white/60">
              Objects in this pathway must meet these criteria:
            </p>
            <ul className="mb-6 space-y-2">
              {pathway.inclusionCriteria.map((criterion, i) => (
                <li key={i} className="flex items-start">
                  <span className="mr-2 text-amber-400">→</span>
                  <span className="text-white/80">{criterion}</span>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-6 text-sm">
              <div>
                <span className="text-white/60">Time: </span>
                <span className="text-white">{pathway.timeEstimate}</span>
              </div>
              <div>
                <span className="text-white/60">Stops: </span>
                <span className="text-white">{pathway.stops.length}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="mb-6 text-3xl font-semibold">Pathway Stops</h2>
          <div className="space-y-8">
            {stopsWithObjects.map((stop, index) => (
              <div
                key={stop.objectId}
                className="rounded-xl border border-white/15 bg-white/5 p-6"
              >
                <div className="mb-4 flex items-start justify-between">
                  <div>
                    <div className="mb-2 text-sm font-medium text-cyan-400">
                      Stop {stop.order}
                    </div>
                    <h3 className="mb-2 text-2xl font-semibold">
                      {stop.object?.title}
                    </h3>
                    {stop.object?.subtitle && (
                      <p className="text-white/60">{stop.object.subtitle}</p>
                    )}
                  </div>
                  <Link
                    href={`/objects/${stop.object?.slug}`}
                    className="rounded-lg border border-white/20 bg-white/10 px-4 py-2 text-sm transition hover:bg-white/20"
                  >
                    View Object
                  </Link>
                </div>

                <div className="mb-4 rounded-lg border border-white/10 bg-white/5 p-4">
                  <h4 className="mb-2 text-sm font-semibold text-amber-400">
                    Why This Object Is In This Pathway
                  </h4>
                  <p className="text-white/80">{stop.whyInPath}</p>
                </div>

                <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                  <h4 className="mb-2 text-sm font-semibold text-cyan-400">
                    Pathway Takeaway
                  </h4>
                  <p className="text-white/80">{stop.takeaway}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-xl border border-cyan-500/30 bg-cyan-500/10 p-8 text-center">
          <h2 className="mb-4 text-2xl font-semibold">Ready to Begin?</h2>
          <p className="mb-6 text-white/80">
            Start this pathway as a guided tour through the museum.
          </p>
          <Link
            href={`/tour?pathway=${pathway.slug}`}
            className="inline-block rounded-xl border border-cyan-500 bg-cyan-500/20 px-8 py-4 font-medium transition hover:bg-cyan-500/30"
          >
            Start This Pathway
          </Link>
        </div>
      </div>
    </div>
  );
}
