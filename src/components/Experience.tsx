import Image from "next/image";

import ScrollSection from "@/src/components/ScrollSection";
import { experiences } from "@/src/data/experience";

export default function Experience() {
  return (
    <ScrollSection
      id="experience"
      className="mx-auto flex min-h-[80vh] w-full max-w-6xl scroll-mt-20 flex-col justify-center px-6 py-16"
    >
      <div className="max-w-2xl">
        <h2 className="text-3xl font-semibold tracking-tight text-[#1f2d24] dark:text-[#f4f1df]">
          Work Experience
        </h2>
        <p className="mt-3 text-base leading-7 text-[#5f6f64] dark:text-[#b7c3b9]">
          Leadership, operations, and cross-cultural communication experience
          in a mission-driven environment.
        </p>
      </div>

      <div className="mt-10 space-y-5">
        {experiences.map((experience) => (
          <article
            key={`${experience.organization}-${experience.role}`}
            className="grid gap-6 rounded-2xl border border-[#1f2d24]/10 bg-[#fffdf8] p-6 shadow-sm shadow-[#1f2d24]/5 dark:border-white/10 dark:bg-[#111111] dark:shadow-black/20 lg:grid-cols-[1fr_280px]"
          >
            <div>
              <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                <div>
                  <h3 className="text-xl font-semibold tracking-tight text-[#1f2d24] dark:text-[#f4f1df]">
                    {experience.role}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-[#5f6f64] dark:text-[#b7c3b9]">
                    {experience.organization} · {experience.location}
                  </p>
                </div>
                <p className="text-sm font-medium text-[#5f6f64] dark:text-[#b7c3b9]">
                  {experience.period}
                </p>
              </div>

              <p className="mt-4 max-w-3xl text-sm leading-6 text-[#5f6f64] dark:text-[#b7c3b9]">
                {experience.description}
              </p>

              <ul className="mt-5 space-y-2">
                {experience.highlights.map((highlight) => (
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

            {experience.image && (
              <div className="relative min-h-[320px] overflow-hidden rounded-xl border border-[#1f2d24]/10 bg-[#f2eee5] dark:border-white/10 dark:bg-[#181818] lg:min-h-0">
                <Image
                  src={experience.image}
                  alt={`${experience.organization} experience photo`}
                  fill
                  sizes="(min-width: 1024px) 280px, 100vw"
                  className="object-cover"
                />
              </div>
            )}
          </article>
        ))}
      </div>
    </ScrollSection>
  );
}
