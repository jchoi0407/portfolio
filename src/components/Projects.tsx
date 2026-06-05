"use client";

import Image from "next/image";
import { useState } from "react";

import ScrollSection from "@/src/components/ScrollSection";
import { projects } from "@/src/data/projects";
import type { Project } from "@/src/data/projects";
import ProjectModal from "@/src/components/ProjectModal";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <>
      <ScrollSection
        id="projects"
        className="mx-auto flex min-h-[80vh] w-full max-w-6xl scroll-mt-20 flex-col justify-center px-6 py-16"
      >
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-tight text-[#1f2d24] dark:text-[#f4f1df]">
            Projects
          </h2>
          <p className="mt-3 text-base leading-7 text-[#5f6f64] dark:text-[#b7c3b9]">
            Selected projects across mobile, full-stack web, and computer
            vision.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              role="button"
              tabIndex={0}
              onClick={() => setSelectedProject(project)}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  setSelectedProject(project);
                }
              }}
              className="flex min-h-full cursor-pointer flex-col overflow-hidden rounded-2xl border border-[#1f2d24]/10 bg-[#fffdf8] shadow-sm shadow-[#1f2d24]/5 transition duration-200 ease-out hover:-translate-y-1 hover:scale-[1.015] hover:border-[#1f2d24]/20 hover:shadow-md hover:shadow-[#1f2d24]/10 focus:outline-none focus:ring-2 focus:ring-[#b91c1c]/30 dark:border-white/10 dark:bg-[#111111] dark:shadow-black/20 dark:hover:border-white/20"
            >
              {project.image && (
                <div
                  className={
                    project.imageBackground === "card"
                      ? "relative aspect-[16/10] border-b border-[#1f2d24]/10 bg-[#fffdf8] dark:border-white/10 dark:bg-[#111111]"
                      : "relative aspect-[16/10] border-b border-[#1f2d24]/10 bg-[#f2eee5] dark:border-white/10 dark:bg-[#181818]"
                  }
                >
                  <div className="absolute right-2.5 top-2.5 z-10 inline-flex items-center gap-1.5 rounded-full bg-[#fffdf8]/75 px-2 py-0.5 text-xs font-medium text-[#8f1818] shadow-sm shadow-[#1f2d24]/5 backdrop-blur dark:bg-[#111111]/70 dark:text-[#ffb4a8]">
                    {project.status === "In progress" && (
                      <span className="h-1.5 w-1.5 rounded-full bg-[#b91c1c] animate-pulse" />
                    )}
                    {project.status}
                  </div>
                  <Image
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className={
                      project.imageFit === "contain"
                        ? "object-contain p-2"
                        : "object-cover"
                    }
                  />
                </div>
              )}

              <div className="flex flex-1 flex-col p-5">
                <div className="mb-3 flex flex-wrap gap-2 text-xs font-medium">
                  <span className="rounded-full bg-[#1f2d24]/5 px-2.5 py-1 text-[#5f6f64] dark:bg-[#181818] dark:text-[#b7c3b9]">
                    {project.category}
                  </span>
                </div>

                <h3 className="text-xl font-semibold tracking-tight text-[#1f2d24] dark:text-[#f4f1df]">
                  {project.title}
                </h3>
                <p className="mt-auto pt-5 text-sm font-medium text-[#5f6f64] dark:text-[#b7c3b9]">
                  Click to view details
                </p>
              </div>
            </article>
          ))}
        </div>
      </ScrollSection>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </>
  );
}
