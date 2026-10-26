export type EventCategory = {
  label: string;
  side: "left" | "right";
  progress: number;
  length: number;
  shouldFlip?: boolean;
};

export const SITE = {
  name: "Venture Verse",
  shortName: "VV",
  tagline: "Ideas into ventures.",
  subtitle: "The Entrepreneurship & Innovation Club",
  description:
    "A student-led entrepreneurship and innovation community turning curiosity into momentum.",
  eventDate: null as string | null,
  eventDateLabel: "Dates to be announced",
  locationLabel: "Venue to be announced",
  email: null as string | null,
};

export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Events", href: "#events" },
  { label: "Sponsors", href: "#sponsors" },
  { label: "Speakers", href: "#speakers" },
  { label: "Glimpse", href: "#glimpse" },
  { label: "Contact", href: "#contact" },
] as const;

export const EVENT_CATEGORIES: EventCategory[] = [
  { label: "Workshop", side: "left", progress: 0.21, length: 120, shouldFlip: true },
  { label: "Fun Zone", side: "right", progress: 0.25, length: 300 },
  { label: "F5 Talks", side: "left", progress: 0.34, length: 300 },
  { label: "Coding", side: "left", progress: 0.37, length: 150 },
  { label: "Robotics", side: "right", progress: 0.41, length: 100, shouldFlip: true },
  { label: "Gaming", side: "left", progress: 0.58, length: 280 },
  {
    label: "Finance & Management",
    side: "left",
    progress: 0.61,
    length: 150,
  },
  { label: "Go Karting", side: "right", progress: 0.64, length: 120, shouldFlip: true },
  {
    label: "Brain Storming",
    side: "left",
    progress: 0.7,
    length: 120,
    shouldFlip: true,
  },
  { label: "Cultural Night", side: "right", progress: 0.73, length: 200 },
  { label: "Standup Comedy", side: "right", progress: 0.78, length: 120 },
  { label: "Miscellaneous", side: "left", progress: 0.83, length: 120 },
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
    name: "Arun",
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

export const SPEAKER_SLOTS = [
  { index: "01", role: "Founder" },
  { index: "02", role: "Investor" },
  { index: "03", role: "Operator" },
  { index: "04", role: "Researcher" },
  { index: "05", role: "Designer" },
  { index: "06", role: "Builder" },
];

export type ArchiveItem = {
  index: string;
  src: string;
  srcSet: string;
  width: number;
  height: number;
  alt: string;
};

export const ARCHIVE_ITEMS: ArchiveItem[] = [
  {
    index: "01",
    src: "/images/glimpse/glimpse-01-1280.webp",
    srcSet:
      "/images/glimpse/glimpse-01-720.webp 720w, /images/glimpse/glimpse-01-1280.webp 1280w",
    width: 1280,
    height: 853,
    alt: "Venture Verse ceremony archive, frame 01",
  },
  {
    index: "02",
    src: "/images/glimpse/glimpse-02-1280.webp",
    srcSet:
      "/images/glimpse/glimpse-02-720.webp 720w, /images/glimpse/glimpse-02-1280.webp 1280w",
    width: 1280,
    height: 960,
    alt: "Venture Verse ceremony archive, frame 02",
  },
  {
    index: "03",
    src: "/images/glimpse/glimpse-03-1280.webp",
    srcSet:
      "/images/glimpse/glimpse-03-720.webp 720w, /images/glimpse/glimpse-03-1280.webp 1280w",
    width: 1280,
    height: 960,
    alt: "Venture Verse ceremony archive, frame 03",
  },
  {
    index: "04",
    src: "/images/glimpse/glimpse-04-1280.webp",
    srcSet:
      "/images/glimpse/glimpse-04-720.webp 720w, /images/glimpse/glimpse-04-1280.webp 1280w",
    width: 1200,
    height: 672,
    alt: "Venture Verse ceremony archive, frame 04",
  },
  {
    index: "05",
    src: "/images/glimpse/glimpse-05-1280.webp",
    srcSet:
      "/images/glimpse/glimpse-05-720.webp 720w, /images/glimpse/glimpse-05-1280.webp 1280w",
    width: 1064,
    height: 596,
    alt: "Venture Verse ceremony archive, frame 05",
  },
  {
    index: "06",
    src: "/images/glimpse/glimpse-06-1280.webp",
    srcSet:
      "/images/glimpse/glimpse-06-720.webp 720w, /images/glimpse/glimpse-06-1280.webp 1280w",
    width: 1280,
    height: 853,
    alt: "Venture Verse ceremony archive, frame 06",
  },
  {
    index: "07",
    src: "/images/glimpse/glimpse-07-1280.webp",
    srcSet:
      "/images/glimpse/glimpse-07-720.webp 720w, /images/glimpse/glimpse-07-1280.webp 1280w",
    width: 1280,
    height: 720,
    alt: "Venture Verse ceremony archive, frame 07",
  },
  {
    index: "08",
    src: "/images/glimpse/glimpse-08-1280.webp",
    srcSet:
      "/images/glimpse/glimpse-08-720.webp 720w, /images/glimpse/glimpse-08-1280.webp 1280w",
    width: 1280,
    height: 720,
    alt: "Venture Verse ceremony archive, frame 08",
  },
  {
    index: "09",
    src: "/images/glimpse/glimpse-09-1280.webp",
    srcSet:
      "/images/glimpse/glimpse-09-720.webp 720w, /images/glimpse/glimpse-09-1280.webp 1280w",
    width: 1280,
    height: 853,
    alt: "Venture Verse ceremony archive, frame 09",
  },
  {
    index: "10",
    src: "/images/glimpse/glimpse-10-1280.webp",
    srcSet:
      "/images/glimpse/glimpse-10-720.webp 720w, /images/glimpse/glimpse-10-1280.webp 1280w",
    width: 1272,
    height: 954,
    alt: "Venture Verse ceremony archive, frame 10",
  },
  {
    index: "11",
    src: "/images/glimpse/glimpse-11-1280.webp",
    srcSet:
      "/images/glimpse/glimpse-11-720.webp 720w, /images/glimpse/glimpse-11-1280.webp 1280w",
    width: 1280,
    height: 960,
    alt: "Venture Verse ceremony archive, frame 11",
  },
  {
    index: "12",
    src: "/images/glimpse/glimpse-12-1280.webp",
    srcSet:
      "/images/glimpse/glimpse-12-720.webp 720w, /images/glimpse/glimpse-12-1280.webp 1280w",
    width: 1280,
    height: 853,
    alt: "Venture Verse ceremony archive, frame 12",
  },
  {
    index: "13",
    src: "/images/glimpse/glimpse-13-1280.webp",
    srcSet:
      "/images/glimpse/glimpse-13-720.webp 720w, /images/glimpse/glimpse-13-1280.webp 1280w",
    width: 1280,
    height: 853,
    alt: "Venture Verse ceremony archive, frame 13",
  },
  {
    index: "14",
    src: "/images/glimpse/glimpse-14-1280.webp",
    srcSet:
      "/images/glimpse/glimpse-14-720.webp 720w, /images/glimpse/glimpse-14-1280.webp 1280w",
    width: 1280,
    height: 853,
    alt: "Venture Verse ceremony archive, frame 14",
  },
  {
    index: "15",
    src: "/images/glimpse/glimpse-15-1280.webp",
    srcSet:
      "/images/glimpse/glimpse-15-720.webp 720w, /images/glimpse/glimpse-15-1280.webp 1280w",
    width: 1079,
    height: 592,
    alt: "Venture Verse ceremony archive, frame 15",
  },
  {
    index: "16",
    src: "/images/glimpse/glimpse-16-1280.webp",
    srcSet:
      "/images/glimpse/glimpse-16-720.webp 720w, /images/glimpse/glimpse-16-1280.webp 1280w",
    width: 1280,
    height: 720,
    alt: "Venture Verse ceremony archive, frame 16",
  },
];

export const CONTACT_CARDS = [
  {
    title: "Partnerships",
    description:
      "For sponsorships, campus collaborations, and long-term partnerships.",
    note: "Contact channel to be announced",
    icon: "handshake" as const,
  },
  {
    title: "Speakers & mentors",
    description:
      "For founder conversations, workshops, critiques, and mentorship.",
    note: "Contact channel to be announced",
    icon: "mic" as const,
  },
  {
    title: "Press & community",
    description:
      "For media requests, student collaborations, and community questions.",
    note: "Contact channel to be announced",
    icon: "message" as const,
  },
];

export const FOOTER_LINKS = [
  { label: "About", href: "#about" },
  { label: "Events", href: "#events" },
  { label: "Sponsors", href: "#sponsors" },
  { label: "Speakers", href: "#speakers" },
  { label: "Glimpse", href: "#glimpse" },
  { label: "Contact", href: "#contact" },
];
