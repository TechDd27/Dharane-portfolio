import { Experience } from "@/types";

export const experiences: Experience[] = [
  {
    id: "amazon-roc",
    company: "Amazon",
    role: "ROC Analyst — EU WHT",
    location: "Hyderabad, India",
    period: "Sep 2024 – Present",
    type: "full-time",
    description:
      "Relay Operations Centre for EU & UK Transportation network. Validated datasets, led root cause analysis, and managed inter-warehouse transfers across the EU region.",
    achievements: [
      {
        title: "99%+ Data Accuracy at Scale",
        description:
          "Validated transportation datasets across EU carrier networks — maintaining 99%+ accuracy across millions of records, directly ensuring SLA compliance.",
        tags: ["Data Validation", "SQL", "Excel"],
      },
      {
        title: "Root Cause Analysis — Speed Degradation",
        description:
          "Led systematic RCA on speed degradation events across First/Middle/Last Mile, identifying recurring exceptions and coordinating corrective actions.",
        tags: ["RCA", "Supply Chain", "Cross-functional"],
      },
      {
        title: "Inter-Warehouse Transfer Management",
        description:
          "Managed IWT operations across EU region, monitoring load volume trends and capacity metrics daily, identifying deviations from expected performance.",
        tags: ["IWT", "Capacity Planning", "KPI Monitoring"],
      },
    ],
    recognition: "🏆 RNR Award: 100% data accuracy & SLA compliance during Peak Week",
    technologies: ["SQL", "Excel", "Power BI", "Python"],
  },
  {
    id: "thematic",
    company: "Thematic",
    role: "Business Development Extern",
    location: "New York, USA (Remote)",
    period: "Mar – May 2024",
    type: "externship",
    description:
      "Identified high-fit B2B leads and crafted tailored outreach messaging for a customer feedback analytics platform.",
    achievements: [
      {
        title: "B2B Lead Generation & Outreach",
        description:
          "Identified high-fit prospects through market research and crafted personalized outreach strategies aligned with platform capabilities.",
        tags: ["B2B", "Market Research", "Outreach"],
      },
    ],
    technologies: ["Market Research", "CRM", "Communication"],
  },
  {
    id: "pricol",
    company: "Pricol Limited",
    role: "Software Development Intern",
    location: "Coimbatore, India",
    period: "Jul – Dec 2023",
    type: "internship",
    description:
      "Automotive components manufacturer. Developed a Maintenance Chatbot prototype for field technicians, enabling self-service troubleshooting.",
    achievements: [
      {
        title: "Maintenance Chatbot Development",
        description:
          "Designed and built a Python-based chatbot interface with HTML/CSS/JS frontend, reducing lookup time for repair procedures and enabling self-service maintenance support.",
        tags: ["Python", "HTML/CSS", "JavaScript", "API"],
      },
      {
        title: "Analytics Tools & Requirement Gathering",
        description:
          "Supported requirement gathering for production workflows and built Python-based analytics tools for operational data.",
        tags: ["Python", "Analytics", "Requirements"],
      },
    ],
    technologies: ["Python", "HTML", "CSS", "JavaScript"],
  },
];