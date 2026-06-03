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
      "Supervised in-processing and training for newly assigned KATUSA personnel while leading a 7-person team during physical training and daily operational briefings.",
      "Led maintenance readiness for mission-essential military vehicles by developing a new SOP and conducting monthly vehicle inspections.",
      "Managed M17/M18 and M4 weapons systems readiness for U.S. Army CID operations.",
      "Served as a liaison and interpreter during joint investigations between U.S. Army CID, Korean National Police, and Korean Criminal Investigation Group.",
      "Awarded the Army Commendation Medal for service and contributions to U.S. Army CID operations.",
    ],
    image: "/experience/katusa.jpg",
  },
];
