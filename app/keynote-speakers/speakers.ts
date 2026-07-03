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
    name: "Dr. XXX XXXX",
    title: "Senior Research Director",
    subtitle: "(TBD) Future of Advanced Technologies",
    image: "/images/keynote-speakers/profile-placeholder.jpg",
    imageAlt: "Professional portrait of a speaker",
    quote:
      "xLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    bio: [
      "yLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      "zDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
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
