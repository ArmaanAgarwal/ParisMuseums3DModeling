// Exhibits - curated mini-tours that pull objects from multiple galleries
// Each exhibit has: title, subtitle, intro, cover image, duration, stops (objects)

export interface Exhibit {
  id: string;
  title: string;
  subtitle: string;
  intro: string; // 1-2 paragraphs
  coverImage?: string;
  durationEstimate: string; // e.g., "6-8 min"
  stopIds: string[]; // Object IDs in order
  galleryIds: string[]; // Which galleries this exhibit spans
}

export const EXHIBITS: Exhibit[] = [
  {
    id: "quantified-athlete",
    title: "The Quantified Athlete",
    subtitle: "Measurement + Performance",
    intro: "How did performance become data? This exhibit traces the evolution from subjective observation to objective measurement. From early timing devices to modern sensors, see how technology transformed our understanding of athletic achievement. Each object represents a breakthrough moment when new measurement capabilities revealed previously invisible aspects of performance.",
    durationEstimate: "8-10 min",
    stopIds: [
      "heuer-stopwatch-1916",
      "electronic-timing-1968",
      "kistler-force-plate-2015",
      "polar-hr-monitor-1982",
      "garmin-gps-2003",
    ],
    galleryIds: ["origins-icons", "data-motion-body", "recovery-ethics-future"],
  },
  {
    id: "speed-footwear-controversy",
    title: "Speed, Footwear, and Controversy",
    subtitle: "Innovation + Ethics",
    intro: "Footwear has always been at the intersection of performance and identity. This exhibit explores how shoes became both technical tools and cultural symbols—from ancient sandals to modern carbon-plated super shoes. Along the way, innovation sparked debates about fairness, technology limits, and what counts as 'natural' performance. These objects show how equipment design raises fundamental questions about the boundaries of enhancement.",
    durationEstimate: "6-8 min",
    stopIds: [
      "greek-discus",
      "olympic-torch-1936",
      "nike-vaporfly-2017",
    ],
    galleryIds: ["origins-icons", "recovery-ethics-future"],
  },
  {
    id: "recovery-as-technology",
    title: "Recovery as Technology",
    subtitle: "Sleep, Wearables, and Recovery Tools",
    intro: "Recovery is performance. This exhibit shows how rest, sleep, and recovery became measurable and optimizable. From early heart rate monitoring to modern sleep trackers and recovery wearables, see how technology transformed recovery from passive rest into active performance enhancement. These objects demonstrate that recovery is not the absence of training—it's a technology in itself.",
    durationEstimate: "7-9 min",
    stopIds: [
      "polar-hr-monitor-1982",
      "vr-training-pod-2023",
      "ai-coach-2024",
      "garmin-gps-2003",
    ],
    galleryIds: ["data-motion-body", "recovery-ethics-future"],
  },
];

export function getExhibit(id: string): Exhibit | undefined {
  return EXHIBITS.find((e) => e.id === id);
}

export function getAllExhibits(): Exhibit[] {
  return EXHIBITS;
}

