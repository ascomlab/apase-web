// import { Info } from "lucide-react";
import { importantDates } from "@/data/content";

export default function KeyMilestonesSection() {
  return (
    <section className="px-12 py-24 max-w-[1440px] mx-auto">
      <div className="flex flex-col md:flex-row gap-20">
        <div className="md:w-1/3">
          <h2 className="font-headline text-4xl font-extrabold text-[#1A365D] mb-6 leading-tight">
            Key Milestones
          </h2>
          <p className="text-on-surface-variant text-lg leading-relaxed">
            Stay informed about critical deadlines. Early bird registrations
            offer exclusive networking sessions and lowered fees.
          </p>
          {/* <div className="mt-12 p-8 bg-tertiary-container rounded-2xl">
            <div className="flex items-center gap-4 text-on-tertiary-container mb-4">
              <Info className="w-5 h-5" />
              <span className="font-bold uppercase tracking-wider text-sm">
                Note
              </span>
            </div>
            <p className="text-on-tertiary-container text-sm leading-relaxed">
              All deadlines are 23:59 GMT+8 (China Standard Time). Extensions
              are rarely granted.
            </p>
          </div> */}
        </div>
        <div className="md:w-2/3 grid gap-3">
          {importantDates.map((date) => (
            <div
              key={date.title}
              className="bg-surface-container-lowest p-6 sm:p-7 flex items-start justify-between rounded-xl group hover:bg-surface-container-low transition-colors border border-transparent hover:border-primary-container"
            >
              <div className="flex gap-6 sm:gap-8 items-start">
                <div className="text-center min-w-[84px] sm:min-w-[96px] pt-0.5">
                  <p
                    className={`text-2xl sm:text-3xl font-black leading-none ${
                      date.active ? "text-primary" : "text-slate-400"
                    }`}
                  >
                    {date.date}
                  </p>
                  <p className="mt-1 text-[10px] sm:text-xs font-bold uppercase tracking-[0.22em] text-outline">
                    {date.year}
                  </p>
                </div>
                <div className="max-w-2xl">
                  <h4 className="text-lg sm:text-xl font-bold mb-1 leading-tight">
                    {date.title}
                  </h4>
                  <p className="text-sm sm:text-base text-on-surface-variant leading-relaxed">
                    {date.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
