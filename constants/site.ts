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
