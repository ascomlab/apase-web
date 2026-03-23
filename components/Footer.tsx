import Link from "next/link";
import { Globe, Mail, Share2 } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-50 w-full mt-auto border-t-0">
      <div className="w-full py-16 px-12 grid grid-cols-1 md:grid-cols-4 gap-12 max-w-[1440px] mx-auto">
        <div className="md:col-span-1">
          <div className="font-headline font-extrabold text-[#1A365D] text-2xl mb-6">
            APASE 2026
          </div>
          <p className="font-body text-sm leading-relaxed text-slate-500 mb-8">
            Advancing the future of applied sciences through global
            collaboration and rigorous academic exchange.
          </p>
          <div className="flex gap-4">
            <Link
              href="#"
              className="text-slate-400 hover:text-[#1A365D] transition-colors"
            >
              <Globe className="w-5 h-5" />
            </Link>
            <Link
              href="#"
              className="text-slate-400 hover:text-[#1A365D] transition-colors"
            >
              <Mail className="w-5 h-5" />
            </Link>
            <Link
              href="#"
              className="text-slate-400 hover:text-[#1A365D] transition-colors"
            >
              <Share2 className="w-5 h-5" />
            </Link>
          </div>
        </div>
        <div>
          <h5 className="font-bold text-[#1A365D] mb-6">Conference</h5>
          <ul className="space-y-4 font-body text-sm">
            <li>
              <Link
                href="#"
                className="text-slate-500 hover:text-[#1A365D] hover:underline transition-colors"
              >
                Submission
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-slate-500 hover:text-[#1A365D] hover:underline transition-colors"
              >
                Templates
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-slate-500 hover:text-[#1A365D] hover:underline transition-colors"
              >
                Call for Papers
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-slate-500 hover:text-[#1A365D] hover:underline transition-colors"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h5 className="font-bold text-[#1A365D] mb-6">Resources</h5>
          <ul className="space-y-4 font-body text-sm">
            <li>
              <Link
                href="#"
                className="text-slate-500 hover:text-[#1A365D] hover:underline transition-colors"
              >
                Past Proceedings
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-slate-500 hover:text-[#1A365D] hover:underline transition-colors"
              >
                Venue &amp; Travel
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-slate-500 hover:text-[#1A365D] hover:underline transition-colors"
              >
                Visa Info
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-slate-500 hover:text-[#1A365D] hover:underline transition-colors"
              >
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h5 className="font-bold text-[#1A365D] mb-6">Contact Us</h5>
          <p className="font-body text-sm leading-relaxed text-slate-500 mb-4">
            Conference Secretariat
            <br />
            Email: info@apase.org
            <br />
            Tel: +81 03-XXXX-XXXX
          </p>
          <p className="font-body text-sm leading-relaxed text-slate-500">
            Office Hours: Mon - Fri
            <br />
            09:00 - 18:00 (JST)
          </p>
        </div>
      </div>
      <div className="max-w-[1440px] mx-auto px-12 py-8 border-t border-slate-200">
        <p className="font-body text-xs text-slate-400">
          © 2026 APASE Conference. All rights reserved. Designed for excellence
          in academic curation.
        </p>
      </div>
    </footer>
  );
}
