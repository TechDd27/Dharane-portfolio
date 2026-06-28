import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "roc-metrics-dashboard",
    slug: "roc-metrics-dashboard",
    title: "ROC Metrics Dashboard",
    subtitle: "Operational KPI tracking & visualization",
    description:
      "Self-initiated dashboard project to unify operational metrics, built to sharpen data analytics skills and provide the team with a single source of truth.",
    status: "in-progress",
    featured: true,
    problem:
      "No unified view of operational KPIs — data scattered across multiple tools and spreadsheets, making trend analysis and performance reporting time-consuming.",
    solution:
      "Built an end-to-end metrics dashboard pulling data via SQL queries, processing with Python (Pandas), and visualizing in Power BI with interactive filters.",
    impact: [
      "Single source of truth for team metrics",
      "Reduced reporting time from manual processes",
      "Daily usage by team for performance tracking",
    ],
    techStack: ["Python", "SQL", "Power BI", "Pandas", "DAX"],
    image: "/images/projects/roc-dashboard.png",
    github: "",
    liveUrl: "",
    learnings: [
      "End-to-end data pipeline design",
      "DAX calculations for complex KPIs",
      "User-centric dashboard layout for operations teams",
    ],
  },
  {
    id: "maintenance-chatbot",
    slug: "maintenance-chatbot",
    title: "Maintenance Chatbot",
    subtitle: "AI-assisted field technician support",
    description:
      "Python-based chatbot for automotive field technicians to quickly lookup repair procedures, SOPs, and troubleshooting guides via conversational interface.",
    status: "completed",
    featured: true,
    problem:
      "Field technicians at Pricol lacked instant access to maintenance SOPs — had to manually search through thick documentation binders.",
    solution:
      "Developed a chatbot with Python backend and HTML/CSS/JS frontend that parses maintenance documents and returns relevant procedures via natural language queries.",
    impact: [
      "Reduced procedure lookup time for field technicians",
      "Self-service troubleshooting capability",
      "Prototype validated with actual maintenance workflows",
    ],
    techStack: ["Python", "HTML", "CSS", "JavaScript", "REST API"],
    image: "/images/projects/chatbot.png",
    github: "",
    liveUrl: "",
    learnings: [
      "Full-stack development (backend + frontend)",
      "API design for conversational interfaces",
      "User research with field technicians",
    ],
  },
  {
    id: "coming-soon",
    slug: "",
    title: "Next Project",
    subtitle: "Coming Soon",
    description: "Currently working on something new. Check back for updates.",
    status: "coming-soon",
    featured: false,
    problem: "",
    solution: "",
    impact: [],
    techStack: [],
    image: "",
    github: "",
    liveUrl: "",
    learnings: [],
  },
];