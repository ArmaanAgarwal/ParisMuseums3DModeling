// Legacy Zone type - kept for backward compatibility
// Note: Using Gallery type from types.ts instead
export interface Zone {
  id: string;
  levelId: string;
  title: string;
  summary: string;
  positionOnMap: { x: number; y: number; w: number; h: number };
  zoneIntent: string;
  whatToNotice: string[];
  // Optional interaction properties (for backward compatibility)
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

export const ZONES: Zone[] = [
  {
    id: "gallery-1",
    levelId: "l1",
    title: "Gallery 1: Origins & Icons",
    summary: "How performance first became a public ideal and a measurable practice.",
    positionOnMap: { x: 10, y: 10, w: 40, h: 40 },
    zoneIntent:
      "This gallery shows how performance first became a public ideal and a measurable practice. Four objects demonstrate how early sport turned the body into a repeatable skill, how performance became tied to spectacle and politics, and how measurement began to quantify achievement.",
    whatToNotice: [
      "How early sport standardized competition",
      "The connection between performance and politics",
      "The moment measurement became mechanical",
      "How these principles continue today",
    ],
  },
  {
    id: "gallery-2",
    levelId: "l2",
    title: "Gallery 2: Data, Motion & The Body",
    summary: "The moment performance becomes measurable in new ways.",
    positionOnMap: { x: 55, y: 10, w: 40, h: 40 },
    zoneIntent:
      "This gallery shows the moment performance becomes measurable in new ways. Four objects demonstrate how tiny differences became official facts, how performance became a set of forces, and how measurement moved out of the lab into everyday life.",
    whatToNotice: [
      "How measurement changed fairness",
      "What tools measure and what they miss",
      "How technology changes what counts as improvement",
      "The democratization of performance data",
    ],
  },
  {
    id: "gallery-3",
    levelId: "l3",
    title: "Gallery 3: Futures & Immersion",
    summary: "What happens when performance becomes predictive and immersive.",
    positionOnMap: { x: 10, y: 55, w: 85, h: 40 },
    zoneIntent:
      "This gallery shows what happens when performance becomes predictive and immersive. Four objects raise questions about ethics, access, and what 'human' means in training. Visitors encounter future tools that might change the meaning of achievement.",
    whatToNotice: [
      "How training becomes an environment you can design",
      "Questions about AI authority and human expertise",
      "Debates about technology and fairness",
      "How tracking becomes a lifestyle",
    ],
  },
];

export function getZonesByLevel(levelId: string): Zone[] {
  return ZONES.filter((z) => z.levelId === levelId);
}

export function getZone(id: string): Zone | undefined {
  return ZONES.find((z) => z.id === id);
}
