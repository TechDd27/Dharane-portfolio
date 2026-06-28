export interface Experience {
  id: string;
  company: string;
  role: string;
  location: string;
  period: string;
  type: "full-time" | "internship" | "externship" | "freelance";
  description: string;
  achievements: Achievement[];
  recognition?: string;
  technologies: string[];
}

export interface Achievement {
  title: string;
  description: string;
  tags: string[];
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  status: "completed" | "in-progress" | "coming-soon";
  featured: boolean;
  problem: string;
  solution: string;
  impact: string[];
  techStack: string[];
  image: string;
  github: string;
  liveUrl: string;
  learnings: string[];
}

export interface SkillCategory {
  id: string;
  label: string;
  skills: Skill[];
}

export interface Skill {
  name: string;
  level: number;
  description: string;
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  location: string;
  period: string;
  grade: string;
  highlights: string[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialUrl: string;
  badge?: string;
}