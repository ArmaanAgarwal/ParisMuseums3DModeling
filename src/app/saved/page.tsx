"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { getAllObjects, getObjectBySlug } from "@/data/client";
import type { MuseumObject } from "@/data/types";

export default function SavedPage() {
  const [savedObjectIds, setSavedObjectIds] = useState<string[]>([]);
  const [savedObjects, setSavedObjects] = useState<MuseumObject[]>([]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const saved = JSON.parse(localStorage.getItem("savedObjects") || "[]");
    setSavedObjectIds(saved);
    const allObjects = getAllObjects();
    setSavedObjects(saved.map((id: string) => allObjects.find((obj) => obj.id === id)).filter(Boolean) as MuseumObject[]);
  }, []);

  const handleRemove = (id: string) => {
    const newSaved = savedObjectIds.filter((savedId) => savedId !== id);
    setSavedObjectIds(newSaved);
    setSavedObjects(savedObjects.filter((obj) => obj.id !== id));
    localStorage.setItem("savedObjects", JSON.stringify(newSaved));
  };

  return (
    <div className="min-h-screen bg-black">
      <section className="border-b border-white/10 bg-gradient-to-b from-black to-zinc-950 py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <h1 className="mb-4 text-4xl font-semibold md:text-5xl">Saved Objects</h1>
          <p className="text-lg text-white/70">
            Your collection of saved objects and exhibits
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          {savedObjects.length === 0 ? (
            <div className="rounded-2xl border border-white/15 bg-white/5 p-12 text-center">
              <div className="mb-4 text-6xl opacity-30">📚</div>
              <h2 className="mb-2 text-2xl font-semibold text-white">No saved objects yet</h2>
              <p className="mb-6 text-white/70">Start exploring and save objects you find interesting.</p>
              <Link
                href="/"
                className="inline-block rounded-xl border border-cyan-500/30 bg-cyan-500/20 px-6 py-3 font-medium text-white transition hover:bg-cyan-500/30"
              >
                Explore Collection →
              </Link>
            </div>
          ) : (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {savedObjects.map((obj, i) => (
                <motion.div
                  key={obj.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="group relative"
                >
                  <Link
                    href={`/objects/${obj.slug}`}
                    className="block h-full rounded-xl border border-white/15 bg-white/5 p-6 transition-all hover:border-white/30 hover:bg-white/10"
                  >
                    <div className="relative mb-4 aspect-video overflow-hidden rounded-lg bg-white/5">
                      {obj.imagePath ? (
                        <img
                          src={obj.imagePath}
                          alt={obj.title}
                          className="h-full w-full object-cover"
                        />
                      ) : (
                        <div className="flex h-full items-center justify-center text-white/30">
                          <div className="text-4xl">📷</div>
                        </div>
                      )}
                    </div>
                    <div className="mb-2 text-xs text-white/60">{obj.dateLabel}</div>
                    <h3 className="mb-2 text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors">
                      {obj.title}
                    </h3>
                    <p className="line-clamp-2 text-sm text-white/70">
                      {obj.shortLabel || obj.description}
                    </p>
                  </Link>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      handleRemove(obj.id);
                    }}
                    className="absolute top-4 right-4 rounded-lg border border-white/15 bg-black/50 p-2 text-white/70 transition hover:bg-red-500/20 hover:text-red-300"
                    aria-label="Remove from saved"
                  >
                    ✕
                  </button>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}


