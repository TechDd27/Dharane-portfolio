import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "supply-chain-dashboard",
    slug: "supply-chain-dashboard",
    title: "Supply Chain Vendor Performance Dashboard",
    subtitle: "Self-Learning Project — Power BI · SQL · DAX · Excel",
    description:
      "End-to-end vendor performance dashboard simulating how procurement teams monitor supplier health — tracking on-time delivery, cost variance, lead time trends, and QCLDM metrics.",
    status: "completed",
    featured: true,
    problem:
      "Procurement teams lack a unified view to assess supplier health across key dimensions — quality, cost, logistics, development, and management — leading to reactive sourcing decisions.",
    solution:
      "Built a multi-page Power BI dashboard backed by SQL data models and DAX calculations, tracking QCLDM metrics, cost variance heatmaps, lead time trends, and vendor performance summaries.",
    impact: [
      "Visualized QCLDM Radar Chart across 4 suppliers (Alpha, Beta, Delta, Gamma)",
      "Cost Variance Heatmap revealing ±20% deviation in PO vs invoice actuals",
      "Lead Time Trend analysis identifying delivery pattern anomalies",
      "Hands-on mastery of supply chain KPIs used in real procurement operations",
    ],
    techStack: ["Power BI", "SQL", "Excel", "DAX", "Python"],
    image: "/images/projects/supply-chain-dashboard.png",
    github: "",
    liveUrl: "",
    learnings: [
      "QCLDM framework applied to real supplier performance scenarios",
      "DAX measures for dynamic KPI calculations",
      "Heatmap & radar chart design for supply chain storytelling",
    ],
  },
  {
    id: "maintenance-chatbot",
    slug: "maintenance-chatbot",
    title: "Maintenance Chatbot API",
    subtitle: "Software Development Intern — Pricol Limited",
    description:
      "AI-powered maintenance chatbot for automotive field technicians, built during internship at Pricol Limited. Enables self-service troubleshooting via a conversational interface backed by a structured knowledge base.",
    status: "completed",
    featured: true,
    problem:
      "Field technicians at Pricol lacked instant access to maintenance SOPs and had to manually search through thick documentation binders, causing delays in repair workflows.",
    solution:
      "Developed a Python + Flask chatbot with HTML/CSS/JS frontend that parses maintenance datasets and returns context-matched answers. Built AIML pattern matching, data management, and a recommendations feature.",
    impact: [
      "End-to-end prototype deployed on web server and validated with real maintenance workflows",
      "Multi-module architecture: data prep, chatbot logic, AIML response, Flask integration",
      "Proactive maintenance recommendation system reducing lookup time",
      "Presented as published research paper (PSG College of Technology)",
    ],
    techStack: ["Python", "Flask", "HTML", "CSS", "JavaScript", "Pandas", "AIML"],
    image: "/images/projects/chatbot.png",
    github: "",
    liveUrl: "",
    caseStudy: "/case-studies/chatbot-api.pdf",
    learnings: [
      "Full-stack development with Python/Flask backend",
      "AIML pattern matching for NLP-based chatbot responses",
      "Data pipeline design with Pandas for Q&A knowledge base",
    ],
  },
  {
    id: "hotel-booking-analysis",
    slug: "hotel-booking-analysis",
    title: "Hotel Booking Demand Analysis",
    subtitle: "Self-Directed Project — Excel · Python · Statistical Analysis",
    description:
      "Analyzed 119,000+ hotel booking records to identify cancellation drivers and seasonal demand patterns. Built trend visualizations and customer segmentation models by booking lead time — applying the same demand-pattern detection used in supply chain forecasting.",
    status: "completed",
    featured: true,
    problem:
      "High cancellation rates and uneven seasonal demand make revenue planning and capacity allocation difficult for hotel operations teams.",
    solution:
      "Processed 119K+ booking records using Python (Pandas) and Excel to surface cancellation drivers, model seasonal spikes, and segment customers by booking lead time to simulate marketing and capacity insights.",
    impact: [
      "Identified key cancellation drivers across booking channels and lead times",
      "Modeled seasonal demand spikes (July–Aug) for capacity planning signals",
      "Segmented customers by lead time to simulate targeted marketing strategies",
      "Demonstrated demand-pattern detection transferable to supply chain forecasting",
    ],
    techStack: ["Excel", "Python", "Statistical Analysis", "Data Visualization", "Trend Analysis"],
    image: "",
    github: "",
    liveUrl: "",
    learnings: [
      "Demand-pattern detection at scale using Python and statistical methods",
      "Customer segmentation by behavioral signals (booking lead time)",
      "Translating hospitality data patterns into supply chain forecasting analogies",
    ],
  },
];
