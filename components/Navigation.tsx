import Link from "next/link";

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
          <Link
            href="#"
            className="font-headline font-bold tracking-tight text-lg text-[#1A365D] border-b-2 border-[#1A365D] pb-1"
          >
            Home
          </Link>
          <Link
            href="#committee"
            className="font-headline font-bold tracking-tight text-lg text-slate-500 hover:text-[#1A365D] transition-colors"
          >
            Committee
          </Link>
          <Link
            href="#submission"
            className="font-headline font-bold tracking-tight text-lg text-slate-500 hover:text-[#1A365D] transition-colors"
          >
            Submission
          </Link>
          <Link
            href="#registration"
            className="font-headline font-bold tracking-tight text-lg text-slate-500 hover:text-[#1A365D] transition-colors"
          >
            Registration
          </Link>
          <Link
            href="#attendance"
            className="font-headline font-bold tracking-tight text-lg text-slate-500 hover:text-[#1A365D] transition-colors"
          >
            Attendance
          </Link>
          <Link
            href="#history"
            className="font-headline font-bold tracking-tight text-lg text-slate-500 hover:text-[#1A365D] transition-colors"
          >
            History
          </Link>
        </div>
        <button className="bg-gradient-to-br from-primary to-primary-dim text-on-primary px-6 py-2.5 rounded-md font-semibold tracking-wide hover:scale-95 transition-all duration-200">
          Submit Paper
        </button>
      </div>
    </nav>
  );
}
