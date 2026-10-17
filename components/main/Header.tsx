"use client";

import {useEffect, useRef, useState} from "react";
import {SITE} from "@/constants/site";

const links = [
  {label: "Work", href: "#work"},
  {label: "Note", href: "#note"},
  {label: "Contact", href: "#contact"},
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  // Escape closes the panel and returns focus to the toggle.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/90 backdrop-blur-sm">
      <div className="shell flex h-14 items-center justify-between">
        <a
          href="#top"
          className="text-[15px] font-medium tracking-tight text-ink"
          onClick={() => setOpen(false)}
        >
          {SITE.name}
        </a>

        <nav aria-label="Primary" className="hidden sm:block">
          <ul className="flex items-center gap-7">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="masthead-link">
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={`mailto:${SITE.email}`}
                className="text-sm font-medium text-ink underline decoration-line-strong underline-offset-4 transition-colors hover:decoration-ink"
              >
                Email
              </a>
            </li>
          </ul>
        </nav>

        <button
          ref={toggleRef}
          type="button"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          className="-mr-2 flex h-9 items-center rounded px-2 text-sm text-muted transition-colors hover:text-ink sm:hidden"
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      <div
        id="mobile-nav"
        ref={panelRef}
        hidden={!open}
        className="border-t border-line bg-paper sm:hidden"
      >
        <nav aria-label="Mobile" className="shell py-2">
          <ul>
            {links.map((l) => (
              <li key={l.href} className="border-b border-line last:border-b-0">
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-3.5 text-base text-ink"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={`mailto:${SITE.email}`}
                onClick={() => setOpen(false)}
                className="block py-3.5 text-base text-ink"
              >
                {SITE.email}
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
