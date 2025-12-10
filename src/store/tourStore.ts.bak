"use client";

import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface TourState {
  isTourActive: boolean;
  currentStepIndex: number;
  completedStepIds: string[];
  setTourActive: (active: boolean) => void;
  setCurrentStep: (index: number) => void;
  goToNext: () => void;
  goToPrevious: () => void;
  completeStep: (stepId: string) => void;
  resetTour: () => void;
}

// Custom sessionStorage adapter for Zustand persist
const storage = typeof window !== "undefined" 
  ? createJSONStorage(() => window.sessionStorage)
  : undefined;

export const useTourStore = create<TourState>()(
  persist(
    (set) => ({
      isTourActive: false,
      currentStepIndex: 0,
      completedStepIds: [],
      setTourActive: (active) => set({ isTourActive: active }),
      setCurrentStep: (index) => set({ currentStepIndex: index }),
      goToNext: () =>
        set((state) => ({
          currentStepIndex: Math.min(state.currentStepIndex + 1, 9),
        })),
      goToPrevious: () =>
        set((state) => ({
          currentStepIndex: Math.max(state.currentStepIndex - 1, 0),
        })),
      completeStep: (stepId) =>
        set((state) => ({
          completedStepIds: state.completedStepIds.includes(stepId)
            ? state.completedStepIds
            : [...state.completedStepIds, stepId],
        })),
      resetTour: () =>
        set({
          isTourActive: false,
          currentStepIndex: 0,
          completedStepIds: [],
        }),
    }),
    {
      name: "tour-storage",
      storage: storage,
    }
  )
);

