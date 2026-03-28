import Image from "next/image";

// import QuickAccessBento from "@/components/QuickAccessBento";
import { getAssetPath, getMilestoneKey, getTodayKey } from "./utils";
import { BookOpen } from "lucide-react";

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

const heroData = {
  badge: "International Conference",
  title: {
    main: "Asia-Pacific Aerospace Science &",
    highlighted: "Engineering Symposium.",
  },
  description:
    "Join leading researchers and practitioners in exploring the frontiers of physics and engineering.",
  image: {
    src: getAssetPath("/images/hero-image.png"),
    alt: "Microscopic view of advanced physical materials",
  },
  eventInfo: {
    year: "2026",
    location: "Harbin, China",
  },
  organizers: [
    { name: "HIT", logo: getAssetPath("/logo/organizors/hit-logo.png") },
    { name: "IDSEA", logo: getAssetPath("/logo/organizors/idsea-logo.png") },
    { name: "KMITL", logo: getAssetPath("/logo/organizors/kmitl-logo.png") },
    { name: "NARIT", logo: getAssetPath("/logo/organizors/narit-logo.png") },
  ],
};

const aboutData = {
  title: {
    main: "About the",
    highlighted: "Conference",
  },
  intro:
    "2026 The 5th Asia-Pacific Aerospace Science and Engineering Symposium (APASE 2026).",
  descriptions: [
    "2026 The 5th Asia-Pacific Aerospace Science and Engineering Symposium (APASE 2026), the annual conference held from the year 2020 with the name of The Innovation Aviation & Aerospace Industry (IAAI)- International Conference, will take place on December 20-22, 2026(TBC). in Harbin, China. Accepted papers in APASE 2026 will be submitted for publication into EI Compendex(JPCS). APASE 2026 conference focuses on innovations in aviation and aerospace by fostering knowledge and new ideas for research work within the community, speakers, plenary speeches, young researchers and practitioners.",
    "APASE 2026 also seeks to provide forums, oral presentations, and scientific sessions. APASE 2026 invites researchers, aerospace and aviation industry representatives, and others with an interest in the impacts of the aerospace and aviation industry to join us for what will be an exciting event.",
  ],
};

const todayKey = getTodayKey("Asia/Shanghai");

const importantDates = [
  {
    date: "APR 01",
    year: "2026",
    title: "Paper Submission Opens",
    description: "Submission portal opens for authors",
    // status: "Open",
    active: todayKey >= getMilestoneKey("APR 01", "2026")!,
  },
  {
    date: "JUL 31",
    year: "2026",
    title: "Full Paper Submission Deadline",
    description: "Final deadline for full paper submission",
    active: todayKey >= getMilestoneKey("JUL 31", "2026")!,
  },
  {
    date: "SEP 15",
    year: "2026",
    title: "Notification of Acceptance",
    description: "Acceptance results sent to authors",
    active: todayKey >= getMilestoneKey("SEP 15", "2026")!,
  },
  {
    date: "OCT 15",
    year: "2026",
    title: "Camera-Ready Paper Submission",
    description: "Revised final papers due",
    active: todayKey >= getMilestoneKey("OCT 15", "2026")!,
  },
  {
    date: "OCT 31",
    year: "2026",
    title: "Early-Bird Registration Deadline",
    description: "Last day to register at the early-bird rate",
    active: todayKey >= getMilestoneKey("OCT 31", "2026")!,
  },
  {
    date: "NOV 30",
    year: "2026",
    title: "Regular Registration Deadline",
    description: "Standard registration closes",
    active: todayKey >= getMilestoneKey("NOV 30", "2026")!,
  },
  {
    date: "DEC 20–22",
    year: "2026",
    title: "Conference Dates",
    description: "APASE 2026 conference in Harbin, China",
    active: todayKey >= getMilestoneKey("DEC 20", "2026")!,
  },
];

const technicalTracks = [
  {
    id: "astronomy-space-science",
    title: "Astronomy & Space Science",
    covers: [
      "Astrophysics",
      "Cosmology",
      "Planetary Science",
      "Solar Physics",
      "Search for Exoplanets",
    ],
  },
  {
    id: "mission-design-systems-engineering",
    title: "Space Mission Design & Systems Engineering",
    covers: [
      "End-to-end mission design",
      "Conceptual studies",
      "Systems architecture",
      "Systems integration",
      "Mission analysis for robotic and human spaceflight",
    ],
  },
  {
    id: "rf-microwave-antennas-radio-science",
    title: "RF/Microwave Systems, Antennas & Radio Science",
    covers: [
      "Advanced antenna design",
      "RF front-end electronics",
      "Microwave components",
      "Telecommunication systems",
      "Radar systems",
      "Radio science experiments for planetary exploration",
    ],
  },
  {
    id: "gnc",
    title: "Guidance, Navigation, & Control (GNC)",
    covers: [
      "Attitude determination and control",
      "Orbit determination and propagation",
      "Autonomous navigation",
      "GNC algorithms for all flight phases",
    ],
  },
  {
    id: "small-satellites-emerging-technologies",
    title: "Small Satellites & Emerging Space Technologies",
    covers: [
      "CubeSats",
      "SmallSats",
      "Distributed spacecraft systems",
      "Miniaturized technologies",
      "Rapid prototyping for low-cost missions",
    ],
  },
  {
    id: "spacecraft-launch-vehicle-subsystems",
    title: "Spacecraft & Launch Vehicle Subsystems",
    covers: [
      "Power systems",
      "Propulsion",
      "Thermal control",
      "Structures",
      "Mechanisms",
      "Launch vehicle stages",
    ],
  },
  {
    id: "earth-observation-remote-sensing-gnss",
    title: "Earth Observation, Remote Sensing & GNSS Applications",
    covers: [
      "Optical and radar remote sensing",
      "Hyperspectral imaging",
      "Data processing and analysis",
      "Calibration and validation",
      "GNSS applications for science and engineering",
    ],
  },
  {
    id: "avionics-electronics-onboard-computing",
    title: "Avionics, Electronics & Onboard Computing",
    covers: [
      "On-board computers",
      "FPGAs",
      "Radiation-hardened electronics",
      "COTS-based electronics",
      "Data handling systems",
      "Advanced electronics architectures",
    ],
  },
  {
    id: "air-vehicle-systems-uas",
    title: "Air Vehicle Systems & Unmanned Aerial Systems (UAS)",
    covers: [
      "Aircraft design and technologies",
      "High-altitude platforms",
      "Drones",
      "UAS aerodynamics",
      "Propulsion",
      "Flight mechanics",
    ],
  },
  {
    id: "space-ground-operations",
    title: "Space & Ground Operations",
    covers: [
      "Mission operations",
      "Ground station networks",
      "Data acquisition and distribution",
      "Command and control systems",
      "LEOP logistics",
    ],
  },
  {
    id: "space-biology-life-support",
    title: "Space Biology & Life Support Systems",
    covers: [
      "Astrobiology",
      "Effects of space environment on living organisms",
      "Biology in microgravity",
      "Life support systems for human spaceflight",
    ],
  },
  {
    id: "aerospace-education-workforce-development",
    title: "Aerospace Education & Workforce Development",
    covers: [
      "Innovative teaching methods",
      "Student-led projects such as CanSats",
      "Outreach programs",
      "Next-generation aerospace workforce development",
    ],
  },
];

const publications = [
  {
    year: "APASE 2026",
    title:
      "The 5th Asia-Pacific Aerospace Science and Engineering Symposium - International Conference",
    publisher: null,
    location: "Harbin, China",
    featured: true,
    href: null,
  },
  {
    year: "IAAI 2025",
    title:
      "The 4th Innovation Aviation & Aerospace Industry - International Conference",
    publisher: null,
    location: "Pattaya, Thailand",
    featured: false,
    href: "https://drive.google.com/file/d/1kBE-rOmUJGK4BNzfwIWMIrUgbYbJzgZa/view?usp=sharing",
  },
  {
    year: "IAAI 2024",
    title:
      "The 3rd Innovation Aviation & Aerospace Industry - International Conference",
    publisher: null,
    location: "Bangkok, Thailand",
    featured: false,
    href: "https://drive.google.com/file/d/15wECvdKK5eAgL7daUuVf24DRzANt1w55/view?usp=drive_link",
  },
  {
    year: "IAAI 2021",
    title:
      "Innovation Aviation & Aerospace Industry - International Conference",
    publisher: "MDPI",
    location: "Chiang Mai, Thailand",
    featured: false,
    href: "https://drive.google.com/file/d/1FpfGemDJ5rFgFe0pRgGUoey5Y_ZX9IHq/view?usp=drive_link",
  },
  {
    year: "IAAI 2020",
    title:
      "Innovation Aviation & Aerospace Industry - International Conference",
    publisher: "MDPI",
    location: "Chumphon, Thailand",
    featured: false,
    href: "https://drive.google.com/file/d/1kXA_OOzkD4vt7YaIZ6P76qiQOlyjzFAu/view?usp=drive_link",
  },
];

export const institutionalSupport = {
  sponsors: [
    { name: "APSCO", logo: getAssetPath("/logo/sponsors/apsco-logo.png") },
    { name: "NRCT", logo: getAssetPath("/logo/sponsors/nrct-logo.png") },
  ],
  assistances: [
    { name: "CRA", logo: getAssetPath("/logo/assistances/cra-logo.png") },
    { name: "KU", logo: getAssetPath("/logo/assistances/ku-logo.png") },
    { name: "MU", logo: getAssetPath("/logo/assistances/mu-logo.png") },
    { name: "PIM", logo: getAssetPath("/logo/assistances/pim-logo.png") },
    { name: "SWU", logo: getAssetPath("/logo/assistances/swu-logo.png") },
    { name: "MUT", logo: getAssetPath("/logo/assistances/mut-logo.png") },
  ],
};

export default function Home() {
  return (
    <main className="pt-24">
      <section className="relative px-12 py-20 max-w-[1440px] mx-auto overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 z-10">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-container text-on-primary-container font-bold text-xs tracking-widest uppercase mb-6">
              {heroData.badge}
            </span>
            <h1 className="font-headline text-6xl font-extrabold text-[#1A365D] leading-[0.95] tracking-tighter mb-8">
              {heroData.title.main} <br />
              <span className="text-primary italic">
                {heroData.title.highlighted}
              </span>
            </h1>
            <p className="font-body text-xl text-on-surface-variant max-w-xl mb-12 leading-relaxed">
              {heroData.description}
            </p>
          </div>
          <div className="lg:col-span-5 relative">
            <div className="aspect-square bg-surface-container-low rounded-full absolute -top-12 -right-12 w-[120%] -z-10 blur-3xl opacity-50"></div>
            <div className="relative bg-white p-4 rounded-2xl editorial-shadow transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <Image
                className="w-full h-[500px] object-cover rounded-xl"
                alt={heroData.image.alt}
                src={heroData.image.src}
                width={500}
                height={500}
              />
              <div className="absolute -bottom-6 -left-6 bg-primary text-on-primary p-6 rounded-xl shadow-2xl max-w-[200px]">
                <p className="text-3xl font-black mb-1">
                  {heroData.eventInfo.year}
                </p>
                <p className="text-xs font-bold uppercase tracking-widest opacity-80 leading-tight">
                  {heroData.eventInfo.location}
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Organizer Logos */}
        <div className="mt-24 pt-12 border-t border-slate-200/50 flex flex-col md:flex-row flex-wrap items-center gap-16">
          <p className="font-bold text-sm text-outline tracking-widest uppercase">
            Organized By
          </p>
          <div className="flex flex-wrap gap-12 items-center justify-center">
            {heroData.organizers.map((org, index) => (
              <div
                key={index}
                className="relative h-20 w-36 flex items-center justify-center"
                title={org.name}
              >
                <Image
                  src={org.logo}
                  alt={org.name}
                  width={128}
                  height={48}
                  className="h-full w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-12 py-24 bg-white">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-4">
              <h2 className="font-headline text-4xl font-extrabold text-[#1A365D] leading-tight sticky top-32">
                {aboutData.title.main} <br />
                <span className="text-primary">
                  {aboutData.title.highlighted}
                </span>
              </h2>
            </div>
            <div className="lg:col-span-8">
              <div className="max-w-3xl space-y-8">
                <p className="font-body text-2xl text-on-surface leading-snug font-medium">
                  {aboutData.intro}
                </p>
                {aboutData.descriptions.map((desc, index) => (
                  <p
                    key={index}
                    className="font-body text-lg text-on-surface-variant leading-relaxed"
                  >
                    {desc}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="px-12 py-24 max-w-[1440px] mx-auto">
        <section className="mb-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <h2 className="text-4xl font-extrabold tracking-tight mb-2">
                Important Dates
              </h2>
              <p className="text-on-surface-variant">TBD</p>
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
      </div>

      {/* <QuickAccessBento /> */}

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

      <section id="publications" className="px-12 py-24 max-w-[1440px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <h2 className="font-headline text-4xl font-extrabold text-[#1A365D] mb-4">
              Publication &amp; Proceedings
            </h2>
            <p className="text-on-surface-variant max-w-lg">
              All accepted papers will be published in the Conference
              Proceedings
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

      <section className="px-6 sm:px-12 py-20 sm:py-24 bg-white">
        <div className="max-w-[1440px] mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h3 className="font-headline text-2xl sm:text-3xl font-bold text-on-surface-variant uppercase tracking-[0.2em]">
              Institutional Support
            </h3>
          </div>

          <div className="space-y-10 sm:space-y-14">
            {[
              { title: "Sponsors", items: institutionalSupport.sponsors },
              { title: "Assistances", items: institutionalSupport.assistances },
            ].map((group) => (
              <div key={group.title} className="space-y-4">
                <h4 className="text-center font-headline text-sm sm:text-base font-bold text-[#1A365D] uppercase tracking-[0.24em]">
                  {group.title}
                </h4>

                <div className="flex flex-wrap justify-center gap-1 sm:gap-2 items-center">
                  {group.items.map((org) => (
                    <div
                      key={org.name}
                      className="flex min-h-36 w-[160px] sm:w-[260px] items-center justify-center px-2 py-4"
                      title={org.name}
                    >
                      <Image
                        src={org.logo}
                        alt={org.name}
                        width={320}
                        height={160}
                        className="mx-auto h-24 sm:h-28 w-auto max-w-full object-contain"
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
