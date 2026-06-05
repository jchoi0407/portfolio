export type Skill = {
  name: string;
  category:
    | "Programming Languages"
    | "Systems Programming"
    | "Functional Programming"
    | "Frontend"
    | "Full-Stack Frameworks"
    | "Mobile Frameworks"
    | "Styling / UI";
  icon: string;
  iconClass: string;
  iconPath?: string;
  darkIconPath?: string;
};

export const skills: Skill[] = [
  {
    name: "Java",
    category: "Programming Languages",
    icon: "J",
    iconClass: "bg-[#f4e7da] text-[#8f3f16]",
    iconPath: "/skills/java.svg",
  },
  {
    name: "C",
    category: "Systems Programming",
    icon: "C",
    iconClass: "bg-[#e4e8f5] text-[#374d8c]",
    iconPath: "/skills/c.svg",
  },
  {
    name: "OCaml",
    category: "Functional Programming",
    icon: "OC",
    iconClass: "bg-[#f6dfcf] text-[#9a4414]",
    iconPath: "/skills/ocaml.svg",
  },
  {
    name: "Rust",
    category: "Systems Programming",
    icon: "Rs",
    iconClass: "bg-[#eee2d7] text-[#5f3b24]",
    iconPath: "/skills/rust-light.svg",
    darkIconPath: "/skills/rust.svg",
  },
  {
    name: "HTML",
    category: "Frontend",
    icon: "H",
    iconClass: "bg-[#f9ddd4] text-[#b6421f]",
    iconPath: "/skills/html5.svg",
  },
  {
    name: "CSS",
    category: "Frontend",
    icon: "CSS",
    iconClass: "bg-[#dfe8fb] text-[#2759a7]",
    iconPath: "/skills/css.svg",
  },
  {
    name: "JavaScript",
    category: "Programming Languages",
    icon: "JS",
    iconClass: "bg-[#f7e9aa] text-[#5f4a00]",
    iconPath: "/skills/javascript.svg",
  },
  {
    name: "TypeScript",
    category: "Programming Languages",
    icon: "TS",
    iconClass: "bg-[#dce9fb] text-[#2762a7]",
    iconPath: "/skills/typescript.svg",
  },
  {
    name: "Python",
    category: "Programming Languages",
    icon: "Py",
    iconClass: "bg-[#e1e9f4] text-[#2f5f8f]",
    iconPath: "/skills/python.svg",
  },
  {
    name: "React",
    category: "Frontend",
    icon: "R",
    iconClass: "bg-[#dff4fb] text-[#16708a]",
    iconPath: "/skills/react.svg",
  },
  {
    name: "Next.js",
    category: "Full-Stack Frameworks",
    icon: "N",
    iconClass: "bg-[#e8e8e3] text-[#1f2d24]",
    iconPath: "/skills/nextdotjs.svg",
  },
  {
    name: "React Native",
    category: "Mobile Frameworks",
    icon: "RN",
    iconClass: "bg-[#dff4fb] text-[#16708a]",
    iconPath: "/skills/reactnative.svg",
  },
  {
    name: "Tailwind CSS",
    category: "Styling / UI",
    icon: "TW",
    iconClass: "bg-[#dcf4f1] text-[#13746d]",
    iconPath: "/skills/tailwind-css.svg",
  },
];
