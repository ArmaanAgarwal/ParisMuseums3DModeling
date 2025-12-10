"use client";

import { LevelChapter } from "./LevelChapter";

interface TourChapter7Props {
  onContinue: () => void;
}

export function TourChapter7({ onContinue }: TourChapter7Props) {
  return <LevelChapter levelId="l2" onContinue={onContinue} />;
}







