import { SkillCategory } from "@/types";

export const skillCategories: SkillCategory[] = [
  {
    id: "data",
    label: "Data & Analytics",
    skills: [
      { name: "SQL", level: 90, description: "Complex queries, joins, aggregations, window functions" },
      { name: "Python (Pandas, NumPy)", level: 85, description: "Data analysis, automation, scripting" },
      { name: "Power BI", level: 75, description: "Dashboards, DAX, KPI reports, data modeling" },
      { name: "Excel (Advanced)", level: 95, description: "Pivot tables, VLOOKUP, data validation, macros" },
      { name: "Root Cause Analysis", level: 90, description: "Systematic investigation, 5-Why, fishbone" },
    ],
  },
  {
    id: "supply-chain",
    label: "Supply Chain",
    skills: [
      { name: "Demand-Supply Tracking", level: 85, description: "KPI monitoring, deviation analysis" },
      { name: "SLA Management", level: 90, description: "Compliance monitoring, exception handling" },
      { name: "Carrier Operations", level: 85, description: "EU transportation network management" },
      { name: "IWT Management", level: 80, description: "Inter-Warehouse Transfers, capacity planning" },
      { name: "Last Mile Coordination", level: 80, description: "0D/1D/2D GVS, delivery performance" },
    ],
  },
  {
    id: "automation",
    label: "Automation & Engineering",
    skills: [
      { name: "PLC Concepts", level: 70, description: "IEC 61131, ladder logic, structured text" },
      { name: "SCADA/HMI", level: 65, description: "Supervisory control and data acquisition" },
      { name: "Control Systems", level: 70, description: "PID, feedback loops, system modeling" },
      { name: "MHE Systems", level: 70, description: "Conveyor systems, material handling equipment" },
      { name: "Sensors & Actuators", level: 75, description: "Industrial instrumentation" },
    ],
  },
  {
    id: "tools",
    label: "Tools & Platforms",
    skills: [
      { name: "TIA Portal / Siemens", level: 60, description: "PLC programming environment" },
      { name: "GitHub", level: 70, description: "Version control, collaboration" },
      { name: "HTML / CSS / JavaScript", level: 70, description: "Frontend development" },
      { name: "Amazon Internal Tools", level: 85, description: "Operational dashboards, SOPs" },
    ],
  },
];