// Complete translation dictionary for ALL museum content
// This is the single source of truth for all user-facing text

export const completeTranslations = {
  en: {
    // Branding
    branding: {
      museumName: "Museum of Innovation in Sports",
      museumNameShort: "Museum",
      museumTagline: "How new ideas, tools, and systems change what athletes can do.",
    },
    
    // UI strings - navigation, buttons, common labels
    ui: {
      nav: {
        home: "Home",
        tour: "Tour",
        galleries: "Galleries",
        lab: "Lab",
        playbook: "Playbook",
        saved: "Saved",
      },
      buttons: {
        startTour: "Start Tour",
        tryLab: "Try Lab",
        buildPlaybook: "Build Playbook",
        explore: "Explore",
        viewDetails: "View details",
        startExhibit: "Start Exhibit",
        previous: "Previous",
        next: "Next",
        back: "Back",
        backToSelection: "Back to selection",
        viewAll: "View all",
        save: "Save",
        finish: "Finish",
        exploreLabModules: "Explore Lab Modules",
        search: "Search",
      },
      common: {
        backToSelection: "Back to selection",
        stop: "Stop",
        stops: "stops",
        of: "of",
        tourMap: "Tour Map",
        current: "Current",
      },
      tour: {
        guidedTourHeading: "Guided Tour",
        selectYourTour: "Select Your Tour",
        tourAllInnovations: "Tour All Innovations",
      },
      tourUI: {
        stepLabel: "Step {{current}} of {{total}}",
      },
    },
    
    // Home page content
    home: {
      thesisHeading: "Our Thesis",
      thesisBody: "Innovation reshapes sport by changing training, measurement, equipment, and recovery. This museum traces those changes and asks what progress should mean.",
      missionHeading: "Our Mission",
      missionBody: "We explain the innovations that helped athletes push past their limits and changed what sport could be, by showing how new tools and ideas worked and why they mattered.",
      whatMuseumArgues: "What This Museum Argues",
      arguesBullets: {
        measurement: {
          title: "Measurement changes reality",
          text: "Tracked metrics become targets, and targets reshape behavior.",
        },
        design: {
          title: "Design is performance",
          text: "Shoes, surfaces, wearables, and media technologies define \"what counts.\"",
        },
        optimization: {
          title: "Optimization has tradeoffs",
          text: "Recovery, enhancement, and prediction create fairness + power debates.",
        },
      },
      threeGalleriesHeading: "Three Galleries",
      threeGalleriesDesc: "Explore the museum's collection organized into three thematic galleries",
      collectionHeading: "Collection",
      sortBy: "Sort by:",
      curated: "Curated",
      year: "Year",
      aToZ: "A-Z",
      featuredExhibits: "Featured Exhibits",
      featuredExhibitsDesc: "Curated stories across galleries",
      searchPlaceholder: "Search objects by title or tags...",
      objects: "objects",
    },
    
    // Questionnaire content
    questionnaire: {
      sectionTitle: "What Counts as Innovation?",
      sectionSubtitle: "A reflection on performance, technology, and fairness.",
      progressLabel: "{{count}} answered",
      retake: "Retake Questionnaire",
      questions: {
        improvement: {
          id: "improvement",
          title: "Question 1 of 5",
          prompt: "What counts as improvement?",
          options: {
            speed: "Faster times or higher scores",
            technique: "Better technique or form",
            injury: "Fewer injuries or longer career",
            enjoyment: "More enjoyment or satisfaction",
          },
          whyThisMattersHeading: "Why this matters",
          whyThisMattersText: "How we define \"improvement\" shapes what we measure, train for, and value in sport.",
        },
        regulation: {
          id: "regulation",
          title: "Question 2 of 5",
          prompt: "Should technology advantages be regulated?",
          options: {
            yes: "Yes—keep competition fair across eras",
            no: "No—innovation should be rewarded",
            sometimes: "Sometimes—case by case basis",
            notSure: "Not sure—it's complicated",
          },
          whyThisMattersHeading: "Why this matters",
          whyThisMattersText: "This question gets to the heart of fairness: when does innovation become an unfair advantage?",
        },
        measurement: {
          id: "measurement",
          title: "Question 3 of 5",
          prompt: "Does measurement improve or limit performance?",
          options: {
            improves: "Improves—data enables optimization",
            limits: "Limits—creates fixation on numbers",
            both: "Both—depends on how it's used",
            neither: "Neither—measurement is neutral",
          },
          whyThisMattersHeading: "Why this matters",
          whyThisMattersText: "Measurement changes what we can see, but it also changes what we prioritize.",
        },
        recovery: {
          id: "recovery",
          title: "Question 4 of 5",
          prompt: "When does recovery become enhancement?",
          options: {
            measurableAdvantage: "When it provides measurable advantage",
            expensive: "When it's expensive or exclusive",
            beyondNatural: "When it goes beyond natural recovery",
            alwaysNatural: "Recovery is always natural",
          },
          whyThisMattersHeading: "Why this matters",
          whyThisMattersText: "The line between recovery and enhancement reveals our assumptions about what's 'natural' in sport.",
        },
        access: {
          id: "access",
          title: "Question 5 of 5",
          prompt: "Who benefits most from performance technology?",
          options: {
            elite: "Elite athletes with resources",
            everyone: "Everyone—technology democratizes",
            thoseWhoAfford: "Those who can afford it",
            depends: "Depends on the technology",
          },
          whyThisMattersHeading: "Why this matters",
          whyThisMattersText: "Access to innovation shapes who can compete and who gets left behind.",
        },
      },
    },
    
    // Object content - all 12 objects with full narratives
    objects: {
      "heuer-stopwatch-1960s": {
        title: "Heuer Mechanical Stopwatch",
        subtitle: "Time made visible",
        wallLabel: "Heuer mechanical stopwatch, c. 1960s. Used by track officials and coaches to standardize timing at meets and training sessions. Made time visible—and turned performance into a number.",
        curatorNote: "This stopwatch didn't just measure time; it changed who had authority over performance. Before mechanical timing, officials and coaches judged speed by watching. After, the stopwatch became the final word. This shift wasn't neutral—it favored athletes whose performance could be measured in seconds, and it created a new language of splits and intervals that coaches and athletes learned to speak. The stopwatch reveals our culture's obsession with quantification: we trust numbers more than eyes.",
        whySignificant: "The stopwatch represents a cultural shift toward quantification and standardization in sport. It emerged during a period when sport was becoming more professionalized, televised, and competitive. The tool didn't just measure performance—it changed how we understand excellence, shifting from subjective judgment to objective measurement. This change had profound implications: it made performance comparable across time and place, but it also narrowed what 'counted' as achievement to what could be measured in seconds. The stopwatch became a symbol of modernity and precision, reflecting broader cultural values about objectivity, fairness, and progress.",
        signatureMoment: "Imagine a 1960s track meet: the starter's pistol fires, and as runners sprint down the straightaway, an official stands at the finish line with a Heuer stopwatch in hand. When the first runner crosses, the official clicks the button, and a number appears—a time that will be recorded, compared, and remembered. This moment represents a fundamental shift: performance is no longer just 'fast' or 'slow' as judged by human eyes, but a precise number that can be compared across athletes, venues, and eras. The stopwatch transformed sport from subjective experience to objective data.",
        whyItMatters: "The stopwatch transformed sport by making time comparable across venues, eras, and athletes. Before mechanical timing, records were inconsistent—a 'fast' time in one place might not mean the same thing elsewhere. The stopwatch solved this by creating a universal standard. Once timing became mechanical, athletes began training to specific splits rather than just 'feeling fast.' Coaches could compare performances across sessions. Competition became standardized, with times serving as objective records that could be verified and compared. By the 1970s, split times had become the language of track and field training. The stopwatch didn't just measure performance—it changed what performance meant, shifting authority from human judgment to mechanical precision.",
        howItWorksParagraph: "The stopwatch uses a mechanical movement with carefully calibrated gears to measure elapsed time. When started, a spring unwinds at a constant rate, driving gears that move the hands. The precision comes from the gear ratios, which divide time into consistent intervals. This mechanical consistency replaced the variability of human timing, providing a reliable standard for measuring performance.",
        tradeoffs: [
          "Fairness: Mechanical precision made timing more objective, but early stopwatches were expensive, creating access barriers for less-funded programs",
          "Authority: The stopwatch shifted authority from human officials to mechanical devices, which some saw as more fair and others as less human",
          "Measurement limits: The stopwatch could only measure time, potentially narrowing what 'counts' as performance to what can be quantified in seconds",
          "Dependency: Athletes and coaches became dependent on timing data, potentially losing connection to natural pacing and body awareness",
          "Standardization: While making competition more comparable, standardization also made it more uniform, potentially limiting individual expression"
        ],
        reflectionFeedback: {
          accuracy: "You prioritize precision and objectivity. The stopwatch represents a shift toward mechanical authority—where numbers replace human judgment. This makes competition more fair and comparable, but it also raises questions: what forms of excellence can't be measured in seconds? When we trust the stopwatch completely, we might miss the athlete's form, strategy, or the context of their performance. The stopwatch gives us accuracy, but accuracy isn't the same thing as understanding.",
          context: "You recognize that timing doesn't exist in a vacuum. The stopwatch's meaning changed depending on where and when it was used—at elite competitions versus local meets, in the 1960s versus today. Early stopwatches were expensive, creating access barriers. The same tool that made competition fairer also made it more exclusive. Context matters: who could afford the stopwatch? Who had access to coaches who understood split times? The stopwatch standardized timing, but it didn't standardize access.",
          fairness: "You value fairness above all. The stopwatch made timing objective, but objectivity doesn't guarantee equity. Early stopwatches were expensive, creating barriers for less-funded programs. The same tool that made competition fairer also made it more exclusive. Fairness requires more than mechanical precision—it requires equal access to tools, training, and opportunity. The stopwatch standardized timing, but it didn't standardize access or opportunity."
        }
      },
      // Add other 11 objects here with same structure
    },
    
    // Object detail page labels
    objectDetail: {
      atAGlance: "At a Glance",
      era: "Era",
      category: "Category",
      gallery: "Gallery",
      general: "General",
      unknown: "Unknown",
      context: "Context",
      contextNotAvailable: "Context information not available.",
      debate: "Debate",
      yourResponse: "Your Response",
      keyTerms: "Key Terms",
      relatedObjects: "Related Objects",
      whereToGoNext: "Where to Go Next",
    },
    
    // Common UI strings
    common: {
      reflection: "Reflection",
      next: "Next",
      previous: "Previous",
      start: "Start",
      back: "Back",
      save: "Save",
      viewDetails: "View Details",
      tryLab: "Try Lab",
      buildPlaybook: "Build Playbook",
      startTour: "Start Tour",
      wallLabel: "Wall label",
      specificUseCases: "Specific use cases",
      signatureMoment: "Signature moment",
      curatorNote: "Curator note",
      whySignificant: "Why it matters",
      whyItMatters: "Why it matters",
      howItWorks: "How it works",
      tradeoffs: "Tradeoffs",
      whereYoudSeeIt: "Where You'd See It",
    },
    
    // Tour content
    tour: {
      contextStop: "Context Stop",
      whatToNoticeNext: "What to Notice Next",
      whatToNoticeNextDesc: "As you explore the objects in this gallery, notice how they address the problem and tradeoffs we've discussed.",
      guidedTour: "Guided Tour",
      selectYourTour: "Select Your Tour",
      tourAllInnovations: "Tour All Innovations",
      experienceComplete: "Experience the complete journey through all three galleries, exploring how innovations transformed sport.",
      chooseGallery: "Choose one gallery or explore all three",
      complete: "Complete",
      duration: "20-25 min",
      stops: "10 stops",
      galleryDuration: "12-15 min • 6 stops",
      galleryCards: {
        allInnovations: {
          title: "Tour All Innovations",
          description: "Experience the complete museum journey across all three galleries.",
          meta: {
            complete: "Complete",
            duration: "20-25 min",
            stops: "10 stops",
          },
        },
        origins: {
          title: "Origins & Icons",
          description: "Foundational moments when performance became public, standardized, and measurable.",
          tags: {
            standardization: "Standardization",
            spectacle: "Spectacle",
            earlyMeasurement: "Early measurement",
          },
          meta: {
            duration: "12-15 min",
            stops: "6 stops",
          },
        },
        dataMotionBody: {
          title: "Data, Motion & Body",
          description: "When performance becomes a dataset—sensors, models, biomechanics, and feedback loops.",
          tags: {
            wearables: "Wearables",
            biomechanics: "Biomechanics",
            quantification: "Quantification",
          },
          meta: {
            duration: "12-15 min",
            stops: "6 stops",
          },
        },
        recoveryEthicsFuture: {
          title: "Recovery, Ethics & Future",
          description: "Optimization, recovery tech, and the ethical line between advantage and unfairness.",
          tags: {
            recoveryTech: "Recovery tech",
            enhancementDebates: "Enhancement debates",
            fairness: "Fairness",
          },
          meta: {
            duration: "12-15 min",
            stops: "6 stops",
          },
        },
      },
      galleryCards: {
        allInnovations: {
          title: "Tour All Innovations",
          description: "Experience the complete museum journey across all three galleries.",
          meta: {
            complete: "Complete",
            duration: "20–25 min",
            stops: "10 stops",
          },
        },
        origins: {
          title: "Origins & Icons",
          description: "Foundational moments when performance became public, standardized, and measurable.",
          tags: {
            standardization: "Standardization",
            spectacle: "Spectacle",
            earlyMeasurement: "Early measurement",
            trainingCulture: "Training culture",
          },
          meta: {
            duration: "12–15 min",
            stops: "6 stops",
          },
        },
        dataMotionBody: {
          title: "Data, Motion & Body",
          description: "When performance becomes a dataset—sensors, models, biomechanics, and feedback loops.",
          tags: {
            wearables: "Wearables",
            biomechanics: "Biomechanics",
            quantification: "Quantification",
            feedbackSystems: "Feedback systems",
          },
          meta: {
            duration: "12–15 min",
            stops: "6 stops",
          },
        },
        recoveryEthicsFuture: {
          title: "Recovery, Ethics & Future",
          description: "Optimization, recovery tech, and the ethical line between advantage and unfairness.",
          tags: {
            recoveryTech: "Recovery tech",
            enhancementDebates: "Enhancement debates",
            fairness: "Fairness",
            futurePrediction: "Future prediction",
          },
          meta: {
            duration: "12–15 min",
            stops: "6 stops",
          },
        },
      },
      contextStops: {
        measuringPerformance: {
          title: "The Problem: Measuring Performance",
          content: "Before standardized measurement, sport was inconsistent. Times varied by venue, officials, and era. Records couldn't be compared. Athletes trained by feel, not data. The problem wasn't just technical—it was about authority. Who decides what 'fast' means? How do we make performance comparable across time and place? These early innovations solved a fundamental question: how to make sport measurable, comparable, and fair. Pay attention to how the stopwatch transformed not just timing, but the very language of performance.",
          reflectionPrompt: "What problem should innovation solve first?",
          reflectionChoices: {
            fairness: "Fairness and access",
            performance: "Performance and optimization",
            understanding: "Understanding and insight"
          },
          feedback: {
            fairness: "You prioritize making sport more equitable. Innovation should solve problems of exclusion and inequality first. As you explore the objects in this gallery, notice how tools like the stopwatch and starting blocks created new standards—but also consider who had access to these tools and who didn't. Fairness isn't just about equal rules; it's about equal opportunity to benefit from innovation.",
            performance: "You value pushing limits. Innovation should solve problems of measurement and optimization first. As you explore the objects in this gallery, you'll see how tools like the stopwatch and heart rate monitors transformed training from guesswork to precision. But remember: optimization can sometimes come at the cost of other values, like accessibility or the human experience of sport.",
            understanding: "You want to understand how things work. Innovation should solve problems of visibility and knowledge first. As you explore the objects in this gallery, notice how each tool reveals something that was previously invisible—time, heart rate, power output. But also consider: what does it mean when we can measure everything? What gets lost when we focus only on what can be quantified?"
          }
        },
        "problem-measuring": {
          title: "The Problem: Measuring Performance",
          content: "Before standardized measurement, sport was inconsistent. Times varied by venue, officials, and era. Records couldn't be compared. Athletes trained by feel, not data. The problem wasn't just technical—it was about authority. Who decides what 'fast' means? How do we make performance comparable across time and place? These early innovations solved a fundamental question: how to make sport measurable, comparable, and fair. Pay attention to how the stopwatch transformed not just timing, but the very language of performance.",
          reflectionPrompt: "What problem should innovation solve first?",
          reflectionChoices: {
            fairness: "You prioritize making sport more equitable. Innovation should solve problems of exclusion and inequality first.",
            performance: "You value pushing limits. Innovation should solve problems of measurement and optimization first.",
            understanding: "You want to understand how things work. Innovation should solve problems of visibility and knowledge first."
          }
        },
        "problem-invisible": {
          title: "The Problem: Making the Invisible Visible",
          content: "Once basic timing existed, a new problem emerged: how to measure what happens inside the body. External time wasn't enough. Athletes and coaches wanted to understand forces, heart rates, biomechanics—the invisible mechanics of performance. The problem was making the invisible visible. How do you measure effort, not just outcome? How do you optimize what you can't see? Notice how heart rate monitors and power meters changed training from guesswork to precision.",
          reflectionPrompt: "What aspect of performance is most important to measure?",
          reflectionChoices: {
            internal: "You're interested in the body's internal signals. This tour will show how we started to 'listen' to the body with tech.",
            external: "You focus on the mechanics of motion. We'll explore how tools reveal the physics of performance.",
            overall: "You see performance as continuous. We'll look at how tech integrated into everyday life."
          }
        }
      }
    },
    
    // Playbook content
    playbook: {
      scenarios: {
        "high-school-track-coach": {
          title: "High School Track Coach with Limited Budget",
          subtitle: "Building a program on a tight budget",
          description: "You're coaching a high school track team with minimal resources. You need tools that are affordable, durable, and teachable to young athletes. Your athletes range from beginners to competitive runners, and you want to give everyone a fair chance to improve.",
          outcomes: {
            "smart-budget-success": {
              title: "Smart Budget Success",
              description: "Your season goes well. The stopwatch and starting blocks give athletes concrete feedback they can understand. Heart rate monitors help them learn pacing without breaking the bank. Your athletes improve steadily, and the program feels fair—everyone has access to the same tools. By mid-season, you've built a culture where measurement is part of learning, not just competition.",
              whatWorked: {
                0: "Affordable tools created equal access for all athletes",
                1: "Simple measurements helped athletes understand pacing",
                2: "Durable equipment lasted the whole season",
                3: "Basic data didn't overwhelm young athletes"
              },
              whatBackfired: {},
              questions: {
                0: "How do you maintain fairness as some athletes progress faster?",
                1: "What happens when parents want to buy expensive gear for their kids?"
              }
            },
            "overreach-struggle": {
              title: "Overreach Struggle",
              description: "You tried to include too many expensive tools, and it backfires. Some athletes get access to better gear through parents, creating visible inequality. The team splits between 'haves' and 'have-nots.' Morale drops. You spend too much time managing equipment instead of coaching. By season's end, you realize simpler would have been better.",
              whatWorked: [],
              whatBackfired: [
                "Expensive tools created inequality between athletes",
                "Parents buying gear for some kids undermined team unity",
                "Too much focus on equipment distracted from coaching",
                "Complex tools were hard for beginners to understand"
              ],
              questions: [
                "How do you balance parent involvement with team equity?",
                "What policies can prevent equipment from creating divisions?"
              ]
            }
          }
        }
        // Add other scenarios
      }
    }
  },
  
  fr: {
    // UI strings - navigation, buttons, common labels
    ui: {
      nav: {
        home: "Accueil",
        tour: "Visite",
        galleries: "Galeries",
        lab: "Laboratoire",
        playbook: "Guide",
        saved: "Enregistrés",
      },
      buttons: {
        startTour: "Commencer la visite",
        tryLab: "Essayer le labo",
        buildPlaybook: "Construire un plan",
        explore: "Explorer",
        viewDetails: "Voir les détails",
        startExhibit: "Lancer l'exposition",
        previous: "Précédent",
        next: "Suivant",
        back: "Retour",
        backToSelection: "Retour à la sélection",
        viewAll: "Tout voir",
        save: "Enregistrer",
        finish: "Terminer",
        exploreLabModules: "Explorer les modules du labo",
        search: "Rechercher",
      },
      common: {
        backToSelection: "Retour à la sélection",
        stop: "Arrêt",
        stops: "arrêts",
        of: "sur",
        tourMap: "Carte de la visite",
        current: "Actuel",
      },
      tour: {
        guidedTourHeading: "Visite guidée",
        selectYourTour: "Choisissez votre parcours",
        tourAllInnovations: "Visiter toutes les innovations",
        galleryCards: {
          allInnovations: {
            title: "Visiter toutes les innovations",
            description: "Découvrez le parcours complet du musée à travers les trois galeries.",
            meta: {
              complete: "Complet",
              duration: "20–25 min",
              stops: "10 arrêts",
            },
          },
          origins: {
            title: "Origines et icônes",
            description: "Moments fondateurs où la performance est devenue publique, standardisée et mesurable.",
            tags: {
              standardization: "Standardisation",
              spectacle: "Spectacle",
              earlyMeasurement: "Mesure précoce",
              trainingCulture: "Culture d'entraînement",
            },
            meta: {
              duration: "12–15 min",
              stops: "6 arrêts",
            },
          },
          dataMotionBody: {
            title: "Données, mouvement et corps",
            description: "Quand la performance devient un ensemble de données—capteurs, modèles, biomécanique et boucles de rétroaction.",
            tags: {
              wearables: "Wearables",
              biomechanics: "Biomécanique",
              quantification: "Quantification",
              feedbackSystems: "Systèmes de rétroaction",
            },
            meta: {
              duration: "12–15 min",
              stops: "6 arrêts",
            },
          },
          recoveryEthicsFuture: {
            title: "Récupération, éthique et avenir",
            description: "Optimisation, technologie de récupération et la ligne éthique entre avantage et injustice.",
            tags: {
              recoveryTech: "Technologie de récupération",
              enhancementDebates: "Débats sur l'amélioration",
              fairness: "Équité",
              futurePrediction: "Prédiction future",
            },
            meta: {
              duration: "12–15 min",
              stops: "6 arrêts",
            },
          },
        },
      },
      tourUI: {
        stepLabel: "Étape {{current}} sur {{total}}",
      },
    },
    
    // Home page content
    home: {
      thesisHeading: "Notre thèse",
      thesisBody: "L'innovation transforme le sport en modifiant l'entraînement, la mesure, l'équipement et la récupération. Ce musée retrace ces changements et interroge ce que devrait signifier le progrès.",
      missionHeading: "Notre mission",
      missionBody: "Nous expliquons les innovations qui ont aidé les athlètes à repousser leurs limites et ont changé ce que le sport pouvait être, en montrant comment les nouveaux outils et idées ont fonctionné et pourquoi ils comptaient.",
      whatMuseumArgues: "Ce que ce musée défend",
      arguesBullets: {
        measurement: {
          title: "La mesure change la réalité",
          text: "Les métriques suivies deviennent des cibles, et les cibles remodèlent le comportement.",
        },
        design: {
          title: "Le design est la performance",
          text: "Les chaussures, surfaces, wearables et technologies médiatiques définissent \"ce qui compte\".",
        },
        optimization: {
          title: "L'optimisation a des compromis",
          text: "La récupération, l'amélioration et la prédiction créent des débats sur l'équité et le pouvoir.",
        },
      },
      threeGalleriesHeading: "Trois galeries",
      threeGalleriesDesc: "Explorez la collection du musée organisée en trois galeries thématiques",
      collectionHeading: "Collection",
      sortBy: "Trier par :",
      curated: "Sélectionné",
      year: "Année",
      aToZ: "A-Z",
      featuredExhibits: "Expositions vedettes",
      featuredExhibitsDesc: "Histoires sélectionnées à travers les galeries",
      searchPlaceholder: "Rechercher des objets par titre ou tags...",
      objects: "objets",
    },
    
    // Questionnaire content
    questionnaire: {
      sectionTitle: "Qu'est-ce qui compte comme innovation ?",
      sectionSubtitle: "Une réflexion sur la performance, la technologie et l'équité.",
      progressLabel: "{{count}} réponse(s)",
      retake: "Refaire le questionnaire",
      questions: {
        improvement: {
          id: "improvement",
          title: "Question 1 sur 5",
          prompt: "Qu'est-ce qui compte comme amélioration ?",
          options: {
            speed: "Des temps plus rapides ou des scores plus élevés",
            technique: "Une meilleure technique ou un meilleur geste",
            injury: "Moins de blessures ou une carrière plus longue",
            enjoyment: "Plus de plaisir ou de satisfaction",
          },
          whyThisMattersHeading: "Pourquoi c'est important",
          whyThisMattersText: "La façon dont nous définissons « l'amélioration » détermine ce que nous mesurons, ce pour quoi nous nous entraînons et ce que nous valorisons dans le sport.",
        },
        regulation: {
          id: "regulation",
          title: "Question 2 sur 5",
          prompt: "Les avantages technologiques devraient-ils être réglementés ?",
          options: {
            yes: "Oui—maintenir la compétition équitable à travers les époques",
            no: "Non—l'innovation devrait être récompensée",
            sometimes: "Parfois—au cas par cas",
            notSure: "Pas sûr—c'est compliqué",
          },
          whyThisMattersHeading: "Pourquoi c'est important",
          whyThisMattersText: "Cette question touche au cœur de l'équité : quand l'innovation devient-elle un avantage injuste ?",
        },
        measurement: {
          id: "measurement",
          title: "Question 3 sur 5",
          prompt: "La mesure améliore-t-elle ou limite-t-elle la performance ?",
          options: {
            improves: "Améliore—les données permettent l'optimisation",
            limits: "Limite—crée une fixation sur les chiffres",
            both: "Les deux—dépend de la façon dont c'est utilisé",
            neither: "Ni l'un ni l'autre—la mesure est neutre",
          },
          whyThisMattersHeading: "Pourquoi c'est important",
          whyThisMattersText: "La mesure change ce que nous pouvons voir, mais elle change aussi ce que nous priorisons.",
        },
        recovery: {
          id: "recovery",
          title: "Question 4 sur 5",
          prompt: "Quand la récupération devient-elle une amélioration ?",
          options: {
            measurableAdvantage: "Quand elle procure un avantage mesurable",
            expensive: "Quand elle est chère ou exclusive",
            beyondNatural: "Quand elle dépasse la récupération naturelle",
            alwaysNatural: "La récupération est toujours naturelle",
          },
          whyThisMattersHeading: "Pourquoi c'est important",
          whyThisMattersText: "La ligne entre récupération et amélioration révèle nos hypothèses sur ce qui est « naturel » dans le sport.",
        },
        access: {
          id: "access",
          title: "Question 5 sur 5",
          prompt: "Qui bénéficie le plus de la technologie de performance ?",
          options: {
            elite: "Les athlètes d'élite avec des ressources",
            everyone: "Tout le monde—la technologie démocratise",
            thoseWhoAfford: "Ceux qui peuvent se le permettre",
            depends: "Dépend de la technologie",
          },
          whyThisMattersHeading: "Pourquoi c'est important",
          whyThisMattersText: "L'accès à l'innovation détermine qui peut concourir et qui est laissé pour compte.",
        },
      },
    },
    
    // Common UI strings
    common: {
      reflection: "Réflexion",
      next: "Suivant",
      previous: "Précédent",
      start: "Commencer",
      back: "Retour",
      save: "Enregistrer",
      viewDetails: "Voir les détails",
      tryLab: "Essayer le Lab",
      buildPlaybook: "Créer un Playbook",
      startTour: "Commencer la visite",
      wallLabel: "Cartel de salle",
      specificUseCases: "Usages spécifiques",
      signatureMoment: "Moment marquant",
      curatorNote: "Note du commissaire",
      whySignificant: "Pourquoi c'est important",
      whyItMatters: "Pourquoi c'est important",
      howItWorks: "Comment cela fonctionne",
      tradeoffs: "Limites et compromis",
      whereYoudSeeIt: "Où vous le verriez",
    },
    
    objects: {
      "heuer-stopwatch-1960s": {
        title: "Chronomètre mécanique Heuer",
        subtitle: "Le temps rendu visible",
        wallLabel: "Chronomètre mécanique Heuer, vers 1960. Utilisé par les officiels et entraîneurs d'athlétisme pour standardiser le chronométrage lors des compétitions et des séances d'entraînement. A rendu le temps visible et a transformé la performance en nombre.",
        curatorNote: "Ce chronomètre ne mesurait pas seulement le temps ; il changeait qui avait l'autorité sur la performance. Avant le chronométrage mécanique, les officiels et entraîneurs jugeaient la vitesse en regardant. Après, le chronomètre est devenu le dernier mot. Ce changement n'était pas neutre—il favorisait les athlètes dont la performance pouvait être mesurée en secondes, et il créait un nouveau langage de fractions et d'intervalles que les entraîneurs et athlètes ont appris à parler. Le chronomètre révèle l'obsession de notre culture pour la quantification : nous faisons plus confiance aux chiffres qu'aux yeux.",
        whySignificant: "Le chronomètre représente un changement culturel vers la quantification et la standardisation dans le sport. Il est apparu à une époque où le sport devenait plus professionnalisé, télévisé et compétitif. L'outil ne mesurait pas seulement la performance—il changeait notre compréhension de l'excellence, passant du jugement subjectif à la mesure objective. Ce changement a eu des implications profondes : il a rendu la performance comparable à travers le temps et l'espace, mais il a aussi réduit ce qui 'comptait' comme réalisation à ce qui pouvait être mesuré en secondes. Le chronomètre est devenu un symbole de modernité et de précision, reflétant des valeurs culturelles plus larges sur l'objectivité, l'équité et le progrès.",
        signatureMoment: "Imaginez une compétition d'athlétisme des années 1960 : le pistolet de départ retentit, et alors que les coureurs sprinte sur la ligne droite, un officiel se tient à la ligne d'arrivée avec un chronomètre Heuer à la main. Quand le premier coureur franchit la ligne, l'officiel appuie sur le bouton, et un nombre apparaît—un temps qui sera enregistré, comparé et mémorisé. Ce moment représente un changement fondamental : la performance n'est plus simplement 'rapide' ou 'lente' comme jugée par les yeux humains, mais un nombre précis qui peut être comparé entre athlètes, lieux et époques. Le chronomètre a transformé le sport d'expérience subjective en données objectives.",
        whyItMatters: "Le chronomètre a transformé le sport en rendant le temps comparable à travers les lieux, les époques et les athlètes. Avant le chronométrage mécanique, les records étaient incohérents—un temps 'rapide' dans un endroit pouvait ne pas signifier la même chose ailleurs. Le chronomètre a résolu cela en créant une norme universelle. Une fois que le chronométrage est devenu mécanique, les athlètes ont commencé à s'entraîner à des fractions spécifiques plutôt que simplement 'se sentir rapides'. Les entraîneurs pouvaient comparer les performances entre les séances. La compétition est devenue standardisée, les temps servant de records objectifs qui pouvaient être vérifiés et comparés. Dans les années 1970, les fractions de temps étaient devenues le langage de l'entraînement en athlétisme. Le chronomètre ne mesurait pas seulement la performance—il changeait ce que signifiait la performance, déplaçant l'autorité du jugement humain vers la précision mécanique.",
        howItWorksParagraph: "Le chronomètre utilise un mouvement mécanique avec des engrenages soigneusement calibrés pour mesurer le temps écoulé. Lorsqu'il est démarré, un ressort se déroule à un rythme constant, entraînant des engrenages qui déplacent les aiguilles. La précision vient des rapports d'engrenage, qui divisent le temps en intervalles cohérents. Cette cohérence mécanique a remplacé la variabilité du chronométrage humain, fournissant une norme fiable pour mesurer la performance.",
        tradeoffs: [
          "Équité : La précision mécanique a rendu le chronométrage plus objectif, mais les premiers chronomètres étaient chers, créant des barrières d'accès pour les programmes moins financés",
          "Autorité : Le chronomètre a déplacé l'autorité des officiels humains vers les dispositifs mécaniques, que certains voyaient comme plus équitables et d'autres comme moins humains",
          "Limites de mesure : Le chronomètre ne pouvait mesurer que le temps, réduisant potentiellement ce qui 'compte' comme performance à ce qui peut être quantifié en secondes",
          "Dépendance : Les athlètes et entraîneurs sont devenus dépendants des données de chronométrage, perdant potentiellement la connexion au rythme naturel et à la conscience du corps",
          "Standardisation : Bien que rendant la compétition plus comparable, la standardisation l'a aussi rendue plus uniforme, limitant potentiellement l'expression individuelle"
        ],
        reflectionFeedback: {
          accuracy: "Vous priorisez la précision et l'objectivité. Le chronomètre représente un changement vers l'autorité mécanique—où les chiffres remplacent le jugement humain. Cela rend la compétition plus équitable et comparable, mais cela soulève aussi des questions : quelles formes d'excellence ne peuvent pas être mesurées en secondes ? Quand nous faisons entièrement confiance au chronomètre, nous pourrions manquer la forme de l'athlète, la stratégie ou le contexte de sa performance. Le chronomètre nous donne la précision, mais la précision n'est pas la même chose que la compréhension.",
          context: "Vous reconnaissez que le chronométrage n'existe pas dans le vide. La signification du chronomètre changeait selon l'endroit et le moment où il était utilisé—aux compétitions d'élite versus les compétitions locales, dans les années 1960 versus aujourd'hui. Les premiers chronomètres étaient chers, créant des barrières d'accès. Le même outil qui rendait la compétition plus équitable la rendait aussi plus exclusive. Le contexte compte : qui pouvait se permettre le chronomètre ? Qui avait accès aux entraîneurs qui comprenaient les fractions de temps ? Le chronomètre a standardisé le chronométrage, mais il n'a pas standardisé l'accès.",
          fairness: "Vous valorisez l'équité avant tout. Le chronomètre a rendu le chronométrage objectif, mais l'objectivité ne garantit pas l'équité. Les premiers chronomètres étaient chers, créant des barrières pour les programmes moins financés. Le même outil qui rendait la compétition plus équitable la rendait aussi plus exclusive. L'équité nécessite plus que la précision mécanique—elle nécessite un accès égal aux outils, à l'entraînement et aux opportunités. Le chronomètre a standardisé le chronométrage, mais il n'a pas standardisé l'accès ou les opportunités."
        }
      }
    },
    tour: {
      contextStop: "Arrêt contextuel",
      whatToNoticeNext: "Ce qu'il faut remarquer ensuite",
      whatToNoticeNextDesc: "En explorant les objets de cette galerie, remarquez comment ils abordent le problème et les compromis dont nous avons discuté.",
      guidedTour: "Visite guidée",
      selectYourTour: "Sélectionnez votre visite",
      tourAllInnovations: "Visiter toutes les innovations",
      experienceComplete: "Découvrez le parcours complet à travers les trois galeries, explorant comment les innovations ont transformé le sport.",
      chooseGallery: "Choisissez une galerie ou explorez les trois",
      complete: "Complet",
      duration: "20-25 min",
      stops: "10 arrêts",
      galleryDuration: "12-15 min • 6 arrêts",
      contextStops: {
        measuringPerformance: {
          title: "Le problème : Mesurer la performance",
          content: "Avant la mesure standardisée, le sport était incohérent. Les temps variaient selon le lieu, les officiels et l'époque. Les records ne pouvaient pas être comparés. Les athlètes s'entraînaient au feeling, pas avec des données. Le problème n'était pas seulement technique—il s'agissait d'autorité. Qui décide ce que signifie 'rapide' ? Comment rendre la performance comparable à travers le temps et l'espace ? Ces innovations précoces ont résolu une question fondamentale : comment rendre le sport mesurable, comparable et équitable. Faites attention à la façon dont le chronomètre a transformé non seulement le chronométrage, mais aussi le langage même de la performance.",
          reflectionPrompt: "Quel problème l'innovation devrait-elle résoudre en premier ?",
          reflectionChoices: {
            fairness: "Équité et accès",
            performance: "Performance et optimisation",
            understanding: "Compréhension et insight"
          },
          feedback: {
            fairness: "Vous priorisez rendre le sport plus équitable. L'innovation devrait résoudre d'abord les problèmes d'exclusion et d'inégalité. En explorant les objets de cette galerie, remarquez comment des outils comme le chronomètre et les starting-blocks ont créé de nouvelles normes—mais considérez aussi qui avait accès à ces outils et qui ne l'avait pas. L'équité ne concerne pas seulement des règles égales ; il s'agit d'une opportunité égale de bénéficier de l'innovation.",
            performance: "Vous valorisez repousser les limites. L'innovation devrait résoudre d'abord les problèmes de mesure et d'optimisation. En explorant les objets de cette galerie, vous verrez comment des outils comme le chronomètre et les moniteurs de fréquence cardiaque ont transformé l'entraînement de la supposition à la précision. Mais rappelez-vous : l'optimisation peut parfois se faire au détriment d'autres valeurs, comme l'accessibilité ou l'expérience humaine du sport.",
            understanding: "Vous voulez comprendre comment les choses fonctionnent. L'innovation devrait résoudre d'abord les problèmes de visibilité et de connaissance. En explorant les objets de cette galerie, remarquez comment chaque outil révèle quelque chose qui était auparavant invisible—le temps, la fréquence cardiaque, la puissance. Mais considérez aussi : qu'est-ce que cela signifie quand nous pouvons tout mesurer ? Qu'est-ce qui se perd quand nous nous concentrons uniquement sur ce qui peut être quantifié ?"
          }
        },
        "problem-measuring": {
          title: "Le problème : Mesurer la performance",
          content: "Avant la mesure standardisée, le sport était incohérent. Les temps variaient selon le lieu, les officiels et l'époque. Les records ne pouvaient pas être comparés. Les athlètes s'entraînaient au feeling, pas avec des données. Le problème n'était pas seulement technique—il s'agissait d'autorité. Qui décide ce que signifie 'rapide' ? Comment rendre la performance comparable à travers le temps et l'espace ? Ces innovations précoces ont résolu une question fondamentale : comment rendre le sport mesurable, comparable et équitable. Faites attention à la façon dont le chronomètre a transformé non seulement le chronométrage, mais aussi le langage même de la performance.",
          reflectionPrompt: "Quel problème l'innovation devrait-elle résoudre en premier ?",
          reflectionChoices: {
            fairness: "Vous priorisez rendre le sport plus équitable. L'innovation devrait résoudre d'abord les problèmes d'exclusion et d'inégalité.",
            performance: "Vous valorisez repousser les limites. L'innovation devrait résoudre d'abord les problèmes de mesure et d'optimisation.",
            understanding: "Vous voulez comprendre comment les choses fonctionnent. L'innovation devrait résoudre d'abord les problèmes de visibilité et de connaissance."
          }
        }
      }
    },
    playbook: {
      scenarios: {
        "high-school-track-coach": {
          title: "Entraîneur d'athlétisme au lycée avec budget limité",
          subtitle: "Construire un programme avec un budget serré",
          description: "Vous entraînez une équipe d'athlétisme au lycée avec des ressources minimales. Vous avez besoin d'outils abordables, durables et enseignables aux jeunes athlètes. Vos athlètes vont des débutants aux coureurs compétitifs, et vous voulez donner à chacun une chance équitable de s'améliorer.",
          outcomes: {
            "smart-budget-success": {
              title: "Succès avec budget intelligent",
              description: "Votre saison se passe bien. Le chronomètre et les starting-blocks donnent aux athlètes des retours concrets qu'ils peuvent comprendre. Les moniteurs de fréquence cardiaque les aident à apprendre le rythme sans casser la banque. Vos athlètes s'améliorent régulièrement, et le programme semble équitable—chacun a accès aux mêmes outils. À mi-saison, vous avez construit une culture où la mesure fait partie de l'apprentissage, pas seulement de la compétition.",
              whatWorked: {
                0: "Les outils abordables ont créé un accès égal pour tous les athlètes",
                1: "Les mesures simples ont aidé les athlètes à comprendre le rythme",
                2: "L'équipement durable a duré toute la saison",
                3: "Les données de base n'ont pas submergé les jeunes athlètes"
              },
              whatBackfired: {},
              questions: {
                0: "Comment maintenir l'équité alors que certains athlètes progressent plus vite ?",
                1: "Que se passe-t-il quand les parents veulent acheter du matériel coûteux pour leurs enfants ?"
              }
            }
          }
        }
      }
    }
  },
  
  es: {
    // UI strings - navigation, buttons, common labels
    ui: {
      nav: {
        home: "Inicio",
        tour: "Visita",
        galleries: "Galerías",
        lab: "Laboratorio",
        playbook: "Guía",
        saved: "Guardados",
      },
      buttons: {
        startTour: "Comenzar la visita",
        tryLab: "Probar el laboratorio",
        buildPlaybook: "Crear un plan",
        explore: "Explorar",
        viewDetails: "Ver detalles",
        startExhibit: "Iniciar exposición",
        previous: "Anterior",
        next: "Siguiente",
        back: "Volver",
        backToSelection: "Volver a la selección",
        viewAll: "Ver todo",
        save: "Guardar",
        finish: "Finalizar",
        exploreLabModules: "Explorar módulos del laboratorio",
        search: "Buscar",
      },
      common: {
        backToSelection: "Volver a la selección",
        stop: "Parada",
        stops: "paradas",
        of: "de",
        tourMap: "Mapa de la visita",
        current: "Actual",
        wallLabel: "Cartel de sala",
        specificUseCases: "Casos de uso específicos",
        signatureMoment: "Momento destacado",
        curatorNote: "Nota del curador",
        whySignificant: "Por qué importa",
        howItWorks: "Cómo funciona",
        tradeoffs: "Compensaciones",
      },
      tour: {
        guidedTourHeading: "Visita guiada",
        selectYourTour: "Seleccione su visita",
        tourAllInnovations: "Visitar todas las innovaciones",
        galleryCards: {
          allInnovations: {
            title: "Visitar todas las innovaciones",
            description: "Experimente el viaje completo del museo a través de las tres galerías.",
            meta: {
              complete: "Completo",
              duration: "20–25 min",
              stops: "10 paradas",
            },
          },
          origins: {
            title: "Orígenes e iconos",
            description: "Momentos fundamentales cuando el rendimiento se volvió público, estandarizado y medible.",
            tags: {
              standardization: "Estandarización",
              spectacle: "Espectáculo",
              earlyMeasurement: "Medición temprana",
              trainingCulture: "Cultura de entrenamiento",
            },
            meta: {
              duration: "12–15 min",
              stops: "6 paradas",
            },
          },
          dataMotionBody: {
            title: "Datos, movimiento y cuerpo",
            description: "Cuando el rendimiento se convierte en un conjunto de datos—sensores, modelos, biomecánica y bucles de retroalimentación.",
            tags: {
              wearables: "Wearables",
              biomechanics: "Biomecánica",
              quantification: "Cuantificación",
              feedbackSystems: "Sistemas de retroalimentación",
            },
            meta: {
              duration: "12–15 min",
              stops: "6 paradas",
            },
          },
          recoveryEthicsFuture: {
            title: "Recuperación, ética y futuro",
            description: "Optimización, tecnología de recuperación y la línea ética entre ventaja e injusticia.",
            tags: {
              recoveryTech: "Tecnología de recuperación",
              enhancementDebates: "Debates sobre mejora",
              fairness: "Equidad",
              futurePrediction: "Predicción futura",
            },
            meta: {
              duration: "12–15 min",
              stops: "6 paradas",
            },
          },
        },
      },
      tourUI: {
        stepLabel: "Paso {{current}} de {{total}}",
      },
    },
    
    // Home page content
    home: {
      thesisHeading: "Nuestra tesis",
      thesisBody: "La innovación transforma el deporte al cambiar el entrenamiento, la medición, el equipo y la recuperación. Este museo rastrea esos cambios y pregunta qué debería significar el progreso.",
      missionHeading: "Nuestra misión",
      missionBody: "Explicamos las innovaciones que ayudaron a los atletas a superar sus límites y cambiaron lo que el deporte podría ser, mostrando cómo funcionaron las nuevas herramientas e ideas y por qué importaron.",
      whatMuseumArgues: "Lo que este museo argumenta",
      arguesBullets: {
        measurement: {
          title: "La medición cambia la realidad",
          text: "Las métricas rastreadas se convierten en objetivos, y los objetivos remodelan el comportamiento.",
        },
        design: {
          title: "El diseño es rendimiento",
          text: "Zapatos, superficies, wearables y tecnologías de medios definen \"lo que cuenta\".",
        },
        optimization: {
          title: "La optimización tiene compensaciones",
          text: "La recuperación, mejora y predicción crean debates sobre equidad y poder.",
        },
      },
      threeGalleriesHeading: "Tres galerías",
      threeGalleriesDesc: "Explore la colección del museo organizada en tres galerías temáticas",
      collectionHeading: "Colección",
      sortBy: "Ordenar por:",
      curated: "Curado",
      year: "Año",
      aToZ: "A-Z",
      featuredExhibits: "Exposiciones destacadas",
      featuredExhibitsDesc: "Historias seleccionadas a través de las galerías",
      searchPlaceholder: "Buscar objetos por título o etiquetas...",
      objects: "objetos",
    },
    
    // Questionnaire content
    questionnaire: {
      sectionTitle: "¿Qué cuenta como innovación?",
      sectionSubtitle: "Una reflexión sobre el rendimiento, la tecnología y la equidad.",
      progressLabel: "{{count}} respuesta(s)",
      retake: "Volver a hacer el cuestionario",
      questions: {
        improvement: {
          id: "improvement",
          title: "Pregunta 1 de 5",
          prompt: "¿Qué cuenta como mejora?",
          options: {
            speed: "Tiempos más rápidos o puntuaciones más altas",
            technique: "Mejor técnica o forma",
            injury: "Menos lesiones o una carrera más larga",
            enjoyment: "Más disfrute o satisfacción",
          },
          whyThisMattersHeading: "Por qué importa",
          whyThisMattersText: "La forma en que definimos «mejora» determina qué medimos, para qué entrenamos y qué valoramos en el deporte.",
        },
        regulation: {
          id: "regulation",
          title: "Pregunta 2 de 5",
          prompt: "¿Deberían regularse las ventajas tecnológicas?",
          options: {
            yes: "Sí—mantener la competición justa a través de las épocas",
            no: "No—la innovación debería ser recompensada",
            sometimes: "A veces—caso por caso",
            notSure: "No estoy seguro—es complicado",
          },
          whyThisMattersHeading: "Por qué importa",
          whyThisMattersText: "Esta pregunta llega al corazón de la equidad: ¿cuándo se convierte la innovación en una ventaja injusta?",
        },
        measurement: {
          id: "measurement",
          title: "Pregunta 3 de 5",
          prompt: "¿La medición mejora o limita el rendimiento?",
          options: {
            improves: "Mejora—los datos permiten la optimización",
            limits: "Limita—crea una obsesión con los números",
            both: "Ambos—depende de cómo se use",
            neither: "Ninguno—la medición es neutral",
          },
          whyThisMattersHeading: "Por qué importa",
          whyThisMattersText: "La medición cambia lo que podemos ver, pero también cambia lo que priorizamos.",
        },
        recovery: {
          id: "recovery",
          title: "Pregunta 4 de 5",
          prompt: "¿Cuándo se convierte la recuperación en mejora?",
          options: {
            measurableAdvantage: "Cuando proporciona una ventaja medible",
            expensive: "Cuando es cara o exclusiva",
            beyondNatural: "Cuando va más allá de la recuperación natural",
            alwaysNatural: "La recuperación siempre es natural",
          },
          whyThisMattersHeading: "Por qué importa",
          whyThisMattersText: "La línea entre recuperación y mejora revela nuestras suposiciones sobre lo que es «natural» en el deporte.",
        },
        access: {
          id: "access",
          title: "Pregunta 5 de 5",
          prompt: "¿Quién se beneficia más de la tecnología de rendimiento?",
          options: {
            elite: "Atletas de élite con recursos",
            everyone: "Todos—la tecnología democratiza",
            thoseWhoAfford: "Los que pueden permitírselo",
            depends: "Depende de la tecnología",
          },
          whyThisMattersHeading: "Por qué importa",
          whyThisMattersText: "El acceso a la innovación determina quién puede competir y quién se queda atrás.",
        },
      },
    },
    
    // Common UI strings
    common: {
      reflection: "Reflexión",
      next: "Siguiente",
      previous: "Anterior",
      start: "Comenzar",
      back: "Volver",
      save: "Guardar",
      viewDetails: "Ver detalles",
      tryLab: "Probar el Lab",
      buildPlaybook: "Crear un Playbook",
      startTour: "Comenzar la visita",
      wallLabel: "Cartel de sala",
      specificUseCases: "Casos de uso específicos",
      signatureMoment: "Momento destacado",
      curatorNote: "Nota del curador",
      whySignificant: "Por qué importa",
      whyItMatters: "Por qué importa",
      howItWorks: "Cómo funciona",
      tradeoffs: "Compensaciones",
      whereYoudSeeIt: "Dónde lo verías",
    },
    
    objects: {
      "heuer-stopwatch-1960s": {
        title: "Cronómetro mecánico Heuer",
        subtitle: "El tiempo hecho visible",
        wallLabel: "Cronómetro mecánico Heuer, c. 1960. Utilizado por oficiales y entrenadores de atletismo para estandarizar el cronometraje en competiciones y sesiones de entrenamiento. Hizo visible el tiempo y convirtió el rendimiento en un número.",
        curatorNote: "Este cronómetro no solo medía el tiempo; cambió quién tenía autoridad sobre el rendimiento. Antes del cronometraje mecánico, los oficiales y entrenadores juzgaban la velocidad observando. Después, el cronómetro se convirtió en la última palabra. Este cambio no fue neutral—favoreció a los atletas cuyo rendimiento podía medirse en segundos, y creó un nuevo lenguaje de fracciones e intervalos que entrenadores y atletas aprendieron a hablar. El cronómetro revela la obsesión de nuestra cultura con la cuantificación: confiamos más en los números que en los ojos.",
        whySignificant: "El cronómetro representa un cambio cultural hacia la cuantificación y estandarización en el deporte. Surgió durante un período en el que el deporte se estaba volviendo más profesionalizado, televisado y competitivo. La herramienta no solo midió el rendimiento—cambió cómo entendemos la excelencia, pasando del juicio subjetivo a la medición objetiva. Este cambio tuvo implicaciones profundas: hizo que el rendimiento fuera comparable a través del tiempo y el espacio, pero también redujo lo que 'contaba' como logro a lo que podía medirse en segundos. El cronómetro se convirtió en un símbolo de modernidad y precisión, reflejando valores culturales más amplios sobre objetividad, equidad y progreso.",
        signatureMoment: "Imagine una competencia de atletismo de los años 1960: el pistoletazo de salida suena, y mientras los corredores corren por la recta, un oficial se para en la línea de meta con un cronómetro Heuer en la mano. Cuando el primer corredor cruza, el oficial presiona el botón, y aparece un número—un tiempo que será registrado, comparado y recordado. Este momento representa un cambio fundamental: el rendimiento ya no es solo 'rápido' o 'lento' como lo juzgan los ojos humanos, sino un número preciso que puede compararse entre atletas, lugares y épocas. El cronómetro transformó el deporte de experiencia subjetiva a datos objetivos.",
        whyItMatters: "El cronómetro transformó el deporte haciendo que el tiempo fuera comparable a través de lugares, épocas y atletas. Antes del cronometraje mecánico, los récords eran inconsistentes—un tiempo 'rápido' en un lugar podía no significar lo mismo en otro. El cronómetro resolvió esto creando un estándar universal. Una vez que el cronometraje se volvió mecánico, los atletas comenzaron a entrenar a fracciones específicas en lugar de solo 'sentirse rápidos'. Los entrenadores podían comparar rendimientos entre sesiones. La competición se estandarizó, con los tiempos sirviendo como récords objetivos que podían verificarse y compararse. Para la década de 1970, las fracciones de tiempo se habían convertido en el lenguaje del entrenamiento de atletismo. El cronómetro no solo midió el rendimiento—cambió lo que significaba el rendimiento, desplazando la autoridad del juicio humano a la precisión mecánica.",
        howItWorksParagraph: "El cronómetro utiliza un movimiento mecánico con engranajes cuidadosamente calibrados para medir el tiempo transcurrido. Cuando se inicia, un resorte se desenrolla a una velocidad constante, impulsando engranajes que mueven las manecillas. La precisión proviene de las relaciones de engranajes, que dividen el tiempo en intervalos consistentes. Esta consistencia mecánica reemplazó la variabilidad del cronometraje humano, proporcionando un estándar confiable para medir el rendimiento.",
        tradeoffs: [
          "Equidad: La precisión mecánica hizo que el cronometraje fuera más objetivo, pero los primeros cronómetros eran caros, creando barreras de acceso para programas con menos financiación",
          "Autoridad: El cronómetro desplazó la autoridad de los oficiales humanos a los dispositivos mecánicos, que algunos veían como más justos y otros como menos humanos",
          "Límites de medición: El cronómetro solo podía medir el tiempo, reduciendo potencialmente lo que 'cuenta' como rendimiento a lo que puede cuantificarse en segundos",
          "Dependencia: Los atletas y entrenadores se volvieron dependientes de los datos de cronometraje, perdiendo potencialmente la conexión con el ritmo natural y la conciencia corporal",
          "Estandarización: Aunque hizo que la competición fuera más comparable, la estandarización también la hizo más uniforme, limitando potencialmente la expresión individual"
        ],
        reflectionFeedback: {
          accuracy: "Priorizas la precisión y la objetividad. El cronómetro representa un cambio hacia la autoridad mecánica—donde los números reemplazan el juicio humano. Esto hace que la competición sea más justa y comparable, pero también plantea preguntas: ¿qué formas de excelencia no se pueden medir en segundos? Cuando confiamos completamente en el cronómetro, podríamos perder la forma del atleta, la estrategia o el contexto de su rendimiento. El cronómetro nos da precisión, pero la precisión no es lo mismo que la comprensión.",
          context: "Reconoces que el cronometraje no existe en el vacío. El significado del cronómetro cambió según dónde y cuándo se usaba—en competiciones de élite versus competiciones locales, en los años 1960 versus hoy. Los primeros cronómetros eran caros, creando barreras de acceso. La misma herramienta que hizo que la competición fuera más justa también la hizo más exclusiva. El contexto importa: ¿quién podía permitirse el cronómetro? ¿Quién tenía acceso a entrenadores que entendían las fracciones de tiempo? El cronómetro estandarizó el cronometraje, pero no estandarizó el acceso.",
          fairness: "Valoras la equidad por encima de todo. El cronómetro hizo que el cronometraje fuera objetivo, pero la objetividad no garantiza la equidad. Los primeros cronómetros eran caros, creando barreras para programas con menos financiación. La misma herramienta que hizo que la competición fuera más justa también la hizo más exclusiva. La equidad requiere más que precisión mecánica—requiere acceso igual a herramientas, entrenamiento y oportunidades. El cronómetro estandarizó el cronometraje, pero no estandarizó el acceso o las oportunidades."
        }
      }
    },
    tour: {
      contextStop: "Parada contextual",
      whatToNoticeNext: "Qué notar a continuación",
      whatToNoticeNextDesc: "Al explorar los objetos en esta galería, note cómo abordan el problema y las compensaciones que hemos discutido.",
      guidedTour: "Visita guiada",
      selectYourTour: "Seleccione su visita",
      tourAllInnovations: "Visitar todas las innovaciones",
      experienceComplete: "Experimente el viaje completo a través de las tres galerías, explorando cómo las innovaciones transformaron el deporte.",
      chooseGallery: "Elija una galería o explore las tres",
      complete: "Completo",
      duration: "20-25 min",
      stops: "10 paradas",
      galleryDuration: "12-15 min • 6 paradas",
      contextStops: {
        measuringPerformance: {
          title: "El problema: Medir el rendimiento",
          content: "Antes de la medición estandarizada, el deporte era inconsistente. Los tiempos variaban según el lugar, los oficiales y la época. Los récords no se podían comparar. Los atletas entrenaban por sensación, no por datos. El problema no era solo técnico—se trataba de autoridad. ¿Quién decide qué significa 'rápido'? ¿Cómo hacemos que el rendimiento sea comparable a través del tiempo y el espacio? Estas innovaciones tempranas resolvieron una pregunta fundamental: cómo hacer que el deporte sea medible, comparable y justo. Preste atención a cómo el cronómetro transformó no solo el cronometraje, sino el lenguaje mismo del rendimiento.",
          reflectionPrompt: "¿Qué problema debería resolver primero la innovación?",
          reflectionChoices: {
            fairness: "Equidad y acceso",
            performance: "Rendimiento y optimización",
            understanding: "Comprensión e insight"
          },
          feedback: {
            fairness: "Priorizas hacer que el deporte sea más equitativo. La innovación debería resolver primero los problemas de exclusión e desigualdad. Al explorar los objetos en esta galería, note cómo herramientas como el cronómetro y los tacos de salida crearon nuevos estándares—pero también considere quién tenía acceso a estas herramientas y quién no. La equidad no se trata solo de reglas iguales; se trata de igualdad de oportunidades para beneficiarse de la innovación.",
            performance: "Valoras empujar los límites. La innovación debería resolver primero los problemas de medición y optimización. Al explorar los objetos en esta galería, verás cómo herramientas como el cronómetro y los monitores de frecuencia cardíaca transformaron el entrenamiento de la conjetura a la precisión. Pero recuerda: la optimización a veces puede venir a costa de otros valores, como la accesibilidad o la experiencia humana del deporte.",
            understanding: "Quieres entender cómo funcionan las cosas. La innovación debería resolver primero los problemas de visibilidad y conocimiento. Al explorar los objetos en esta galería, note cómo cada herramienta revela algo que antes era invisible—tiempo, frecuencia cardíaca, potencia. Pero también considere: ¿qué significa cuando podemos medir todo? ¿Qué se pierde cuando nos enfocamos solo en lo que se puede cuantificar?"
          }
        },
        "problem-measuring": {
          title: "El problema: Medir el rendimiento",
          content: "Antes de la medición estandarizada, el deporte era inconsistente. Los tiempos variaban según el lugar, los oficiales y la época. Los récords no se podían comparar. Los atletas entrenaban por sensación, no por datos. El problema no era solo técnico—se trataba de autoridad. ¿Quién decide qué significa 'rápido'? ¿Cómo hacemos que el rendimiento sea comparable a través del tiempo y el espacio? Estas innovaciones tempranas resolvieron una pregunta fundamental: cómo hacer que el deporte sea medible, comparable y justo. Preste atención a cómo el cronómetro transformó no solo el cronometraje, sino el lenguaje mismo del rendimiento.",
          reflectionPrompt: "¿Qué problema debería resolver primero la innovación?",
          reflectionChoices: {
            fairness: "Priorizas hacer que el deporte sea más equitativo. La innovación debería resolver primero los problemas de exclusión e desigualdad.",
            performance: "Valoras empujar los límites. La innovación debería resolver primero los problemas de medición y optimización.",
            understanding: "Quieres entender cómo funcionan las cosas. La innovación debería resolver primero los problemas de visibilidad y conocimiento."
          }
        }
      }
    },
    playbook: {
      scenarios: {
        "high-school-track-coach": {
          title: "Entrenador de atletismo de secundaria con presupuesto limitado",
          subtitle: "Construir un programa con un presupuesto ajustado",
          description: "Estás entrenando un equipo de atletismo de secundaria con recursos mínimos. Necesitas herramientas asequibles, duraderas y enseñables para jóvenes atletas. Tus atletas van desde principiantes hasta corredores competitivos, y quieres dar a todos una oportunidad justa de mejorar.",
          outcomes: {
            "smart-budget-success": {
              title: "Éxito con presupuesto inteligente",
              description: "Tu temporada va bien. El cronómetro y los tacos de salida dan a los atletas retroalimentación concreta que pueden entender. Los monitores de frecuencia cardíaca les ayudan a aprender el ritmo sin arruinarse. Tus atletas mejoran constantemente, y el programa se siente justo—todos tienen acceso a las mismas herramientas. A mitad de temporada, has construido una cultura donde la medición es parte del aprendizaje, no solo de la competición.",
              whatWorked: {
                0: "Las herramientas asequibles crearon acceso igual para todos los atletas",
                1: "Las mediciones simples ayudaron a los atletas a entender el ritmo",
                2: "El equipo duradero duró toda la temporada",
                3: "Los datos básicos no abrumaron a los jóvenes atletas"
              },
              whatBackfired: {},
              questions: {
                0: "¿Cómo mantienes la equidad mientras algunos atletas progresan más rápido?",
                1: "¿Qué pasa cuando los padres quieren comprar equipo caro para sus hijos?"
              }
            },
            "overreach-struggle": {
              title: "Lucha por excederse",
              description: "Intentaste incluir demasiadas herramientas caras, y se vuelve en tu contra. Algunos atletas obtienen acceso a mejor equipo a través de los padres, creando desigualdad visible. El equipo se divide entre los 'que tienen' y los 'que no tienen'. La moral baja. Pasas demasiado tiempo gestionando el equipo en lugar de entrenar. Al final de la temporada, te das cuenta de que más simple habría sido mejor.",
              whatWorked: {},
              whatBackfired: {
                0: "Las herramientas caras crearon desigualdad entre los atletas",
                1: "Los padres que compran equipo para algunos niños minaron la unidad del equipo",
                2: "Demasiado enfoque en el equipo distrajo del entrenamiento",
                3: "Las herramientas complejas eran difíciles de entender para los principiantes"
              },
              questions: {
                0: "¿Cómo equilibras la participación de los padres con la equidad del equipo?",
                1: "¿Qué políticas pueden evitar que el equipo cree divisiones?"
              }
            }
          }
        }
      }
    }
  }
};

// Helper to get nested translation
export function getCompleteTranslation(
  language: "en" | "fr" | "es",
  key: string
): string {
  const keys = key.split(".");
  
  // Try requested language first
  let value: any = completeTranslations[language];
  let found = true;
  
  for (const k of keys) {
    if (value && typeof value === "object" && k in value) {
      value = value[k];
    } else {
      found = false;
      break;
    }
  }
  
  // If not found, fallback to English
  if (!found || value === undefined) {
    value = completeTranslations.en;
    found = true;
    
    for (const k of keys) {
      if (value && typeof value === "object" && k in value) {
        value = value[k];
      } else {
        found = false;
        break;
      }
    }
  }
  
  // If still not found, return the key itself (so useTranslation can try fallback)
  if (!found || value === undefined) {
    // Only log in development
    if (typeof window !== "undefined" && process.env.NODE_ENV === "development") {
      console.warn(`Translation missing for key: ${key} (language: ${language})`);
    }
    return key; // Return key so useTranslation can try getTranslation fallback
  }
  
  // If value is an array, return the key (arrays need special handling)
  if (Array.isArray(value)) {
    return key;
  }
  
  // Return the string value, or key if not a string
  return typeof value === "string" ? value : key;
}

