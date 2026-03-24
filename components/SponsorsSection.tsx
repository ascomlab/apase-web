import Image from "next/image";
import { institutionalSupport } from "@/data/content";

export default function SponsorsSection() {
  return (
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

              <div className="flex flex-wrap justify-center gap-4 sm:gap-6 items-center">
                {group.items.map((org) => (
                  <div
                    key={org.name}
                    className="group flex min-h-36 w-[180px] sm:w-[300px] items-center justify-center px-5 py-6"
                    title={org.name}
                  >
                    <Image
                      src={org.logo}
                      alt={org.name}
                      width={320}
                      height={160}
                      className="mx-auto h-24 sm:h-28 w-auto max-w-full object-contain grayscale opacity-75 transition-all duration-300 group-hover:grayscale-0 group-hover:opacity-100"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
