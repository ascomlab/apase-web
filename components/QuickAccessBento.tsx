import Link from "next/link";
import { FileText, File, Code2, Megaphone, UserCheck, ArrowRight } from "lucide-react";

export default function QuickAccessBento() {
  return (
    <section className="px-12 py-16 bg-surface-container-low">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Link
            href="#"
            className="md:col-span-2 group relative overflow-hidden bg-primary p-10 rounded-2xl text-on-primary transition-transform hover:-translate-y-1"
          >
            <div className="relative z-10 h-full flex flex-col justify-between">
              <FileText className="w-10 h-10" />
              <div>
                <h3 className="text-2xl font-bold mb-2">Click to Submit</h3>
                <p className="opacity-80 text-sm">
                  Official portal for abstract and full paper submissions via
                  CMT platform.
                </p>
              </div>
            </div>
          </Link>
          <Link
            href="#"
            className="bg-surface-container-lowest p-8 rounded-2xl flex flex-col justify-between group hover:bg-primary-container transition-colors"
          >
            <File className="text-primary w-8 h-8" />
            <h3 className="font-bold text-lg mt-8 group-hover:text-on-primary-container transition-colors">
              MS Word Template
            </h3>
          </Link>
          <Link
            href="#"
            className="bg-surface-container-lowest p-8 rounded-2xl flex flex-col justify-between group hover:bg-primary-container transition-colors"
          >
            <Code2 className="text-primary w-8 h-8" />
            <h3 className="font-bold text-lg mt-8 group-hover:text-on-primary-container transition-colors">
              LaTeX Template
            </h3>
          </Link>
          <Link
            href="#"
            className="bg-surface-container-lowest p-8 rounded-2xl flex flex-col justify-between group hover:bg-primary-container transition-colors"
          >
            <Megaphone className="text-primary w-8 h-8" />
            <h3 className="font-bold text-lg mt-8 group-hover:text-on-primary-container transition-colors">
              Call for Paper
            </h3>
          </Link>
          <Link
            href="#"
            className="md:col-span-3 bg-white p-8 rounded-2xl flex items-center justify-between editorial-shadow"
          >
            <div className="flex items-center gap-6">
              <div className="bg-secondary-container p-4 rounded-xl">
                <UserCheck className="text-on-secondary-container w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-xl">Listener Registration</h3>
                <p className="text-on-surface-variant text-sm">
                  Join as an attendee without paper presentation
                </p>
              </div>
            </div>
            <ArrowRight className="text-primary w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
