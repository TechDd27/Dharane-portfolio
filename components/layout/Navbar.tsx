"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { siteConfig } from "../../config/site";
import { ThemeToggle } from "../ui/ThemeToggle";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass" : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between gap-6">

        {/* Logo — left */}
        <a
          href="#"
          className="shrink-0 font-cinzel font-black text-sm tracking-[3px] uppercase gradient-text"
        >
          Dharane
        </a>

        {/* Nav links — center, spread full width */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8 flex-1 justify-center">
          {siteConfig.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[11px] font-bold uppercase tracking-[2px] transition-colors duration-150 whitespace-nowrap"
              style={{ color: "hsl(var(--muted-foreground))" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.color = "hsl(var(--accent))";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.color = "hsl(var(--muted-foreground))";
              }}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Right actions */}
        <div className="hidden md:flex items-center gap-3 shrink-0">
          <ThemeToggle />
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-[11px] font-bold uppercase tracking-[2px] btn-gold"
          >
            Resume ↓
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 rounded-lg transition-colors"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          style={{ color: "hsl(var(--foreground))" }}
          aria-label="Toggle menu"
        >
          {isMobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-b"
            style={{
              background: "hsl(var(--background) / 0.98)",
              borderColor: "hsl(var(--border))",
              backdropFilter: "blur(12px)",
            }}
          >
            <div className="max-w-7xl mx-auto px-6 py-2 pb-5">
              {siteConfig.nav.map((item, i) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                  onClick={() => setIsMobileOpen(false)}
                  className="flex items-center justify-between py-3.5 text-sm font-bold uppercase tracking-[2px] border-b"
                  style={{
                    borderColor: "hsl(var(--border) / 0.4)",
                    color: "hsl(var(--muted-foreground))",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.color = "hsl(var(--accent))";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.color = "hsl(var(--muted-foreground))";
                  }}
                >
                  {item.label}
                  <span style={{ color: "hsl(var(--accent))" }}>→</span>
                </motion.a>
              ))}
              <div className="flex items-center gap-3 pt-4">
                <ThemeToggle />
                <a
                  href="/resume.pdf"
                  download
                  className="flex-1 text-center py-2.5 rounded-full text-xs font-bold uppercase tracking-[2px] btn-gold"
                >
                  Resume ↓
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
