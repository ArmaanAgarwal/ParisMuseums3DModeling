// Objects data - exactly 12 objects (4 per gallery)

import { MuseumObject } from "./types";

export const OBJECTS: MuseumObject[] = [
  // Gallery 1: Origins & Icons
  {
    id: "heuer-stopwatch-1960s",
    slug: "heuer-stopwatch-1960s",
    galleryId: "origins-icons",
    title: "Heuer Mechanical Stopwatch",
    subtitle: "Time made visible",
    dateLabel: "c. 1960s",
    yearOrEra: "c. 1960s",
    year: 1960,
    tags: ["Measurement", "Timing", "Competition"],
    shortLabel: "A hand-held stopwatch made time visible—and turned performance into a number.",
    longDescription: "Mechanical stopwatches helped formalize modern sport by standardizing timing. Once time became legible, athletes trained for splits, not just wins. This artifact represents the shift from human judgment to instrumented authority.",
    imagePath: "/objects/heuer-mechanical-stopwatch.jpg",
    imageSearchQuery: "Heuer mechanical stopwatch vintage",
    sourceName: "Heuer (TAG Heuer) product history / museum images",
    debatePrompt: "Should timing be left to human judgment, or does mechanical precision make competition fairer?",
    measurementAngle: "Stopwatches transformed subjective 'fast' into objective seconds and milliseconds. Athletes began training to specific splits, not just 'feeling fast.'",
    designAngle: "The stopwatch's design prioritized readability and reliability—making time a shared, verifiable fact rather than a personal experience.",
    media: {
      imagePath: "/objects/heuer-mechanical-stopwatch.jpg",
      imageAlt: "Vintage Heuer mechanical stopwatch",
      imageKind: "artifact",
    },
    description: "Mechanical stopwatches helped formalize modern sport by standardizing timing.",
    significance: "This artifact represents the shift from human judgment to instrumented authority in sport timing.",
    whatToNotice: [
      "The mechanical precision that replaced human timing",
      "How standardized timing changed training methods",
      "The shift from subjective to objective measurement",
    ],
    relatedObjectIds: ["starting-blocks-modern", "polar-hrm-1980s"],
    howItChangedPerformance: "Made time legible and comparable across athletes, venues, and eras.",
    provenance: "Manufactured by Heuer (now TAG Heuer)",
    materials: "Metal case, mechanical movement, glass face",
    dimensions: "Approx. 5cm diameter",
    didactics: {
      wallLabel: "Heuer mechanical stopwatch, c. 1960s. Used by track officials and coaches to standardize timing at meets and training sessions. Made time visible—and turned performance into a number.",
      curatorNote: "This stopwatch didn't just measure time; it changed who had authority over performance. Before mechanical timing, officials and coaches judged speed by watching. After, the stopwatch became the final word. This shift wasn't neutral—it favored athletes whose performance could be measured in seconds, and it created a new language of splits and intervals that coaches and athletes learned to speak. The stopwatch reveals our culture's obsession with quantification: we trust numbers more than eyes.",
      whereYoudSeeIt: [
        "Track meets and officiating—timing races and verifying records",
        "Coaching sessions—measuring split times and pacing strategies",
        "Training facilities—athletes learning to run to specific intervals",
        "Broadcast timing—television coverage showing elapsed time on screen",
        "Record-keeping—official timing for world records and personal bests"
      ],
      specificUseCases: [
        "1960s track meets: Officials used handheld stopwatches to verify finishes and record official times for races, replacing subjective visual judgments with mechanical precision.",
        "Coaching sessions: Track coaches used stopwatches to measure split times during interval training, teaching athletes to run to specific pace targets rather than just 'feeling fast.'",
        "Broadcast television: Sports broadcasters displayed elapsed time on screen during races, making timing visible to millions of viewers and establishing time as the primary performance metric.",
        "Record verification: Athletic federations used stopwatch timing to verify world records and personal bests, creating a standardized system for comparing performances across eras and venues.",
        "Training facilities: Athletes learned to interpret split times, transforming their relationship with performance from subjective experience to objective data."
      ],
      signatureMoment: "Imagine a 1960s track meet: the starter's pistol fires, and as runners sprint down the straightaway, an official stands at the finish line with a Heuer stopwatch in hand. When the first runner crosses, the official clicks the button, and a number appears—a time that will be recorded, compared, and remembered. This moment represents a fundamental shift: performance is no longer just 'fast' or 'slow' as judged by human eyes, but a precise number that can be compared across athletes, venues, and eras. The stopwatch transformed sport from subjective experience to objective data.",
      whyItMatters: "The stopwatch transformed sport by making time comparable across venues, eras, and athletes. Before mechanical timing, records were inconsistent—a 'fast' time in one place might not mean the same thing elsewhere. The stopwatch solved this by creating a universal standard. Once timing became mechanical, athletes began training to specific splits rather than just 'feeling fast.' Coaches could compare performances across sessions. Competition became standardized, with times serving as objective records that could be verified and compared. By the 1970s, split times had become the language of track and field training. The stopwatch didn't just measure performance—it changed what performance meant, shifting authority from human judgment to mechanical precision.",
      whySignificant: "The stopwatch represents a cultural shift toward quantification and standardization in sport. It emerged during a period when sport was becoming more professionalized, televised, and competitive. The tool didn't just measure performance—it changed how we understand excellence, shifting from subjective judgment to objective measurement. This change had profound implications: it made performance comparable across time and place, but it also narrowed what 'counted' as achievement to what could be measured in seconds. The stopwatch became a symbol of modernity and precision, reflecting broader cultural values about objectivity, fairness, and progress.",
      signatureDetail: "Standardized timing made split times a training language.",
      debatePrompt: "When timing becomes the authority, who gets to decide what counts as a 'real' improvement?",
      howItWorks: {
        bullets: [
          "Mechanical movement with precise gear ratios divides time into consistent intervals",
          "Push-button start/stop mechanism allows officials to capture elapsed time",
          "Analog display shows seconds and fractions, readable at a glance",
          "Wound spring provides consistent power, ensuring reliable timing"
        ],
        paragraph: "The stopwatch uses a mechanical movement with carefully calibrated gears to measure elapsed time. When started, a spring unwinds at a constant rate, driving gears that move the hands. The precision comes from the gear ratios, which divide time into consistent intervals. This mechanical consistency replaced the variability of human timing, providing a reliable standard for measuring performance."
      },
      tradeoffs: [
        "Fairness: Mechanical precision made timing more objective, but early stopwatches were expensive, creating access barriers for less-funded programs",
        "Authority: The stopwatch shifted authority from human officials to mechanical devices, which some saw as more fair and others as less human",
        "Measurement limits: The stopwatch could only measure time, potentially narrowing what 'counts' as performance to what can be quantified in seconds",
        "Dependency: Athletes and coaches became dependent on timing data, potentially losing connection to natural pacing and body awareness",
        "Standardization: While making competition more comparable, standardization also made it more uniform, potentially limiting individual expression"
      ],
      keyTerms: [
        { term: "split times", definition: "Intermediate time measurements during a race, enabling detailed performance analysis" },
        { term: "mechanical precision", definition: "Time measurement using calibrated mechanical movements rather than human judgment" }
      ],
      sourcesNote: "Source: Heuer (TAG Heuer) product history / museum images"
    },
    tourContent: {
      reflectionChoices: [
        {
          value: "Accuracy matters most",
          feedback: "You prioritize precision and objectivity. The stopwatch represents a shift toward mechanical authority—where numbers replace human judgment. This makes competition more fair and comparable, but it also raises questions: what forms of excellence can't be measured in seconds? When we trust the stopwatch completely, we might miss the athlete's form, strategy, or the context of their performance. The stopwatch gives us accuracy, but accuracy isn't the same thing as understanding.",
          followUpQuestion: "What gets lost when we replace human judgment with mechanical precision?",
          lookForThisNext: "polar-hrm-1980s"
        },
        {
          value: "Context matters most",
          feedback: "You recognize that timing doesn't exist in a vacuum. The stopwatch's meaning changed depending on where and when it was used—at elite competitions versus local meets, in the 1960s versus today. Early stopwatches were expensive, creating access barriers. The same tool that made competition fairer also made it more exclusive. Context matters: who could afford the stopwatch? Who had access to coaches who understood split times? The stopwatch standardized timing, but it didn't standardize access.",
          followUpQuestion: "How does context shape whether an innovation expands or restricts access to sport?",
          lookForThisNext: "track-spikes-vintage"
        },
        {
          value: "Fairness matters most",
          feedback: "You're concerned with equity and access. The stopwatch made timing more objective, which should make competition fairer. But early models were expensive—favoring wealthier programs and athletes. The mechanical precision it offered was only available to those who could afford it. This creates a tension: the same tool that made competition more fair also made it more exclusive. Fairness isn't just about accurate measurement—it's about who gets to participate in measured competition.",
          followUpQuestion: "Can a tool be fair if not everyone has access to it?",
          lookForThisNext: "nike-vaporfly"
        }
      ]
    },
  },
  {
    id: "leather-medicine-ball-early",
    slug: "leather-medicine-ball-early",
    galleryId: "origins-icons",
    title: "Leather Medicine Ball",
    subtitle: "Repetition and discipline",
    dateLabel: "early 20th century",
    yearOrEra: "early 20th century",
    year: 1920,
    tags: ["Training", "Strength", "Physical Culture"],
    shortLabel: "A simple heavy ball—built for repetition, discipline, and measurable work.",
    longDescription: "Medicine balls became staples of early conditioning: portable, scalable, and easy to integrate into drills. They represent the 'physical culture' era—when training methods spread beyond elites into schools, gyms, and public life.",
    imagePath: "/objects/leather-medicine-ball.jpg",
    imageSearchQuery: "vintage leather medicine ball",
    sourceName: "Physical culture / training equipment archives",
    debatePrompt: "Does simple, accessible equipment democratize training, or does it limit what's possible?",
    measurementAngle: "Medicine balls introduced the concept of measurable resistance—weight, reps, sets—into everyday training vocabulary.",
    designAngle: "The ball's simplicity made it portable and adaptable, enabling training anywhere. Its design prioritized function over specialization.",
    media: {
      imagePath: "/objects/leather-medicine-ball.jpg",
      imageAlt: "Vintage leather medicine ball",
      imageKind: "artifact",
    },
    description: "Medicine balls became staples of early conditioning.",
    significance: "They represent the 'physical culture' era when training methods spread beyond elites.",
    whatToNotice: [
      "The simplicity that made training accessible",
      "How portable equipment changed where training happened",
      "The shift from elite-only to public training culture",
    ],
    relatedObjectIds: ["normatec-boots", "theragun-massage-gun"],
    howItChangedPerformance: "Made strength training accessible and portable, spreading beyond elite athletes.",
    provenance: "Early 20th century physical culture equipment",
    materials: "Leather, stuffing",
    dimensions: "Various sizes, typically 2-10 kg",
    didactics: {
      wallLabel: "Leather medicine ball, early 20th century. Used in physical culture gyms and training facilities for strength and conditioning exercises. A simple heavy ball—built for repetition, discipline, and measurable work.",
      curatorNote: "The medicine ball represents a moment when training moved from elite-only to accessible. Its simplicity made it portable and affordable, spreading strength training beyond exclusive clubs. This object reveals how democratization happens: not through complex technology, but through tools that anyone can use. The medicine ball didn't require special facilities or expensive equipment—just space and effort. This shift changed who could train and where training happened.",
      whereYoudSeeIt: [
        "Physical culture gyms—early 20th century training facilities",
        "School athletic programs—introducing strength training to students",
        "Public training spaces—making exercise accessible beyond elite clubs",
        "Military training—standardizing physical conditioning",
        "Home training—portable equipment for personal use"
      ],
      specificUseCases: [
        "Early 1900s physical culture gyms: Trainers used medicine balls for partner exercises, throwing and catching to build strength and coordination in accessible group settings.",
        "1920s school programs: Physical education teachers introduced medicine balls to teach strength training, making conditioning accessible to students who couldn't access weight rooms.",
        "Military training facilities: Medicine balls became standard equipment for physical conditioning, providing portable strength training that didn't require expensive machines.",
        "Public recreation centers: Community centers adopted medicine balls as affordable training tools, expanding access to strength training beyond exclusive athletic clubs.",
        "Home training: Athletes and fitness enthusiasts used medicine balls for portable training, enabling strength work anywhere without specialized equipment."
      ],
      signatureMoment: "Imagine a 1920s physical culture gym: trainers and students stand in pairs, throwing a heavy leather ball back and forth. This simple exercise—accessible, portable, requiring no machines—represents a shift in who could access strength training. The medicine ball made conditioning democratic: not just for elite athletes with expensive equipment, but for anyone with space and a ball. This moment changed where training happened and who could participate.",
      whyItMatters: "The medicine ball transformed strength training from elite-only to accessible. Before portable equipment like this, strength training required expensive machines or specialized facilities. The medicine ball's simplicity made it affordable and portable, spreading conditioning beyond exclusive clubs. This democratization changed who could train, where training happened, and what 'fitness' meant. By the mid-20th century, strength training had become part of public education and community recreation, largely because of tools like the medicine ball that made it accessible.",
      whySignificant: "The medicine ball represents a cultural shift toward accessible physical culture. It emerged during the early 20th century physical culture movement, when exercise was becoming part of public life rather than elite privilege. The ball's significance lies not in its complexity, but in its accessibility: it made strength training available to schools, community centers, and individuals who couldn't access expensive equipment. This shift had lasting impact, establishing strength training as a fundamental part of fitness culture rather than an exclusive practice.",
      signatureDetail: "Portable strength training made conditioning accessible beyond elite facilities.",
      debatePrompt: "Does simple, accessible equipment democratize training, or does it limit what's possible?",
      howItWorks: {
        bullets: [
          "Weighted ball provides resistance for throwing, catching, and carrying exercises",
          "Partner exercises enable dynamic strength training without machines",
          "Portable design allows training anywhere with minimal space requirements",
          "Variable weight options accommodate different strength levels"
        ],
        paragraph: "The medicine ball works by providing weighted resistance for dynamic exercises. Unlike fixed machines, it enables partner work, throwing, and full-body movements. The ball's weight creates resistance that builds strength through functional movements. Its portability means it can be used in any space, making strength training accessible without specialized facilities."
      },
      tradeoffs: [
        "Accessibility: Simple design made training accessible, but limited exercise variety compared to specialized machines",
        "Effectiveness: Portable and affordable, but may not provide the same targeted resistance as modern equipment",
        "Safety: Simple design reduces injury risk from complex machines, but improper use can still cause strain",
        "Progression: Variable weights allow progression, but may be limited compared to adjustable resistance machines",
        "Democratization: Made strength training accessible, but simple tools might not meet elite training needs"
      ],
      keyTerms: [],
      sourcesNote: "Source: Physical culture / training equipment archives"
    },
    tourContent: {
      reflectionChoices: [
        {
          value: "Accessibility matters most",
          feedback: "You prioritize making training tools available to everyone. The medicine ball represents democratization—simple, portable, affordable equipment that spread beyond elite athletes. This perspective values tools that expand access rather than create barriers. The medicine ball's simplicity made it accessible, but consider: did this accessibility come at the cost of specialization? Some athletes might benefit from more advanced equipment.",
          followUpQuestion: "When does simplicity limit what's possible, and when does it expand access?",
          lookForThisNext: "nike-vaporfly"
        },
        {
          value: "Effectiveness matters most",
          feedback: "You value tools that work, regardless of their complexity. The medicine ball's effectiveness came from its simplicity—it enabled measurable resistance training anywhere. This perspective focuses on results over sophistication. But consider: does effectiveness always mean the same thing for different athletes? What works for one might not work for another, and simple tools might limit optimization.",
          followUpQuestion: "How do we balance universal effectiveness with personalized optimization?",
          lookForThisNext: "srm-power-meter"
        },
        {
          value: "Context matters most",
          feedback: "You recognize that the medicine ball's value depends on where and how it's used. In early 20th century physical culture, it represented a shift toward accessible training. Today, it might seem basic compared to modern equipment. This perspective sees tools as context-dependent. The same object means different things in different eras and settings.",
          followUpQuestion: "How does context shape whether a tool is innovative or outdated?",
          lookForThisNext: "fitbit-tracker"
        }
      ]
    },
  },
  {
    id: "track-spikes-vintage",
    slug: "track-spikes-vintage",
    galleryId: "origins-icons",
    title: "Vintage Track Spikes",
    subtitle: "Engineering speed",
    dateLabel: "mid-20th century",
    yearOrEra: "mid-20th century",
    year: 1950,
    tags: ["Footwear", "Speed", "Design"],
    shortLabel: "Spikes show how 'performance' is engineered—one surface, one gait, one goal.",
    longDescription: "Track spikes embody targeted design: grip, stiffness, and minimal weight. Even before today's super-shoes, footwear shaped what 'fast' meant and how athletes moved. This artifact starts the long debate: where does training end and technology begin?",
    imagePath: "/objects/vintage-track-spikes.jpg",
    imageSearchQuery: "vintage track spikes sprint shoes",
    sourceName: "Footwear archives / brand catalogs",
    debatePrompt: "At what point does equipment design become an unfair advantage?",
    measurementAngle: "Spikes made grip measurable and repeatable—enabling consistent force application regardless of surface conditions.",
    designAngle: "The spike plate's geometry and placement optimized for forward propulsion, shaping running technique around the shoe's capabilities.",
    media: {
      imagePath: "/objects/vintage-track-spikes.jpg",
      imageAlt: "Vintage track spikes",
      imageKind: "artifact",
    },
    description: "Track spikes embody targeted design for speed.",
    significance: "This artifact starts the long debate: where does training end and technology begin?",
    whatToNotice: [
      "How design shapes movement patterns",
      "The balance between athlete and equipment",
      "The evolution from simple to engineered footwear",
    ],
    relatedObjectIds: ["nike-vaporfly", "starting-blocks-modern"],
    howItChangedPerformance: "Optimized grip and force transfer, enabling faster times through design.",
    provenance: "Mid-20th century track and field equipment",
    materials: "Leather upper, metal spikes, rubber sole",
    dimensions: "Standard track shoe size",
    didactics: {
      wallLabel: "Vintage track spikes, mid-20th century. Used by sprinters and middle-distance runners to optimize grip and force transfer on track surfaces. Spikes show how 'performance' is engineered—one surface, one gait, one goal.",
      curatorNote: "These spikes represent the beginning of a long debate: where does training end and technology begin? The spikes weren't just shoes—they were tools that shaped how athletes moved. By optimizing for specific surfaces and movements, they made certain techniques more effective than others. This object reveals how equipment design doesn't just support performance; it actively shapes it. The spikes favored athletes whose natural movement patterns aligned with the shoe's design, raising questions about fairness and access.",
      whereYoudSeeIt: [
        "Track meets—sprinters and middle-distance runners competing on cinder and later synthetic tracks",
        "Training sessions—athletes practicing starts and acceleration with spike-specific technique",
        "Coaching facilities—coaches analyzing how spike design affects running mechanics",
        "Equipment rooms—athletes selecting spikes based on event and surface conditions"
      ],
      specificUseCases: [
        "1950s track meets: Sprinters wore spikes with metal cleats to maximize grip on cinder tracks, enabling explosive starts and turns that weren't possible in regular shoes.",
        "Training sessions: Coaches taught athletes to use spikes for interval work, emphasizing the biomechanical advantages of spike-specific running technique.",
        "Equipment selection: Athletes chose different spike configurations for different events—fewer spikes for distance, more for sprints—optimizing for their specific needs.",
        "Competition preparation: Before major meets, athletes tested spikes on practice tracks to ensure optimal grip and comfort for race day performance.",
        "Technique development: Young athletes learned to run in spikes, adapting their form to take advantage of the shoe's grip and stiffness."
      ],
      signatureMoment: "At a 1950s track meet, a sprinter crouches in starting blocks, wearing leather spikes with metal cleats. When the gun fires, the spikes dig into the cinder track, providing grip that transforms the start from a push-off into an explosive launch. This moment represents a shift: the shoe isn't just protection anymore—it's an active part of performance. The spikes enable movements that weren't possible in regular shoes, but they also require technique that favors certain body types and training approaches.",
      whyItMatters: "Track spikes transformed running by optimizing for specific surfaces and movements. Before spikes, runners wore regular shoes that weren't designed for track surfaces. Spikes provided grip that enabled faster starts, sharper turns, and more efficient force transfer. This optimization changed how athletes trained and competed, making technique more specialized and performance more dependent on equipment. By the mid-20th century, spikes had become essential for competitive track and field, establishing a pattern of equipment specialization that continues today.",
      whySignificant: "Track spikes represent the first major example of footwear designed specifically for athletic performance optimization. They emerged during a period when track and field was becoming more competitive and standardized. The spikes' significance lies in establishing that equipment design could directly improve performance, not just protect the athlete. This shift had lasting implications: it created a market for specialized athletic footwear, established the pattern of equipment optimization, and raised early questions about where the line between athlete and equipment should be drawn. The spikes set a precedent for future innovations like carbon-plated shoes.",
      signatureDetail: "Specialized footwear made performance optimization a design problem.",
      debatePrompt: "At what point does equipment design become an unfair advantage?",
      howItWorks: {
        bullets: [
          "Metal spikes on the sole provide grip on track surfaces, preventing slipping during starts and turns",
          "Stiff sole plate optimizes force transfer from foot to ground, reducing energy loss",
          "Minimal upper design reduces weight while maintaining foot security",
          "Spike configuration varies by event—sprint spikes have more spikes, distance spikes have fewer"
        ],
        paragraph: "Track spikes work by providing superior grip and force transfer compared to regular shoes. The metal spikes dig into track surfaces, creating traction that enables explosive starts and sharp turns. The stiff sole plate ensures that force from the athlete's leg is efficiently transferred to the ground without energy loss from flex. This combination of grip and stiffness makes movements possible that aren't achievable in regular footwear, but it also requires technique adapted to the shoe's characteristics."
      },
      tradeoffs: [
        "Performance: Spikes optimize for track surfaces, but they're uncomfortable and impractical for everyday use",
        "Access: Early spikes were expensive, creating barriers for athletes who couldn't afford specialized equipment",
        "Technique: Spikes enable faster times, but they require technique that favors certain body types and training methods",
        "Fairness: Spikes provide clear performance benefits, but they raise questions about whether equipment should be part of competition",
        "Specialization: Spikes optimize for track, but they limit versatility compared to general-purpose footwear"
      ],
      keyTerms: [],
      sourcesNote: "Source: Footwear archives / brand catalogs"
    },
    tourContent: {
      reflectionChoices: [
        {
          value: "Design advantage is fair",
          feedback: "You believe that equipment design is a legitimate part of athletic performance. Track spikes optimize biomechanics, and that optimization should be allowed. This perspective sees design as an extension of training and technique. But consider: when does design become an unfair advantage? Early spikes were available to many, but what about expensive, cutting-edge designs?",
          followUpQuestion: "At what point does design advantage become an access problem?",
          lookForThisNext: "nike-vaporfly"
        },
        {
          value: "Athlete ability matters most",
          feedback: "You prioritize the athlete's natural ability and training over equipment. Equipment should support performance, not create it. This perspective values human achievement over technological enhancement. But consider: equipment and ability are intertwined. Spikes don't just support running—they shape how athletes run. The line between support and enhancement is blurry.",
          followUpQuestion: "Can we separate athlete ability from equipment design, or are they always connected?",
          lookForThisNext: "vicon-mocap-markers"
        },
        {
          value: "Fairness requires limits",
          feedback: "You recognize that equipment design needs boundaries to maintain fairness. Track spikes are acceptable, but there must be limits to prevent technology from overshadowing athletic ability. This perspective seeks balance between innovation and fairness. The challenge is defining those limits: what's acceptable design versus unfair advantage?",
          followUpQuestion: "Who should decide where the line between fair design and unfair advantage is drawn?",
          lookForThisNext: "starting-blocks-modern"
        }
      ]
    },
  },
  {
    id: "starting-blocks-modern",
    slug: "starting-blocks-modern",
    galleryId: "origins-icons",
    title: "Track Starting Blocks",
    subtitle: "Standardized starts",
    dateLabel: "20th century standard",
    yearOrEra: "20th century standard",
    year: 1930,
    tags: ["Standardization", "Sprint", "Technique"],
    shortLabel: "A standardized start turns explosive movement into a repeatable technique.",
    longDescription: "Starting blocks formalized sprint starts by creating consistent geometry for force production. They made starts comparable across races, venues, and eras—tightening the relationship between biomechanics, coaching, and measurable outcomes.",
    imagePath: "/objects/track-starting-blocks.jpg",
    imageSearchQuery: "Olympic track starting blocks",
    sourceName: "Track & field equipment references",
    debatePrompt: "Does standardization make competition fairer, or does it limit individual expression?",
    measurementAngle: "Blocks enabled precise measurement of reaction time and force production—turning starts into data points.",
    designAngle: "The adjustable geometry standardized body position, making technique teachable and comparable across athletes.",
    media: {
      imagePath: "/objects/track-starting-blocks.jpg",
      imageAlt: "Track starting blocks",
      imageKind: "artifact",
    },
    description: "Starting blocks formalized sprint starts with consistent geometry.",
    significance: "They made starts comparable across races, venues, and eras.",
    whatToNotice: [
      "How standardization enables fair comparison",
      "The relationship between equipment and technique",
      "The shift from informal to formalized starts",
    ],
    relatedObjectIds: ["heuer-stopwatch-1960s", "track-spikes-vintage"],
    howItChangedPerformance: "Standardized start positions enabled biomechanical analysis and technique optimization.",
    provenance: "Standard track and field equipment",
    materials: "Metal frame, rubber pads",
    dimensions: "Adjustable spacing and angle",
    didactics: {
      wallLabel: "Modern starting blocks, standardized in the 20th century. Used by sprinters to create consistent starting positions for explosive acceleration. A standardized start turns explosive movement into a repeatable technique.",
      curatorNote: "Starting blocks represent the tension between standardization and individual expression. They make starts fairer by ensuring everyone starts from the same position, but they also require athletes to adapt their technique to a standardized setup. This object reveals how fairness and uniformity are intertwined: to make competition comparable, we must limit variation. The blocks changed sprinting from an art to a science, making starts teachable and measurable, but potentially limiting the diversity of approaches that might be effective.",
      whereYoudSeeIt: [
        "Track meets—sprinters using blocks for consistent starting positions in races",
        "Training facilities—coaches teaching block technique and optimizing positioning",
        "Biomechanics labs—scientists analyzing force production and reaction times from blocks",
        "Broadcast coverage—television showing athletes in blocks before race starts"
      ],
      specificUseCases: [
        "1930s track meets: Officials required sprinters to use starting blocks, replacing hand-dug holes and creating standardized starting conditions across all competitions.",
        "Training sessions: Coaches used blocks to teach consistent starting technique, measuring reaction times and force production to optimize athlete positioning.",
        "Biomechanics analysis: Scientists studied how block positioning affected acceleration, using data to recommend optimal angles and spacing for individual athletes.",
        "Competition preparation: Athletes practiced starts in blocks daily, developing muscle memory for the standardized starting position required in competition.",
        "Broadcast television: Sports coverage showed athletes in blocks before races, making the standardized start visible to millions of viewers."
      ],
      signatureMoment: "At a 1930s track meet, sprinters crouch in starting blocks for the first time, their feet positioned in adjustable pedals rather than hand-dug holes. When the starter's pistol fires, they explode forward with more power and consistency than ever before. This moment represents a shift from informal to formalized starts: the blocks don't just provide a platform—they create a standardized geometry that makes starts comparable and teachable. The athlete's explosive power is now channeled through equipment that ensures fairness, but also requires adaptation to a uniform setup.",
      whyItMatters: "Starting blocks transformed sprint starts by standardizing the starting position. Before blocks, sprinters used hand-dug holes or simply started from a standing position, creating variability that made starts incomparable. Blocks solved this by providing a consistent platform with adjustable geometry, enabling athletes to optimize their starting position while ensuring everyone starts from the same type of setup. This standardization made starts fairer and more comparable, but it also required athletes to adapt their technique to the blocks' requirements. By the mid-20th century, block technique had become a fundamental skill in sprinting.",
      whySignificant: "Starting blocks represent the professionalization and standardization of track and field. They emerged during a period when sport was becoming more competitive, televised, and data-driven. The blocks' significance lies in establishing that equipment standardization could improve both fairness and performance. This shift had lasting impact: it made starts comparable across eras and venues, enabled biomechanical analysis of starting technique, and established the pattern of using equipment to standardize competition. The blocks set a precedent for how governing bodies use equipment rules to balance innovation with fairness.",
      signatureDetail: "Standardized starting geometry made sprint starts comparable and teachable.",
      debatePrompt: "Does standardization make competition fairer, or does it limit individual expression?",
      howItWorks: {
        bullets: [
          "Adjustable foot pedals allow athletes to position feet at optimal angles for force production",
          "Rigid frame provides stable platform that prevents slipping during explosive starts",
          "Rubber pads on pedals create grip that enables maximum force application",
          "Standardized dimensions ensure consistent setup across all competitions"
        ],
        paragraph: "Starting blocks work by providing a stable, adjustable platform for sprint starts. The adjustable pedals allow athletes to position their feet at angles optimized for horizontal force production, while the rigid frame ensures the platform doesn't move during the explosive start. The rubber pads provide grip that enables maximum force application without slipping. This combination of adjustability and stability makes starts more powerful and consistent than hand-dug holes or standing starts."
      },
      tradeoffs: [
        "Fairness: Blocks standardize starts, but they require athletes to adapt to a uniform setup that may not suit everyone",
        "Performance: Blocks enable more powerful starts, but they require technique training that favors athletes with access to coaching",
        "Comparability: Blocks make starts comparable, but they limit the diversity of starting techniques that might be effective",
        "Access: Blocks are required equipment, but they create cost barriers for programs that can't afford quality blocks",
        "Standardization: Blocks ensure fairness, but they make starts more uniform and potentially less expressive"
      ],
      keyTerms: [],
      sourcesNote: "Source: Track & field equipment references"
    },
    tourContent: {
      reflectionChoices: [
        {
          value: "Standardization ensures fairness",
          feedback: "You believe that standardization makes competition fairer by creating equal conditions. Starting blocks ensure everyone starts from the same position, eliminating variability. This perspective values consistency and comparability. But consider: does standardization limit individual expression? Some athletes might benefit from different starting positions, but standardization requires uniformity.",
          followUpQuestion: "Does standardization always increase fairness, or can it sometimes limit individual advantage?",
          lookForThisNext: "heuer-stopwatch-1960s"
        },
        {
          value: "Individual expression matters",
          feedback: "You value allowing athletes to express their unique technique and preferences. Standardization might make competition fairer, but it could also limit the diversity of approaches. This perspective prioritizes individual variation over uniformity. But consider: without standardization, how do we ensure fair comparison? Variability might create unfair advantages.",
          followUpQuestion: "How do we balance individual expression with fair competition?",
          lookForThisNext: "track-spikes-vintage"
        },
        {
          value: "Rules should evolve",
          feedback: "You recognize that standardization rules need to adapt as we learn more about performance. Starting blocks became standard because they improved fairness, but rules should continue evolving. This perspective values both consistency and improvement. The challenge is knowing when to change rules and when to maintain them.",
          followUpQuestion: "How do we decide when standardization rules need to change?",
          lookForThisNext: "vicon-mocap-markers"
        }
      ]
    },
  },
  
  // Gallery 2: Data, Motion & Body
  {
    id: "polar-hrm-1980s",
    slug: "polar-hrm-1980s",
    galleryId: "data-motion-body",
    title: "Polar Heart Rate Monitor",
    subtitle: "Internal effort made visible",
    dateLabel: "1980s",
    yearOrEra: "1980s",
    year: 1980,
    tags: ["Wearables", "Physiology", "Measurement"],
    shortLabel: "Heart rate tracking moved internal effort into a visible training signal.",
    longDescription: "Heart rate monitors popularized training 'zones' in everyday practice. They made intensity legible, enabling endurance athletes to control effort, recovery, and progression—while also encouraging obsession with the number.",
    imagePath: "/objects/polar-heart-rate-monitor.jpg",
    imageSearchQuery: "Polar heart rate monitor 1980s",
    sourceName: "Polar history / wearable archives",
    debatePrompt: "Does tracking heart rate improve training, or does it create unhealthy fixation on numbers?",
    measurementAngle: "HR monitors quantified internal effort, making subjective 'hard' into objective beats per minute and training zones.",
    designAngle: "The chest strap and watch design made physiological monitoring portable and continuous—moving measurement from lab to field.",
    media: {
      imagePath: "/objects/polar-heart-rate-monitor.jpg",
      imageAlt: "Polar heart rate monitor from 1980s",
      imageKind: "artifact",
    },
    description: "Heart rate monitors popularized training zones in everyday practice.",
    significance: "They made intensity legible, enabling control of effort, recovery, and progression.",
    whatToNotice: [
      "How internal signals became external data",
      "The shift from feel to numbers",
      "The balance between guidance and obsession",
    ],
    relatedObjectIds: ["fitbit-tracker", "srm-power-meter"],
    howItChangedPerformance: "Enabled precise intensity control and training zone optimization.",
    provenance: "Polar Electro product",
    materials: "Plastic case, chest strap, electronics",
    dimensions: "Watch: ~4cm, strap: adjustable",
    didactics: {
      wallLabel: "Polar heart rate monitor, 1980s. Used by endurance athletes and coaches to track physiological effort during training and competition. Heart rate tracking moved internal effort into a visible training signal.",
      curatorNote: "The Polar monitor represents a shift from external to internal measurement. Before heart rate monitors, athletes trained by feel—'hard' or 'easy' was subjective. The monitor made effort objective: a number on a watch that could be compared, recorded, and optimized. This shift changed how athletes understood their bodies: effort became data, not just sensation. The monitor reveals our culture's desire to quantify everything, even the invisible internal workings of the body. But it also raises questions: when we trust the number more than our body's signals, what do we lose?",
      whereYoudSeeIt: [
        "Training sessions—endurance athletes monitoring heart rate zones during workouts",
        "Competition—athletes checking heart rate to pace efforts and avoid overexertion",
        "Coaching facilities—coaches using heart rate data to design training programs",
        "Sports science labs—researchers studying physiological responses to exercise"
      ],
      specificUseCases: [
        "1980s training sessions: Endurance athletes wore chest straps and wrist monitors to track heart rate during long runs and bike rides, learning to pace efforts based on heart rate zones rather than perceived exertion.",
        "Coaching programs: Coaches used heart rate data to design interval training, ensuring athletes trained in specific zones for optimal physiological adaptation.",
        "Competition pacing: Marathon runners monitored heart rate during races to avoid going too hard too early, using the number to guide effort when body signals were unreliable.",
        "Sports science research: Scientists used heart rate monitors to study training adaptations, correlating heart rate responses with performance improvements.",
        "Recovery monitoring: Athletes tracked resting heart rate to assess recovery, using changes in baseline heart rate to determine when to train hard and when to rest."
      ],
      signatureMoment: "In a 1980s training session, a runner checks their wrist monitor mid-run, seeing their heart rate displayed in real-time. For the first time, the invisible internal effort is visible: 165 beats per minute. This number transforms how they understand their workout—not just 'hard' or 'easy,' but a specific physiological state. The monitor makes effort objective and comparable, but it also creates a new relationship with the body: the number becomes more trusted than the body's own signals.",
      whyItMatters: "Heart rate monitors transformed endurance training by making internal effort visible and quantifiable. Before monitors, athletes trained by perceived exertion—'hard' or 'easy' was subjective and incomparable. Monitors solved this by providing objective physiological data that could be used to design training programs, pace efforts, and assess recovery. This shift changed how athletes trained: effort became data-driven rather than feel-based. By the 1990s, heart rate zones had become fundamental to endurance training, establishing the pattern of using physiological data to optimize performance.",
      whySignificant: "The Polar heart rate monitor represents the beginning of wearable physiological monitoring in sport. It emerged during a period when sports science was becoming more data-driven and accessible. The monitor's significance lies in making internal measurement portable and practical: for the first time, athletes could track their physiology outside the lab, during actual training and competition. This shift had profound implications: it democratized sports science, enabled data-driven training, and established the pattern of continuous physiological monitoring that continues today with smartwatches and fitness trackers.",
      signatureDetail: "Portable heart rate monitoring made internal effort visible and optimizable.",
      debatePrompt: "Does tracking heart rate improve training, or does it create unhealthy fixation on numbers?",
      howItWorks: {
        bullets: [
          "Chest strap with electrodes detects electrical signals from the heart",
          "Wireless transmission sends heart rate data to wrist monitor in real-time",
          "Wrist display shows current heart rate and can track zones during exercise",
          "Battery-powered design enables continuous monitoring during long training sessions"
        ],
        paragraph: "The heart rate monitor works by detecting the heart's electrical activity through electrodes in a chest strap. The strap picks up the electrical signals that trigger each heartbeat, transmitting this data wirelessly to a wrist monitor. The monitor displays the heart rate in real-time, allowing athletes to see their physiological effort as it happens. This continuous monitoring enables athletes to train within specific heart rate zones, optimizing intensity for different training goals."
      },
      tradeoffs: [
        "Data vs intuition: Heart rate data provides objective feedback, but it can disconnect athletes from their body's natural signals",
        "Access: Early monitors were expensive, creating barriers for athletes who couldn't afford physiological monitoring",
        "Obsession: Continuous heart rate tracking can lead to unhealthy fixation on numbers rather than listening to the body",
        "Accuracy: Heart rate is affected by many factors beyond effort, potentially leading to misinterpretation of data",
        "Dependency: Athletes may become dependent on heart rate data, losing ability to pace by feel"
      ],
      keyTerms: [],
      sourcesNote: "Source: Polar history / wearable archives"
    },
    tourContent: {
      reflectionChoices: [
        {
          value: "Data improves training",
          feedback: "You believe that tracking heart rate makes training more effective by providing objective feedback. The monitor enables precise intensity control and helps athletes optimize their effort. This perspective values data-driven training over intuition. But consider: does constant monitoring disconnect athletes from their body's natural signals? Some athletes might become overly dependent on the numbers.",
          followUpQuestion: "When does data enhance training, and when does it replace intuition?",
          lookForThisNext: "srm-power-meter"
        },
        {
          value: "Body awareness matters most",
          feedback: "You prioritize listening to your body's natural signals over external data. Heart rate monitors might provide useful information, but they shouldn't replace internal awareness. This perspective values the athlete's connection to their own body. But consider: can data and body awareness work together? The monitor might help athletes learn to recognize their body's signals better.",
          followUpQuestion: "Can technology enhance body awareness, or does it always replace it?",
          lookForThisNext: "fitbit-tracker"
        },
        {
          value: "Balance is key",
          feedback: "You recognize that heart rate data can be valuable when used thoughtfully, but it shouldn't become an obsession. The monitor is a tool, not a master. This perspective seeks balance between data and intuition. The challenge is knowing when to trust the numbers and when to trust your body.",
          followUpQuestion: "How do we use data tools without becoming dependent on them?",
          lookForThisNext: "vicon-mocap-markers"
        }
      ]
    },
  },
  {
    id: "srm-power-meter",
    slug: "srm-power-meter",
    galleryId: "data-motion-body",
    title: "Cycling Power Meter (SRM-style crank)",
    subtitle: "Power made portable",
    dateLabel: "late 1980s–1990s",
    yearOrEra: "late 1980s–1990s",
    year: 1990,
    tags: ["Measurement", "Endurance", "Data"],
    shortLabel: "Power made performance 'portable'—a lab metric taken onto the road.",
    longDescription: "Power meters transformed endurance training by offering a direct output measure, independent of wind, terrain, or heart rate drift. They helped establish modern coaching language: thresholds, intervals, fatigue, and pacing as data problems.",
    imagePath: "/objects/cycling-power-meter-crank.jpg",
    imageSearchQuery: "SRM power meter crank",
    sourceName: "Cycling tech history / SRM references",
    debatePrompt: "Does power data make training more scientific, or does it reduce the art of pacing?",
    measurementAngle: "Power meters provided direct output measurement—watts—independent of external conditions, making performance comparable across environments.",
    designAngle: "The crank-based design integrated measurement into the bike itself, making power a real-time, always-available metric.",
    media: {
      imagePath: "/objects/cycling-power-meter-crank.jpg",
      imageAlt: "SRM power meter on bicycle crank",
      imageKind: "artifact",
    },
    description: "Power meters transformed endurance training with direct output measurement.",
    significance: "They helped establish modern coaching language around thresholds, intervals, and pacing.",
    whatToNotice: [
      "How direct measurement changed training science",
      "The shift from perceived effort to objective output",
      "The language of thresholds and intervals",
    ],
    relatedObjectIds: ["polar-hrm-1980s", "vicon-mocap-markers"],
    howItChangedPerformance: "Enabled precise pacing, threshold training, and fatigue management through direct power measurement.",
    provenance: "SRM (Schoberer Rad Messtechnik) product",
    materials: "Metal crank, strain gauges, electronics",
    dimensions: "Integrated into standard crank length",
    didactics: {
      wallLabel: "SRM power meter, 1990s. Used by competitive cyclists to measure power output in watts during training and racing. Power made performance 'portable'—a lab metric taken onto the road.",
      curatorNote: "The power meter represents the ultimate quantification of cycling performance. Unlike heart rate, which is affected by many variables, power is direct output—what the cyclist actually produces. This made training more scientific: athletes could train to specific power targets, pace races based on sustainable power, and measure improvement objectively. The power meter transformed cycling from an art to a science, but it also created a new language: watts, thresholds, normalized power. This object reveals how measurement changes not just training, but how we think about performance itself.",
      whereYoudSeeIt: [
        "Training rides—cyclists monitoring power output to train in specific zones",
        "Racing—athletes using power data to pace efforts and avoid going too hard",
        "Coaching analysis—coaches reviewing power files to design training and assess fitness",
        "Sports science labs—researchers studying power output and training adaptations"
      ],
      specificUseCases: [
        "1990s training rides: Professional cyclists used power meters to train at specific wattage targets, enabling precise control of training intensity regardless of terrain or conditions.",
        "Race pacing: Cyclists monitored power during races to avoid going too hard too early, using sustainable power targets to optimize performance over long distances.",
        "Coaching analysis: Coaches downloaded power data after rides, analyzing files to identify strengths, weaknesses, and training needs based on objective output measurements.",
        "Threshold testing: Athletes performed power tests to determine functional threshold power, using this number to design training zones and track fitness improvements.",
        "Training program design: Coaches used power data to create periodized training plans, ensuring athletes trained at optimal intensities for different fitness adaptations."
      ],
      signatureMoment: "During a 1990s training ride, a cyclist glances at their handlebar computer, seeing 280 watts displayed in real-time. For the first time, they can see exactly how much power they're producing, independent of wind, terrain, or how they feel. This number transforms their relationship with effort: not just 'hard' or 'easy,' but a precise measurement of output. The power meter makes performance objective and comparable, but it also changes how they experience cycling—the number becomes the focus, not the feeling of the ride.",
      whyItMatters: "Power meters transformed cycling training by providing direct measurement of performance output. Unlike heart rate, which is affected by many variables, power is what the cyclist actually produces—making it the most reliable metric for training and pacing. This shift changed how cyclists trained: effort became data-driven, with specific wattage targets replacing perceived exertion. Power meters enabled precise pacing in races, scientific training program design, and objective measurement of fitness improvements. By the 2000s, power-based training had become standard for competitive cyclists.",
      whySignificant: "The SRM power meter represents the pinnacle of performance quantification in endurance sport. It emerged during a period when cycling was becoming more scientific and data-driven. The power meter's significance lies in making lab-quality measurement portable and practical: for the first time, cyclists could measure their actual output during real training and racing. This shift had profound implications: it made training more scientific, enabled precise race pacing, and established power as the gold standard for cycling performance measurement. The power meter set a precedent for how direct measurement could transform sport.",
      signatureDetail: "Direct power measurement made cycling performance objective and optimizable.",
      debatePrompt: "Does power data make training more scientific, or does it reduce the art of pacing?",
      howItWorks: {
        bullets: [
          "Strain gauges in the crank detect deformation when force is applied",
          "Electronics convert strain measurements into power calculations (force × velocity)",
          "Wireless transmission sends power data to handlebar computer in real-time",
          "Integrated design ensures measurement accuracy regardless of riding conditions"
        ],
        paragraph: "Power meters work by measuring the force applied to the pedals and the speed of pedaling. Strain gauges embedded in the crank detect tiny deformations when force is applied, and electronics convert these measurements into power calculations. The system multiplies force by velocity to calculate watts—the actual power output. This direct measurement is independent of external conditions like wind or terrain, making it the most reliable metric for cycling performance."
      },
      tradeoffs: [
        "Precision vs feel: Power data provides precise feedback, but it can reduce connection to natural pacing instincts",
        "Cost: Power meters are expensive, creating barriers for cyclists who can't afford direct measurement",
        "Dependency: Cyclists may become dependent on power data, losing ability to pace by feel",
        "Complexity: Power-based training requires understanding of thresholds and zones, favoring athletes with coaching access",
        "Measurement limits: Power measures output, but it doesn't capture efficiency, technique, or other aspects of performance"
      ],
      keyTerms: [],
      sourcesNote: "Source: Cycling tech history / SRM references"
    },
    tourContent: {
      reflectionChoices: [
        {
          value: "Precision enables optimization",
          feedback: "You value the precision that power meters provide. Direct power measurement makes training more scientific and enables exact pacing and threshold work. This perspective sees data as essential for optimization. But consider: does this precision come at the cost of the art of cycling? Some cyclists might lose the feel for pacing when they rely too heavily on numbers.",
          followUpQuestion: "Does scientific precision enhance or diminish the art of performance?",
          lookForThisNext: "vicon-mocap-markers"
        },
        {
          value: "Feel and intuition matter",
          feedback: "You believe that the art of pacing and cycling comes from feel, not data. Power meters might provide information, but they shouldn't replace the cyclist's connection to their effort. This perspective values human judgment over mechanical measurement. But consider: can power data help cyclists develop better feel? The numbers might teach athletes to recognize effort levels.",
          followUpQuestion: "Can data help develop intuition, or does it always replace it?",
          lookForThisNext: "polar-hrm-1980s"
        },
        {
          value: "Data and feel work together",
          feedback: "You recognize that power meters and intuition can complement each other. Data provides objective feedback, while feel provides context and nuance. This perspective values both measurement and human judgment. The challenge is integrating them effectively—using data to inform but not replace feel.",
          followUpQuestion: "How do we integrate data and intuition without one dominating the other?",
          lookForThisNext: "fitbit-tracker"
        }
      ]
    },
  },
  {
    id: "vicon-mocap-markers",
    slug: "vicon-mocap-markers",
    galleryId: "data-motion-body",
    title: "Motion Capture Markers & Suit",
    subtitle: "Movement as coordinates",
    dateLabel: "2000s–present",
    yearOrEra: "2000s–present",
    year: 2000,
    tags: ["Biomechanics", "Motion", "Analysis"],
    shortLabel: "Turn movement into coordinates—and movement becomes editable.",
    longDescription: "Motion capture systems convert bodies into tracked points, enabling gait analysis, injury prevention modeling, and technique optimization. But they also raise questions: which movements 'count,' and whose bodies become the template for 'ideal' form?",
    imagePath: "/objects/motion-capture-suit-markers.jpg",
    imageSearchQuery: "Vicon motion capture markers suit",
    sourceName: "Biomechanics lab tools / Vicon-style systems",
    debatePrompt: "Does motion capture reveal 'ideal' form, or does it create narrow definitions of correct movement?",
    measurementAngle: "Mocap quantifies movement in 3D space—angles, velocities, forces—making technique analyzable and comparable.",
    designAngle: "The marker system reduces complex movement to discrete points, enabling mathematical modeling but potentially losing nuance.",
    media: {
      imagePath: "/objects/motion-capture-suit-markers.jpg",
      imageAlt: "Motion capture suit with reflective markers",
      imageKind: "artifact",
    },
    description: "Motion capture systems convert bodies into tracked points.",
    significance: "They enable gait analysis, injury prevention, and technique optimization.",
    whatToNotice: [
      "How movement becomes data",
      "The balance between analysis and nuance",
      "Questions about whose form becomes 'ideal'",
    ],
    relatedObjectIds: ["srm-power-meter", "fitbit-tracker"],
    howItChangedPerformance: "Enabled biomechanical analysis and technique optimization through precise movement tracking.",
    provenance: "Motion capture system (Vicon-style)",
    materials: "Reflective markers, suit, camera system",
    dimensions: "Full-body marker set",
    didactics: {
      wallLabel: "Motion capture markers and suit, 2000s–present. Used in biomechanics labs and elite training facilities to analyze movement in 3D space. Turn movement into coordinates—and movement becomes editable.",
      curatorNote: "Motion capture represents the ultimate reduction of human movement to data. The suit covered in reflective markers transforms the fluid, organic act of an athlete in motion into a series of quantifiable points. This object reveals our desire to perfect movement through analysis, but it also raises profound questions: whose movement becomes the template for 'ideal' form? Does this precision enhance performance or homogenize it? The markers don't just measure—they create a definition of what 'correct' movement looks like, potentially excluding forms of excellence that don't fit the model.",
      whereYoudSeeIt: [
        "Elite sports biomechanics labs—scientists analyzing technique and injury risk",
        "Professional sports teams—coaches using data to optimize performance",
        "Olympic training centers—athletes refining technique based on 3D analysis",
        "Rehabilitation clinics—therapists assessing movement patterns and recovery",
        "Academic research—studying human movement science"
      ],
      specificUseCases: [
        "2000s biomechanics labs: Scientists used motion capture to analyze running gait, identifying subtle inefficiencies that could lead to injury or limit performance. Athletes ran on treadmills while cameras tracked marker positions, creating 3D models of their movement.",
        "Professional sports facilities: Coaches used motion capture data to compare an athlete's technique to 'ideal' models, providing specific feedback on joint angles, stride length, and force production.",
        "Injury prevention research: Medical researchers used motion capture to study how movement patterns change after injury, identifying risk factors and developing prevention strategies.",
        "Technique optimization: Elite athletes performed movements in motion capture labs, receiving data-driven feedback on how to adjust their form for maximum efficiency and power.",
        "Rehabilitation assessment: Physical therapists used motion capture to track recovery progress, comparing movement patterns before and after treatment to measure improvement."
      ],
      signatureMoment: "In a biomechanics lab, an athlete runs on a treadmill wearing a suit covered in reflective markers. As they move, cameras track each marker's position, converting their fluid running motion into a series of precise coordinates. For the first time, every angle, every joint position, every subtle movement is visible as data. This moment represents a shift: movement is no longer just felt or observed—it's quantified, analyzed, and optimized. The athlete's natural style becomes a dataset that can be compared, edited, and improved.",
      whyItMatters: "Motion capture transformed biomechanical analysis by making movement quantifiable in 3D space. Before motion capture, coaches and scientists relied on visual observation and 2D video, which couldn't capture the full complexity of human movement. Motion capture solved this by providing precise 3D data on joint angles, velocities, and forces. This shift changed how technique is analyzed and optimized: movement became data-driven rather than observation-based. By the 2010s, motion capture had become standard in elite sports science, enabling evidence-based technique improvement and injury prevention.",
      whySignificant: "Motion capture represents the pinnacle of movement quantification in sport. It emerged during a period when sports science was becoming more data-driven and accessible to elite athletes. Motion capture's significance lies in making the invisible mechanics of performance visible and editable: for the first time, coaches could see exactly how an athlete moved in three dimensions and provide specific, data-driven feedback. This shift had profound implications: it enabled evidence-based technique optimization, advanced injury prevention research, and established motion analysis as a fundamental tool in elite sports. However, it also raised questions about whether this precision creates narrow definitions of 'ideal' form that might exclude individual variation.",
      signatureDetail: "3D movement analysis made technique optimization data-driven and precise.",
      debatePrompt: "Does motion capture reveal 'ideal' form, or does it create narrow definitions of correct movement?",
      howItWorks: {
        bullets: [
          "Reflective markers placed on key body points (joints, limbs) reflect infrared light",
          "Multiple cameras positioned around the capture volume track marker positions in 3D space",
          "Software calculates joint angles, velocities, and forces from marker positions",
          "Data is compared to biomechanical models to identify inefficiencies and optimization opportunities"
        ],
        paragraph: "Motion capture works by tracking reflective markers placed on an athlete's body. Multiple infrared cameras positioned around the capture volume detect the markers' positions in 3D space. Software then calculates joint angles, segment velocities, and forces from these positions, creating a detailed biomechanical model of the movement. This data can be compared to normative models or previous captures to identify changes, inefficiencies, or optimization opportunities."
      },
      tradeoffs: [
        "Precision vs individuality: Motion capture provides precise data, but it might favor certain body types or movement patterns over others, potentially homogenizing technique",
        "Access: Motion capture systems are expensive and require specialized facilities, creating barriers for athletes who can't access elite labs",
        "Data vs feel: Detailed biomechanical data might disconnect athletes from their natural movement instincts and body awareness",
        "Ideal vs effective: Motion capture might define 'ideal' form that doesn't account for individual biomechanics or effective variations",
        "Analysis vs expression: Quantifying movement might reduce the art and individual expression that makes sport diverse and interesting"
      ],
      keyTerms: [],
      sourcesNote: "Source: Biomechanics lab tools / Vicon-style systems"
    },
    tourContent: {
      reflectionChoices: [
        {
          value: "Analysis reveals truth",
          feedback: "You believe that motion capture reveals objective truths about movement. The data shows what's actually happening, enabling evidence-based technique improvement. This perspective values scientific analysis over subjective judgment. But consider: does motion capture create a narrow definition of 'ideal' form? The system might favor certain body types or movement patterns over others.",
          followUpQuestion: "Whose movement becomes the template for 'ideal' form, and who gets excluded?",
          lookForThisNext: "fitbit-tracker"
        },
        {
          value: "Movement is personal",
          feedback: "You recognize that movement is highly individual and can't be reduced to data points. Motion capture might provide insights, but it shouldn't define what's 'correct' for everyone. This perspective values individual variation and personal expression. But consider: can motion capture help athletes understand their unique movement patterns? The data might reveal individual strengths and weaknesses.",
          followUpQuestion: "Can data respect individual movement patterns, or does it always standardize?",
          lookForThisNext: "srm-power-meter"
        },
        {
          value: "Balance analysis and nuance",
          feedback: "You see value in motion capture analysis while recognizing its limits. The data provides useful insights, but movement is more complex than what can be captured. This perspective seeks balance between scientific analysis and human nuance. The challenge is using the data to inform without reducing movement to numbers.",
          followUpQuestion: "How do we use movement data without losing the art and nuance of human motion?",
          lookForThisNext: "vicon-mocap-markers"
        }
      ]
    },
  },
  {
    id: "fitbit-tracker",
    slug: "fitbit-tracker",
    galleryId: "data-motion-body",
    title: "Fitbit Activity Tracker",
    subtitle: "Daily life as performance",
    dateLabel: "2010s",
    yearOrEra: "2010s",
    year: 2010,
    tags: ["Wearables", "Self-tracking", "Behavior"],
    shortLabel: "When daily life becomes performance—steps, sleep, and streaks become goals.",
    longDescription: "Consumer trackers made performance continuous: not just training sessions, but habits. The device symbolizes the feedback loop of self-quantification—motivation, anxiety, social comparison, and the idea that 'health' is a dashboard.",
    imagePath: "/objects/fitbit-activity-tracker.jpg",
    imageSearchQuery: "Fitbit tracker early model",
    sourceName: "Fitbit product imagery / tech press photos",
    debatePrompt: "Does continuous tracking improve health, or does it create unhealthy monitoring behaviors?",
    measurementAngle: "Fitbits quantified daily activity—steps, calories, sleep—making 'health' a continuous, measurable state.",
    designAngle: "The wrist-worn design made tracking always-on and invisible, integrating measurement into everyday life.",
    media: {
      imagePath: "/objects/fitbit-activity-tracker.jpg",
      imageAlt: "Early Fitbit activity tracker",
      imageKind: "artifact",
    },
    description: "Consumer trackers made performance continuous and habitual.",
    significance: "They symbolize the feedback loop of self-quantification and social comparison.",
    whatToNotice: [
      "How tracking became continuous and invisible",
      "The shift from training to lifestyle",
      "The balance between motivation and obsession",
    ],
    relatedObjectIds: ["polar-hrm-1980s", "normatec-boots"],
    howItChangedPerformance: "Made health and activity a continuous, measurable, and social experience.",
    provenance: "Fitbit product",
    materials: "Plastic case, sensors, display",
    dimensions: "Wrist-worn, ~2cm wide",
    didactics: {
      wallLabel: "Fitbit activity tracker, 2010s. A wrist-worn device that tracks steps, calories, and sleep, making daily life measurable and turning habits into performance metrics. When daily life becomes performance—steps, sleep, and streaks become goals.",
      curatorNote: "The Fitbit represents a fundamental shift in how we understand health and activity. Before consumer trackers, activity was something you did during training or exercise. The Fitbit made activity continuous and measurable—every step counted, every day mattered. This object reveals how technology changes our relationship with our bodies: health becomes a dashboard, activity becomes a game, and rest becomes data. The Fitbit didn't just measure activity—it changed what activity meant, transforming daily life into a performance metric.",
      whereYoudSeeIt: [
        "Daily life—people wearing trackers throughout the day to monitor activity",
        "Workplaces—employees using trackers to compete in step challenges",
        "Social media—people sharing activity data and achievements",
        "Healthcare—doctors recommending trackers for patient monitoring",
        "Fitness communities—trackers connecting people through shared goals"
      ],
      specificUseCases: [
        "2010s daily tracking: People wore Fitbits throughout the day to monitor steps, calories, and sleep, making activity a continuous, measurable experience rather than just exercise sessions.",
        "Workplace wellness programs: Companies distributed Fitbits to employees for step challenges, using tracking to promote health and engagement through gamification.",
        "Social sharing: Users connected Fitbits to social media, sharing activity data and competing with friends, making health a social and competitive experience.",
        "Healthcare monitoring: Doctors recommended Fitbits to patients for tracking activity and sleep, using consumer devices for medical monitoring and behavior change.",
        "Fitness communities: Athletes and fitness enthusiasts used Fitbits to track daily activity, creating communities around shared goals and achievements."
      ],
      signatureMoment: "Imagine checking your wrist at the end of a long day. The Fitbit shows 8,234 steps—just 766 steps short of your 9,000-step goal. You decide to take a walk around the block, not because you feel like it, but because the number on your wrist tells you to. This moment represents a fundamental shift: activity is no longer just what you do, but what you measure. The Fitbit transformed daily life into a performance metric, making every step count and every day a chance to hit a goal.",
      whyItMatters: "The Fitbit transformed health from a periodic checkup to a continuous, measurable experience. Before consumer trackers, people measured activity through occasional workouts or doctor visits. The Fitbit made activity always-on and visible, turning daily life into a performance dashboard. This shift changed how people understand health: it became something you track, optimize, and share, not just something you maintain. The Fitbit created a new category of self-quantification, establishing activity tracking as a fundamental part of modern health culture.",
      whySignificant: "The Fitbit represents the democratization and consumerization of health tracking. It emerged during a period when wearable technology was becoming accessible and affordable. The Fitbit's significance lies in making activity tracking available to everyone, not just elite athletes or medical patients. This shift had profound implications: it created a self-quantification movement, established activity tracking as a lifestyle product, and raised questions about privacy, obsession, and the relationship between data and health. The Fitbit symbolizes how technology changes our relationship with our bodies, making health a continuous, measurable, and social experience.",
      signatureDetail: "Daily life became a continuous performance metric, tracked and optimized in real-time.",
      debatePrompt: "Does continuous tracking improve health, or does it create unhealthy monitoring behaviors?",
      howItWorks: {
        bullets: [
          "Accelerometer detects movement and converts motion into step counts",
          "Heart rate sensor (in later models) monitors cardiovascular activity",
          "Sleep tracking uses movement patterns to estimate sleep stages",
          "Bluetooth syncs data to smartphone app for analysis and social sharing"
        ],
        paragraph: "The Fitbit uses an accelerometer to detect movement and convert motion into step counts. The device tracks activity throughout the day, measuring steps, distance, calories burned, and (in later models) heart rate. At night, the tracker monitors movement patterns to estimate sleep stages. All data syncs wirelessly to a smartphone app, where users can view their activity, set goals, and share achievements with friends. The device makes activity continuous and visible, transforming daily life into measurable performance data."
      },
      tradeoffs: [
        "Motivation vs obsession: Tracking can motivate positive behavior, but it can also create unhealthy fixation on numbers",
        "Awareness vs dependency: Data can increase body awareness, but it might also replace natural intuition",
        "Social connection vs comparison: Sharing activity can create community, but it can also foster unhealthy competition",
        "Privacy vs insight: Continuous tracking provides valuable health data, but it also raises privacy concerns",
        "Accessibility vs accuracy: Consumer trackers are affordable and accessible, but they may be less accurate than medical devices"
      ],
      keyTerms: [],
      sourcesNote: "Source: Fitbit product imagery / tech press photos"
    },
    tourContent: {
      reflectionChoices: [
        {
          value: "Tracking improves behavior",
          feedback: "You believe that continuous tracking motivates positive behavior change. The Fitbit provides feedback that helps people stay active and make healthier choices. This perspective values data-driven motivation. But consider: does constant tracking create anxiety or unhealthy obsession? Some people might become fixated on numbers rather than listening to their body's needs.",
          followUpQuestion: "When does tracking motivate, and when does it create unhealthy pressure?",
          lookForThisNext: "normatec-boots"
        },
        {
          value: "Natural awareness is better",
          feedback: "You prioritize natural body awareness over external tracking. The Fitbit might provide data, but it shouldn't replace listening to your body's signals. This perspective values internal awareness over external measurement. But consider: can tracking help people develop better body awareness? The data might teach people to recognize their activity patterns.",
          followUpQuestion: "Can tracking enhance body awareness, or does it always replace it?",
          lookForThisNext: "polar-hrm-1980s"
        },
        {
          value: "Balance tracking and intuition",
          feedback: "You recognize that tracking can be useful when balanced with intuition. The Fitbit provides helpful feedback, but it shouldn't dominate decision-making. This perspective seeks balance between data and natural awareness. The challenge is using tracking to inform without becoming dependent on it.",
          followUpQuestion: "How do we use activity tracking without losing connection to our body's natural signals?",
          lookForThisNext: "theragun-massage-gun"
        }
      ]
    },
  },
  
  // Gallery 3: Recovery, Ethics & Future
  {
    id: "normatec-boots",
    slug: "normatec-boots",
    galleryId: "recovery-ethics-future",
    title: "Normatec Compression Boots",
    subtitle: "Recovery as device",
    dateLabel: "2010s–present",
    yearOrEra: "2010s–present",
    year: 2010,
    tags: ["Recovery", "Technology", "Optimization"],
    shortLabel: "Recovery becomes a device—promising faster readiness and less soreness.",
    longDescription: "Compression systems represent recovery-as-technology: mechanized routines once reserved for clinics. Their popularity shows how 'rest' gets redesigned into measurable intervention—time saved, soreness reduced, readiness improved.",
    imagePath: "/objects/normatec-compression-boots.jpg",
    imageSearchQuery: "Normatec compression boots",
    sourceName: "Normatec product imagery",
    debatePrompt: "Does recovery technology actually improve outcomes, or is it mostly placebo and marketing?",
    measurementAngle: "Compression boots promise measurable recovery metrics—reduced soreness, faster readiness—though evidence is mixed.",
    designAngle: "The mechanized design turns passive rest into active intervention, making recovery feel productive and measurable.",
    media: {
      imagePath: "/objects/normatec-compression-boots.jpg",
      imageAlt: "Normatec compression recovery boots",
      imageKind: "artifact",
    },
    description: "Compression systems represent recovery-as-technology.",
    significance: "They show how 'rest' gets redesigned into measurable intervention.",
    whatToNotice: [
      "How recovery became a technology",
      "The shift from passive to active recovery",
      "Questions about evidence vs. marketing",
    ],
    relatedObjectIds: ["theragun-massage-gun", "cryotherapy-chamber"],
    howItChangedPerformance: "Made recovery feel measurable and productive, though evidence for effectiveness is debated.",
    provenance: "Normatec product",
    materials: "Fabric, air compression system",
    dimensions: "Full leg coverage",
    didactics: {
      wallLabel: "Normatec compression boots, 2010s–present. Used by athletes in training facilities and recovery centers to accelerate recovery from intense exercise. Recovery becomes a device—promising faster readiness and less soreness.",
      curatorNote: "Normatec boots are a powerful symbol of the modern 'recovery economy,' where rest is no longer passive but an active, technologically mediated process. They reflect our relentless pursuit of marginal gains, even in the downtime between training sessions. This object asks us to critically examine the promises of such technologies: are they truly effective, or do they tap into a psychological need to feel proactive about recovery? What are the implications for fairness when high-tech recovery is expensive? The boots represent a shift where recovery became a product, a ritual, and a status symbol.",
      whereYoudSeeIt: [
        "Professional sports locker rooms—athletes using compression boots after games and practices",
        "Elite training facilities—recovery rooms equipped with compression systems",
        "Physical therapy clinics—therapists using compression for injury recovery",
        "High-end gyms—wellness centers offering compression therapy",
        "Endurance event recovery zones—marathons and triathlons providing compression for participants"
      ],
      specificUseCases: [
        "2010s NBA locker rooms: Professional basketball players used Normatec boots after games to reduce muscle soreness and accelerate recovery, making compression therapy part of standard post-game routines.",
        "Elite training centers: Athletes at Olympic training facilities used compression boots between training sessions, believing they could train harder and more frequently with faster recovery.",
        "Marathon recovery zones: Endurance event organizers provided compression boots in recovery areas, allowing participants to use high-tech recovery immediately after finishing races.",
        "Physical therapy: Therapists used compression systems for injury recovery, applying dynamic compression to reduce swelling and improve circulation in injured limbs.",
        "Home recovery setups: Wealthy athletes purchased personal compression systems for home use, making high-tech recovery available 24/7."
      ],
      signatureMoment: "After a grueling training session, an athlete sits in a locker room with compression boots on their legs. The boots inflate and deflate rhythmically, creating a pulsing sensation. For the first time, recovery feels active and measurable—not just rest, but a technological intervention. This moment represents a shift: recovery is no longer passive waiting, but an active process with tools and rituals. The athlete feels proactive, but they're also participating in a recovery economy where technology promises to optimize even downtime.",
      whyItMatters: "Normatec boots transformed recovery from passive rest to active intervention. Before compression systems, recovery meant rest, sleep, and basic nutrition. Compression boots promised to accelerate this process through mechanized therapy, making recovery feel productive and measurable. This shift changed how athletes approach recovery: it became something you do with technology, not just something that happens with time. However, the evidence for compression boots' effectiveness is mixed—some studies show benefits, others show limited effects. This raises questions about whether the benefits are real or psychological.",
      whySignificant: "Normatec boots represent the professionalization and technologization of recovery in sport. They emerged during a period when athletes were seeking every possible advantage, including optimizing recovery time. Compression boots' significance lies in making recovery feel active and measurable: for the first time, athletes could 'do' recovery with a device, not just wait for it. This shift had profound implications: it created a recovery economy, established recovery technology as standard in elite sports, and raised questions about access and evidence. The boots symbolize how recovery became a product and a ritual, not just a natural process.",
      signatureDetail: "Passive rest was redesigned into active, measurable, technological intervention.",
      debatePrompt: "Does advanced recovery technology create an unfair advantage for those who can afford it, or is it a legitimate evolution of athlete care?",
      howItWorks: {
        bullets: [
          "Air compression chambers inflate and deflate in sequence, creating a pulsing pressure",
          "Sequential compression moves from distal to proximal, pushing fluid toward the heart",
          "Pressure settings can be adjusted for intensity and duration",
          "The rhythmic compression is intended to improve circulation and reduce swelling"
        ],
        paragraph: "Normatec boots work by applying sequential air compression to the legs. The boots contain multiple chambers that inflate and deflate in a specific pattern, creating a pulsing pressure that moves from the feet toward the hips. This sequential compression is intended to improve circulation, reduce swelling, and accelerate recovery by moving fluid and metabolic waste products away from the muscles. The pressure and timing can be adjusted to different intensity levels."
      },
      tradeoffs: [
        "Evidence: Some studies show compression benefits, but evidence is mixed and benefits might be psychological rather than physiological",
        "Access: Compression systems are expensive, creating advantages for athletes who can afford high-tech recovery",
        "Dependency: Athletes may become dependent on recovery technology, losing ability to recover naturally",
        "Placebo effect: Benefits might come from feeling proactive rather than actual physiological effects",
        "Cost vs benefit: High cost might not be justified if benefits are limited or psychological"
      ],
      keyTerms: [],
      sourcesNote: "Source: Normatec product imagery"
    },
    tourContent: {
      reflectionChoices: [
        {
          value: "Recovery technology works",
          feedback: "You believe that recovery technology like compression boots provides real benefits. The devices offer measurable improvements in recovery time and soreness reduction. This perspective values technological solutions to recovery challenges. But consider: is the evidence strong enough? Some recovery technologies have limited scientific support, and benefits might be placebo effects.",
          followUpQuestion: "How do we distinguish between real benefits and placebo effects in recovery technology?",
          lookForThisNext: "theragun-massage-gun"
        },
        {
          value: "Natural recovery is sufficient",
          feedback: "You prioritize natural recovery methods over technological interventions. Rest, sleep, and nutrition are sufficient for recovery without expensive devices. This perspective values simplicity and natural processes. But consider: can technology enhance natural recovery? Some devices might complement rather than replace natural recovery.",
          followUpQuestion: "Can technology enhance natural recovery, or does it always interfere with it?",
          lookForThisNext: "cryotherapy-chamber"
        },
        {
          value: "Evidence should guide decisions",
          feedback: "You believe that recovery technology should be evaluated based on scientific evidence, not marketing claims. Some devices might work, others might not. This perspective values critical evaluation over blind acceptance. The challenge is finding reliable evidence in a field with limited research.",
          followUpQuestion: "How do we evaluate recovery technology when scientific evidence is limited?",
          lookForThisNext: "normatec-boots"
        }
      ]
    },
  },
  {
    id: "theragun-massage-gun",
    slug: "theragun-massage-gun",
    galleryId: "recovery-ethics-future",
    title: "Percussive Massage Gun (Theragun-style)",
    subtitle: "Recovery as ritual",
    dateLabel: "2010s–present",
    yearOrEra: "2010s–present",
    year: 2010,
    tags: ["Recovery", "Training", "Wellness"],
    shortLabel: "A tool that turns recovery into a repeatable ritual—portable and intense.",
    longDescription: "Massage guns blur lines between clinical therapy and consumer wellness. They're used for warmups, cooldowns, and 'maintenance,' shaping the belief that performance requires constant micro-interventions.",
    imagePath: "/objects/percussive-massage-gun.jpg",
    imageSearchQuery: "Theragun massage gun",
    sourceName: "Therabody product imagery",
    debatePrompt: "Do massage guns provide real benefits, or are they mostly about feeling proactive?",
    measurementAngle: "Massage guns promise measurable benefits—reduced soreness, improved mobility—though research is limited.",
    designAngle: "The portable, intense design makes recovery feel active and ritualistic, integrating into daily routines.",
    media: {
      imagePath: "/objects/percussive-massage-gun.jpg",
      imageAlt: "Theragun percussive massage device",
      imageKind: "artifact",
    },
    description: "Massage guns blur lines between clinical therapy and consumer wellness.",
    significance: "They shape the belief that performance requires constant micro-interventions.",
    whatToNotice: [
      "How recovery became ritualistic",
      "The shift from occasional to constant intervention",
      "Questions about real benefits vs. feeling proactive",
    ],
    relatedObjectIds: ["normatec-boots", "leather-medicine-ball-early"],
    howItChangedPerformance: "Made recovery feel active and ritualistic, though evidence for benefits is debated.",
    provenance: "Therabody (Theragun) product",
    materials: "Plastic housing, motor, attachments",
    dimensions: "Handheld, ~30cm length",
    didactics: {
      wallLabel: "A handheld device that delivers rapid pulses of pressure to muscles, turning recovery into something athletes can do anywhere, at any time.",
      curatorNote: "This object is a snapshot of how recovery has become portable and individualized. Instead of waiting for scheduled treatments, athletes can 'self-serve' recovery in the moments that fit their routine. At the same time, the device changes what recovery looks like: it becomes an active, almost productive action rather than simple rest. The massage gun sits at the intersection of therapy, gadget culture, and the constant drive to do more with limited time.",
      whereYoudSeeIt: [
        "Training rooms—athletes using massage guns before and after practice",
        "Locker rooms—staff and athletes using devices between periods or events",
        "Home recovery—recreational athletes copying pro routines from social media",
        "Warm-up areas—athletes replacing parts of traditional warm-ups with percussive work",
        "Travel—athletes using devices in hotel rooms when other recovery tools aren't available"
      ],
      specificUseCases: [
        "Training rooms: Athletes use the gun before practice to 'wake up' muscles and after practice to manage soreness, making recovery part of daily training routines.",
        "Sidelines and locker rooms: Staff quickly work on tight calves, quads, or shoulders between periods or events, providing immediate relief without scheduling full treatments.",
        "Home recovery: Recreational athletes buy consumer versions and copy pro routines from social media, bringing elite recovery practices into everyday training.",
        "Warm-up routines: Some athletes replace parts of a traditional warm-up with targeted percussive work on specific muscle groups, believing it prepares muscles more effectively.",
        "Travel days: Athletes use the device in hotel rooms or on the road when other recovery tools are not available, making recovery portable and accessible anywhere."
      ],
      signatureMoment: "Imagine the last few minutes before a game. Instead of a quiet locker room, you hear the constant buzz of percussive guns as players move from station to station. A trainer spends sixty seconds on one athlete's calf, then hands the device off to a teammate who uses it on their shoulder while scrolling through a pre-game playlist. The tool fits into the short gaps of elite schedules, taking the place of longer manual treatments or static stretching sessions.",
      whyItMatters: "Percussive massage guns helped push recovery tools from clinic settings into everyday training environments. They made deep-tissue style work available without a therapist's hands, influencing how athletes warm up, cool down, and manage soreness. Their popularity also shaped expectations: if you are serious about performance, you are expected to own or access one of these devices. The gun represents a shift from occasional, scheduled recovery to frequent, bite-sized interventions woven throughout the day.",
      whySignificant: "Percussive massage guns represent the consumerization of professional therapy tools. They emerged during a period when recovery technology was becoming more accessible and portable. Massage guns' significance lies in making deep tissue massage available to anyone, anytime: for the first time, athletes could administer their own percussive therapy without visiting a therapist. This shift had profound implications: it democratized recovery tools, created a new category of consumer wellness products, and established massage as a daily ritual rather than occasional treatment. However, it also raised questions about evidence, cost, and whether the benefits justify the investment.",
      signatureDetail: "Deep tissue massage became a portable, self-administered, daily ritual.",
      debatePrompt: "Do massage guns provide real benefits, or are they mostly about feeling proactive?",
      howItWorks: {
        bullets: [
          "A small motor drives a piston that moves a rounded head rapidly in and out",
          "The high-frequency pulses deliver repeated mechanical pressure to muscles and connective tissue",
          "Different attachments and speeds are used for different areas or tolerance levels",
          "Users can move slowly along a muscle group or hold the device on a tight spot"
        ],
        paragraph: "Mechanically, the massage gun uses rapid, short-amplitude pulses to stimulate tissue and increase local blood flow. The result is a strong, focused sensation that many athletes feel as a mix of relief and intensity. It offers a way to target specific areas without requiring manual effort from a therapist or partner."
      },
      tradeoffs: [
        "Access and cost: high-end devices can be expensive, creating a gap between athletes who can afford them and those who cannot.",
        "Technique and safety: without guidance, users may apply too much pressure, spend too long on one area, or use the device on sensitive structures.",
        "Substitution effect: athletes may rely on the device instead of addressing underlying training load, mobility, or sleep issues.",
        "Marketing vs evidence: aggressive branding can outpace research about when these tools help and when they are mostly ritual.",
        "Time and attention: constant minor interventions can reinforce the feeling that you should always be 'doing something' to optimize recovery."
      ],
      keyTerms: [],
      sourcesNote: "Source: Therabody product imagery / sports recovery research"
    },
    tourContent: {
      reflectionChoices: [
        {
          value: "Ritual enhances recovery",
          feedback: "You believe that the ritualistic aspect of recovery tools like massage guns provides real value. The act of using the device creates a sense of control and proactive care, which might enhance recovery. This perspective values the psychological benefits alongside physical ones. But consider: does feeling proactive actually improve recovery, or is it mostly psychological? The benefits might come from the ritual itself rather than the device.",
          followUpQuestion: "When does recovery ritual help, and when does it become unnecessary dependency?",
          lookForThisNext: "normatec-boots"
        },
        {
          value: "Evidence matters more than feeling",
          feedback: "You prioritize scientific evidence over the feeling of being proactive. Massage guns might feel good, but if there's limited evidence for benefits, they might not be worth the investment. This perspective values critical evaluation over emotional satisfaction. But consider: can psychological benefits be valuable even without strong physical evidence? Feeling proactive might improve motivation and adherence to recovery routines.",
          followUpQuestion: "How do we value psychological benefits when physical evidence is limited?",
          lookForThisNext: "cryotherapy-chamber"
        },
        {
          value: "Balance ritual and evidence",
          feedback: "You recognize that recovery rituals can be valuable when balanced with evidence-based practices. Massage guns might provide psychological benefits even if physical evidence is limited. This perspective seeks balance between feeling proactive and being evidence-based. The challenge is knowing when ritual enhances recovery and when it becomes unnecessary.",
          followUpQuestion: "How do we balance the psychological value of recovery rituals with evidence-based practices?",
          lookForThisNext: "theragun-massage-gun"
        }
      ]
    },
  },
  {
    id: "nike-vaporfly",
    slug: "nike-vaporfly",
    galleryId: "recovery-ethics-future",
    title: "Nike Vaporfly (Carbon Plate Racing Shoe)",
    subtitle: "Innovation vs. fairness",
    dateLabel: "2016–present",
    yearOrEra: "2016–present",
    year: 2016,
    tags: ["Footwear", "Innovation", "Fairness"],
    shortLabel: "A shoe that became an argument: innovation, advantage, and regulation collide.",
    longDescription: "The Vaporfly era made footwear a central ethics story. When technology produces measurable gains, governing bodies face a dilemma: reward innovation or protect comparability across eras? This object anchors the museum's fairness debates.",
    imagePath: "/objects/nike-vaporfly-racing-shoe.jpg",
    imageSearchQuery: "Nike Vaporfly 4%",
    sourceName: "Nike product imagery / race photography",
    debatePrompt: "Should sport reward innovation, or should rules protect comparability across eras?",
    measurementAngle: "Vaporflys produced measurable performance gains—estimated 4% improvement—creating a clear advantage.",
    designAngle: "The carbon plate and foam design optimized energy return, making the shoe itself a performance technology.",
    media: {
      imagePath: "/objects/nike-vaporfly-racing-shoe.jpg",
      imageAlt: "Nike Vaporfly carbon plate racing shoe",
      imageKind: "artifact",
    },
    description: "The Vaporfly era made footwear a central ethics story.",
    significance: "When technology produces measurable gains, governing bodies face a dilemma.",
    whatToNotice: [
      "How innovation creates measurable advantages",
      "The tension between progress and fairness",
      "Questions about where to draw regulatory lines",
    ],
    relatedObjectIds: ["track-spikes-vintage", "vicon-mocap-markers"],
    howItChangedPerformance: "Produced measurable performance gains, sparking debates about technology limits in sport.",
    provenance: "Nike product",
    materials: "Carbon fiber plate, foam midsole, mesh upper",
    dimensions: "Standard running shoe size",
    didactics: {
      wallLabel: "Nike Vaporfly (Carbon Plate Racing Shoe), 2016–present. Used by elite marathon runners to achieve record-breaking times. A shoe that became an argument: innovation, advantage, and regulation collide.",
      curatorNote: "The Nike Vaporfly isn't just a running shoe; it's a flashpoint in the ongoing debate about technology, fairness, and the very definition of human performance. It forces us to confront the uncomfortable truth that innovation, while exciting, can disrupt the delicate balance of competition. This object asks us to consider: how do we celebrate human ingenuity without undermining the spirit of fair play? Where do we draw the line between a helpful tool and an unfair advantage? The Vaporfly represents how a single product can reshape an entire sport and force governing bodies to reconsider their rules.",
      whereYoudSeeIt: [
        "Elite marathon races—Olympics, World Majors, where runners compete for records",
        "Professional training—elite runners using Vaporflys in training and competition",
        "Sports science journals—research on running economy and performance gains",
        "Running specialty stores—high-performance footwear sections",
        "News headlines—debates about broken records and athletic regulations"
      ],
      specificUseCases: [
        "2016–2019 marathon races: Elite runners wore Vaporflys in major marathons, achieving record-breaking times that sparked debates about whether the shoes provided unfair advantages.",
        "Training sessions: Professional runners used Vaporflys in training to improve running economy, believing the shoes could help them train more effectively and recover faster.",
        "Record attempts: Athletes specifically chose Vaporflys for record attempts, knowing the shoes could provide measurable performance improvements.",
        "Research studies: Sports scientists studied Vaporflys' impact on running economy, publishing data showing 4% improvement in efficiency.",
        "Regulatory debates: Governing bodies evaluated whether Vaporflys violated rules about performance-enhancing equipment, leading to new regulations on shoe technology."
      ],
      signatureMoment: "At the 2019 Berlin Marathon, a runner wearing Vaporflys crosses the finish line, breaking the world record. The shoes—with their carbon plate and advanced foam—have provided a measurable advantage. This moment represents a crisis: innovation has produced undeniable performance gains, but at what cost to fairness? Governing bodies must decide: is this progress to be celebrated, or an unfair advantage to be regulated? The Vaporfly forces a fundamental question: what is human performance when technology is part of the equation?",
      whyItMatters: "The Vaporfly transformed running by producing measurable performance gains that forced a global debate about technology in sport. The combination of a carbon fiber plate and highly resilient foam improved running economy by an estimated 4%, leading to numerous broken records. This shift changed how we think about equipment in sport: the shoe wasn't just protection or support—it was active performance enhancement. The Vaporfly forced governing bodies to reconsider footwear rules and sparked discussions about innovation versus comparability. It established that equipment design could directly improve performance, raising questions about where to draw the line.",
      whySignificant: "The Nike Vaporfly represents a pivotal moment in the relationship between technology and sport. It emerged during a period when running was becoming more competitive and records were being broken. The Vaporfly's significance lies in producing undeniable, measurable performance gains that forced governing bodies to act: for the first time, a shoe was so effective that it required new regulations. This shift had profound implications: it challenged the definition of human performance, forced reconsideration of equipment rules, and established that innovation in sport requires constant evaluation. The Vaporfly symbolizes how technology can reshape competition and force difficult questions about fairness and progress.",
      signatureDetail: "A shoe that sparked a global debate about 'technological doping' in running.",
      debatePrompt: "Should sport prioritize rewarding technological innovation, or should rules strictly protect the comparability of human performance across different eras?",
      howItWorks: {
        bullets: [
          "Carbon fiber plate embedded in midsole provides stiffness and energy return",
          "Highly resilient foam (PEBAX) compresses and rebounds more efficiently than traditional materials",
          "Combination of plate and foam creates a 'spring' effect that reduces energy loss",
          "Geometry optimized for forward propulsion and running economy"
        ],
        paragraph: "The Vaporfly works by combining a stiff carbon fiber plate with highly resilient foam. The plate provides structural support and energy return, while the foam compresses and rebounds more efficiently than traditional materials. Together, they create a 'spring' effect that reduces the energy lost with each footstrike, improving running economy. The shoe's geometry is optimized for forward propulsion, making it more efficient than traditional racing flats."
      },
      tradeoffs: [
        "Performance vs fairness: Vaporflys provide clear performance gains, but they raise questions about whether equipment should be part of competition",
        "Innovation vs comparability: Technological innovation is exciting, but it makes it difficult to compare performances across eras",
        "Access: Vaporflys are expensive, creating advantages for athletes who can afford cutting-edge equipment",
        "Regulation: Governing bodies must constantly evaluate new technologies, creating challenges for rule-making",
        "Definition of performance: Vaporflys blur the line between athlete ability and equipment advantage"
      ],
      keyTerms: [],
      sourcesNote: "Source: Nike product imagery / race photography"
    },
    tourContent: {
      reflectionChoices: [
        {
          value: "Innovation should be rewarded",
          feedback: "You believe that sport should reward innovation and technological advancement. The Vaporfly represents progress, and athletes should benefit from better equipment. This perspective values innovation over strict comparability. But consider: does rewarding innovation create unfair advantages? Athletes with access to cutting-edge technology might have advantages that aren't about their ability.",
          followUpQuestion: "How do we reward innovation without creating unfair advantages?",
          lookForThisNext: "track-spikes-vintage"
        },
        {
          value: "Fairness requires limits",
          feedback: "You prioritize fairness and comparability over innovation. Rules should limit technology to ensure that performance reflects athlete ability, not equipment advantages. This perspective values fair competition over technological progress. But consider: where do we draw the line? Every piece of equipment provides some advantage, so complete fairness might be impossible.",
          followUpQuestion: "Where should we draw the line between acceptable and unfair equipment advantages?",
          lookForThisNext: "starting-blocks-modern"
        },
        {
          value: "Balance innovation and fairness",
          feedback: "You recognize that sport needs both innovation and fairness. Technology can improve performance, but rules must prevent unfair advantages. This perspective seeks balance between progress and equity. The challenge is creating rules that allow innovation while maintaining fair competition.",
          followUpQuestion: "How do we create rules that allow innovation while maintaining fairness?",
          lookForThisNext: "nike-vaporfly"
        }
      ]
    },
  },
  {
    id: "cryotherapy-chamber",
    slug: "cryotherapy-chamber",
    galleryId: "recovery-ethics-future",
    title: "Whole-Body Cryotherapy Chamber",
    subtitle: "Extreme recovery",
    dateLabel: "2000s–present",
    yearOrEra: "2000s–present",
    year: 2000,
    tags: ["Recovery", "Science Debate", "Risk"],
    shortLabel: "Extreme cold as recovery—where hype, evidence, and risk meet.",
    longDescription: "Cryotherapy chambers symbolize the future-facing recovery economy: high-tech, high-cost, and often ahead of consensus. This artifact supports a core museum question: how do we evaluate 'effective' when marketing moves faster than evidence?",
    imagePath: "/objects/cryotherapy-chamber.jpg",
    imageSearchQuery: "whole body cryotherapy chamber",
    sourceName: "Sports recovery clinic imagery",
    debatePrompt: "How do we evaluate 'effective' when marketing moves faster than evidence?",
    measurementAngle: "Cryotherapy promises measurable recovery benefits, though research is limited and risks exist.",
    designAngle: "The extreme design (extreme cold, high-tech appearance) creates an aura of cutting-edge performance enhancement.",
    media: {
      imagePath: "/objects/cryotherapy-chamber.jpg",
      imageAlt: "Whole-body cryotherapy chamber",
      imageKind: "artifact",
    },
    description: "Cryotherapy chambers symbolize the future-facing recovery economy.",
    significance: "They raise questions about evaluating effectiveness when marketing moves faster than evidence.",
    whatToNotice: [
      "How extreme interventions become normalized",
      "The balance between innovation and evidence",
      "Questions about risk and benefit",
    ],
    relatedObjectIds: ["normatec-boots", "theragun-massage-gun"],
    howItChangedPerformance: "Represents the cutting-edge recovery economy, though evidence for benefits is debated.",
    provenance: "Cryotherapy clinic equipment",
    materials: "Insulated chamber, liquid nitrogen system",
    dimensions: "Full-body chamber, ~2m height",
    didactics: {
      wallLabel: "Whole-body cryotherapy chamber, 2000s–present. Used in elite training centers and wellness clinics for extreme cold exposure therapy. Extreme cold as recovery—where hype, evidence, and risk meet.",
      curatorNote: "The whole-body cryotherapy chamber is perhaps the most dramatic symbol of the modern recovery arms race. It embodies the belief that extreme interventions can unlock new levels of performance and accelerate healing. This object forces us to grapple with the tension between cutting-edge innovation, scientific evidence, and the powerful allure of 'marginal gains.' It asks: how far are we willing to go, and what risks are we willing to take, in the pursuit of ultimate recovery? The chamber represents how recovery became extreme, expensive, and sometimes unproven.",
      whereYoudSeeIt: [
        "Elite sports training centers—NBA, NFL teams with cryotherapy facilities",
        "High-performance wellness clinics—luxury recovery centers offering extreme cold therapy",
        "Luxury spas—wellness facilities providing cryotherapy as premium service",
        "Research studies—scientists investigating cold therapy's effects on recovery",
        "Documentaries—media coverage of athlete recovery routines"
      ],
      specificUseCases: [
        "2010s NBA facilities: Professional basketball players used cryotherapy chambers after games, standing in -200°F temperatures for 2-3 minutes to reduce inflammation and accelerate recovery.",
        "Elite training centers: Olympic athletes used cryotherapy as part of recovery protocols, believing extreme cold exposure could improve performance and reduce injury risk.",
        "Wellness clinics: High-end recovery centers offered cryotherapy as a premium service, marketing it as cutting-edge technology for performance and wellness.",
        "Research studies: Scientists studied cryotherapy's effects on recovery, with mixed results—some studies showed reduced inflammation, others showed limited effects or risks.",
        "Media coverage: Documentaries and news stories featured cryotherapy chambers, creating public interest and demand for extreme cold therapy despite limited evidence."
      ],
      signatureMoment: "In an elite training facility, an athlete steps into a cryotherapy chamber, the temperature dropping to -200°F. They stand in the extreme cold for three minutes, their body's survival mechanisms kicking in. For the first time, recovery involves subjecting the body to conditions that would be dangerous if prolonged. This moment represents the extreme edge of the recovery economy: when does recovery become something else entirely? The chamber promises to unlock performance through extreme intervention, but it also raises questions about evidence, risk, and whether we've gone too far in the pursuit of optimization.",
      whyItMatters: "Cryotherapy chambers transformed recovery by introducing extreme cold exposure as a performance and wellness intervention. Before cryotherapy, recovery meant rest, nutrition, and moderate interventions. Cryotherapy promised to accelerate recovery through extreme cold, reducing inflammation and improving performance. This shift changed how athletes approach recovery: it became something extreme, expensive, and cutting-edge. However, evidence for cryotherapy's benefits is limited and mixed—some studies show benefits, others show no effect or risks. This raises questions about whether extreme interventions are justified when evidence is uncertain.",
      whySignificant: "Whole-body cryotherapy represents the frontier of the recovery economy, where marketing often outpaces evidence. It emerged during a period when athletes were seeking every possible advantage, including extreme recovery interventions. Cryotherapy's significance lies in pushing the boundaries of what's considered acceptable recovery: for the first time, athletes were subjecting themselves to extreme cold as a performance intervention. This shift had profound implications: it normalized extreme interventions, created a market for high-tech recovery, and raised questions about evidence, risk, and access. The chamber symbolizes how recovery became a frontier where innovation, marketing, and uncertainty collide.",
      signatureDetail: "Extreme cold exposure became a high-tech, high-cost recovery intervention.",
      debatePrompt: "When does a recovery method cross the line from legitimate therapy to an unproven, potentially risky, or ethically questionable performance enhancement?",
      howItWorks: {
        bullets: [
          "Liquid nitrogen or electric cooling system lowers chamber temperature to extreme cold (-200°F)",
          "Athlete stands in chamber for 2-3 minutes, exposing body to extreme cold",
          "Body's survival mechanisms activate, including vasoconstriction and release of endorphins",
          "Rapid rewarming after exit is intended to improve circulation and reduce inflammation"
        ],
        paragraph: "Cryotherapy works by exposing the body to extreme cold for short periods. The chamber uses liquid nitrogen or electric cooling to lower temperature to around -200°F. The athlete stands in the chamber for 2-3 minutes, during which the body's survival mechanisms activate: blood vessels constrict, endorphins are released, and circulation is redirected. After exiting, rapid rewarming is intended to improve circulation and reduce inflammation. However, the exact mechanisms and effectiveness are still being studied."
      },
      tradeoffs: [
        "Evidence: Limited and mixed scientific evidence for benefits, with some studies showing reduced inflammation but others showing no effect",
        "Risk: Extreme cold exposure carries risks including frostbite, hypothermia, and adverse reactions, especially if used improperly",
        "Cost: Cryotherapy chambers are extremely expensive, creating significant access barriers",
        "Marketing vs science: Powerful marketing claims often outpace scientific evidence, making it difficult to evaluate true benefits",
        "Extreme vs necessary: Extreme interventions might not be necessary when basic recovery (sleep, nutrition, rest) is sufficient"
      ],
      keyTerms: [],
      sourcesNote: "Source: Sports recovery clinic imagery"
    },
    tourContent: {
      reflectionChoices: [
        {
          value: "Cutting-edge is worth the risk",
          feedback: "You believe that being on the cutting edge of recovery technology is valuable, even when evidence is limited. Cryotherapy might have benefits that research hasn't fully documented yet. This perspective values innovation and being ahead of the curve. But consider: are the risks worth it when evidence is limited? Extreme cold exposure has real dangers, and benefits might not justify those risks.",
          followUpQuestion: "How do we balance the potential benefits of cutting-edge technology with unknown risks?",
          lookForThisNext: "normatec-boots"
        },
        {
          value: "Evidence should come first",
          feedback: "You prioritize scientific evidence over marketing claims and cutting-edge appeal. Cryotherapy might sound impressive, but without strong evidence, it's not worth the cost and risk. This perspective values critical evaluation over hype. But consider: does waiting for evidence mean missing out on potentially valuable innovations? Some technologies might have benefits that research hasn't caught up to yet.",
          followUpQuestion: "How do we evaluate technologies when evidence is still emerging?",
          lookForThisNext: "theragun-massage-gun"
        },
        {
          value: "Balance innovation and caution",
          feedback: "You recognize that cutting-edge recovery technology can be valuable, but it requires careful evaluation. Cryotherapy might have benefits, but risks and costs must be considered. This perspective seeks balance between innovation and evidence-based caution. The challenge is knowing when to try new technologies and when to wait for more evidence.",
          followUpQuestion: "How do we decide when to embrace cutting-edge technology and when to wait for evidence?",
          lookForThisNext: "cryotherapy-chamber"
        }
      ]
    },
  },
];

export function getObjectBySlug(slug: string): MuseumObject | undefined {
  return OBJECTS.find((obj) => obj.slug === slug);
}

export function getObjectById(id: string): MuseumObject | undefined {
  return OBJECTS.find((obj) => obj.id === id);
}

export function getObjectsByGallery(galleryId: string): MuseumObject[] {
  return OBJECTS.filter((obj) => obj.galleryId === galleryId);
}

export function getAllObjects(): MuseumObject[] {
  return OBJECTS;
}

export function getObjectsByExhibit(exhibitId: string): MuseumObject[] {
  // This will be used by exhibits that reference object IDs
  return OBJECTS.filter((obj) => {
    // Check if any exhibit references this object
    return true; // Will be filtered by exhibit's stopIds
  });
}
