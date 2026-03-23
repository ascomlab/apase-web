import { sponsors } from "@/data/content";

export default function SponsorsSection() {
  return (
    <section className="px-12 py-24 bg-white">
      <div className="max-w-[1440px] mx-auto text-center">
        <h3 className="font-headline text-2xl font-bold text-on-surface-variant mb-16 uppercase tracking-[0.2em]">
          Institutional Support
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-16 grayscale opacity-40 hover:grayscale-0 transition-all duration-700">
          {sponsors.map((sponsor, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-4 bg-slate-50 rounded-xl h-24"
              title={sponsor.name}
            >
              <span className="text-slate-400 font-bold">{sponsor.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
