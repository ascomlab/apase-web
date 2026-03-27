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

        <ul className="list-disc space-y-4 pl-5 text-base sm:text-lg leading-relaxed text-slate-100/90">
          {technicalTracks.map((track) => (
            <li key={track.id}>
              <span className="font-semibold">{track.title}</span>:{" "}
              {track.covers.join(", ")}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
