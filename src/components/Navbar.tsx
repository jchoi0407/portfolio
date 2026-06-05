"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import { useTheme } from "@/src/hooks/useTheme";

const navLinks = [
  { label: "About", short: "About", href: "#about", id: "about" },
  { label: "Projects", short: "Proj", href: "#projects", id: "projects" },
  { label: "Experience", short: "Exp", href: "#experience", id: "experience" },
  { label: "Skills", short: "Skills", href: "#skills", id: "skills" },
  { label: "Contact", short: "Contact", href: "#contact", id: "contact" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("about");
  const { isDarkMode, toggleTheme } = useTheme();

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.getElementById(link.id))
      .filter((section): section is HTMLElement => section !== null);

    function updateActiveSection() {
      const viewportAnchor = window.innerHeight * 0.42;
      let currentSection = sections[0]?.id ?? "about";

      for (const section of sections) {
        const rect = section.getBoundingClientRect();

        if (rect.top <= viewportAnchor) {
          currentSection = section.id;
        }
      }

      setActiveSection(currentSection);
    }

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  return (
    <nav className="fixed left-0 top-0 z-40 w-full border-b border-[#1f2d24]/5 bg-[#fbfaf7]/25 shadow-sm shadow-[#1f2d24]/0 backdrop-blur-xl dark:border-white/5 dark:bg-black/15 dark:shadow-black/20">
      <div className="mx-auto flex max-w-6xl items-center gap-4 px-6 py-3">
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

        <div className="flex min-w-0 flex-1 items-center gap-4 overflow-x-auto whitespace-nowrap">
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

        <div className="flex shrink-0 items-center gap-2">
          <a
            href="/resume.pdf"
            className="hidden h-8 items-center rounded-md bg-[#1f2d24] px-3 text-sm font-semibold leading-none text-[#fffaf0] transition hover:bg-[#2f4637] dark:bg-[#f4f1df] dark:text-[#050505] dark:hover:bg-white sm:inline-flex"
          >
            Resume
          </a>

          <button
            type="button"
            onClick={toggleTheme}
            aria-pressed={isDarkMode}
            className="relative inline-flex h-8 w-12 shrink-0 items-center rounded-md border border-[#1f2d24]/10 bg-[#1f2d24]/5 p-1 transition hover:bg-[#1f2d24]/10 dark:border-white/10 dark:bg-white/10 dark:hover:bg-white/15"
            aria-label={
              isDarkMode ? "Switch to light mode" : "Switch to dark mode"
            }
          >
            <span
              className={`h-6 w-6 rounded-[0.35rem] bg-[#1f2d24] shadow-sm shadow-[#1f2d24]/20 transition-transform duration-200 dark:bg-[#f4f1df] ${
                isDarkMode ? "translate-x-4" : "translate-x-0"
              }`}
            />
          </button>
        </div>
      </div>
    </nav>
  );
}
