import Link from "next/link";
import { volumesData } from "../data/volumes";
import ImageWithFallback from "../components/ImageWithFallback";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "Volumes - Very Disco Game Jam",
  description: "Browse all volumes of the Very Disco Game Jam event series.",
};

export default function VolumesPage() {
  return (
    <>
      <Header />
      <main className="flex-1 w-full max-w-7xl mx-auto px-6 py-16 md:px-8">
        {/* Page Header */}
        <div className="relative mb-16 border-b border-zinc-200 pb-8 dark:border-zinc-800">
          <div className="absolute -top-6 left-0 font-mono text-[10px] tracking-tighter text-zinc-400 dark:text-zinc-600">
            [ Archive Series ]
          </div>
          <h1 className="font-sans font-black text-4xl tracking-tighter text-black dark:text-white uppercase sm:text-5xl">
            All Volumes
          </h1>
          <p className="mt-4 max-w-xl font-mono text-xs leading-5 text-zinc-500">
            Explore the unique themes, creative rules, and incredible games built during our past game jam volumes.
          </p>
        </div>

        {/* Volumes Grid */}
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {volumesData.map((vol) => (
            <article
              key={vol.id}
              className="group flex flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-zinc-400 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-950 dark:hover:border-zinc-600"
            >
              {/* Artwork Cover */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-zinc-900">
                <ImageWithFallback
                  src={vol.coverImage}
                  alt={`${vol.title} - ${vol.theme}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  text={vol.theme}
                  gradientFrom={vol.gradientFrom}
                  gradientTo={vol.gradientTo}
                />
                
                {/* Accent Tag */}
                <div className="absolute top-4 left-4 z-10">
                  <span
                    className="inline-block px-3 py-1 font-mono text-[9px] tracking-widest font-black uppercase text-white rounded-full shadow-sm"
                    style={{ backgroundColor: vol.accentColor }}
                  >
                    {vol.title}
                  </span>
                </div>
              </div>

              {/* Volume Info */}
              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-center justify-between text-zinc-400 font-mono text-[10px] tracking-wider mb-2">
                  <span>Theme:</span>
                  <span className="font-bold text-zinc-500">{vol.date}</span>
                </div>

                <h2 className="font-sans font-black text-2xl tracking-tight text-black dark:text-white uppercase mb-3">
                  {vol.theme}
                </h2>

                <p className="text-zinc-600 dark:text-zinc-400 font-mono text-[11px] leading-relaxed mb-6 flex-1">
                  {vol.description.length > 120
                    ? `${vol.description.substring(0, 117)}...`
                    : vol.description}
                </p>

                {/* Action Button */}
                <Link
                  href={`/volumes/${vol.id}`}
                  className="inline-flex w-full items-center justify-center rounded-xl py-3 border border-zinc-200 dark:border-zinc-800 font-mono text-[10px] tracking-widest font-bold bg-zinc-50 hover:bg-zinc-100 text-black transition-all dark:bg-zinc-900/50 dark:hover:bg-zinc-900 dark:text-white group-hover:border-zinc-400 dark:group-hover:border-zinc-700"
                >
                  Enter Volume
                </Link>
              </div>
            </article>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
