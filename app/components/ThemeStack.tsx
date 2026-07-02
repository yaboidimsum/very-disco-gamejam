"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { volumesData } from "../data/volumes";

export default function ThemeStack() {
  const [activeVol, setActiveVol] = useState<number>(2); // Default to Vol. 2 (Cap)
  const [shufflingVol, setShufflingVol] = useState<number | null>(null);
  const [hoveredVol, setHoveredVol] = useState<number | null>(null);
  const isTransitioning = useRef(false);

  const triggerSwap = (targetVol: number) => {
    if (targetVol === activeVol || isTransitioning.current) return;
    
    isTransitioning.current = true;
    // Step 1: Slide out the currently active card
    setShufflingVol(activeVol);

    // Step 2: At the peak of the slide-out (250ms), swap z-indexes
    setTimeout(() => {
      setActiveVol(targetVol);
      setShufflingVol(null);
      
      // Allow new transitions after the slide-in completes (another 250ms)
      setTimeout(() => {
        isTransitioning.current = false;
      }, 250);
    }, 250);
  };

  // Auto-rotate the stack every 8 seconds if user is not interacting
  useEffect(() => {
    if (hoveredVol !== null) return;
    const interval = setInterval(() => {
      triggerSwap(activeVol === 1 ? 2 : 1);
    }, 8000);
    return () => clearInterval(interval);
  }, [hoveredVol, activeVol]);

  const vol1 = volumesData.find((v) => v.id === 1);
  const vol2 = volumesData.find((v) => v.id === 2);

  if (!vol1 || !vol2) return null;

  // Custom timing function from Emil's design rules: ease-in-out-cubic
  // cubic-bezier(0.645, 0.045, 0.355, 1)
  const transitionStyle = {
    transition: "transform 500ms cubic-bezier(0.645, 0.045, 0.355, 1), opacity 500ms cubic-bezier(0.645, 0.045, 0.355, 1), border-color 300ms ease, box-shadow 300ms ease",
  };

  // Vol 1 (Chain) CSS class resolver
  const getVol1Class = () => {
    if (shufflingVol === 1) {
      // Slide out to the left
      return "z-30 scale-[0.96] -translate-x-[110%] -rotate-[12deg] opacity-95 border-zinc-400";
    }
    if (shufflingVol === 2) {
      // Preparing to step up from the back
      return "z-10 scale-[0.96] rotate-[1deg] translate-x-2 -translate-y-2 opacity-85 border-zinc-500";
    }
    if (activeVol === 1) {
      // Front active card
      return "z-20 scale-100 rotate-3 translate-x-6 -translate-y-6 border-zinc-300 dark:border-zinc-700";
    }
    // Back card state
    if (hoveredVol === 1) {
      return "z-10 scale-[0.93] -rotate-12 -translate-x-12 translate-y-10 border-zinc-400 dark:border-zinc-600 opacity-90";
    }
    return "z-10 scale-90 -rotate-6 -translate-x-8 translate-y-6 opacity-60 border-zinc-800 dark:border-zinc-900 pointer-events-auto";
  };

  // Vol 2 (Cap) CSS class resolver
  const getVol2Class = () => {
    if (shufflingVol === 2) {
      // Slide out to the right
      return "z-30 scale-[0.96] translate-x-[110%] rotate-[12deg] opacity-95 border-zinc-400";
    }
    if (shufflingVol === 1) {
      // Preparing to step up from the back
      return "z-10 scale-[0.96] rotate-[1deg] translate-x-2 -translate-y-2 opacity-85 border-zinc-500";
    }
    if (activeVol === 2) {
      // Front active card
      return "z-20 scale-100 rotate-3 translate-x-6 -translate-y-6 border-zinc-300 dark:border-zinc-700";
    }
    // Back card state
    if (hoveredVol === 2) {
      return "z-10 scale-[0.93] -rotate-12 -translate-x-12 translate-y-10 border-zinc-400 dark:border-zinc-600 opacity-90";
    }
    return "z-10 scale-90 -rotate-6 -translate-x-8 translate-y-6 opacity-60 border-zinc-800 dark:border-zinc-900 pointer-events-auto";
  };

  return (
    <div className="lg:col-span-6 flex justify-center items-center relative py-12 lg:py-0 min-h-[380px] md:min-h-[440px]">
      <div className="relative w-full max-w-[310px] aspect-[4/5] md:max-w-[330px] select-none">
        
        {/* Card 1: Vol. 1 (Chain) */}
        <div
          onClick={() => triggerSwap(1)}
          onMouseEnter={() => setHoveredVol(1)}
          onMouseLeave={() => setHoveredVol(null)}
          style={transitionStyle}
          className={`absolute inset-0 rounded-2xl border bg-zinc-950 overflow-hidden shadow-2xl cursor-pointer group ${getVol1Class()}`}
        >
          {/* Full bleed image */}
          <div className="absolute inset-0 w-full h-full">
            <Image
              src="/images/theme/Chain.webp"
              alt="Vol. 1 Chain Cover"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              priority
            />
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
          </div>

          {/* Glassmorphic metadata bar */}
          <div className="absolute bottom-0 left-0 right-0 p-5 bg-white/95 dark:bg-black/95 backdrop-blur-md border-t border-zinc-200 dark:border-zinc-800/80 flex flex-col transition-all duration-300 group-hover:bg-white dark:group-hover:bg-black">
            <div className="flex items-center justify-between font-mono text-[9px] text-zinc-400 dark:text-zinc-500 mb-1 uppercase tracking-wider">
              <span>VOLUME_01</span>
              <span>MAY 2026</span>
            </div>
            <h3 className="font-sans font-black text-xl tracking-tight text-zinc-950 dark:text-white uppercase flex items-center justify-between leading-none">
              <span>Chain</span>
              <span className="font-mono text-[8px] px-2 py-0.5 border border-zinc-200 dark:border-zinc-800 rounded bg-zinc-50 dark:bg-zinc-900 text-zinc-500">[ INDIGO_THEME ]</span>
            </h3>
          </div>
        </div>

        {/* Card 2: Vol. 2 (Cap) */}
        <div
          onClick={() => triggerSwap(2)}
          onMouseEnter={() => setHoveredVol(2)}
          onMouseLeave={() => setHoveredVol(null)}
          style={transitionStyle}
          className={`absolute inset-0 rounded-2xl border bg-zinc-950 overflow-hidden shadow-2xl cursor-pointer group ${getVol2Class()}`}
        >
          {/* Full bleed image */}
          <div className="absolute inset-0 w-full h-full">
            <Image
              src="/images/theme/Cap.webp"
              alt="Vol. 2 Cap Cover"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              priority
            />
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
          </div>

          {/* Glassmorphic metadata bar */}
          <div className="absolute bottom-0 left-0 right-0 p-5 bg-white/95 dark:bg-black/95 backdrop-blur-md border-t border-zinc-200 dark:border-zinc-800/80 flex flex-col transition-all duration-300 group-hover:bg-white dark:group-hover:bg-black">
            <div className="flex items-center justify-between font-mono text-[9px] text-zinc-400 dark:text-zinc-500 mb-1 uppercase tracking-wider">
              <span>VOLUME_02</span>
              <span>JUNE 2026</span>
            </div>
            <h3 className="font-sans font-black text-xl tracking-tight text-zinc-950 dark:text-white uppercase flex items-center justify-between leading-none">
              <span>Cap</span>
              <span className="font-mono text-[8px] px-2 py-0.5 bg-orange-100 text-orange-700 dark:bg-orange-950/40 dark:text-orange-400 rounded border border-orange-200 dark:border-orange-900/40 font-bold tracking-widest">[ ACTIVE ]</span>
            </h3>
          </div>
        </div>

      </div>
    </div>
  );
}
