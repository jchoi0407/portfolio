export type Project = {
  title: string;
  status: string;
  category: string;
  description: string;
  highlights: string[];
  tech: string[];
  github?: string;
  demo?: string;
  live?: string;
  image?: string;
  imageFit?: "cover" | "contain";
  imageBackground?: "warm" | "card";
};

export const projects: Project[] = [
  {
    title: "Timbre",
    status: "In progress",
    category: "Mobile & Backend",
    description:
      "Timbre is a cross-platform mobile app for worship teams to create teams, invite members, manage weekly setlists, and share rehearsal materials.",
    highlights: [
      "Built a cross-platform worship team management app for creating and sharing weekly setlists using React Native, Expo, TypeScript, Expo Router, and Supabase Auth.",
      "Implemented team creation, invite-code joining, and membership-based dashboard loading to organize users by worship team with Supabase Postgres relational data.",
      "Integrated a FastAPI PDF generation service to convert uploaded sheet-music images into practice PDFs, store files in Supabase Storage, and display them in-app with React Native WebView.",
    ],
    tech: ["React Native", "Expo", "TypeScript", "FastAPI", "Supabase"],
    github: "https://github.com/jchoi0407/Timbre",
    image: "/projects/timbre_logo.png",
    imageFit: "contain",
    imageBackground: "warm",
  },
  {
    title: "GhostDieDie",
    status: "Award-winning",
    category: "Full-stack & CV",
    description:
      "GhostDieDie is a browser-based multiplayer 3D fighting game where players control movement and attacks through webcam body motion.",
    highlights: [
      "Built a real-time multiplayer 3D fighting game with room creation, arena selection, and best-of-3 combat using React, Three.js, FastAPI, WebSocket, and Supabase.",
      "Implemented browser-side pose-controlled gameplay to translate webcam body motion into combat and movement inputs using MediaPipe Pose Landmarker, custom keypoint detectors, and browser camera APIs.",
      "Integrated server-authoritative combat synchronization to keep HP, round state, and hit validation consistent across players using FastAPI WebSocket handlers, backend range checks, and 20 Hz client position sync.",
      "Won Best Razzle Dazzle Hack among 600+ participants.",
    ],
    tech: ["React", "Three.js", "MediaPipe", "FastAPI", "WebSocket", "Supabase"],
    github: "https://github.com/orgs/Ghostdiedie/repositories",
    demo: "https://youtu.be/Ay273uz5BpE?si=vgd-1IVZY0J2erEe",
    image: "/projects/ghostdiedie.png",
  },
  {
    title: "Personal Portfolio",
    status: "In progress",
    category: "Frontend",
    description:
      "A one-page developer portfolio built with Next.js, TypeScript, and Tailwind CSS to present projects, experience, skills, and contact information.",
    highlights: [
      "Built and deployed a one-page portfolio using Next.js, TypeScript, and Tailwind CSS to present projects, experience, skills, and contact information through reusable responsive components.",
      "Structured project, skill, and experience content into typed data modules to render dynamic cards, detail modals, and skill grids from reusable React components.",
      "Implemented dark/light mode persistence, responsive mobile navigation, Lenis smooth scrolling, and GSAP scroll reveal animations to improve site interaction.",
    ],
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/jchoi0407/portfolio",
    live: "https://choijunho.com",
    image: "/projects/portfolio_avatar.png",
    imageFit: "contain",
    imageBackground: "card",
  },
];
