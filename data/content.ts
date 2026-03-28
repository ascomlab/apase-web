export const navigationLinks = [
  { href: "/", label: "Home" },
  { href: "/committee", label: "Committee" },
  { href: "/submission", label: "Submission" },
  { href: "/registration", label: "Registration" },
  { href: "/attendance", label: "Attendance" },
  { href: "/#publications", label: "Proceedings" },
];

export const quickAccessItems = [
  {
    id: "submit",
    icon: "FileText",
    title: "Click to Submit",
    description:
      "Official portal for abstract and full paper submissions via CMT platform.",
    colSpan: 2,
    primary: true,
  },
  {
    id: "word-template",
    icon: "File",
    title: "MS Word Template",
    colSpan: 1,
    primary: false,
  },
  {
    id: "latex-template",
    icon: "Code2",
    title: "LaTeX Template",
    colSpan: 1,
    primary: false,
  },
  {
    id: "call-for-paper",
    icon: "Megaphone",
    title: "Call for Paper",
    colSpan: 1,
    primary: false,
  },
  {
    id: "listener-registration",
    icon: "UserCheck",
    title: "Listener Registration",
    description: "Join as an attendee without paper presentation",
    colSpan: 3,
    special: true,
  },
];

export const footerData = {
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
