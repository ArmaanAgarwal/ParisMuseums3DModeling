// Helper to get translated object content
import { useLanguage } from "@/contexts/LanguageContext";
import { getObjectTranslation } from "@/i18n/objectTranslations";
import type { MuseumObject } from "@/data/types";

export function useTranslatedObject(object: MuseumObject) {
  const { language } = useLanguage();
  
  // For now, if translation exists, use it; otherwise fall back to object data
  // This allows gradual migration
  const getField = (field: string): string => {
    const translated = getObjectTranslation(object.id, language, field);
    if (translated) return translated;
    
    // Fallback to object data
    const keys = field.split(".");
    let value: any = object;
    for (const k of keys) {
      value = value?.[k];
      if (value === undefined) break;
    }
    
    if (Array.isArray(value)) {
      return value.join(", ");
    }
    
    return typeof value === "string" ? value : "";
  };
  
  return {
    title: getField("title") || object.title,
    subtitle: getField("subtitle") || object.subtitle,
    wallLabel: getField("wallLabel") || object.didactics?.wallLabel || "",
    curatorNote: getField("curatorNote") || object.didactics?.curatorNote || "",
    whySignificant: getField("whySignificant") || object.didactics?.whySignificant || "",
    signatureMoment: getField("signatureMoment") || object.didactics?.signatureMoment || "",
    whyItMatters: getField("whyItMatters") || object.didactics?.whyItMatters || "",
    specificUseCases: object.didactics?.specificUseCases || [],
    howItWorks: object.didactics?.howItWorks || { bullets: [], paragraph: "" },
    tradeoffs: object.didactics?.tradeoffs || [],
    language,
  };
}

