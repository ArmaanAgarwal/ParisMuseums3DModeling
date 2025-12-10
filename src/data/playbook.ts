// Playbook scenarios and outcomes

export type PlaybookScenario = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  recommendedObjectIds: string[];
  riskyObjectIds: string[];
  neutralObjectIds: string[];
  constraints: {
    budget?: "low" | "medium" | "high";
    level?: "recreational" | "school" | "elite";
    contextTags?: string[];
  };
  outcomeProfiles: PlaybookOutcomeProfile[];
};

export type PlaybookOutcomeProfile = {
  id: string;
  title: string;
  description: string; // 5–10 sentences, scenario-specific story
  conditions: {
    includeAnyOf?: string[];
    excludeAnyOf?: string[];
    minRecommendedCount?: number;
    maxRiskyCount?: number;
  };
  metrics: {
    performance: number;      // -5 to +5
    injuryRisk: number;
    fairness: number;
    accessibility: number;
    dataDependence: number;
  };
  followUpQuestions: string[];
  suggestedObjects: string[];
  whatWorked: string[];
  whatBackfired: string[];
};

export const PLAYBOOK_SCENARIOS: PlaybookScenario[] = [
  {
    id: "high-school-track-coach",
    title: "High School Track Coach with Limited Budget",
    subtitle: "Building a program on a tight budget",
    description: "You're coaching a high school track team with minimal resources. You need tools that are affordable, durable, and teachable to young athletes. Your athletes range from beginners to competitive runners, and you want to give everyone a fair chance to improve.",
    recommendedObjectIds: ["heuer-stopwatch-1960s", "track-starting-blocks", "vintage-track-spikes", "polar-hrm-1980s"],
    riskyObjectIds: ["nike-vaporfly", "cryotherapy-chamber", "normatec-boots", "vicon-mocap-markers"],
    neutralObjectIds: ["leather-medicine-ball-early", "srm-power-meter", "fitbit-tracker", "theragun-massage-gun"],
    constraints: {
      budget: "low",
      level: "school",
      contextTags: ["affordability", "durability", "teaching"]
    },
    outcomeProfiles: [
      {
        id: "smart-budget-success",
        title: "Smart Budget Success",
        description: "Your season goes well. The stopwatch and starting blocks give athletes concrete feedback they can understand. Heart rate monitors help them learn pacing without breaking the bank. Your athletes improve steadily, and the program feels fair—everyone has access to the same tools. By mid-season, you've built a culture where measurement is part of learning, not just competition.",
        conditions: {
          minRecommendedCount: 2,
          maxRiskyCount: 0
        },
        metrics: {
          performance: 3,
          injuryRisk: -2,
          fairness: 4,
          accessibility: 5,
          dataDependence: 2
        },
        whatWorked: [
          "Affordable tools created equal access for all athletes",
          "Simple measurements helped athletes understand pacing",
          "Durable equipment lasted the whole season",
          "Basic data didn't overwhelm young athletes"
        ],
        whatBackfired: [],
        followUpQuestions: [
          "How do you maintain fairness as some athletes progress faster?",
          "What happens when parents want to buy expensive gear for their kids?"
        ],
        suggestedObjects: ["track-starting-blocks", "polar-hrm-1980s"]
      },
      {
        id: "overreach-struggle",
        title: "Overreach Struggle",
        description: "You tried to include too many expensive tools, and it backfires. Some athletes get access to better gear through parents, creating visible inequality. The team splits between 'haves' and 'have-nots.' Morale drops. You spend too much time managing equipment instead of coaching. By season's end, you realize simpler would have been better.",
        conditions: {
          maxRiskyCount: 2
        },
        metrics: {
          performance: 1,
          injuryRisk: 0,
          fairness: -3,
          accessibility: -2,
          dataDependence: 3
        },
        whatWorked: [],
        whatBackfired: [
          "Expensive tools created inequality between athletes",
          "Parents buying gear for some kids undermined team unity",
          "Too much focus on equipment distracted from coaching",
          "Complex tools were hard for beginners to understand"
        ],
        followUpQuestions: [
          "How do you balance parent involvement with team equity?",
          "What policies can prevent equipment from creating divisions?"
        ],
        suggestedObjects: ["heuer-stopwatch-1960s", "track-starting-blocks"]
      },
      {
        id: "balanced-approach",
        title: "Balanced Approach",
        description: "You mix affordable basics with one strategic upgrade. The stopwatch and blocks are your foundation, but you add heart rate monitors mid-season as athletes show commitment. This creates a sense of progression: earn access to better tools. The season goes well, though you notice some athletes still struggle with the data. Overall, fairness feels maintained.",
        conditions: {
          minRecommendedCount: 2,
          maxRiskyCount: 1
        },
        metrics: {
          performance: 2,
          injuryRisk: -1,
          fairness: 3,
          accessibility: 3,
          dataDependence: 2
        },
        whatWorked: [
          "Progressive access motivated athletes",
          "Basic tools ensured everyone could participate",
          "Strategic upgrade didn't break the budget"
        ],
        whatBackfired: [
          "Some athletes struggled with data interpretation",
          "Managing equipment access took extra time"
        ],
        followUpQuestions: [
          "How do you ensure progressive access feels fair?",
          "What support do athletes need to use data effectively?"
        ],
        suggestedObjects: ["polar-hrm-1980s", "track-starting-blocks"]
      }
    ]
  },
  {
    id: "recreational-marathon-runner",
    title: "Recreational Runner Training for First Marathon",
    subtitle: "Training smart without breaking the bank",
    description: "You're a recreational runner preparing for your first marathon. You want to train smart, avoid injury, and finish strong without spending a fortune. You have a full-time job and limited time, so efficiency matters. You're not trying to win—just finish and feel good doing it.",
    recommendedObjectIds: ["fitbit-tracker", "polar-hrm-1980s", "normatec-boots", "track-starting-blocks"],
    riskyObjectIds: ["nike-vaporfly", "cryotherapy-chamber", "vicon-mocap-markers", "srm-power-meter"],
    neutralObjectIds: ["heuer-stopwatch-1960s", "theragun-massage-gun", "leather-medicine-ball-early"],
    constraints: {
      budget: "medium",
      level: "recreational",
      contextTags: ["injury-prevention", "time-efficiency", "first-marathon"]
    },
    outcomeProfiles: [
      {
        id: "smart-training-success",
        title: "Smart Training Success",
        description: "Your training goes smoothly. The Fitbit helps you track daily activity and sleep, which you realize matters more than you thought. Heart rate training keeps your easy runs actually easy, preventing burnout. Compression boots help with recovery after long runs. You finish your marathon feeling strong, and you've learned sustainable training habits.",
        conditions: {
          minRecommendedCount: 3,
          maxRiskyCount: 0
        },
        metrics: {
          performance: 3,
          injuryRisk: -3,
          fairness: 4,
          accessibility: 4,
          dataDependence: 2
        },
        whatWorked: [
          "Activity tracking helped balance training and life",
          "Heart rate training prevented overtraining",
          "Recovery tools reduced soreness and injury risk",
          "Affordable tools didn't create financial stress"
        ],
        whatBackfired: [],
        followUpQuestions: [
          "How do you maintain these habits after the marathon?",
          "What data actually matters for recreational runners?"
        ],
        suggestedObjects: ["fitbit-tracker", "normatec-boots"]
      },
      {
        id: "overcomplication-struggle",
        title: "Overcomplication Struggle",
        description: "You get overwhelmed by too much data and expensive gear. The power meter and motion capture feel like overkill for your first marathon. You spend more time analyzing data than running. When you do run, you're constantly checking numbers instead of listening to your body. The marathon becomes stressful instead of enjoyable.",
        conditions: {
          maxRiskyCount: 2
        },
        metrics: {
          performance: 1,
          injuryRisk: 1,
          fairness: 2,
          accessibility: -2,
          dataDependence: 5
        },
        whatWorked: [],
        whatBackfired: [
          "Too much data analysis replaced intuitive running",
          "Expensive gear created pressure to perform",
          "Complex tools were hard to use correctly",
          "Data obsession reduced enjoyment"
        ],
        followUpQuestions: [
          "What's the minimum data needed for recreational running?",
          "How do you balance technology with running enjoyment?"
        ],
        suggestedObjects: ["fitbit-tracker", "polar-hrm-1980s"]
      }
    ]
  },
  {
    id: "cyclist-balancing-work",
    title: "Cyclist Balancing Work and Serious Training",
    subtitle: "Maximizing limited training time",
    description: "You're a serious cyclist with a full-time job. You need efficient training tools that maximize your limited time and help you recover quickly. You're competitive but realistic about your constraints. You want to perform well without sacrificing work-life balance.",
    recommendedObjectIds: ["srm-power-meter", "fitbit-tracker", "theragun-massage-gun", "normatec-boots"],
    riskyObjectIds: ["cryotherapy-chamber", "vicon-mocap-markers"],
    neutralObjectIds: ["polar-hrm-1980s", "nike-vaporfly", "heuer-stopwatch-1960s"],
    constraints: {
      budget: "high",
      level: "elite",
      contextTags: ["time-efficiency", "recovery", "data-driven"]
    },
    outcomeProfiles: [
      {
        id: "efficient-excellence",
        title: "Efficient Excellence",
        description: "Your training becomes highly efficient. Power meter data helps you maximize every training session—no wasted effort. The massage gun and compression boots speed recovery, letting you train more consistently. Activity tracking helps you balance training load with work stress. You perform better than expected given your time constraints.",
        conditions: {
          minRecommendedCount: 3,
          maxRiskyCount: 0
        },
        metrics: {
          performance: 4,
          injuryRisk: -2,
          fairness: 3,
          accessibility: 2,
          dataDependence: 4
        },
        whatWorked: [
          "Power data maximized training efficiency",
          "Recovery tools enabled consistent training",
          "Activity tracking balanced training and work",
          "Data-driven approach fit limited time"
        ],
        whatBackfired: [],
        followUpQuestions: [
          "How do you avoid becoming too dependent on data?",
          "What happens when you can't access these tools?"
        ],
        suggestedObjects: ["srm-power-meter", "normatec-boots"]
      }
    ]
  },
  {
    id: "athlete-recovering-injury",
    title: "Athlete Recovering from Overuse Injury",
    subtitle: "Safe return to training",
    description: "You're recovering from a repetitive stress injury. You need tools that help you monitor recovery, prevent re-injury, and gradually return to training. You're cautious but eager to get back. You want evidence-based approaches, not quick fixes.",
    recommendedObjectIds: ["vicon-mocap-markers", "normatec-boots", "theragun-massage-gun", "polar-hrm-1980s"],
    riskyObjectIds: ["nike-vaporfly", "cryotherapy-chamber"],
    neutralObjectIds: ["fitbit-tracker", "srm-power-meter", "heuer-stopwatch-1960s"],
    constraints: {
      budget: "high",
      level: "elite",
      contextTags: ["injury-recovery", "prevention", "evidence-based"]
    },
    outcomeProfiles: [
      {
        id: "careful-recovery-success",
        title: "Careful Recovery Success",
        description: "Your recovery goes well. Motion capture helps identify movement patterns that contributed to injury. Compression and massage tools support healing without rushing. Heart rate monitoring helps you gauge readiness to increase training. You return to full training gradually, with better movement patterns and injury awareness.",
        conditions: {
          minRecommendedCount: 3,
          maxRiskyCount: 0
        },
        metrics: {
          performance: 2,
          injuryRisk: -4,
          fairness: 3,
          accessibility: 2,
          dataDependence: 3
        },
        whatWorked: [
          "Movement analysis identified injury causes",
          "Recovery tools supported healing process",
          "Gradual return prevented re-injury",
          "Data helped gauge readiness"
        ],
        whatBackfired: [],
        followUpQuestions: [
          "How do you maintain injury prevention long-term?",
          "What movement patterns need ongoing attention?"
        ],
        suggestedObjects: ["vicon-mocap-markers", "normatec-boots"]
      }
    ]
  }
];

export function getPlaybookScenario(id: string): PlaybookScenario | undefined {
  return PLAYBOOK_SCENARIOS.find(s => s.id === id);
}

export function getAllPlaybookScenarios(): PlaybookScenario[] {
  return PLAYBOOK_SCENARIOS;
}

export function determineOutcome(
  scenario: PlaybookScenario,
  selectedObjectIds: string[]
): PlaybookOutcomeProfile {
  if (!scenario || !scenario.outcomeProfiles || scenario.outcomeProfiles.length === 0) {
    // Return safe fallback
    return {
      id: "mixed-plan",
      title: "Mixed Plan",
      description: "Your plan combines different approaches. Some tools work well together, others create tension. The season has ups and downs. You learn what works for your specific situation, though it takes time to figure out the right balance.",
      conditions: {},
      metrics: {
        performance: 0,
        injuryRisk: 0,
        fairness: 0,
        accessibility: 0,
        dataDependence: 0
      },
      followUpQuestions: [
        "What combinations worked best?",
        "How would you adjust your plan next time?",
      ],
      suggestedObjects: scenario?.recommendedObjectIds?.slice(0, 2) || [],
      whatWorked: ["Some tools complemented each other"],
      whatBackfired: ["Some combinations created conflicts"]
    };
  }
  
  // Find matching outcome profiles
  const matches = scenario.outcomeProfiles.filter(profile => {
    if (!profile || !profile.conditions) return false;
    const conditions = profile.conditions;
    
    // Check includeAnyOf
    if (conditions.includeAnyOf && conditions.includeAnyOf.length > 0) {
      const hasAny = conditions.includeAnyOf.some(id => selectedObjectIds.includes(id));
      if (!hasAny) return false;
    }
    
    // Check excludeAnyOf
    if (conditions.excludeAnyOf && conditions.excludeAnyOf.length > 0) {
      const hasAny = conditions.excludeAnyOf.some(id => selectedObjectIds.includes(id));
      if (hasAny) return false;
    }
    
    // Check minRecommendedCount
    if (conditions.minRecommendedCount !== undefined) {
      const recommendedCount = selectedObjectIds.filter(id => 
        scenario.recommendedObjectIds.includes(id)
      ).length;
      if (recommendedCount < conditions.minRecommendedCount) return false;
    }
    
    // Check maxRiskyCount
    if (conditions.maxRiskyCount !== undefined) {
      const riskyCount = selectedObjectIds.filter(id => 
        scenario.riskyObjectIds.includes(id)
      ).length;
      if (riskyCount > conditions.maxRiskyCount) return false;
    }
    
    return true;
  });
  
  // If multiple matches, prefer the one with most specific conditions
  if (matches.length > 0) {
    return matches.sort((a, b) => {
      const aSpecificity = (a.conditions.includeAnyOf?.length || 0) + 
                          (a.conditions.minRecommendedCount || 0);
      const bSpecificity = (b.conditions.includeAnyOf?.length || 0) + 
                          (b.conditions.minRecommendedCount || 0);
      return bSpecificity - aSpecificity;
    })[0];
  }
  
  // Fallback: neutral "Mixed Plan" outcome
  const recommendedCount = selectedObjectIds.filter(id => 
    scenario.recommendedObjectIds.includes(id)
  ).length;
  const riskyCount = selectedObjectIds.filter(id => 
    scenario.riskyObjectIds.includes(id)
  ).length;
  
  return {
    id: "mixed-plan",
    title: "Mixed Plan",
    description: `Your plan combines different approaches. You selected ${selectedObjectIds.length} objects: ${recommendedCount} recommended, ${riskyCount} risky, and ${selectedObjectIds.length - recommendedCount - riskyCount} neutral. Some tools work well together, others create tension. The season has ups and downs. You learn what works for your specific situation, though it takes time to figure out the right balance.`,
    conditions: {},
    metrics: {
      performance: recommendedCount > riskyCount ? 1 : riskyCount > recommendedCount ? -1 : 0,
      injuryRisk: riskyCount > 0 ? 1 : 0,
      fairness: recommendedCount > 0 ? 1 : 0,
      accessibility: recommendedCount > riskyCount ? 1 : -1,
      dataDependence: selectedObjectIds.length > 2 ? 2 : 0
    },
    followUpQuestions: [
      "What combinations worked best?",
      "How would you adjust your plan next time?",
      "Which tools complemented each other, and which created conflicts?"
    ],
    suggestedObjects: scenario.recommendedObjectIds.slice(0, 2),
    whatWorked: [
      recommendedCount > 0 ? "Recommended tools provided solid foundation" : "Some tools complemented each other",
      "You learned what works for your specific situation"
    ],
    whatBackfired: [
      riskyCount > 0 ? "Risky choices created some challenges" : "Some combinations created conflicts",
      "Finding the right balance took time"
    ]
  };
}

