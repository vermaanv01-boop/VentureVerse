export const REGISTRATION_URL = "https://forms.gle/gLbbJ6NcJmQjCRit7";

export const SITE = {
  name: "Venture Verse",
  shortName: "VV",
  year: "2026",
  tagline: "Department of CSBS & CSE · Oriental Group of Institutes",
  subtitle: "Where Technology, Innovation, and Corporate Vision Converge",
  description:
    "Venture Verse is the annual flagship techno-management fest by the Department of CSBS & CSE, Oriental Group of Institutes, Bhopal, featuring Venture Craft, Mudra, Karvaan, and UNIFEST.",
  institution:
    "Oriental Group of Institutes, Bhopal",
  eventDate: null as string | null,
  eventDateLabel: "Two action-packed days · 2026",
  locationLabel: "Oriental Group of Institutes, Bhopal",
  email: "ventureverseoist@gmail.com",
  registrationUrl: REGISTRATION_URL,
};

export const ADDRESS_LINES = [
  "Oriental Group of Institutes,",
  "Oriental Campus, Opp Patel Nagar,",
  "Raisen Road, Bhopal – 462022,",
  "Madhya Pradesh, India",
];

export type NavLink = {
  label: string;
  href: string;
};

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Events", href: "#events" },
  { label: "Schedule", href: "#roadmap" },
  { label: "Glimpses", href: "#glimpses" },
  { label: "Contact", href: "#contact" },
];

export const FOOTER_LINKS: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Events", href: "#events" },
  { label: "Schedule", href: "#roadmap" },
  { label: "Glimpses", href: "#glimpses" },
  { label: "Contact", href: "#contact" },
];

export type SocialLink = {
  label: string;
  href: string;
  icon: "instagram" | "whatsapp" | "linkedin";
};

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/venture_verse_2k26?srtk=ZDNlZDc0MzIxNw==",
    icon: "instagram",
  },
  {
    label: "WhatsApp community",
    href: "https://chat.whatsapp.com/GGx1x793cLs24Ox6vrRmFJ?s=cl&p=a&mlu=4&ilr=4",
    icon: "whatsapp",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/venture-verse-833970446",
    icon: "linkedin",
  },
];

export const CONTACT_EMAILS = [
  { label: "General enquiries", address: "ventureverseoist@gmail.com" },
  { label: "Venture Craft", address: "venturecraft2025@gmail.com" },
];

export type ContactCard = {
  title: string;
  description: string;
  note: string;
  icon: "handshake" | "mic" | "message";
  actionLabel?: string;
  actionHref?: string;
};

export const CONTACT_CARDS: ContactCard[] = [
  {
    title: "Partnerships & Sponsorships",
    description:
      "Collaborate with Central India's premier student innovation platform. Brand integration, event arenas, and direct student outreach.",
    note: "Open for 2026 Edition",
    icon: "handshake",
    actionLabel: "Partner with us",
    actionHref: "mailto:ventureverseoist@gmail.com?subject=Partnership%20Enquiry",
  },
  {
    title: "Keynotes & Industry Mentorship",
    description:
      "Share your journey with 1,500+ aspiring engineers, traders, and founders across CSBS & CSE departments.",
    note: "Speaker nominations open",
    icon: "mic",
    actionLabel: "Speak at Venture Verse",
    actionHref: "mailto:ventureverseoist@gmail.com?subject=Speaker%20Enquiry",
  },
  {
    title: "Event & Ideathon Inquiries",
    description:
      "Have questions regarding Venture Craft, Mudra, Karvaan, or UNIFEST? Our organizing committee is here to assist.",
    note: "Direct coordinator desk",
    icon: "message",
    actionLabel: "Ask a question",
    actionHref: "mailto:ventureverseoist@gmail.com?subject=General%20Enquiry",
  },
];

export type EventItem = {
  index: string;
  name: string;
  format: string;
  tagline: string;
  description: string;
  mascot: string;
  mascotAlt: string;
  registerUrl: string;
};

export const FLAGSHIP_EVENTS: EventItem[] = [
  {
    index: "01",
    name: "Venture Craft",
    format: "Ideathon",
    tagline: "Think · Adapt · Innovate",
    description:
      "Pitch disruptive tech and startup solutions to an elite jury panel. From initial idea to working prototype, innovate to dominate.",
    mascot: "/images/events/fox-mascot.jpg",
    mascotAlt: "Venture Craft fox mascot",
    registerUrl: REGISTRATION_URL,
  },
  {
    index: "02",
    name: "Mudra",
    format: "7-Day Virtual Currency Trading",
    tagline: "Analyze · Grow · Trade",
    description:
      "Test real-time market instinct in an intensive 7-day virtual trading arena. Master risk, manage portfolios, and out-trade the competition.",
    mascot: "/images/events/bull-mascot.jpg",
    mascotAlt: "Mudra bull mascot",
    registerUrl: REGISTRATION_URL,
  },
  {
    index: "03",
    name: "Karvaan",
    format: "Corporate Ramp Walk",
    tagline: "Present · Connect · Lead",
    description:
      "Step onto the corporate runway. A premier showcase of executive styling, boardroom poise, and charismatic professional presence.",
    mascot: "/images/events/peacock-mascot.jpg",
    mascotAlt: "Karvaan peacock mascot",
    registerUrl: REGISTRATION_URL,
  },
  {
    index: "04",
    name: "UNIFEST",
    format: "The Startup Carnival",
    tagline: "Showcase · Connect · Sell",
    description:
      "A vibrant startup marketplace providing dedicated stalls to exhibit, market, and sell disruptive products directly to customers while building brand presence.",
    mascot: "/images/events/unifest-mascot.png",
    mascotAlt: "UNIFEST unicorn emblem",
    registerUrl: REGISTRATION_URL,
  },
];

export type RoadmapStep = {
  label: string;
  detail: string;
  side: "left" | "right";
  progress: number;
  length: number;
  shouldFlip?: boolean;
};

export const ROADMAP_STEPS: RoadmapStep[] = [
  {
    label: "Venture Craft",
    detail: "Ideation & Hackathon",
    side: "left",
    progress: 0.06,
    length: 140,
  },
  {
    label: "Mudra",
    detail: "Virtual Financial Trading",
    side: "right",
    progress: 0.28,
    length: 180,
  },
  {
    label: "Karvaan",
    detail: "Executive Fashion & Persona",
    side: "left",
    progress: 0.5,
    length: 200,
  },
  {
    label: "Tech Talks & Keynotes",
    detail: "Conversations with practitioners",
    side: "right",
    progress: 0.73,
    length: 160,
  },
  {
    label: "Networking & Awards",
    detail: "The festival finale",
    side: "left",
    progress: 0.92,
    length: 150,
  },
];

export const EVENT_PATH =
  "M44.0151 82C191.015 39.5 275.054 21.6821 362.254 10.0821C471.254 -4.41792 296.753 18.5821 198.253 57.0821C99.7535 95.5821 360.254 4.58208 532.254 0.0820786C704.254 -4.41792 172.754 177.082 61.7535 307.082C-49.2465 437.082 580.515 457 631.753 643.582C685.966 840.992 -13.2465 1163.58 2.25353 913.082C17.7535 662.582 533.515 852.521 533.515 1183C533.515 1359 261.515 1449 110.254 1658.08C-50.9435 1880.9 321.087 2007.75 467.254 2146.58C586.007 2253.55 689.915 2465.4 155.515 2457C-4.48486 2457 70.5151 2288 187.515 2366C281.115 2428.4 260.515 2562.5 247.515 2658";

export type Sponsor = {
  name: string;
  src: string;
  width: number;
  height: number;
};

export const SPONSORS: Sponsor[] = [
  {
    name: "Arun Ice Creams",
    src: "/images/sponsors/sponsor-arun.webp",
    width: 356,
    height: 228,
  },
  {
    name: "Pizza Hut",
    src: "/images/sponsors/sponsor-pizzahut.webp",
    width: 900,
    height: 604,
  },
];

export const SPONSOR_MARQUEE = Array.from(
  { length: 8 },
  (_, index) => SPONSORS[index % SPONSORS.length],
);

export type Speaker = {
  index: string;
  name: string;
  role: string;
  image: string;
  alt: string;
};

export const SPEAKERS: Speaker[] = [
  {
    index: "01",
    name: "CA Mayserah Mazhar",
    role: "Chartered Accountant & Financial Strategist",
    image: "/images/speakers/mayserah-mazhar.jpg",
    alt: "CA Mayserah Mazhar",
  },
  {
    index: "02",
    name: "Gaurav Sharma",
    role: "Distinguished Speaker / Guest",
    image: "/images/speakers/gaurav-sharma.jpg",
    alt: "Gaurav Sharma speaking at a podium",
  },
  {
    index: "03",
    name: "Aviral Ashok Jain",
    role: "Industry Innovator & Entrepreneur",
    image: "/images/speakers/aviral-ashok-jain.jpg",
    alt: "Aviral Ashok Jain at Venture Verse",
  },
  {
    index: "04",
    name: "Mrs. Deepti Sharma",
    role: "Academic Leader & Guest of Honour",
    image: "/images/speakers/deepti-sharma.jpg",
    alt: "Mrs. Deepti Sharma attending the event",
  },
];

export type TeamMember = {
  name: string;
  role: string;
  image: string;
  phone: string;
  email: string;
};

export const FACULTY_LEADERSHIP: TeamMember[] = [
  {
    name: "Prof. Rakesh Jaiswal",
    role: "Faculty Coordinator, Department of CSBS & CSE",
    image: "/images/team/rakesh-jaiswal.jpg",
    phone: "+918989490248",
    email: "rakeshjaiswal@oriental.ac.in",
  },
];

export const STUDENT_COORDINATORS: TeamMember[] = [
  {
    name: "Swastik Pandey",
    role: "Student Coordinator",
    image: "/images/team/swastik-pandey.jpg",
    phone: "+919301732087",
    email: "swastikpandey2901@gmail.com",
  },
  {
    name: "Adarsh Raghuwanshi",
    role: "Student Coordinator",
    image: "/images/team/adarsh-raghuwanshi.jpg",
    phone: "+916260668775",
    email: "adarshraghuwanshi10e@gmail.com",
  },
  {
    name: "Shreya Langhiya",
    role: "Student Coordinator",
    image: "/images/team/shreya-langhiya.jpg",
    phone: "+918305151339",
    email: "shreyalanghiya@gmail.com",
  },
  {
    name: "Aadi Jain",
    role: "Student Coordinator",
    image: "/images/team/aadi-jain.jpg",
    phone: "+917879577144",
    email: "aadijain1711@gmail.com",
  },
];

export type ArchiveItem = {
  index: string;
  src: string;
  srcSet: string;
  width: number;
  height: number;
  alt: string;
  caption: string;
};

const ARCHIVE_CAPTIONS = [
  "Preparing the Venture Craft identity",
  "Creative planning in progress",
  "A moment from the opening ceremony",
  "Welcoming our guest of honour",
  "Behind the scenes at Oriental",
  "Pitching ideas with purpose",
  "Inside the trading desk arena",
  "A packed auditorium of curious minds",
  "The Venture Verse community",
  "Celebrating the winners",
  "Confidence on the runway",
  "Recognizing achievement",
  "A shared celebration of innovation",
  "The Venture Verse community comes together",
  "Faces from the Venture Verse archive",
  "A closing frame from the festival",
];

const ARCHIVE_META = [
  { width: 1280, height: 853 },
  { width: 1280, height: 960 },
  { width: 1280, height: 960 },
  { width: 1200, height: 672 },
  { width: 1064, height: 596 },
  { width: 1280, height: 853 },
  { width: 1280, height: 720 },
  { width: 1280, height: 720 },
  { width: 1280, height: 853 },
  { width: 1272, height: 954 },
  { width: 1280, height: 960 },
  { width: 1280, height: 853 },
  { width: 1280, height: 853 },
  { width: 1280, height: 853 },
  { width: 1079, height: 592 },
  { width: 1280, height: 720 },
];

export const ARCHIVE_ITEMS: ArchiveItem[] = ARCHIVE_CAPTIONS.map(
  (caption, index) => {
    const number = String(index + 1).padStart(2, "0");
    const meta = ARCHIVE_META[index];

    return {
      index: number,
      src: `/images/glimpse/glimpse-${number}-1280.webp`,
      srcSet: `/images/glimpse/glimpse-${number}-720.webp 720w, /images/glimpse/glimpse-${number}-1280.webp 1280w`,
      width: meta.width,
      height: meta.height,
      alt: `${caption}, Venture Verse archive frame ${number}`,
      caption,
    };
  },
);
