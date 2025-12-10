"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

interface TimelineEvent {
  year: number;
  label: string;
  description: string;
  objectIds?: string[];
  image?: string;
}

interface TimelineScrubberProps {
  title: string;
  events: TimelineEvent[];
  objects?: Array<{ id: string; slug: string; title: string; dateLabel: string; yearNumber?: number }>;
  className?: string;
}

export function TimelineScrubber({ title, events, objects = [], className = "" }: TimelineScrubberProps) {
  const sortedEvents = [...events].sort((a, b) => a.year - b.year);
  const minYear = sortedEvents[0]?.year || 0;
  const maxYear = sortedEvents[sortedEvents.length - 1]?.year || 2024;
  const [selectedYear, setSelectedYear] = useState(minYear);

  // Find closest event to selected year
  const currentEvent = useMemo(() => {
    return sortedEvents.reduce((closest, event) => {
      const currentDist = Math.abs(event.year - selectedYear);
      const closestDist = Math.abs(closest.year - selectedYear);
      return currentDist < closestDist ? event : closest;
    }, sortedEvents[0]);
  }, [selectedYear, sortedEvents]);

  // Find objects in this time period (within 20 years)
  const periodObjects = useMemo(() => {
    if (currentEvent.objectIds && currentEvent.objectIds.length > 0) {
      return objects.filter(obj => currentEvent.objectIds?.includes(obj.id));
    }
    return objects.filter(obj => {
      if (!obj.yearNumber) return false;
      return Math.abs(obj.yearNumber - selectedYear) <= 20;
    });
  }, [currentEvent, objects, selectedYear]);

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10);
    setSelectedYear(value);
  };

  const handleEventClick = (year: number) => {
    setSelectedYear(year);
  };

  return (
    <div className={`rounded-2xl border border-white/15 bg-white/5 p-8 ${className}`}>
      <h3 className="mb-6 text-2xl font-semibold">{title}</h3>
      
      {/* Year Display */}
      <div className="mb-6 text-center">
        <motion.div
          key={selectedYear}
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          className="text-5xl font-bold text-cyan-400"
        >
          {selectedYear < 0 ? `${Math.abs(selectedYear)} BCE` : selectedYear}
        </motion.div>
      </div>

      {/* Timeline with clickable events */}
      <div className="mb-8">
        <div className="relative mb-4">
          {/* Timeline line */}
          <div className="absolute left-0 right-0 top-1/2 h-1 -translate-y-1/2 bg-white/10 rounded-full" />
          
          {/* Event markers */}
          <div className="relative flex justify-between">
            {sortedEvents.map((event, index) => {
              const position = ((event.year - minYear) / (maxYear - minYear)) * 100;
              const isActive = event.year === currentEvent.year;
              
              return (
                <button
                  key={index}
                  onClick={() => handleEventClick(event.year)}
                  className="absolute -translate-x-1/2 -translate-y-1/2"
                  style={{ left: `${position}%` }}
                >
                  <motion.div
                    animate={{ scale: isActive ? 1.2 : 1 }}
                    className={`h-4 w-4 rounded-full border-2 transition ${
                      isActive
                        ? "border-cyan-400 bg-cyan-500"
                        : "border-white/30 bg-white/10 hover:border-white/50"
                    }`}
                  />
                  <div className={`mt-2 text-xs whitespace-nowrap ${
                    isActive ? "text-cyan-400 font-semibold" : "text-white/50"
                  }`}>
                    {event.year < 0 ? `${Math.abs(event.year)} BCE` : event.year}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Slider */}
        <input
          type="range"
          min={minYear}
          max={maxYear}
          value={selectedYear}
          onChange={handleSliderChange}
          step={1}
          className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-cyan-500"
          style={{
            background: `linear-gradient(to right, #06b6d4 0%, #06b6d4 ${((selectedYear - minYear) / (maxYear - minYear)) * 100}%, rgba(255,255,255,0.1) ${((selectedYear - minYear) / (maxYear - minYear)) * 100}%, rgba(255,255,255,0.1) 100%)`
          }}
        />
        <div className="mt-2 flex justify-between text-xs text-white/50">
          <span>{minYear < 0 ? `${Math.abs(minYear)} BCE` : minYear}</span>
          <span>{maxYear}</span>
        </div>
      </div>

      {/* Current Event */}
      <motion.div
        key={currentEvent.year}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-6 rounded-xl border border-cyan-500/30 bg-cyan-500/10 p-6"
      >
        <div className="mb-2 text-lg font-semibold text-cyan-300">{currentEvent.label}</div>
        <p className="leading-relaxed text-white/90">{currentEvent.description}</p>
      </motion.div>

      {/* Objects in this period */}
      {periodObjects.length > 0 && (
        <div className="rounded-xl border border-white/10 bg-white/5 p-4">
          <div className="mb-3 text-sm font-semibold text-white/90">
            Related Objects ({periodObjects.length})
          </div>
          <div className="space-y-2">
            {periodObjects.slice(0, 5).map((obj) => (
              <Link
                key={obj.id}
                href={`/objects/${obj.slug}`}
                className="block rounded-lg border border-white/10 bg-white/5 p-3 text-sm text-white/70 transition hover:border-white/20 hover:bg-white/10 hover:text-white"
              >
                <div className="font-medium">{obj.title}</div>
                <div className="text-xs text-white/50">{obj.dateLabel}</div>
              </Link>
            ))}
            {periodObjects.length > 5 && (
              <div className="text-xs text-white/50 text-center pt-2">
                and {periodObjects.length - 5} more...
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
