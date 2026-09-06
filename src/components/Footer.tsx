"use client";

import { GitFork, Link2 } from "lucide-react";

const socialLinks = [
  { icon: <GitFork className="w-4 h-4" />, label: "GitHub", url: "https://github.com/kalidash" },
  { icon: <Link2 className="w-4 h-4" />, label: "LinkedIn", url: "https://linkedin.com/in/kalidash" },
];

export default function Footer() {
  return (
    <footer className="relative py-12 px-6 border-t border-border overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>

      <div className="sr relative z-10 max-w-6xl mx-auto flex flex-col items-center gap-6">
        <button onClick={() => window.scrollTo({ top: 0 })} className="text-xl font-bold bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent hover:scale-110 transition-transform">
          Kalidash
        </button>

        <div className="flex gap-4">
          {socialLinks.map((link) => (
            <a key={link.label} href={link.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border text-foreground/60 hover:text-foreground hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-0.5 transition-all text-sm">
              {link.icon}{link.label}
            </a>
          ))}
        </div>

        <p className="text-foreground/60 text-sm">
          © {new Date().getFullYear()} Kalidash Odekare. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
