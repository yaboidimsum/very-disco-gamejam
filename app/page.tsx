import Link from "next/link";
import Header from "./components/Header";
import ThemeStack from "./components/ThemeStack";

export const metadata = {
  title: "Very Disco Game Jam",
  description: "Play, create, dance. The retro-future game jam showcase page.",
};

export default function Home() {
  return (
    <>
      <Header />
      
      {/* Hero section */}
      <section className="relative flex min-h-[calc(100dvh-4rem)] w-full border-b border-zinc-200 bg-y2k-mesh dark:border-zinc-800 overflow-hidden">
        <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-6 px-6 py-8 md:px-8 md:py-12 lg:grid-cols-12 lg:gap-12">
          {/* Hero text */}
          <div className="order-2 flex flex-col items-center text-center lg:order-1 lg:col-span-6 lg:items-start lg:text-left">
            <h1 className="font-display text-6xl md:text-8xl text-black dark:text-white uppercase leading-none mb-6">
              Very Disco<br />
              Game Jam
            </h1>
            <p className="max-w-md font-sans text-xs leading-5 text-zinc-600 dark:text-zinc-400 mb-8">
A collection of games created during the monthly game jams at Apple Developer Academy @ UC Jakarta.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Link
                href="/volumes"
                className="inline-flex h-12 items-center justify-center rounded-xl bg-zinc-950 text-white hover:bg-zinc-800 dark:bg-zinc-50 dark:text-black dark:hover:bg-zinc-200 px-8 font-sans text-xs tracking-widest font-black shadow-lg transition-[background-color,transform] duration-200 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-black dark:focus-visible:ring-white"
              >
                Explore Volumes
              </Link>
            </div>
          </div>

          {/* Theme Stack Cards */}
          <ThemeStack />
        </div>
      </section>

    </>
  );
}
