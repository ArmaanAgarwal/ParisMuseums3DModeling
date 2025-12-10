"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { GALLERIES, EXHIBITS, OBJECTS, getObjectsByGallery, type MuseumObject } from "@/data/client";
import { MUSEUM_IDENTITY } from "@/content/museumIdentity";
import { CompareDrawer } from "@/components/compare/CompareDrawer";
import { ParticipationActivity } from "@/components/home/ParticipationActivity";
import { ImageWithFallback } from "@/components/ui/ImageWithFallback";
import { useTranslation } from "@/hooks/useTranslation";

type SortOption = "curated" | "year" | "a-z";

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState<SortOption>("curated");
  const [compareObjects, setCompareObjects] = useState<MuseumObject[]>([]);
  const [showCompare, setShowCompare] = useState(false);
  const { t } = useTranslation();

  // Get all unique tags
  const allTags = useMemo(() => {
    const tags = new Set<string>();
    OBJECTS.forEach((obj) => obj.tags.forEach((tag) => tags.add(tag)));
    return Array.from(tags).sort();
  }, []);

  // Filter and sort objects
  const filteredObjects = useMemo(() => {
    let filtered = [...OBJECTS];

    // Search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (obj) =>
          obj.title.toLowerCase().includes(query) ||
          obj.tags.some((tag) => tag.toLowerCase().includes(query))
      );
    }

    // Tag filter
    if (selectedTags.length > 0) {
      filtered = filtered.filter((obj) =>
        selectedTags.some((tag) => obj.tags.includes(tag))
      );
    }

    // Sort
    if (sortBy === "year") {
      filtered.sort((a, b) => (b.year || 0) - (a.year || 0));
    } else if (sortBy === "a-z") {
      filtered.sort((a, b) => a.title.localeCompare(b.title));
    }
    // "curated" keeps original order

    return filtered;
  }, [searchQuery, selectedTags, sortBy]);

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const handleCompare = (obj: MuseumObject) => {
    if (compareObjects.find((o) => o.id === obj.id)) {
      setCompareObjects(compareObjects.filter((o) => o.id !== obj.id));
    } else if (compareObjects.length < 3) {
      setCompareObjects([...compareObjects, obj]);
      setShowCompare(true);
    }
  };

  const handleRemoveCompare = (id: string) => {
    setCompareObjects(compareObjects.filter((o) => o.id !== id));
    if (compareObjects.length === 1) {
      setShowCompare(false);
    }
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-40 left-1/2 h-[800px] w-[1200px] -translate-x-1/2 rounded-full bg-gradient-to-b from-cyan-500/20 via-purple-500/10 to-transparent blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 py-24 md:px-6 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mx-auto max-w-5xl text-center"
          >
            <h1 className="mb-6 text-6xl font-bold tracking-tight text-white md:text-8xl">
              {t("branding.museumName")}
            </h1>
            <p className="mb-8 text-xl text-white/90 md:text-2xl font-light">
              {t("branding.museumTagline")}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/tour"
                className="rounded-xl border border-cyan-500/50 bg-gradient-to-r from-cyan-500/20 to-cyan-500/10 px-8 py-4 font-semibold text-white transition-all hover:border-cyan-400/70 hover:from-cyan-500/30 hover:to-cyan-500/20"
              >
                {t("ui.buttons.startTour")}
              </Link>
              <Link
                href="/lab"
                className="rounded-xl border border-white/20 bg-white/5 px-8 py-4 font-medium text-white transition hover:bg-white/10"
              >
                {t("ui.buttons.tryLab")}
              </Link>
              <Link
                href="/playbook"
                className="rounded-xl border border-white/20 bg-white/5 px-8 py-4 font-medium text-white transition hover:bg-white/10"
              >
                {t("ui.buttons.buildPlaybook")}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Thesis & Mission Section */}
      <section className="border-b border-white/10 py-20">
        <div className="mx-auto max-w-4xl px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="rounded-2xl border border-white/15 bg-white/5 p-8">
              <h2 className="mb-4 text-3xl font-bold">{t("home.thesisHeading")}</h2>
              <p className="text-lg leading-relaxed text-white/80">
                {t("home.thesisBody")}
              </p>
            </div>
            
            <div className="rounded-2xl border border-white/15 bg-white/5 p-8">
              <h2 className="mb-4 text-3xl font-bold">{t("home.missionHeading")}</h2>
              <p className="mb-6 leading-relaxed text-white/80">
                {t("home.missionBody")}
              </p>
              
              <div className="mt-6 space-y-4">
                <h3 className="text-xl font-semibold">{t("home.whatMuseumArgues")}</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="mt-1 text-cyan-400">•</span>
                    <div>
                      <div className="font-medium text-white/90">{t("home.arguesBullets.measurement.title")}</div>
                      <div className="text-sm text-white/70">{t("home.arguesBullets.measurement.text")}</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="mt-1 text-cyan-400">•</span>
                    <div>
                      <div className="font-medium text-white/90">{t("home.arguesBullets.design.title")}</div>
                      <div className="text-sm text-white/70">{t("home.arguesBullets.design.text")}</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="mt-1 text-cyan-400">•</span>
                    <div>
                      <div className="font-medium text-white/90">{t("home.arguesBullets.optimization.title")}</div>
                      <div className="text-sm text-white/70">{t("home.arguesBullets.optimization.text")}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Three Galleries Section */}
      <section className="border-b border-white/10 py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">{t("home.threeGalleriesHeading")}</h2>
            <p className="mx-auto max-w-2xl text-lg text-white/70">
              {t("home.threeGalleriesDesc")}
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-3">
            {GALLERIES.map((gallery, i) => {
              const galleryObjects = getObjectsByGallery(gallery.id);
              return (
                <motion.div
                  key={gallery.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className="group block h-full rounded-xl border border-white/15 bg-gradient-to-br from-white/5 to-white/0 p-6 transition-all hover:border-white/30 hover:shadow-xl hover:shadow-cyan-500/10">
                    <Link href={`/galleries/${gallery.id}`} className="block">
                      <h3 className="mb-3 text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">{gallery.title}</h3>
                      <p className="mb-4 text-white/70 leading-relaxed text-sm">{gallery.blurb}</p>
                    </Link>
                    <div className="mb-4 flex flex-wrap gap-2">
                      {gallery.themeBullets?.slice(0, 3).map((bullet, bi) => (
                        <span
                          key={bi}
                          className="rounded-full border border-white/10 bg-white/5 px-2 py-1 text-xs text-white/70"
                        >
                          {bullet}
                        </span>
                      ))}
                    </div>
                    <div className="mt-4 flex items-center gap-3">
                      <Link
                        href={`/galleries/${gallery.id}`}
                        className="flex-1 rounded-lg border border-white/20 bg-white/5 px-4 py-2 text-center text-sm font-medium text-white transition hover:bg-white/10"
                      >
                        {t("ui.buttons.explore")}
                      </Link>
                      <Link
                        href={`/tour?gallery=${gallery.id}`}
                        className="flex-1 rounded-lg border border-cyan-500/30 bg-cyan-500/20 px-4 py-2 text-center text-sm font-medium text-white transition hover:bg-cyan-500/30"
                      >
                        {t("ui.nav.tour")}
                      </Link>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

        {/* Featured Exhibits */}
        <section className="border-b border-white/10 py-20">
          <div className="mx-auto max-w-7xl px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12 flex items-center justify-between"
            >
              <div>
                <h2 className="mb-4 text-3xl font-bold md:text-4xl">{t("home.featuredExhibits")}</h2>
                <p className="text-lg text-white/70">{t("home.featuredExhibitsDesc")}</p>
              </div>
              <Link
                href="/exhibits"
                className="hidden rounded-xl border border-white/20 bg-white/5 px-6 py-3 font-medium transition hover:bg-white/10 md:block"
              >
                {t("ui.buttons.viewAll")} →
              </Link>
            </motion.div>

            <div className="grid gap-6 md:grid-cols-3">
              {EXHIBITS.map((exhibit, i) => (
                <motion.div
                  key={exhibit.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className="group block h-full rounded-xl border border-white/15 bg-gradient-to-br from-white/5 to-white/0 p-6 transition-all hover:border-white/30 hover:shadow-xl hover:shadow-cyan-500/10">
                    <Link href={`/exhibits/${exhibit.id}`} className="block">
                      <div className="mb-2 text-sm font-medium text-cyan-400">{exhibit.subtitle}</div>
                      <h3 className="mb-3 text-xl font-semibold text-white group-hover:text-cyan-400 transition-colors">
                        {exhibit.title}
                      </h3>
                      <p className="mb-4 line-clamp-3 text-sm text-white/70 leading-relaxed">
                        {exhibit.intro}
                      </p>
                    </Link>
                    <div className="mb-4 flex items-center justify-between text-xs text-white/50">
                      <span>{exhibit.stopIds.length} {t("ui.common.stops")}</span>
                      <span>{exhibit.durationEstimate}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Link
                        href={`/exhibits/${exhibit.id}`}
                        className="flex-1 rounded-lg border border-cyan-500/30 bg-cyan-500/20 px-4 py-2 text-center text-sm font-medium text-white transition hover:bg-cyan-500/30"
                      >
                        {t("ui.buttons.startExhibit")}
                      </Link>
                      <Link
                        href={`/exhibits/${exhibit.id}`}
                        className="rounded-lg border border-white/20 bg-white/5 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/10"
                      >
                        {t("ui.buttons.viewDetails")}
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

      {/* Participation Activity */}
      <section className="border-b border-white/10 py-24">
        <div className="mx-auto max-w-4xl px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <ParticipationActivity />
          </motion.div>
        </div>
      </section>

      {/* Objects Collection with Search/Filter */}
      <section className="border-b border-white/10 py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="mb-6 text-4xl font-bold md:text-5xl">{t("home.collectionHeading")}</h2>
            
            {/* Search and Filters */}
            <div className="mb-8 space-y-4">
              {/* Search Bar */}
              <div className="relative">
                <input
                  type="text"
                  placeholder={t("home.searchPlaceholder") || "Search objects by title or tags..."}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full rounded-xl border border-white/15 bg-white/5 px-6 py-4 pl-12 text-white placeholder:text-white/40 focus:border-cyan-500/50 focus:outline-none focus:ring-2 focus:ring-cyan-500/20"
                />
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40">🔍</div>
              </div>

              {/* Tag Chips */}
              <div className="flex flex-wrap gap-2">
                {allTags.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => toggleTag(tag)}
                    className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
                      selectedTags.includes(tag)
                        ? "border-cyan-500/50 bg-cyan-500/20 text-cyan-300"
                        : "border-white/15 bg-white/5 text-white/70 hover:border-white/30 hover:bg-white/10"
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>

              {/* Sort Dropdown */}
              <div className="flex items-center gap-4">
                <label className="text-sm text-white/60">{t("home.sortBy")}</label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as SortOption)}
                  className="rounded-lg border border-white/15 bg-white/5 px-4 py-2 text-sm text-white focus:border-cyan-500/50 focus:outline-none"
                >
                  <option value="curated">{t("home.curated")}</option>
                  <option value="year">{t("home.year")}</option>
                  <option value="a-z">{t("home.aToZ")}</option>
                </select>
                <span className="text-sm text-white/60">
                  {filteredObjects.length} {t("ui.common.of")} {OBJECTS.length} {t("home.objects") || "objects"}
                </span>
              </div>
            </div>
          </motion.div>

          {/* Objects Grid - 4 per gallery */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredObjects.map((obj, i) => (
              <motion.div
                key={obj.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <div className="group block h-full rounded-xl border border-white/15 bg-white/5 p-6 transition-all hover:border-white/30 hover:bg-white/10">
                  {/* Image */}
                  <Link href={`/objects/${obj.slug}`} className="block">
                    <div className="relative mb-4 aspect-video overflow-hidden rounded-lg">
                      <ImageWithFallback
                        object={obj}
                        className="h-full w-full"
                        aspectRatio="video"
                      />
                    </div>
                  </Link>

                  {/* Content */}
                  <div className="mb-2 flex items-center gap-2">
                    <span className="rounded-full border border-white/15 bg-white/5 px-2 py-1 text-xs text-white/70">
                      {obj.dateLabel}
                    </span>
                    {obj.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/10 bg-white/5 px-2 py-1 text-xs text-white/60"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Link href={`/objects/${obj.slug}`} className="block">
                    <h3 className="mb-2 text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors">
                      {obj.title}
                    </h3>
                    <p className="mb-4 line-clamp-2 text-sm text-white/70">
                      {obj.shortLabel || obj.description}
                    </p>
                  </Link>

                  <div className="flex items-center justify-between">
                    <Link
                      href={`/objects/${obj.slug}`}
                      className="flex items-center gap-2 text-sm text-white/50 group-hover:text-white/70"
                    >
                      View details →
                    </Link>
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        handleCompare(obj);
                      }}
                      className={`rounded-lg border px-3 py-1.5 text-xs transition ${
                        compareObjects.find((o) => o.id === obj.id)
                          ? "border-cyan-500/50 bg-cyan-500/20 text-cyan-300"
                          : "border-white/15 bg-white/5 text-white/60 hover:bg-white/10"
                      }`}
                    >
                      {compareObjects.find((o) => o.id === obj.id) ? "✓ Compare" : "Compare"}
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Compare Drawer */}
      <CompareDrawer
        selectedObjects={compareObjects}
        onRemove={handleRemoveCompare}
        onClose={() => setShowCompare(false)}
      />
    </div>
  );
}
