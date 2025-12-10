"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ImageWithFallback } from "@/components/ui/ImageWithFallback";
import { TourReflectionPanel } from "./TourReflectionPanel";
import { ObjectStopLayout } from "./ObjectStopLayout";
import { getObjectById, getGallery } from "@/data/client";
import type { TourStop } from "@/data/tours";
import { useTranslation } from "@/hooks/useTranslation";
import { useLanguage } from "@/contexts/LanguageContext";

interface TourStopRendererProps {
  stop: TourStop;
  stopIndex: number;
  totalStops: number;
  currentAnswer: number | null;
  showFeedback: boolean;
  onAnswer: (choiceIndex: number) => void;
  onSaveObject?: (objectId: string) => void;
}

export function TourStopRenderer({
  stop,
  stopIndex,
  totalStops,
  currentAnswer,
  showFeedback,
  onAnswer,
  onSaveObject,
}: TourStopRendererProps) {
  const { t } = useTranslation();
  const { language } = useLanguage();
  
  // Context Stop
  if (stop.type === "context") {
    const reflectionChoices = stop.reflectionChoices || [];
    
    // Get translated context stop content
    // Try to match by title or use a default key
    let contextKey = "";
    if (stop.title.includes("Measuring Performance") || stop.title.includes("measuring-performance")) {
      contextKey = "measuringPerformance";
    } else if (stop.title.includes("Invisible Visible") || stop.title.includes("problem-invisible")) {
      contextKey = "problem-invisible";
    } else if (stop.title.includes("Tech vs Fairness") || stop.title.includes("tech-vs-fairness")) {
      contextKey = "techVsFairness";
    } else {
      // Try to extract from title or use a slug
      const slug = stop.title.toLowerCase().replace(/[^a-z0-9]+/g, "-");
      contextKey = slug;
    }
    
    const translatedTitle = contextKey 
      ? t(`tour.contextStops.${contextKey}.title`) || stop.title
      : stop.title;
    const translatedContent = contextKey
      ? t(`tour.contextStops.${contextKey}.content`) || stop.content
      : stop.content;
    const translatedPrompt = contextKey
      ? t(`tour.contextStops.${contextKey}.reflectionPrompt`) || stop.reflectionPrompt
      : stop.reflectionPrompt;
    
    // Get translated choices
    const translatedChoices = contextKey && reflectionChoices.length > 0
      ? reflectionChoices.map((choice, idx) => {
          const choiceKey = idx === 0 ? "fairness" : idx === 1 ? "performance" : "understanding";
          const translatedValue = t(`tour.contextStops.${contextKey}.reflectionChoices.${choiceKey}`);
          const translatedFeedback = t(`tour.contextStops.${contextKey}.feedback.${choiceKey}`);
          return {
            value: translatedValue !== `tour.contextStops.${contextKey}.reflectionChoices.${choiceKey}` ? translatedValue : choice.value,
            feedback: translatedFeedback !== `tour.contextStops.${contextKey}.feedback.${choiceKey}` ? translatedFeedback : choice.feedback,
          };
        })
      : reflectionChoices;
    
    if (reflectionChoices.length === 0) {
      console.warn(`Context stop "${stop.title}" missing reflectionChoices`);
    }

    return (
      <div className="mx-auto max-w-4xl">
        <div className="mb-8">
          <div className="mb-4 text-sm font-semibold text-purple-400 uppercase tracking-wide">
            {t("tour.contextStop")}: {translatedTitle}
          </div>
          <h2 className="mb-6 text-4xl font-bold text-white">{translatedTitle}</h2>
          <div className="prose prose-invert max-w-none">
            <p className="text-lg leading-relaxed text-white/80 whitespace-pre-line">
              {translatedContent}
            </p>
          </div>
        </div>

        {/* Reflection */}
        {translatedPrompt && translatedChoices.length > 0 && (
          <TourReflectionPanel
            prompt={translatedPrompt}
            choices={translatedChoices}
            stopId={`context-${stopIndex}`}
            onAnswer={onAnswer}
            currentAnswer={currentAnswer}
            showFeedback={showFeedback}
          />
        )}

        {/* What to notice next */}
        <div className="mt-8 rounded-xl border border-white/10 bg-white/5 p-6">
          <div className="mb-3 text-xs font-semibold text-white/60 uppercase tracking-wide">
            {t("tour.whatToNoticeNext") || "What to Notice Next"}
          </div>
          <p className="text-sm text-white/70">
            {t("tour.whatToNoticeNextDesc") || "As you explore the objects in this gallery, notice how they address the problem and tradeoffs we've discussed."}
          </p>
        </div>
      </div>
    );
  }

  // Object Stop - use consistent layout
  if (stop.type === "object" && stop.objectId) {
    const object = getObjectById(stop.objectId);
    if (!object) {
      return (
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-red-400">Error: Object not found for stop {stopIndex + 1}</p>
        </div>
      );
    }

    return (
      <ObjectStopLayout
        object={object}
        stopIndex={stopIndex}
        currentAnswer={currentAnswer}
        showFeedback={showFeedback}
        onAnswer={onAnswer}
        onSaveObject={onSaveObject}
      />
    );
  }

  // Legacy rendering (should not be reached)
  if (stop.type === "object" && stop.objectId) {
    const object = getObjectById(stop.objectId);
    if (!object) {
      return (
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-red-400">Error: Object not found for stop {stopIndex + 1}</p>
        </div>
      );
    }

    const gallery = getGallery(object.galleryId);
    const didactics = object.didactics;

    // Check if key terms should be shown
    const shouldShowKeyTerms = didactics?.keyTerms && didactics.wallLabel && 
      didactics.keyTerms.some(term => 
        didactics.wallLabel?.toLowerCase().includes(term.term.toLowerCase())
      );

    // Get reflection choices from object
    const reflectionChoices = object.tourContent?.reflectionChoices || [];
    
    if (reflectionChoices.length === 0) {
      console.warn(`Object stop "${object.title}" missing tourContent.reflectionChoices`);
    }

    return (
      <div className="grid gap-8 md:grid-cols-2">
        {/* Left: Image */}
        <div className="space-y-4">
          <div className="relative aspect-video overflow-hidden rounded-xl">
            <ImageWithFallback
              object={object}
              className="h-full w-full"
              aspectRatio="video"
            />
          </div>
          {object.sourceName && (
            <div className="text-xs text-white/50">
              Source: {object.sourceName}
            </div>
          )}
        </div>

        {/* Right: Content */}
        <div className="space-y-6">
          {/* Title + Era */}
          <div>
            <h2 className="mb-2 text-3xl font-bold text-white">{object.title}</h2>
            <div className="mb-4 text-sm text-white/60">{object.dateLabel}</div>
          </div>

          {/* Wall Label */}
          {didactics?.wallLabel && (
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <div className="mb-2 text-xs font-semibold text-cyan-400 uppercase tracking-wide">{t("common.wallLabel")}</div>
              <p className="text-lg leading-relaxed text-white/90">
                {didactics.wallLabel}
              </p>
            </div>
          )}

          {/* Where You'd See It */}
          {didactics?.whereYoudSeeIt && didactics.whereYoudSeeIt.length > 0 && (
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <div className="mb-3 text-xs font-semibold text-white/60 uppercase tracking-wide">{t("common.whereYoudSeeIt")}</div>
              <ul className="space-y-2">
                {didactics.whereYoudSeeIt.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-white/70">
                    <span className="mt-1 text-cyan-400">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Curator Note */}
          {didactics?.curatorNote && (
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <div className="mb-2 text-xs font-semibold text-purple-400 uppercase tracking-wide">{t("common.curatorNote")}</div>
              <p className="text-sm leading-relaxed text-white/80">
                {didactics.curatorNote}
              </p>
            </div>
          )}

          {/* Why It Matters */}
          {didactics?.whyItMatters && (
            <div className="rounded-xl border border-white/15 bg-white/5 p-6">
              <h3 className="mb-3 text-lg font-semibold">{t("common.whyItMatters")}</h3>
              <p className="text-white/80 leading-relaxed">
                {didactics.whyItMatters}
              </p>
            </div>
          )}

          {/* Signature Detail */}
          {didactics?.signatureDetail && (
            <div className="rounded-lg border-l-4 border-cyan-500/50 bg-cyan-500/10 p-4">
              <p className="text-sm italic text-white/90">
                {didactics.signatureDetail}
              </p>
            </div>
          )}

          {/* Key Terms - ONLY if terms appear in wallLabel */}
          {shouldShowKeyTerms && didactics.keyTerms && (
            <div>
              <div className="mb-3 text-sm font-semibold text-white/60 uppercase tracking-wide">Key Terms</div>
              <div className="flex flex-wrap gap-2">
                {didactics.keyTerms
                  .filter(term => didactics.wallLabel?.toLowerCase().includes(term.term.toLowerCase()))
                  .map((term, i) => (
                    <div key={i} className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs">
                      <span className="font-medium text-cyan-400">{term.term}:</span>{" "}
                      <span className="text-white/70">{term.definition}</span>
                    </div>
                  ))}
              </div>
            </div>
          )}

          {/* Reflection */}
          {didactics?.debatePrompt && reflectionChoices.length > 0 && (
            <TourReflectionPanel
              prompt={didactics.debatePrompt}
              choices={reflectionChoices}
              stopId={`object-${stopIndex}`}
              objectId={object.id}
              onAnswer={onAnswer}
              currentAnswer={currentAnswer}
              showFeedback={showFeedback}
            />
          )}

          {/* Action buttons */}
          <div className="flex items-center gap-4 pt-4">
            {onSaveObject && (
              <button
                onClick={() => onSaveObject(object.id)}
                className="rounded-lg border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/10"
              >
                Save Object
              </button>
            )}
            <Link
              href={`/objects/${object.slug}`}
              target="_blank"
              className="rounded-lg border border-cyan-500/30 bg-cyan-500/20 px-4 py-2 text-sm font-medium text-white transition hover:bg-cyan-500/30"
            >
              View Details →
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-4xl text-center">
      <p className="text-red-400">Error: Invalid stop configuration</p>
    </div>
  );
}

