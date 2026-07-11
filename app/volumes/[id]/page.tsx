import { notFound } from "next/navigation";
import { volumesData } from "../../data/volumes";
import ImageWithFallback from "../../components/ImageWithFallback";
import Header from "../../components/Header";
import VantaHeroBackground from "../../components/VantaHeroBackground";
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
      <main className="flex-1 w-full max-w-7xl mx-auto px-6 py-8 md:px-8 md:py-10">
        <section className="mb-8 grid overflow-hidden rounded-2xl border border-zinc-800 bg-black text-white md:grid-cols-[minmax(260px,0.9fr)_minmax(0,1.1fr)]">
          <div className="relative min-h-[220px] bg-zinc-950 md:min-h-[360px]">
            <ImageWithFallback src={vol.coverImage} alt={vol.theme} fill className="object-cover" text={vol.theme.toUpperCase()} />
          </div>

          <div className="relative overflow-hidden px-5 py-5 md:px-7 md:py-6">
            <VantaHeroBackground activeVol={vol.id} />

            <div className="relative z-10 flex h-full min-h-[260px] flex-col justify-between">
              <div>
                <nav className="mb-6 font-sans text-[10px] font-bold tracking-widest">
                  <Link href="/volumes" className="text-white/55 transition-colors hover:text-white">
                    VOLUMES
                  </Link>
                  <span className="mx-2 text-white/30">/</span>
                  <span className="uppercase text-white/70">VOL. {vol.id}</span>
                </nav>

                <div className="mb-3 flex flex-wrap items-center gap-2">
                  <span className="rounded-full px-2.5 py-1 font-sans text-[9px] font-black uppercase tracking-widest text-white" style={{ backgroundColor: vol.accentColor }}>
                    Volume {String(vol.id).padStart(2, "0")}
                  </span>
                  <span className="font-sans text-[10px] font-bold uppercase tracking-widest text-white/55">{vol.date}</span>
                </div>

                <h1 className="font-display text-6xl uppercase leading-none text-white md:text-7xl">{vol.theme}</h1>
              </div>

              {vol.stats && (
                <div className="mt-8 grid grid-cols-2 gap-2 md:grid-cols-4">
                  <div className="border-t border-white/15 pt-2">
                    <span className="block font-sans text-[9px] uppercase tracking-widest text-white/45">Games</span>
                    <span className="font-display text-3xl text-white">{vol.stats.submissionsCount}</span>
                  </div>
                  <div className="border-t border-white/15 pt-2">
                    <span className="block font-sans text-[9px] uppercase tracking-widest text-white/45">Ratings</span>
                    <span className="font-display text-3xl text-white">{vol.stats.ratingsCount}</span>
                  </div>
                  <div className="border-t border-white/15 pt-2">
                    <span className="block font-sans text-[9px] uppercase tracking-widest text-white/45">Avg / Game</span>
                    <span className="font-display text-3xl text-white">{vol.stats.averageRatings.toFixed(1)}</span>
                  </div>
                  <div className="border-t border-white/15 pt-2">
                    <span className="block font-sans text-[9px] uppercase tracking-widest text-white/45">Median</span>
                    <span className="font-display text-3xl text-white">{vol.stats.medianRatings}</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Games Submission Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {vol.games.map((game, index) => (
            <article
              key={index}
              className="group flex flex-col rounded-2xl border border-zinc-200 bg-white overflow-hidden shadow-sm hover:shadow-md transition-all dark:border-zinc-800 dark:bg-zinc-950"
            >
              {/* Cover view */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-zinc-900">
                <ImageWithFallback src={game.image} alt={game.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" text={game.title.toUpperCase()} />

                {/* Rank Badge Overlay */}
                {game.rank && (
                  <div className="absolute top-3 left-3 z-10">
                    <span
                      className={`inline-flex items-center gap-1 px-2 py-0.5 font-sans text-[9px] font-black uppercase rounded border ${
                        game.rank === 1
                          ? "bg-amber-500 border-amber-400 text-white"
                          : game.rank === 2
                            ? "bg-slate-400 border-slate-300 text-white"
                            : game.rank === 3
                              ? "bg-amber-700 border-amber-600 text-white"
                              : "bg-zinc-900/90 border-zinc-800 text-zinc-300"
                      }`}
                    >
                      {game.rank === 1 ? "🏆 1st" : game.rank === 2 ? "🥈 2nd" : game.rank === 3 ? "🥉 3rd" : `#${game.rank}`}
                    </span>
                  </div>
                )}
              </div>

              {/* Specs & Info */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-display text-3xl text-black dark:text-white uppercase mb-1">{game.title}</h3>
                <span className="font-sans text-[9px] text-zinc-400 font-medium mb-3 block">BY {game.creators.join(" & ").toUpperCase()}</span>

                {/* Criteria stats */}
                {game.criteria && (
                  <div className="border border-zinc-100 dark:border-zinc-800/80 rounded-xl p-3 bg-zinc-50/50 dark:bg-zinc-900/30 mb-4 mt-2 font-sans text-[9px] grid grid-cols-3 gap-2 text-center">
                    <div>
                      <span className="block text-zinc-400 uppercase mb-0.5">Hook</span>
                      <span className="font-bold text-zinc-800 dark:text-zinc-200">
                        #{game.criteria.hook.rank} ({game.criteria.hook.score.toFixed(1)})
                      </span>
                    </div>
                    <div className="border-l border-r border-zinc-100 dark:border-zinc-800">
                      <span className="block text-zinc-400 uppercase mb-0.5">Gameplay</span>
                      <span className="font-bold text-zinc-800 dark:text-zinc-200">
                        #{game.criteria.gameplay.rank} ({game.criteria.gameplay.score.toFixed(1)})
                      </span>
                    </div>
                    <div>
                      <span className="block text-zinc-400 uppercase mb-0.5">Cohesion</span>
                      <span className="font-bold text-zinc-800 dark:text-zinc-200">
                        #{game.criteria.cohesion.rank} ({game.criteria.cohesion.score.toFixed(1)})
                      </span>
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
