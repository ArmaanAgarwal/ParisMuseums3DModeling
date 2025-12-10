// Helper to get object translations
import type { Language } from "@/contexts/LanguageContext";
import { getCompleteTranslation } from "./complete";

export function getObjectTranslation(
  objectId: string,
  language: Language,
  field: string
): string | null {
  const key = `objects.${objectId}.${field}`;
  const translation = getCompleteTranslation(language, key);
  
  // If translation is the same as key or is a fallback placeholder, it wasn't found
  if (translation === key || translation.startsWith("[missing:")) {
    return null;
  }
  
  return translation;
}
