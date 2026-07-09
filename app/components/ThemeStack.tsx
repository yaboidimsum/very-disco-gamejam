"use client";

import { useCallback, useState, useEffect, useRef } from "react";
import Image from "next/image";
import { volumesData } from "../data/volumes";
import { motion, useReducedMotion } from "framer-motion";

export default function ThemeStack() {
  const [activeVol, setActiveVol] = useState<number>(2); // Default to Vol. 2 (Cap)
  const [shufflingVol, setShufflingVol] = useState<number | null>(null);
  const [hoveredVol, setHoveredVol] = useState<number | null>(null);
  const isTransitioning = useRef(false);

  const shouldReduceMotion = useReducedMotion();

  const triggerSwap = useCallback((targetVol: number) => {
    if (targetVol === activeVol || isTransitioning.current) return;
    
    isTransitioning.current = true;
    
    if (shouldReduceMotion) {
      // Immediate state swap if reduced motion is requested
      setActiveVol(targetVol);
      isTransitioning.current = false;
      return;
    }

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
  }, [activeVol, shouldReduceMotion]);

  // Auto-rotate the stack every 8 seconds if user is not interacting
  useEffect(() => {
    if (hoveredVol !== null || isTransitioning.current) return;
    const interval = setInterval(() => {
      triggerSwap(activeVol === 1 ? 2 : 1);
    }, 8000);
    return () => clearInterval(interval);
  }, [hoveredVol, activeVol, triggerSwap]);

  const vol1 = volumesData.find((v) => v.id === 1);
  const vol2 = volumesData.find((v) => v.id === 2);

  if (!vol1 || !vol2) return null;

  // Timings and cubic-bezier easing from Emil's design system: ease-in-out-cubic
  const customTransition = {
    duration: 0.5,
    ease: [0.645, 0.045, 0.355, 1] as [number, number, number, number],
  };

  // Vol 1 (Chain) Animation target
  const getVol1Animation = () => {
    if (shouldReduceMotion) {
      return {
        x: activeVol === 1 ? 24 : -32,
        y: activeVol === 1 ? -24 : 24,
        rotate: activeVol === 1 ? 3 : -6,
        scale: activeVol === 1 ? 1 : 0.9,
        zIndex: activeVol === 1 ? 20 : 10,
        opacity: activeVol === 1 ? 1 : 0.6,
      };
    }

    if (shufflingVol === 1) {
      return { x: -360, y: 0, rotate: -12, scale: 0.96, zIndex: 30, opacity: 0.95 };
    }
    if (shufflingVol === 2) {
      return { x: 8, y: -8, rotate: 1, scale: 0.96, zIndex: 10, opacity: 0.85 };
    }
    if (activeVol === 1) {
      return { x: 24, y: -24, rotate: 3, scale: 1, zIndex: 20, opacity: 1 };
    }
    if (hoveredVol === 1) {
      return { x: -48, y: 40, rotate: -12, scale: 0.93, zIndex: 10, opacity: 0.9 };
    }
    return { x: -32, y: 24, rotate: -6, scale: 0.9, zIndex: 10, opacity: 0.6 };
  };

  // Vol 2 (Cap) Animation target
  const getVol2Animation = () => {
    if (shouldReduceMotion) {
      return {
        x: activeVol === 2 ? 24 : -32,
        y: activeVol === 2 ? -24 : 24,
        rotate: activeVol === 2 ? 3 : -6,
        scale: activeVol === 2 ? 1 : 0.9,
        zIndex: activeVol === 2 ? 20 : 10,
        opacity: activeVol === 2 ? 1 : 0.6,
      };
    }

    if (shufflingVol === 2) {
      return { x: 360, y: 0, rotate: 12, scale: 0.96, zIndex: 30, opacity: 0.95 };
    }
    if (shufflingVol === 1) {
      return { x: 8, y: -8, rotate: 1, scale: 0.96, zIndex: 10, opacity: 0.85 };
    }
    if (activeVol === 2) {
      return { x: 24, y: -24, rotate: 3, scale: 1, zIndex: 20, opacity: 1 };
    }
    if (hoveredVol === 2) {
      return { x: -48, y: 40, rotate: -12, scale: 0.93, zIndex: 10, opacity: 0.9 };
    }
    return { x: -32, y: 24, rotate: -6, scale: 0.9, zIndex: 10, opacity: 0.6 };
  };

  return (
    <div className="order-1 flex min-h-[280px] items-center justify-center py-4 sm:min-h-[330px] md:min-h-[380px] lg:order-2 lg:col-span-6 lg:min-h-[440px] lg:py-0">
      <div className="relative aspect-[4/5] w-full max-w-[220px] select-none sm:max-w-[270px] md:max-w-[310px] lg:max-w-[330px]">
        
        {/* Card 1: Vol. 1 (Chain) */}
        <motion.div
          onClick={() => triggerSwap(1)}
          onMouseEnter={() => setHoveredVol(1)}
          onMouseLeave={() => setHoveredVol(null)}
          animate={getVol1Animation()}
          transition={customTransition}
          className="absolute inset-0 rounded-2xl border bg-zinc-950 overflow-hidden shadow-2xl cursor-pointer group will-change-transform"
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
            <div className="absolute inset-0 bg-black/20"></div>
          </div>

          {/* Glassmorphic metadata bar */}
          <div className="absolute bottom-0 left-0 right-0 p-5 bg-white/95 dark:bg-black/95 backdrop-blur-md border-t border-zinc-200 dark:border-zinc-800/80 flex flex-col transition-all duration-300 group-hover:bg-white dark:group-hover:bg-black">
            <div className="flex items-center justify-between font-sans text-[9px] text-zinc-400 dark:text-zinc-500 mb-1 uppercase tracking-wider">
              <span>Volume 01</span>
              <span>MAY 2026</span>
            </div>
            <h3 className="font-display text-4xl text-zinc-950 dark:text-white uppercase flex items-center justify-between leading-none">
              <span>Chain</span>
              <span className="font-sans text-[8px] px-2 py-0.5 border border-zinc-200 dark:border-zinc-800 rounded bg-zinc-50 dark:bg-zinc-900 text-zinc-500">Vol. 1</span>
            </h3>
          </div>
        </motion.div>

        {/* Card 2: Vol. 2 (Cap) */}
        <motion.div
          onClick={() => triggerSwap(2)}
          onMouseEnter={() => setHoveredVol(2)}
          onMouseLeave={() => setHoveredVol(null)}
          animate={getVol2Animation()}
          transition={customTransition}
          className="absolute inset-0 rounded-2xl border bg-zinc-950 overflow-hidden shadow-2xl cursor-pointer group will-change-transform"
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
            <div className="absolute inset-0 bg-black/20"></div>
          </div>

          {/* Glassmorphic metadata bar */}
          <div className="absolute bottom-0 left-0 right-0 p-5 bg-white/95 dark:bg-black/95 backdrop-blur-md border-t border-zinc-200 dark:border-zinc-800/80 flex flex-col transition-all duration-300 group-hover:bg-white dark:group-hover:bg-black">
            <div className="flex items-center justify-between font-sans text-[9px] text-zinc-400 dark:text-zinc-500 mb-1 uppercase tracking-wider">
              <span>Volume 02</span>
              <span>JUNE 2026</span>
            </div>
            <h3 className="font-display text-4xl text-zinc-950 dark:text-white uppercase flex items-center justify-between leading-none">
              <span>Cap</span>
              <span className="font-sans text-[8px] px-2 py-0.5 bg-orange-100 text-orange-700 dark:bg-orange-950/40 dark:text-orange-400 rounded border border-orange-200 dark:border-orange-900/40 font-bold tracking-widest">Vol. 2</span>
            </h3>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
