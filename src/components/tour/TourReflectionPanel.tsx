"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { getObjectById } from "@/data/client";
import { useTranslation } from "@/hooks/useTranslation";

interface ReflectionChoice {
  value: string;
  feedback: string;
  thinkDeeper?: string;
  nextObjects?: string[];
}

interface ReflectionResponse {
  insightTitle: string;
  whatYourChoiceSignals: string;
  whatYouMightBeMissing: string;
  connectToThisObject: string;
  questionToCarryForward: string;
  lookNext: string | null;
}

interface TourReflectionPanelProps {
  prompt: string;
  choices: ReflectionChoice[];
  stopId: string;
  objectId?: string;
  onAnswer: (choiceIndex: number) => void;
  currentAnswer: number | null;
  showFeedback: boolean;
}

export function TourReflectionPanel({
  prompt,
  choices,
  stopId,
  objectId,
  onAnswer,
  currentAnswer,
  showFeedback,
}: TourReflectionPanelProps) {
  const { t } = useTranslation();
  const [showChangeAnswer, setShowChangeAnswer] = useState(false);

  const selectedChoice = currentAnswer !== null ? choices[currentAnswer] : null;

  // Generate deep reflection response
  const getReflectionResponse = (choiceIndex: number): ReflectionResponse => {
    const choice = choices[choiceIndex];
    const object = objectId ? getObjectById(objectId) : null;

    // Generate insight title based on choice value
    let insightTitle = t("common.yourPerspective") || "Your Perspective";
    if (choice.value.includes("Accuracy") || choice.value.includes("Precision")) {
      insightTitle = "The Precision Seeker";
    } else if (choice.value.includes("Context") || choice.value.includes("Human")) {
      insightTitle = "The Contextual Thinker";
    } else if (choice.value.includes("Fairness") || choice.value.includes("access")) {
      insightTitle = "The Equity Advocate";
    } else if (choice.value.includes("Performance") || choice.value.includes("optimization")) {
      insightTitle = "The Performance Optimizer";
    } else if (choice.value.includes("Evidence") || choice.value.includes("science")) {
      insightTitle = "The Evidence-Based";
    }

    // Generate detailed feedback - expand on the base feedback
    const baseFeedback = choice.feedback || 
      `Your choice of "${choice.value}" reveals a particular way of thinking about innovation in sport. This perspective shapes how you interpret the tradeoffs and implications of new tools and technologies.`;

    const whatYourChoiceSignals = baseFeedback.length > 100 
      ? baseFeedback 
      : `${baseFeedback} This suggests you prioritize certain values over others when evaluating how innovation changes sport. Your perspective influences how you see the relationship between technology, performance, and fairness. The way you think about this choice reveals deeper assumptions about what matters most in athletic competition and training.`;

    const whatYouMightBeMissing = 
      choice.value.includes("Accuracy") || choice.value.includes("Precision")
        ? "While precision and objectivity are valuable, consider what might be lost when we prioritize measurement over human judgment. Some forms of excellence can't be quantified, and some athletes' strengths might be invisible to mechanical devices. The stopwatch, for example, made time objective but also shifted authority from human officials to mechanical precision—a change that had both benefits and costs. When we trust numbers completely, we might miss the athlete's form, strategy, or the context of their performance."
        : choice.value.includes("Context") || choice.value.includes("Human")
        ? "Context matters deeply, but be careful not to dismiss the value of standardization entirely. Some innovations create universal benefits even if access varies. The challenge is making tools both context-aware and broadly accessible. Consider how the same tool might mean different things in different settings, and whether that variability is always a problem. Sometimes standardization creates fairness even when it seems to limit individual expression."
        : choice.value.includes("Fairness") || choice.value.includes("access")
        ? "Fairness is crucial, but remember that perfect equity might not always be possible. Sometimes innovation creates new opportunities even if initial access is limited. The question is how quickly those opportunities spread, and whether the benefits eventually reach everyone. Early stopwatches were expensive, but timing eventually became standardized and accessible. The challenge is ensuring that innovation's benefits don't remain exclusive to those who can afford them."
        : choice.value.includes("Performance") || choice.value.includes("optimization")
        ? "Performance optimization is valuable, but consider what might be lost when we focus solely on measurable gains. Some aspects of sport—the art of movement, the joy of competition, the connection to one's body—might be diminished when everything becomes a number. The challenge is optimizing performance without losing the human elements that make sport meaningful."
        : "Your perspective is thoughtful, but consider the other side: what value might you be overlooking? Innovation often creates both benefits and costs, and the challenge is seeing both clearly. Every tool that solves one problem might create another, and every gain in precision might come with a loss in human judgment.";

    const connectToThisObject = object
      ? `This ${object.title} exemplifies the tension you're exploring. ${object.didactics?.signatureDetail || object.shortLabel || ""} The specific ways this object was used—${object.didactics?.specificUseCases?.slice(0, 2).map(uc => uc.split(':')[0]).join(", ") || object.didactics?.whereYoudSeeIt?.slice(0, 2).join(", ") || "in various contexts"}—show how your chosen value plays out in practice. ${object.didactics?.whySignificant?.slice(0, 200) || object.didactics?.whyItMatters?.slice(0, 200) || ""} This object's history demonstrates both the promise and the limits of your chosen perspective.`
      : `This stop directly addresses the question you're considering. The details here show how your chosen value—${choice.value}—manifests in real innovation contexts. The narrative above illustrates both the benefits and the challenges of prioritizing this value when evaluating innovation in sport.`;

    const questionToCarryForward = choice.thinkDeeper || 
      `If ${choice.value.toLowerCase()}, what forms of excellence might become invisible? How might this perspective limit what we can see or value in athletic performance?`;

    const lookNext = choice.nextObjects?.[0] || 
      (object?.relatedObjectIds?.[0] || null);

    return {
      insightTitle,
      whatYourChoiceSignals,
      whatYouMightBeMissing,
      connectToThisObject,
      questionToCarryForward,
      lookNext,
    };
  };

  const reflectionResponse = currentAnswer !== null 
    ? getReflectionResponse(currentAnswer)
    : null;

  return (
    <div className="rounded-xl border border-white/15 bg-white/5 p-6">
      <h3 className="mb-4 text-lg font-semibold">{t("common.reflection") || "Reflection"}</h3>
      <p className="mb-6 text-white/80 leading-relaxed">{prompt}</p>

      {/* Choices */}
      <div className="space-y-3 mb-6">
        {choices.map((choice, idx) => (
          <button
            key={idx}
            onClick={() => {
              onAnswer(idx);
              setShowChangeAnswer(false);
            }}
            disabled={showFeedback && currentAnswer !== null && !showChangeAnswer}
            className={`w-full rounded-lg border p-4 text-left text-sm transition ${
              currentAnswer === idx
                ? "border-cyan-500/50 bg-cyan-500/20 text-cyan-300"
                : showFeedback && currentAnswer !== null
                ? "border-white/10 bg-white/5 text-white/50 opacity-50 cursor-not-allowed"
                : "border-white/15 bg-white/5 text-white/80 hover:border-white/30 hover:bg-white/10"
            }`}
          >
            {choice.value}
          </button>
        ))}
      </div>

      {/* Deep Insight Panel */}
      {showFeedback && reflectionResponse && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6 rounded-lg border border-cyan-500/30 bg-cyan-500/10 p-6"
        >
          <div>
            <div className="mb-3 text-sm font-semibold text-cyan-400 uppercase tracking-wide">
              {reflectionResponse.insightTitle}
            </div>
            
            <div className="mb-4 space-y-4 text-sm text-white/90 leading-relaxed">
              <div>
                <div className="mb-1 font-medium text-white">What your choice signals:</div>
                <p>{reflectionResponse.whatYourChoiceSignals}</p>
              </div>
              
              <div>
                <div className="mb-1 font-medium text-white">What you might be missing:</div>
                <p>{reflectionResponse.whatYouMightBeMissing}</p>
              </div>
              
              <div>
                <div className="mb-1 font-medium text-white">Connect to this object:</div>
                <p>{reflectionResponse.connectToThisObject}</p>
              </div>
            </div>
          </div>

          {/* Question to carry forward */}
          <div className="rounded-lg border border-purple-500/30 bg-purple-500/10 p-4">
            <div className="mb-2 text-xs font-semibold text-purple-400 uppercase tracking-wide">
              Question to Carry Forward
            </div>
            <p className="text-sm text-white/90 leading-relaxed">
              {reflectionResponse.questionToCarryForward}
            </p>
          </div>

          {/* Look Next */}
          {reflectionResponse.lookNext && (
            <div>
              <div className="mb-3 text-xs font-semibold text-white/60 uppercase tracking-wide">
                Look for This Next
              </div>
              {(() => {
                const nextObj = getObjectById(reflectionResponse.lookNext);
                if (!nextObj) return null;
                return (
                  <Link
                    href={`/objects/${nextObj.slug}`}
                    target="_blank"
                    className="block rounded-lg border border-white/10 bg-white/5 p-3 text-sm transition hover:border-white/20 hover:bg-white/10"
                  >
                    <div className="font-medium text-white/90">{nextObj.title}</div>
                    <div className="mt-1 text-xs text-white/60">{nextObj.dateLabel}</div>
                  </Link>
                );
              })()}
            </div>
          )}

          {/* Change answer button */}
          {!showChangeAnswer && (
            <button
              onClick={() => setShowChangeAnswer(true)}
              className="w-full rounded-lg border border-white/20 bg-white/5 px-4 py-2 text-sm font-medium text-white/70 transition hover:bg-white/10"
            >
              {t("common.changeAnswer") || "Change My Answer"}
            </button>
          )}
        </motion.div>
      )}
    </div>
  );
}
