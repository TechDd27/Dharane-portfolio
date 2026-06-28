import { siteConfig } from "@/config/site";

export function Footer() {
  return (
    <footer style={{ borderTop: "1px solid hsl(var(--border))" }} className="py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-cinzel font-black text-sm tracking-widest gradient-text uppercase">
          {siteConfig.name}
        </p>
        <p className="text-xs uppercase tracking-[2px] font-medium" style={{ color: "hsl(var(--muted-foreground))" }}>
          © 2026 · Built with Next.js &amp; Tailwind CSS
        </p>
      </div>
    </footer>
  );
}
