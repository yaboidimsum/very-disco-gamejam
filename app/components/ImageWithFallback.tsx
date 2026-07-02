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
  gradientFrom?: string;
  gradientTo?: string;
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
  gradientFrom = "from-indigo-500",
  gradientTo = "to-pink-500",
}: Props) {
  const [error, setError] = useState(false);

  // If error, or using mock path that we know doesn't exist yet, show Y2K placeholder
  const showPlaceholder = error || src.startsWith("/images/vol") || !src;

  if (showPlaceholder) {
    return (
      <div
        className={`relative overflow-hidden bg-zinc-950 flex flex-col items-center justify-center select-none border border-zinc-800 ${className}`}
        style={{ minHeight: fill ? "100%" : "200px" }}
      >
        {/* Grid Background */}
        <div className="absolute inset-0 opacity-15 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:14px_24px]"></div>
        
        {/* Glow Blob */}
        <div
          className={`absolute -inset-10 bg-gradient-to-tr ${gradientFrom} ${gradientTo} opacity-30 blur-2xl rounded-full`}
        ></div>

        {/* Outer Y2K Corner Accents */}
        <div className="absolute top-2 left-2 w-1.5 h-1.5 border-t border-l border-zinc-600"></div>
        <div className="absolute top-2 right-2 w-1.5 h-1.5 border-t border-r border-zinc-600"></div>
        <div className="absolute bottom-2 left-2 w-1.5 h-1.5 border-b border-l border-zinc-600"></div>
        <div className="absolute bottom-2 right-2 w-1.5 h-1.5 border-b border-r border-zinc-600"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center gap-1.5 px-4 text-center">
          <span className="font-mono text-[10px] tracking-[0.2em] text-zinc-500 uppercase">
            [ DISPLAY_PORT ]
          </span>
          <h3 className="font-sans font-black text-xl tracking-tight text-white bg-clip-text text-transparent bg-gradient-to-r from-white via-zinc-200 to-zinc-400">
            {text}
          </h3>
          <span className="inline-block px-2 py-0.5 font-mono text-[9px] tracking-wide text-zinc-400 border border-zinc-800 rounded bg-zinc-900/80">
            SYSTEM_OK
          </span>
        </div>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      fill={fill}
      priority={priority}
      className={className}
      onError={() => setError(true)}
    />
  );
}
