"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ContinueButton } from "./ContinueButton";
import { ChapterTakeaways } from "./ChapterTakeaways";
import { EthicsPanel } from "@/components/didactics/EthicsPanel";
import { TimelineSlider } from "@/components/interactive/TimelineSlider";
import { CompareArtifacts } from "@/components/interactive/CompareArtifacts";
import { MotionCaptureSandbox } from "@/components/interactive/MotionCaptureSandbox";
import { ForcePlateJump } from "@/components/interactive/ForcePlateJump";
import { AICoachScenario } from "@/components/interactive/AICoachScenario";
import { LevelId, getLevel, getZonesByLevel, getExhibitsByZone, getObjectsByExhibit } from "@/data";

interface LevelChapterProps {
  levelId: LevelId;
  onContinue: () => void;
}

export function LevelChapter({ levelId, onContinue }: LevelChapterProps) {
  const level = getLevel(levelId);
  if (!level) return null;

  const zones = getZonesByLevel(levelId);
  const themeColors: Record<string, string> = {
    amber: "from-amber-950/20 to-black",
    cyan: "from-cyan-950/20 to-black",
    violet: "from-violet-950/20 to-black",
  };

  return (
    <section
      className={`min-h-screen py-20 border-b border-white/10 bg-gradient-to-b ${themeColors[level.themeColor] || "from-black to-black"}`}
    >
      <div className="mx-auto max-w-6xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-12 text-center">
            <div className="mb-4 text-sm font-medium text-white/60 uppercase tracking-wider">
              {levelId.toUpperCase()}
            </div>
            <h2 className="mb-4 text-4xl font-semibold md:text-5xl">
              {level.title}
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-white/70">
              {level.summary}
            </p>
          </div>

          {/* Learning Goals */}
          <div className="mb-12 rounded-2xl border border-white/15 bg-white/5 p-6">
            <h3 className="mb-4 text-lg font-semibold">Learning Goals</h3>
            <ul className="space-y-2">
              {level.learningGoals.map((goal, i) => (
                <li key={i} className="flex items-start gap-3 text-white/80">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-white/60" />
                  <span>{goal}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Interactive Modules */}
          {levelId === "l1" && (
            <div className="mb-12 space-y-8">
              <TimelineSlider />
              <CompareArtifacts
                objectIds={[
                  "ancient-sandals",
                  "vintage-sneakers",
                  "early-running-shoe",
                ]}
              />
            </div>
          )}
          {levelId === "l2" && (
            <div className="mb-12 space-y-8">
              <MotionCaptureSandbox />
              <ForcePlateJump />
            </div>
          )}
          {levelId === "l3" && (
            <div className="mb-12">
              <AICoachScenario />
            </div>
          )}

          {/* Zones and Exhibits */}
          <div className="space-y-12">
            {zones.map((zone, zoneIndex) => {
              const exhibits = getExhibitsByZone(zone.id);
              return (
                <motion.div
                  key={zone.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: zoneIndex * 0.1 }}
                  className="rounded-2xl border border-white/15 bg-white/5 p-8"
                >
                  <div className="mb-6">
                    <h3 className="mb-2 text-2xl font-semibold">{zone.title}</h3>
                    <p className="text-white/70">{zone.summary}</p>
                  </div>

                  {/* Exhibits in this zone */}
                  <div className="space-y-6">
                    {exhibits.map((exhibit) => {
                      const objects = getObjectsByExhibit(exhibit.id);
                      return (
                        <div
                          key={exhibit.id}
                          className="rounded-xl border border-white/10 bg-white/5 p-6"
                        >
                          <div className="mb-4">
                            <h4 className="mb-2 text-lg font-semibold">
                              {exhibit.title}
                            </h4>
                            <p className="mb-3 text-sm text-white/80">
                              {exhibit.thesis}
                            </p>
                            <p className="text-sm leading-relaxed text-white/70">
                              {exhibit.wallText}
                            </p>
                          </div>

                          {/* Objects in this exhibit */}
                          {objects.length > 0 && (
                            <div className="mt-4">
                              <div className="mb-3 text-xs font-medium text-white/60 uppercase tracking-wider">
                                Objects ({objects.length})
                              </div>
                              <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
                                {objects.slice(0, 6).map((obj) => (
                                  <Link
                                    key={obj.id}
                                    href={`/objects/${obj.slug}`}
                                    className="group rounded-lg border border-white/10 bg-white/5 p-4 transition hover:border-white/20 hover:bg-white/10"
                                  >
                                    <div className="mb-1 text-sm font-medium text-white/90 group-hover:text-white">
                                      {obj.title}
                                    </div>
                                    <div className="text-xs text-white/60">
                                      {obj.dateLabel}
                                    </div>
                                  </Link>
                                ))}
                              </div>
                              {objects.length > 6 && (
                                <Link
                                  href={`/exhibits/${exhibit.id}`}
                                  className="mt-3 inline-block text-sm text-white/70 hover:text-white/90"
                                >
                                  View all {objects.length} objects →
                                </Link>
                              )}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Ethics Panel for Level 2 and 3 */}
          {(levelId === "l2" || levelId === "l3") && (
            <div className="mt-12">
              {levelId === "l2" && (
                <EthicsPanel
                  title="Privacy & Data Ethics in Performance Technology"
                  context="As performance technology becomes more sophisticated, it raises critical questions about privacy, data ownership, and surveillance. Motion capture systems, wearable sensors, and AI coaching collect vast amounts of personal data about our bodies, movements, and capabilities."
                  issues={[
                    "Who owns performance data? Athletes, teams, or technology companies?",
                    "How is biometric data protected from misuse or unauthorized access?",
                    "What happens when performance data is used for purposes beyond training?",
                    "How do we prevent surveillance creep in performance technology?",
                  ]}
                  questions={[
                    "Should athletes have the right to delete their performance data?",
                    "How can we ensure informed consent in data collection?",
                    "What regulations should govern performance data privacy?",
                    "How do we balance performance optimization with personal privacy?",
                  ]}
                />
              )}
              {levelId === "l3" && (
                <EthicsPanel
                  title="The Ethics of Human Enhancement"
                  context="Emerging technologies promise to enhance human performance beyond natural limits. AI coaching, neural interfaces, and bio-integrated systems raise fundamental questions about what it means to be human and where we draw ethical boundaries."
                  issues={[
                    "What constitutes 'fair' enhancement versus 'cheating'?",
                    "How do we prevent performance technology from widening inequality?",
                    "What are the long-term health implications of enhancement technologies?",
                    "How do we address bias in AI systems that guide performance development?",
                  ]}
                  questions={[
                    "Should there be limits on performance enhancement technologies?",
                    "How do we ensure equitable access to performance technology?",
                    "What role should regulation play in human enhancement?",
                    "How do we preserve the meaning of human achievement in an age of enhancement?",
                  ]}
                />
              )}
            </div>
          )}

          <ChapterTakeaways
            takeaways={level.learningGoals}
            nextUp={
              levelId === "l1"
                ? {
                    title: "Transition to Level 2",
                    description:
                      "Experience an animated journey as we move from origins to data-driven analysis",
                  }
                : levelId === "l2"
                ? {
                    title: "Level 3: Futures & Immersion",
                    description:
                      "Explore how immersive technologies and AI are transforming performance",
                  }
                : {
                    title: "Didactics & Participation",
                    description:
                      "Discover how we learn, interact, and engage with performance concepts",
                  }
            }
          />

          <ContinueButton onContinue={onContinue} />
        </motion.div>
      </div>
    </section>
  );
}

