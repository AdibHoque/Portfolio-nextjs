"use client";

import clsx from "clsx";
import Link from "next/link";
import {useState, useEffect} from "react";

import {MdOutlineMenu, MdOutlineMenuOpen} from "react-icons/md";

const links = [
  {label: "About", href: "#about"},
  {label: "Skills", href: "#skills"},
  {label: "Projects", href: "#projects"},
  {label: "Contact", href: "#contact"},
];

export default function Header() {
  const [open, setOpen] = useState(false);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header className="fixed top-0 left-0 z-30 w-full border-b border-glass bg-bg/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-5 sm:px-8 md:px-10">
        {/* Wordmark */}
        <Link
          href="#about"
          onClick={() => setOpen(false)}
          className="text-base font-bold tracking-tight text-text transition-colors hover:text-white sm:text-lg"
        >
          Adib <span className="text-accent">Hoque</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-6 lg:gap-8">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="text-sm font-medium text-muted transition-colors hover:text-white"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="z-50 flex size-10 items-center justify-center rounded-xl border border-glass bg-white/[0.04] text-text transition-all hover:bg-white/[0.08] md:hidden"
        >
          {open ? (
            <MdOutlineMenuOpen className="h-6 w-6" />
          ) : (
            <MdOutlineMenu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile overlay backdrop */}
      <div
        aria-hidden="true"
        onClick={() => setOpen(false)}
        className={clsx(
          "fixed inset-0 top-16 z-20 bg-black/40 backdrop-blur-sm transition-all duration-300 md:hidden",
          open ? "opacity-100" : "pointer-events-none opacity-0"
        )}
      />

      {/* Mobile slide-in panel */}
      <div
        className={clsx(
          "fixed inset-x-0 top-16 z-20 border-b border-glass bg-[#0b0b14]/95 backdrop-blur-xl transition-all duration-300 ease-out md:hidden",
          open ? "translate-y-0 opacity-100" : "-translate-y-4 pointer-events-none opacity-0"
        )}
      >
        <nav className="flex flex-col px-5 py-6" aria-label="Mobile navigation">
          {links.map((l, i) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              style={{
                transitionDelay: open ? `${i * 50}ms` : "0ms",
                opacity: open ? 1 : 0,
                transform: open ? "translateX(0)" : "translateX(-8px)",
              }}
              className="flex items-center border-b border-glass/60 py-4 text-lg font-medium text-muted transition-all duration-200 last:border-b-0 hover:text-white"
            >
              <span className="mr-3 text-xs font-semibold text-accent/60">{String(i + 1).padStart(2, "0")}</span>
              {l.label}
            </Link>
          ))}

          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="btn btn-primary mt-5 w-full"
          >
            Get In Touch
          </a>
        </nav>
      </div>
    </header>
  );
}
