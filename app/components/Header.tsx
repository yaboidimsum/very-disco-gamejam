"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home" },
    { href: "/volumes", label: "Volumes" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-200 bg-white/80 backdrop-blur-md dark:border-zinc-800 dark:bg-black/80">
      <div className="mx-auto flex max-w-7xl h-16 items-center justify-between px-6 md:px-8">
        <Link
          href="/"
          className="group rounded-lg p-0.5 font-display text-2xl leading-none text-black transition-colors duration-200 hover:text-zinc-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black dark:text-white dark:hover:text-zinc-300 dark:focus-visible:ring-white"
        >
          <span className="hidden sm:inline">VDGJ</span>
          <span className="inline sm:hidden">VDGJ</span>
        </Link>

        {/* Navigation */}
        <div className="flex items-center gap-6">
          <nav className="flex items-center gap-4">
            {links.map((link) => {
              const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative font-display text-xl px-3 py-1.5 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black dark:focus-visible:ring-white rounded-md ${
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

          {/* Theme toggle intentionally disabled for now. Restore ThemeProvider wiring here if light mode switching returns. */}
        </div>
      </div>
    </header>
  );
}
