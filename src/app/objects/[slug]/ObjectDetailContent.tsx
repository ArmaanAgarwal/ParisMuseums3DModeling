"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ImageWithFallback } from "@/components/ui/ImageWithFallback";
import type { MuseumObject } from "@/data/types";
import { getGallery, getAllObjects } from "@/data/client";
import { useTranslation } from "@/hooks/useTranslation";
import { useLanguage } from "@/contexts/LanguageContext";
import { getObjectTranslation } from "@/i18n/objectTranslations";

interface ObjectDetailContentProps {
  object: MuseumObject;
}

export function ObjectDetailContent({ object }: ObjectDetailContentProps) {
  const [debateAnswer, setDebateAnswer] = useState<number | null>(null);
  const [showDebateFeedback, setShowDebateFeedback] = useState(false);
  const { t } = useTranslation();
  const { language } = useLanguage();

  const gallery = object.galleryId ? getGallery(object.galleryId) : null;
  const allObjects = getAllObjects();
  const relatedObjects = object.relatedObjectIds
    .map((id) => allObjects.find((obj) => obj.id === id))
    .filter(Boolean) as MuseumObject[];
  
  // Get translated content
  const objectTitle = getObjectTranslation(object.id, language, "title") || object.title;
  const objectSubtitle = getObjectTranslation(object.id, language, "subtitle") || object.subtitle;
  const wallLabel = getObjectTranslation(object.id, language, "wallLabel") || object.didactics?.wallLabel || object.shortLabel;
  const curatorNote = getObjectTranslation(object.id, language, "curatorNote") || object.didactics?.curatorNote;
  const whySignificant = getObjectTranslation(object.id, language, "whySignificant") || object.didactics?.whySignificant;
  const signatureMoment = getObjectTranslation(object.id, language, "signatureMoment") || object.didactics?.signatureMoment;

  const handleDebateAnswer = (answerIndex: number) => {
    setDebateAnswer(answerIndex);
    setShowDebateFeedback(true);
  };

  const debateChoices = object.tourContent?.reflectionChoices || [
    { value: "This innovation is positive", feedback: "You see value in this innovation. Consider: who benefits, and what might be lost?" },
    { value: "This has tradeoffs", feedback: "You recognize complexity. This object shows how innovation reshapes sport in multiple ways." },
    { value: "It depends on context", feedback: "Nuanced perspective. This object's impact varied by context, era, and who had access." },
  ];

  const didactics = object.didactics;

  // Check if key terms should be shown
  const shouldShowKeyTerms = didactics?.keyTerms && didactics.wallLabel && 
    didactics.keyTerms.some(term => 
      didactics.wallLabel?.toLowerCase().includes(term.term.toLowerCase())
    );

  return (
    <div className="min-h-screen bg-black">
      {/* Hero */}
      <section className="border-b border-white/10 bg-gradient-to-b from-black to-zinc-950 py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="mx-auto max-w-4xl">
            <Breadcrumbs
              items={[
                gallery ? { label: gallery.title, href: `/galleries/${gallery.id}` } : undefined,
                { label: object.title },
              ].filter(Boolean) as Array<{ label: string; href?: string }>}
            />

            <div className="mb-4 flex flex-wrap items-center gap-3">
              {gallery && (
                <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-sm text-white/70">
                  {gallery.title}
                </span>
              )}
              <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-sm text-white/70">
                {object.dateLabel}
              </span>
              {object.tags.slice(0, 3).map((tag) => (
                <span key={tag} className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-sm text-white/70">
                  {tag}
                </span>
              ))}
            </div>

            <h1 className="mb-4 text-4xl font-semibold md:text-5xl">{objectTitle}</h1>
            <p className="text-xl text-white/70">{objectSubtitle}</p>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="border-b border-white/10 py-12">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="mx-auto max-w-4xl">
            <div className="relative aspect-video overflow-hidden rounded-xl">
              <ImageWithFallback
                    object={object}
                className="h-full w-full"
                    aspectRatio="video"
                    priority
                  />
                </div>
            {object.sourceName && (
              <div className="mt-4 text-xs text-white/50">
                Source: {object.sourceName}
                          </div>
                        )}
          </div>
        </div>
      </section>

      {/* At a Glance */}
      <section className="border-b border-white/10 py-12">
        <div className="mx-auto max-w-4xl px-4 md:px-6">
          <h2 className="mb-6 text-2xl font-semibold">{t("objectLabels.atAGlance")}</h2>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <div className="mb-2 text-xs font-semibold text-white/60 uppercase tracking-wide">{t("objectLabels.era")}</div>
              <div className="text-lg font-semibold text-white">{object.dateLabel}</div>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <div className="mb-2 text-xs font-semibold text-white/60 uppercase tracking-wide">{t("objectLabels.category")}</div>
              <div className="text-lg font-semibold text-white">{object.tags[0] || t("objectLabels.general")}</div>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <div className="mb-2 text-xs font-semibold text-white/60 uppercase tracking-wide">{t("objectLabels.gallery")}</div>
              <div className="text-lg font-semibold text-white">{gallery?.title || t("objectLabels.unknown")}</div>
            </div>
                          </div>
                          </div>
      </section>

      {/* Wall Label */}
      <section className="border-b border-white/10 py-12">
        <div className="mx-auto max-w-4xl px-4 md:px-6">
            <div className="mb-2 text-xs font-semibold text-cyan-400 uppercase tracking-wide">{t("common.wallLabel")}</div>
          <p className="text-xl leading-relaxed text-white/90">
            {wallLabel}
          </p>
                          </div>
      </section>

      {/* Context */}
      <section className="border-b border-white/10 py-12">
        <div className="mx-auto max-w-4xl px-4 md:px-6">
          <h2 className="mb-6 text-2xl font-semibold">{t("objectLabels.context")}</h2>
          <p className="mb-6 leading-relaxed text-white/80 text-lg">
            {didactics?.context || object.description || t("objectLabels.contextNotAvailable")}
          </p>
          {didactics?.specificUseCases && didactics.specificUseCases.length > 0 && (
            <div className="mt-8">
              <h3 className="mb-4 text-lg font-semibold">{t("common.specificUseCases")}</h3>
              <ul className="space-y-3">
                {didactics.specificUseCases.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-1 text-cyan-400">•</span>
                    <span className="text-white/80 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
                          </div>
                        )}
                      </div>
      </section>

      {/* Signature Moment */}
      {signatureMoment && (
        <section className="border-b border-white/10 py-12">
          <div className="mx-auto max-w-4xl px-4 md:px-6">
            <div className="rounded-2xl border border-purple-500/30 bg-purple-500/10 p-8">
              <div className="mb-4 text-xs font-semibold text-purple-400 uppercase tracking-wide">{t("common.signatureMoment")}</div>
              <p className="text-lg leading-relaxed text-white/80 italic">
                {signatureMoment}
                  </p>
                </div>
                </div>
        </section>
      )}

      {/* Curator Note */}
      {curatorNote && (
        <section className="border-b border-white/10 py-12">
          <div className="mx-auto max-w-4xl px-4 md:px-6">
            <div className="mb-4 text-xs font-semibold text-purple-400 uppercase tracking-wide">{t("common.curatorNote")}</div>
            <p className="text-lg leading-relaxed text-white/80">
              {curatorNote}
                  </p>
                </div>
        </section>
      )}

      {/* How It Works */}
      {didactics?.howItWorks && (
        <section className="border-b border-white/10 py-12">
          <div className="mx-auto max-w-4xl px-4 md:px-6">
            <h2 className="mb-6 text-2xl font-semibold">{t("common.howItWorks")}</h2>
            {didactics.howItWorks.bullets && didactics.howItWorks.bullets.length > 0 && (
              <ul className="mb-6 space-y-3">
                {didactics.howItWorks.bullets.map((bullet, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-1 text-cyan-400">•</span>
                    <span className="text-white/80 leading-relaxed text-lg">{bullet}</span>
                  </li>
                ))}
              </ul>
            )}
            {didactics.howItWorks.paragraph && (
              <p className="leading-relaxed text-white/80 text-lg">
                {didactics.howItWorks.paragraph}
                    </p>
                  )}
                </div>
        </section>
      )}

      {/* Why Significant */}
      <section className="border-b border-white/10 py-12">
        <div className="mx-auto max-w-4xl px-4 md:px-6">
          <h2 className="mb-6 text-2xl font-semibold">{t("common.whySignificant")}</h2>
          <p className="leading-relaxed text-white/80 text-lg">
            {didactics?.whySignificant || didactics?.whyItMatters || object.significance || "Significance information not available."}
          </p>
                  </div>
      </section>

      {/* Tradeoffs & Debate */}
      <section className="border-b border-white/10 py-12">
        <div className="mx-auto max-w-4xl px-4 md:px-6">
          <h2 className="mb-6 text-2xl font-semibold">{t("common.tradeoffs")} & {t("objectLabels.debate")}</h2>
          
          {didactics?.tradeoffs && didactics.tradeoffs.length > 0 && (
            <div className="mb-8">
              <h3 className="mb-4 text-lg font-semibold">{t("common.tradeoffs")}</h3>
                    <ul className="space-y-3">
                {didactics.tradeoffs.map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                    <span className="mt-1 text-amber-400">•</span>
                    <span className="text-white/80 leading-relaxed text-lg">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

          {/* Interactive Debate */}
          {didactics?.debatePrompt && (
            <div className="rounded-xl border border-white/15 bg-white/5 p-8">
              <h3 className="mb-4 text-lg font-semibold">{t("objects.debate")}</h3>
              <p className="mb-6 text-lg text-white/80">{didactics.debatePrompt}</p>
              
              <div className="space-y-3">
                {debateChoices.map((choice, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleDebateAnswer(idx)}
                    className={`w-full rounded-lg border p-4 text-left text-sm transition ${
                      debateAnswer === idx
                        ? "border-cyan-500/50 bg-cyan-500/20 text-cyan-300"
                        : "border-white/15 bg-white/5 text-white/80 hover:border-white/30 hover:bg-white/10"
                    }`}
                  >
                    {choice.value}
                  </button>
                      ))}
                    </div>

              {showDebateFeedback && debateAnswer !== null && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-6 rounded-lg border border-cyan-500/30 bg-cyan-500/10 p-6"
                >
                  <div className="mb-2 text-xs font-semibold text-cyan-400 uppercase tracking-wide">{t("objects.yourResponse")}</div>
                  <p className="text-white/90 leading-relaxed">
                    {debateChoices[debateAnswer].feedback}
                  </p>
                </motion.div>
              )}
                  </div>
                )}
              </div>
      </section>

      {/* Key Terms - ONLY if terms appear in wallLabel */}
      {shouldShowKeyTerms && didactics.keyTerms && (
        <section className="border-b border-white/10 py-12">
          <div className="mx-auto max-w-4xl px-4 md:px-6">
            <h2 className="mb-6 text-2xl font-semibold">{t("objects.keyTerms")}</h2>
            <div className="grid gap-4 md:grid-cols-2">
              {didactics.keyTerms
                .filter(term => didactics.wallLabel?.toLowerCase().includes(term.term.toLowerCase()))
                .map((term, i) => (
                  <div key={i} className="rounded-lg border border-white/10 bg-white/5 p-4">
                    <div className="mb-1 font-semibold text-cyan-400">{term.term}</div>
                    <div className="text-sm text-white/70">{term.definition}</div>
                  </div>
                    ))}
                  </div>
                </div>
        </section>
      )}

      {/* Related Objects */}
      {relatedObjects.length > 0 && (
        <section className="border-b border-white/10 py-12">
          <div className="mx-auto max-w-4xl px-4 md:px-6">
            <h2 className="mb-6 text-2xl font-semibold">{t("objects.relatedObjects")}</h2>
            <div className="grid gap-4 md:grid-cols-2">
              {relatedObjects.slice(0, 4).map((relatedObj) => (
                <Link
                  key={relatedObj.id}
                  href={`/objects/${relatedObj.slug}`}
                  className="group rounded-xl border border-white/15 bg-white/5 p-6 transition hover:border-cyan-400/50 hover:bg-cyan-500/10"
                >
                  <div className="mb-2 text-xs text-white/60">{relatedObj.dateLabel}</div>
                  <h3 className="mb-2 text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors">
                    {relatedObj.title}
                  </h3>
                  <p className="text-sm text-white/70 line-clamp-2">
                    {relatedObj.shortLabel || relatedObj.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Where to Go Next */}
      <section className="py-12">
        <div className="mx-auto max-w-4xl px-4 md:px-6">
          <h2 className="mb-6 text-2xl font-semibold">{t("objects.whereToGoNext")}</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <Link
              href="/tour"
              className="rounded-xl border border-cyan-500/30 bg-cyan-500/10 p-6 transition hover:border-cyan-400/50 hover:bg-cyan-500/20"
            >
              <div className="mb-2 text-sm font-medium text-cyan-400">Continue Exploring</div>
              <h3 className="mb-2 text-lg font-semibold text-white">Guided Tour</h3>
              <p className="text-sm text-white/70">Take a curated tour through the museum's objects</p>
            </Link>
            {(() => {
              // Determine relevant lab module based on object
              let labModule = "/lab";
              if (object.tags.includes("Measurement") || object.tags.includes("Timing")) {
                labModule = "/lab#pacing-splits";
              } else if (object.tags.includes("Wearables") || object.tags.includes("Physiology")) {
                labModule = "/lab#heart-rate-zones";
              } else if (object.tags.includes("Measurement") && object.tags.includes("Data")) {
                labModule = "/lab#power-cadence";
              } else if (object.tags.includes("Recovery")) {
                labModule = "/lab#recovery-tradeoff";
              }
              return (
                <Link
                  href={labModule}
                  className="rounded-xl border border-purple-500/30 bg-purple-500/10 p-6 transition hover:border-purple-400/50 hover:bg-purple-500/20"
                >
                  <div className="mb-2 text-sm font-medium text-purple-400">Try Interactive Lab</div>
                  <h3 className="mb-2 text-lg font-semibold text-white">Lab Experience</h3>
                  <p className="text-sm text-white/70">Explore concepts related to this object</p>
                </Link>
              );
            })()}
          </div>
        </div>
      </section>
    </div>
  );
}
