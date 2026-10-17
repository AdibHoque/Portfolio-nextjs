// Central site metadata. Single source of truth for the domain, name, and
// social links used across SEO surfaces (layout metadata, sitemap, robots,
// manifest, JSON-LD structured data). Update the URL/handles here and every
// SEO route stays in sync.

export const SITE = {
  name: "Adib Hoque",
  // Absolute site origin — no trailing slash. Used as metadataBase and in every
  // absolute URL (og:url, canonical, sitemap, JSON-LD @id).
  url: "https://adibhoque.me",
  title: "Adib Hoque — Frontend Developer",
  jobTitle: "Frontend Developer",
  description:
    "Portfolio of Adib Hoque, a frontend developer building fast, responsive, user-friendly web applications with React, Next.js and TypeScript.",
  // Terse tagline for OG/social cards.
  tagline: "Frontend Developer · React · Next.js · TypeScript",
  email: "adibhoque04@gmail.com",
  locale: "en_US",
  // Real, owned profiles only — feeds JSON-LD `sameAs`, which is how Google
  // links this page to the "Adib Hoque" entity. Keep these honest.
  socials: {
    github: "https://github.com/AdibHoque",
  },
  // Topics for the Person schema `knowsAbout` — reinforces relevance for
  // "Adib Hoque <tech>" style searches.
  knowsAbout: [
    "Frontend Development",
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "TailwindCSS",
    "Web Development",
    "UI Engineering",
  ],

  // ── Page content ──────────────────────────────────────────────────────
  // Hero paragraph: what he does and for whom, in his own register.
  intro:
    "I build web products end to end — product catalogues, checkout flows, dashboards — with React, Next.js and TypeScript. I spend most of my time on the parts a screenshot never shows: loading states, empty states, and what happens when something breaks.",
  // The homepage "about" note. Each entry is one paragraph.
  note: [
    "I started out building full-stack apps for friends' businesses in Bangladesh, and that shaped how I work: a feature isn't done when it renders, it's done when someone can use it to buy something, find a job, or book a ticket without calling me for help.",
    "Most of what I write now is React and Next.js on the front end, with Node, Express and MongoDB behind it. I like interfaces that stay out of the way — plain language, obvious next steps, nothing decorative competing with the task.",
    "When I'm not building, I'm usually reading about interface design or playing with a new AI coding tool to see how far it gets before I have to take over.",
  ],
  // Skill groups, stated as capability rather than as a logo wall.
  stack: [
    {
      label: "Front end",
      items: [
        "React",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Redux Toolkit",
        "React Query",
      ],
    },
    {
      label: "Back end & data",
      items: ["Node.js", "Express", "MongoDB", "Firebase", "Prisma"],
    },
    {
      label: "Payments & tooling",
      items: ["Stripe", "Git", "Vercel", "Figma", "Framer Motion"],
    },
  ],
} as const;

// Keywords the site should surface for. Name-first, since ranking for
// "Adib Hoque" is the goal.
export const SITE_KEYWORDS: string[] = [
  "Adib Hoque",
  "Adib Hoque portfolio",
  "Adib Hoque developer",
  "Adib Hoque frontend developer",
  "Adib Hoque web developer",
  "Adib Hoque React",
  "frontend developer",
  "React developer",
  "Next.js developer",
  "TypeScript developer",
  "web developer portfolio",
];
