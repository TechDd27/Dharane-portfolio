"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, Plus } from "lucide-react";
import { projects } from "../../config/projects";
import { SectionHeading } from "../ui/SectionHeading";
import { Badge } from "../ui/Badge";

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" ref={ref} className="section">
      <SectionHeading title="Projects" subtitle="What I've built" />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            {project.status === "coming-soon" ? (
              <div className="h-full p-6 rounded-lg border-2 border-dashed border-border flex flex-col items-center justify-center text-center min-h-[280px]">
                <motion.div animate={{ scale: [1, 1.1, 1] }} transition={{ repeat: Infinity, duration: 2 }}>
                  <Plus className="w-10 h-10 text-muted-foreground/50" />
                </motion.div>
                <p className="text-muted-foreground mt-4 font-medium">Coming Soon</p>
                <p className="text-muted-foreground/60 text-sm mt-1">New project in progress</p>
              </div>
            ) : (
              <div className="h-full p-6 rounded-lg bg-surface border border-border card-hover flex flex-col">
                <div className="w-full h-40 rounded-md bg-muted border border-border mb-4 overflow-hidden flex items-center justify-center">
                  <span className="text-3xl">
                    {project.id === "roc-metrics-dashboard" ? "📊" : "🤖"}
                  </span>
                </div>

                <Badge variant={project.status === "completed" ? "success" : "default"}>
                  {project.status === "completed" ? "Completed" : "In Progress"}
                </Badge>

                <h3 className="text-h3 mt-3">{project.title}</h3>
                <p className="text-sm text-muted-foreground mt-1 flex-1">{project.subtitle}</p>

                <div className="flex flex-wrap gap-1.5 mt-4">
                  {project.techStack.slice(0, 4).map((tech) => (
                    <Badge key={tech} variant="outline" size="sm">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center gap-1 mt-4 text-accent text-sm font-medium">
                  View Case Study <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}