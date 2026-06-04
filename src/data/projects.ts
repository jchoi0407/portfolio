export type Project = {
  title: string;
  status: string;
  category: string;
  collaboration: string;
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
    collaboration: "Solo",
    description:
      "A mobile worship team collaboration app for team management, weekly setlists, sheet music uploads, and real-time data sync.",
    highlights: [
      "Built a React Native Expo app for team management and weekly setlist planning.",
      "Integrated Supabase for real-time data sync and shared team access.",
      "Designed a FastAPI backend for converting uploaded sheet music images into PDFs stored in Supabase Storage.",
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
    collaboration: "Team of 4",
    description:
      "A browser-based 1v1 3D fighting game where webcam pose controls attacks, with live video and synchronized combat.",
    highlights: [
      "Collaborated with a team of 4 to build a real-time multiplayer webcam game for Bitcamp 2026.",
      "Ported the pose tracking pipeline to JavaScript and optimized MediaPipe tracking from 33 to 13 key points.",
      "Used WebRTC, WebSocket, and FastAPI to support live opponent video and synchronized combat state.",
      "Won Best Razzle Dazzle Hack among 600+ participants.",
    ],
    tech: ["React", "Three.js", "MediaPipe", "WebRTC", "FastAPI"],
    github: "https://github.com/orgs/Ghostdiedie/repositories",
    demo: "https://youtu.be/Ay273uz5BpE?si=vgd-1IVZY0J2erEe",
    live: "https://ghostdiedie.surf/",
    image: "/projects/ghostdiedie.png",
  },
  {
    title: "Personal Portfolio",
    status: "In progress",
    category: "Frontend",
    collaboration: "Solo",
    description:
      "A clean one-page portfolio built to present projects, experience, and technical interests with a warm modern interface.",
    highlights: [
      "Built with the Next.js App Router, TypeScript, and Tailwind CSS.",
      "Structured project data separately from UI components for easier editing.",
      "Designed a clean warm interface with lightweight interactive project details.",
    ],
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/jchoi0407/portfolio",
    live: "https://choijunho.com",
    image: "/projects/portfolio_avatar.png",
    imageFit: "contain",
    imageBackground: "card",
  },
];
