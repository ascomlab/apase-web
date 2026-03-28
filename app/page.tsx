import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
// import QuickAccessBento from "@/components/QuickAccessBento";
import KeyMilestonesSection from "@/components/ImportantDatesSection";
import TechnicalTracksSection from "@/components/TechnicalTracksSection";
import PublicationsSection from "@/components/PublicationsSection";
import SponsorsSection from "@/components/SponsorsSection";

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

export default function Home() {
  return (
    <main className="pt-24">
      <HeroSection />
      <AboutSection />
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
      <KeyMilestonesSection />
      <TechnicalTracksSection />
      <PublicationsSection />
      <SponsorsSection />
    </main>
  );
}
