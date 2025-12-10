"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ImageWithFallback } from "@/components/ui/ImageWithFallback";
import { getAllObjects, getObjectById } from "@/data/client";
import { getPlaybookScenario, determineOutcome, type PlaybookOutcomeProfile } from "@/data/playbook";
import { useTranslation } from "@/hooks/useTranslation";
import { useLanguage } from "@/contexts/LanguageContext";

export default function PlaybookScenarioPage() {
  const params = useParams();
  const router = useRouter();
  const scenarioId = params.id as string;
  const scenario = getPlaybookScenario(scenarioId);
  const allObjects = getAllObjects();
  const { t } = useTranslation();
  const { language } = useLanguage();

  const [selectedObjects, setSelectedObjects] = useState<string[]>([]);
  const [outcome, setOutcome] = useState<PlaybookOutcomeProfile | null>(null);
  const [showOutcome, setShowOutcome] = useState(false);

  useEffect(() => {
    if (!scenario) {
      router.push("/playbook");
      return;
    }
    
    // Load saved selections
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem(`playbook_${scenarioId}`);
      if (saved) {
        try {
          setSelectedObjects(JSON.parse(saved));
        } catch (e) {
          // Ignore
        }
      }
    }
  }, [scenario, scenarioId, router]);

  if (!scenario) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="mb-4 text-2xl font-bold">{t("playbook.scenarioNotFound")}</h1>
          <p className="mb-6 text-white/70">{t("playbook.scenarioNotFoundDesc")}</p>
          <Link
            href="/playbook"
            className="inline-block rounded-lg border border-cyan-500/30 bg-cyan-500/20 px-6 py-3 font-medium text-white transition hover:bg-cyan-500/30"
          >
            {t("playbook.backToPlaybook")}
          </Link>
        </div>
      </div>
    );
  }

  const handleToggleObject = (objectId: string) => {
    const newSelection = selectedObjects.includes(objectId)
      ? selectedObjects.filter(id => id !== objectId)
      : [...selectedObjects, objectId];
    
    // Limit to 2-4 objects
    if (newSelection.length > 4) {
      return;
    }
    
    setSelectedObjects(newSelection);
    if (typeof window !== "undefined") {
      localStorage.setItem(`playbook_${scenarioId}`, JSON.stringify(newSelection));
    }
  };

  const handleSeeOutcome = () => {
    if (!scenario) {
      console.error("Cannot determine outcome: scenario is undefined");
      return;
    }
    
    if (selectedObjects.length < 2) {
      return;
    }
    
    try {
      const determinedOutcome = determineOutcome(scenario, selectedObjects);
      if (!determinedOutcome) {
        throw new Error("Outcome determination returned null");
      }
      
      setOutcome(determinedOutcome);
      setShowOutcome(true);
      
      // Save to history
      if (typeof window !== "undefined") {
        const history = JSON.parse(localStorage.getItem("playbookHistory") || "[]");
        history.push({
          scenarioId,
          scenarioTitle: scenario.title,
          selectedObjects,
          outcomeId: determinedOutcome.id,
          outcomeTitle: determinedOutcome.title,
          timestamp: Date.now()
        });
        localStorage.setItem("playbookHistory", JSON.stringify(history));
      }
    } catch (error) {
      console.error("Error determining outcome:", error);
      // Fallback to mixed plan
      const fallbackOutcome = {
        id: "mixed-plan",
        title: t("playbook.outcomes.mixedPlan.title"),
        description: t("playbook.outcomes.mixedPlan.description"),
        conditions: {},
        metrics: { performance: 0, injuryRisk: 0, fairness: 0, accessibility: 0, dataDependence: 0 },
        followUpQuestions: [
          t("playbook.outcomes.mixedPlan.questions.0"),
          t("playbook.outcomes.mixedPlan.questions.1"),
        ],
        suggestedObjects: scenario.recommendedObjectIds.slice(0, 2),
        whatWorked: [
          t("playbook.outcomes.mixedPlan.whatWorked.0"),
        ],
        whatBackfired: [
          t("playbook.outcomes.mixedPlan.whatBackfired.0"),
        ],
      };
      setOutcome(fallbackOutcome);
      setShowOutcome(true);
    }
  };

  const allScenarioObjects = [
    ...scenario.recommendedObjectIds,
    ...scenario.riskyObjectIds,
    ...scenario.neutralObjectIds
  ].map(id => getObjectById(id)).filter(Boolean);

  const selectedObjectsData = selectedObjects.map(id => getObjectById(id)).filter(Boolean);

  if (showOutcome && outcome) {
    return (
      <div className="min-h-screen bg-black py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="mx-auto max-w-4xl">
            <Breadcrumbs items={[{ label: t("playbook.title"), href: "/playbook" }, { label: t(`playbook.scenarios.${scenario.id}.title`) || scenario.title }]} />
            
            <button
              onClick={() => setShowOutcome(false)}
              className="mb-8 text-white/70 hover:text-white transition"
            >
              {t("ui.buttons.backToSelection")}
            </button>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-8"
            >
              <div>
                <h1 className="mb-4 text-5xl font-bold text-white">
                  {t(`playbook.scenarios.${scenario.id}.outcomes.${outcome.id}.title`) || outcome.title}
                </h1>
                <p className="text-xl text-white/70">
                  {t(`playbook.scenarios.${scenario.id}.title`) || scenario.title}
                </p>
              </div>

              {/* Storyline */}
              <div className="rounded-xl border border-white/15 bg-white/5 p-8">
                <h2 className="mb-4 text-2xl font-semibold text-white">{t("playbook.whatHappened")}</h2>
                <p className="text-white/80 leading-relaxed whitespace-pre-line">
                  {t(`playbook.scenarios.${scenario.id}.outcomes.${outcome.id}.description`) || outcome.description}
                </p>
              </div>

              {/* Metrics */}
              <div className="rounded-xl border border-white/15 bg-white/5 p-8">
                <h2 className="mb-6 text-2xl font-semibold text-white">{t("playbook.outcomeMetrics")}</h2>
                <div className="grid gap-4 md:grid-cols-2">
                  {Object.entries(outcome.metrics).map(([key, value]) => {
                    const metricLabel = t(`playbook.metrics.${key}`) || key.replace(/([A-Z])/g, ' $1').trim();
                    return (
                      <div key={key}>
                        <div className="mb-2 flex items-center justify-between text-sm">
                          <span className="text-white/70 capitalize">{displayLabel}</span>
                          <span className={`font-semibold ${value > 0 ? 'text-green-400' : value < 0 ? 'text-red-400' : 'text-white/60'}`}>
                            {value > 0 ? '+' : ''}{value}
                          </span>
                        </div>
                        <div className="h-2 overflow-hidden rounded-full bg-white/10">
                          <div
                            className={`h-full transition-all ${
                              value > 0 ? 'bg-green-500' : value < 0 ? 'bg-red-500' : 'bg-white/20'
                            }`}
                            style={{ width: `${Math.abs(value) * 20}%` }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* What Worked */}
              {outcome.whatWorked.length > 0 && (
                <div className="rounded-xl border border-green-500/30 bg-green-500/10 p-8">
                  <h2 className="mb-4 text-2xl font-semibold text-green-300">{t("playbook.whatWorked")}</h2>
                  <ul className="space-y-2">
                    {outcome.whatWorked.map((item, i) => {
                      const translated = t(`playbook.scenarios.${scenario.id}.outcomes.${outcome.id}.whatWorked.${i}`);
                      const displayText = translated !== `playbook.scenarios.${scenario.id}.outcomes.${outcome.id}.whatWorked.${i}` ? translated : item;
                      return (
                        <li key={i} className="flex items-start gap-3 text-white/90">
                          <span className="mt-1 text-green-400">✓</span>
                          <span>{displayText}</span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              )}

              {/* What Backfired */}
              {outcome.whatBackfired.length > 0 && (
                <div className="rounded-xl border border-red-500/30 bg-red-500/10 p-8">
                  <h2 className="mb-4 text-2xl font-semibold text-red-300">{t("playbook.whatBackfired")}</h2>
                  <ul className="space-y-2">
                    {outcome.whatBackfired.map((item, i) => {
                      const translated = t(`playbook.scenarios.${scenario.id}.outcomes.${outcome.id}.whatBackfired.${i}`);
                      const displayText = translated !== `playbook.scenarios.${scenario.id}.outcomes.${outcome.id}.whatBackfired.${i}` ? translated : item;
                      return (
                        <li key={i} className="flex items-start gap-3 text-white/90">
                          <span className="mt-1 text-red-400">✗</span>
                          <span>{displayText}</span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              )}

              {/* Follow-up Questions */}
              <div className="rounded-xl border border-white/15 bg-white/5 p-8">
                <h2 className="mb-4 text-2xl font-semibold text-white">{t("playbook.questionsToConsider")}</h2>
                <ul className="space-y-3">
                  {outcome.followUpQuestions.map((q, i) => {
                    const translated = t(`playbook.scenarios.${scenario.id}.outcomes.${outcome.id}.questions.${i}`);
                    const displayText = translated !== `playbook.scenarios.${scenario.id}.outcomes.${outcome.id}.questions.${i}` ? translated : q;
                    return (
                      <li key={i} className="text-white/80 italic">"{displayText}"</li>
                    );
                  })}
                </ul>
              </div>

              {/* Suggested Objects */}
              {outcome.suggestedObjects.length > 0 && (
                <div className="rounded-xl border border-white/15 bg-white/5 p-8">
                  <h2 className="mb-4 text-2xl font-semibold text-white">{t("playbook.whatYouMightTryNext")}</h2>
                  <div className="grid gap-4 md:grid-cols-2">
                    {outcome.suggestedObjects.map(objId => {
                      const obj = getObjectById(objId);
                      if (!obj) return null;
                      return (
                        <Link
                          key={objId}
                          href={`/objects/${obj.slug}`}
                          className="rounded-lg border border-white/10 bg-white/5 p-4 transition hover:border-white/20 hover:bg-white/10"
                        >
                          <div className="relative mb-3 h-32 overflow-hidden rounded-lg">
                            <ImageWithFallback object={obj} className="h-full w-full" aspectRatio="square" />
                          </div>
                          <h3 className="mb-2 font-semibold text-white">{obj.title}</h3>
                          <p className="text-sm text-white/70 line-clamp-2">
                            {obj.didactics?.whyItMatters?.slice(0, 150) || obj.shortLabel}
                          </p>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Actions */}
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => {
                    setShowOutcome(false);
                    setSelectedObjects([]);
                  }}
                  className="rounded-lg border border-white/20 bg-white/5 px-6 py-3 font-medium text-white transition hover:bg-white/10"
                >
                  {t("playbook.tryDifferentPlan")}
                </button>
                <Link
                  href="/playbook"
                  className="rounded-lg border border-cyan-500/30 bg-cyan-500/20 px-6 py-3 font-medium text-white transition hover:bg-cyan-500/30"
                >
                  {t("playbook.chooseAnotherScenario")}
                </Link>
                <Link
                  href="/lab"
                  className="rounded-lg border border-purple-500/30 bg-purple-500/20 px-6 py-3 font-medium text-white transition hover:bg-purple-500/30"
                >
                  {t("ui.buttons.exploreLabModules")}
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="mx-auto max-w-4xl">
          <Breadcrumbs items={[{ label: "Playbook", href: "/playbook" }, { label: scenario.title }]} />
          
          <button
            onClick={() => router.push("/playbook")}
            className="mb-8 text-white/70 hover:text-white transition"
          >
            {t("playbook.backToScenarios")}
          </button>

          <h1 className="mb-4 text-5xl font-bold text-white">
            {t(`playbook.scenarios.${scenario.id}.title`) || scenario.title}
          </h1>
          <p className="mb-2 text-xl text-white/70">
            {t(`playbook.scenarios.${scenario.id}.subtitle`) || scenario.subtitle}
          </p>
          <p className="mb-12 text-white/60 leading-relaxed">
            {t(`playbook.scenarios.${scenario.id}.description`) || scenario.description}
          </p>

          <div className="mb-8 rounded-xl border border-white/15 bg-white/5 p-6">
            <h2 className="mb-4 text-2xl font-semibold text-white">{t("playbook.selectObjects")}</h2>
            <p className="mb-6 text-white/70">
              Choose objects that fit your scenario. {t("playbook.recommended")} objects are highlighted in green, {t("playbook.risky")} choices in red.
            </p>

            <div className="space-y-4">
              {allScenarioObjects.map((obj) => {
                const isSelected = selectedObjects.includes(obj.id);
                const isRecommended = scenario.recommendedObjectIds.includes(obj.id);
                const isRisky = scenario.riskyObjectIds.includes(obj.id);
                const isNeutral = scenario.neutralObjectIds.includes(obj.id);

                return (
                  <motion.div
                    key={obj.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`rounded-xl border p-6 transition cursor-pointer ${
                      isSelected
                        ? isRecommended
                          ? "border-green-500/50 bg-green-500/10"
                          : isRisky
                          ? "border-red-500/50 bg-red-500/10"
                          : "border-cyan-500/50 bg-cyan-500/10"
                        : isRecommended
                        ? "border-green-500/30 bg-green-500/5 hover:border-green-500/50"
                        : isRisky
                        ? "border-red-500/30 bg-red-500/5 hover:border-red-500/50"
                        : "border-white/15 bg-white/5 hover:border-white/30"
                    }`}
                    onClick={() => handleToggleObject(obj.id)}
                  >
                    <div className="flex gap-6">
                      <div className="relative h-32 w-32 flex-shrink-0 overflow-hidden rounded-lg">
                        <ImageWithFallback object={obj} className="h-full w-full" aspectRatio="square" />
                      </div>
                      <div className="flex-grow">
                        <div className="mb-2 flex items-center gap-3">
                          <input
                            type="checkbox"
                            checked={isSelected}
                            onChange={() => handleToggleObject(obj.id)}
                            className="h-5 w-5 rounded border-white/20 bg-white/5 text-cyan-500 focus:ring-cyan-500"
                          />
                          <h3 className="text-xl font-semibold text-white">{obj.title}</h3>
                          {isRecommended && (
                            <span className="rounded-full border border-green-500/30 bg-green-500/10 px-2 py-1 text-xs text-green-300">
                              {t("playbook.recommended")}
                            </span>
                          )}
                          {isRisky && (
                            <span className="rounded-full border border-red-500/30 bg-red-500/10 px-2 py-1 text-xs text-red-300">
                              {t("playbook.risky")}
                            </span>
                          )}
                        </div>
                        <p className="mb-3 text-white/70">{obj.shortLabel || obj.description}</p>
                        <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                          <p className="text-sm text-white/80 leading-relaxed">
                            {isRecommended && "This object fits your scenario well. "}
                            {isRisky && "This object might be overkill or create problems. "}
                            {obj.didactics?.specificUseCases?.[0] || 
                             `This object relates to ${obj.tags.join(", ").toLowerCase()}.`}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {selectedObjects.length >= 2 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-8"
              >
                <button
                  onClick={handleSeeOutcome}
                  className="w-full rounded-xl border border-cyan-500/30 bg-cyan-500/20 px-8 py-4 text-lg font-semibold text-white transition hover:bg-cyan-500/30"
                >
                  {t("playbook.seeOutcome")}
                </button>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

