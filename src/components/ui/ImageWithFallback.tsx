"use client";

import { useState, useEffect } from "react";
import { MuseumObject } from "@/data/types";
import { getGallery } from "@/data/client";

interface ImageWithFallbackProps {
  object: MuseumObject;
  className?: string;
  width?: number;
  height?: number;
  fill?: boolean;
  priority?: boolean;
  aspectRatio?: "video" | "square" | "auto";
}

export function ImageWithFallback({
  object,
  className = "",
  width,
  height,
  fill = false,
  priority = false,
  aspectRatio = "video",
}: ImageWithFallbackProps) {
  const [imageError, setImageError] = useState(false);
  const [imageLoading, setImageLoading] = useState(true);
  const gallery = getGallery(object.galleryId);

  // Get image path - try multiple sources
  const getImagePath = (): string | null => {
    // 1. Try explicit imagePath
    if (object.imagePath && object.imagePath.trim() !== "") {
      const path = object.imagePath.startsWith("/") ? object.imagePath : `/${object.imagePath}`;
      return path;
    }
    
    // 2. Try media.imagePath
    if (object.media?.imagePath && object.media.imagePath.trim() !== "") {
      const path = object.media.imagePath.startsWith("/") ? object.media.imagePath : `/${object.media.imagePath}`;
      return path;
    }
    
    // 3. Try slug-based path
    const slugPath = `/objects/${object.slug}.jpg`;
    return slugPath;
  };

  const imagePath = getImagePath();

  // Placeholder component
  const Placeholder = () => {
    const aspectClass = aspectRatio === "video" ? "aspect-video" : aspectRatio === "square" ? "aspect-square" : "";
    return (
      <div
        className={`relative flex items-center justify-center bg-gradient-to-br from-cyan-500/20 via-purple-500/10 to-amber-500/20 ${aspectClass} ${className}`}
        style={fill ? { width: "100%", height: "100%" } : width && height ? { width, height } : undefined}
      >
        <div className="p-8 text-center">
          <div className="mb-4 text-6xl opacity-50">📷</div>
          <div className="mb-2 text-lg font-semibold text-white/90">{object.title}</div>
          {gallery && (
            <div className="text-sm text-white/60">{gallery.title}</div>
          )}
        </div>
      </div>
    );
  };

  // If no image path, show placeholder immediately
  if (!imagePath) {
    return <Placeholder />;
  }

  // Try to load image - use absolute URL for Next.js static files
  const imageSrc = imagePath.startsWith("/") ? imagePath : `/${imagePath}`;
  
  // If error occurred, show placeholder
  if (imageError) {
    return <Placeholder />;
  }
  
  return (
    <div className={`relative overflow-hidden ${className}`}>
      {imageLoading && (
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-purple-500/5 to-amber-500/10 animate-pulse z-10" />
      )}
      <img
        src={imageSrc}
        alt={object.title}
        width={width}
        height={height}
        onError={() => {
          console.warn(`Image failed to load: ${imageSrc} for object ${object.id}`);
          setImageError(true);
          setImageLoading(false);
        }}
        onLoad={() => {
          setImageLoading(false);
          setImageError(false);
        }}
        className={`h-full w-full object-cover transition-opacity duration-300 ${
          imageLoading ? "opacity-0" : "opacity-100"
        }`}
        loading={priority ? "eager" : "lazy"}
      />
    </div>
  );
}
