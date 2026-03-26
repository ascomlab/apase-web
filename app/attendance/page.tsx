import Footer from "@/components/Footer";

const quickLinks = ["Venue map", "Visa letter request", "Full schedule"];

const venueNotes = [
  ["Main conference center", "TBD"],
  ["Accommodation", "TBD"],
  ["Transportation", "TBD"],
];

export default function AttendancePage() {
  return (
    <>
      <main className="pt-24">
        <header className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 py-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-8">
            <span className="inline-block px-4 py-1 mb-6 rounded-full bg-surface-container-highest text-on-surface-variant font-label text-sm font-semibold tracking-wider">
              GUIDE FOR ATTENDEES
            </span>
            <h1 className="font-headline text-5xl md:text-7xl font-extrabold tracking-tighter text-on-background mb-8 leading-[0.95]">
              The Conference <br />
              <span className="text-primary italic font-medium">
                Experience
              </span>
            </h1>
            <p className="font-body text-xl text-on-surface-variant max-w-2xl leading-relaxed">
              Placeholder attendance content. Replace the venue, travel, and
              schedule details when ready.
            </p>
          </div>
          <div className="lg:col-span-4 flex flex-col items-end">
            <div className="bg-surface-container-low p-8 rounded-xl w-full border-l-4 border-primary">
              <p className="font-headline font-bold text-primary mb-2">
                QUICK LINKS
              </p>
              <ul className="space-y-3 font-label text-on-surface">
                {quickLinks.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="text-primary text-sm">→</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </header>

        <section className="bg-surface-container-low py-24">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div className="order-2 lg:order-1">
                <div className="aspect-video bg-surface-container-highest rounded-xl overflow-hidden shadow-sm relative group flex items-center justify-center">
                  <span className="text-6xl text-outline opacity-40">map</span>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="font-headline text-4xl font-bold mb-8 text-on-background">
                  Venue &amp; Location
                </h2>
                <div className="space-y-8">
                  {venueNotes.map(([title, value]) => (
                    <div key={title} className="flex gap-6">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <span className="text-primary">•</span>
                      </div>
                      <div>
                        <h3 className="font-headline font-bold text-xl mb-2">
                          {title}
                        </h3>
                        <p className="text-on-surface-variant leading-relaxed">
                          {value}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-7 bg-surface-container-lowest p-12 rounded-2xl flex flex-col justify-between min-h-[400px]">
              <div>
                <h2 className="font-headline text-3xl font-bold mb-4">
                  Conference Schedule
                </h2>
                <p className="text-on-surface-variant max-w-md">
                  Schedule placeholder content.
                </p>
              </div>
              <div className="mt-12 p-8 border-2 border-dashed border-outline-variant rounded-xl flex items-center justify-center bg-background/50">
                <div className="text-center">
                  <p className="font-headline font-bold text-primary tracking-tight">
                    Full schedule coming soon
                  </p>
                </div>
              </div>
            </div>

            <div className="md:col-span-5 bg-primary-container p-12 rounded-2xl flex flex-col justify-between">
              <div>
                <h2 className="font-headline text-3xl font-bold text-on-primary-container mb-4">
                  Visa Information
                </h2>
                <p className="text-on-primary-container/80 font-medium">
                  Replace with the final visa instructions.
                </p>
              </div>
              <div className="mt-8">
                <p className="text-sm text-on-primary-container/70 mb-6">
                  Visa guide placeholder.
                </p>
                <button className="w-full bg-on-primary-container text-primary-container py-3 rounded-lg font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity">
                  View Visa Guide
                </button>
              </div>
            </div>

            <div className="md:col-span-12 bg-surface-container p-12 rounded-2xl">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                <div className="lg:col-span-1">
                  <h2 className="font-headline text-4xl font-extrabold text-on-background leading-tight">
                    Presentation
                    <br />
                    Instructions
                  </h2>
                  <p className="mt-4 text-on-surface-variant">
                    Placeholder presentation guidance.
                  </p>
                </div>
                <div className="bg-surface-container-lowest p-8 rounded-xl shadow-sm border-t-4 border-primary">
                  <h3 className="font-headline font-bold text-xl mb-4">
                    Oral Presentations
                  </h3>
                  <p className="text-on-surface-variant text-sm mb-6">
                    Speaker instructions placeholder.
                  </p>
                  <span className="text-xs font-bold text-primary uppercase tracking-widest">
                    Guide coming soon
                  </span>
                </div>
                <div className="bg-surface-container-lowest p-8 rounded-xl shadow-sm border-t-4 border-primary">
                  <h3 className="font-headline font-bold text-xl mb-4">
                    Poster Sessions
                  </h3>
                  <p className="text-on-surface-variant text-sm mb-6">
                    Poster instructions placeholder.
                  </p>
                  <span className="text-xs font-bold text-primary uppercase tracking-widest">
                    Guide coming soon
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
