"use client";

import { useState } from "react";
import Image from "next/image";

type Props = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  fill?: boolean;
  priority?: boolean;
  className?: string;
  text?: string;
};

export default function ImageWithFallback({
  src,
  alt,
  width,
  height,
  fill,
  priority,
  className = "",
  text = "GAME JAM",
}: Props) {
  const isLocal = src ? src.startsWith("/") : false;
  const [failedSrc, setFailedSrc] = useState<string | null>(null);
  const [loadedSrc, setLoadedSrc] = useState<string | null>(isLocal ? src : null);
  const loading = !isLocal && loadedSrc !== src;

  // If error, or using mock path that we know doesn't exist yet, show Y2K placeholder
  const showPlaceholder = failedSrc === src || src.startsWith("/images/vol") || !src;

  if (showPlaceholder) {
    return (
      <div
        className={`relative overflow-hidden bg-zinc-950 flex flex-col items-center justify-center select-none border border-zinc-800 ${className}`}
        style={{ minHeight: fill ? "100%" : "200px" }}
      >
        {/* Outer Y2K Corner Accents */}
        <div className="absolute top-2 left-2 w-1.5 h-1.5 border-t border-l border-zinc-600"></div>
        <div className="absolute top-2 right-2 w-1.5 h-1.5 border-t border-r border-zinc-600"></div>
        <div className="absolute bottom-2 left-2 w-1.5 h-1.5 border-b border-l border-zinc-600"></div>
        <div className="absolute bottom-2 right-2 w-1.5 h-1.5 border-b border-r border-zinc-600"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center gap-1.5 px-4 text-center">
          <h3 className="font-display text-4xl text-white">
            {text}
          </h3>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-full">
      {loading && (
        <div className="absolute inset-0 bg-zinc-100 dark:bg-zinc-900 animate-pulse flex items-center justify-center border border-zinc-200 dark:border-zinc-800 rounded-lg">
          <span className="font-sans text-[8px] tracking-widest text-zinc-400 dark:text-zinc-600 uppercase animate-pulse">
            Loading image
          </span>
        </div>
      )}
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        fill={fill}
        priority={priority}
        className={`${className} transition-opacity duration-300 ${loading ? "opacity-0" : "opacity-100"}`}
        onError={() => setFailedSrc(src)}
        onLoad={() => setLoadedSrc(src)}
      />
    </div>
  );
}
