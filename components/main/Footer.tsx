import {SITE} from "@/constants/site";

const Footer = () => {
  return (
    <footer className="mt-24 border-t border-line">
      <div className="shell flex flex-col gap-8 py-10 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-base font-medium text-ink">{SITE.name}</p>
          <p className="mt-1 max-w-[42ch] text-sm leading-relaxed text-muted">
            {SITE.jobTitle}. The fastest way to reach me is email.
          </p>
        </div>

        <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
          <li>
            <a href={`mailto:${SITE.email}`} className="link text-ink">
              {SITE.email}
            </a>
          </li>
          <li>
            <a
              href={SITE.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="link text-ink"
            >
              GitHub
            </a>
          </li>
          <li>
            <a href="/Resume.pdf" download className="link text-ink">
              Resume (PDF)
            </a>
          </li>
        </ul>
      </div>

      <div className="shell border-t border-line py-5">
        <p className="text-xs text-faint">
          © {new Date().getFullYear()} {SITE.name}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
