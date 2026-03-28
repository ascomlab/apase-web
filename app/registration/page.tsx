const registrationFeeSections = [
  {
    identity: "Professionals",
    entries: [
      { category: "Presentation & Publication", rate: "US $600 / CNY4200" },
      {
        category: "Presentation Only (TBC with system)",
        rate: "US $450 / CNY3200",
      },
      { category: "Listeners", rate: "US $280 / CNY1900" },
      {
        category: "Listeners (Onsite Registration)",
        rate: "US $300 / CNY2100",
      },
    ],
  },
  {
    identity: "Students",
    entries: [
      { category: "Presentation & Publication", rate: "US $550 / CNY3800" },
      {
        category: "Presentation Only (TBC with system)",
        rate: "US $400 / CNY2800",
      },
      { category: "Listeners", rate: "US $240 / CNY1600" },
      {
        category: "Listeners (Onsite Registration)",
        rate: "US $260 / CNY1800",
      },
    ],
  },
  {
    identity: "Others",
    entries: [
      { category: "Additional Papers", rate: "US $450 / CNY3200" },
      { category: "Extra Page (over 6 pages)", rate: "US $60 / CNY400 / Page" },
      { category: "Extra Proceedings", rate: "US $60 / CNY400" },
      { category: "Social Program (Optional)", rate: "US $60 / CNY400" },
    ],
  },
];

const registrationNotes = ["TBD", "TBD", "TBD"];

export default function RegistrationPage() {
  return (
    <main className="pt-32 pb-24 px-4 sm:px-6 lg:px-12 max-w-[1440px] mx-auto w-full">
      <header className="mb-20 max-w-3xl">
        <div className="inline-block bg-primary-container text-on-primary-container px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
          Registration Portal
        </div>
        <h1 className="font-headline text-5xl md:text-7xl font-extrabold text-[#1A365D] tracking-tighter leading-none mb-8">
          Join the <span className="text-primary">Intellectual</span> Discourse.
        </h1>
        <p className="text-on-surface-variant text-lg md:text-xl leading-relaxed">
          TBD
        </p>
      </header>

      <section className="mb-24">
        <div className="grid grid-cols-1 gap-12 items-start">
          <div className="space-y-12">
            <div className="bg-surface-container-low p-8 md:p-12 rounded-xl">
              <div className="flex items-center gap-4 mb-8">
                <span className="text-primary text-3xl">◫</span>
                <h2 className="font-headline text-2xl font-bold tracking-tight">
                  Registration Fees
                </h2>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full min-w-[520px] text-left border-collapse">
                  <thead>
                    <tr className="text-on-surface-variant border-b border-outline-variant/20">
                      <th className="py-3 font-semibold text-sm uppercase tracking-wider min-w-[140px]">
                        Identity
                      </th>
                      <th className="py-3 font-semibold text-sm uppercase tracking-wider min-w-[180px]">
                        Categories
                      </th>
                      <th className="py-3 font-semibold text-sm uppercase tracking-wider min-w-[160px]">
                        Rate
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-on-surface">
                    {registrationFeeSections.map((section) =>
                      section.entries.map((entry, index) => (
                        <tr
                          key={`${section.identity}-${entry.category}`}
                          className={
                            index % 2 === 0
                              ? "bg-surface-container-low"
                              : "bg-background/50"
                          }
                        >
                          {index === 0 && (
                            <td
                              className="py-3 pr-3 align-top min-w-[140px]"
                              rowSpan={section.entries.length}
                            >
                              <div className="font-bold text-lg">
                                {section.identity}
                              </div>
                            </td>
                          )}
                          <td className="py-3 pr-3 align-top min-w-[180px]">
                            <div className="font-bold text-lg">
                              {entry.category}
                            </div>
                          </td>
                          <td className="py-3 font-headline font-bold text-xl align-top min-w-[160px]">
                            {entry.rate}
                          </td>
                        </tr>
                      )),
                    )}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="group relative overflow-hidden rounded-3xl border bg-surface-container-low p-8 shadow-[0_18px_40px_-28px_rgba(40,52,57,0.35)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_26px_60px_-30px_rgba(40,52,57,0.45)] border-primary/25 ring-1 ring-primary/15">
                <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-transparent via-primary/35 to-transparent" />
                <div className="absolute right-0 top-0 h-24 w-24 rounded-full bg-primary/8 blur-2xl transition-opacity duration-300 group-hover:opacity-100 opacity-70" />
                <h3 className="font-headline font-bold text-xl mb-4 relative z-10">
                  Early Bird Deadline
                </h3>
                <p className="text-on-surface-variant body-md leading-relaxed mb-3 relative z-10">
                  Last day to register at the early-bird rate
                </p>
                <div className="text-primary font-bold text-xl font-headline tracking-tight relative z-10">
                  OCT 31 2026
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-3xl border bg-surface-container-low p-8 shadow-[0_18px_40px_-28px_rgba(40,52,57,0.35)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_26px_60px_-30px_rgba(40,52,57,0.45)] border-primary/25 ring-1 ring-primary/15">
                <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-transparent via-primary/35 to-transparent" />
                <div className="absolute right-0 top-0 h-24 w-24 rounded-full bg-primary/8 blur-2xl transition-opacity duration-300 group-hover:opacity-100 opacity-70" />
                <h3 className="font-headline font-bold text-xl mb-4 relative z-10">
                  Regular Deadline
                </h3>
                <p className="text-on-surface-variant body-md leading-relaxed mb-3 relative z-10">
                  Standard registration closes
                </p>
                <div className="text-on-surface font-bold text-xl font-headline tracking-tight relative z-10">
                  NOV 30 2025
                </div>
              </div>
            </div>
          </div>

          <aside className="space-y-8">
            <div className="bg-surface-container-highest p-8 rounded-xl">
              <h3 className="font-headline font-bold text-xl mb-6">
                Payment Information
              </h3>
              <div className="space-y-6">
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  TBD
                </p>
              </div>
            </div>
            <div className="bg-surface-container-low p-8 rounded-xl">
              <h3 className="font-headline font-bold text-lg mb-4">
                Important Notes
              </h3>
              <ul className="space-y-4 text-sm text-on-surface-variant">
                {registrationNotes.map((note, idx) => (
                  <li key={note + idx} className="flex gap-3">
                    <span className="text-primary">•</span>
                    <span>{note}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-primary text-on-primary p-8 rounded-xl relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="font-headline font-bold text-2xl mb-4">
                  Ready to register?
                </h3>
                <p className="text-primary-fixed/80 text-sm mb-8 leading-relaxed">
                  TBD
                </p>
                <button className="inline-flex items-center gap-2 bg-surface-container-lowest text-primary px-6 py-3 rounded font-bold text-sm">
                  Go to Registration Portal
                </button>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
