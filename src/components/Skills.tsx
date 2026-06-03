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
          A practical snapshot of technologies I can discuss from coursework
          and projects.
        </p>
      </div>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {skills.map((skill) => (
          <article
            key={skill.name}
            className="flex items-center gap-4 rounded-2xl border border-[#1f2d24]/10 bg-[#fffdf8] p-5 shadow-sm shadow-[#1f2d24]/5 dark:border-white/10 dark:bg-[#111111]"
          >
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#1f2d24]/10 bg-[#fbfaf7] text-sm font-semibold text-[#1f2d24] dark:border-white/10 dark:bg-[#181818] dark:text-[#f4f1df]">
              {skill.icon}
            </div>
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
