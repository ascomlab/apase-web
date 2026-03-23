import { Microscope, Settings, BarChart3, CheckCircle2 } from "lucide-react";

export default function TechnicalTracksSection() {
  return (
    <section className="bg-[#1A365D] text-white px-12 py-24">
      <div className="max-w-[1440px] mx-auto">
        <div className="mb-16">
          <h2 className="font-headline text-5xl font-extrabold mb-6 tracking-tight">
            Technical Research Tracks
          </h2>
          <div className="w-24 h-1.5 bg-primary"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-10 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-colors">
            <div className="w-12 h-12 bg-primary flex items-center justify-center rounded-lg mb-8">
              <Microscope className="text-white w-6 h-6" />
            </div>
            <h4 className="text-2xl font-bold mb-4">Applied Physics</h4>
            <ul className="space-y-4 text-slate-300">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="text-primary w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Condensed Matter Physics</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="text-primary w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Optics &amp; Photonics</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="text-primary w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Plasma Physics</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="text-primary w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Quantum Information</span>
              </li>
            </ul>
          </div>
          <div className="p-10 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-colors">
            <div className="w-12 h-12 bg-primary flex items-center justify-center rounded-lg mb-8">
              <Settings className="text-white w-6 h-6" />
            </div>
            <h4 className="text-2xl font-bold mb-4">Science Engineering</h4>
            <ul className="space-y-4 text-slate-300">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="text-primary w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Materials Science</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="text-primary w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Nanotechnology</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="text-primary w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Chemical Engineering</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="text-primary w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Environmental Engineering</span>
              </li>
            </ul>
          </div>
          <div className="p-10 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-colors">
            <div className="w-12 h-12 bg-primary flex items-center justify-center rounded-lg mb-8">
              <BarChart3 className="text-white w-6 h-6" />
            </div>
            <h4 className="text-2xl font-bold mb-4">Computational Science</h4>
            <ul className="space-y-4 text-slate-300">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="text-primary w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Mathematical Modeling</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="text-primary w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Simulation &amp; HPC</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="text-primary w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>AI in Physics</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="text-primary w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Big Data Analytics</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
