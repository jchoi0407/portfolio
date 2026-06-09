export type Experience = {
  role: string;
  organization: string;
  location: string;
  period: string;
  description: string;
  highlights: string[];
  image?: string;
};

export const experiences: Experience[] = [
  {
    role: "Battalion Maintenance Specialist & Squad Leader",
    organization: "U.S. Army Criminal Investigation Division (KATUSA)",
    location: "Camp Humphreys, South Korea",
    period: "Oct 2023 - Apr 2025",
    description:
      "Served as a KATUSA soldier supporting U.S. Army CID operations through personnel leadership, equipment readiness, and joint investigation communication.",
    highlights: [
      "Led a 7-person KATUSA squad in daily accountability, onboarding, physical training, and roll-call briefings in a bilingual U.S.-Korea military environment.",
      "Created a vehicle maintenance SOP for mission-essential CID vehicles, standardizing monthly inspections, readiness checks, and maintenance documentation.",
      "Maintained readiness records for mission-essential vehicles and assigned weapons systems, including M17/M18 pistols and M4 rifles.",
      "Interpreted Korean-English communication during joint investigations involving U.S. Army CID, Korean National Police, and Korean Criminal Investigation Group.",
    ],
    image: "/experience/katusa.jpg",
  },
];
