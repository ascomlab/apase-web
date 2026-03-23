import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative px-12 py-20 max-w-[1440px] mx-auto overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 z-10">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary-container text-on-primary-container font-bold text-xs tracking-widest uppercase mb-6">
            Annual International Conference
          </span>
          <h1 className="font-headline text-6xl md:text-8xl font-extrabold text-[#1A365D] leading-[0.95] tracking-tighter mb-8">
            Applied Physics &amp; <br />
            <span className="text-primary italic">Science Engineering.</span>
          </h1>
          <p className="font-body text-xl text-on-surface-variant max-w-xl mb-12 leading-relaxed">
            The Digital Curator for global scientific discourse. Join leading
            researchers and practitioners in exploring the frontiers of physics
            and engineering.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-gradient-to-br from-primary to-primary-dim text-on-primary px-8 py-4 rounded-lg font-bold shadow-lg hover:shadow-xl transition-all">
              Register for Conference
            </button>
            <button className="bg-surface-container-high text-on-surface px-8 py-4 rounded-lg font-bold hover:bg-surface-container-highest transition-all">
              Download Program
            </button>
          </div>
        </div>
        <div className="lg:col-span-5 relative">
          <div className="aspect-square bg-surface-container-low rounded-full absolute -top-12 -right-12 w-[120%] -z-10 blur-3xl opacity-50"></div>
          <div className="relative bg-white p-4 rounded-2xl editorial-shadow transform rotate-3 hover:rotate-0 transition-transform duration-500">
            <Image
              className="w-full h-[500px] object-cover rounded-xl"
              alt="Microscopic view of advanced physical materials"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAHY62xIWvEtciyizfQM7yYWURGSAm7K6xbGe_8Llhfd8qqvlq3HlasuEjQnK7jgxhMLuZ1jDRK4q-8DX1W_gozosOhMSJTuVp_chXBd04KFG3l_tAtx9DfoZagTOhe3oBMkmrrAn8wQXIWbZQtLb9X8AOxKBwhRia0fc3CKeo31hU3icaNLKQ2unEt1fZci9fYkQ8e85Bi_JWf0QtRDw6XQMsqb-SB94jaFduaIsgCGPcDzrnOeHQJunW5IMESn2cjQn-TkfBZ67o"
              width={500}
              height={500}
            />
            <div className="absolute -bottom-6 -left-6 bg-primary text-on-primary p-6 rounded-xl shadow-2xl max-w-[200px]">
              <p className="text-3xl font-black mb-1">2026</p>
              <p className="text-xs font-bold uppercase tracking-widest opacity-80 leading-tight">
                Osaka, Japan / Virtual Hybrid
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Organizer Logos */}
      <div className="mt-24 pt-12 border-t border-slate-200/50 flex flex-wrap items-center gap-12 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all">
        <p className="font-bold text-sm text-outline tracking-widest uppercase">
          Organized By
        </p>
        <div className="flex gap-16 items-center">
          <div
            className="h-10 w-32 bg-slate-200 rounded animate-pulse"
            title="Placeholder University Logo"
          ></div>
          <div
            className="h-10 w-40 bg-slate-200 rounded animate-pulse"
            title="Placeholder Physics Institute"
          ></div>
          <div
            className="h-10 w-28 bg-slate-200 rounded animate-pulse"
            title="Placeholder Tech Partner"
          ></div>
        </div>
      </div>
    </section>
  );
}
