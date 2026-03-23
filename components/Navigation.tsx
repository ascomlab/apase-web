import Link from "next/link";
import { navigationLinks } from "@/data/content";

export default function Navigation() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md bg-surface-container-low">
      <div className="flex justify-between items-center px-12 py-4 max-w-[1440px] mx-auto">
        <Link
          href="/"
          className="font-headline text-2xl font-black text-[#1A365D] tracking-tighter"
        >
          APASE 2026
        </Link>
        <div className="hidden md:flex gap-8 items-center">
          {navigationLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`font-headline font-bold tracking-tight text-lg transition-colors ${
                link.active
                  ? "text-[#1A365D] border-b-2 border-[#1A365D] pb-1"
                  : "text-slate-500 hover:text-[#1A365D]"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
        <button className="bg-gradient-to-br from-primary to-primary-dim text-on-primary px-6 py-2.5 rounded-md font-semibold tracking-wide hover:scale-95 transition-all duration-200">
          Submit Paper
        </button>
      </div>
    </nav>
  );
}
