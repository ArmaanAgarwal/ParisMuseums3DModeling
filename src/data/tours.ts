// Tour data - curated stops with reflection prompts and feedback

import { MuseumObject } from "./types";
import { getAllObjects, getObjectsByGallery } from "./client";

export interface TourStop {
  type: "object" | "context";
  objectId?: string; // Required if type === "object"
  contextType?: "problem" | "tradeoff"; // Required if type === "context"
  title: string;
  content: string; // 5-8 sentences for context stops, not used for object stops
  reflectionPrompt?: string; // For context stops
  reflectionChoices?: Array<{
    value: string;
    feedback: string;
  }>;
  // Legacy fields for object stops (derived from object data)
  whyItMatters?: string;
  interactionType?: "choice" | "slider";
  choices?: Array<{ 
    label: string; 
    feedback: string;
    thinkDeeper?: string;
    nextObjects?: string[];
  }>;
  sliderConfig?: {
    min: number;
    max: number;
    labels: string[];
    feedbackRanges: Array<{ 
      min: number; 
      max: number; 
      feedback: string;
      thinkDeeper?: string;
      nextObjects?: string[];
    }>;
  };
}

export interface TourConfig {
  id: string;
  title: string;
  description: string;
  estimatedTime: string;
  tags: string[];
  stops: TourStop[];
}

// Legacy function - not used, kept for reference
// Object stops are created directly in getTourAllConfig and getGalleryTourConfig
function createTourStop(
  objectId: string,
  title: string,
  whyItMatters: string,
  reflectionPrompt: string,
  interactionType: "choice" | "slider" = "choice",
  choices?: Array<{ label: string; feedback: string }>,
  sliderConfig?: TourStop["sliderConfig"]
): TourStop {
  return {
    type: "object",
    objectId,
    title,
    content: "", // Not used for object stops, but required by interface
    whyItMatters,
    reflectionPrompt,
    interactionType,
    choices,
    sliderConfig,
  };
}

// Tour All Galleries - 10 stops: (1 context + 3 objects) per gallery + 1 final context = 10
export function getTourAllConfig(): TourConfig {
  const objects = getAllObjects();
  const origins = getObjectsByGallery("origins-icons");
  const data = getObjectsByGallery("data-motion-body");
  const recovery = getObjectsByGallery("recovery-ethics-future");

  const stops: TourStop[] = [
    // Origins gallery: 1 context + 3 objects
    {
      type: "context",
      contextType: "problem",
      title: "The Problem: Measuring Performance",
      content: "Before standardized measurement, sport was inconsistent. Times varied by venue, officials, and era. Records couldn't be compared. Athletes trained by feel, not data. The problem wasn't just technical—it was about authority. Who decides what 'fast' means? How do we make performance comparable across time and place? These early innovations solved a fundamental question: how to make sport measurable, comparable, and fair. Pay attention to how the stopwatch transformed not just timing, but the very language of performance.",
      reflectionPrompt: "What problem should innovation solve first?",
      reflectionChoices: [
        { value: "Fairness and access", feedback: "You prioritize making sport more equitable. Innovation should solve problems of exclusion and inequality first." },
        { value: "Performance and optimization", feedback: "You value pushing limits. Innovation should solve problems of measurement and optimization first." },
        { value: "Understanding and insight", feedback: "You want to understand how things work. Innovation should solve problems of visibility and knowledge first." },
      ],
    },
    ...origins.slice(0, 3).map((obj) => ({
      type: "object" as const,
      objectId: obj.id,
      title: obj.title,
      content: "", // Not used for object stops, but required by interface
    })),
    
    // Data gallery: 1 context + 3 objects
    {
      type: "context",
      contextType: "problem",
      title: "The Problem: Making the Invisible Visible",
      content: "Once basic timing existed, a new problem emerged: how to measure what happens inside the body. External time wasn't enough. Athletes and coaches wanted to understand forces, heart rates, biomechanics—the invisible mechanics of performance. The problem was making the invisible visible. How do you measure effort, not just outcome? How do you optimize what you can't see? Notice how heart rate monitors and power meters changed training from guesswork to precision.",
      reflectionPrompt: "What problem should innovation solve first?",
      reflectionChoices: [
        { value: "Fairness and access", feedback: "You prioritize making sport more equitable. Innovation should solve problems of exclusion and inequality first." },
        { value: "Performance and optimization", feedback: "You value pushing limits. Innovation should solve problems of measurement and optimization first." },
        { value: "Understanding and insight", feedback: "You want to understand how things work. Innovation should solve problems of visibility and knowledge first." },
      ],
    },
    ...data.slice(0, 3).map((obj) => ({
      type: "object" as const,
      objectId: obj.id,
      title: obj.title,
      content: "", // Not used for object stops, but required by interface
    })),
    
    // Recovery gallery: 1 context + 3 objects
    {
      type: "context",
      contextType: "tradeoff",
      title: "The Tradeoff: Tech vs Fairness",
      content: "As performance became more measurable, a new problem appeared: recovery. Training creates damage. How do you know when to push and when to rest? The problem wasn't just physical—it was about access. Who gets recovery technology? When does recovery become enhancement? The line between natural and technological recovery blurred. Consider how compression boots and massage guns create advantages for those who can afford them.",
      reflectionPrompt: "Which tradeoff matters most to you?",
      reflectionChoices: [
        { value: "Precision vs access", feedback: "You're concerned with equity. Precision matters, but not if it excludes people." },
        { value: "Data vs intuition", feedback: "You see value in both measurement and human judgment." },
        { value: "Natural vs enhanced", feedback: "You're interested in where the line between natural and enhanced performance should be drawn." },
      ],
    },
    ...recovery.slice(0, 3).map((obj) => ({
      type: "object" as const,
      objectId: obj.id,
      title: obj.title,
      content: "", // Not used for object stops, but required by interface
    })),
  ];

  return {
    id: "all",
    title: "Tour All Innovations",
    description: "Experience the complete museum journey across all three galleries",
    estimatedTime: "20-25 min",
    tags: ["Complete", "Overview", "All Themes"],
    stops,
  };
}

// Single Gallery Tours - 5-6 stops (all objects + 1-2 context stops)
export function getGalleryTourConfig(galleryId: string): TourConfig | null {
  const objects = getObjectsByGallery(galleryId);
  if (objects.length === 0) return null;

  const galleryNames: Record<string, string> = {
    "origins-icons": "Origins & Icons",
    "data-motion-body": "Data, Motion & Body",
    "recovery-ethics-future": "Recovery, Ethics & Future",
  };

  const contextStops: TourStop[] = [
    {
      type: "context",
      contextType: "problem",
      title: galleryId === "origins-icons" 
        ? "The Problem: Measuring Performance"
        : galleryId === "data-motion-body"
        ? "The Problem: Making the Invisible Visible"
        : "The Problem: Recovery and Access",
      content: galleryId === "origins-icons" 
        ? "Before standardized measurement, sport was inconsistent. Times varied by venue, officials, and era. Records couldn't be compared. Athletes trained by feel, not data. The problem wasn't just technical—it was about authority. Who decides what 'fast' means? How do we make performance comparable across time and place? These early innovations solved a fundamental question: how to make sport measurable, comparable, and fair. Pay attention to how the stopwatch transformed not just timing, but the very language of performance."
        : galleryId === "data-motion-body"
        ? "Once basic timing existed, a new problem emerged: how to measure what happens inside the body. External time wasn't enough. Athletes and coaches wanted to understand forces, heart rates, biomechanics—the invisible mechanics of performance. The problem was making the invisible visible. How do you measure effort, not just outcome? How do you optimize what you can't see? Notice how heart rate monitors and power meters changed training from guesswork to precision."
        : "As performance became more measurable, a new problem appeared: recovery. Training creates damage. How do you know when to push and when to rest? The problem wasn't just physical—it was about access. Who gets recovery technology? When does recovery become enhancement? The line between natural and technological recovery blurred. Consider how compression boots and massage guns create advantages for those who can afford them.",
      reflectionPrompt: "What problem should innovation solve first?",
      reflectionChoices: [
        { value: "Fairness and access", feedback: "You prioritize making sport more equitable. Innovation should solve problems of exclusion and inequality first." },
        { value: "Performance and optimization", feedback: "You value pushing limits. Innovation should solve problems of measurement and optimization first." },
        { value: "Understanding and insight", feedback: "You want to understand how things work. Innovation should solve problems of visibility and knowledge first." },
      ],
    },
    {
      type: "context",
      contextType: "tradeoff",
      title: "The Tradeoff: Tech vs Fairness",
      content: galleryId === "origins-icons"
        ? "Every innovation creates tradeoffs. Standardization makes competition fairer, but it also makes it more uniform. Mechanical precision replaces human judgment, which some see as progress and others as loss. Early tools were expensive, creating access barriers even as they made timing more objective. The tradeoff is clear: precision versus access, objectivity versus human insight, standardization versus diversity of expression."
        : galleryId === "data-motion-body"
        ? "Measurement creates tradeoffs. Data enables optimization, but it can also narrow what counts as success. When performance becomes numbers, athletes might optimize for metrics rather than actual performance. The tradeoff: visibility versus simplicity, optimization versus intuition, data versus experience. Every tool that makes the invisible visible also changes what we value."
        : "Recovery technology creates tradeoffs. Better recovery enables more training, but it also raises questions about enhancement. The tradeoff: natural versus technological, access versus advantage, recovery versus performance enhancement. When does recovery become something else entirely?",
      reflectionPrompt: "Which tradeoff matters most to you?",
      reflectionChoices: [
        { value: "Precision vs access", feedback: "You're concerned with equity. Precision matters, but not if it excludes people." },
        { value: "Data vs intuition", feedback: "You see value in both measurement and human judgment." },
        { value: "Natural vs enhanced", feedback: "You're interested in where the line between natural and enhanced performance should be drawn." },
      ],
    },
  ];

  const objectStops: TourStop[] = objects.map((obj) => ({
    type: "object" as const,
    objectId: obj.id,
    title: obj.title,
    content: "", // Not used for object stops, but required by interface
  }));

  // Structure: context stop, all objects, context stop (if 4+ objects, otherwise just 1 context)
  const stops: TourStop[] = objects.length >= 4
    ? [contextStops[0], ...objectStops, contextStops[1]]
    : [contextStops[0], ...objectStops];

  return {
    id: galleryId,
    title: galleryNames[galleryId] || galleryId,
    description: `Explore ${galleryNames[galleryId] || galleryId} through ${stops.length} curated stops`,
    estimatedTime: stops.length >= 6 ? "15-18 min" : "12-15 min",
    tags: ["Focused", "Deep Dive", galleryNames[galleryId] || galleryId],
    stops,
  };
}

