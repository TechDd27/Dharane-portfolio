"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, Plus } from "lucide-react";
import { projects } from "../../config/projects";
import { SectionHeading } from "../ui/SectionHeading";
import { Badge } from "../ui/Badge";

const projectGradients = [
  "linear-gradient(135deg, hsl(258 85% 65% / 0.15), hsl(216 90% 65% / 0.1))",
  "linear-gradient(135deg, hsl(172 66% 50% / 0.12), hsl(216 90% 65% / 0.08))",
  "linear-gradient(135deg, hsl(38 90% 58% / 0.1), hsl(258 85% 65% / 0.08))",
];

const projectAccents = [
  "hsl(258 85% 65%)",
  "hsl(172 66% 50%)",
  "hsl(38 90% 58%)",
];

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" ref={ref} className="section">
      <SectionHeading title="Projects" subtitle="What I&apos;ve built" />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            {project.status === "coming-soon" ? (
              <div className="h-full p-6 rounded-2xl border-2 border-dashed border-border flex flex-col items-center justify-center text-center min-h-[300px]">
                <motion.div animate={{ scale: [1, 1.12, 1] }} transition={{ repeat: Infinity, duration: 2.5 }}>
                  <Plus className="w-10 h-10 text-muted-foreground/40" />
                </motion.div>
                <p className="text-muted-foreground mt-4 font-semibold">Coming Soon</p>
                <p className="text-muted-foreground/50 text-sm mt-1">New project in progress</p>
              </div>
            ) : (
              <div className="h-full rounded-2xl border border-border bg-surface card-hover flex flex-col overflow-hidden">
                {/* Gradient header */}
                <div
                  className="h-36 flex items-center justify-center relative overflow-hidden"
                  style={{ background: projectGradients[index % projectGradients.length] }}
                >
                  <div
                    className="absolute inset-0 dot-grid opacity-40"
                  />
                  <span className="text-5xl relative z-10 drop-shadow-sm">
                    {project.id === "roc-metrics-dashboard" ? "📊" : "🤖"}
                  </span>
                  {/* Status badge in corner */}
                  <div className="absolute top-3 right-3">
                    <Badge variant={project.status === "completed" ? "success" : "default"}>
                      {project.status === "completed" ? "Completed" : "In Progress"}
                    </Badge>
                  </div>
                </div>

                <div className="p-5 flex flex-col flex-1">
                  <h3 className="text-base font-bold text-foreground">{project.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1 flex-1 leading-relaxed">{project.subtitle}</p>

                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {project.techStack.slice(0, 4).map((tech) => (
                      <Badge key={tech} variant="outline" size="sm">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div
                    className="inline-flex items-center gap-1 mt-4 text-sm font-semibold transition-all"
                    style={{ color: projectAccents[index % projectAccents.length] }}
                  >
                    View Case Study <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
