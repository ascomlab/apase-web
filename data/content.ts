import { getAssetPath } from "@/app/utils";

export const navigationLinks = [
  { href: "/", label: "Home" },
  { href: "/committee", label: "Committee" },
  { href: "/submission", label: "Submission" },
  { href: "/registration", label: "Registration" },
  { href: "/attendance", label: "Attendance" },
  { href: "/history", label: "History" },
];

export const heroData = {
  badge: "International Conference",
  title: {
    main: "Asia-Pacific Aerospace Science &",
    highlighted: "Engineering Symposium.",
  },
  description:
    "Join leading researchers and practitioners in exploring the frontiers of physics and engineering.",
  image: {
    src: getAssetPath("/images/hero-image.png"),
    alt: "Microscopic view of advanced physical materials",
  },
  buttons: [
    { label: "Register for Conference", primary: true },
    { label: "Download Program", primary: false },
  ],
  eventInfo: {
    year: "2026",
    location: "Harbin, China",
  },
  organizers: [
    { name: "HIT", logo: getAssetPath("/logo/organizors/hit-logo.png") },
    { name: "IDSEA", logo: getAssetPath("/logo/organizors/idsea-logo.png") },
    { name: "KMITL", logo: getAssetPath("/logo/organizors/kmitl-logo.png") },
    { name: "NARIT", logo: getAssetPath("/logo/organizors/narit-logo.png") },
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

const monthToNumber: Record<string, string> = {
  JAN: "01",
  FEB: "02",
  MAR: "03",
  APR: "04",
  MAY: "05",
  JUN: "06",
  JUL: "07",
  AUG: "08",
  SEP: "09",
  OCT: "10",
  NOV: "11",
  DEC: "12",
};

function getTodayKey(timeZone: string) {
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(new Date());

  const year = parts.find((part) => part.type === "year")?.value;
  const month = parts.find((part) => part.type === "month")?.value;
  const day = parts.find((part) => part.type === "day")?.value;

  return `${year}-${month}-${day}`;
}

function getMilestoneKey(date: string, year: string) {
  const firstDate = date.split(/[–-]/)[0].trim();
  const [monthLabel, day] = firstDate.split(/\s+/);
  const month = monthToNumber[monthLabel.toUpperCase()];

  if (!month || !day) {
    return null;
  }

  return `${year}-${month}-${day.padStart(2, "0")}`;
}

const todayKey = getTodayKey("Asia/Shanghai");

export const importantDates = [
  {
    date: "APR 01",
    year: "2026",
    title: "Paper Submission Opens",
    description: "Submission portal opens for authors",
    // status: "Open",
    active: todayKey >= getMilestoneKey("APR 01", "2026")!,
  },
  {
    date: "JUL 31",
    year: "2026",
    title: "Full Paper Submission Deadline",
    description: "Final deadline for full paper submission",
    active: todayKey >= getMilestoneKey("JUL 31", "2026")!,
  },
  {
    date: "SEP 15",
    year: "2026",
    title: "Notification of Acceptance",
    description: "Acceptance results sent to authors",
    active: todayKey >= getMilestoneKey("SEP 15", "2026")!,
  },
  {
    date: "OCT 15",
    year: "2026",
    title: "Camera-Ready Paper Submission",
    description: "Revised final papers due",
    active: todayKey >= getMilestoneKey("OCT 15", "2026")!,
  },
  {
    date: "OCT 31",
    year: "2026",
    title: "Early-Bird Registration Deadline",
    description: "Last day to register at the early-bird rate",
    active: todayKey >= getMilestoneKey("OCT 31", "2026")!,
  },
  {
    date: "NOV 30",
    year: "2026",
    title: "Regular Registration Deadline",
    description: "Standard registration closes",
    active: todayKey >= getMilestoneKey("NOV 30", "2026")!,
  },
  {
    date: "DEC 20–22",
    year: "2026",
    title: "Conference Dates",
    description: "APASE 2026 conference in Harbin, China",
    active: todayKey >= getMilestoneKey("DEC 20", "2026")!,
  },
];

export const technicalTracks = [
  {
    id: "astronomy-space-science",
    title: "Astronomy & Space Science",
    covers: [
      "Astrophysics",
      "Cosmology",
      "Planetary Science",
      "Solar Physics",
      "Search for Exoplanets",
    ],
  },
  {
    id: "mission-design-systems-engineering",
    title: "Space Mission Design & Systems Engineering",
    covers: [
      "End-to-end mission design",
      "Conceptual studies",
      "Systems architecture",
      "Systems integration",
      "Mission analysis for robotic and human spaceflight",
    ],
  },
  {
    id: "rf-microwave-antennas-radio-science",
    title: "RF/Microwave Systems, Antennas & Radio Science",
    covers: [
      "Advanced antenna design",
      "RF front-end electronics",
      "Microwave components",
      "Telecommunication systems",
      "Radar systems",
      "Radio science experiments for planetary exploration",
    ],
  },
  {
    id: "gnc",
    title: "Guidance, Navigation, & Control (GNC)",
    covers: [
      "Attitude determination and control",
      "Orbit determination and propagation",
      "Autonomous navigation",
      "GNC algorithms for all flight phases",
    ],
  },
  {
    id: "small-satellites-emerging-technologies",
    title: "Small Satellites & Emerging Space Technologies",
    covers: [
      "CubeSats",
      "SmallSats",
      "Distributed spacecraft systems",
      "Miniaturized technologies",
      "Rapid prototyping for low-cost missions",
    ],
  },
  {
    id: "spacecraft-launch-vehicle-subsystems",
    title: "Spacecraft & Launch Vehicle Subsystems",
    covers: [
      "Power systems",
      "Propulsion",
      "Thermal control",
      "Structures",
      "Mechanisms",
      "Launch vehicle stages",
    ],
  },
  {
    id: "earth-observation-remote-sensing-gnss",
    title: "Earth Observation, Remote Sensing & GNSS Applications",
    covers: [
      "Optical and radar remote sensing",
      "Hyperspectral imaging",
      "Data processing and analysis",
      "Calibration and validation",
      "GNSS applications for science and engineering",
    ],
  },
  {
    id: "avionics-electronics-onboard-computing",
    title: "Avionics, Electronics & Onboard Computing",
    covers: [
      "On-board computers",
      "FPGAs",
      "Radiation-hardened electronics",
      "COTS-based electronics",
      "Data handling systems",
      "Advanced electronics architectures",
    ],
  },
  {
    id: "air-vehicle-systems-uas",
    title: "Air Vehicle Systems & Unmanned Aerial Systems (UAS)",
    covers: [
      "Aircraft design and technologies",
      "High-altitude platforms",
      "Drones",
      "UAS aerodynamics",
      "Propulsion",
      "Flight mechanics",
    ],
  },
  {
    id: "space-ground-operations",
    title: "Space & Ground Operations",
    covers: [
      "Mission operations",
      "Ground station networks",
      "Data acquisition and distribution",
      "Command and control systems",
      "LEOP logistics",
    ],
  },
  {
    id: "space-biology-life-support",
    title: "Space Biology & Life Support Systems",
    covers: [
      "Astrobiology",
      "Effects of space environment on living organisms",
      "Biology in microgravity",
      "Life support systems for human spaceflight",
    ],
  },
  {
    id: "aerospace-education-workforce-development",
    title: "Aerospace Education & Workforce Development",
    covers: [
      "Innovative teaching methods",
      "Student-led projects such as CanSats",
      "Outreach programs",
      "Next-generation aerospace workforce development",
    ],
  },
];

export const publications = [
  {
    year: "APASE 2026",
    title:
      "The 5th Asia-Pacific Aerospace Science and Engineering Symposium - International Conference",
    publisher: null,
    location: "Harbin, China",
    featured: true,
    href: null,
  },
  {
    year: "IAAI 2025",
    title:
      "The 4th Innovation Aviation & Aerospace Industry - International Conference",
    publisher: null,
    location: "Pattaya, Thailand",
    featured: false,
    href: "https://drive.google.com/file/d/1kBE-rOmUJGK4BNzfwIWMIrUgbYbJzgZa/view?usp=sharing",
  },
  {
    year: "IAAI 2024",
    title:
      "The 3rd Innovation Aviation & Aerospace Industry - International Conference",
    publisher: null,
    location: "Bangkok, Thailand",
    featured: false,
    href: "https://drive.google.com/file/d/15wECvdKK5eAgL7daUuVf24DRzANt1w55/view?usp=drive_link",
  },
  {
    year: "IAAI 2021",
    title:
      "Innovation Aviation & Aerospace Industry - International Conference",
    publisher: "MDPI",
    location: "Chiang Mai, Thailand",
    featured: false,
    href: "https://drive.google.com/file/d/1FpfGemDJ5rFgFe0pRgGUoey5Y_ZX9IHq/view?usp=drive_link",
  },
  {
    year: "IAAI 2020",
    title:
      "Innovation Aviation & Aerospace Industry - International Conference",
    publisher: "MDPI",
    location: "Chumphon, Thailand",
    featured: false,
    href: "https://drive.google.com/file/d/1kXA_OOzkD4vt7YaIZ6P76qiQOlyjzFAu/view?usp=drive_link",
  },
];

export const institutionalSupport = {
  sponsors: [
    { name: "APSCO", logo: getAssetPath("/logo/sponsors/apsco-logo.png") },
    { name: "NRCT", logo: getAssetPath("/logo/sponsors/nrct-logo.png") },
  ],
  assistances: [
    { name: "CRA", logo: getAssetPath("/logo/assistances/cra-logo.png") },
    { name: "KU", logo: getAssetPath("/logo/assistances/ku-logo.png") },
    { name: "MU", logo: getAssetPath("/logo/assistances/mu-logo.png") },
    { name: "PIM", logo: getAssetPath("/logo/assistances/pim-logo.png") },
  ],
};

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
