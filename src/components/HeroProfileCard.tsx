"use client";

import Image from "next/image";
import { useState } from "react";

const profileDetails = [
  { label: "School", value: "University of Maryland" },
  { label: "Location", value: "College Park, MD" },
  { label: "Track", value: "Machine Learning" },
];

const qrCells = [
  0, 1, 2, 3, 4, 6, 8, 9, 10, 12, 14, 15, 16, 18, 20, 22, 24, 25, 26, 28, 30,
  31, 33, 35, 36, 38, 40, 42, 44, 45, 47, 48, 49, 52, 54, 56, 57, 58, 60, 62,
  64, 66, 67, 69, 70, 72, 74, 75, 76, 78, 80,
];

export default function HeroProfileCard() {
  const [flipped, setFlipped] = useState(false);

  function flipCard() {
    setFlipped((current) => !current);
  }

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={flipCard}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          flipCard();
        }
      }}
      className="group relative mx-auto block w-full max-w-[320px] cursor-pointer text-left outline-none [perspective:1200px]"
      aria-label="Flip Junho Choi profile card"
    >
      <div
        className={`relative min-h-[470px] rounded-[2rem] transition duration-700 [transform-style:preserve-3d] group-focus-visible:ring-2 group-focus-visible:ring-[#b91c1c]/30 ${
          flipped ? "[transform:rotateY(180deg)]" : ""
        }`}
      >
        <div
          className="absolute inset-0 overflow-hidden rounded-[2rem] border border-[#1f2d24]/10 bg-[#fffdf8] p-5 shadow-sm shadow-[#1f2d24]/5 [backface-visibility:hidden] dark:border-white/10 dark:bg-[#111111] dark:shadow-black/20"
        >
          <div className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-[#b91c1c] dark:bg-[#8f1818]" />
          <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-white/35" />
          <div className="relative z-10 flex items-center justify-between gap-4">
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-white">
              Student ID
            </p>
            <span className="rounded-full bg-white/15 px-2.5 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.12em] text-white ring-1 ring-white/20">
              UMD CS
            </span>
          </div>

          <div className="relative z-10 mt-12 flex justify-center">
            <div className="relative h-56 w-48 overflow-hidden rounded-3xl border border-[#1f2d24]/10 bg-white p-2 shadow-sm shadow-[#1f2d24]/10 dark:border-white/10 dark:bg-[#181818]">
              <Image
                src="/profile.jpg"
                alt="Junho Choi profile"
                fill
                sizes="160px"
                className="object-contain brightness-[1.04]"
                priority
              />
            </div>
          </div>

          <div className="relative z-10 mt-7 text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-[#1f2d24] dark:text-[#f4f1df]">
              Junho Choi
            </h2>
            <p className="mt-2 text-sm font-medium text-[#5f6f64] dark:text-[#b7c3b9]">
              Undergraduate Student
            </p>
          </div>

        </div>

        <div
          className="absolute inset-0 overflow-hidden rounded-[2rem] border border-[#1f2d24]/10 bg-[#fffdf8] p-5 shadow-sm shadow-[#1f2d24]/5 [backface-visibility:hidden] [transform:rotateY(180deg)] dark:border-white/10 dark:bg-[#111111] dark:shadow-black/20"
        >
          <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-[#b91c1c] dark:bg-[#8f1818]" />
          <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-white/35" />
          <div className="relative z-10">
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-white">
              Profile details
            </p>
          </div>

          <div className="relative z-10 mt-12 divide-y divide-[#1f2d24]/10 border-b border-[#1f2d24]/10 dark:divide-white/10 dark:border-white/10">
            {profileDetails.map((detail) => (
              <div key={detail.label} className="py-3">
                <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-[#5f6f64] dark:text-[#b7c3b9]">
                  {detail.label}
                </p>
                <p className="mt-1.5 text-sm font-semibold leading-6 text-[#1f2d24] dark:text-[#f4f1df]">
                  {detail.value}
                </p>
              </div>
            ))}
          </div>

          <div className="relative z-10 mt-7 flex justify-center">
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
              }}
              className="grid h-28 w-28 grid-cols-9 gap-0.5 rounded-xl border border-[#1f2d24]/10 bg-[#fbfaf7] p-2 transition hover:-translate-y-0.5 hover:border-[#274c3a]/30 dark:border-white/10 dark:bg-white/[0.06]"
              aria-label="Scan Junho Choi profile QR code"
            >
              {Array.from({ length: 81 }).map((_, index) => (
                <span
                  key={index}
                  className={`rounded-[1px] ${
                    qrCells.includes(index)
                      ? "bg-[#1f2d24] dark:bg-[#f4f1df]"
                      : "bg-transparent"
                  }`}
                  aria-hidden="true"
                />
              ))}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
