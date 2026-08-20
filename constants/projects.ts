import raw from "./projects.json";

export type ProjectCategory = "main" | "vibe-coded" | "legacy";

export interface Project {
  title: string;
  description: string;
  link: string;
  image: string;
  clientcode: string | false;
  servercode: string | false;
  features: string[];
  technologies: string[];
  vibeCodingTools?: string[];
}

export interface CategorizedProject extends Project {
  category: ProjectCategory;
}

const data = raw as {
  main_projects: Project[];
  vibe_coded_projects: Project[];
  legacy_projects: Project[];
};

// Label + badge/dot classes for each category. Solid, saturated fills give the
// three tiers clear at-a-glance separation: Main = brand violet, Vibe-Coded =
// fuchsia (pairs with the sparkle "AI/creative" cue), Legacy = muted slate.
export const PROJECT_CATEGORIES: Record<
  ProjectCategory,
  {label: string; badge: string; dot: string}
> = {
  main: {
    label: "Main",
    badge:
      "border-transparent bg-accent text-white shadow-[0_0_14px_-3px_rgba(139,92,246,0.7)]",
    dot: "bg-accent",
  },
  "vibe-coded": {
    label: "Vibe-Coded",
    badge:
      "border-transparent bg-fuchsia-500 text-white shadow-[0_0_14px_-3px_rgba(217,70,239,0.6)]",
    dot: "bg-fuchsia-500",
  },
  legacy: {
    label: "Legacy",
    badge: "border-transparent bg-slate-600 text-slate-100",
    dot: "bg-slate-500",
  },
};

// Flatten the JSON groups into a single ordered list (main → vibe-coded → legacy),
// tagging each project with its category for the card badge.
export const projects: CategorizedProject[] = [
  ...data.main_projects.map((p) => ({...p, category: "main" as const})),
  ...data.vibe_coded_projects.map((p) => ({...p, category: "vibe-coded" as const})),
  ...data.legacy_projects.map((p) => ({...p, category: "legacy" as const})),
];

// skillicons.dev icons are keyed by a short slug. For most technologies the
// slug is just the name normalized (lowercased, non-alphanumerics stripped) —
// e.g. "Next.js" → "nextjs", "MongoDB" → "mongodb" — so those resolve
// automatically and need no entry here. This table only holds the exceptions:
//   • ALIASES: names skillicons spells differently than the normalized name.
//   • null:    technologies with no skillicons icon, forced to a text tag
//              instead of rendering a broken image.
// Add a new tech to projects.json's `technologies` array and its icon appears
// automatically; only touch this table when the auto-derived slug is wrong.
const TECHNOLOGY_ALIASES: Record<string, string | null> = {
  JavaScript: "js",
  TypeScript: "ts",
  TailwindCSS: "tailwind",
  "Redux Toolkit": "redux",
  "Vercel Analytics": "vercel",
};

function deriveSlug(name: string): string {
  return name.toLowerCase().replace(/[^a-z0-9]/g, "");
}

export interface TechIcon {
  name: string;
  slug: string | null;
}

export function techIcons(technologies: string[]): TechIcon[] {
  return technologies.map((t) => {
    // An explicit table entry wins: a string overrides the slug, `null`
    // forces the text-tag fallback. Otherwise derive the slug from the name.
    const slug = t in TECHNOLOGY_ALIASES ? TECHNOLOGY_ALIASES[t] : deriveSlug(t);
    return {name: t, slug};
  });
}
