
import HeroProfileCard from "@/src/components/HeroProfileCard";

export default function Hero() {
  return (
    <section
      id="about"
      className="mx-auto grid min-h-[90vh] w-full max-w-6xl scroll-mt-20 items-center gap-12 px-6 py-24 lg:grid-cols-[1.1fr_0.9fr]"
    >
      <div className="max-w-2xl">
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
          Maryland building web and mobile applications with a focus on usable
          interfaces, reliable data flows, and practical software systems.
        </p>

        <p className="mt-5 max-w-2xl text-base leading-7 text-[#5f6f64] dark:text-[#b7c3b9]">
          My recent work spans React Native apps, browser-based computer vision,
          and full-stack projects that connect engineering fundamentals with
          real user interactions.
        </p>
      </div>

      <HeroProfileCard />
    </section>
  );
}
