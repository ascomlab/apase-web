export interface Speaker {
  id: string;
  name: string;
  title: string;
  subtitle: string;
  image: string;
  imageAlt: string;
  quote: string;
  bio: string[];
  abstract: string;
}

export const speakers: Speaker[] = [
  {
    id: "speaker-1",
    name: "Prof. Dr. Dong Qiao",
    title: "Senior Research Director",
    subtitle: " ",
    image: "/images/keynote-speakers/ProfDongQiao.jpg",
    imageAlt: "Professional portrait of a speaker",
    quote:
      "xLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    bio: [
      "Dr. Dong Qiao is a distinguished Full Professor within the School of Astronautics, Beijing Institute of Technology, specializing in spacecraft orbit dynamics, autonomous navigation, and close-proximity operations for deep-space exploration.",
      "He holds a Ph.D. in Spacecraft Design from the Harbin Institute of Technology, and his research underpins critical aerospace initiatives, including orbital trajectory design for Mars and asteroid exploration, as well as communication relay mission architectures for lunar far-side soft landings. A recipient of the National Science and Technology Progress Award (Second Class), Dr. Qiao serves on the Deep Space Exploration Technology Professional Committee of the Chinese Society of Astronautics and maintains an editorial role for the journal Astrodynamics.",
    ],
    abstract:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },

  {
    id: "speaker-2",
    name: "Prof.Dr.Yang GAO",
    title: " ",
    subtitle: " ",
    image: "/images/keynote-speakers/profGao.jpg",
    imageAlt: "Professional portrait of a speaker",
    quote:
      "xLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    bio: [
      "Professor Yang Gao is a world-renowned space roboticist and academic leader who serves as a Professor in the Department of Mechanical and Aerospace Engineering at the Hong Kong University of Science and Technology (HKUST), where she is also the Director of the Center for AI Robotics in Space Sustainability (CAIRSS) and Co-Director of the Space Science and Technology Institute. With over two decades of experience in the development of robotics and autonomous systems designed for extreme environments—such as space, nuclear facilities, and deep subsurfaces—her core research specializes in robotic sensing and perception, visual guidance, navigation, and control (GNC), and energy-optimized biomimetic mechanisms. Professor Gao has served as the Principal Investigator on numerous high-profile, internationally teamed research projects, and her pioneering contributions have directly supported major real-world space missions, including the European Space Agency's (ESA) ExoMars, Proba3, and lunar VMMO missions, the United Kingdom's space exploration programs, and China's Chang'e-3 and Chang'e-8 lunar missions.",
      
    ],
    abstract:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
];
