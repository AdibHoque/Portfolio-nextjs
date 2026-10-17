import Image from "next/image";
import {featured, projects} from "@/constants/projects";

// Everything after the first entry becomes the index.
const index = projects.slice(1);

export function ProjectShot({
  src,
  alt,
  className = "",
  sizes = "100vw",
  priority = false,
}: {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
}) {
  return (
    // Screenshots are light UIs on light paper: the hairline frames them so
    // each one reads as a print rather than a floating rectangle.
    <div className={`overflow-hidden border border-line bg-white ${className}`}>
      <Image
        src={src}
        alt={alt}
        width={1600}
        height={1000}
        sizes={sizes}
        quality={82}
        priority={priority}
        className="h-auto w-full object-cover object-top"
      />
    </div>
  );
}

const Work = () => {
  return (
    <section id="work" className="shell mt-24 sm:mt-32">
      <h2 className="border-b border-line pb-4 text-sm font-medium text-muted">
        Selected work
      </h2>

      {/* ── Featured ──────────────────────────────────────────────────── */}
      <article className="mt-10 grid grid-cols-1 gap-8 lg:mt-14 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-8">
          <a
            href={featured.project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
            aria-label={`Open ${featured.project.title} in a new tab`}
          >
            <ProjectShot
              src={featured.project.image}
              alt={`${featured.project.title} — product catalogue screen`}
              sizes="(min-width: 1024px) 760px, 100vw"
              priority
              className="transition-opacity duration-300 hover:opacity-90"
            />
          </a>
        </div>

        <div className="flex flex-col lg:col-span-4">
          <h3 className="text-2xl font-semibold tracking-tight text-ink">
            <a
              href={featured.project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-accent"
            >
              {featured.project.title}
            </a>
          </h3>

          <dl className="mt-5 grid grid-cols-[5.5rem_1fr] gap-x-4 gap-y-2 border-t border-line pt-4 text-sm">
            {featured.role && (
              <>
                <dt className="text-faint">Role</dt>
                <dd className="text-muted">{featured.role}</dd>
              </>
            )}
            {featured.year && (
              <>
                <dt className="text-faint">Year</dt>
                <dd className="text-muted">{featured.year}</dd>
              </>
            )}
            <dt className="text-faint">Stack</dt>
            <dd className="text-muted">{featured.project.technologies.join(", ")}</dd>
          </dl>

          <p className="mt-6 text-[0.9375rem] leading-[1.7] text-ink">
            {featured.summary}
          </p>

          <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm">
            <a
              href={featured.project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="link font-medium text-ink"
            >
              Visit the site
            </a>
            {typeof featured.project.clientcode === "string" && (
              <a
                href={featured.project.clientcode}
                target="_blank"
                rel="noopener noreferrer"
                className="link text-muted"
              >
                Read the code
              </a>
            )}
          </div>
        </div>
      </article>

      {/* ── Index ─────────────────────────────────────────────────────── */}
      <ul className="mt-20 grid grid-cols-1 gap-x-10 gap-y-12 border-t border-line pt-10 sm:grid-cols-2">
        {index.map((p) => (
          <li key={p.title} className="group">
            <a
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
              aria-label={`Open ${p.title} in a new tab`}
            >
              <ProjectShot
                src={p.image}
                alt={`${p.title} screen`}
                sizes="(min-width: 640px) 45vw, 100vw"
                className="transition-opacity duration-300 group-hover:opacity-90"
              />
            </a>

            <div className="mt-4 flex items-baseline justify-between gap-4">
              <h3 className="text-base font-medium text-ink">
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors group-hover:text-accent"
                >
                  {p.title}
                </a>
              </h3>
              {typeof p.clientcode === "string" && (
                <a
                  href={p.clientcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 text-sm text-muted underline decoration-line-strong underline-offset-4 transition-colors hover:text-ink hover:decoration-ink"
                >
                  Code
                </a>
              )}
            </div>

            <p className="mt-1.5 max-w-[46ch] text-sm leading-relaxed text-muted">
              {p.description}
            </p>
            <p className="mt-2 text-[13px] text-faint">
              {p.technologies.join(", ")}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Work;
