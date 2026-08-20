import React from "react";
import Image from "next/image";
import {FaCode, FaEye} from "react-icons/fa";
import {SparklesIcon} from "@heroicons/react/24/solid";
import {PROJECT_CATEGORIES, ProjectCategory, techIcons} from "@/constants/projects";

interface Props {
  title: string;
  description: string;
  link: string;
  image: string;
  clientcode: string | false;
  servercode: string | false;
  features: string[];
  technologies: string[];
  category: ProjectCategory;
  vibeCodingTools?: string[];
}

const ProjectCard = ({
  title,
  description,
  link,
  image,
  clientcode,
  servercode,
  features,
  technologies,
  category,
  vibeCodingTools,
}: Props) => {
  const hasClient = typeof clientcode === "string" && clientcode.length > 0;
  const hasServer = typeof servercode === "string" && servercode.length > 0;
  const codeHref = hasClient ? clientcode : hasServer ? servercode : null;
  const showSplit = hasClient && hasServer && clientcode !== servercode;
  const meta = PROJECT_CATEGORIES[category];

  return (
    <article className="card group relative flex h-full flex-col overflow-hidden">
      {/* Accent line that reveals on hover */}
      <span
        aria-hidden="true"
        className="absolute inset-x-0 top-0 z-20 h-px scale-x-0 bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 transition-all duration-500 group-hover:scale-x-100 group-hover:opacity-100"
      />

      {/* Screenshot header — the whole image links to the live site */}
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Open ${title} live preview`}
        className="relative block aspect-video w-full overflow-hidden"
      >
        {/* Next.js optimizes/serves modern formats at the right resolution
            (incl. 2x for retina), so the screenshot stays crisp and light. */}
        <Image
          src={image}
          alt={`${title} screenshot`}
          fill
          sizes="(min-width: 1024px) 400px, (min-width: 768px) 45vw, 100vw"
          quality={90}
          className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.04]"
        />
        {/* top scrim keeps the badge legible over light screenshots */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-black/50 to-transparent"
        />
        {/* bottom scrim blends the image into the card body */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-elevated to-transparent"
        />

        <span
          className={`absolute right-3 top-3 inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-semibold backdrop-blur-md ${meta.badge}`}
        >
          {category === "vibe-coded" && <SparklesIcon className="h-3 w-3" />}
          {meta.label}
        </span>
      </a>

      <div className="flex flex-1 flex-col p-5">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="w-fit text-xl font-semibold text-text transition-colors group-hover:text-accent-soft hover:text-accent-soft"
        >
          {title}
        </a>
        <p className="mt-2 text-sm leading-relaxed text-muted">{description}</p>

        {features.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {features.map((f) => (
              <span className="chip" key={f}>
                {f}
              </span>
            ))}
          </div>
        )}

        {technologies.length > 0 && (
          <div className="mt-5">
            <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-subtle">
              Tech Stack
            </span>
            <div className="mt-2 flex flex-wrap items-center gap-2">
              {techIcons(technologies).map((tech) =>
                tech.slug ? (
                  // skillicons.dev serves SVGs, so use a plain img (next/image would need dangerouslyAllowSVG)
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    key={tech.name}
                    src={`https://skillicons.dev/icons?i=${tech.slug}`}
                    alt={tech.name}
                    title={tech.name}
                    loading="lazy"
                    decoding="async"
                    className="h-6 w-auto transition-transform duration-300 hover:scale-110"
                  />
                ) : (
                  <span className="tag" key={tech.name}>
                    {tech.name}
                  </span>
                )
              )}
            </div>
          </div>
        )}

        {vibeCodingTools && vibeCodingTools.length > 0 && (
          <div className="mt-4">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/30 bg-accent/10 px-2.5 py-1 text-xs font-medium text-accent-soft">
              <SparklesIcon className="h-3 w-3" />
              Built with {vibeCodingTools.join(" · ")}
            </span>
          </div>
        )}

        <div className="mt-auto flex flex-col gap-2 pt-6">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary w-full"
          >
            <FaEye />
            Live Preview
          </a>
          {showSplit ? (
            <div className="flex gap-2">
              <a
                href={clientcode as string}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost w-1/2"
              >
                <FaCode />
                Client
              </a>
              <a
                href={servercode as string}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost w-1/2"
              >
                <FaCode />
                Server
              </a>
            </div>
          ) : (
            codeHref && (
              <a
                href={codeHref}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost w-full"
              >
                <FaCode />
                Project Code
              </a>
            )
          )}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
