import { notFound } from "next/navigation";
import { volumesData } from "../../data/volumes";
import ImageWithFallback from "../../components/ImageWithFallback";
import Header from "../../components/Header";
import Link from "next/link";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: Props) {
  const resolvedParams = await params;
  const volId = parseInt(resolvedParams.id, 10);
  const vol = volumesData.find((v) => v.id === volId);
  return {
    title: vol ? `${vol.title}: ${vol.theme} - Very Disco Game Jam` : "Volume Not Found",
  };
}

export async function generateStaticParams() {
  return volumesData.map((vol) => ({
    id: vol.id.toString(),
  }));
}

export default async function VolumeDetailPage({ params }: Props) {
  const resolvedParams = await params;
  const volId = parseInt(resolvedParams.id, 10);
  const vol = volumesData.find((v) => v.id === volId);

  if (!vol) {
    notFound();
  }

  return (
    <>
      <Header />
      <main className="flex-1 w-full max-w-7xl mx-auto px-6 py-16 md:px-8">
        {/* Navigation Breadcrumb */}
        <nav className="mb-8 font-sans text-[10px] tracking-widest font-bold">
          <Link href="/volumes" className="text-zinc-400 hover:text-black dark:hover:text-white transition-colors">
            VOLUMES
          </Link>
          <span className="text-zinc-300 mx-2">/</span>
          <span className="text-zinc-500 uppercase">{vol.title}</span>
        </nav>

        {/* Hero Section Container */}
        <section className={`relative rounded-3xl border ${vol.borderColor} ${vol.darkBorderColor || ""} ${vol.bgColor} ${vol.darkBgColor || ""} p-8 md:p-12 overflow-hidden mb-16`}>
          <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center md:items-start">
            {/* Visual Art Box */}
            <div className="relative aspect-[4/3] w-full max-w-[320px] rounded-2xl overflow-hidden shadow-sm border border-zinc-200/50 bg-zinc-950">
              <ImageWithFallback
                src={vol.coverImage}
                alt={vol.theme}
                fill
                className="object-cover"
                text={vol.theme.toUpperCase()}
              />
            </div>

            {/* Typography / Copy */}
            <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
              <span className="inline-block px-3 py-1 font-sans text-[9px] tracking-widest font-black uppercase text-white rounded-full mb-4" style={{ backgroundColor: vol.accentColor }}>
                {vol.title}
              </span>
              <h1 className="font-display text-6xl md:text-7xl text-zinc-950 dark:text-zinc-50 uppercase mb-4">
                {vol.theme}
              </h1>
              <span className="font-sans text-[10px] tracking-widest text-zinc-400 font-bold mb-6 block">
                DATE: {vol.date.toUpperCase()}
              </span>
            </div>
          </div>
        </section>

        {/* Overall Results stats board */}
        {vol.stats && (
          <section className="mb-16 border border-zinc-200 dark:border-zinc-800 rounded-3xl p-6 bg-zinc-50/50 dark:bg-zinc-950/20 backdrop-blur-sm relative overflow-hidden">
            <div className="relative z-10">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="border-r border-zinc-200 dark:border-zinc-800 last:border-0 pr-4">
                  <span className="block font-sans text-[10px] text-zinc-400 uppercase mb-1">Submissions</span>
                  <span className="font-display text-4xl text-black dark:text-white">{vol.stats.submissionsCount} Games</span>
                </div>
                <div className="border-r border-zinc-200 dark:border-zinc-800 last:border-0 pr-4">
                  <span className="block font-sans text-[10px] text-zinc-400 uppercase mb-1">Ratings Given</span>
                  <span className="font-display text-4xl text-black dark:text-white">{vol.stats.ratingsCount} Total</span>
                </div>
                <div className="border-r border-zinc-200 dark:border-zinc-800 last:border-0 pr-4">
                  <span className="block font-sans text-[10px] text-zinc-400 uppercase mb-1">Avg Ratings / Game</span>
                  <span className="font-display text-4xl text-black dark:text-white">{vol.stats.averageRatings.toFixed(1)}</span>
                </div>
                <div>
                  <span className="block font-sans text-[10px] text-zinc-400 uppercase mb-1">Median Ratings</span>
                  <span className="font-display text-4xl text-black dark:text-white">{vol.stats.medianRatings}</span>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Section Title */}
        <div className="mb-10 flex items-center justify-between border-b border-zinc-200 pb-4 dark:border-zinc-800">
          <h2 className="font-display text-5xl text-black dark:text-white uppercase">
            SUBMISSIONS ({vol.games.length})
          </h2>
        </div>

        {/* Games Submission Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {vol.games.map((game, index) => (
            <article
              key={index}
              className="group flex flex-col rounded-2xl border border-zinc-200 bg-white overflow-hidden shadow-sm hover:shadow-md transition-all dark:border-zinc-800 dark:bg-zinc-950"
            >
              {/* Cover view */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-zinc-900">
                <ImageWithFallback
                  src={game.image}
                  alt={game.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  text={game.title.toUpperCase()}
                />
                
                {/* Rank Badge Overlay */}
                {game.rank && (
                  <div className="absolute top-3 left-3 z-10">
                    <span className={`inline-flex items-center gap-1 px-2 py-0.5 font-sans text-[9px] font-black uppercase rounded border ${
                      game.rank === 1
                        ? "bg-amber-500 border-amber-400 text-white"
                        : game.rank === 2
                        ? "bg-slate-400 border-slate-300 text-white"
                        : game.rank === 3
                        ? "bg-amber-700 border-amber-600 text-white"
                        : "bg-zinc-900/90 border-zinc-800 text-zinc-300"
                    }`}>
                      {game.rank === 1 ? "🏆 1st" : game.rank === 2 ? "🥈 2nd" : game.rank === 3 ? "🥉 3rd" : `#${game.rank}`}
                    </span>
                  </div>
                )}
              </div>

              {/* Specs & Info */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-display text-3xl text-black dark:text-white uppercase mb-1">
                  {game.title}
                </h3>
                <span className="font-sans text-[9px] text-zinc-400 font-medium mb-3 block">
                  BY {game.creators.join(" & ").toUpperCase()}
                </span>

                <div className="flex-1 mb-6" />

                {/* Criteria stats */}
                {game.criteria && (
                  <div className="border border-zinc-100 dark:border-zinc-800/80 rounded-xl p-3 bg-zinc-50/50 dark:bg-zinc-900/30 mb-6 font-sans text-[9px] grid grid-cols-3 gap-2 text-center">
                    <div>
                      <span className="block text-zinc-400 uppercase mb-0.5">Hook</span>
                      <span className="font-bold text-zinc-800 dark:text-zinc-200">#{game.criteria.hook.rank} ({game.criteria.hook.score.toFixed(1)})</span>
                    </div>
                    <div className="border-l border-r border-zinc-100 dark:border-zinc-800">
                      <span className="block text-zinc-400 uppercase mb-0.5">Gameplay</span>
                      <span className="font-bold text-zinc-800 dark:text-zinc-200">#{game.criteria.gameplay.rank} ({game.criteria.gameplay.score.toFixed(1)})</span>
                    </div>
                    <div>
                      <span className="block text-zinc-400 uppercase mb-0.5">Cohesion</span>
                      <span className="font-bold text-zinc-800 dark:text-zinc-200">#{game.criteria.cohesion.rank} ({game.criteria.cohesion.score.toFixed(1)})</span>
                    </div>
                  </div>
                )}

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {game.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-0.5 font-sans text-[8px] tracking-wider font-semibold border border-zinc-100 dark:border-zinc-800 rounded bg-zinc-50 dark:bg-zinc-900 text-zinc-500 uppercase"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* play link */}
                <a
                  href={game.itchUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center rounded-xl py-3 font-sans text-[10px] tracking-widest font-black text-white hover:opacity-90 transition-all shadow-sm"
                  style={{ backgroundColor: vol.accentColor }}
                >
                  PLAY ON ITCH.IO
                </a>
              </div>
            </article>
          ))}
        </div>
      </main>
    </>
  );
}
