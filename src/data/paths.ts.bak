// Curated Pathways - Each pathway has strict inclusion criteria and object-by-object rationale
// This file should only be imported in server components

export interface PathwayStop {
  objectId: string;
  whyInPath: string; // 1-2 sentences: why this object belongs in this pathway
  takeaway: string; // What this object teaches in the context of this pathway
  order: number;
}

export interface Pathway {
  id: string;
  slug: string;
  title: string;
  thesis: string; // 2-3 sentences: curatorial thesis
  why: string[]; // Bullets: what you learn, what changes, what debate exists
  inclusionCriteria: string[]; // 3-6 bullet criteria for object inclusion
  recommendedOrder: string; // How to follow it
  timeEstimate: string;
  stops: PathwayStop[];
}

export const PATHWAYS: Pathway[] = [
  {
    id: "ritual-to-records",
    slug: "ritual-to-records",
    title: "From Ritual to Records: The Birth of Measuring Performance",
    thesis:
      "Performance measurement began not with technology, but with the human need to compare, celebrate, and codify achievement. This pathway traces how informal observation evolved into systematic measurement, showing how the act of measuring transformed performance itself from ritual practice into quantifiable competition.",
    why: [
      "Understand how measurement created the concept of 'records' and 'standards'",
      "See how early timing devices transformed performance culture",
      "Explore the relationship between measurement and fairness in competition",
      "Consider how documentation changed the meaning of achievement",
    ],
    inclusionCriteria: [
      "Objects must represent a fundamental shift in how performance was measured or recorded",
      "Objects must have documented historical impact on performance culture",
      "Objects must demonstrate the evolution from qualitative to quantitative understanding",
      "Objects must show how measurement technology enabled new forms of competition or comparison",
    ],
    recommendedOrder:
      "Follow chronologically to see measurement evolve from ancient comparison to modern precision",
    timeEstimate: "25 minutes",
    stops: [
      {
        objectId: "ancient-sandals",
        whyInPath:
          "These sandals represent the earliest form of performance optimization—equipment designed to enhance movement. While not a measurement device, they show that performance improvement existed before measurement, establishing the foundation for why measurement became necessary.",
        takeaway:
          "Performance optimization predates measurement technology. Ancient athletes understood biomechanics intuitively, creating equipment that enhanced natural movement long before we could quantify improvement.",
        order: 1,
      },
      {
        objectId: "greek-discus",
        whyInPath:
          "This discus demonstrates early standardization—creating fair competition through consistent equipment. Standardization is a prerequisite for meaningful measurement and comparison.",
        takeaway:
          "Standardized equipment enabled fair competition and meaningful comparison, creating the foundation for performance measurement and record-keeping.",
        order: 2,
      },
      {
        objectId: "first-stopwatch",
        whyInPath:
          "The first commercially available stopwatch represents the moment when performance became precisely measurable. This device transformed 'fast' into 'exactly how fast,' creating the possibility of records.",
        takeaway:
          "Precise timing devices transformed performance from subjective observation to objective data, creating the language of records and quantifiable achievement.",
        order: 3,
      },
      {
        objectId: "mechanical-chronograph",
        whyInPath:
          "Mechanical chronographs improved precision and reliability, making accurate timing accessible to more competitions and training sessions. This represents measurement technology becoming more widely available.",
        takeaway:
          "As timing technology improved, performance measurement became more accessible, enabling more competitions and training sessions to use precise data.",
        order: 4,
      },
      {
        objectId: "electronic-timer",
        whyInPath:
          "Electronic timing represented a fundamental shift from mechanical to digital measurement, enabling precision impossible with mechanical devices. This transformed how we understand and compare performance.",
        takeaway:
          "Electronic timing enabled measurement precision that fundamentally changed how we understand performance, making previously invisible differences measurable.",
        order: 5,
      },
      {
        objectId: "first-record-book",
        whyInPath:
          "This book represents the codification of performance—transforming individual achievements into a global system of comparison. Records are more than numbers; they create meaning and aspiration.",
        takeaway:
          "Record-keeping systems transformed individual achievements into a global framework for understanding human potential, creating new forms of meaning and aspiration.",
        order: 6,
      },
    ],
  },
  {
    id: "datafication-body",
    slug: "datafication-body",
    title: "The Datafication of the Body: Sensors, Signals, Standards",
    thesis:
      "The human body became a data source. This pathway explores how sensors transformed physiological and biomechanical information into measurable signals, creating new standards for understanding performance and health. From heart rate to motion capture, we see how the body's invisible processes became visible through technology.",
    why: [
      "Understand how sensors reveal invisible physiological and biomechanical processes",
      "See how wearable technology democratized performance data",
      "Explore the relationship between data collection and performance optimization",
      "Consider how standards emerged from sensor data",
    ],
    inclusionCriteria: [
      "Objects must represent a sensor or measurement system that captures body data",
      "Objects must demonstrate how technology reveals invisible physiological or biomechanical information",
      "Objects must show progression in sensor capability, portability, or accessibility",
      "Objects must have documented impact on how we understand or optimize performance",
    ],
    recommendedOrder:
      "Follow chronologically to see sensors evolve from laboratory equipment to wearable devices",
    timeEstimate: "30 minutes",
    stops: [
      {
        objectId: "heart-rate-monitor",
        whyInPath:
          "The first wireless heart rate monitor represents the beginning of portable physiological measurement. This device brought cardiovascular data from the laboratory to the athlete's body.",
        takeaway:
          "Portable sensors democratized performance data, making physiological measurement accessible to everyday athletes and transforming how we train.",
        order: 1,
      },
      {
        objectId: "biomechanics-sensor",
        whyInPath:
          "IMU sensors represent the miniaturization of motion analysis, bringing biomechanical measurement from laboratory systems to wearable devices. This shows how sensor technology became portable and accessible.",
        takeaway:
          "Miniaturized sensors enabled continuous biomechanical monitoring, making advanced motion analysis accessible anywhere, anytime.",
        order: 2,
      },
      {
        objectId: "motion-capture-rig",
        whyInPath:
          "Motion capture systems transform movement into three-dimensional data, revealing patterns invisible to the naked eye. This represents the pinnacle of laboratory-based biomechanical measurement.",
        takeaway:
          "Motion capture technology reveals biomechanical patterns invisible to observation, enabling precise analysis of movement efficiency and technique.",
        order: 3,
      },
      {
        objectId: "force-plate",
        whyInPath:
          "Force plates measure ground reaction forces, making the invisible physics of movement visible. This demonstrates how sensors reveal forces we cannot see but can now measure.",
        takeaway:
          "Force measurement sensors reveal the invisible physics of movement, transforming how we understand the biomechanics of efficient performance.",
        order: 4,
      },
      {
        objectId: "gait-analyzer",
        whyInPath:
          "Pressure-sensitive gait mats map foot forces in detail, showing how sensor technology enables personalized biomechanical analysis. This represents measurement becoming both precise and accessible.",
        takeaway:
          "Detailed force mapping enables personalized biomechanical analysis, showing how sensor technology makes precise measurement accessible for individual optimization.",
        order: 5,
      },
      {
        objectId: "smart-watch-evolution",
        whyInPath:
          "Smart watches represent the integration of multiple sensors into everyday devices, showing how body data collection became seamless and continuous.",
        takeaway:
          "Integrated sensor systems in everyday devices enable continuous body data collection, making performance monitoring seamless and always available.",
        order: 6,
      },
    ],
  },
  {
    id: "lab-to-stadium",
    slug: "lab-to-stadium",
    title: "The Lab Becomes the Stadium: Tech Transfer into Training",
    thesis:
      "Performance technology moved from research laboratories to training facilities and competitive arenas. This pathway traces how scientific measurement tools became practical training aids, showing how technology transfer transformed both how athletes train and how coaches guide development.",
    why: [
      "Understand how laboratory technology became practical training tools",
      "See how scientific measurement transformed coaching and training methods",
      "Explore the relationship between research and application in performance",
      "Consider how technology transfer democratized advanced training methods",
    ],
    inclusionCriteria: [
      "Objects must represent technology that moved from laboratory to practical training use",
      "Objects must demonstrate documented adoption in training or competition",
      "Objects must show how scientific measurement became actionable training guidance",
      "Objects must represent a shift from research tool to training aid",
    ],
    recommendedOrder:
      "Follow chronologically to see technology transfer from lab to field",
    timeEstimate: "28 minutes",
    stops: [
      {
        objectId: "motion-capture-rig",
        whyInPath:
          "Motion capture systems moved from research laboratories to professional training facilities, enabling coaches to use biomechanical analysis in training. This represents the first major transfer of lab technology to practical training.",
        takeaway:
          "Motion capture technology transferred from research to training, enabling coaches to use biomechanical analysis to optimize technique in real training environments.",
        order: 1,
      },
      {
        objectId: "force-plate",
        whyInPath:
          "Force plates became embedded in training facilities, allowing athletes to measure and optimize ground reaction forces during training sessions. This shows lab technology becoming a practical training tool.",
        takeaway:
          "Force measurement technology became integrated into training facilities, enabling athletes to optimize movement mechanics during actual training sessions.",
        order: 2,
      },
      {
        objectId: "heart-rate-monitor",
        whyInPath:
          "Heart rate monitors brought cardiovascular measurement from laboratory settings to training, enabling real-time intensity control. This represents one of the earliest and most successful technology transfers.",
        takeaway:
          "Portable heart rate monitoring brought laboratory-grade cardiovascular measurement to training, enabling data-driven intensity control for everyday athletes.",
        order: 3,
      },
      {
        objectId: "power-meter",
        whyInPath:
          "Power meters transformed cycling training by bringing laboratory power measurement to the bike. This represents a direct transfer of research technology to practical training application.",
        takeaway:
          "Power meters brought laboratory-grade power measurement to training, enabling cyclists to train based on objective output rather than perceived effort.",
        order: 4,
      },
      {
        objectId: "gait-analyzer",
        whyInPath:
          "Gait analysis systems moved from research clinics to training facilities, enabling athletes to optimize running mechanics. This shows how detailed biomechanical analysis became accessible for training.",
        takeaway:
          "Gait analysis technology transferred from research to training, enabling athletes to optimize running mechanics through detailed biomechanical measurement.",
        order: 5,
      },
      {
        objectId: "ai-coaching-system",
        whyInPath:
          "AI coaching systems represent the latest technology transfer, bringing advanced data analysis from research to personalized training guidance. This shows how lab technology continues to transform training.",
        takeaway:
          "AI coaching systems represent the latest technology transfer, bringing advanced data analysis from research to personalized, accessible training guidance.",
        order: 6,
      },
    ],
  },
  {
    id: "seeing-motion",
    slug: "seeing-motion",
    title: "Seeing Motion: From Observation to Capture to Prediction",
    thesis:
      "Human movement became visible, measurable, and predictable. This pathway explores how we learned to see motion—from simple observation to sophisticated capture systems to predictive algorithms. Each advancement revealed new patterns and possibilities for understanding and optimizing movement.",
    why: [
      "Understand how motion analysis evolved from observation to prediction",
      "See how visualization technology transformed movement understanding",
      "Explore the relationship between seeing motion and optimizing it",
      "Consider how predictive algorithms extend beyond measurement to anticipation",
    ],
    inclusionCriteria: [
      "Objects must represent a technology that makes movement visible, measurable, or predictable",
      "Objects must demonstrate progression in motion analysis capability",
      "Objects must show how visualization or analysis technology reveals movement patterns",
      "Objects must have documented impact on understanding or optimizing motion",
    ],
    recommendedOrder:
      "Follow chronologically to see motion analysis evolve from observation to prediction",
    timeEstimate: "32 minutes",
    stops: [
      {
        objectId: "first-stopwatch",
        whyInPath:
          "Stopwatches made speed visible through time measurement, transforming 'fast' from subjective observation to quantifiable data. This represents the first step in making motion measurable.",
        takeaway:
          "Timing devices made speed measurable, transforming motion from subjective observation to quantifiable data—the foundation of motion analysis.",
        order: 1,
      },
      {
        objectId: "motion-capture-rig",
        whyInPath:
          "Motion capture systems made three-dimensional movement visible and measurable, revealing biomechanical patterns invisible to observation. This represents a fundamental leap in seeing motion.",
        takeaway:
          "Motion capture technology made three-dimensional movement visible and measurable, revealing biomechanical patterns that enable precise motion optimization.",
        order: 2,
      },
      {
        objectId: "markerless-system",
        whyInPath:
          "Markerless motion capture removed barriers to motion analysis, making movement capture more accessible and practical. This shows how motion analysis technology became more usable.",
        takeaway:
          "Markerless motion capture made movement analysis more accessible, removing technical barriers and enabling motion capture in more environments.",
        order: 3,
      },
      {
        objectId: "biomechanics-visualization",
        whyInPath:
          "Biomechanics visualization systems transform motion data into comprehensible visual representations, making complex movement patterns immediately understandable. This shows how visualization makes motion analysis accessible.",
        takeaway:
          "Visualization technology transforms complex motion data into immediately understandable patterns, making biomechanical analysis accessible to coaches and athletes.",
        order: 4,
      },
      {
        objectId: "holographic-display",
        whyInPath:
          "Holographic displays represent the future of motion visualization, projecting three-dimensional movement into physical space. This shows how motion visualization continues to evolve.",
        takeaway:
          "Holographic visualization represents the future of motion display, making three-dimensional movement immediately comprehensible through spatial representation.",
        order: 5,
      },
      {
        objectId: "predictive-analytics",
        whyInPath:
          "Predictive analytics extend beyond seeing motion to predicting it, using data to anticipate movement patterns and outcomes. This represents the evolution from observation to prediction.",
        takeaway:
          "Predictive analytics extend motion analysis from measurement to prediction, using data to anticipate movement patterns and optimize performance proactively.",
        order: 6,
      },
    ],
  },
  {
    id: "power-access-ethics",
    slug: "power-access-ethics",
    title: "Power, Access, and Ethics: Privacy, Surveillance, Bias, Enhancement",
    thesis:
      "Performance technology raises fundamental questions about power, access, and ethics. This pathway confronts the difficult questions: Who owns performance data? Who has access to enhancement technologies? What are the boundaries of fair competition? How do we prevent technology from widening inequality?",
    why: [
      "Understand the ethical dimensions of performance technology",
      "Explore questions of data ownership, privacy, and surveillance",
      "Consider issues of access, equity, and fairness in performance enhancement",
      "Examine the boundaries between equipment and enhancement",
    ],
    inclusionCriteria: [
      "Objects must raise ethical questions about data, privacy, access, or enhancement",
      "Objects must represent technologies that have sparked ethical debates",
      "Objects must demonstrate how performance technology intersects with power and inequality",
      "Objects must show the complexity of ethical boundaries in performance technology",
    ],
    recommendedOrder:
      "Follow to explore ethical questions from data collection to human enhancement",
    timeEstimate: "35 minutes",
    stops: [
      {
        objectId: "motion-capture-rig",
        whyInPath:
          "Motion capture systems collect vast amounts of personal movement data, raising questions about data ownership, privacy, and surveillance. This represents the beginning of ethical concerns in performance technology.",
        takeaway:
          "Motion capture technology raises fundamental questions about who owns performance data and how it should be protected, establishing the ethical foundation for data-driven performance technology.",
        order: 1,
      },
      {
        objectId: "biomechanics-sensor",
        whyInPath:
          "Wearable sensors enable continuous monitoring, raising questions about surveillance and consent. This shows how portable technology amplifies privacy concerns.",
        takeaway:
          "Wearable sensors enable continuous body monitoring, raising critical questions about surveillance, consent, and the boundaries of acceptable data collection.",
        order: 2,
      },
      {
        objectId: "ai-coaching-system",
        whyInPath:
          "AI coaching systems raise questions about algorithmic bias, data ownership, and equitable access to advanced training technology. This represents the ethical complexity of intelligent performance systems.",
        takeaway:
          "AI coaching systems raise questions about bias, fairness, and equitable access, showing how intelligent technology amplifies ethical concerns in performance development.",
        order: 3,
      },
      {
        objectId: "carbon-plate-shoe",
        whyInPath:
          "Carbon plate shoes sparked debates about the boundary between equipment and enhancement, raising questions about fairness and the nature of achievement. This represents ethical questions about performance enhancement.",
        takeaway:
          "Carbon plate shoes sparked debates about fairness and enhancement boundaries, showing how technology raises fundamental questions about what constitutes legitimate performance achievement.",
        order: 4,
      },
      {
        objectId: "neural-interface",
        whyInPath:
          "Neural interfaces represent the cutting edge of enhancement technology, raising profound questions about the boundaries of human capability and the meaning of achievement. This shows the ethical frontier of performance technology.",
        takeaway:
          "Neural interfaces represent the ethical frontier of performance enhancement, raising fundamental questions about human capability, fairness, and the meaning of achievement.",
        order: 5,
      },
      {
        objectId: "exoskeleton-prototype",
        whyInPath:
          "Exoskeletons represent direct human augmentation, raising questions about the limits of enhancement and the preservation of human achievement. This shows the ultimate ethical questions in performance technology.",
        takeaway:
          "Exoskeletons represent direct human augmentation, raising ultimate questions about enhancement limits and the preservation of human achievement in an age of technology.",
        order: 6,
      },
    ],
  },
  {
    id: "future-athlete",
    slug: "future-athlete",
    title: "The Future Athlete: Augmentation, AI Coaching, and Human Limits",
    thesis:
      "The future of performance is being written now. This pathway explores emerging technologies that promise to transform human capability: AI coaching, neural interfaces, virtual reality training, and bio-integrated systems. These technologies raise fundamental questions about the future of human achievement and the boundaries of enhancement.",
    why: [
      "Explore emerging technologies that promise to transform performance",
      "Understand how AI, VR, and neural interfaces might change training and competition",
      "Consider questions about human limits and enhancement boundaries",
      "Examine the future of performance technology and its implications",
    ],
    inclusionCriteria: [
      "Objects must represent emerging or future performance technologies",
      "Objects must demonstrate how technology might transform human capability",
      "Objects must raise questions about the future of performance and enhancement",
      "Objects must show progression toward more integrated or intelligent systems",
    ],
    recommendedOrder:
      "Follow to explore the future of performance from current technology to speculative enhancement",
    timeEstimate: "30 minutes",
    stops: [
      {
        objectId: "vr-training-pod",
        whyInPath:
          "VR training represents the current frontier of immersive performance technology, creating training environments impossible in the real world. This shows how technology is already transforming training.",
        takeaway:
          "Virtual reality training creates immersive experiences that transcend physical limitations, showing how technology is already transforming performance development.",
        order: 1,
      },
      {
        objectId: "ai-coaching-system",
        whyInPath:
          "AI coaching systems represent the integration of intelligence into performance guidance, showing how technology might provide personalized coaching at scale. This demonstrates the future of training support.",
        takeaway:
          "AI coaching systems represent the future of personalized performance guidance, showing how intelligence might make expert-level coaching accessible to everyone.",
        order: 2,
      },
      {
        objectId: "holographic-display",
        whyInPath:
          "Holographic displays represent the future of motion visualization, making complex biomechanical data immediately comprehensible. This shows how visualization technology might evolve.",
        takeaway:
          "Holographic visualization represents the future of making complex motion data immediately understandable, showing how display technology might evolve.",
        order: 3,
      },
      {
        objectId: "neural-interface",
        whyInPath:
          "Neural interfaces represent the cutting edge of human-computer integration, exploring direct connections between mind and movement. This shows a possible future of performance enhancement.",
        takeaway:
          "Neural interfaces represent a possible future where technology directly enhances neural control of movement, showing the frontier of human-computer integration.",
        order: 4,
      },
      {
        objectId: "bio-integrated-sensors",
        whyInPath:
          "Bio-integrated sensors represent seamless technology integration, where monitoring becomes invisible and continuous. This shows how performance technology might become part of the body.",
        takeaway:
          "Bio-integrated sensors represent a future where performance monitoring becomes seamless and invisible, showing how technology might integrate directly with the body.",
        order: 5,
      },
      {
        objectId: "exoskeleton-prototype",
        whyInPath:
          "Exoskeletons represent direct human augmentation, showing a possible future where technology directly enhances physical capability. This represents the ultimate question: what are the limits of enhancement?",
        takeaway:
          "Exoskeletons represent a possible future of direct human augmentation, raising ultimate questions about enhancement limits and the future of human capability.",
        order: 6,
      },
    ],
  },
];

export function getPathway(slug: string): Pathway | undefined {
  return PATHWAYS.find((p) => p.slug === slug);
}

export function getAllPathways(): Pathway[] {
  return PATHWAYS;
}

