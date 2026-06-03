"use client";

import { useEffect, useRef, useState } from "react";

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
  const sectionRef = useRef<HTMLElement>(null);
  const frameRef = useRef<number | null>(null);
  const [style, setStyle] = useState({
    opacity: 1,
    transform: "translate3d(0, 0, 0)",
  });

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reduceMotion) return;

    function updateSectionStyle() {
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const viewportCenter = window.innerHeight / 2;
      const sectionCenter = rect.top + rect.height / 2;
      const distance = Math.abs(sectionCenter - viewportCenter);
      const maxDistance = window.innerHeight * 0.7;
      const rawProgress = Math.max(0, 1 - distance / maxDistance);
      const progress = rawProgress * rawProgress * (3 - 2 * rawProgress);
      const direction = sectionCenter < viewportCenter ? -1 : 1;

      const opacity = 0.2 + progress * 0.8;
      const translateY = direction * (1 - progress) * 14;

      setStyle({
        opacity,
        transform: `translate3d(0, ${translateY}px, 0)`,
      });
    }

    function requestUpdate() {
      if (frameRef.current !== null) return;

      frameRef.current = window.requestAnimationFrame(() => {
        frameRef.current = null;
        updateSectionStyle();
      });
    }

    updateSectionStyle();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      if (frameRef.current !== null) {
        window.cancelAnimationFrame(frameRef.current);
      }

      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id={id}
      style={style}
      className={`transition-[opacity,transform] duration-300 ease-out will-change-[opacity,transform] ${className}`}
    >
      {children}
    </section>
  );
}
