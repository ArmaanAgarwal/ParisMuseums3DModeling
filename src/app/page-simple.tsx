"use client";

import Link from "next/link";
import { EXHIBITS, OBJECTS } from "@/data/client";
import { MUSEUM_NAME, MUSEUM_SUBTITLE } from "@/lib/museumConfig";

export default function HomePageSimple() {
  try {
    return (
      <div className="min-h-screen bg-black text-white p-8">
        <h1 className="text-4xl font-bold mb-4">{MUSEUM_NAME}</h1>
        <p className="text-xl mb-8">{MUSEUM_SUBTITLE}</p>
        <div className="space-y-4">
          <div>Galleries: 3</div>
          <div>Exhibits: {EXHIBITS?.length || 0}</div>
          <div>Objects: {OBJECTS?.length || 0}</div>
          <Link href="/test" className="block text-cyan-400">Test Page</Link>
        </div>
      </div>
    );
  } catch (error: any) {
    return (
      <div className="min-h-screen bg-black text-white p-8">
        <h1 className="text-4xl font-bold mb-4 text-red-400">Error</h1>
        <pre className="bg-red-950/50 p-4 rounded">{error?.message || String(error)}</pre>
        <pre className="bg-red-950/50 p-4 rounded mt-4 text-xs">{error?.stack}</pre>
      </div>
    );
  }
}
