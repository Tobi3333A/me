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
    role: "Founder",
    period: "2025 — Present",
    description:
      "Building an AI Academic Coach.",
    href: "https://chadashiel.com",
  },
  {
    company: "Xavier University of Louisiana",
    role: "Research Assistant",
    period: "2025 — Present",
    description:
      "Researching ways to make the air cleaner.",
    href: "https://xula.edu",
  },
];

export type Involvement = {
  org: string;
  role: string;
  period: string;
};

export const involvements: Involvement[] = [
  {
    org: "Open Source Collective",
    role: "Contributor",
    period: "2024 — Present",
  },
  {
    org: "Campus Builders",
    role: "Mentor",
    period: "2023 — Present",
  },
  {
    org: "Design Engineering Guild",
    role: "Member",
    period: "2022 — Present",
  },
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
    tags: ["Next.js", "TypeScript", "AI"],
    href: "https://chadashiel.com",
  },
  {
    title: "ChadPlace",
    description:
      "Marketplace & Chatting for Students.",
    tags: ["React", "Charts", "API"],
    href: "https://chadplace.vercel.app",
  },
  {
    title: "CS-ready",
    description:
      "A readiness tracker for CS students.",
    tags: ["Flutter", "SQLite"],
    href: "https://cs-ready.vercel.app",
  },
  {
    title: "Prompt Atlas",
    description:
      "A visual library for reusable AI prompts across writing, code, and design.",
    tags: ["Next.js", "Tailwind", "AI"],
    href: "#",
  },
];

export type Writing = {
  title: string;
  date: string;
  excerpt: string;
  href?: string;
};

export const writings: Writing[] = [
  {
    title: "Why simple products win",
    date: "Mar 12, 2026",
    excerpt:
      "Complexity is easy to add. Restraint is the hard part — and usually the reason people stay.",
    href: "#",
  },
  {
    title: "Shipping as a habit",
    date: "Jan 4, 2026",
    excerpt:
      "The projects that matter most aren't the ones with the best plans. They're the ones that keep moving.",
    href: "#",
  },
  {
    title: "Designing for quiet confidence",
    date: "Sep 18, 2025",
    excerpt:
      "Good interfaces don't shout. They guide, then get out of the way.",
    href: "#",
  },
];
