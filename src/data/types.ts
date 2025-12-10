// Core types for the museum data model

export type LevelId = "l1" | "l2" | "l3";

export interface Level {
  id: LevelId;
  title: string;
  themeColor: string;
  summary: string;
  learningGoals: string[];
  levelIntro: string; // Curatorial voice introduction
  keyQuestions: string[]; // 3-6 key questions
  spatialLogic: string; // How zones connect
  signatureExperience: string; // What makes this level special
  accessibilityNotes: string; // Clarity, pacing, interpretation
}

// Gallery replaces Zone
export interface Gallery {
  id: string;
  title: string;
  blurb: string; // Short description
  themeBullets: string[]; // Theme keywords
  heroImage?: string;
  accent: "cyan" | "purple" | "amber" | "green" | "red" | "blue";
  // Legacy fields
  summary?: string;
  curatorialBlurb?: string;
}

export interface Exhibit {
  id: string;
  title: string;
  subtitle: string;
  intro: string; // 1-2 paragraphs
  coverImage?: string;
  coverImageSearchQuery?: string; // Search query for finding cover image
  durationEstimate: string; // e.g., "6-8 min"
  stopIds: string[]; // Object IDs in order
  galleryIds: string[]; // Which galleries this exhibit spans
  learningGoals: string[]; // What visitors should learn
  reflectionQuestion: string; // Question for reflection at end
  // Legacy fields for backward compatibility
  zoneId?: string;
  thesis?: string;
  wallText?: string;
  keyQuestions?: string[];
  objectIds?: string[];
  whyThisExhibit?: string;
  whatToNotice?: string[];
  interactionType?: "compare" | "timeline" | "try-it";
  interactionConfig?: {
    compare?: {
      optionA: { label: string; description: string; explanation: string };
      optionB: { label: string; description: string; explanation: string };
    };
    timeline?: {
      events: Array<{ year: number; label: string; description: string }>;
    };
    tryIt?: {
      type: "reaction-time" | "stride-frequency" | "heart-rate-zone" | "force-meter";
      title: string;
    };
  };
}

export interface MuseumObject {
  id: string;
  slug: string;
  galleryId: string; // New: replaces zoneId/exhibitId
  exhibitId?: string; // Keep for backward compatibility
  title: string;
  subtitle: string;
  dateLabel: string;
  year?: number; // New: simplified year
  yearNumber?: number; // Keep for backward compatibility
  tags: string[];
  shortLabel?: string; // New: 1 sentence summary
  longDescription?: string; // New: full description
  imagePath?: string; // New: direct image path
  imageUrl?: string; // New: full image URL
  imageSearchQuery?: string; // Search query for finding images
  sourceName?: string; // New: source institution
  sourceUrl?: string; // New: optional source URL
  debatePrompt?: string; // Question visitors answer
  measurementAngle?: string; // How it quantifies/changes behavior
  designAngle?: string; // How tech shapes movement/values
  yearOrEra?: string; // Alternative to dateLabel for display
  media: {
    imagePath?: string;
    thumbnailPath?: string;
    imageAlt?: string;
    imageCredit?: string;
    imageLicense?: string;
    imageSourceUrl?: string;
    imageAuthor?: string;
    imageSource?: string;
    imageKind?: "artifact" | "representative" | "concept";
    imageStatus?: "approved" | "needsReview" | "placeholder";
    attribution?: {
      title?: string;
      institution?: string;
      creator?: string;
      license?: string;
      sourceUrl?: string;
    };
  };
  description: string;
  provenance: string;
  materials: string;
  dimensions: string;
  significance: string;
  whatToNotice: string[];
  relatedObjectIds: string[];
  howItChangedPerformance: string;
  // Museum-specific context
  whyItBelongs?: string;
  whyItMatters?: string;
  
  // Rich didactic content - NEW MODEL
  didactics?: {
    wallLabel?: string; // 1-2 sentences, MUST include concrete detail (time period, sport context, notable usage)
    curatorNote?: string; // 4-7 sentences, personal + interpretive, reveals sports innovation culture (values, incentives, access)
    whereYoudSeeIt?: string[]; // 3-5 bullets: concrete settings (track meets, training facilities, broadcast timing, etc.)
    specificUseCases?: string[]; // 3-5 bullets: concrete instances with where/who/what format
    signatureMoment?: string; // 1 paragraph (3-5 sentences): vivid specific mini-scene
    whyItMatters?: string; // 4-7 sentences, causal + historical: what changed, what came after, why it became standard
    whySignificant?: string; // 4-7 sentences: historical and cultural significance (different from curatorNote)
    signatureDetail?: string; // 1 short "exact" fact-style line, precise and not vague
    debatePrompt?: string; // One strong, specific question (not "is this good or bad?")
    howItWorks?: {
      bullets?: string[];
      paragraph?: string;
    };
    tradeoffs?: string[]; // 3-5 bullets: fairness, access, misuse, injuries, dependency, etc.
    keyTerms?: Array<{ term: string; definition: string }>; // Only if term appears in wallLabel
    sourcesNote?: string; // 1 simple line like: Source: brand history / training archives / museum images
    // Legacy fields for object detail page
    context?: string;
    whatItChanged?: string;
    evidenceAndLimits?: string;
    debateEthics?: string;
    primaryQuestion?: string;
    curatorCallout?: string;
  };
  
  // Enhanced tour content
  tourContent?: {
    reflectionChoices?: Array<{
      value: string; // e.g., "Accuracy matters most", "Context matters most", "Fairness matters most"
      feedback: string; // 4-6 sentences personalized feedback
      followUpQuestion?: string; // 1 sentence to deepen thinking
      lookForThisNext?: string; // Object ID that complicates their view
    }>;
  };
  // Interaction configuration
  interactionType?: "compare" | "timeline" | "try-it" | "quiz" | "form-technique" | "audio-script" | "timing-comparison" | "photo-finish" | "force-curve" | "training-zones" | "drill-selector" | "ai-feedback" | "argument-map" | "map-playback";
  interactionConfig?: {
    compare?: {
      optionA: { label: string; description: string; explanation: string };
      optionB: { label: string; description: string; explanation: string };
    };
    timeline?: {
      events: Array<{ year: number; label: string; description: string }>;
    };
    tryIt?: {
      type: "reaction-time" | "stride-frequency" | "heart-rate-zone" | "force-meter";
      title: string;
    };
    quiz?: {
      questions: Array<{
        question: string;
        options: string[];
        correct: number;
        explanation?: string;
      }>;
    };
    formTechnique?: {
      title: string;
      sections: Array<{
        label: string;
        description: string;
        image?: string;
      }>;
    };
    audioScript?: {
      title: string;
      script: Array<{
        speaker: string;
        text: string;
        timing: number;
      }>;
    };
    timingComparison?: {
      title: string;
      description: string;
      events: Array<{
        name: string;
        duration: number;
      }>;
    };
    photoFinish?: {
      title: string;
      description: string;
      scenarios: Array<{
        label: string;
        description: string;
        actualWinner: string;
        timeDifference: number;
        explanation: string;
      }>;
    };
    forceCurve?: {
      title: string;
      description: string;
      phases: Array<{
        label: string;
        description: string;
        forceValue: number;
        time: number;
      }>;
    };
    trainingZones?: {
      title: string;
      description: string;
      zones: Array<{
        name: string;
        range: string;
        description: string;
        color: string;
      }>;
    };
    drillSelector?: {
      title: string;
      description: string;
      drills: Array<{
        name: string;
        goal: string;
        tradeoff: string;
        benefit: string;
      }>;
    };
    aiFeedback?: {
      title: string;
      description: string;
      feedbackExamples: Array<{
        scenario: string;
        aiResponse: string;
        reward: string;
        question: string;
      }>;
    };
    argumentMap?: {
      title: string;
      description: string;
      positions: Array<{
        stance: string;
        argument: string;
        counterargument: string;
        question: string;
      }>;
    };
    mapPlayback?: {
      title: string;
      description: string;
      route: {
        distance: number;
        time: number;
        averagePace: string;
        elevation: number;
        points: Array<{
          lat: number;
          lng: number;
          pace: string;
          heartRate: number;
        }>;
      };
      measurements: Array<{
        metric: string;
        value: string;
        explanation: string;
      }>;
    };
  };
}

export interface DidacticPanel {
  id: string;
  placement: "tour" | "exhibit" | "object";
  placementId?: string; // tour section id, exhibit id, or object id
  title: string;
  body: string;
  tone: "intro" | "analysis" | "label";
  callouts?: string[];
}

export interface TourChapter {
  id: string;
  title: string;
  anchor: string;
  summary: string;
}

