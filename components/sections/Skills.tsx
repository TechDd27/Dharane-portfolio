"use client";

import { useRef, useState } from "react";
import { skillCategories } from "../../config/skills";
import { SectionHeading } from "../ui/SectionHeading";
export function Skills() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills =
    activeCategory === "all"
      ? skillCategories
      : skillCategories.filter((cat) => cat.id === activeCategory);

  return (
    <section id="skills" className="section">
      <SectionHeading title="Skills" subtitle="Tools & technologies I work with" />

      <div className="flex flex-wrap gap-2 mt-10 mb-8">
        <button
          onClick={() => setActiveCategory("all")}
          className="px-4 py-2 rounded-md text-sm font-medium bg-accent text-accent-foreground"
        >
          All
        </button>
        {skillCategories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className="px-4 py-2 rounded-md text-sm font-medium bg-muted text-muted-foreground hover:text-foreground"
          >
            {cat.label}
          </button>
        ))}
      </div>

      <div className="space-y-10">
        {filteredSkills.map((category) => (
          <div key={category.id}>
            <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
              {category.label}
            </h3>
            <div className="space-y-4">
              {category.skills.map((skill) => (
                <div key={skill.name} className="group">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-sm font-medium text-foreground">{skill.name}</span>
                    <span className="text-xs text-muted-foreground">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="h-2 rounded-full bg-muted overflow-hidden">
                    <div
                      className="h-full rounded-full bg-accent transition-all duration-700"
                      style={{ width: skill.level + "%" }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}