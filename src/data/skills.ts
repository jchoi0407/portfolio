export type Skill = {
  name: string;
  category: "Coursework" | "Projects";
  icon: string;
};

export const skills: Skill[] = [
  { name: "Java", category: "Coursework", icon: "J" },
  { name: "C", category: "Coursework", icon: "C" },
  { name: "OCaml", category: "Coursework", icon: "OC" },
  { name: "Rust", category: "Coursework", icon: "RS" },
  { name: "HTML", category: "Coursework", icon: "H" },
  { name: "CSS", category: "Coursework", icon: "CSS" },
  { name: "JavaScript", category: "Coursework", icon: "JS" },
  { name: "TypeScript", category: "Projects", icon: "TS" },
  { name: "React", category: "Projects", icon: "R" },
  { name: "Next.js", category: "Projects", icon: "N" },
  { name: "React Native", category: "Projects", icon: "RN" },
  { name: "Expo", category: "Projects", icon: "EX" },
  { name: "Tailwind CSS", category: "Projects", icon: "TW" },
  { name: "Python", category: "Projects", icon: "PY" },
  { name: "FastAPI", category: "Projects", icon: "API" },
  { name: "Supabase", category: "Projects", icon: "SB" },
];
