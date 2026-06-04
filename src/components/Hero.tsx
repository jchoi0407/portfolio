
import Image from "next/image";

const snapshotItems = [
  { label: "School", value: "University of Maryland" },
  { label: "Location", value: "College Park, MD" },
  { label: "Focus", value: "Full-stack · Mobile · Computer Vision" },
];

export default function Hero() {
  return (
    <section
      id="about"
      className="mx-auto grid min-h-[90vh] w-full max-w-6xl scroll-mt-20 items-center gap-12 px-6 py-24 lg:grid-cols-[1.1fr_0.9fr]"
    >
      <div className="max-w-3xl">
        <div className="flex items-center gap-2.5 text-[15px] font-medium text-[#5f6f64] dark:text-[#b7c3b9]">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full rounded-full bg-[#b91c1c] opacity-75 animate-ping" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#b91c1c]" />
          </span>
          Seeking Summer 2027 SWE internships
        </div>

        <h1 className="mt-5 text-4xl font-bold leading-tight text-[#1f2d24] dark:text-[#f4f1df] sm:text-5xl">
          Hello, I&apos;m Junho Choi
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-[#5f6f64] dark:text-[#b7c3b9]">
          I&apos;m a junior Computer Science student at the University of
          Maryland, interested in full-stack development, mobile applications,
          and computer vision.
        </p>

        <p className="mt-5 max-w-2xl text-base leading-7 text-[#5f6f64] dark:text-[#b7c3b9]">
          I&apos;m drawn to projects that combine solid engineering fundamentals
          with interfaces people can actually interact with.
        </p>
      </div>

      <aside className="group rounded-2xl border border-[#1f2d24]/10 bg-[#fffdf8] p-6 shadow-sm shadow-[#1f2d24]/5 transition duration-300 hover:-translate-y-1 hover:border-[#1f2d24]/15 hover:shadow-xl hover:shadow-[#1f2d24]/10 dark:border-white/10 dark:bg-[#111111] dark:shadow-black/20 dark:hover:border-white/20">
        <div className="relative mx-auto h-32 w-32 overflow-hidden rounded-full bg-[#fbfaf7] shadow-sm shadow-[#1f2d24]/10 ring-1 ring-[#1f2d24]/10 transition duration-300 group-hover:brightness-105 dark:bg-[#181818] dark:ring-white/10">
          <Image
            src="/projects/portfolio_avatar.png"
            alt="Junho Choi avatar"
            fill
            sizes="128px"
            className="object-contain p-1"
            priority
          />
        </div>

        <div className="mt-5 text-center">
          <p className="text-xl font-semibold tracking-tight text-[#1f2d24] dark:text-[#f4f1df]">
            Junho Choi
          </p>
          <p className="mt-1 text-sm font-medium text-[#5f6f64] dark:text-[#b7c3b9]">
            Computer Science @ UMD
          </p>
        </div>

        <div className="mt-6 divide-y divide-[#1f2d24]/10 dark:divide-white/10">
          {snapshotItems.map((item) => (
            <div
              key={item.label}
              className="grid gap-2 py-4 first:pt-0 last:pb-0 sm:grid-cols-[88px_1fr]"
            >
              <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[#5f6f64] dark:text-[#b7c3b9]">
                {item.label}
              </span>
              <span className="text-sm font-medium leading-6 text-[#1f2d24] dark:text-[#f4f1df]">
                {item.value}
              </span>
            </div>
          ))}
        </div>
      </aside>
    </section>
  );
}
