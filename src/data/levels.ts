import { Level, LevelId } from "./types";

export const LEVELS: Level[] = [
  {
    id: "l1",
    title: "Origins & Icons",
    themeColor: "amber",
    summary: "The foundation level explores the historical roots of human performance. From ancient athletic gear to early measurement tools, this floor tells the story of how we began to understand and document physical achievement.",
    learningGoals: [
      "Understand the historical evolution of performance equipment",
      "Recognize how early civilizations approached athletic achievement",
      "See the connection between ancient and modern performance principles",
      "Appreciate how measurement transformed performance culture",
      "Recognize the universality of performance optimization across cultures",
    ],
    levelIntro:
      "Welcome to Origins & Icons, where we begin at the beginning. This level tells a story that spans millennia: how humans first understood performance, how we began to measure it, and how those early insights continue to shape our understanding today. Here, you'll encounter artifacts that predate modern technology but demonstrate sophisticated understanding of biomechanics, training, and competition. The warm amber tones and tactile materials reflect the grounded, historical nature of this level. As you move through these galleries, notice how ancient principles—flexibility, support, standardization—remain central to performance equipment today.",
    keyQuestions: [
      "How did ancient athletes optimize performance without modern technology?",
      "What role did measurement play in transforming performance from ritual to competition?",
      "How did different cultures develop unique approaches to athletic achievement?",
      "What can we learn from pre-industrial performance techniques?",
      "How did the codification of records change the meaning of achievement?",
      "What principles of performance optimization are universal across time and culture?",
    ],
    spatialLogic:
      "The level is organized in a linear progression that mirrors historical chronology. Visitors enter through the Introduction Gallery, which establishes context and timeline. The Artifact Hall forms the central spine, showcasing iconic objects from different eras. The Archive Corner provides depth through documents and records, while the Early Sports zone expands the global perspective. This layout encourages a narrative flow: context → objects → documentation → global traditions.",
    signatureExperience:
      "The signature experience of Level 1 is the tactile encounter with history. Unlike the data-driven levels above, here visitors engage with physical artifacts that can be examined closely. The warm lighting and material textures create an intimate, contemplative atmosphere. Interactive timelines allow visitors to trace the evolution of equipment and measurement, while the Archive Corner offers quiet spaces for reading and reflection. This level establishes the foundation: performance optimization is not a modern invention, but a human constant.",
    accessibilityNotes:
      "Level 1 is designed for clear pacing and interpretation. Wall texts are positioned at comfortable reading heights with high contrast. The linear layout provides clear wayfinding. Interactive elements include tactile replicas for hands-on exploration. Audio descriptions are available for all major artifacts. The warm lighting reduces eye strain while maintaining visibility. Seating areas are provided throughout for rest and contemplation.",
  },
  {
    id: "l2",
    title: "Data, Motion & Body",
    themeColor: "cyan",
    summary: "The analytical heart of the museum. Here, performance becomes data. Motion capture systems, sensor arrays, and real-time analysis transform movement into measurable insights.",
    learningGoals: [
      "Learn how technology measures and analyzes human movement",
      "Understand biomechanics and performance optimization",
      "Explore the relationship between data and athletic achievement",
      "Recognize how sensors reveal invisible physiological and biomechanical processes",
      "Understand the ethical dimensions of performance data collection",
    ],
    levelIntro:
      "You have ascended into the measurement era. Level 2 represents a fundamental shift: here, performance becomes data. This level explores how technology transformed our understanding of movement, making visible what was once invisible. Motion capture systems reveal biomechanical patterns. Sensors measure forces we cannot feel. Data visualization makes complex information immediately comprehensible. The cool cyan tones and clean, technical aesthetic reflect the analytical nature of this level. As you explore, you'll encounter both laboratory-grade systems and wearable devices that brought performance analysis from the lab to the athlete's body. This level also confronts the ethical questions that arise when the body becomes a data source.",
    keyQuestions: [
      "How does technology reveal invisible aspects of movement?",
      "What can we learn from three-dimensional motion data?",
      "How did sensors democratize performance analysis?",
      "What are the ethical implications of continuous body monitoring?",
      "How does data visualization make complex information accessible?",
      "What is the relationship between measurement precision and performance understanding?",
    ],
    spatialLogic:
      "Level 2 is organized around four interconnected zones that represent different aspects of data-driven performance. The Motion Capture Lab anchors the level, demonstrating how movement becomes data. The Biomechanics Laboratory extends this analysis to forces and physics. The Wearables & Sensors zone shows how technology became portable and personal. The Data Visualization Wall synthesizes these streams into comprehensible insights. The layout encourages exploration: visitors can move between zones to see how different measurement approaches complement each other.",
    signatureExperience:
      "The signature experience of Level 2 is active participation in measurement. Visitors can step onto force plates, try motion capture systems, and interact with wearable sensors. The Motion Capture Sandbox allows real-time experimentation with movement analysis. The Force Plate Station provides immediate feedback on ground reaction forces. These interactive experiences make abstract concepts tangible: visitors don't just see data, they generate it. The level also includes an Ethics Panel that prompts critical reflection on privacy, surveillance, and data ownership—essential considerations in the data-driven era.",
    accessibilityNotes:
      "Level 2 balances technical complexity with accessibility. Interactive stations include clear instructions and visual feedback. Data visualizations use high contrast and clear typography. The Ethics Panel is positioned prominently and includes multiple interpretation formats. Interactive elements are designed for various physical abilities, with alternative input methods available. The technical nature of the content is supported by clear explanations and analogies that make complex concepts understandable.",
  },
  {
    id: "l3",
    title: "Futures & Immersion",
    themeColor: "violet",
    summary: "The future of performance. Immersive technologies merge with artificial intelligence to create new forms of training, analysis, and experience. This level looks forward to how we will understand and enhance human capability.",
    learningGoals: [
      "Explore emerging technologies in performance development",
      "Consider the future of human enhancement",
      "Understand how AI and VR transform training and analysis",
      "Examine the ethical boundaries of performance enhancement",
      "Consider questions of access, equity, and fairness in future technologies",
    ],
    levelIntro:
      "Welcome to the future—or at least, one possible future. Level 3 presents emerging and speculative technologies that promise to transform performance in ways we are only beginning to understand. Here, virtual reality creates training environments impossible in the real world. Artificial intelligence provides personalized coaching at scale. Neural interfaces explore direct connections between mind and movement. The violet tones and immersive environments reflect the experimental, forward-looking nature of this level. But this level also asks difficult questions: What are the limits of enhancement? Who has access to these technologies? How do we preserve the meaning of achievement in an age of augmentation? This level is both celebration and caution, showing both the promise and the perils of performance technology's future.",
    keyQuestions: [
      "How might immersive technologies transform training and performance?",
      "What role will artificial intelligence play in performance development?",
      "What are the ethical boundaries of human enhancement?",
      "How do we ensure equitable access to performance technologies?",
      "What is the future relationship between technology and human achievement?",
      "How do we preserve the meaning of performance in an age of augmentation?",
    ],
    spatialLogic:
      "Level 3 is organized around immersive experiences and speculative exploration. The VR Arena provides large-scale immersive environments. The AI Coaching Center offers interactive demonstrations of intelligent systems. The Speculative Interfaces zone presents experimental technologies and prototypes. The Sky Gallery provides a contemplative space with views to the atrium and a 'debate wall' presenting opposing viewpoints on enhancement ethics. The layout encourages both active participation and thoughtful reflection, balancing excitement about possibilities with critical consideration of implications.",
    signatureExperience:
      "The signature experience of Level 3 is immersion and speculation. Visitors can experience VR training environments, interact with AI coaching systems, and explore experimental interfaces. The AI Coach Scenario allows visitors to experience personalized AI guidance. The Debate Wall presents two opposing viewpoints on enhancement ethics, encouraging critical thinking. The Sky Gallery provides a contemplative conclusion with panoramic views and reflection prompts. This level balances technological wonder with ethical consideration, ensuring visitors leave with both excitement about possibilities and awareness of responsibilities.",
    accessibilityNotes:
      "Level 3 accommodates various interaction preferences and abilities. VR experiences include alternatives for those who cannot or prefer not to use headsets. AI demonstrations are available in multiple formats. The Debate Wall includes text, audio, and visual elements. The Sky Gallery provides quiet spaces for reflection. All interactive elements include clear instructions and alternative access methods. The experimental nature of the content is supported by clear explanations and context.",
  },
];

export function getLevel(id: LevelId): Level | undefined {
  return LEVELS.find((l) => l.id === id);
}

