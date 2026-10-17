import type {MetadataRoute} from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Adib Hoque — Frontend Developer",
    short_name: "Adib Hoque",
    description:
      "Portfolio of Adib Hoque, a frontend developer building web products with React, Next.js and TypeScript.",
    start_url: "/",
    display: "standalone",
    background_color: "#EFF0EE",
    theme_color: "#EFF0EE",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
