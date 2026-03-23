export const navigationLinks = [
  { href: "#", label: "Home", active: true },
  { href: "#committee", label: "Committee", active: false },
  { href: "#submission", label: "Submission", active: false },
  { href: "#registration", label: "Registration", active: false },
  { href: "#attendance", label: "Attendance", active: false },
  { href: "#history", label: "History", active: false },
];

export const heroData = {
  badge: "Annual International Conference",
  title: {
    main: "Asia-Pacific Aerospace Science &",
    highlighted: "Engineering Symposium.",
  },
  description:
    "The Digital Curator for global scientific discourse. Join leading researchers and practitioners in exploring the frontiers of physics and engineering.",
  image: {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAHY62xIWvEtciyizfQM7yYWURGSAm7K6xbGe_8Llhfd8qqvlq3HlasuEjQnK7jgxhMLuZ1jDRK4q-8DX1W_gozosOhMSJTuVp_chXBd04KFG3l_tAtx9DfoZagTOhe3oBMkmrrAn8wQXIWbZQtLb9X8AOxKBwhRia0fc3CKeo31hU3icaNLKQ2unEt1fZci9fYkQ8e85Bi_JWf0QtRDw6XQMsqb-SB94jaFduaIsgCGPcDzrnOeHQJunW5IMESn2cjQn-TkfBZ67o",
    alt: "Microscopic view of advanced physical materials",
  },
  buttons: [
    { label: "Register for Conference", primary: true },
    { label: "Download Program", primary: false },
  ],
  eventInfo: {
    year: "2026",
    location: "Osaka, Japan / Virtual Hybrid",
  },
  organizers: [
    { name: "Placeholder University Logo" },
    { name: "Placeholder Physics Institute" },
    { name: "Placeholder Tech Partner" },
  ],
};

export const aboutData = {
  title: {
    main: "About the",
    highlighted: "Conference",
  },
  intro:
    "2026 The 5th Asia-Pacific Aerospace Science and Engineering Symposium (APASE 2026).",
  descriptions: [
    "2026 The 5th Asia-Pacific Aerospace Science and Engineering Symposium (APASE 2026), the annual conference held from the year 2020 with the name of The Innovation Aviation & Aerospace Industry (IAAI)- International Conference, will take place on December 20-22, 2026(TBC). in Harbin, China. Accepted papers in APASE 2026 will be submitted for publication into EI Compendex(JPCS). APASE 2026 conference focuses on innovations in aviation and aerospace by fostering knowledge and new ideas for research work within the community, speakers, plenary speeches, young researchers and practitioners.",
    "APASE 2026 also seeks to provide forums, oral presentations, and scientific sessions. APASE 2026 invites researchers, aerospace and aviation industry representatives, and others with an interest in the impacts of the aerospace and aviation industry to join us for what will be an exciting event.",
  ],
};

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

export const importantDates = [
  {
    date: "SEP 15",
    year: "2025",
    title: "Initial Submission",
    description: "Full paper or abstract for peer review",
    status: "Open",
    active: true,
  },
  {
    date: "OCT 10",
    year: "2025",
    title: "Acceptance Notification",
    description: "Results sent to corresponding authors",
    active: false,
  },
  {
    date: "OCT 25",
    year: "2025",
    title: "Final Registration",
    description: "Registration deadline for accepted authors",
    active: false,
  },
  {
    date: "NOV 05",
    year: "2025",
    title: "Listener Deadline",
    description: "Last call for attendees without papers",
    active: false,
  },
];

export const technicalTracks = [
  {
    id: "applied-physics",
    icon: "Microscope",
    title: "Applied Physics",
    topics: [
      "Condensed Matter Physics",
      "Optics & Photonics",
      "Plasma Physics",
      "Quantum Information",
    ],
  },
  {
    id: "science-engineering",
    icon: "Settings",
    title: "Science Engineering",
    topics: [
      "Materials Science",
      "Nanotechnology",
      "Chemical Engineering",
      "Environmental Engineering",
    ],
  },
  {
    id: "computational-science",
    icon: "BarChart3",
    title: "Computational Science",
    topics: [
      "Mathematical Modeling",
      "Simulation & HPC",
      "AI in Physics",
      "Big Data Analytics",
    ],
  },
];

export const publications = [
  {
    year: "APASE 2025",
    title: "Advances in Nanoscale Physics: Review of 2025 Proceedings",
    publisher: "IEEE Xplore",
    issn: "2345-XXXX",
    featured: true,
  },
  {
    year: "APASE 2024",
    title: "Energy Transformations in Quantum Systems: 2024 Retrospective",
    publisher: "IOP Publishing",
    issn: "1987-XXXX",
    featured: false,
  },
  {
    year: "APASE 2023",
    title: "Solid State Physics and Modern Industrial Applications",
    publisher: "Springer Link",
    issn: "4567-XXXX",
    featured: false,
  },
];

export const sponsors = [
  { name: "SPONSOR ONE" },
  { name: "UNIVERSITY TWO" },
  { name: "TECH INST. THREE" },
  { name: "FOUNDATION FOUR" },
  { name: "ACADEMY FIVE" },
];

export const footerData = {
  brand: {
    name: "APASE 2026",
    description:
      "Advancing the future of applied sciences through global collaboration and rigorous academic exchange.",
  },
  social: [
    { icon: "Globe", href: "#", label: "Website" },
    { icon: "Mail", href: "#", label: "Email" },
    { icon: "Share2", href: "#", label: "Share" },
  ],
  sections: [
    {
      title: "Conference",
      links: [
        { label: "Submission", href: "#" },
        { label: "Templates", href: "#" },
        { label: "Call for Papers", href: "#" },
        { label: "Contact", href: "#" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Past Proceedings", href: "#" },
        { label: "Venue & Travel", href: "#" },
        { label: "Visa Info", href: "#" },
        { label: "Privacy Policy", href: "#" },
      ],
    },
  ],
  contact: {
    title: "Contact Us",
    info: [
      "Conference Secretariat",
      "Email: info@apase.org",
      "Tel: +81 03-XXXX-XXXX",
    ],
    hours: ["Office Hours: Mon - Fri", "09:00 - 18:00 (JST)"],
  },
  copyright:
    "© 2026 APASE Conference. All rights reserved. Designed for excellence in academic curation.",
};
