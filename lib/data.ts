export const site = {
  name: "Emmanuel Adejumo",
  role: "Engineer & Builder",
  location: "Building from wherever the wifi is good",
  email: "amma.adejumo3333@gmail.com",
  socials: [
    { label: "X", href: "https://x.com/emmanuel3ykd" },
    { label: "GitHub", href: "https://github.com/Tobi3333A" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/emmanuel-adejumo-194473271/" },
    { label: "Email", href: "mailto:emma.adejumo3333@gmail.com" },
  ],
  bio: "I build things I think people need, not just what they want.",
  focus:
    "Right now I'm exploring design, engineering, and AI-assisted workflows. Always chasing clarity over clutter.",
};

export type Experience = {
  company: string;
  role: string;
  period: string;
  description: string;
  href?: string;
};

export const experiences: Experience[] = [
  {
    company: "Chadashiel Education",
    role: "Founder & Software Engineer",
    period: "2025 — 2026",
    description:
      "Building The AI Academic Coach.",
    href: "https://chadashiel.com",
  },
  {
    company: "Xavier University of Louisiana",
    role: "Research Assistant",
    period: "2025 — Present",
    description:
      "Researching ways to make the air cleaner.",
    href: "https://www.xula.edu",
  },
];

export type Involvement = {
  org: string;
  role: string;
  period: string;
  href: string
};

export const involvements: Involvement[] = [
  {
    org: "Nvidia Summer Bridge Experience",
    role: "Participant",
    period: "2026",
    href: "https://www.nvidia.com/en-us/"
  },
  {
    org: "National Society of Black Engineers",
    role: "Member",
    period: "2025 — Present",
    href: 'https://nsbe.org/'
  },
  {
    org: "ColorStack",
    role: "Member",
    period: "2025 — Present",
    href: 'https://www.colorstack.org/'
  },
  {
    org: "Summer Bridge Experience, Morehouse College",
    role: "Participant",
    period: "2025",
    href: "https://morehouse.edu/"
  }
];

export type Project = {
  title: string;
  description: string;
  tags: string[];
  href?: string;
};

export const projects: Project[] = [
  {
    title: "Chadashiel",
    description:
      "The AI Academic Coach.",
    tags: ["AI SDK", "Next.js", "Supabase", "PGVector"],
    href: "https://chadashiel.com",
  },
  {
    title: "ChadPlace",
    description:
      "Marketplace & Chatting for Students.",
    tags: ["Expo", "Next.js", "Supabase Realtime"],
    href: "https://chadplace.vercel.app",
  },
  {
    title: "CS-Ready",
    description:
      "A readiness tracker & guider for CS students.",
    tags: ["Next.js", "OpenAI", "PostgreSQL"],
    href: "https://cs-ready.vercel.app",
  },
  {
    title: "ChadConnect",
    description:
      "Share rides & housing with other students during hackathons, conferences, and more.",
    tags: ["Expo", "React Native", "Supabase"],
    href: "https://github.com/Tobi3333A/chad-connect",
  },
  {
    title: "ChadReader",
    description:
      "Upload documents, take notes, and read with AI guidance.",
    tags: ["Expo", "SQLite", "FTS5"],
    href: "https://github.com/Tobi3333A/ChadReader",
  },
  {
    title: "Emmanuel",
    description:
      "Learn the scriptures with AI explanations right in the Bible App.",
    tags: ["Expo", "SQLite", "Gemini"],
    href: "https://github.com/Tobi3333A/emmanuel",
  }
];

export type Philosophy = {
  id: string;
  title: string;
  date: string;
  excerpt: string;
};

export const philosophies: Philosophy[] = [
  {
    id: "1",
    title: "Why simple products win",
    date: "Mar 12, 2026",
    excerpt:
      "Complexity is easy to add. Restraint is the hard part — and usually the reason people stay.",
  },
  {
    id: "2",
    title: "Shipping as a habit",
    date: "Jan 4, 2026",
    excerpt:
      "The projects that matter most aren't the ones with the best plans. They're the ones that keep moving.",
  },
  {
    id: "3",
    title: "Designing for quiet confidence",
    date: "Sep 18, 2025",
    excerpt:
      "Good interfaces don't shout. They guide, then get out of the way.",
  },
];
