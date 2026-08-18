import Image from "next/image";
import React from "react";
import {FaCode, FaEye} from "react-icons/fa";

interface Props {
  src: string;
  title: string;
  description: string;
  link: string;
  clientcode: string;
  servercode: string;
  features: string[];
}

const ProjectCard = ({
  src,
  title,
  description,
  link,
  clientcode,
  servercode,
  features,
}: Props) => {
  const singleRepo = clientcode === servercode;

  return (
    <article className="card flex h-full flex-col overflow-hidden">
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative block aspect-video w-full overflow-hidden"
      >
        <Image
          src={src}
          alt={`${title} screenshot`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </a>

      <div className="flex flex-1 flex-col p-5">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xl font-semibold text-text transition-colors hover:text-accent-soft"
        >
          {title}
        </a>
        <p className="mt-2 text-sm leading-relaxed text-muted">{description}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {features.map((f) => (
            <span className="chip" key={f}>
              {f}
            </span>
          ))}
        </div>

        <div className="mt-5 flex items-center">
          <Image
            src={singleRepo ? "/icons-next.svg" : "/used-tech.svg"}
            alt="Technologies used"
            width={200}
            height={32}
            className="h-8 w-auto object-contain"
          />
        </div>

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
          {singleRepo ? (
            <a
              href={clientcode}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost w-full"
            >
              <FaCode />
              Project Code
            </a>
          ) : (
            <div className="flex gap-2">
              <a
                href={clientcode}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost w-1/2"
              >
                <FaCode />
                Client
              </a>
              <a
                href={servercode}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost w-1/2"
              >
                <FaCode />
                Server
              </a>
            </div>
          )}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
