import Link from "next/link";
import { Globe, Mail, Share2, LucideIcon } from "lucide-react";
import { footerData } from "@/data/content";

const iconMap: Record<string, LucideIcon> = {
  Globe,
  Mail,
  Share2,
};

export default function Footer() {
  return (
    <footer className="bg-slate-50 w-full mt-auto border-t-0">
      <div className="w-full py-16 px-12 grid grid-cols-1 md:grid-cols-4 gap-12 max-w-[1440px] mx-auto">
        {/* Brand Section */}
        <div className="md:col-span-1">
          <div className="font-headline font-extrabold text-[#1A365D] text-2xl mb-6">
            {footerData.brand.name}
          </div>
          <p className="font-body text-sm leading-relaxed text-slate-500 mb-8">
            {footerData.brand.description}
          </p>
          <div className="flex gap-4">
            {footerData.social.map((social) => {
              const Icon = iconMap[social.icon];
              return (
                <Link
                  key={social.label}
                  href={social.href}
                  className="text-slate-400 hover:text-[#1A365D] transition-colors"
                  aria-label={social.label}
                >
                  <Icon className="w-5 h-5" />
                </Link>
              );
            })}
          </div>
        </div>

        {/* Links Sections */}
        {footerData.sections.map((section) => (
          <div key={section.title}>
            <h5 className="font-bold text-[#1A365D] mb-6">{section.title}</h5>
            <ul className="space-y-4 font-body text-sm">
              {section.links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-slate-500 hover:text-[#1A365D] hover:underline transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Contact Section */}
        <div>
          <h5 className="font-bold text-[#1A365D] mb-6">
            {footerData.contact.title}
          </h5>
          <p className="font-body text-sm leading-relaxed text-slate-500 mb-4">
            {footerData.contact.info.map((line, index) => (
              <span key={index}>
                {line}
                {index < footerData.contact.info.length - 1 && <br />}
              </span>
            ))}
          </p>
          <p className="font-body text-sm leading-relaxed text-slate-500">
            {footerData.contact.hours.map((line, index) => (
              <span key={index}>
                {line}
                {index < footerData.contact.hours.length - 1 && <br />}
              </span>
            ))}
          </p>
        </div>
      </div>

      {/* Copyright */}
      <div className="max-w-[1440px] mx-auto px-12 py-8 border-t border-slate-200">
        <p className="font-body text-xs text-slate-400">
          {footerData.copyright}
        </p>
      </div>
    </footer>
  );
}
