// Exhibits - 3 cross-gallery exhibits

import type { Exhibit } from "./types";

const EXHIBITS_DATA: Exhibit[] = [
  {
    id: "quantified-athlete",
    title: "The Quantified Athlete",
    subtitle: "When training becomes a dashboard",
    durationEstimate: "6–8 min",
    coverImageSearchQuery: "athlete wearable data dashboard",
    intro: "Focus on how measurement tools changed what athletes optimize—and how they interpret their bodies.",
    stopIds: [
      "heuer-stopwatch-1960s",
      "polar-hrm-1980s",
      "srm-power-meter",
      "fitbit-tracker",
    ],
    galleryIds: ["origins-icons", "data-motion-body"],
    learningGoals: [
      "Explain why measurement changes behavior",
      "Compare internal vs external metrics",
      "Recognize data's limits",
    ],
    reflectionQuestion: "What metric would you refuse to track—and why?",
  },
  {
    id: "speed-shoes-rules",
    title: "Speed, Shoes, and Rules",
    subtitle: "Design as advantage—and the fairness fight",
    durationEstimate: "6–8 min",
    coverImageSearchQuery: "sprint spikes racing shoes track",
    intro: "Tracks the evolution from spikes and blocks to carbon-plated racing—then asks where rules should draw lines.",
    stopIds: [
      "track-spikes-vintage",
      "starting-blocks-modern",
      "nike-vaporfly",
      "vicon-mocap-markers",
    ],
    galleryIds: ["origins-icons", "recovery-ethics-future", "data-motion-body"],
    learningGoals: [
      "Show how design shapes technique",
      "Explain why regulation exists",
      "Frame fairness across eras",
    ],
    reflectionQuestion: "Should sport reward the best body, the best tool, or the best system?",
  },
  {
    id: "recovery-as-technology",
    title: "Recovery as Technology",
    subtitle: "From rest to intervention",
    durationEstimate: "6–8 min",
    coverImageSearchQuery: "recovery tools compression boots cryotherapy",
    intro: "Explores the recovery economy—devices, rituals, promises—and how we judge what 'works.'",
    stopIds: [
      "leather-medicine-ball-early",
      "normatec-boots",
      "theragun-massage-gun",
      "cryotherapy-chamber",
    ],
    galleryIds: ["origins-icons", "recovery-ethics-future"],
    learningGoals: [
      "Distinguish comfort vs evidence",
      "Explain optimization tradeoffs",
      "Connect recovery to performance culture",
    ],
    reflectionQuestion: "When does recovery become a form of enhancement?",
  },
];

export const EXHIBITS = EXHIBITS_DATA;

export function getExhibit(id: string): Exhibit | undefined {
  return EXHIBITS.find((e) => e.id === id);
}

export function getAllExhibits(): Exhibit[] {
  return EXHIBITS;
}
