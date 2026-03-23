import { Info } from "lucide-react";

export default function ImportantDatesSection() {
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
          <div className="mt-12 p-8 bg-tertiary-container rounded-2xl">
            <div className="flex items-center gap-4 text-on-tertiary-container mb-4">
              <Info className="w-5 h-5" />
              <span className="font-bold uppercase tracking-wider text-sm">
                Note
              </span>
            </div>
            <p className="text-on-tertiary-container text-sm leading-relaxed">
              All deadlines are 23:59 GMT+9 (Japan Standard Time). Extensions
              are rarely granted.
            </p>
          </div>
        </div>
        <div className="md:w-2/3 grid gap-4">
          {/* Date Card 1 */}
          <div className="bg-surface-container-lowest p-8 flex items-center justify-between rounded-xl group hover:bg-surface-container-low transition-colors border border-transparent hover:border-primary-container">
            <div className="flex gap-10 items-center">
              <div className="text-center min-w-[100px]">
                <p className="text-3xl font-black text-primary">SEP 15</p>
                <p className="text-xs font-bold uppercase tracking-widest text-outline">
                  2025
                </p>
              </div>
              <div>
                <h4 className="text-xl font-bold mb-1">Initial Submission</h4>
                <p className="text-on-surface-variant">
                  Full paper or abstract for peer review
                </p>
              </div>
            </div>
            <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded uppercase tracking-tighter">
              Open
            </span>
          </div>
          {/* Date Card 2 */}
          <div className="bg-surface-container-lowest p-8 flex items-center justify-between rounded-xl group hover:bg-surface-container-low transition-colors border border-transparent hover:border-primary-container">
            <div className="flex gap-10 items-center">
              <div className="text-center min-w-[100px]">
                <p className="text-3xl font-black text-slate-400">OCT 10</p>
                <p className="text-xs font-bold uppercase tracking-widest text-outline">
                  2025
                </p>
              </div>
              <div>
                <h4 className="text-xl font-bold mb-1">
                  Acceptance Notification
                </h4>
                <p className="text-on-surface-variant">
                  Results sent to corresponding authors
                </p>
              </div>
            </div>
          </div>
          {/* Date Card 3 */}
          <div className="bg-surface-container-lowest p-8 flex items-center justify-between rounded-xl group hover:bg-surface-container-low transition-colors border border-transparent hover:border-primary-container">
            <div className="flex gap-10 items-center">
              <div className="text-center min-w-[100px]">
                <p className="text-3xl font-black text-slate-400">OCT 25</p>
                <p className="text-xs font-bold uppercase tracking-widest text-outline">
                  2025
                </p>
              </div>
              <div>
                <h4 className="text-xl font-bold mb-1">Final Registration</h4>
                <p className="text-on-surface-variant">
                  Registration deadline for accepted authors
                </p>
              </div>
            </div>
          </div>
          {/* Date Card 4 */}
          <div className="bg-surface-container-lowest p-8 flex items-center justify-between rounded-xl group hover:bg-surface-container-low transition-colors border border-transparent hover:border-primary-container">
            <div className="flex gap-10 items-center">
              <div className="text-center min-w-[100px]">
                <p className="text-3xl font-black text-slate-400">NOV 05</p>
                <p className="text-xs font-bold uppercase tracking-widest text-outline">
                  2025
                </p>
              </div>
              <div>
                <h4 className="text-xl font-bold mb-1">Listener Deadline</h4>
                <p className="text-on-surface-variant">
                  Last call for attendees without papers
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
