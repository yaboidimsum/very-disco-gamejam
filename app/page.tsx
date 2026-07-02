import Link from "next/link";
import Image from "next/image";
import { volumesData } from "./data/volumes";
import ImageWithFallback from "./components/ImageWithFallback";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata = {
  title: "Very Disco Game Jam",
  description: "Play, create, dance. The retro-future game jam showcase page.",
};

export default function Home() {
  // Spotlight the latest volume automatically
  const latestVolume = volumesData[volumesData.length - 1];

  return (
    <>
      <Header />
      
      {/* Hero section */}
      <section className="relative w-full border-b border-zinc-200 dark:border-zinc-800 bg-y2k-mesh overflow-hidden">
        {/* Decorative Grid Lines */}
        <div className="absolute inset-0 bg-y2k-grid"></div>
        
        <div className="mx-auto max-w-7xl px-6 md:px-8 py-20 lg:py-28 grid lg:grid-cols-12 gap-12 items-center relative z-10">
          {/* Hero text */}
          <div className="lg:col-span-6 flex flex-col items-center text-center lg:items-start lg:text-left">
            <span className="inline-block px-3 py-1 font-mono text-[9px] tracking-tighter font-black text-purple-600 bg-purple-50 border border-purple-100 rounded-full dark:bg-purple-950/30 dark:border-purple-900/30 dark:text-purple-400 mb-6 shadow-sm">
              [ Announcing New Series ]
            </span>
            <h1 className="font-sans font-black text-5xl md:text-7xl tracking-tighter text-black dark:text-white uppercase leading-none mb-6">
              Very Disco<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 dark:from-cyan-400 dark:via-purple-400 dark:to-pink-400">Game Jam</span>
            </h1>
            <p className="max-w-md font-mono text-xs leading-5 text-zinc-600 dark:text-zinc-400 mb-8">
A collection of games created during the monthly game jams at Apple Developer Academy @ UC Jakarta.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Link
                href="/volumes"
                className="inline-flex h-12 items-center justify-center rounded-xl bg-zinc-950 text-white hover:bg-zinc-800 dark:bg-zinc-50 dark:text-black dark:hover:bg-zinc-200 px-8 font-mono text-xs tracking-widest font-black shadow-lg transition-[background-color,transform] duration-200 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-black dark:focus-visible:ring-white"
              >
                Explore Volumes
              </Link>
              <a
                href="#latest"
                className="inline-flex h-12 items-center justify-center rounded-xl border border-zinc-200/80 bg-white/70 backdrop-blur-sm hover:bg-white px-8 font-mono text-xs tracking-widest font-black text-zinc-700 dark:border-zinc-800 dark:bg-zinc-900/70 dark:text-zinc-300 shadow-sm transition-[background-color,border-color,color,transform] duration-200 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-zinc-400"
              >
                Latest Vol
              </a>
            </div>
          </div>

          {/* Hero Image Illustration */}
          <div className="lg:col-span-6 flex justify-center relative">
            <div className="relative aspect-[16/9] w-full max-w-[580px] rounded-2xl overflow-hidden shadow-2xl border border-purple-200/50 dark:border-purple-900/30 bg-zinc-950 group glow-purple">
              <Image
                src="/images/hero.jpg"
                alt="Very Disco Game Jam Poster Graphic"
                fill
                priority
                className="object-cover transition-transform duration-500 group-hover:scale-[1.01]"
              />
              {/* Retro corners overlay */}
              <div className="absolute inset-4 border border-white/10 pointer-events-none rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured volume spotlight */}
      <section id="latest" className="w-full py-20 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50/30 dark:bg-zinc-950/10">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="mb-12 font-mono text-center lg:text-left">
            <span className="text-[10px] tracking-tighter text-zinc-400 font-bold block mb-2">
              [ Current Spotlight ]
            </span>
            <h2 className="font-sans font-black text-3xl md:text-4xl tracking-tighter text-black dark:text-white">
              Featured Volume
            </h2>
          </div>

          {/* Spotlight Card */}
          <div className="grid lg:grid-cols-12 gap-8 items-center bg-white dark:bg-zinc-900/40 border border-zinc-200/80 dark:border-zinc-800/80 rounded-3xl p-6 md:p-8 overflow-hidden shadow-sm backdrop-blur-sm">
            <div className="lg:col-span-5 relative aspect-[4/3] w-full rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-100 dark:border-zinc-900 shadow-inner">
              <ImageWithFallback
                src={latestVolume.coverImage}
                alt={latestVolume.theme}
                fill
                className="object-cover"
                text={latestVolume.theme}
                gradientFrom={latestVolume.gradientFrom}
                gradientTo={latestVolume.gradientTo}
              />
            </div>
            
            <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
              <span className="inline-block px-3 py-1 font-mono text-[9px] tracking-widest font-black text-white rounded-full mb-4 shadow-sm" style={{ backgroundColor: latestVolume.accentColor }}>
                {latestVolume.title} - Latest
              </span>
              <h3 className="font-sans font-black text-3xl tracking-tight text-black dark:text-white mb-4">
                {latestVolume.theme}
              </h3>
              <p className="font-mono text-xs leading-5 text-zinc-500 max-w-xl mb-6">
                {latestVolume.description}
              </p>
              <Link
                href={`/volumes/${latestVolume.id}`}
                className="inline-flex items-center justify-center rounded-xl px-6 py-3 font-mono text-[10px] tracking-widest font-black text-white hover:opacity-90 transition-[opacity,transform] duration-200 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
                style={{ backgroundColor: latestVolume.accentColor }}
              >
                View Submissions
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Series timeline list */}
      <section className="relative w-full py-20 bg-white dark:bg-black overflow-hidden">
        {/* Subtle grid background */}
        <div className="absolute inset-0 bg-y2k-grid opacity-50"></div>
        
        <div className="mx-auto max-w-7xl px-6 md:px-8 relative z-10">
          <div className="mb-12 font-mono text-center lg:text-left">
            <span className="text-[10px] tracking-tighter text-zinc-400 font-bold block mb-2">
              [ History Timeline ]
            </span>
            <h2 className="font-sans font-black text-3xl md:text-4xl tracking-tighter text-black dark:text-white">
              Volume Archives
            </h2>
          </div>

          {/* Timeline Wrapper */}
          <div className="relative border-l border-purple-200 dark:border-purple-900/60 ml-4 pl-8 md:pl-12 flex flex-col gap-12 max-w-4xl">
            {volumesData.map((vol) => (
              <div key={vol.id} className="relative group">
                {/* Bullet node */}
                <div
                  className="absolute -left-[41px] top-1.5 w-6 h-6 rounded-full border bg-white dark:bg-black flex items-center justify-center transition-transform duration-200 group-hover:scale-110 shadow-sm"
                  style={{ borderColor: vol.accentColor }}
                >
                  <div className="w-2.5 h-2.5 rounded-full animate-pulse" style={{ backgroundColor: vol.accentColor }}></div>
                </div>

                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
                  <span className="font-mono text-[10px] tracking-wider text-zinc-400 font-bold">
                    {vol.date.toUpperCase()}
                  </span>
                  <span className="font-mono text-[9px] tracking-wider font-extrabold" style={{ color: vol.accentColor }}>
                    {vol.title}
                  </span>
                </div>

                <h3 className="font-sans font-black text-xl tracking-tight text-black dark:text-white mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-200">
                  <Link 
                    href={`/volumes/${vol.id}`}
                    className="focus-visible:outline-none focus-visible:underline rounded"
                  >
                    {vol.theme}
                  </Link>
                </h3>
                
                <p className="font-mono text-xs text-zinc-500 leading-relaxed max-w-2xl mb-4">
                  {vol.description}
                </p>

                <Link
                  href={`/volumes/${vol.id}`}
                  className="inline-flex items-center gap-1 font-mono text-[9px] tracking-widest font-black text-black hover:text-purple-600 dark:text-white dark:hover:text-purple-400 transition-colors duration-200 focus-visible:outline-none focus-visible:underline rounded p-0.5"
                >
                  Explore {vol.title} →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
