import Footer from "@/components/Footer";

const submissionTracks = [
  "Applied engineering",
  "Computational science",
  "Materials and environment",
];

const importantDate = [
  {
    date: "JUL 31 2026",
    title: "Full Paper Deadline",
    description: "Replace with the actual deadline for paper submission.",
  },
  {
    date: "SEP 15 2026",
    title: "Review result",
    description: "Acceptance results sent to authors",
  },
  {
    date: "OCT 15 2026",
    title: "Camera-Ready Paper Submission",
    description: "Revised final papers due",
  },
  {
    date: "DEC 20–22 2026",
    title: "Conference Dates",
    description: "APASE 2026 conference in Harbin, China",
  },
];

export default function SubmissionPage() {
  return (
    <>
      <main className="pt-32 pb-24 px-4 sm:px-6 lg:px-12 max-w-[1440px] mx-auto">
        <section className="mb-20 max-w-4xl">
          <span className="text-primary font-bold tracking-widest text-xs uppercase mb-4 block">
            Call for Papers
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold text-[#1A365D] tracking-tighter mb-8 leading-tight">
            Shaping the Future <br />
            of <span className="text-primary italic">Digital Intelligence</span>
          </h1>
          <p className="text-lg text-on-surface-variant leading-relaxed max-w-2xl font-body">
            Placeholder submission content. Replace this with the final call for
            papers, guidelines, and portal links.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-24">
          <div className="md:col-span-7 bg-surface-container-lowest p-10 md:p-14 rounded-xl shadow-sm border-l-4 border-primary">
            <h2 className="text-3xl font-extrabold text-on-surface mb-6 tracking-tight">
              Paper Submission System
            </h2>
            <div className="space-y-6 mb-10 text-on-surface-variant leading-relaxed">
              <p>
                Replace this placeholder with your official submission
                instructions.
              </p>
              <ul className="space-y-3">
                {submissionTracks.map((track) => (
                  <li key={track} className="flex items-start gap-3">
                    <span className="text-primary text-xl">•</span>
                    <span>{track}</span>
                  </li>
                ))}
              </ul>
            </div>
            <button className="inline-flex items-center gap-3 bg-gradient-to-br from-primary to-primary-dim text-on-primary px-10 py-5 rounded-md font-bold text-lg hover:opacity-95 transition-all group">
              Enter Submission Portal
            </button>
          </div>

          <div className="md:col-span-5 flex flex-col gap-8">
            <div className="bg-surface-container-low p-8 rounded-xl h-full flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-primary/10 flex items-center justify-center rounded-lg mb-6">
                  <span className="text-primary">□</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Manuscript Templates</h3>
                <p className="text-sm text-on-surface-variant mb-6">
                  Template links will be added later.
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <button className="w-full flex justify-between items-center px-4 py-3 bg-white hover:bg-slate-50 rounded-lg text-sm font-semibold transition-colors">
                  <span>LaTeX Template</span>
                  <span>↓</span>
                </button>
                <button className="w-full flex justify-between items-center px-4 py-3 bg-white hover:bg-slate-50 rounded-lg text-sm font-semibold transition-colors">
                  <span>Word Template</span>
                  <span>↓</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-32">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <h2 className="text-4xl font-extrabold tracking-tight mb-2">
                Important Dates
              </h2>
              <p className="text-on-surface-variant">
                Replace each milestone with the final schedule.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-px bg-outline-variant/20 rounded-xl overflow-hidden">
            {importantDate.map((content, dx) => (
              <div key={dx} className="bg-surface-container-lowest p-8">
                <span className="text-primary font-bold block mb-4">
                  {content.date}
                </span>
                <h4 className="text-xl font-bold mb-2">{content.title}</h4>
                <p className="text-sm text-on-surface-variant">
                  {content.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
