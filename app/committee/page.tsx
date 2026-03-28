import Image from "next/image";
import { getAssetPath } from "../utils";

const keynoteSpeakers = [
  {
    layout: "featured",
    title: "Opening Keynote",
    name: "Prof. Youfu Li",
    role: "Prof. Li received the B.S. and M.S. degrees in electrical engineering from Harbin Institute of Technology China. He obtained the PhD degree from the Robotics Research Group, Dept of Engineering",
    image: getAssetPath("/images/keynote-speakers/YF.png"),
    alt: "Prof. Youfu Li",
  },
  {
    layout: "stacked",
    name: "TBD",
    role: "TBD",
    image: getAssetPath("/images/keynote-speakers/profile-placeholder.jpg"),
    alt: "TBD",
  },
  {
    layout: "stacked",
    name: "TBD",
    role: "TBD",
    image: getAssetPath("/images/keynote-speakers/profile-placeholder.jpg"),
    alt: "TBD",
  },
];

const organizingCommittee = [
  {
    role: "Honorary Chair",
    name: "Komsan Maleesee",
    affiliation: "King Mongkut's Institute of Technology Ladkrabang, Thailand",
  },
  {
    role: "Honorary Chair",
    name: "Wiphu Rujopakarn",
    affiliation:
      "National Astronomical Research Institute of Thailand, Thailand",
  },
  {
    role: "General Chairs",
    name: "TBD",
    affiliation: "TBD",
  },
  {
    role: "Program Committee Chairs",
    name: "TBD",
    affiliation: "TBD",
  },
  {
    role: "Executive Committee Chairs",
    name: "TBD",
    affiliation: "TBD",
  },
  {
    role: "Publication Chairs",
    name: "Shuai Yuan",
    affiliation: "Harbin Institute of Technology, China",
  },
  {
    role: "Treasurer",
    name: "TBD",
    affiliation: "TBD",
  },
  {
    role: "Local Chair",
    name: "TBD",
    affiliation: "TBD",
  },
];

const technicalCommittee = [
  {
    name: "Asst. Prof. Dr. Patcharin Kamsing",
    description: "King Mongkut's Institute of Technology Ladkrabang",
    badge: null,
  },
  {
    name: "Prof. Cao Chunxiang",
    description: "Chinese Academy of Sciences",
    badge: null,
  },
  {
    name: "TBD",
    description: "Committee member details",
    badge: null,
  },
  {
    name: "TBD",
    description: "Committee member details",
    badge: null,
  },
  {
    name: "TBD",
    description: "Committee member details",
    badge: null,
  },
  {
    name: "TBD",
    description: "Committee member details",
    badge: null,
  },
  {
    name: "TBD",
    description: "Committee member details",
    badge: null,
  },
  {
    name: "TBD",
    description: "Committee member details",
    badge: null,
  },
];

export default function CommitteePage() {
  return (
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

      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 mb-32">
        <div className="flex items-end justify-between mb-12">
          <div>
            <h2 className="font-headline text-3xl font-bold tracking-tight mb-2">
              Keynote Speakers
            </h2>
            <div className="w-12 h-1 bg-primary" />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 md:auto-rows-[240px] gap-6">
          {keynoteSpeakers.map((speaker, idx) =>
            speaker.layout === "featured" ? (
              <div
                key={speaker.name + idx}
                className="md:col-span-7 md:row-span-2 group relative overflow-hidden rounded-xl bg-surface-container-low h-[420px] md:h-full"
              >
                <Image
                  alt={speaker.alt}
                  src={speaker.image}
                  width={1200}
                  height={675}
                  className="absolute inset-0 h-full w-full object-cover transition-all duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-on-background/90 via-on-background/20 to-transparent" />
                <div className="absolute bottom-0 left-0 p-10">
                  <span className="font-label text-xs font-bold text-primary-fixed tracking-widest uppercase mb-2 block">
                    {speaker.title}
                  </span>
                  <h3 className="font-headline text-4xl font-bold text-surface-container-lowest mb-2">
                    {speaker.name}
                  </h3>
                  <p className="font-body text-lg text-surface-variant">
                    {speaker.role}
                  </p>
                </div>
              </div>
            ) : null,
          )}

          {keynoteSpeakers
            .filter((speaker) => speaker.layout === "stacked")
            .map((speaker, idx) => (
              <div
                key={speaker.name + idx}
                className="md:col-span-5 group relative overflow-hidden rounded-xl bg-surface-container-low h-[200px] md:h-full"
              >
                <Image
                  alt={speaker.alt}
                  src={speaker.image}
                  width={900}
                  height={600}
                  className="absolute inset-0 h-full w-full object-cover transition-all duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-on-background/80 to-transparent opacity-80" />
                <div className="absolute bottom-0 left-0 p-6">
                  <h4 className="font-headline text-2xl font-bold text-surface-container-lowest">
                    {speaker.name}
                  </h4>
                  <p className="font-body text-sm text-surface-variant">
                    {speaker.role}
                  </p>
                </div>
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
              {organizingCommittee.map(({ role, name, affiliation }, idx) => (
                <div
                  key={name + idx}
                  className="grid grid-cols-1 md:grid-cols-2 gap-4 py-8 border-b border-surface-variant/30 px-4 -mx-4 hover:bg-surface-container-low/50 transition-colors"
                >
                  <div>
                    <span className="font-label text-[10px] font-bold text-primary tracking-widest uppercase mb-1 block">
                      {role}
                    </span>
                    <h4 className="font-headline text-xl font-bold">{name}</h4>
                  </div>
                  <div className="flex items-center text-on-surface-variant font-body">
                    <span>{affiliation}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface-container-low py-16">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-headline text-4xl font-extrabold tracking-tight mb-4 text-on-background">
              Technical Program Committee
            </h2>
            <p className="text-on-surface-variant font-body">
              Placeholder technical committee entries for now.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-8">
            {technicalCommittee.map((committee, idx) => (
              <div
                key={committee.name + idx}
                className="pl-4 border-l-2 border-primary/20"
              >
                <h5 className="font-headline font-bold text-lg mb-1">
                  {committee.name}
                </h5>
                <p className="text-sm text-on-surface-variant mb-2">
                  {committee.description}
                </p>
                {committee.badge && (
                  <span className="inline-block px-2 py-0.5 bg-surface-container-highest rounded text-[10px] font-bold text-primary-dim uppercase tracking-wider">
                    {committee.badge}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 mt-28">
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
        </section> */}
    </main>
  );
}
