import { aboutData } from "@/data/content";

export default function AboutSection() {
  return (
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
  );
}
