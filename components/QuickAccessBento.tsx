import Link from "next/link";
import {
  FileText,
  File,
  Code2,
  Megaphone,
  UserCheck,
  ArrowRight,
  LucideIcon,
} from "lucide-react";
import { quickAccessItems } from "@/data/content";

const iconMap: Record<string, LucideIcon> = {
  FileText,
  File,
  Code2,
  Megaphone,
  UserCheck,
};

export default function QuickAccessBento() {
  return (
    <section className="px-12 py-16 bg-surface-container-low">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {quickAccessItems.map((item) => {
            const Icon = iconMap[item.icon];

            if (item.primary) {
              return (
                <Link
                  key={item.id}
                  href="#"
                  className="md:col-span-2 group relative overflow-hidden bg-primary p-10 rounded-2xl text-on-primary transition-transform hover:-translate-y-1"
                >
                  <div className="relative z-10 h-full flex flex-col justify-between">
                    <Icon className="w-10 h-10" />
                    <div>
                      <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                      {item.description && (
                        <p className="opacity-80 text-sm">{item.description}</p>
                      )}
                    </div>
                  </div>
                </Link>
              );
            }

            if (item.special) {
              return (
                <Link
                  key={item.id}
                  href="#"
                  className={`md:col-span-${item.colSpan} bg-white p-8 rounded-2xl flex items-center justify-between editorial-shadow`}
                >
                  <div className="flex items-center gap-6">
                    <div className="bg-secondary-container p-4 rounded-xl">
                      <Icon className="text-on-secondary-container w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl">{item.title}</h3>
                      {item.description && (
                        <p className="text-on-surface-variant text-sm">
                          {item.description}
                        </p>
                      )}
                    </div>
                  </div>
                  <ArrowRight className="text-primary w-5 h-5" />
                </Link>
              );
            }

            return (
              <Link
                key={item.id}
                href="#"
                className="bg-surface-container-lowest p-8 rounded-2xl flex flex-col justify-between group hover:bg-primary-container transition-colors"
              >
                <Icon className="text-primary w-8 h-8" />
                <h3 className="font-bold text-lg mt-8 group-hover:text-on-primary-container transition-colors">
                  {item.title}
                </h3>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
