// Museum Identity - Single source of truth
// Used across Home, About, and other pages

export const MUSEUM_IDENTITY = {
  name: "Museum of Innovation in Sports",
  subheading: "How new ideas, tools, and systems change what athletes can do.",
  
  thesis: "Innovation reshapes sport by changing training, measurement, equipment, and recovery. This museum traces those changes and asks what progress should mean.",
  
  mission: "We explain the innovations that helped athletes push past their limits and changed what sport could be, by showing how new tools and ideas worked and why they mattered.",
  
  whoItsFor: "For students, athletes, coaches, and anyone curious about how sport evolves.",
  
  principles: [
    {
      title: "Measurement changes reality",
      description: "Tracked metrics become targets, and targets reshape behavior."
    },
    {
      title: "Design is performance",
      description: "Shoes, surfaces, wearables, and media technologies define \"what counts.\""
    },
    {
      title: "Optimization has tradeoffs",
      description: "Recovery, enhancement, and prediction create fairness + power debates."
    }
  ],
  
  visitorModes: [
    {
      name: "Guided Tour",
      description: "Follow a curated path through the museum's key themes"
    },
    {
      name: "Explore Galleries",
      description: "Browse three thematic galleries at your own pace"
    },
    {
      name: "Exhibits",
      description: "Deep dive into cross-gallery stories and connections"
    },
    {
      name: "Compare & Debate",
      description: "Compare objects side-by-side and explore different perspectives"
    },
    {
      name: "Save Objects",
      description: "Build your own collection of interesting artifacts"
    }
  ],
  
  digitalDidactics: "This museum is online-first and uses wall texts, interactive panels, and mini-activities to help you explore how performance culture has evolved. Each object includes context, measurement angles, design considerations, and debate prompts to encourage critical thinking.",
} as const;
