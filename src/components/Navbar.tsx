"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "About", short: "About", href: "#about", id: "about" },
  { label: "Projects", short: "Proj", href: "#projects", id: "projects" },
  { label: "Experience", short: "Exp", href: "#experience", id: "experience" },
  { label: "Skills", short: "Skills", href: "#skills", id: "skills" },
  { label: "Contact", short: "Contact", href: "#contact", id: "contact" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("about");
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("theme");
    const shouldUseDarkMode =
      savedTheme === "dark" ||
      (!savedTheme &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);

    document.documentElement.classList.toggle("dark", shouldUseDarkMode);
    queueMicrotask(() => setIsDarkMode(shouldUseDarkMode));
  }, []);

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.getElementById(link.id))
      .filter((s): s is HTMLElement => s !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveSection(visible.target.id);
      },
      { rootMargin: "-35% 0px -45% 0px", threshold: [0.1, 0.25, 0.5] }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  function toggleDarkMode() {
    setIsDarkMode((current) => {
      const nextDarkMode = !current;

      document.documentElement.classList.toggle("dark", nextDarkMode);
      window.localStorage.setItem("theme", nextDarkMode ? "dark" : "light");

      return nextDarkMode;
    });
  }

  return (
    <nav className="fixed left-0 top-0 z-40 w-full border-b border-[#1f2d24]/5 bg-[#fbfaf7]/25 shadow-sm shadow-[#1f2d24]/0 backdrop-blur-xl dark:border-white/5 dark:bg-black/15 dark:shadow-black/20">
      <div className="mx-auto flex max-w-6xl items-center gap-4 overflow-x-auto whitespace-nowrap px-6 py-3">
        <a
          href="#top"
          className="relative h-8 w-8 shrink-0 overflow-hidden rounded-full bg-white/30 shadow-sm shadow-[#1f2d24]/10 transition hover:bg-white/50 dark:bg-white/10 dark:hover:bg-white/20"
          aria-label="Back to top"
        >
          <Image
            src="/icon.png"
            alt=""
            fill
            sizes="32px"
            className="object-cover"
          />
        </a>

        <div className="flex items-center gap-4">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.href}
                href={link.href}
                className={
                  isActive
                    ? "border-b-2 border-[#b91c1c] px-0.5 py-1 text-xs font-semibold text-[#1f2d24] transition dark:text-white sm:text-sm"
                    : "border-b-2 border-transparent px-0.5 py-1 text-xs font-medium text-[#1f2d24]/65 transition hover:text-[#1f2d24] dark:text-white/65 dark:hover:text-white sm:text-sm"
                }
              >
                <span className="sm:hidden">{link.short}</span>
                <span className="hidden sm:inline">{link.label}</span>
              </a>
            );
          })}
        </div>

        <div className="ml-auto flex shrink-0 items-center gap-3">
          <a
            href="/resume.pdf"
            className="hidden rounded-full bg-[#1f2d24] px-3 py-1.5 text-sm font-semibold text-[#fffaf0] transition hover:bg-[#2f4637] dark:bg-[#f4f1df] dark:text-[#050505] dark:hover:bg-white sm:block"
          >
            Resume
          </a>

          <button
            type="button"
            onClick={toggleDarkMode}
            className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-[#1f2d24]/70 transition hover:bg-[#1f2d24]/5 hover:text-[#1f2d24] dark:text-white/70 dark:hover:bg-white/10 dark:hover:text-white"
            aria-label={
              isDarkMode ? "Switch to light mode" : "Switch to dark mode"
            }
          >
            {isDarkMode ? (
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              >
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2" />
                <path d="M12 20v2" />
                <path d="m4.93 4.93 1.41 1.41" />
                <path d="m17.66 17.66 1.41 1.41" />
                <path d="M2 12h2" />
                <path d="M20 12h2" />
                <path d="m6.34 17.66-1.41 1.41" />
                <path d="m19.07 4.93-1.41 1.41" />
              </svg>
            ) : (
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              >
                <path d="M20.99 11.15A8 8 0 1 1 12.85 3a6 6 0 0 0 8.14 8.15Z" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}
