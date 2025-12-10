"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import type { MuseumObject } from "@/data/types";

interface ObjectImageProps {
  object: MuseumObject;
  className?: string;
  aspectRatio?: "video" | "square" | "portrait";
  priority?: boolean;
  fill?: boolean;
  width?: number;
  height?: number;
}

export function ObjectImage({
  object,
  className = "",
  aspectRatio = "video",
  priority = false,
  fill = false,
  width,
  height,
}: ObjectImageProps) {
  const [imageError, setImageError] = useState(false);
  const [showCredit, setShowCredit] = useState(false);

  const imagePath = object.media?.imagePath;
  const imageKind = object.media?.imageKind || "artifact";
  const imageStatus = object.media?.imageStatus;
  const isRepresentative = imageKind === "representative";
  const isConcept = imageKind === "concept";
  const needsReview = imageStatus === "needsReview";
  const attribution = object.media?.attribution;
  const imageCredit = attribution?.creator || object.media?.imageCredit || object.media?.imageAuthor;
  const imageLicense = attribution?.license || object.media?.imageLicense;
  const imageSource = attribution?.institution || object.media?.imageSource;
  const imageSourceUrl = attribution?.sourceUrl || object.media?.imageSourceUrl;

  // Generate placeholder path
  const placeholderPath = `/objects/placeholders/${object.slug}.svg`;

  // Try to find actual image first - check images folder
  const actualImagePath = `/objects/images/${object.slug}.jpg`;
  
  // Determine which image to use
  let imageSrc = placeholderPath;
  if (!imageError) {
    if (imagePath) {
      // Fix protocol-relative URLs (//) and ensure absolute path
      if (imagePath.startsWith("//")) {
        imageSrc = imagePath.replace("//", "/");
      } else if (imagePath.startsWith("/")) {
        imageSrc = imagePath;
      } else {
        imageSrc = `/${imagePath}`;
      }
    } else {
      // No imagePath specified, try actual image file
      imageSrc = actualImagePath;
    }
  }

  // Check if we should show placeholder
  const shouldShowPlaceholder = imageError;

  // Aspect ratio classes
  const aspectClasses = {
    video: "aspect-video",
    square: "aspect-square",
    portrait: "aspect-[3/4]",
  };

  const containerClasses = fill
    ? `relative ${className}`
    : `relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-white/0 ${aspectClasses[aspectRatio]} ${className}`;

  return (
    <div className={containerClasses}>
      <AnimatePresence mode="wait">
        {shouldShowPlaceholder ? (
          <motion.div
            key="placeholder"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={fill ? "absolute inset-0" : "absolute inset-0 flex items-center justify-center"}
          >
            <div className="text-center p-8">
              <div className="mb-4 text-6xl opacity-30">📷</div>
              <div className="mb-2 text-sm font-medium text-white/70">{object.title}</div>
              {object.dateLabel && (
                <div className="mb-4 text-xs text-white/50">{object.dateLabel}</div>
              )}
              <div className="text-xs text-white/40">Digital surrogate</div>
            </div>
          </motion.div>
        ) : (
          <>
            {fill ? (
              <Image
                key="image"
                src={imageSrc}
                alt={object.media?.imageAlt || object.title}
                fill
                className={`object-cover ${className}`}
                priority={priority}
                onError={() => setImageError(true)}
              />
            ) : (
              <Image
                key="image"
                src={imageSrc}
                alt={object.media?.imageAlt || object.title}
                width={width || 800}
                height={height || 450}
                className={`object-cover w-full h-full ${className}`}
                priority={priority}
                onError={() => setImageError(true)}
              />
            )}
          </>
        )}
      </AnimatePresence>

      {/* Image type labels */}
      {!shouldShowPlaceholder && (isRepresentative || isConcept || needsReview) && (
        <div className="absolute top-2 left-2 flex flex-col gap-1">
          {isRepresentative && (
            <div className="rounded-lg border border-amber-500/30 bg-amber-500/20 px-2 py-1 text-xs font-medium text-amber-200">
              Representative image
            </div>
          )}
          {isConcept && (
            <div className="rounded-lg border border-violet-500/30 bg-violet-500/20 px-2 py-1 text-xs font-medium text-violet-200">
              Concept image
            </div>
          )}
          {needsReview && (
            <div className="rounded-lg border border-yellow-500/30 bg-yellow-500/20 px-2 py-1 text-xs font-medium text-yellow-200">
              Needs review
            </div>
          )}
        </div>
      )}

      {/* Credit toggle */}
      {!shouldShowPlaceholder && (imageCredit || imageLicense || imageSource) && (
        <div className="absolute bottom-2 right-2">
          <button
            onClick={() => setShowCredit(!showCredit)}
            className="rounded-lg border border-white/20 bg-black/50 px-2 py-1 text-xs text-white/70 hover:bg-black/70 transition"
          >
            {showCredit ? "Hide" : "Credit"}
          </button>
        </div>
      )}

      {/* Credit panel */}
      <AnimatePresence>
        {showCredit && !shouldShowPlaceholder && (imageCredit || imageLicense || imageSource || attribution) && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute bottom-12 right-2 max-w-xs rounded-lg border border-white/20 bg-black/90 p-3 text-xs text-white/80 backdrop-blur-sm z-10"
          >
            {attribution?.title && (
              <div className="mb-2 font-medium">{attribution.title}</div>
            )}
            {imageSource && (
              <div className="mb-2">
                <span className="text-white/60">Institution: </span>
                {imageSourceUrl ? (
                  <a
                    href={imageSourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400 hover:text-cyan-300 underline"
                  >
                    {imageSource}
                  </a>
                ) : (
                  <span>{imageSource}</span>
                )}
              </div>
            )}
            {imageCredit && (
              <div className="mb-2">
                <span className="text-white/60">Creator: </span>
                <span>{imageCredit}</span>
              </div>
            )}
            {imageLicense && (
              <div>
                <span className="text-white/60">License: </span>
                <span>{imageLicense}</span>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Subtle pattern overlay (only for non-fill mode) */}
      {!fill && (
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div
            className="h-full w-full"
            style={{
              backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.1) 10px, rgba(255,255,255,0.1) 20px)`,
            }}
          />
        </div>
      )}
    </div>
  );
}
