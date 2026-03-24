import { technicalTracks } from "@/data/content";

export default function TechnicalTracksSection() {
  return (
    <section className="relative overflow-hidden bg-[#254067] text-white px-6 py-20 sm:px-10 lg:px-12 lg:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.18),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(251,191,36,0.12),transparent_30%)]" />
      <div className="relative max-w-[1440px] mx-auto">
        <div className="max-w-3xl mb-12 lg:mb-16">
          <p className="text-sm uppercase tracking-[0.35em] text-sky-200/80 mb-4">
            Program Focus Areas
          </p>
          <h2 className="font-headline text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
            Technical Research Tracks
          </h2>
          <p className="mt-5 text-base sm:text-lg text-slate-200/85 leading-relaxed">
            A broad set of aerospace and space science tracks covering mission
            systems, technologies, operations, and future workforce growth.
          </p>
          <div className="mt-8 h-1.5 w-24 rounded-full bg-primary" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
          {technicalTracks.map((track, index) => (
            <article
              key={track.id}
              className="group h-full rounded-3xl border border-white/10 bg-white/6 p-6 sm:p-7 shadow-[0_20px_60px_rgba(0,0,0,0.18)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/10"
            >
              <div className="flex items-start justify-between gap-4 mb-5">
                <div className="inline-flex h-11 min-w-11 items-center justify-center rounded-full bg-primary/15 px-4 text-sm font-semibold text-sky-100 ring-1 ring-inset ring-primary/20">
                  Track {index + 1}
                </div>
                <span className="text-xs uppercase tracking-[0.25em] text-slate-300/70">
                  2026
                </span>
              </div>

              <h3 className="text-2xl font-bold leading-tight text-white">
                {track.title}
              </h3>

              <div className="mt-5">
                <p className="text-sm uppercase tracking-[0.25em] text-sky-200/70 mb-3">
                  Covers
                </p>
                <ul className="flex flex-wrap gap-2">
                  {track.covers.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-white/10 bg-white/8 px-3 py-2 text-sm text-slate-100/90"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
