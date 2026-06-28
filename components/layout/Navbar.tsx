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
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "glass" : "bg-transparent"}`}>
      <nav className="max-w-6xl mx-auto px-6 md:px-12 h-16 flex items-center justify-between">

        {/* Logo */}
        <a href="#" className="flex items-center gap-1.5 group">
          <span
            className="font-cinzel font-black text-base tracking-[4px] uppercase gradient-text"
          >
            DDM
          </span>
        </a>

        {/* Desktop nav — pill style like Polo */}
        <div
          className="hidden md:flex items-center gap-1 rounded-full px-2 py-1.5"
          style={{ background: "hsl(var(--surface))", border: "1px solid hsl(var(--border))" }}
        >
          {siteConfig.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="px-4 py-1.5 rounded-full text-xs font-medium uppercase tracking-widest transition-colors"
              style={{ color: "hsl(var(--muted-foreground))" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.color = "hsl(var(--foreground))";
                (e.currentTarget as HTMLElement).style.background = "hsl(var(--muted))";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.color = "hsl(var(--muted-foreground))";
                (e.currentTarget as HTMLElement).style.background = "transparent";
              }}
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest btn-gold"
          >
            Resume ↓
          </a>
        </div>

        <button className="md:hidden p-2" onClick={() => setIsMobileOpen(!isMobileOpen)}>
          {isMobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="md:hidden border-b px-6 py-4"
            style={{ background: "hsl(var(--background) / 0.97)", borderColor: "hsl(var(--border))" }}
          >
            {siteConfig.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileOpen(false)}
                className="block py-3 text-sm font-medium uppercase tracking-widest border-b transition-colors"
                style={{ borderColor: "hsl(var(--border) / 0.5)", color: "hsl(var(--muted-foreground))" }}
              >
                {item.label}
              </a>
            ))}
            <div className="flex items-center gap-3 pt-4">
              <ThemeToggle />
              <a href="/resume.pdf" download className="px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest btn-gold">
                Resume ↓
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
