import Image from "next/image";
import Link from "next/link";
import { Globe, Mail, Share2, LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Globe,
  Mail,
  Share2,
};

const footerData = {
  brand: {
    name: "APASE 2026",
    description:
      "Advancing the future of applied sciences through global collaboration and rigorous academic exchange.",
  },
  social: [
    { icon: "Globe", href: "/", label: "Website" },
    { icon: "Mail", href: "mailto:info@apase.org", label: "Email" },
  ],
  sections: [
    {
      title: "Conference",
      links: [
        { label: "Submission", href: "/submission" },
        { label: "Templates", href: "/submission" },
        { label: "Call for Papers", href: "/submission" },
        { label: "Committee", href: "/committee" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Past Proceedings", href: "/#publications" },
        { label: "Venue & Travel", href: "/attendance" },
        { label: "Visa Info", href: "/attendance#visa" },
        { label: "Registration", href: "/registration" },
      ],
    },
  ],
  contact: {
    title: "Contact Us",
    info: ["Conference Secretariat", "Email: TBD", "Tel: TBD"],
    hours: ["Office Hours: Mon - Fri", "09:00 - 18:00 (CST)"],
  },
  copyright:
    "© 2026 APASE Conference. All rights reserved. Designed for excellence in academic curation.",
};

export default function Footer() {
  return (
    <footer className="bg-slate-50 w-full mt-auto border-t-0">
      <div className="w-full py-16 px-12 grid grid-cols-1 md:grid-cols-4 gap-12 max-w-[1440px] mx-auto">
        {/* Brand Section */}
        <div className="md:col-span-1">
          <Link href="/" className="inline-block mb-6">
            <Image
              src="/logo/apase-logo.png"
              alt="APASE Logo"
              width={150}
              height={60}
              className="h-16 w-auto"
            />
          </Link>
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
