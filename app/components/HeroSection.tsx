"use client";

import { useState } from "react";
import Link from "next/link";
import ThemeStack from "./ThemeStack";
import VantaHeroBackground from "./VantaHeroBackground";

export default function HeroSection() {
  const [activeVol, setActiveVol] = useState<number>(2); // Default to Vol. 2 (Cap)

  return (
    <section className="relative flex min-h-[100dvh] w-full border-b border-zinc-200 bg-y2k-mesh dark:border-zinc-800 overflow-hidden">
      <VantaHeroBackground activeVol={activeVol} />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-6 px-6 py-8 md:px-8 md:py-12 lg:grid-cols-12 lg:gap-12">
        {/* Hero text */}
        <div className="order-2 flex flex-col items-center text-center lg:order-1 lg:col-span-6 lg:items-start lg:text-left">
          <h1 className="font-display text-6xl md:text-8xl text-black dark:text-white uppercase leading-none mb-6">
            Very Disco
            <br />
            Game Jam
          </h1>

          <p className="max-w-lg font-sans text-sm md:text-base leading-relaxed text-white/85 mb-8">
            A collection of games created through Very Disco, a community-driven game jam initiative by JAMMED Space, the game development interest corner at Apple Developer Academy @ UC Jakarta.
          </p>

          <div className="flex w-full justify-center lg:w-auto lg:justify-start z-10">
            <Link
              href={activeVol === 1 ? "/volumes/1" : "/volumes/2"}
              className={`inline-flex h-12 items-center justify-center rounded-xl text-white font-sans text-xs tracking-widest font-black shadow-lg transition-all duration-300 active:scale-[0.98] px-8 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${
                activeVol === 1
                  ? "bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-400 focus-visible:ring-indigo-500"
                  : "bg-orange-600 hover:bg-orange-700 dark:bg-orange-500 dark:hover:bg-orange-400 focus-visible:ring-orange-500"
              }`}
            >
              Explore Volume {activeVol}
            </Link>
          </div>
        </div>

        {/* Theme Stack Cards */}
        <ThemeStack activeVol={activeVol} setActiveVol={setActiveVol} />
      </div>
    </section>
  );
}
