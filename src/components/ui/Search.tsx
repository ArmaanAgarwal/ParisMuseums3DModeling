"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { OBJECTS, EXHIBITS } from "@/data/client";
import { X } from "@/components/icons";

interface SearchProps {
  open: boolean;
  onClose: () => void;
}

export function Search({ open, onClose }: SearchProps) {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) {
      inputRef.current?.focus();
    }
  }, [open]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        // Toggle handled by parent
      }
      if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  const filteredObjects = (OBJECTS || []).filter(
    (obj) =>
      obj.title?.toLowerCase().includes(query.toLowerCase()) ||
      obj.description?.toLowerCase().includes(query.toLowerCase()) ||
      obj.tags?.some((tag) => tag.toLowerCase().includes(query.toLowerCase()))
  );

  const filteredExhibits = (EXHIBITS || []).filter(
    (exhibit) =>
      exhibit.title?.toLowerCase().includes(query.toLowerCase()) ||
      exhibit.thesis?.toLowerCase().includes(query.toLowerCase()) ||
      exhibit.wallText?.toLowerCase().includes(query.toLowerCase())
  );

  const hasResults = filteredObjects.length > 0 || filteredExhibits.length > 0;

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            className="fixed left-1/2 top-1/4 z-50 w-full max-w-2xl -translate-x-1/2 -translate-y-1/4"
          >
            <div className="rounded-2xl border border-white/15 bg-zinc-950 shadow-2xl">
              {/* Search Input */}
              <div className="flex items-center gap-4 border-b border-white/10 p-4">
                <input
                  ref={inputRef}
                  type="text"
                  placeholder="Search objects, exhibits, terms..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="flex-1 bg-transparent text-white placeholder:text-white/40 focus:outline-none"
                />
                <button
                  onClick={onClose}
                  className="rounded-lg border border-white/10 bg-white/5 p-2 transition hover:bg-white/10"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Results */}
              <div className="max-h-96 overflow-y-auto">
                {query.length === 0 ? (
                  <div className="p-8 text-center text-sm text-white/60">
                    Start typing to search...
                  </div>
                ) : !hasResults ? (
                  <div className="p-8 text-center text-sm text-white/60">
                    No results found
                  </div>
                ) : (
                  <div className="p-4">
                    {filteredExhibits.length > 0 && (
                      <div className="mb-4">
                        <div className="mb-2 text-xs font-medium uppercase tracking-wider text-white/60">
                          Exhibits ({filteredExhibits.length})
                        </div>
                        <div className="space-y-2">
                          {filteredExhibits.map((exhibit) => (
                            <Link
                              key={exhibit.id}
                              href={`/exhibits/${exhibit.id}`}
                              onClick={onClose}
                              className="block rounded-lg border border-white/10 bg-white/5 p-3 transition hover:border-white/20 hover:bg-white/10"
                            >
                              <div className="font-medium text-white/90">
                                {exhibit.title}
                              </div>
                              <div className="mt-1 text-xs text-white/60">
                                {exhibit.thesis}
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}

                    {filteredObjects.length > 0 && (
                      <div>
                        <div className="mb-2 text-xs font-medium uppercase tracking-wider text-white/60">
                          Objects ({filteredObjects.length})
                        </div>
                        <div className="space-y-2">
                          {filteredObjects.slice(0, 10).map((obj) => (
                            <Link
                              key={obj.id}
                              href={`/objects/${obj.slug}`}
                              onClick={onClose}
                              className="block rounded-lg border border-white/10 bg-white/5 p-3 transition hover:border-white/20 hover:bg-white/10"
                            >
                              <div className="font-medium text-white/90">
                                {obj.title}
                              </div>
                              <div className="mt-1 text-xs text-white/60">
                                {obj.dateLabel} • {obj.subtitle}
                              </div>
                            </Link>
                          ))}
                        </div>
                        {filteredObjects.length > 10 && (
                          <div className="mt-3 text-center text-xs text-white/60">
                            +{filteredObjects.length - 10} more objects
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Footer */}
              <div className="border-t border-white/10 p-3 text-center text-xs text-white/50">
                Press <kbd className="rounded border border-white/20 bg-white/5 px-2 py-1">Esc</kbd> to close
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

