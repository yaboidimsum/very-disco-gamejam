export default function Footer() {
  return (
    <footer className="w-full border-t border-zinc-200 bg-zinc-50/50 dark:border-zinc-800 dark:bg-zinc-950/20 py-12 mt-auto">
      <div className="mx-auto max-w-7xl px-6 md:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Info */}
        <div className="flex flex-col items-center md:items-start gap-2">
          <p className="font-mono text-xs tracking-wider font-bold text-black dark:text-white">
            © {new Date().getFullYear()} VERY DISCO GAME JAM.
          </p>
          <p className="font-mono text-[10px] text-zinc-400 dark:text-zinc-600">
            Very Disco Game Jam.
          </p>
        </div>

        {/* Links */}
        <div className="flex items-center gap-6 font-mono text-[10px] tracking-widest text-zinc-500">
          <a
            href="https://itch.io/profile/liminalbeams"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black dark:hover:text-white transition-colors"
          >
            ITCH.IO
          </a>
        </div>
      </div>
    </footer>
  );
}
