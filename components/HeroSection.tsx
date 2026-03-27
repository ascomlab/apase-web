import Image from "next/image";
import { heroData } from "@/data/content";

export default function HeroSection() {
  return (
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
      <div className="mt-24 pt-12 border-t border-slate-200/50 flex flex-wrap items-center gap-16">
        <p className="font-bold text-sm text-outline tracking-widest uppercase">
          Organized By
        </p>
        <div className="flex gap-12 items-center">
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
  );
}
