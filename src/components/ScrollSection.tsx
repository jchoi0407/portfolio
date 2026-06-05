interface ScrollSectionProps {
  id: string;
  className?: string;
  children: React.ReactNode;
}

export default function ScrollSection({
  id,
  className = "",
  children,
}: ScrollSectionProps) {
  return (
    <section
      id={id}
      className={`reveal-up translate-y-14 opacity-0 ${className}`}
    >
      {children}
    </section>
  );
}
