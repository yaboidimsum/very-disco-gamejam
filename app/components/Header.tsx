"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "./ThemeProvider";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Header() {
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMounted(true);
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  const links = [
    { href: "/", label: "Home" },
    { href: "/volumes", label: "Volumes" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-200 bg-white/80 backdrop-blur-md dark:border-zinc-800 dark:bg-black/80">
      <div className="mx-auto flex max-w-7xl h-16 items-center justify-between px-6 md:px-8">
        {/* Brand Logo */}
        <Link 
          href="/" 
          className="flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black dark:focus-visible:ring-white rounded-lg p-0.5"
        >
          <div className="relative w-8 h-8 rounded-lg overflow-hidden active:scale-95 transition-transform duration-100 flex items-center justify-center">
            <Image
              src="/images/logo.webp"
              alt="Very Disco Logo"
              fill
              className="object-contain"
            />
          </div>
          <span className="font-mono text-sm tracking-tight font-black text-black dark:text-white uppercase transition-colors duration-200 group-hover:text-zinc-600 dark:group-hover:text-zinc-300">
            Very Disco Game Jam 2026
          </span>
        </Link>

        {/* Navigation & Theme Toggle */}
        <div className="flex items-center gap-6">
          <nav className="flex items-center gap-4">
            {links.map((link) => {
              const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative font-mono text-[11px] tracking-[0.15em] font-bold px-3 py-1.5 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black dark:focus-visible:ring-white rounded-md ${
                    isActive
                      ? "text-black bg-zinc-100 dark:text-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800"
                      : "text-zinc-500 hover:text-black dark:hover:text-white hover:bg-zinc-50/50 dark:hover:bg-zinc-950/50"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="group flex items-center justify-center w-8 h-8 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-600 dark:text-zinc-300 transition-[background-color,border-color,color,transform] duration-200 active:scale-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black dark:focus-visible:ring-white"
            aria-label="Toggle Theme"
          >
            {!mounted ? (
              <div className="w-4 h-4" />
            ) : theme === "light" ? (
              // Moon Icon
              <svg className="w-4 h-4 transition-transform duration-300 group-hover:rotate-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            ) : (
              // Sun Icon
              <svg className="w-4 h-4 transition-transform duration-300 group-hover:rotate-45" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2m0 14v2m9-9h-2M5 12H3m14.5-6.5l-1.5 1.5M7 17l-1.5 1.5M17 17l1.5 1.5M6.5 6.5l1.5 1.5M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0 -8z" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
