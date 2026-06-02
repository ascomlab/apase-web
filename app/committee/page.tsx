import { getAssetPath } from "../utils";

const keynoteSpeakers = [
  {
    layout: "featured",
    title: "Opening Keynote",
    name: "Prof. Youfu Li",
    role: "Prof. Li received the B.S. and M.S. degrees in electrical engineering from Harbin Institute of Technology China. He obtained the PhD degree from the Robotics Research Group, Dept of Engineering",
    image: getAssetPath("/images/keynote-speakers/YF.png"),
    alt: "Prof. Youfu Li",
  },
  {
    layout: "stacked",
    name: "TBD",
    role: "TBD",
    image: getAssetPath("/images/keynote-speakers/profile-placeholder.jpg"),
    alt: "TBD",
  },
  {
    layout: "stacked",
    name: "TBD",
    role: "TBD",
    image: getAssetPath("/images/keynote-speakers/profile-placeholder.jpg"),
    alt: "TBD",
  },
];

const organizingCommittee = [
  {
    role: "Honorary Chair",
    name: "Assoc. Prof. Dr. Komsan Maleesee",
    affiliation: "King Mongkut's Institute of Technology Ladkrabang, Thailand",
  },
  {
    role: "Honorary Chair",
    name: "Dr. Wiphu Rujopakarn",
    affiliation:
      "National Astronomical Research Institute of Thailand, Thailand",
  },
   {
    role: "Honorary Chair",
    name: "Mr. Hu Zhaobin",
    affiliation:
      "Deputy Director of Deep Space Exploration Laboratory, China",
  },
  {
    role: "General Chairs",
    name: "Prof. Xinghong Zhang",
    affiliation: "Harbin Institute of Technology, China",
  },
  {
    role: "General Chairs",
    name: "Asst. Prof. Dr. Soemsak Yooyen",
    affiliation: "King Mongkut's Institute of Technology Ladkrabang,Thailand",
  },
  
  {
    role: "Program Committee Chairs",
    name: "Prof. Xiyang Zhi",
    affiliation: "Harbin Institute of Technology, China",
  },
  {
    role: "Executive Committee Chairs",
    name: "Prof. Zexu Zhang",
    affiliation: "Harbin Institute of Technology, China",
  },
  
  {
    role: "Executive Committee Chairs",
    name: "Prof. Chunxiang Cao",
    affiliation:
      "Aerospace Information research Institute,Chinese Academy of Sciences,China",
  },
  {
    role: "Executive Committee Chairs",
    name: "Prof. Zhao You",
    affiliation:
      "National Astronomical Observatories,Chinese Academy of Sciences,China",
  },
  {
    role: "Executive Committee Chairs",
    name: "Assoc. Prof. Dr. Athikom Roeksabutr",
    affiliation: "Mahanakorn University of Technology & EEAAT,Thailand",
  },
  {
    role: "Publication Chairs",
    name: "Prof. Shuai Yuan",
    affiliation: "Harbin Institute of Technology, China",
  },
  {
    role: "Local Chair",
    name: "Prof. Wente Pan",
    affiliation: "Harbin Institute of Technology, China",
  },
];

const technicalCommittee = [
  {
    name: "Prof. Alessandro Bartoloni",
    description: "Education & Outreach Coordinator of the Moon Village Association",
    badge: null,
  },
  {
    name: "Mr. Liu Wangwang",
    description: "Deep Space Exploration Laboratory",
    badge: null,
  },
  {
    name: "Ms. Liu Ying",
    description: "Deep Space Exploration Laboratory",
    badge: null,
  },
  {
    name: "Assoc. Prof. Dr. Zhang Bing",
    description: "Deep Space Exploration Laboratory",
    badge: null,
  },
  {
    name: "Dr. Pang Shunxiang",
    description: "Deep Space Exploration Laboratory",
    badge: null,
  },
  {
    name: "Asst. Prof. Dr. Patcharin Kamsing",
    description: "King Mongkut's Institute of Technology Ladkrabang, Thailand",
    badge: null,
  },
  {
    name: "Dr. Peerapong Torteeka",
    description: "National Astronomical Research Institute of Thailand, Thailand",
    badge: null,
  },
  {
    name: "Assoc. Prof. Dr. Pisit Boonsrimuang",
    description: "King Mongkut's Institute of Technology Ladkrabang, Thailand",
    badge: null,
  },
  {
    name: "Assoc. Prof. Dr. Di LIU",
    description: "Research Center for Eco-Environment Sciences, Chinese Academy of Sciences, China",
    badge: null,
  },
  {
    name: "Assoc. Prof. Dr. Kritsanapong Phansri",
    description:
      "Rajamangala University of Technology Isan, Khon Kaen Campus, Thailand",
    badge: null,
  },

  {
    name: "Asst. Prof. Dr. Prasert Prapamonthon",
    description: "King Mongkut's Institute of Technology Ladkrabang, Thailand",
    badge: null,
  },
  {
    name: "Asst. Prof. Dr. Pititat Itsariyapinyo",
    description: "King Mongkut's Institute of Technology Ladkrabang, Thailand",
    badge: null,
  },
  {
    name: "Asst. Prof. Dr. Suphongsa Khetkeeree",
    description: "Mahanakorn University of Technology，Thailand",
    badge: null,
  },
  {
    name: "Asst. Prof. Dr. Wares Chancharoen",
    description: "Chulabhorn Royal Academy, Thailand",
    badge: null,
  },
  {
    name: "Asst. Prof. Dr.Sethakarn Prongnuch",
    description: "Suan Sunandha Rajabhat University, Thailand",
    badge: null,
  },
  {
    name: "Dr. Tatpong Tulyananda",
    description: "Mahidol University, Thailand",
    badge: null,
  },
  {
    name: "Dr. Potiwat Ngamkajornwiwat",
    description: "Panyapiwat Institute of Management, Thailand",
    badge: null,
  },

  {
    name: "Dr.Kullapha Chaiwongkhot",
    description: "Mahidol University, Thailand",
    badge: null,
  },

  {
    name: "Shariff Manuthasna",
    description:
      "National Astronomical Research Institute of Thailand, Thailand",
    badge: null,
  },
  {
    name: "Thanayuth Panyalert",
    description:
      "National Astronomical Research Institute of Thailand, Thailand",
    badge: null,
  },
];

export default function CommitteePage() {
  return (
    <main className="pt-32 pb-24">
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 mb-24">
        <div className="max-w-4xl">
          <span className="inline-block px-4 py-1.5 rounded-full bg-surface-container-highest text-on-surface-variant font-label text-xs font-bold tracking-widest uppercase mb-6">
            Governance &amp; Expertise
          </span>
          <h1 className="font-headline text-5xl md:text-7xl font-extrabold text-[#1A365D] tracking-tighter mb-8 leading-[1.05]">
            The Minds Behind <br />
            <span className="text-primary italic">APASE 2026</span>
          </h1>
          <p className="font-body text-xl text-on-surface-variant leading-relaxed max-w-2xl">
            {/*TBD*/}
          </p>
        </div>
      </section>

      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 mb-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4">
            <h2 className="font-headline text-4xl font-bold tracking-tighter mb-4">
              Organizing Committee
            </h2>
            <div className="w-12 h-1 bg-primary mb-4" />
            <p className="text-on-surface-variant leading-relaxed">
              {/*Insert the committee names and affiliations here.*/}
            </p>
          </div>
          <div className="lg:col-span-8">
            <div className="space-y-px">
              {organizingCommittee.map(({ role, name, affiliation }, idx) => (
                <div
                  key={name + idx}
                  className="grid grid-cols-1 md:grid-cols-2 gap-4 py-8 border-b border-surface-variant/30 px-4 -mx-4 hover:bg-surface-container-low/50 transition-colors"
                >
                  <div>
                    <span className="font-label text-[10px] font-bold text-primary tracking-widest uppercase mb-1 block">
                      {role}
                    </span>
                    <h4 className="font-headline text-xl font-bold">{name}</h4>
                  </div>
                  <div className="flex items-center text-on-surface-variant font-body">
                    <span>{affiliation}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface-container-low py-16">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-headline text-4xl font-extrabold tracking-tight mb-4 text-on-background">
              Technical Program Committee
            </h2>
            <p className="text-on-surface-variant font-body">{/*TBC*/}</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-8">
            {technicalCommittee.map((committee, idx) => (
              <div
                key={committee.name + idx}
                className="pl-4 border-l-2 border-primary/20"
              >
                <h5 className="font-headline font-bold text-lg mb-1">
                  {committee.name}
                </h5>
                <p className="text-sm text-on-surface-variant mb-2">
                  {committee.description}
                </p>
                {committee.badge && (
                  <span className="inline-block px-2 py-0.5 bg-surface-container-highest rounded text-[10px] font-bold text-primary-dim uppercase tracking-wider">
                    {committee.badge}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
