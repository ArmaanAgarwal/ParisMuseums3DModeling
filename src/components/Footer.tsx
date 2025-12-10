"use client";

import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/50 py-12">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <h3 className="mb-4 font-semibold text-white">Museum</h3>
            <ul className="space-y-2 text-sm text-white/60">
              <li>
                <Link href="/" className="hover:text-white transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/lab" className="hover:text-white transition">
                  Lab
                </Link>
              </li>
              <li>
                <Link href="/playbook" className="hover:text-white transition">
                  Playbook
                </Link>
              </li>
              <li>
                <Link href="/exhibits" className="hover:text-white transition text-white/40">
                  Exhibits (Archive)
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 font-semibold text-white">Explore</h3>
            <ul className="space-y-2 text-sm text-white/60">
              <li>
                <Link href="/tour" className="hover:text-white transition">
                  Guided Tour
                </Link>
              </li>
              <li>
                <Link href="/objects" className="hover:text-white transition">
                  All Objects
                </Link>
              </li>
              <li>
                <Link href="/saved" className="hover:text-white transition">
                  Saved
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 font-semibold text-white">About</h3>
            <ul className="space-y-2 text-sm text-white/60">
              <li>
                <Link href="/rubric" className="hover:text-white transition">
                  Project Rubric
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 font-semibold text-white">Connect</h3>
            <p className="text-sm text-white/60">
              An interactive digital museum exploring the history and future of human performance.
            </p>
          </div>
        </div>
        <div className="mt-8 border-t border-white/10 pt-8 text-center text-sm text-white/60">
          © 2024 Performance Museum. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

