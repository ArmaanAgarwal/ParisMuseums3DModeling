"use client";

import Link from "next/link";
import { ImageWithFallback } from "@/components/ui/ImageWithFallback";
import { TourReflectionPanel } from "./TourReflectionPanel";
import { getObjectById } from "@/data/client";
import type { MuseumObject } from "@/data/types";
import { useTranslation } from "@/hooks/useTranslation";
import { useLanguage } from "@/contexts/LanguageContext";
import { getObjectTranslation } from "@/i18n/objectTranslations";

interface ObjectStopLayoutProps {
  object: MuseumObject;
  stopIndex: number;
  currentAnswer: number | null;
  showFeedback: boolean;
  onAnswer: (choiceIndex: number) => void;
  onSaveObject?: (objectId: string) => void;
}

export function ObjectStopLayout({
  object,
  stopIndex,
  currentAnswer,
  showFeedback,
  onAnswer,
  onSaveObject,
}: ObjectStopLayoutProps) {
  const { t, tSafe } = useTranslation();
  const { language } = useLanguage();
  const didactics = object.didactics;
  const reflectionChoices = object.tourContent?.reflectionChoices || [];
  
  // Get translated object content using the complete translation system
  const translatedTitle = tSafe(`objects.${object.id}.title`, object.title);
  const translatedWallLabel = tSafe(`objects.${object.id}.wallLabel`, didactics?.wallLabel || "");
  const translatedCuratorNote = tSafe(`objects.${object.id}.curatorNote`, didactics?.curatorNote || "");
  const translatedWhySignificant = tSafe(`objects.${object.id}.whySignificant`, didactics?.whySignificant || "");
  const translatedSignatureMoment = tSafe(`objects.${object.id}.signatureMoment`, didactics?.signatureMoment || "");
  const translatedWhyItMatters = tSafe(`objects.${object.id}.whyItMatters`, didactics?.whyItMatters || "");
  
  // Use whySignificant if available, otherwise whyItMatters
  const displayWhySignificant = translatedWhySignificant || translatedWhyItMatters || didactics?.whySignificant || didactics?.whyItMatters || "";

  // Dev-time validation: show warnings for missing required fields
  const missingFields: string[] = [];
  if (!didactics?.wallLabel) missingFields.push("wallLabel");
  if (!didactics?.specificUseCases || didactics.specificUseCases.length === 0) missingFields.push("specificUseCases");
  if (!didactics?.signatureMoment) missingFields.push("signatureMoment");
  if (!didactics?.curatorNote) missingFields.push("curatorNote");
  if (!didactics?.whySignificant) missingFields.push("whySignificant");
  if (!didactics?.howItWorks) missingFields.push("howItWorks");
  if (!didactics?.tradeoffs || didactics.tradeoffs.length === 0) missingFields.push("tradeoffs");

  // Check if key terms should be shown
  const shouldShowKeyTerms = didactics?.keyTerms && didactics.wallLabel && 
    didactics.keyTerms.some(term => 
      didactics.wallLabel?.toLowerCase().includes(term.term.toLowerCase())
    );

  return (
    <div className="grid gap-8 md:grid-cols-2">
      {/* Left: Image */}
      <div className="space-y-4">
        <div className="relative aspect-video overflow-hidden rounded-xl">
          <ImageWithFallback
            object={object}
            className="h-full w-full"
            aspectRatio="video"
            priority={stopIndex < 2}
          />
        </div>
        {object.sourceName && (
          <div className="text-xs text-white/50">
            Source: {object.sourceName}
          </div>
        )}
      </div>

      {/* Right: Content - ALWAYS RENDER ALL SECTIONS */}
      <div className="space-y-6">
        {/* Title + Era */}
        <div>
          <h2 className="mb-2 text-3xl font-bold text-white">{translatedTitle}</h2>
          <div className="mb-4 text-sm text-white/60">{object.dateLabel}</div>
        </div>

        {/* Missing Fields Warning (dev only) */}
        {missingFields.length > 0 && process.env.NODE_ENV === "development" && (
          <div className="rounded-xl border border-red-500/50 bg-red-500/10 p-4">
            <div className="mb-2 text-sm font-semibold text-red-300">Missing Required Fields:</div>
            <ul className="text-xs text-red-200">
              {missingFields.map((field) => (
                <li key={field}>• {field}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Wall Label - REQUIRED */}
        {translatedWallLabel && (
          <div className="rounded-xl border border-white/10 bg-white/5 p-4">
            <div className="mb-2 text-xs font-semibold text-cyan-400 uppercase tracking-wide">
              {tSafe("common.wallLabel", "Wall label")}
            </div>
            <p className="text-lg leading-relaxed text-white/90">
              {translatedWallLabel}
            </p>
          </div>
        )}

        {/* Specific Use Cases - REQUIRED */}
        {didactics?.specificUseCases && didactics.specificUseCases.length > 0 && (
          <div className="rounded-xl border border-white/10 bg-white/5 p-4">
            <div className="mb-3 text-xs font-semibold text-white/60 uppercase tracking-wide">
              {tSafe("common.specificUseCases", "Specific use cases")}
            </div>
            <ul className="space-y-2">
              {didactics.specificUseCases.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-white/70">
                  <span className="mt-1 text-cyan-400">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Signature Moment - REQUIRED */}
        {translatedSignatureMoment && (
          <div className="rounded-xl border border-purple-500/30 bg-purple-500/10 p-4">
            <div className="mb-2 text-xs font-semibold text-purple-400 uppercase tracking-wide">
              {tSafe("common.signatureMoment", "Signature moment")}
            </div>
            <p className="text-sm leading-relaxed text-white/80 italic">
              {translatedSignatureMoment}
            </p>
          </div>
        )}

        {/* Curator Note - REQUIRED */}
        {translatedCuratorNote && (
          <div className="rounded-xl border border-white/10 bg-white/5 p-4">
            <div className="mb-2 text-xs font-semibold text-purple-400 uppercase tracking-wide">
              {tSafe("common.curatorNote", "Curator note")}
            </div>
            <p className="text-sm leading-relaxed text-white/80">
              {translatedCuratorNote}
            </p>
          </div>
        )}

        {/* Why Significant - REQUIRED */}
        {displayWhySignificant && (
          <div className="rounded-xl border border-white/15 bg-white/5 p-6">
            <h3 className="mb-3 text-lg font-semibold">
              {tSafe("common.whyItMatters", "Why it matters")}
            </h3>
            <p className="text-white/80 leading-relaxed">
              {displayWhySignificant}
            </p>
          </div>
        )}

        {/* How It Works - REQUIRED */}
        {didactics?.howItWorks && (
          <div className="rounded-xl border border-white/10 bg-white/5 p-4">
            <div className="mb-3 text-xs font-semibold text-white/60 uppercase tracking-wide">
              {tSafe("common.howItWorks", "How it works")}
            </div>
            {didactics.howItWorks.bullets && didactics.howItWorks.bullets.length > 0 && (
              <ul className="mb-4 space-y-2">
                {didactics.howItWorks.bullets.map((bullet, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-white/70">
                    <span className="mt-1 text-cyan-400">•</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            )}
            {didactics.howItWorks.paragraph && (
              <p className="text-sm leading-relaxed text-white/80">
                {didactics.howItWorks.paragraph}
              </p>
            )}
          </div>
        )}

        {/* Tradeoffs - REQUIRED */}
        {didactics?.tradeoffs && didactics.tradeoffs.length > 0 && (
          <div className="rounded-xl border border-white/10 bg-white/5 p-4">
            <div className="mb-3 text-xs font-semibold text-white/60 uppercase tracking-wide">
              {tSafe("common.tradeoffs", "Tradeoffs")}
            </div>
            <ul className="space-y-2">
              {didactics.tradeoffs.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-white/70">
                  <span className="mt-1 text-amber-400">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
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

        {/* Reflection - REQUIRED */}
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
        <div className="flex items-center gap-4 pt-4 border-t border-white/10">
          {onSaveObject && (
            <button
              onClick={() => onSaveObject(object.id)}
              className="rounded-lg border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/10"
            >
              {tSafe("ui.buttons.save", "Save")}
            </button>
          )}
          <Link
            href={`/objects/${object.slug}`}
            target="_blank"
            className="rounded-lg border border-cyan-500/30 bg-cyan-500/20 px-4 py-2 text-sm font-medium text-white transition hover:bg-cyan-500/30"
          >
            {tSafe("ui.buttons.viewDetails", "View Details")}
          </Link>
        </div>
      </div>
    </div>
  );
}

