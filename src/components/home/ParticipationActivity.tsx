"use client";

import { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { EXHIBITS, GALLERIES, getAllObjects } from "@/data/client";
import { useTranslation } from "@/hooks/useTranslation";

export function ParticipationActivity() {
  const { t } = useTranslation();
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  // Question IDs in order with their option keys
  const questionConfigs = [
    { id: "improvement", optionKeys: ["speed", "technique", "injury", "enjoyment"] },
    { id: "regulation", optionKeys: ["yes", "no", "sometimes", "notSure"] },
    { id: "measurement", optionKeys: ["improves", "limits", "both", "neither"] },
    { id: "recovery", optionKeys: ["measurableAdvantage", "expensive", "beyondNatural", "alwaysNatural"] },
    { id: "access", optionKeys: ["elite", "everyone", "thoseWhoAfford", "depends"] },
  ];
  
  // Get translated question data
  const getQuestionData = (config: { id: string; optionKeys: string[] }) => {
    return {
      id: config.id,
      title: t(`questionnaire.questions.${config.id}.title`),
      prompt: t(`questionnaire.questions.${config.id}.prompt`),
      options: config.optionKeys.map(key => t(`questionnaire.questions.${config.id}.options.${key}`)),
      whyItMattersHeading: t(`questionnaire.questions.${config.id}.whyThisMattersHeading`),
      whyItMattersText: t(`questionnaire.questions.${config.id}.whyThisMattersText`),
    };
  };
  
  const questions = questionConfigs.map(config => getQuestionData(config));

  const handleAnswer = (questionIndex: number, answerIndex: number) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[questionIndex] = answerIndex;
    setSelectedAnswers(newAnswers);
    
    if (questionIndex < questions.length - 1) {
      setCurrentQuestionIndex(questionIndex + 1);
    } else {
      setTimeout(() => setShowResults(true), 500);
    }
  };

  // Calculate profile dimensions
  const profile = useMemo(() => {
    if (selectedAnswers.length < questions.length) return null;

    // Measurement-first (0,2) vs Feel-first (1,3)
    const measurementScore = [0, 2].includes(selectedAnswers[2] || -1) ? 1 : 0;
    
    // Innovation-optimist (1,3) vs Caution-first (0,2)
    const innovationScore = [1, 3].includes(selectedAnswers[1] || -1) ? 1 : 0;
    
    // Fairness-first (0,2) vs Progress-first (1,3)
    const fairnessScore = [0, 2].includes(selectedAnswers[1] || -1) || [0, 2].includes(selectedAnswers[4] || -1) ? 1 : 0;

    let title = "The Balanced Thinker";
    let bullets: string[] = [];
    let reflectivePrompt = "If you changed one value, what would it be?";

    if (measurementScore === 1 && innovationScore === 1 && fairnessScore === 0) {
      title = "The Measured Optimizer";
      bullets = [
        "You see data and innovation as tools for progress",
        "You prioritize optimization and measurable outcomes",
        "You're less concerned about fairness constraints"
      ];
      reflectivePrompt = "What might be lost when we optimize for numbers alone?";
    } else if (measurementScore === 0 && innovationScore === 0 && fairnessScore === 1) {
      title = "The Skeptical Traditionalist";
      bullets = [
        "You value fairness and tradition over innovation",
        "You're cautious about technology's impact on sport",
        "You prioritize human skill over measurable gains"
      ];
      reflectivePrompt = "What innovations might actually make sport more fair?";
    } else if (measurementScore === 1 && fairnessScore === 1) {
      title = "The Ethical Measurer";
      bullets = [
        "You value data but recognize its limits",
        "You want innovation that serves fairness",
        "You see measurement as a tool, not a goal"
      ];
      reflectivePrompt = "How can we measure what matters without losing what can't be measured?";
    } else {
      title = "The Nuanced Observer";
      bullets = [
        "You recognize that these questions have no simple answers",
        "You see both benefits and tradeoffs in innovation",
        "You value context over absolutes"
      ];
      reflectivePrompt = "What specific innovation would make you change your mind?";
    }

    return { title, bullets, reflectivePrompt };
  }, [selectedAnswers]);

  // Generate recommendations
  const recommendations = useMemo(() => {
    if (!profile) return null;

    const allObjects = getAllObjects();
    const allExhibits = EXHIBITS;
    const allGalleries = GALLERIES;

    // Suggest based on profile
    let suggestedExhibit = allExhibits[0];
    let suggestedGallery = allGalleries[0];
    let suggestedObjects = allObjects.slice(0, 2);

    if (profile.title === "The Measured Optimizer") {
      suggestedExhibit = allExhibits.find(e => e.id === "quantified-athlete") || allExhibits[0];
      suggestedGallery = allGalleries.find(g => g.id === "data-motion-body") || allGalleries[0];
      suggestedObjects = allObjects.filter(o => o.galleryId === "data-motion-body").slice(0, 2);
    } else if (profile.title === "The Skeptical Traditionalist") {
      suggestedExhibit = allExhibits.find(e => e.id === "speed-shoes-rules") || allExhibits[0];
      suggestedGallery = allGalleries.find(g => g.id === "origins-icons") || allGalleries[0];
      suggestedObjects = allObjects.filter(o => o.galleryId === "origins-icons").slice(0, 2);
    } else if (profile.title === "The Ethical Measurer") {
      suggestedExhibit = allExhibits.find(e => e.id === "recovery-as-technology") || allExhibits[0];
      suggestedGallery = allGalleries.find(g => g.id === "recovery-ethics-future") || allGalleries[0];
      suggestedObjects = allObjects.filter(o => o.galleryId === "recovery-ethics-future").slice(0, 2);
    }

    return {
      exhibit: suggestedExhibit,
      gallery: suggestedGallery,
      objects: suggestedObjects.length >= 2 ? suggestedObjects : allObjects.slice(0, 2),
    };
  }, [profile]);

  // Save to localStorage
  useEffect(() => {
    if (showResults && typeof window !== "undefined") {
      try {
        localStorage.setItem("questionnaireAnswers", JSON.stringify(selectedAnswers));
      } catch (e) {
        // Ignore
      }
    }
  }, [showResults, selectedAnswers]);

  if (showResults && profile && recommendations) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-2xl border border-white/15 bg-white/5 p-8"
      >
        <h3 className="mb-4 text-3xl font-bold">Your Result: {profile.title}</h3>
        
        <div className="mb-6 space-y-4">
          <h4 className="text-xl font-semibold">What Your Answers Suggest</h4>
          <ul className="space-y-2">
            {profile.bullets.map((bullet, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-1 text-cyan-400">•</span>
                <span className="text-white/80 leading-relaxed">{bullet}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mb-6 rounded-xl border border-white/10 bg-white/5 p-6">
          <h4 className="mb-2 text-lg font-semibold">Reflective Prompt</h4>
          <p className="text-white/80 leading-relaxed">{profile.reflectivePrompt}</p>
        </div>

        <div className="mb-6 space-y-4">
          <h4 className="text-xl font-semibold">Recommended Pathways</h4>
          <div className="grid gap-4 md:grid-cols-2">
            {recommendations.exhibit && (
              <Link
                href={`/exhibits/${recommendations.exhibit.id}`}
                className="rounded-xl border border-white/15 bg-white/5 p-4 transition hover:border-cyan-400/50 hover:bg-cyan-500/10"
              >
                <div className="mb-2 text-sm font-medium text-cyan-400">Exhibit</div>
                <h5 className="mb-2 font-semibold text-white">{recommendations.exhibit.title}</h5>
                <p className="text-sm text-white/70 line-clamp-2">{recommendations.exhibit.intro}</p>
              </Link>
            )}
            {recommendations.gallery && (
              <Link
                href={`/galleries/${recommendations.gallery.id}`}
                className="rounded-xl border border-white/15 bg-white/5 p-4 transition hover:border-cyan-400/50 hover:bg-cyan-500/10"
              >
                <div className="mb-2 text-sm font-medium text-cyan-400">Gallery</div>
                <h5 className="mb-2 font-semibold text-white">{recommendations.gallery.title}</h5>
                <p className="text-sm text-white/70 line-clamp-2">{recommendations.gallery.blurb}</p>
              </Link>
            )}
            {recommendations.objects.map((obj) => (
              <Link
                key={obj.id}
                href={`/objects/${obj.slug}`}
                className="rounded-xl border border-white/15 bg-white/5 p-4 transition hover:border-cyan-400/50 hover:bg-cyan-500/10"
              >
                <div className="mb-2 text-xs text-white/60">{obj.dateLabel}</div>
                <h5 className="mb-2 font-semibold text-white">{obj.title}</h5>
                <p className="text-sm text-white/70 line-clamp-2">{obj.shortLabel || obj.description}</p>
              </Link>
            ))}
          </div>
        </div>

        <button
          onClick={() => {
            setSelectedAnswers([]);
            setShowResults(false);
            setCurrentQuestionIndex(0);
          }}
          className="rounded-lg border border-white/20 bg-white/5 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/10"
        >
          Retake Questionnaire
        </button>
      </motion.div>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="rounded-2xl border border-white/15 bg-white/5 p-8">
      <h3 className="mb-2 text-2xl font-bold">{t("questionnaire.sectionTitle")}</h3>
      <p className="mb-6 text-white/70">
        {t("questionnaire.sectionSubtitle")}
      </p>
      
      <div className="space-y-6">
        <div className="space-y-3">
          <div className="flex items-center justify-between mb-2">
            <div className="text-sm font-medium text-white/90">
              {currentQuestion.title}
            </div>
            <div className="text-xs text-white/60">
              {t("questionnaire.progressLabel", { count: selectedAnswers.filter(a => a !== undefined).length })}
            </div>
          </div>
          <div className="text-lg font-medium text-white">
            {currentQuestion.prompt}
          </div>
          <div className="space-y-2">
            {currentQuestion.options.map((option, oIndex) => (
              <button
                key={oIndex}
                onClick={() => handleAnswer(currentQuestionIndex, oIndex)}
                className={`w-full rounded-lg border p-4 text-left text-sm transition ${
                  selectedAnswers[currentQuestionIndex] === oIndex
                    ? "border-cyan-500/50 bg-cyan-500/20 text-cyan-300"
                    : "border-white/15 bg-white/5 text-white/80 hover:border-white/30 hover:bg-white/10"
                }`}
              >
                {option}
              </button>
            ))}
          </div>
          <div className="mt-3 rounded-lg border border-white/10 bg-white/5 p-3">
            <div className="text-xs font-medium text-cyan-400 mb-1">{currentQuestion.whyItMattersHeading}</div>
            <div className="text-xs text-white/70">{currentQuestion.whyItMattersText}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
