"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { GALLERIES, getObjectsByGallery } from "@/data/client";
import { TourPlayer } from "@/components/tour/TourPlayer";
import { useTranslation } from "@/hooks/useTranslation";

export default function TourPage() {
  const [selectedGallery, setSelectedGallery] = useState<string | "all" | null>(null);
  const { t } = useTranslation();

  if (selectedGallery) {
    return (
      <TourPlayer
        selectedGallery={selectedGallery}
        onBack={() => setSelectedGallery(null)}
      />
    );
  }

  return (
    <div className="min-h-screen bg-black">
      <section className="border-b border-white/10 bg-gradient-to-b from-black to-zinc-950 py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
                <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mx-auto max-w-4xl text-center"
          >
            <h1 className="mb-6 text-5xl font-bold md:text-6xl">{t("tour.guidedTour")}</h1>
            <p className="text-xl text-white/70">
              {t("tour.selectYourTour")}
            </p>
          </motion.div>
            </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold">{t("tour.selectYourTour")}</h2>
            <p className="text-white/70">{t("tour.chooseGallery") || "Choose one gallery or explore all three"}</p>
      </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {/* Tour All Galleries */}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              onClick={() => setSelectedGallery("all")}
              className="group rounded-2xl border-2 border-cyan-500/50 bg-cyan-500/10 p-8 text-left transition-all hover:border-cyan-400/70 hover:bg-cyan-500/20"
            >
              <div className="mb-4 text-4xl">🎯</div>
              <h3 className="mb-3 text-2xl font-bold text-white">{t("tour.galleryCards.allInnovations.title")}</h3>
              <p className="mb-4 text-white/70 leading-relaxed">
                {t("tour.galleryCards.allInnovations.description")}
              </p>
              <div className="mb-4 flex flex-wrap gap-2">
                <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs text-white/70">{t("tour.galleryCards.allInnovations.meta.complete")}</span>
                <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs text-white/70">{t("tour.galleryCards.allInnovations.meta.duration")}</span>
                <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs text-white/70">{t("tour.galleryCards.allInnovations.meta.stops")}</span>
            </div>
            </motion.button>

            {/* Individual Galleries */}
            {GALLERIES.map((gallery, i) => {
              const galleryObjects = getObjectsByGallery(gallery.id);
              // Map gallery ID to translation key
              const galleryKey = gallery.id === "origins-icons" ? "origins" 
                : gallery.id === "data-motion-body" ? "dataMotionBody"
                : gallery.id === "recovery-ethics-future" ? "recoveryEthicsFuture"
                : "origins";
              const tagKeys = gallery.id === "origins-icons" ? ["standardization", "spectacle", "earlyMeasurement"]
                : gallery.id === "data-motion-body" ? ["wearables", "biomechanics", "quantification"]
                : ["recoveryTech", "enhancementDebates", "fairness"];
              
              return (
                <motion.button
                  key={gallery.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: (i + 1) * 0.1 }}
                  onClick={() => setSelectedGallery(gallery.id)}
                  className="group rounded-2xl border border-white/15 bg-white/5 p-8 text-left transition-all hover:border-white/30 hover:bg-white/10"
                >
                  <h3 className="mb-3 text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                    {t(`tour.galleryCards.${galleryKey}.title`)}
                  </h3>
                  <p className="mb-4 text-white/70 leading-relaxed line-clamp-2">
                    {t(`tour.galleryCards.${galleryKey}.description`)}
                  </p>
                  <div className="mb-4 flex flex-wrap gap-2">
                    {tagKeys.slice(0, 3).map((tagKey, bi) => (
                      <span key={bi} className="rounded-full border border-white/10 bg-white/5 px-2 py-1 text-xs text-white/60">
                        {t(`tour.galleryCards.${galleryKey}.tags.${tagKey}`)}
                      </span>
                    ))}
                  </div>
                  <div className="text-sm text-white/60">{t(`tour.galleryCards.${galleryKey}.meta.duration`)} • {t(`tour.galleryCards.${galleryKey}.meta.stops`)}</div>
                </motion.button>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
