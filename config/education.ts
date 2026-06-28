import { Education, Certification } from "@/types";

export const education: Education[] = [
  {
    id: "psg",
    institution: "PSG College of Technology",
    degree: "B.E. in Robotics & Automation",
    location: "Coimbatore, India",
    period: "2020 – 2024",
    grade: "CGPA: 7.86 / 10",
    highlights: [
      "Class Representative",
      "Coursework: Control Systems, PLC, SCADA, Robotics, Sensors & Actuators",
      "Final Year Project: Maintenance Chatbot (Pricol Ltd)",
    ],
  },
];

export const certifications: Certification[] = [
  // Add certifications as you earn them. Example:
  // {
  //   id: "aws-cloud",
  //   title: "AWS Cloud Practitioner",
  //   issuer: "Amazon Web Services",
  //   date: "2026",
  //   credentialUrl: "https://...",
  //   badge: "/images/certs/aws-cp.png",
  // },
];

export const achievements = [
  {
    id: "rnr-peak",
    title: "Amazon RNR Award",
    description: "100% data accuracy and SLA compliance during Peak Week",
    date: "2024",
    icon: "trophy",
  },
  {
    id: "class-rep",
    title: "Class Representative",
    description: "PSG College of Technology — Robotics & Automation Department",
    date: "2020–2024",
    icon: "users",
  },
];