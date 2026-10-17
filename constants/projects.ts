import raw from "./projects.json";

export interface Project {
  title: string;
  description: string;
  link: string;
  image: string;
  // Native pixel size of the screenshot, used to reserve the right box before
  // it loads. Without it next/image assumes a ratio and the screenshot crops.
  imageWidth: number;
  imageHeight: number;
  clientcode: string | false;
  servercode: string | false;
  features: string[];
  technologies: string[];
  vibeCodingTools?: string[];
}

const data = raw as {
  main_projects: Project[];
  vibe_coded_projects: Project[];
  legacy_projects: Project[];
};

// One ordered list: strongest work first. The old "Main / Vibe-Coded / Legacy"
// tiers described how a project was made; that reads as a grading of his own
// work, so the page presents them by name instead. The JSON keeps its groups
// (it is the editor's file); only the flattening order matters here.
export const projects: Project[] = [
  ...data.main_projects,
  ...data.vibe_coded_projects,
  ...data.legacy_projects,
];

// The featured case study. NextWear is the only project with a real card
// through to payment, so it carries the page's longest look.
//
// VERIFY BEFORE SHIPPING: `role` and `year` are not recorded anywhere in
// projects.json. They are left empty on purpose rather than guessed — an empty
// row is honest, an invented one is not. Fill them in and the rows appear.
export const featured = {
  project: projects[0],
  summary:
    "A clothing store where the whole purchase happens on one screen: browse the catalogue, add to cart, check out with Stripe. Built with Next.js and TypeScript, cart state in Redux Toolkit, products in MongoDB.",
  role: "",
  year: "",
};
