"use client";

import { LevelChapter } from "./LevelChapter";

interface TourChapter5Props {
  onContinue: () => void;
}

export function TourChapter5({ onContinue }: TourChapter5Props) {
  return <LevelChapter levelId="l1" onContinue={onContinue} />;
}







