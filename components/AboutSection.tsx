export default function AboutSection() {
  return (
    <section className="px-12 py-24 bg-white">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-4">
            <h2 className="font-headline text-4xl font-extrabold text-[#1A365D] leading-tight sticky top-32">
              About the <br />
              <span className="text-primary">Conference</span>
            </h2>
          </div>
          <div className="lg:col-span-8">
            <div className="max-w-3xl space-y-8">
              <p className="font-body text-2xl text-on-surface leading-snug font-medium">
                The Asia-Pacific Applied Science and Engineering (APASE)
                conference is a premier platform for researchers, scholars, and
                industry professionals to share groundbreaking research and
                discuss future trends.
              </p>
              <p className="font-body text-lg text-on-surface-variant leading-relaxed">
                Established as a beacon of interdisciplinary excellence, APASE
                brings together the brightest minds to tackle global challenges
                through the lens of physics and engineering. Our community
                fosters a unique environment where theoretical insights meet
                practical applications, driving the next generation of
                technological innovation.
              </p>
              <div className="p-8 bg-surface-container-low rounded-2xl border-l-4 border-primary">
                <h4 className="font-headline text-xl font-bold text-[#1A365D] mb-3">
                  2026 Theme: The Digital Curator
                </h4>
                <p className="font-body text-on-surface-variant leading-relaxed">
                  The 2026 edition focuses on{" "}
                  <span className="text-primary font-semibold">
                    'The Digital Curator'
                  </span>{" "}
                  theme, exploring the intersection of digital systems and
                  applied engineering. This theme addresses how sophisticated
                  digital frameworks are now essential in managing,
                  interpreting, and applying complex physical data in modern
                  engineering workflows.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-8">
                <div>
                  <p className="text-4xl font-black text-primary mb-1">500+</p>
                  <p className="text-xs font-bold uppercase tracking-widest text-outline">
                    Delegates
                  </p>
                </div>
                <div>
                  <p className="text-4xl font-black text-primary mb-1">45</p>
                  <p className="text-xs font-bold uppercase tracking-widest text-outline">
                    Countries
                  </p>
                </div>
                <div>
                  <p className="text-4xl font-black text-primary mb-1">120+</p>
                  <p className="text-xs font-bold uppercase tracking-widest text-outline">
                    Sessions
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
