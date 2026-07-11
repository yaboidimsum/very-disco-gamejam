"use client";

import { useEffect, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import type * as ThreeNamespace from "three";

type VantaEffect = {
  destroy: () => void;
};

type VantaFactory = (options: {
  el: HTMLElement;
  THREE: typeof ThreeNamespace;
  mouseControls?: boolean;
  touchControls?: boolean;
  gyroControls?: boolean;
  minHeight?: number;
  minWidth?: number;
  scale?: number;
  scaleMobile?: number;
  backgroundColor?: number;
  color?: number;
  color2?: number;
  shininess?: number;
  waveHeight?: number;
  waveSpeed?: number;
  zoom?: number;
  points?: number;
  maxDistance?: number;
  spacing?: number;
  showDots?: boolean;
}) => VantaEffect;

interface VantaHeroBackgroundProps {
  activeVol: number;
}

const baseControls = {
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200,
  minWidth: 200,
  scale: 1,
  scaleMobile: 1,
};

export default function VantaHeroBackground({ activeVol }: VantaHeroBackgroundProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const effectRef = useRef<VantaEffect | null>(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    let cancelled = false;

    const destroyEffect = () => {
      effectRef.current?.destroy();
      effectRef.current = null;
    };

    if (shouldReduceMotion || !containerRef.current) {
      destroyEffect();
      return destroyEffect;
    }

    async function createEffect() {
      destroyEffect();

      const [{ default: effectFactory }, THREE] = await Promise.all([
        activeVol === 1
          ? import("vanta/dist/vanta.net.min")
          : import("vanta/dist/vanta.waves.min"),
        import("three"),
      ]);

      if (cancelled || !containerRef.current) return;

      const factory = effectFactory as VantaFactory;

      effectRef.current =
        activeVol === 1
          ? factory({
              ...baseControls,
              el: containerRef.current,
              THREE,
              backgroundColor: 0x07081a,
              color: 0x8c8fff,
              points: 13,
              maxDistance: 22,
              spacing: 16,
              showDots: false,
            })
          : factory({
              ...baseControls,
              el: containerRef.current,
              THREE,
              backgroundColor: 0x170705,
              color: 0xff6614,
              color2: 0xffb347,
              shininess: 38,
              waveHeight: 27,
              waveSpeed: 0.58,
              zoom: 0.82,
            });
    }

    createEffect();

    return () => {
      cancelled = true;
      destroyEffect();
    };
  }, [activeVol, shouldReduceMotion]);

  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
      <motion.div
        key={`fallback-${activeVol}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.65, ease: [0.645, 0.045, 0.355, 1] }}
        className={`absolute inset-0 ${
          activeVol === 1
            ? "bg-[radial-gradient(circle_at_75%_45%,rgba(99,102,241,0.32),transparent_34%),radial-gradient(circle_at_22%_78%,rgba(37,99,235,0.18),transparent_38%),linear-gradient(135deg,#050610,#101032)]"
            : "bg-[radial-gradient(circle_at_74%_42%,rgba(249,115,22,0.34),transparent_34%),radial-gradient(circle_at_22%_80%,rgba(251,191,36,0.18),transparent_38%),linear-gradient(135deg,#130705,#351207)]"
        }`}
      />
      <div ref={containerRef} className="absolute inset-0 opacity-70" />
      <div
        className={`absolute inset-0 ${
          activeVol === 1 ? "bg-white/70 dark:bg-black/58" : "bg-orange-950/20 dark:bg-black/60"
        }`}
      />
      <div
        className={`absolute inset-0 ${
          activeVol === 1
            ? "bg-[radial-gradient(circle_at_70%_50%,rgba(99,102,241,0.24),transparent_46%)]"
            : "bg-[radial-gradient(circle_at_70%_50%,rgba(249,115,22,0.18),transparent_42%)]"
        }`}
      />
    </div>
  );
}
