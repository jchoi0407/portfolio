import ScrollSection from "@/src/components/ScrollSection";

const contactLinks = [
  {
    label: "Email",
    description: "Best for opportunities and direct contact.",
    href: "mailto:junho43377@gmail.com",
  },
  {
    label: "GitHub",
    description: "Code, experiments, and project repositories.",
    href: "https://github.com/jchoi0407",
  },
  {
    label: "LinkedIn",
    description: "Professional updates and background.",
    href: "https://www.linkedin.com/in/junhochoi02",
  },
  {
    label: "Instagram",
    description: "A more personal look at what I am up to.",
    href: "https://www.instagram.com/junochoiii/",
  },
];

export default function Contact() {
  return (
    <ScrollSection
      id="contact"
      className="mx-auto flex min-h-[80vh] w-full max-w-6xl scroll-mt-20 flex-col justify-center px-6 py-16"
    >
      <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr]">
        <div>
          <h2 className="text-3xl font-semibold tracking-tight text-[#1f2d24] dark:text-[#f4f1df] sm:text-4xl">
            Let&apos;s connect.
          </h2>
          <p className="mt-4 max-w-xl text-base leading-7 text-[#5f6f64] dark:text-[#b7c3b9]">
            Open to software engineering internship opportunities and project
            conversations.
          </p>
        </div>

        <div className="divide-y divide-[#1f2d24]/10 border-y border-[#1f2d24]/10 dark:divide-white/10 dark:border-white/10">
          {contactLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("mailto:") ? undefined : "_blank"}
              rel={
                link.href.startsWith("mailto:")
                  ? undefined
                  : "noopener noreferrer"
              }
              className="group flex items-center justify-between gap-6 py-4 transition"
            >
              <div>
                <span className="text-sm font-semibold text-[#1f2d24] transition group-hover:text-[#b91c1c] dark:text-[#f4f1df] dark:group-hover:text-[#ffb4a8]">
                  {link.label}
                </span>
                <p className="mt-1 text-sm leading-6 text-[#5f6f64] dark:text-[#b7c3b9]">
                  {link.description}
                </p>
              </div>
              <span className="text-sm font-semibold text-[#5f6f64] transition group-hover:text-[#b91c1c] dark:text-[#b7c3b9] dark:group-hover:text-[#ffb4a8]">
                →
              </span>
            </a>
          ))}
        </div>
      </div>
    </ScrollSection>
  );
}
