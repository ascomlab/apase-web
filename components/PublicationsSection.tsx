import { BookOpen } from "lucide-react";
import { publications } from "@/data/content";

export default function PublicationsSection() {
  return (
    <section id="publications" className="px-12 py-24 max-w-[1440px] mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
        <div>
          <h2 className="font-headline text-4xl font-extrabold text-[#1A365D] mb-4">
            Publication &amp; Proceedings
          </h2>
          <p className="text-on-surface-variant max-w-lg">
            All accepted papers will be published in the Conference Proceedings
          </p>
        </div>
        {/* <button className="text-primary font-bold border-b-2 border-primary pb-1 hover:text-primary-dim transition-colors">
          View All Publications
        </button> */}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {publications.map((pub) => (
          <a
            key={pub.year}
            href={pub.href ?? undefined}
            target={pub.href ? "_blank" : undefined}
            rel={pub.href ? "noopener noreferrer" : undefined}
            aria-disabled={!pub.href}
            className={`group relative overflow-hidden rounded-3xl border bg-surface-container-low p-8 text-left shadow-[0_18px_40px_-28px_rgba(40,52,57,0.35)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_26px_60px_-30px_rgba(40,52,57,0.45)] ${
              pub.featured
                ? "border-primary/25 ring-1 ring-primary/15"
                : "border-slate-200"
            } ${pub.href ? "cursor-pointer" : "cursor-default"}`}
          >
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-primary/35 to-transparent" />
            <div className="absolute right-0 top-0 h-24 w-24 rounded-full bg-primary/8 blur-2xl transition-opacity duration-300 group-hover:opacity-100 opacity-70" />
            <span className="text-xs font-bold text-outline uppercase tracking-widest">
              {pub.year}
            </span>
            <h5 className="mt-3 text-xl font-bold leading-snug text-on-surface">
              {pub.title}
            </h5>
            <div className="mt-6 flex items-center gap-3 text-sm text-on-surface-variant">
              {pub.publisher && (
                <>
                  <span className="inline-flex items-center gap-2 rounded-full bg-primary/8 px-3 py-1 text-xs font-semibold text-on-primary-fixed">
                    <BookOpen className="h-3.5 w-3.5" />
                    {pub.publisher}
                  </span>
                  <span className="text-outline/60">|</span>
                </>
              )}
              <span className="font-medium text-on-surface-variant">
                {pub.location}
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
