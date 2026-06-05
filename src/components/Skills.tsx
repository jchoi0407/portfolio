import Image from "next/image";

import ScrollSection from "@/src/components/ScrollSection";
import { skills } from "@/src/data/skills";

export default function Skills() {
  return (
    <ScrollSection
      id="skills"
      className="mx-auto flex min-h-[80vh] w-full max-w-6xl scroll-mt-20 flex-col justify-center px-6 py-16"
    >
      <div className="max-w-2xl">
        <h2 className="text-3xl font-semibold tracking-tight text-[#1f2d24] dark:text-[#f4f1df]">
          Skills
        </h2>
        <p className="mt-3 text-base leading-7 text-[#5f6f64] dark:text-[#b7c3b9]">
          Technologies I&apos;ve used through computer science coursework,
          project development, and hands-on software work.
        </p>
      </div>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {skills.map((skill) => (
          <article
            key={skill.name}
            className="flex items-center gap-3 rounded-2xl border border-[#1f2d24]/10 bg-[#fffdf8] p-4 shadow-sm shadow-[#1f2d24]/5 transition hover:-translate-y-0.5 hover:border-[#1f2d24]/20 hover:shadow-md hover:shadow-[#1f2d24]/10 dark:border-white/10 dark:bg-[#111111] dark:hover:border-white/20"
          >
            {skill.iconPath ? (
              <div className="flex h-12 w-12 shrink-0 items-center justify-center">
                <Image
                  src={skill.iconPath}
                  alt=""
                  width={42}
                  height={42}
                  className={`max-h-9 max-w-9 object-contain ${
                    skill.darkIconPath ? "dark:hidden" : ""
                  }`}
                />
                {skill.darkIconPath && (
                  <Image
                    src={skill.darkIconPath}
                    alt=""
                    width={42}
                    height={42}
                    className="hidden max-h-9 max-w-9 object-contain dark:block"
                  />
                )}
              </div>
            ) : (
              <div
                className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-sm font-bold shadow-sm ${skill.iconClass}`}
              >
                {skill.icon}
              </div>
            )}
            <div>
              <h3 className="text-sm font-semibold text-[#1f2d24] dark:text-[#f4f1df]">
                {skill.name}
              </h3>
              <p className="mt-1 text-xs font-medium text-[#5f6f64] dark:text-[#b7c3b9]">
                {skill.category}
              </p>
            </div>
          </article>
        ))}
      </div>
    </ScrollSection>
  );
}
