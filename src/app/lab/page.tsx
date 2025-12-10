"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { getAllObjects } from "@/data/client";
import { useTranslation } from "@/hooks/useTranslation";

export default function LabPage() {
  const [activeInteractive, setActiveInteractive] = useState<string | null>(null);
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <section className="border-b border-white/10 bg-gradient-to-b from-black to-zinc-950 py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="mx-auto max-w-4xl">
            <h1 className="mb-4 text-4xl font-semibold md:text-5xl">{t("lab.heading")}</h1>
            <p className="text-lg text-white/70">
              {t("lab.subtitle")}
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Cards */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="grid gap-6 md:grid-cols-2">
            <InteractiveCard
              id="pacing-splits"
              title="Pacing & Splits Simulator"
              description="Explore how pace affects split times across different distances"
              onSelect={() => setActiveInteractive("pacing-splits")}
            />
            <InteractiveCard
              id="heart-rate-zones"
              title="Heart Rate Zones Explorer"
              description="Understand training zones and what heart rate data means"
              onSelect={() => setActiveInteractive("heart-rate-zones")}
            />
            <InteractiveCard
              id="power-cadence"
              title="Power vs Cadence Explorer"
              description="See how cadence and force combine to create power"
              onSelect={() => setActiveInteractive("power-cadence")}
            />
            <InteractiveCard
              id="recovery-tradeoff"
              title="Recovery Tradeoff Tool"
              description="Explore how sleep, nutrition, and training load affect recovery"
              onSelect={() => setActiveInteractive("recovery-tradeoff")}
            />
          </div>
        </div>
      </section>

      {/* Active Interactive */}
      {activeInteractive === "pacing-splits" && (
        <PacingSplitsSimulator onClose={() => setActiveInteractive(null)} />
      )}
      {activeInteractive === "heart-rate-zones" && (
        <HeartRateZonesExplorer onClose={() => setActiveInteractive(null)} />
      )}
      {activeInteractive === "power-cadence" && (
        <PowerCadenceExplorer onClose={() => setActiveInteractive(null)} />
      )}
      {activeInteractive === "recovery-tradeoff" && (
        <RecoveryTradeoffTool onClose={() => setActiveInteractive(null)} />
      )}
    </div>
  );
}

function InteractiveCard({
  id,
  title,
  description,
  onSelect,
}: {
  id: string;
  title: string;
  description: string;
  onSelect: () => void;
}) {
  return (
    <motion.button
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      onClick={onSelect}
      className="group rounded-xl border border-white/15 bg-white/5 p-6 text-left transition-all hover:border-white/30 hover:bg-white/10"
    >
      <h3 className="mb-2 text-xl font-semibold text-white group-hover:text-cyan-400 transition-colors">
        {title}
      </h3>
      <p className="text-sm text-white/70">{description}</p>
    </motion.button>
  );
}

function PacingSplitsSimulator({ onClose }: { onClose: () => void }) {
  const [distance, setDistance] = useState<"400m" | "800m" | "1500m" | "5K">("1500m");
  const [paceMinutes, setPaceMinutes] = useState(4);
  const [paceSeconds, setPaceSeconds] = useState(0);
  const allObjects = getAllObjects();
  const relatedObjects = allObjects.filter(
    (obj) =>
      obj.id === "heuer-stopwatch-1960s" ||
      obj.id === "starting-blocks-modern" ||
      obj.tags.includes("Measurement")
  );

  const distanceMeters: Record<string, number> = {
    "400m": 400,
    "800m": 800,
    "1500m": 1500,
    "5K": 5000,
  };

  const totalSeconds = paceMinutes * 60 + paceSeconds;
  const pacePerKm = (totalSeconds / distanceMeters[distance]) * 1000;
  const totalTime = (pacePerKm * distanceMeters[distance]) / 1000;

  const splits: Array<{ distance: string; time: string }> = [];
  const splitDistance = distance === "5K" ? 1000 : distance === "1500m" ? 300 : distance === "800m" ? 200 : 100;
  for (let d = splitDistance; d <= distanceMeters[distance]; d += splitDistance) {
    const splitTime = (pacePerKm * d) / 1000;
    const mins = Math.floor(splitTime / 60);
    const secs = Math.floor(splitTime % 60);
    splits.push({
      distance: `${d}m`,
      time: `${mins}:${secs.toString().padStart(2, "0")}`,
    });
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm overflow-y-auto"
    >
      <div className="min-h-screen py-20">
        <div className="mx-auto max-w-4xl px-4 md:px-6">
          <div className="mb-8 flex items-center justify-between">
            <h2 className="text-3xl font-bold">Pacing & Splits Simulator</h2>
            <button
              onClick={onClose}
              className="rounded-lg border border-white/15 bg-white/5 p-2 text-white/70 hover:bg-white/10"
            >
              ✕
            </button>
          </div>

          <div className="space-y-8">
            {/* Controls */}
            <div className="rounded-xl border border-white/15 bg-white/5 p-6">
              <div className="mb-4">
                <label className="mb-2 block text-sm text-white/60">Distance</label>
                <select
                  value={distance}
                  onChange={(e) => setDistance(e.target.value as any)}
                  className="w-full rounded-lg border border-white/15 bg-white/5 px-4 py-2 text-white focus:border-cyan-500/50 focus:outline-none"
                >
                  <option value="400m">400m</option>
                  <option value="800m">800m</option>
                  <option value="1500m">1500m</option>
                  <option value="5K">5K</option>
                </select>
              </div>
              <div className="mb-4">
                <label className="mb-2 block text-sm text-white/60">
                  Target Pace: {paceMinutes}:{paceSeconds.toString().padStart(2, "0")} per {distance === "5K" ? "km" : distance}
                </label>
                <div className="flex gap-4">
                  <div className="flex-1">
                    <input
                      type="range"
                      min="2"
                      max="8"
                      value={paceMinutes}
                      onChange={(e) => setPaceMinutes(Number(e.target.value))}
                      className="w-full"
                    />
                    <div className="mt-1 text-xs text-white/60">Minutes</div>
                  </div>
                  <div className="flex-1">
                    <input
                      type="range"
                      min="0"
                      max="59"
                      value={paceSeconds}
                      onChange={(e) => setPaceSeconds(Number(e.target.value))}
                      className="w-full"
                    />
                    <div className="mt-1 text-xs text-white/60">Seconds</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Splits Table */}
            <div className="rounded-xl border border-white/15 bg-white/5 p-6">
              <h3 className="mb-4 text-xl font-semibold">Split Times</h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="px-4 py-2 text-left text-sm text-white/60">Distance</th>
                      <th className="px-4 py-2 text-left text-sm text-white/60">Time</th>
                    </tr>
                  </thead>
                  <tbody>
                    {splits.map((split, i) => (
                      <tr key={i} className="border-b border-white/5">
                        <td className="px-4 py-2 text-white/90">{split.distance}</td>
                        <td className="px-4 py-2 font-mono text-white">{split.time}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* What You Changed */}
            <div className="rounded-xl border border-cyan-500/30 bg-cyan-500/10 p-6">
              <h3 className="mb-3 text-lg font-semibold">What You Changed</h3>
              <p className="text-white/90">
                You set a target pace of {paceMinutes}:{paceSeconds.toString().padStart(2, "0")} per {distance === "5K" ? "kilometer" : distance} for a {distance} race.
              </p>
            </div>

            {/* What It Means */}
            <div className="rounded-xl border border-white/15 bg-white/5 p-6">
              <h3 className="mb-3 text-lg font-semibold">What It Means</h3>
              <p className="leading-relaxed text-white/80">
                Split times break down your race into manageable segments, allowing you to pace yourself and track progress. At this pace, you'll complete the {distance} in approximately {Math.floor(totalTime / 60)}:{Math.floor(totalTime % 60).toString().padStart(2, "0")}. The splits show you exactly when you should reach each checkpoint if you maintain consistent pace. This kind of precise timing became possible with mechanical stopwatches, which made time visible and comparable. Coaches use split times to teach pacing strategy, helping athletes avoid going too fast too early or finishing with energy left. Understanding splits transforms racing from a feeling-based effort into a data-driven strategy.
              </p>
            </div>

            {/* Limitation / Caution */}
            <div className="rounded-xl border border-amber-500/30 bg-amber-500/10 p-6">
              <h3 className="mb-3 text-lg font-semibold">Limitation / Caution</h3>
              <p className="leading-relaxed text-white/80">
                Split times assume perfect pacing, but real races involve variables like wind, terrain, competition, and fatigue. Early splits might feel easy, but maintaining pace becomes harder as fatigue accumulates. Also, split times don't account for tactical racing—sometimes slowing down or speeding up strategically is necessary. The numbers provide guidance, but they can't replace race experience and body awareness. Over-reliance on splits can lead to rigid pacing that ignores race dynamics.
              </p>
            </div>

            {/* Related Objects */}
            <div className="rounded-xl border border-white/15 bg-white/5 p-6">
              <h3 className="mb-4 text-lg font-semibold">Related Objects</h3>
              <div className="grid gap-4 md:grid-cols-2">
                {relatedObjects.slice(0, 2).map((obj) => (
                  <Link
                    key={obj.id}
                    href={`/objects/${obj.slug}`}
                    className="rounded-lg border border-white/10 bg-white/5 p-4 transition hover:border-cyan-400/50 hover:bg-cyan-500/10"
                  >
                    <div className="font-medium text-white/90">{obj.title}</div>
                    <div className="mt-1 text-xs text-white/60">{obj.dateLabel}</div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function HeartRateZonesExplorer({ onClose }: { onClose: () => void }) {
  const [intensity, setIntensity] = useState(70);
  const [maxHR, setMaxHR] = useState(200);
  const allObjects = getAllObjects();
  const relatedObjects = allObjects.filter(
    (obj) => obj.id === "polar-hrm-1980s" || obj.tags.includes("Wearables") || obj.tags.includes("Physiology")
  );

  const targetHR = Math.round((intensity / 100) * maxHR);
  let zone = "Recovery";
  let zoneDescription = "Light activity, active recovery";
  if (intensity >= 90) {
    zone = "Maximum";
    zoneDescription = "All-out effort, very short duration";
  } else if (intensity >= 80) {
    zone = "Anaerobic";
    zoneDescription = "High intensity, lactate threshold";
  } else if (intensity >= 70) {
    zone = "Aerobic";
    zoneDescription = "Moderate intensity, sustainable effort";
  } else if (intensity >= 60) {
    zone = "Fat Burn";
    zoneDescription = "Light to moderate, fat metabolism";
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm overflow-y-auto"
    >
      <div className="min-h-screen py-20">
        <div className="mx-auto max-w-4xl px-4 md:px-6">
          <div className="mb-8 flex items-center justify-between">
            <h2 className="text-3xl font-bold">Heart Rate Zones Explorer</h2>
            <button
              onClick={onClose}
              className="rounded-lg border border-white/15 bg-white/5 p-2 text-white/70 hover:bg-white/10"
            >
              ✕
            </button>
          </div>

          <div className="space-y-8">
            {/* Controls */}
            <div className="rounded-xl border border-white/15 bg-white/5 p-6">
              <div className="mb-4">
                <label className="mb-2 block text-sm text-white/60">
                  Intensity: {intensity}% (Target HR: {targetHR} bpm)
                </label>
                <input
                  type="range"
                  min="50"
                  max="100"
                  value={intensity}
                  onChange={(e) => setIntensity(Number(e.target.value))}
                  className="w-full"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm text-white/60">Max Heart Rate: {maxHR} bpm</label>
                <input
                  type="range"
                  min="160"
                  max="220"
                  value={maxHR}
                  onChange={(e) => setMaxHR(Number(e.target.value))}
                  className="w-full"
                />
              </div>
            </div>

            {/* Zone Display */}
            <div className="rounded-xl border border-purple-500/30 bg-purple-500/10 p-6">
              <h3 className="mb-2 text-2xl font-semibold">{zone} Zone</h3>
              <p className="text-lg text-white/80">{zoneDescription}</p>
            </div>

            {/* What You Changed */}
            <div className="rounded-xl border border-cyan-500/30 bg-cyan-500/10 p-6">
              <h3 className="mb-3 text-lg font-semibold">What You Changed</h3>
              <p className="text-white/90">
                You set training intensity to {intensity}% of maximum heart rate ({targetHR} bpm).
              </p>
            </div>

            {/* What It Means */}
            <div className="rounded-xl border border-white/15 bg-white/5 p-6">
              <h3 className="mb-3 text-lg font-semibold">What It Means</h3>
              <p className="leading-relaxed text-white/80">
                Heart rate zones help athletes train at specific intensities for different physiological adaptations. The {zone.toLowerCase()} zone ({targetHR} bpm) targets {zoneDescription.toLowerCase()}. Coaches use heart rate zones to design training programs: recovery days in lower zones, endurance work in aerobic zones, and high-intensity intervals in anaerobic zones. Heart rate monitors made this possible by providing real-time feedback during training. Before monitors, athletes trained by feel—'hard' or 'easy' was subjective. Zones made intensity objective and comparable, enabling scientific training program design. Understanding zones helps athletes avoid overtraining, optimize recovery, and target specific fitness adaptations.
              </p>
            </div>

            {/* Limitation / Caution */}
            <div className="rounded-xl border border-amber-500/30 bg-amber-500/10 p-6">
              <h3 className="mb-3 text-lg font-semibold">Limitation / Caution</h3>
              <p className="leading-relaxed text-white/80">
                Heart rate is affected by many variables beyond effort: heat, hydration, stress, caffeine, and fatigue can all change heart rate without changing actual effort. Also, heart rate zones are estimates based on population averages—individual athletes may have different optimal zones. Over-reliance on heart rate can disconnect athletes from their body's natural signals. Some athletes become anxious if their heart rate doesn't match expectations, even when they feel fine. Heart rate is a useful tool, but it shouldn't replace body awareness and race experience.
              </p>
            </div>

            {/* Related Objects */}
            <div className="rounded-xl border border-white/15 bg-white/5 p-6">
              <h3 className="mb-4 text-lg font-semibold">Related Objects</h3>
              <div className="grid gap-4 md:grid-cols-2">
                {relatedObjects.slice(0, 2).map((obj) => (
                  <Link
                    key={obj.id}
                    href={`/objects/${obj.slug}`}
                    className="rounded-lg border border-white/10 bg-white/5 p-4 transition hover:border-cyan-400/50 hover:bg-cyan-500/10"
                  >
                    <div className="font-medium text-white/90">{obj.title}</div>
                    <div className="mt-1 text-xs text-white/60">{obj.dateLabel}</div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function PowerCadenceExplorer({ onClose }: { onClose: () => void }) {
  const [cadence, setCadence] = useState(90);
  const [force, setForce] = useState(50);
  const allObjects = getAllObjects();
  const relatedObjects = allObjects.filter(
    (obj) => obj.id === "srm-power-meter" || obj.tags.includes("Measurement") || obj.tags.includes("Data")
  );

  // Simplified power calculation: power ≈ force × cadence / constant
  const power = Math.round((force * cadence) / 2.5);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm overflow-y-auto"
    >
      <div className="min-h-screen py-20">
        <div className="mx-auto max-w-4xl px-4 md:px-6">
          <div className="mb-8 flex items-center justify-between">
            <h2 className="text-3xl font-bold">Power vs Cadence Explorer</h2>
            <button
              onClick={onClose}
              className="rounded-lg border border-white/15 bg-white/5 p-2 text-white/70 hover:bg-white/10"
            >
              ✕
            </button>
          </div>

          <div className="space-y-8">
            {/* Controls */}
            <div className="rounded-xl border border-white/15 bg-white/5 p-6">
              <div className="mb-4">
                <label className="mb-2 block text-sm text-white/60">Cadence: {cadence} rpm</label>
                <input
                  type="range"
                  min="60"
                  max="120"
                  value={cadence}
                  onChange={(e) => setCadence(Number(e.target.value))}
                  className="w-full"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm text-white/60">Force: {force}%</label>
                <input
                  type="range"
                  min="20"
                  max="100"
                  value={force}
                  onChange={(e) => setForce(Number(e.target.value))}
                  className="w-full"
                />
              </div>
            </div>

            {/* Power Display */}
            <div className="rounded-xl border border-purple-500/30 bg-purple-500/10 p-6">
              <h3 className="mb-2 text-2xl font-semibold">Estimated Power: {power}W</h3>
              <p className="text-lg text-white/80">
                {power < 150 ? "Recovery pace" : power < 250 ? "Endurance pace" : power < 350 ? "Tempo pace" : "High intensity"}
              </p>
            </div>

            {/* What You Changed */}
            <div className="rounded-xl border border-cyan-500/30 bg-cyan-500/10 p-6">
              <h3 className="mb-3 text-lg font-semibold">What You Changed</h3>
              <p className="text-white/90">
                You set cadence to {cadence} rpm and force to {force}%, producing approximately {power} watts.
              </p>
            </div>

            {/* What It Means */}
            <div className="rounded-xl border border-white/15 bg-white/5 p-6">
              <h3 className="mb-3 text-lg font-semibold">What It Means</h3>
              <p className="leading-relaxed text-white/80">
                Power is the product of force and cadence—how hard you push multiplied by how fast you pedal. Power meters measure this directly, providing the most reliable metric for cycling performance. Unlike heart rate, which varies with conditions, power is what you actually produce—making it ideal for pacing and training. At {power} watts, you're producing {power < 200 ? "moderate" : "high"} power output. Cyclists use power data to pace races, design training zones, and measure fitness improvements. Understanding the relationship between cadence and force helps cyclists optimize their pedaling efficiency. Some cyclists prefer high cadence with lower force, while others prefer lower cadence with higher force—both can produce the same power, but feel different.
              </p>
            </div>

            {/* Limitation / Caution */}
            <div className="rounded-xl border border-amber-500/30 bg-amber-500/10 p-6">
              <h3 className="mb-3 text-lg font-semibold">Limitation / Caution</h3>
              <p className="leading-relaxed text-white/80">
                This is a simplified model—real power meters measure actual force and velocity, not just cadence and perceived effort. Power output also depends on bike position, gearing, and pedaling technique. Also, sustainable power varies with duration: you can hold high power for seconds, moderate power for minutes, and lower power for hours. Over-reliance on power data can reduce connection to natural pacing instincts. Some cyclists become so focused on hitting power targets that they lose the feel for racing dynamics and tactical decisions.
              </p>
            </div>

            {/* Related Objects */}
            <div className="rounded-xl border border-white/15 bg-white/5 p-6">
              <h3 className="mb-4 text-lg font-semibold">Related Objects</h3>
              <div className="grid gap-4 md:grid-cols-2">
                {relatedObjects.slice(0, 2).map((obj) => (
                  <Link
                    key={obj.id}
                    href={`/objects/${obj.slug}`}
                    className="rounded-lg border border-white/10 bg-white/5 p-4 transition hover:border-cyan-400/50 hover:bg-cyan-500/10"
                  >
                    <div className="font-medium text-white/90">{obj.title}</div>
                    <div className="mt-1 text-xs text-white/60">{obj.dateLabel}</div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function RecoveryTradeoffTool({ onClose }: { onClose: () => void }) {
  const [sleep, setSleep] = useState(7);
  const [trainingLoad, setTrainingLoad] = useState(5);
  const [nutrition, setNutrition] = useState(5);
  const allObjects = getAllObjects();
  const relatedObjects = allObjects.filter(
    (obj) =>
      obj.galleryId === "recovery-ethics-future" ||
      obj.tags.includes("Recovery") ||
      obj.id === "normatec-boots" ||
      obj.id === "theragun-massage-gun"
  );

  const recoveryScore = sleep * 2 + (10 - trainingLoad) * 1.5 + nutrition * 1.5;
  let recommendation = "Focus on sleep";
  let caution = "Recovery technology can help, but it can't replace adequate sleep and nutrition.";

  if (sleep < 6) {
    recommendation = "Prioritize sleep—aim for 7-9 hours";
    caution = "No recovery device can compensate for chronic sleep deprivation. Sleep is the foundation of recovery.";
  } else if (trainingLoad > 7) {
    recommendation = "Reduce training load or increase recovery time";
    caution = "High training load requires more recovery. Recovery technology might help, but rest days are essential.";
  } else if (nutrition < 4) {
    recommendation = "Improve nutrition—focus on protein and carbohydrates";
    caution = "Recovery devices can't replace proper nutrition. Your body needs fuel to repair and adapt.";
  } else if (recoveryScore > 30) {
    recommendation = "Recovery looks good—recovery technology might provide marginal benefits";
    caution = "When sleep, nutrition, and training load are optimized, recovery technology offers smaller benefits. Evidence for many devices is limited.";
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm overflow-y-auto"
    >
      <div className="min-h-screen py-20">
        <div className="mx-auto max-w-4xl px-4 md:px-6">
          <div className="mb-8 flex items-center justify-between">
            <h2 className="text-3xl font-bold">Recovery Tradeoff Tool</h2>
            <button
              onClick={onClose}
              className="rounded-lg border border-white/15 bg-white/5 p-2 text-white/70 hover:bg-white/10"
            >
              ✕
            </button>
          </div>

          <div className="space-y-8">
            {/* Controls */}
            <div className="rounded-xl border border-white/15 bg-white/5 p-6">
              <div className="mb-4">
                <label className="mb-2 block text-sm text-white/60">Sleep: {sleep} hours/night</label>
                <input
                  type="range"
                  min="4"
                  max="10"
                  value={sleep}
                  onChange={(e) => setSleep(Number(e.target.value))}
                  className="w-full"
                />
              </div>
              <div className="mb-4">
                <label className="mb-2 block text-sm text-white/60">Training Load: {trainingLoad}/10</label>
                <input
                  type="range"
                  min="1"
                  max="10"
                  value={trainingLoad}
                  onChange={(e) => setTrainingLoad(Number(e.target.value))}
                  className="w-full"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm text-white/60">Nutrition Quality: {nutrition}/10</label>
                <input
                  type="range"
                  min="1"
                  max="10"
                  value={nutrition}
                  onChange={(e) => setNutrition(Number(e.target.value))}
                  className="w-full"
                />
              </div>
            </div>

            {/* Recommendation */}
            <div className="rounded-xl border border-purple-500/30 bg-purple-500/10 p-6">
              <h3 className="mb-2 text-xl font-semibold">Recovery Recommendation</h3>
              <p className="text-lg text-white/80">{recommendation}</p>
            </div>

            {/* What You Changed */}
            <div className="rounded-xl border border-cyan-500/30 bg-cyan-500/10 p-6">
              <h3 className="mb-3 text-lg font-semibold">What You Changed</h3>
              <p className="text-white/90">
                You set sleep to {sleep} hours, training load to {trainingLoad}/10, and nutrition to {nutrition}/10.
              </p>
            </div>

            {/* What It Means */}
            <div className="rounded-xl border border-white/15 bg-white/5 p-6">
              <h3 className="mb-3 text-lg font-semibold">What It Means</h3>
              <p className="leading-relaxed text-white/80">
                Recovery depends on multiple factors: sleep, nutrition, and training load all interact. {recommendation.toLowerCase()}. Recovery technology like compression boots, massage guns, and cryotherapy can provide additional benefits, but they work best when fundamentals are in place. The recovery economy has grown around these devices, promising faster recovery and better performance. However, evidence for many recovery technologies is limited—some benefits might be placebo effects or psychological. Understanding the tradeoffs helps you make informed decisions about when recovery technology is worth the cost and when basic recovery (sleep, nutrition, rest) is sufficient.
              </p>
            </div>

            {/* Limitation / Caution */}
            <div className="rounded-xl border border-amber-500/30 bg-amber-500/10 p-6">
              <h3 className="mb-3 text-lg font-semibold">Limitation / Caution</h3>
              <p className="leading-relaxed text-white/80">{caution}</p>
            </div>

            {/* Related Objects */}
            <div className="rounded-xl border border-white/15 bg-white/5 p-6">
              <h3 className="mb-4 text-lg font-semibold">Related Objects</h3>
              <div className="grid gap-4 md:grid-cols-2">
                {relatedObjects.slice(0, 2).map((obj) => (
                  <Link
                    key={obj.id}
                    href={`/objects/${obj.slug}`}
                    className="rounded-lg border border-white/10 bg-white/5 p-4 transition hover:border-cyan-400/50 hover:bg-cyan-500/10"
                  >
                    <div className="font-medium text-white/90">{obj.title}</div>
                    <div className="mt-1 text-xs text-white/60">{obj.dateLabel}</div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

