import { DidacticPanel } from "./types";

export const DIDACTIC_PANELS: DidacticPanel[] = [
  // Tour-level didactics
  {
    id: "tour-intro",
    placement: "tour",
    placementId: "orientation",
    title: "Welcome to the Performance Museum",
    body: "This museum explores the relationship between human achievement and the tools, technologies, and techniques that enable it. Across three levels, you'll discover how our understanding of performance has evolved—from ancient intuitive knowledge to modern data-driven analysis to future immersive technologies. Each level builds on the last, creating a narrative arc that shows how measurement, analysis, and enhancement have transformed human capability.",
    tone: "intro",
    callouts: [
      "Performance optimization is not a modern invention",
      "Data transforms how we understand movement",
      "Technology enables new forms of training and enhancement",
    ],
  },
  {
    id: "tour-arrival",
    placement: "tour",
    placementId: "arrival",
    title: "The Arrival Sequence",
    body: "The museum's approach sequence—axis, gardens, reflecting pool—creates a sense of procession and arrival. This deliberate organization prepares visitors for the ordered, intentional spaces inside. The axis creates direction, the gardens create rhythm, the pool creates pause. Together, they transform the approach into an experience.",
    tone: "intro",
  },
  {
    id: "tour-architecture",
    placement: "tour",
    placementId: "architecture",
    title: "Architectural DNA",
    body: "The museum combines three distinct architectural languages: the Louvre's ordered procession and axis logic, the Pompidou Centre's exposed structural systems, and the grounded materiality of a brick archive wing. This hybrid creates a building that is both ordered and dynamic, both transparent and material, both ceremonial and functional.",
    tone: "intro",
  },
  {
    id: "tour-level-1",
    placement: "tour",
    placementId: "level-1",
    title: "Level 1: Origins & Icons",
    body: "The foundation level explores the historical roots of human performance. Here, you'll encounter the earliest artifacts of performance: ancient equipment, early measurement tools, and iconic objects that represent the beginning of our understanding of human achievement. This level establishes that performance optimization has deep historical roots, showing how ancient civilizations developed sophisticated approaches to physical achievement.",
    tone: "intro",
  },
  {
    id: "tour-level-2",
    placement: "tour",
    placementId: "level-2",
    title: "Level 2: Data, Motion & Body",
    body: "The analytical heart of the museum. Here, performance becomes data. Motion capture systems, sensor arrays, and real-time analysis transform movement into measurable insights. This level feels like a laboratory: clean, technical, focused on measurement and understanding. You can interact with the tools of analysis, seeing how data reveals patterns invisible to the naked eye.",
    tone: "intro",
  },
  {
    id: "tour-level-3",
    placement: "tour",
    placementId: "level-3",
    title: "Level 3: Futures & Immersion",
    body: "The future of performance. This level looks forward, exploring how immersive technologies, AI, and advanced systems will transform how we understand and enhance human capability. The spaces are more open, more experimental, with VR arenas, projection rooms, and a sky gallery. This is where the narrative culminates: not just understanding performance, but imagining its future.",
    tone: "intro",
  },
  {
    id: "tour-didactics",
    placement: "tour",
    placementId: "didactics",
    title: "Didactics & Participation",
    body: "Throughout the museum, you'll encounter wall texts, labels, interactive touchscreens, and participation stations. These didactic materials enhance and clarify the collection, providing context, interpretation, and opportunities for engagement. From 'how to look' prompts to hands-on activities, these elements make the museum accessible and memorable.",
    tone: "intro",
  },
  // Exhibit-level didactics
  {
    id: "exhibit-ancient-athletics",
    placement: "exhibit",
    placementId: "ancient-athletics",
    title: "How to Look at Ancient Athletics",
    body: "When examining ancient athletic equipment, consider: What design choices were made to optimize performance? How did materials and construction respond to biomechanical needs? What can we learn from pre-industrial performance techniques? These artifacts demonstrate that the principles of performance optimization—flexibility, support, efficiency—were understood long before modern science.",
    tone: "analysis",
    callouts: [
      "Look for design choices that enhance movement",
      "Notice how materials respond to performance needs",
      "Consider what ancient athletes understood intuitively",
    ],
  },
  {
    id: "exhibit-measurement",
    placement: "exhibit",
    placementId: "measurement-revolution",
    title: "Understanding the Measurement Revolution",
    body: "The development of precise timing devices transformed performance from subjective observation to objective data. Before precise measurement, performance was understood through comparison. After it, every second mattered. This shift created the possibility of records, of comparison, of the data-driven understanding that defines modern athletics.",
    tone: "analysis",
  },
  {
    id: "exhibit-motion-capture",
    placement: "exhibit",
    placementId: "motion-capture-systems",
    title: "What Motion Capture Reveals",
    body: "Motion capture technology transforms movement into three-dimensional data, revealing patterns invisible to the naked eye. Every joint angle, every acceleration, every micro-adjustment becomes data. This is how we learn what makes performance better, how we find the invisible patterns that separate good from great.",
    tone: "analysis",
  },
  {
    id: "exhibit-ai-coaching",
    placement: "exhibit",
    placementId: "ai-coaching",
    title: "The Future of Performance Coaching",
    body: "AI coaching systems represent the culmination of the data-driven approach to performance. These systems learn from individual athlete patterns, adapt their guidance, and synthesize information from movement, physiology, and performance metrics. This is performance coaching reimagined: personal, immediate, and continuously improving.",
    tone: "analysis",
  },
  // Object-level didactics (sample)
  {
    id: "object-ancient-sandals",
    placement: "object",
    placementId: "ancient-sandals",
    title: "What to Notice",
    body: "These sandals demonstrate sophisticated understanding of foot biomechanics. Notice the minimal sole thickness for ground feel, the flexible construction allowing natural movement, and the secure lacing system for custom fit. The wear patterns indicate athletic use, showing how these sandals were actually worn in competition.",
    tone: "label",
    callouts: [
      "Minimal sole for ground feel",
      "Flexible construction",
      "Secure lacing system",
      "Wear patterns from use",
    ],
  },
];

export function getDidacticsByPlacement(
  placement: "tour" | "exhibit" | "object",
  placementId?: string
): DidacticPanel[] {
  return DIDACTIC_PANELS.filter(
    (d) => d.placement === placement && (!placementId || d.placementId === placementId)
  );
}

