"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { getAllPlaybookScenarios } from "@/data/playbook";
import { useTranslation } from "@/hooks/useTranslation";
import { useLanguage } from "@/contexts/LanguageContext";
import { getContentTranslation } from "@/i18n/content";

export default function PlaybookPage() {
  const router = useRouter();
  const scenarios = getAllPlaybookScenarios();
  const { t } = useTranslation();
  const { language } = useLanguage();
  
  // Load history
  const [history, setHistory] = useState<any[]>([]);
  
  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        const saved = localStorage.getItem("playbookHistory");
        if (saved) {
          setHistory(JSON.parse(saved));
        }
      } catch (e) {
        // Ignore
      }
    }
  }, []);


  return (
    <div className="min-h-screen bg-black py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="mx-auto max-w-4xl">
          <Breadcrumbs items={[{ label: t("playbook.title") }]} />
          <h1 className="mb-6 text-5xl font-bold text-white">{t("playbook.title")}</h1>
          <p className="mb-12 text-xl text-white/70 leading-relaxed">
            {t("playbook.subtitle")}
          </p>

          {/* Previous Plans */}
          {history.length > 0 && (
            <div className="mb-12 rounded-xl border border-white/15 bg-white/5 p-8">
              <h2 className="mb-4 text-2xl font-semibold text-white">{t("playbook.yourPreviousPlans")}</h2>
              <div className="space-y-3">
                {history.slice(-5).reverse().map((item: any, i: number) => (
                  <Link
                    key={i}
                    href={`/playbook/${item.scenarioId}`}
                    className="block rounded-lg border border-white/10 bg-white/5 p-4 transition hover:border-white/20 hover:bg-white/10"
                  >
                    <div className="font-semibold text-white">{item.scenarioTitle}</div>
                    <div className="text-sm text-white/60">{t("playbook.outcome")}: {item.outcomeTitle}</div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          <div className="grid gap-6 md:grid-cols-2">
            {scenarios.map((scenario, i) => (
              <motion.button
                key={scenario.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                onClick={() => router.push(`/playbook/${scenario.id}`)}
                className="group rounded-2xl border border-white/15 bg-white/5 p-8 text-left transition-all hover:border-white/30 hover:bg-white/10"
              >
                <h3 className="mb-2 text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                  {getContentTranslation(language, `playbook.scenarios.${scenario.id}.title`) || scenario.title}
                </h3>
                <p className="mb-2 text-sm text-white/50">
                  {getContentTranslation(language, `playbook.scenarios.${scenario.id}.subtitle`) || scenario.subtitle}
                </p>
                <p className="mb-4 text-white/70 leading-relaxed">
                  {getContentTranslation(language, `playbook.scenarios.${scenario.id}.description`) || scenario.description}
                </p>
                <div className="text-sm text-cyan-400">{t("playbook.buildPlan")}</div>
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

