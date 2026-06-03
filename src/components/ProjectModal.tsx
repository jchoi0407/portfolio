"use client";

import { useEffect } from "react";

import type { Project } from "@/src/data/projects";

type ProjectModalProps = {
  project: Project;
  onClose: () => void;
};

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#1f2d24]/20 px-4 py-6 backdrop-blur-[2px] animate-modal-backdrop dark:bg-black/55"
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
      onClick={onClose}
    >
      <div
        className="max-h-full w-full max-w-3xl overflow-hidden rounded-2xl border border-[#1f2d24]/10 bg-[#fffdf8] shadow-2xl shadow-[#1f2d24]/20 animate-modal-window dark:border-white/10 dark:bg-[#111111] dark:shadow-black/40"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-6 border-b border-[#1f2d24]/10 px-5 py-5 dark:border-white/10 sm:px-6">
          <div>
            <div className="flex flex-wrap gap-2 text-xs font-medium">
              <span className="rounded-full bg-[#b91c1c]/10 px-2.5 py-1 text-[#8f1818] dark:bg-[#b91c1c]/25 dark:text-[#ffb4a8]">
                {project.status}
              </span>
              <span className="rounded-full bg-[#1f2d24]/5 px-2.5 py-1 text-[#5f6f64] dark:bg-[#181818] dark:text-[#b7c3b9]">
                {project.category}
              </span>
            </div>
            <h3
              id="project-modal-title"
              className="mt-3 text-2xl font-semibold tracking-tight text-[#1f2d24] dark:text-[#f4f1df]"
            >
              {project.title}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-[#5f6f64] transition hover:bg-[#1f2d24]/5 hover:text-[#1f2d24] dark:text-[#b7c3b9] dark:hover:bg-white/10 dark:hover:text-[#f4f1df]"
            aria-label="Close project details"
          >
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
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </button>
        </div>

        <div className="max-h-[80vh] overflow-y-auto p-5 sm:p-6">
          <p className="max-w-2xl text-sm leading-6 text-[#5f6f64] dark:text-[#b7c3b9]">
            {project.description}
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-[#1f2d24]/10 bg-[#fbfaf7] px-3 py-1 text-xs font-medium text-[#5f6f64] dark:border-white/10 dark:bg-[#181818] dark:text-[#b7c3b9]"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-6 rounded-2xl border border-[#1f2d24]/10 bg-[#fbfaf7] p-5 dark:border-white/10 dark:bg-[#181818]">
            <h4 className="text-sm font-semibold text-[#1f2d24] dark:text-[#f4f1df]">
              Project details
            </h4>
            <ul className="mt-3 space-y-2">
              {project.highlights.map((highlight) => (
                <li
                  key={highlight}
                  className="flex gap-2 text-sm leading-6 text-[#5f6f64] dark:text-[#b7c3b9]"
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#b91c1c]/70" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6 flex flex-wrap gap-2 text-sm font-semibold">
            <a
              href={project.github}
              className="rounded-md border border-[#1f2d24]/15 px-3 py-2 text-[#1f2d24] transition hover:border-[#1f2d24]/30 hover:bg-[#fbfaf7] dark:border-white/15 dark:text-[#f4f1df] dark:hover:border-white/30 dark:hover:bg-white/10"
            >
              GitHub
            </a>
            <a
              href={project.demo}
              className="rounded-md border border-[#1f2d24]/15 px-3 py-2 text-[#1f2d24] transition hover:border-[#1f2d24]/30 hover:bg-[#fbfaf7] dark:border-white/15 dark:text-[#f4f1df] dark:hover:border-white/30 dark:hover:bg-white/10"
            >
              Demo
            </a>
            {project.live && (
              <a
                href={project.live}
                className="rounded-md bg-[#1f2d24] px-3 py-2 text-[#fffaf0] transition hover:bg-[#2f4637] dark:bg-[#f4f1df] dark:text-[#050505] dark:hover:bg-white"
              >
                Live
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
