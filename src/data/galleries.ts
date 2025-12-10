// Gallery data - 3 galleries total

import { Gallery } from "./types";

export const GALLERIES: Gallery[] = [
  {
    id: "origins-icons",
    title: "Origins & Icons",
    blurb: "Foundational moments when performance became public, standardized, and measurable.",
    curatorialBlurb: "This gallery traces how early innovations in sport—from standardized tracks to timing devices—transformed performance from subjective observation to measurable achievement. Each object represents a moment when sport became public, quantifiable, and culturally significant.",
    themeBullets: ["Standardization", "Spectacle", "Early measurement", "Training culture"],
    heroImage: "/galleries/origins-hero.jpg",
    accent: "cyan",
  },
  {
    id: "data-motion-body",
    title: "Data, Motion & Body",
    blurb: "When performance becomes a dataset—sensors, models, biomechanics, and feedback loops.",
    curatorialBlurb: "This gallery explores how sensors, data visualization, and biomechanical analysis transformed performance from intuition to optimization. These objects show how measurement became embedded in training, technique, and the athlete's relationship with their own body.",
    themeBullets: ["Wearables", "Biomechanics", "Quantification", "Feedback systems"],
    heroImage: "/galleries/data-hero.jpg",
    accent: "purple",
  },
  {
    id: "recovery-ethics-future",
    title: "Recovery, Ethics & Future",
    blurb: "Optimization, recovery tech, and the ethical line between advantage and unfairness.",
    curatorialBlurb: "This gallery examines the ethical boundaries of performance enhancement—from recovery technologies to predictive analytics. These objects raise fundamental questions about fairness, access, and what 'natural' performance means in an era of technological intervention.",
    themeBullets: ["Recovery tech", "Enhancement debates", "Fairness", "Future prediction"],
    heroImage: "/galleries/recovery-hero.jpg",
    accent: "amber",
  },
];

export function getGallery(id: string): Gallery | undefined {
  return GALLERIES.find((g) => g.id === id);
}

export function getAllGalleries(): Gallery[] {
  return GALLERIES;
}
