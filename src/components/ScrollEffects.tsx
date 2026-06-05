"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollEffects() {
  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reduceMotion) return;

    const lenis = new Lenis({
      duration: 1,
      easing: (time: number) => Math.min(1, 1.001 - Math.pow(2, -10 * time)),
      smoothWheel: true,
    });

    let frameId: number;

    function raf(time: number) {
      lenis.raf(time);
      frameId = window.requestAnimationFrame(raf);
    }

    function handleAnchorClick(event: MouseEvent) {
      const target = event.target;

      if (!(target instanceof Element)) return;

      const anchor = target.closest("a");
      const href = anchor?.getAttribute("href");

      if (!href?.startsWith("#") || href === "#") return;

      const targetElement = document.querySelector(href);

      if (!(targetElement instanceof HTMLElement)) return;

      event.preventDefault();
      lenis.scrollTo(targetElement, {
        offset: -72,
      });
    }

    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".reveal-up").forEach((element) => {
        gsap.to(element, {
          scrollTrigger: {
            trigger: element,
            start: "top 72%",
            end: "top 58%",
            toggleActions: "play none none reverse",
          },
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
        });
      });
    });

    frameId = window.requestAnimationFrame(raf);
    document.addEventListener("click", handleAnchorClick);

    return () => {
      window.cancelAnimationFrame(frameId);
      document.removeEventListener("click", handleAnchorClick);
      ctx.revert();
      lenis.destroy();
    };
  }, []);

  return null;
}
