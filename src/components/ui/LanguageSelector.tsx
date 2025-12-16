"use client";

import { useLanguage } from "@/contexts/LanguageContext";

export function LanguageSelector() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-3 py-2">
      {(["en", "fr", "es"] as const).map((lang) => (
        <button
          key={lang}
          onClick={() => setLanguage(lang)}
          className={`px-2 py-1 text-sm font-medium transition ${
            language === lang
              ? "text-cyan-400"
              : "text-white/60 hover:text-white/90"
          }`}
        >
          {lang.toUpperCase()}
        </button>
      ))}
    </div>
  );
}


