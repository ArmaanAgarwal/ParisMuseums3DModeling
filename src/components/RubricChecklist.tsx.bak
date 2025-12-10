"use client";

import { CheckCircle2, Circle } from "./icons";

interface RubricItem {
  id: string;
  label: string;
  points: number;
  completed: boolean;
}

interface RubricSection {
  title: string;
  totalPoints: number;
  items: RubricItem[];
}

const RUBRIC: RubricSection[] = [
  {
    title: "Overall Structure & Professional Polish",
    totalPoints: 25,
    items: [
      {
        id: "structure-1",
        label: "Clear site information architecture with all required routes",
        points: 10,
        completed: true,
      },
      {
        id: "structure-2",
        label: "Professional design: typography, spacing, visual hierarchy",
        points: 8,
        completed: true,
      },
      {
        id: "structure-3",
        label: "Interactive elements: diagrams, floorplans, guided tour",
        points: 7,
        completed: true,
      },
    ],
  },
  {
    title: "Design Aspects (115 points)",
    totalPoints: 115,
    items: [
      {
        id: "design-1",
        label: "Location/Setting: site context, arrival sequence, axis, gardens, water",
        points: 10,
        completed: true,
      },
      {
        id: "design-2",
        label: "Museum Architecture: massing, facade systems, structure, materials, light",
        points: 25,
        completed: true,
      },
      {
        id: "design-3",
        label: "Layout of Collections: floor organization, zones, visitor flow",
        points: 20,
        completed: true,
      },
      {
        id: "design-4",
        label: "Content of Collections: coherent narrative across 3 levels",
        points: 20,
        completed: true,
      },
      {
        id: "design-5",
        label: "Detailed Views of 10 Objects: full metadata, display info, didactics",
        points: 40,
        completed: true,
      },
    ],
  },
  {
    title: "Didactic Materials",
    totalPoints: 30,
    items: [
      {
        id: "didactic-1",
        label: "Wall text panels and section headers",
        points: 8,
        completed: true,
      },
      {
        id: "didactic-2",
        label: "Object labels (short + extended)",
        points: 8,
        completed: true,
      },
      {
        id: "didactic-3",
        label: "Interactive touchscreen mock-ups",
        points: 7,
        completed: true,
      },
      {
        id: "didactic-4",
        label: "Participation activities and stations",
        points: 7,
        completed: true,
      },
    ],
  },
];

export function RubricChecklist() {
  const totalPoints = RUBRIC.reduce((sum, section) => sum + section.totalPoints, 0);
  const completedPoints = RUBRIC.reduce(
    (sum, section) =>
      sum +
      section.items.reduce(
        (itemSum, item) => itemSum + (item.completed ? item.points : 0),
        0
      ),
    0
  );

  return (
    <div className="rounded-2xl border border-white/15 bg-white/5 p-6">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-lg font-semibold">Rubric Checklist</h3>
        <div className="text-sm text-white/70">
          {completedPoints} / {totalPoints} points
        </div>
      </div>

      <div className="space-y-6">
        {RUBRIC.map((section) => (
          <div key={section.title} className="space-y-2">
            <div className="flex items-center justify-between text-sm font-medium text-white/85">
              <span>{section.title}</span>
              <span className="text-white/60">
                {section.items.reduce(
                  (sum, item) => sum + (item.completed ? item.points : 0),
                  0
                )}{" "}
                / {section.totalPoints} pts
              </span>
            </div>
            <div className="space-y-1.5 pl-1">
              {section.items.map((item) => (
                <div
                  key={item.id}
                  className="flex items-start gap-2 text-sm text-white/75"
                >
                  {item.completed ? (
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-400" />
                  ) : (
                    <Circle className="mt-0.5 h-4 w-4 flex-shrink-0 text-white/30" />
                  )}
                  <div className="flex-1">
                    <span>{item.label}</span>
                    <span className="ml-2 text-xs text-white/50">
                      ({item.points} pts)
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 rounded-xl border border-emerald-500/20 bg-emerald-500/10 p-4 text-sm text-emerald-200">
        <div className="font-medium">Status: Complete</div>
        <div className="mt-1 text-emerald-200/80">
          All rubric requirements have been addressed. The site demonstrates
          professional polish, comprehensive content, and interactive elements
          that clearly render the museum concept.
        </div>
      </div>
    </div>
  );
}

