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
    name: "Prof.Dr.Dong Qiao",
    title: "Senior Research Director",
    subtitle: "(TBD) Future of Advanced Technologies",
    image: "/images/keynote-speakers/profile-placeholder.jpg",
    imageAlt: "Professional portrait of a speaker",
    quote:
      "xLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    bio: [
      /*
      "Dr. Dong Qiao is a distinguished Full Professor within the School of Aerospace Engineering at the Beijing Institute of Technology, specializing in spacecraft orbit dynamics, autonomous navigation, and close-proximity operations for deep-space exploration. He holds a Ph.D. in Spacecraft Design from the Harbin Institute of Technology, and his research underpins critical aerospace initiatives, including orbital trajectory design for Mars and asteroid exploration, as well as communication relay mission architectures for lunar far-side soft landings. A recipient of the National Science and Technology Progress Award (Second Class), Dr. Qiao serves on the Deep Space Exploration Technology Professional Committee of the Chinese Society of Astronautics and maintains an editorial role for the journal Astrodynamics.",
      */
    ],
    abstract:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: "speaker-2",
    name: "Prof. XXXX XXXX",
    title: "Lead Technology Officer",
    subtitle: "(TBD) Advanced Systems Corporation",
    image: "/images/keynote-speakers/profile-placeholder.jpg",
    imageAlt: "Professional portrait of a speaker",
    quote:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    bio: [
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
    ],
    abstract:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.",
  },
];
