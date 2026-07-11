export type Game = {
  title: string;
  image: string;
  creators: string[];
  tags: string[];
  itchUrl: string;
  rank?: number; // Submissions results rank
  criteria?: {
    hook: { rank: number; score: number };
    gameplay: { rank: number; score: number };
    cohesion: { rank: number; score: number };
  };
};

export type Volume = {
  id: number;
  title: string;
  theme: string;
  coverImage: string;
  date: string;
  games: Game[];
  stats?: {
    submissionsCount: number;
    ratingsCount: number;
    averageRatings: number;
    medianRatings: number;
  };
  // Y2K Minimalist style attributes
  accentColor: string; // Tailwind class or hex color (e.g., '#ff007f')
  bgColor: string; // Tailwind class (e.g., 'bg-rose-50/50')
  textColor: string; // Text utility color (e.g., 'text-rose-600')
  borderColor: string; // Border color (e.g., 'border-rose-400')
  darkBgColor: string; // Dark background class
  darkBorderColor: string; // Dark border class
};

export const volumesData: Volume[] = [
  {
    id: 1,
    title: "Very Disco Game Jam Vol. 1",
    theme: "Chain",
    coverImage: "/images/theme/Chain.webp",
    date: "May 2026",
    accentColor: "#6366f1",
    bgColor: "bg-[#eef2ff]",
    textColor: "text-[#4338ca]",
    borderColor: "border-[#c7d2fe]",
    darkBgColor: "dark:bg-indigo-950/20",
    darkBorderColor: "dark:border-indigo-900/50",
    stats: {
      submissionsCount: 9,
      ratingsCount: 27,
      averageRatings: 3.0,
      medianRatings: 2,
    },
    games: [
      {
        title: "Forest Patrol",
        image: "https://img.itch.zone/aW1nLzI3NzEwNjk1LnBuZw==/300x240%23c/RP7qXP.png",
        creators: ["dimasps32"],
        tags: ["web"],
        itchUrl: "https://dimasps32.itch.io/forest-patrol",
        rank: 1,
        criteria: {
          hook: { rank: 1, score: 4.0 },
          gameplay: { rank: 2, score: 3.0 },
          cohesion: { rank: 2, score: 3.667 },
        },
      },
      {
        title: "Luna",
        image: "https://img.itch.zone/aW1nLzI3Njc2MDczLnBuZw==/300x240%23c/bw7weP.png",
        creators: ["hansfigo"],
        tags: ["osx", "web"],
        itchUrl: "https://hansfigo.itch.io/luna",
        rank: 2,
        criteria: {
          hook: { rank: 2, score: 3.5 },
          gameplay: { rank: 2, score: 3.0 },
          cohesion: { rank: 3, score: 3.5 },
        },
      },
      {
        title: "Almost There",
        image: "https://img.itch.zone/aW1nLzI3NzI2Njc0LnBuZw==/300x240%23c/kPUgvt.png",
        creators: ["HendraaaIrwn", "Suigen Studio", "alberto_yoh"],
        tags: ["web"],
        itchUrl: "https://hendraaairwn.itch.io/almost-there",
        rank: 3,
        criteria: {
          hook: { rank: 3, score: 3.333 },
          gameplay: { rank: 5, score: 2.0 },
          cohesion: { rank: 1, score: 4.0 },
        },
      },
      {
        title: "BitterSweet",
        image: "https://img.itch.zone/aW1nLzI3NzEwMzY0LnBuZw==/300x240%23c/qnTMEJ.png",
        creators: ["malivee"],
        tags: ["osx", "web"],
        itchUrl: "https://malivee.itch.io/bittersweet",
        rank: 4,
        criteria: {
          hook: { rank: 4, score: 2.333 },
          gameplay: { rank: 1, score: 3.333 },
          cohesion: { rank: 6, score: 2.333 },
        },
      },
      {
        title: "Animal Kaisar",
        image: "https://img.itch.zone/aW1nLzI3NzI1MDg1LnBuZw==/300x240%23c/EceDgL.png",
        creators: ["Ruslan Andreyovich", "Playreddd"],
        tags: ["web"],
        itchUrl: "https://ruslan-andreyovich.itch.io/animal-kaisar",
        rank: 5,
        criteria: {
          hook: { rank: 5, score: 2.0 },
          gameplay: { rank: 2, score: 3.0 },
          cohesion: { rank: 5, score: 2.5 },
        },
      },
      {
        title: "Space Bizzare Adventure",
        image: "https://img.itch.zone/aW1nLzI3NzI0MTg3LnBuZw==/300x240%23c/b0jJvJ.png",
        creators: ["johanpramudito"],
        tags: ["web"],
        itchUrl: "https://johanpramudito.itch.io/space-bizzare-adventure",
        rank: 6,
        criteria: {
          hook: { rank: 5, score: 2.0 },
          gameplay: { rank: 5, score: 2.0 },
          cohesion: { rank: 4, score: 2.667 },
        },
      },
      {
        title: "Chain 'Em Up!",
        image: "https://img.itch.zone/aW1nLzI3NzI0MTQxLnBuZw==/300x240%23c/OmuqGv.png",
        creators: ["binc876"],
        tags: ["web"],
        itchUrl: "https://binc876.itch.io/chain-em-up",
        rank: 7,
        criteria: {
          hook: { rank: 5, score: 2.0 },
          gameplay: { rank: 5, score: 2.0 },
          cohesion: { rank: 7, score: 2.0 },
        },
      },
      {
        title: "Farm of Chains",
        image: "https://img.itch.zone/aW1nLzI3NzI4NDEyLnBuZw==/300x240%23c/V93Gwi.png",
        creators: ["chnadler"],
        tags: ["web"],
        itchUrl: "https://chnadler.itch.io/farm-of-chains",
        rank: 8,
        criteria: {
          hook: { rank: 9, score: 1.0 },
          gameplay: { rank: 8, score: 1.5 },
          cohesion: { rank: 8, score: 1.5 },
        },
      },
      {
        title: "PingoHunter",
        image: "https://img.itch.zone/aW1nLzI3NzI0NDUxLmpwZw==/300x240%23c/0m8I67.jpg",
        creators: ["rahdeva"],
        tags: ["web"],
        itchUrl: "https://rahdeva.itch.io/pingohunter",
        rank: 9,
        criteria: {
          hook: { rank: 8, score: 1.5 },
          gameplay: { rank: 9, score: 1.0 },
          cohesion: { rank: 9, score: 1.0 },
        },
      },
    ],
  },
  {
    id: 2,
    title: "Very Disco Game Jam Vol. 2",
    theme: "Cap",
    coverImage: "/images/theme/Cap.webp",
    date: "June 2026",
    accentColor: "#fb922b",
    bgColor: "bg-[#fff7ed]",
    textColor: "text-[#c2410c]",
    borderColor: "border-[#fed7aa]",
    darkBgColor: "dark:bg-orange-950/20",
    darkBorderColor: "dark:border-orange-900/50",
    stats: {
      submissionsCount: 16,
      ratingsCount: 43,
      averageRatings: 2.7,
      medianRatings: 2,
    },
    games: [
      {
        title: "Terminal Capacity",
        image: "https://img.itch.zone/aW1nLzI4MTU0NDI4LnBuZw==/300x240%23c/nMeuHP.png",
        creators: ["Someonelse2309"],
        tags: ["osx"],
        itchUrl: "https://someonelse2309.itch.io/terminal-capacity",
        rank: 1,
        criteria: {
          hook: { rank: 1, score: 4.5 },
          gameplay: { rank: 3, score: 4.0 },
          cohesion: { rank: 1, score: 4.5 },
        },
      },
      {
        title: "Capsized",
        image: "https://img.itch.zone/aW1nLzI4MjA3MzMyLnBuZw==/300x240%23c/4aP5dy.png",
        creators: ["fuadsalim"],
        tags: ["web"],
        itchUrl: "https://fuadsalim.itch.io/capsized",
        rank: 1,
        criteria: {
          hook: { rank: 1, score: 4.5 },
          gameplay: { rank: 3, score: 4.0 },
          cohesion: { rank: 1, score: 4.5 },
        },
      },
      {
        title: "Cap or Jail",
        image: "https://img.itch.zone/aW1nLzI4MTYyNTQ2LnBuZw==/300x240%23c/SAFAIx.png",
        creators: ["dimaswisodewo"],
        tags: ["osx"],
        itchUrl: "https://dimaswisodewo.itch.io/cap-or-jail",
        rank: 3,
        criteria: {
          hook: { rank: 11, score: 2.5 },
          gameplay: { rank: 1, score: 5.0 },
          cohesion: { rank: 3, score: 3.0 },
        },
      },
      {
        title: "StackHouse",
        image: "https://img.itch.zone/aW1nLzI4MTc2ODg4LnBuZw==/300x240%23c/Hfb1R9.png",
        creators: ["eccccc"],
        tags: ["web"],
        itchUrl: "https://eccccc.itch.io/stackhouse",
        rank: 3,
        criteria: {
          hook: { rank: 6, score: 3.0 },
          gameplay: { rank: 2, score: 4.5 },
          cohesion: { rank: 3, score: 3.0 },
        },
      },
      {
        title: "Adventure Cap",
        image: "https://img.itch.zone/aW1nLzI4MTc4MTk1LnBuZw==/300x240%23c/y8AzQD.png",
        creators: ["alberto_yoh"],
        tags: ["osx", "web"],
        itchUrl: "https://alberto-yoh.itch.io/adventure-cap",
        rank: 5,
        criteria: {
          hook: { rank: 3, score: 3.5 },
          gameplay: { rank: 5, score: 3.5 },
          cohesion: { rank: 3, score: 3.0 },
        },
      },
      {
        title: "We Don't Know",
        image: "https://img.itch.zone/aW1nLzI4MjA0MDU0LnBuZw==/300x240%23c/MnNaQF.png",
        creators: ["Ruslan Andreyovich"],
        tags: ["osx"],
        itchUrl: "https://ruslan-andreyovich.itch.io/we-dont-know",
        rank: 6,
        criteria: {
          hook: { rank: 3, score: 3.5 },
          gameplay: { rank: 5, score: 3.5 },
          cohesion: { rank: 9, score: 2.5 },
        },
      },
      {
        title: "cappow",
        image: "https://img.itch.zone/aW1nLzI4MTgyMzcyLnBuZw==/300x240%23c/2yL%2BaQ.png",
        creators: ["ferdianrra"],
        tags: ["web"],
        itchUrl: "https://ferdianrra.itch.io/cappow2",
        rank: 7,
        criteria: {
          hook: { rank: 11, score: 2.5 },
          gameplay: { rank: 5, score: 3.5 },
          cohesion: { rank: 3, score: 3.0 },
        },
      },
      {
        title: "Uncap the Spirit",
        image: "https://img.itch.zone/aW1nLzI4MTY3NDIwLmpwZw==/300x240%23c/y33LHh.jpg",
        creators: ["Marsyuma"],
        tags: ["web"],
        itchUrl: "https://marsyuma.itch.io/uncap-the-spirit",
        rank: 8,
        criteria: {
          hook: { rank: 5, score: 3.333 },
          gameplay: { rank: 11, score: 2.667 },
          cohesion: { rank: 8, score: 2.667 },
        },
      },
      {
        title: "All Points South",
        image: "https://img.itch.zone/aW1nLzI4MTU0MzY1LnBuZw==/300x240%23c/pxBz2u.png",
        creators: ["dimasps32"],
        tags: ["osx"],
        itchUrl: "https://dimasps32.itch.io/all-points-south",
        rank: 9,
        criteria: {
          hook: { rank: 7, score: 4.0 },
          gameplay: { rank: 8, score: 4.0 },
          cohesion: { rank: 11, score: 3.0 },
        },
      },
      {
        title: "13 Days of Deceit",
        image: "https://img.itch.zone/aW1nLzI4MTc4NzI3LmpwZw==/300x240%23c/HFwfum.jpg",
        creators: ["alzamzainz"],
        tags: ["osx"],
        itchUrl: "https://alzamzainz.itch.io/13-days-to-deceit",
        rank: 9,
        criteria: {
          hook: { rank: 7, score: 4.0 },
          gameplay: { rank: 13, score: 3.0 },
          cohesion: { rank: 7, score: 4.0 },
        },
      },
      {
        title: "The Soda Sniper",
        image: "https://img.itch.zone/aW1nLzI3OTkyNzY5LnBuZw==/300x240%23c/WymAbs.png",
        creators: ["salmanlfz"],
        tags: ["web"],
        itchUrl: "https://salmanlfz.itch.io/the-soda-sniper",
        rank: 9,
        criteria: {
          hook: { rank: 7, score: 4.0 },
          gameplay: { rank: 8, score: 4.0 },
          cohesion: { rank: 11, score: 3.0 },
        },
      },
      {
        title: "TYPEREICH",
        image: "https://img.itch.zone/aW1nLzI4MjA1OTg5LnBuZw==/300x240%23c/wsCliu.png",
        creators: ["Suigen Studio"],
        tags: ["osx"],
        itchUrl: "https://suigen-studio.itch.io/typereich",
        rank: 12,
        criteria: {
          hook: { rank: 10, score: 2.667 },
          gameplay: { rank: 12, score: 2.333 },
          cohesion: { rank: 10, score: 2.333 },
        },
      },
      {
        title: "Almost get the cap",
        image: "https://img.itch.zone/aW1nLzI4MjA1NzgzLnBuZw==/300x240%23c/iih%2F0W.png",
        creators: ["hano.r0therme"],
        tags: ["osx"],
        itchUrl: "https://hanor0therme.itch.io/almost-get-the-cap",
        rank: 13,
        criteria: {
          hook: { rank: 13, score: 3.0 },
          gameplay: { rank: 8, score: 4.0 },
          cohesion: { rank: 11, score: 3.0 },
        },
      },
      {
        title: "Don't Trust Your App : Manual Override",
        image: "https://img.itch.zone/aW1nLzI4MTgwNzQ4LnBuZw==/300x240%23c/xm7F2Q.png",
        creators: ["HendraaaIrwn"],
        tags: ["web"],
        itchUrl: "https://hendraaairwn.itch.io/dont-trust-your-app-manual-override",
        rank: 14,
        criteria: {
          hook: { rank: 13, score: 3.0 },
          gameplay: { rank: 13, score: 3.0 },
          cohesion: { rank: 11, score: 3.0 },
        },
      },
      {
        title: "The Scene",
        image: "",
        creators: ["kejuwafel"],
        tags: ["osx"],
        itchUrl: "https://kejuwafel.itch.io/the-scene",
        rank: 15,
        criteria: {
          hook: { rank: 16, score: 1.5 },
          gameplay: { rank: 15, score: 2.0 },
          cohesion: { rank: 15, score: 1.5 },
        },
      },
      {
        title: "Pechevre",
        image: "https://img.itch.zone/aW1nLzI4MTc3MDEyLnBuZw==/300x240%23c/oJWZoS.png",
        creators: ["malivee"],
        tags: ["osx", "web"],
        itchUrl: "https://malivee.itch.io/pechevre",
        rank: 16,
        criteria: {
          hook: { rank: 13, score: 3.0 },
          gameplay: { rank: 16, score: 2.0 },
          cohesion: { rank: 16, score: 2.0 },
        },
      },
    ],
  },
];
