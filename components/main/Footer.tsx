import React from "react";
import {FaGithub, FaEnvelope} from "react-icons/fa";

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/AdibHoque",
    Icon: FaGithub,
  },
  {
    label: "Email",
    href: "mailto:adibhoque04@gmail.com",
    Icon: FaEnvelope,
  },
];

const Footer = () => {
  return (
    <footer className="w-full border-t border-glass bg-bg/50 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-6 px-6 py-10 md:flex-row md:justify-between md:px-10">
        <div className="text-center md:text-left">
          <p className="text-base font-bold tracking-tight text-text">
            Adib <span className="text-accent">Hoque</span>
          </p>
          <p className="mt-1 text-sm text-muted">
            Frontend Developer · Building for the web.
          </p>
        </div>

        <div className="flex items-center gap-3">
          {socials.map(({label, href, Icon}) => {
            const external = href.startsWith("http");
            return (
              <a
                key={label}
                href={href}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                aria-label={label}
                className="flex size-10 items-center justify-center rounded-full border border-glass bg-white/[0.03] text-muted transition-all hover:border-accent/50 hover:text-white"
              >
                <Icon className="h-4 w-4" />
              </a>
            );
          })}
        </div>
      </div>

      <div className="border-t border-glass py-5 text-center text-sm text-subtle">
        &copy; {new Date().getFullYear()} Adib Hoque. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
