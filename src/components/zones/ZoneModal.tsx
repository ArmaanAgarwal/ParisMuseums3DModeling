"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ObjectImage } from "@/components/ui/ObjectImage";
import type { Zone, Exhibit, MuseumObject } from "@/data/types";
import { getObjectHref } from "@/lib/routes";
import { PREVIEW_OBJECT_COUNT } from "@/data/constants";

interface ZoneModalProps {
  zone: Zone;
  exhibits: Exhibit[];
  objects: MuseumObject[];
  isOpen: boolean;
  onClose: () => void;
  levelSlug: string;
}

export function ZoneModal({
  zone,
  exhibits,
  objects,
  isOpen,
  onClose,
  levelSlug,
}: ZoneModalProps) {
  const featuredObjects = objects.slice(0, PREVIEW_OBJECT_COUNT);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed left-1/2 top-1/2 z-50 w-full max-w-3xl -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-white/20 bg-black p-8 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute right-4 top-4 rounded-lg border border-white/20 bg-white/5 p-2 text-white/70 transition hover:bg-white/10 hover:text-white"
              aria-label="Close"
            >
              ✕
            </button>

            {/* Content */}
            <div className="pr-8">
              <h2 className="mb-4 text-3xl font-semibold">{zone.title}</h2>
              <p className="mb-6 leading-relaxed text-white/80">
                {zone.zoneIntent || zone.summary}
              </p>

              {/* What to Notice */}
              {zone.whatToNotice && zone.whatToNotice.length > 0 && (
                <div className="mb-6 rounded-xl border border-white/15 bg-white/5 p-4">
                  <h3 className="mb-3 font-semibold">What to Notice</h3>
                  <ul className="space-y-2">
                    {zone.whatToNotice.map((notice, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-white/70">
                        <span className="text-cyan-400 mt-0.5">•</span>
                        <span>{notice}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Featured Objects */}
              {featuredObjects.length > 0 && (
                <div className="mb-6">
                  <h3 className="mb-4 font-semibold">Featured Objects</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {featuredObjects.map((obj) => (
                      <Link
                        key={obj.id}
                        href={getObjectHref(obj.id)}
                        onClick={onClose}
                        className="group rounded-lg border border-white/10 bg-white/5 p-3 transition hover:border-white/20 hover:bg-white/10"
                      >
                        <div className="mb-2 aspect-video overflow-hidden rounded">
                          <ObjectImage
                            object={obj}
                            aspectRatio="video"
                            className="h-full"
                          />
                        </div>
                        <div className="text-sm font-medium text-white/90 group-hover:text-white">
                          {obj.title}
                        </div>
                        <div className="text-xs text-white/60">{obj.dateLabel}</div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Exhibits */}
              {exhibits.length > 0 && (
                <div className="mb-6">
                  <h3 className="mb-3 font-semibold">Exhibits in This Zone</h3>
                  <div className="space-y-2">
                    {exhibits.map((exhibit) => (
                      <Link
                        key={exhibit.id}
                        href={`/exhibits/${exhibit.id}`}
                        onClick={onClose}
                        className="block rounded-lg border border-white/10 bg-white/5 p-3 text-sm transition hover:border-white/20 hover:bg-white/10"
                      >
                        <div className="font-medium text-white/90">{exhibit.title}</div>
                        <div className="mt-1 text-xs text-white/60">{exhibit.thesis}</div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Actions */}
              <div className="flex gap-3">
                <Link
                  href={`/levels/${levelSlug}/zones/${zone.id}`}
                  onClick={onClose}
                  className="flex-1 rounded-xl border border-cyan-500/30 bg-cyan-500/20 px-6 py-3 text-center font-medium transition hover:bg-cyan-500/30"
                >
                  Enter This Zone
                </Link>
                <button
                  onClick={onClose}
                  className="rounded-xl border border-white/20 bg-white/5 px-6 py-3 font-medium transition hover:bg-white/10"
                >
                  Close
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

