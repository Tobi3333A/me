export const site = {
  name: "Tobi Adejumo",
  role: "Engineer & Builder",
  location: "Building from wherever the wifi is good",
  status: "Open to interesting work",
  email: "hello@tobiadejumo.com",
  socials: [
    { label: "X", href: "https://x.com" },
    { label: "GitHub", href: "https://github.com/Tobi3333A" },
    { label: "LinkedIn", href: "https://linkedin.com" },
    { label: "Email", href: "mailto:hello@tobiadejumo.com" },
  ],
  bio: "I build products that feel calm, fast, and intentional — frontend systems, clean interfaces, and tools that get out of your way.",
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
    company: "Northline",
    role: "Founder",
    period: "2025 — Present",
    description:
      "Building a focused workspace for makers who want less noise and more shipping.",
    href: "#",
  },
  {
    company: "Harbor Labs",
    role: "Software Engineer",
    period: "2024 — 2025",
    description:
      "Shipped product interfaces and design systems for early-stage teams.",
    href: "#",
  },
  {
    company: "Summit Digital",
    role: "Frontend Engineer",
    period: "2023 — 2024",
    description:
      "Led UI rebuilds across marketing and product surfaces with an eye for performance.",
    href: "#",
  },
  {
    company: "Freelance",
    role: "Product Designer & Engineer",
    period: "2021 — 2023",
    description:
      "Partnered with founders to turn rough ideas into polished, launch-ready products.",
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
    title: "Northline",
    description:
      "A calm command center for personal projects, notes, and shipping rituals.",
    tags: ["Next.js", "TypeScript", "AI"],
    href: "#",
  },
  {
    title: "Pulseboard",
    description:
      "Lightweight analytics for indie products — signal without the dashboard noise.",
    tags: ["React", "Charts", "API"],
    href: "#",
  },
  {
    title: "Ledger Lite",
    description:
      "A minimal finance tracker with clear categories and zero visual clutter.",
    tags: ["Flutter", "SQLite"],
    href: "#",
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
