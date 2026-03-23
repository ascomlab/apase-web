import { BookOpen } from "lucide-react";
import { publications } from "@/data/content";

export default function PublicationsSection() {
  return (
    <section className="px-12 py-24 max-w-[1440px] mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
        <div>
          <h2 className="font-headline text-4xl font-extrabold text-[#1A365D] mb-4">
            Publication &amp; Proceedings
          </h2>
          <p className="text-on-surface-variant max-w-lg">
            All accepted papers will be published in the Conference Proceedings
            and submitted to major indexing services including EI Compendex and
            Scopus.
          </p>
        </div>
        <button className="text-primary font-bold border-b-2 border-primary pb-1 hover:text-primary-dim transition-colors">
          View All Publications
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {publications.map((pub) => (
          <div
            key={pub.year}
            className={`p-8 bg-surface-container-low rounded-2xl border-l-4 ${
              pub.featured ? "border-primary" : "border-slate-300"
            }`}
          >
            <span className="text-xs font-bold text-outline uppercase tracking-widest">
              {pub.year}
            </span>
            <h5 className="text-xl font-bold mt-2 mb-6">{pub.title}</h5>
            <div className="flex items-center gap-4 text-sm text-on-surface-variant">
              <BookOpen className="w-4 h-4" />
              <span>{pub.publisher}</span>
              <span className="mx-2">|</span>
              <span>ISSN: {pub.issn}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
