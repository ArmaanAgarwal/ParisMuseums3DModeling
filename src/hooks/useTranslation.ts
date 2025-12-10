import { useLanguage } from "@/contexts/LanguageContext";
import { getTranslation } from "@/i18n/translations";
import { getCompleteTranslation } from "@/i18n/complete";

export function useTranslation() {
  const { language } = useLanguage();
  
  const t = (key: string, params?: Record<string, string | number>): string => {
    // Try complete translations first (includes all narratives)
    let translation = getCompleteTranslation(language, key);
    
    // If not found in complete (returned the key itself), try UI translations
    if (translation === key) {
      translation = getTranslation(language, key);
    }
    
    // If still not found (both returned the key), try English fallback
    if (translation === key && language !== "en") {
      translation = getCompleteTranslation("en", key);
      if (translation === key) {
        translation = getTranslation("en", key);
      }
    }
    
    // If still not found, return a clean fallback (last part of key or "...")
    if (translation === key) {
      const keyParts = key.split(".");
      translation = keyParts[keyParts.length - 1] || "...";
      // Only log in development
      if (typeof window !== "undefined" && process.env.NODE_ENV === "development") {
        console.warn(`Translation key not found: ${key}`);
      }
    }
    
    // Simple interpolation for {{param}} patterns
    if (params) {
      Object.entries(params).forEach(([param, value]) => {
        translation = translation.replace(new RegExp(`{{${param}}}`, 'g'), String(value));
      });
    }
    
    return translation;
  };
  
  return { t, language };
}

// Helper to get object content in current language
export function useObjectTranslation(objectId: string) {
  const { language } = useLanguage();
  const { t } = useTranslation();
  
  return {
    title: () => t(`objects.${objectId}.title`),
    subtitle: () => t(`objects.${objectId}.subtitle`),
    wallLabel: () => t(`objects.${objectId}.wallLabel`),
    curatorNote: () => t(`objects.${objectId}.curatorNote`),
    whySignificant: () => t(`objects.${objectId}.whySignificant`),
    signatureMoment: () => t(`objects.${objectId}.signatureMoment`),
    whyItMatters: () => t(`objects.${objectId}.whyItMatters`),
    howItWorksParagraph: () => t(`objects.${objectId}.howItWorksParagraph`),
    tradeoffs: () => {
      const tradeoffs: string[] = [];
      let i = 0;
      while (true) {
        const tradeoff = t(`objects.${objectId}.tradeoffs.${i}`);
        if (tradeoff === `objects.${objectId}.tradeoffs.${i}`) break;
        tradeoffs.push(tradeoff);
        i++;
      }
      return tradeoffs;
    },
    reflectionFeedback: (choice: "accuracy" | "context" | "fairness") => 
      t(`objects.${objectId}.reflectionFeedback.${choice}`),
  };
}

// Helper to get playbook scenario content
export function usePlaybookTranslation(scenarioId: string) {
  const { t } = useTranslation();
  
  return {
    title: () => t(`playbook.scenarios.${scenarioId}.title`),
    subtitle: () => t(`playbook.scenarios.${scenarioId}.subtitle`),
    description: () => t(`playbook.scenarios.${scenarioId}.description`),
    outcome: (outcomeId: string) => ({
      title: () => t(`playbook.scenarios.${scenarioId}.outcomes.${outcomeId}.title`),
      description: () => t(`playbook.scenarios.${scenarioId}.outcomes.${outcomeId}.description`),
      whatWorked: () => {
        const items: string[] = [];
        let i = 0;
        while (true) {
          const item = t(`playbook.scenarios.${scenarioId}.outcomes.${outcomeId}.whatWorked.${i}`);
          if (item === `playbook.scenarios.${scenarioId}.outcomes.${outcomeId}.whatWorked.${i}`) break;
          items.push(item);
          i++;
        }
        return items;
      },
      whatBackfired: () => {
        const items: string[] = [];
        let i = 0;
        while (true) {
          const item = t(`playbook.scenarios.${scenarioId}.outcomes.${outcomeId}.whatBackfired.${i}`);
          if (item === `playbook.scenarios.${scenarioId}.outcomes.${outcomeId}.whatBackfired.${i}`) break;
          items.push(item);
          i++;
        }
        return items;
      },
      questions: () => {
        const items: string[] = [];
        let i = 0;
        while (true) {
          const item = t(`playbook.scenarios.${scenarioId}.outcomes.${outcomeId}.questions.${i}`);
          if (item === `playbook.scenarios.${scenarioId}.outcomes.${outcomeId}.questions.${i}`) break;
          items.push(item);
          i++;
        }
        return items;
      },
    }),
  };
}

