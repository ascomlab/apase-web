import Footer from "@/components/Footer";

const keynoteSpeakers = [
  {
    title: "Opening keynote",
    name: "TBD",
    role: "Speaker details coming soon",
  },
  {
    title: "Featured keynote",
    name: "TBD",
    role: "Speaker details coming soon",
  },
  {
    title: "Closing keynote",
    name: "TBD",
    role: "Speaker details coming soon",
  },
];

const organizingCommittee = [
  ["General Chair", "TBD"],
  ["Program Chair", "TBD"],
  ["Publicity Chair", "TBD"],
  ["Publication Chair", "TBD"],
  ["Finance Chair", "TBD"],
];

const technicalCommittee = [
  ["Area 01", "TBD"],
  ["Area 02", "TBD"],
  ["Area 03", "TBD"],
  ["Area 04", "TBD"],
  ["Area 05", "TBD"],
  ["Area 06", "TBD"],
];

export default function CommitteePage() {
  return (
    <>
      <main className="pt-32 pb-24">
        <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 mb-24">
          <div className="max-w-4xl">
            <span className="inline-block px-4 py-1.5 rounded-full bg-surface-container-highest text-on-surface-variant font-label text-xs font-bold tracking-widest uppercase mb-6">
              Governance &amp; Expertise
            </span>
            <h1 className="font-headline text-5xl md:text-7xl font-extrabold text-[#1A365D] tracking-tighter mb-8 leading-[1.05]">
              The Minds Behind <br />
              <span className="text-primary italic">APASE 2026</span>
            </h1>
            <p className="font-body text-xl text-on-surface-variant leading-relaxed max-w-2xl">
              Placeholder committee content. Replace each name, role, and
              description with the final conference roster.
            </p>
          </div>
        </section>

        <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 mb-28">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="font-headline text-3xl font-bold tracking-tight mb-2">
                Keynote Speakers
              </h2>
              <div className="w-12 h-1 bg-primary" />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {keynoteSpeakers.map((speaker) => (
              <div
                key={speaker.title}
                className="rounded-xl bg-surface-container-low overflow-hidden min-h-[240px] flex flex-col justify-end p-6 editorial-shadow"
              >
                <span className="font-label text-xs font-bold text-primary tracking-widest uppercase mb-2 block">
                  {speaker.title}
                </span>
                <h3 className="font-headline text-3xl font-bold text-[#1A365D] mb-2">
                  {speaker.name}
                </h3>
                <p className="font-body text-sm text-on-surface-variant">
                  {speaker.role}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 mb-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-4">
              <h2 className="font-headline text-4xl font-bold tracking-tighter mb-6">
                Organizing Committee
              </h2>
              <p className="text-on-surface-variant leading-relaxed">
                Insert the committee names and affiliations here.
              </p>
            </div>
            <div className="lg:col-span-8">
              <div className="space-y-px">
                {organizingCommittee.map(([role, name]) => (
                  <div
                    key={role}
                    className="grid grid-cols-1 md:grid-cols-2 gap-4 py-8 border-b border-surface-variant/30 px-4 -mx-4 hover:bg-surface-container-low/50 transition-colors"
                  >
                    <div>
                      <span className="font-label text-[10px] font-bold text-primary tracking-widest uppercase mb-1 block">
                        {role}
                      </span>
                      <h4 className="font-headline text-xl font-bold">
                        {name}
                      </h4>
                    </div>
                    <div className="flex items-center text-on-surface-variant font-body">
                      <span>Affiliation to be added</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-surface-container-low py-24">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <h2 className="font-headline text-4xl font-extrabold tracking-tight mb-4 text-on-background">
                Technical Program Committee
              </h2>
              <p className="text-on-surface-variant font-body">
                Placeholder technical committee entries for now.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
              {technicalCommittee.map(([area, name]) => (
                <div key={area} className="pl-6 border-l-2 border-primary/20">
                  <h5 className="font-headline font-bold text-lg mb-1">
                    {name}
                  </h5>
                  <p className="text-sm text-on-surface-variant mb-3">
                    Committee member details
                  </p>
                  <span className="inline-block px-2 py-0.5 bg-surface-container-highest rounded text-[10px] font-bold text-primary-dim uppercase tracking-wider">
                    {area}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 mt-28">
          <div className="relative overflow-hidden rounded-2xl bg-on-background p-12 md:p-16 text-center">
            <div className="relative z-10">
              <h2 className="font-headline text-4xl font-bold text-white mb-6">
                Committee details coming soon
              </h2>
              <p className="text-surface-variant/80 text-lg mb-10 max-w-2xl mx-auto">
                Swap this placeholder copy with your final committee roster and
                bios.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
