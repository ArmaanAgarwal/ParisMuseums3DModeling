"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";

interface PageNavigationProps {
  backHref?: string;
  backLabel?: string;
  forwardHref?: string;
  forwardLabel?: string;
  onBack?: () => void;
  onForward?: () => void;
  className?: string;
}

export function PageNavigation({
  backHref,
  backLabel = "← Back",
  forwardHref,
  forwardLabel = "Continue →",
  onBack,
  onForward,
  className = "",
}: PageNavigationProps) {
  const router = useRouter();

  const handleBack = () => {
    if (onBack) {
      onBack();
    } else if (backHref) {
      router.push(backHref);
    } else {
      router.back();
    }
  };

  const handleForward = () => {
    if (onForward) {
      onForward();
    } else if (forwardHref) {
      router.push(forwardHref);
    }
  };

  return (
    <div className={`flex justify-between items-center ${className}`}>
      <div>
        {backHref ? (
          <Link
            href={backHref}
            className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-6 py-3 font-medium transition hover:bg-white/10"
          >
            {backLabel}
          </Link>
        ) : (
          <button
            onClick={handleBack}
            className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-6 py-3 font-medium transition hover:bg-white/10"
          >
            {backLabel}
          </button>
        )}
      </div>
      {forwardHref && (
        <div>
          {onForward ? (
            <button
              onClick={handleForward}
              className="inline-flex items-center gap-2 rounded-xl border border-cyan-500/30 bg-cyan-500/20 px-6 py-3 font-medium transition hover:bg-cyan-500/30"
            >
              {forwardLabel}
            </button>
          ) : (
            <Link
              href={forwardHref}
              className="inline-flex items-center gap-2 rounded-xl border border-cyan-500/30 bg-cyan-500/20 px-6 py-3 font-medium transition hover:bg-cyan-500/30"
            >
              {forwardLabel}
            </Link>
          )}
        </div>
      )}
    </div>
  );
}







