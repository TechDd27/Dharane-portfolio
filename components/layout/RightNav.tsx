"use client";

import { useEffect, useState } from "react";
import { siteConfig } from "../../config/site";

export function RightNav() {
  const [active, setActive] = useState("");

  useEffect(() => {
    const ids = siteConfig.nav.map((item) => item.href.slice(1));

    const observer = new IntersectionObserver(
      (entries) => {
        // Pick the entry with the largest intersection ratio
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible.length > 0) setActive(visible[0].target.id);
      },
      { threshold: [0.15, 0.5], rootMargin: "-10% 0px -10% 0px" }
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-end gap-5">
      {siteConfig.nav.map((item) => {
        const id = item.href.slice(1);
        const isActive = active === id;

        return (
          <a
            key={item.href}
            href={item.href}
            className="group flex items-center gap-3"
          >
            {/* Label — visible on hover or when active */}
            <span
              className="text-[11px] font-bold uppercase tracking-[2px] transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0"
              style={{
                color: isActive ? "hsl(var(--accent))" : "hsl(var(--muted-foreground))",
                opacity: isActive ? 1 : 0,
                transform: isActive ? "translateX(0)" : "translateX(6px)",
              }}
            >
              {item.label}
            </span>

            {/* Dot / pill */}
            <div
              className="rounded-full transition-all duration-300"
              style={{
                width: isActive ? "20px" : "6px",
                height: "6px",
                background: isActive
                  ? "hsl(var(--accent))"
                  : "hsl(var(--muted-foreground) / 0.4)",
                boxShadow: isActive ? "0 0 8px hsl(var(--accent) / 0.5)" : "none",
              }}
            />
          </a>
        );
      })}
    </nav>
  );
}
