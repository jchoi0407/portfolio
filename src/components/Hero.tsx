
const snapshotItems = [
  { label: "Year", value: "Junior" },
  { label: "School", value: "University of Maryland" },
  { label: "Focus", value: "Full-stack, mobile, computer vision" },
];

export default function Hero() {
  return (
    <section
      id="about"
      className="mx-auto grid min-h-[90vh] w-full max-w-6xl scroll-mt-20 items-center gap-12 px-6 py-24 lg:grid-cols-[1.1fr_0.9fr]"
    >
      <div className="max-w-3xl">
        <div className="flex items-center gap-2 text-sm font-medium text-[#5f6f64] dark:text-[#b7c3b9]">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-[#b91c1c] opacity-75 animate-ping" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[#b91c1c]" />
          </span>
          Seeking Summer 2027 SWE internships
        </div>

        <h1 className="mt-5 text-4xl font-bold leading-tight text-[#1f2d24] dark:text-[#f4f1df] sm:text-5xl">
          Hello, I&apos;m Junho Choi
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-[#5f6f64] dark:text-[#b7c3b9]">
          A junior Computer Science student at UMD interested in full-stack
          development, mobile applications, and computer vision.
        </p>

        <p className="mt-5 max-w-2xl text-base leading-7 text-[#5f6f64] dark:text-[#b7c3b9]">
          I care about clean implementation, practical product decisions, and
          building things that are simple enough for real people to use.
        </p>
      </div>

      <aside className="rounded-2xl border border-[#1f2d24]/10 bg-[#fffdf8] p-6 shadow-sm shadow-[#1f2d24]/5 dark:border-white/10 dark:bg-[#111111] dark:shadow-black/20">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#b91c1c] dark:text-[#ffb4a8]">
          Snapshot
        </p>
        <div className="mt-4 divide-y divide-[#1f2d24]/10 dark:divide-white/10">
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
