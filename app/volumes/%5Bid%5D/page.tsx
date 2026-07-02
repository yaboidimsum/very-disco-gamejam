import { notFound } from "next/navigation";
import { volumesData } from "../../data/volumes";
import ImageWithFallback from "../../components/ImageWithFallback";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
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
        <nav className="mb-8 font-mono text-[10px] tracking-widest font-bold">
          <Link href="/volumes" className="text-zinc-400 hover:text-black dark:hover:text-white transition-colors">
            Volumes
          </Link>
          <span className="text-zinc-300 mx-2">/</span>
          <span className="text-zinc-500 uppercase">{vol.title}</span>
        </nav>

        {/* Hero Section Container */}
        <section className={`relative rounded-3xl border ${vol.borderColor} ${vol.bgColor} p-8 md:p-12 overflow-hidden mb-16`}>
          {/* Grid Background */}
          <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:16px_24px]"></div>

          <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center md:items-start">
            {/* Visual Art Box */}
            <div className="relative aspect-[4/3] w-full max-w-[320px] rounded-2xl overflow-hidden shadow-sm border border-zinc-200/50 bg-zinc-950">
              <ImageWithFallback
                src={vol.coverImage}
                alt={vol.theme}
                fill
                className="object-cover"
                text={vol.theme}
                gradientFrom={vol.gradientFrom}
                gradientTo={vol.gradientTo}
              />
            </div>

            {/* Typography / Copy */}
            <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
              <span className="inline-block px-3 py-1 font-mono text-[9px] tracking-widest font-black uppercase text-white rounded-full mb-4" style={{ backgroundColor: vol.accentColor }}>
                {vol.title}
              </span>
              <h1 className="font-sans font-black text-4xl md:text-5xl tracking-tighter text-zinc-950 dark:text-zinc-50 uppercase mb-4">
                {vol.theme}
              </h1>
              <span className="font-mono text-[10px] tracking-widest text-zinc-400 font-bold mb-6 block">
                Date: {vol.date}
              </span>
              <p className="font-mono text-xs leading-5 text-zinc-700 dark:text-zinc-300 max-w-2xl">
                {vol.description}
              </p>
            </div>
          </div>
        </section>

        {/* Section Title */}
        <div className="mb-10 flex items-center justify-between border-b border-zinc-200 pb-4 dark:border-zinc-800">
          <h2 className="font-sans font-black text-2xl tracking-tight text-black dark:text-white uppercase">
            Submissions ({vol.games.length})
          </h2>
          <span className="font-mono text-[9px] tracking-wider text-zinc-400 font-bold">
            Grid Mode: Auto
          </span>
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
                  text={game.title}
                  gradientFrom={vol.gradientFrom}
                  gradientTo={vol.gradientTo}
                />
              </div>

              {/* Specs & Info */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-sans font-black text-lg tracking-tight text-black dark:text-white uppercase mb-1">
                  {game.title}
                </h3>
                <span className="font-mono text-[9px] text-zinc-400 font-medium mb-3 block">
                  By {game.creators.join(" & ")}
                </span>

                {game.description && (
                  <p className="font-mono text-[11px] leading-relaxed text-zinc-500 dark:text-zinc-400 mb-6 flex-1">
                    {game.description}
                  </p>
                )}

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {game.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-0.5 font-mono text-[8px] tracking-wider font-semibold border border-zinc-100 dark:border-zinc-800 rounded bg-zinc-50 dark:bg-zinc-900 text-zinc-500 uppercase"
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
                  className="inline-flex w-full items-center justify-center rounded-xl py-3 font-mono text-[10px] tracking-widest font-black text-white hover:opacity-90 transition-all shadow-sm"
                  style={{ backgroundColor: vol.accentColor }}
                >
                  Play on itch.io
                </a>
              </div>
            </article>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
