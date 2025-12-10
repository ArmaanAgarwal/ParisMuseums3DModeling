"use client";

import { useEffect } from "react";

// This provider ensures localStorage is initialized on all routes
// Data arrays (GALLERIES, EXHIBITS, OBJECTS) are imported directly in components
// This prevents the nav bug where pages don't render until Saved is visited
export function DataProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Only initialize localStorage - data arrays are imported directly
    if (typeof window !== "undefined") {
      try {
        if (!localStorage.getItem("savedObjects")) {
          localStorage.setItem("savedObjects", "[]");
        }
        if (!localStorage.getItem("compareObjects")) {
          localStorage.setItem("compareObjects", "[]");
        }
        if (!localStorage.getItem("tourAnswers")) {
          localStorage.setItem("tourAnswers", "{}");
        }
      } catch (e) {
        // localStorage might not be available, don't crash
        console.warn("localStorage not available:", e);
      }
    }
  }, []);

  return <>{children}</>;
}

