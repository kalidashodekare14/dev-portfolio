"use client";

import { Code2, Server, Database, Cloud, Smartphone, Globe } from "lucide-react";

const badges = ["React", "Node.js", "TypeScript", "Next.js", "Python"];

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-6 pt-20 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/15 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "1.5s" }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl animate-float"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center gap-8">
        <div className="sr flex flex-wrap justify-center gap-3">
          {badges.map((badge) => (
            <span
              key={badge}
              className="px-5 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/30 hover:bg-primary/20 hover:border-primary/50 transition-all cursor-default"
            >
              {badge}
            </span>
          ))}
        </div>

        <h1 className="sr sr-delay-1 text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight">
          <span className="bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent" style={{ backgroundSize: "200% auto", animation: "gradient-shift 4s ease infinite" }}>
            Kalidash Odekare
          </span>
        </h1>

        <p className="sr sr-delay-2 text-xl md:text-2xl text-primary font-semibold tracking-wide">
          Full Stack Developer
        </p>

        <p className="sr sr-delay-3 text-lg text-foreground/60 max-w-2xl leading-relaxed">
          Passionate about building end-to-end web applications with modern technologies.
          I love turning complex problems into simple, elegant solutions.
        </p>

        <div className="sr sr-delay-4 flex flex-wrap justify-center gap-4 mt-4">
          <button
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            className="group relative px-8 py-3.5 rounded-full bg-primary text-primary-foreground font-semibold overflow-hidden hover:scale-105 active:scale-95 transition-transform"
          >
            <span className="relative z-10 flex items-center gap-2"><Globe className="w-4 h-4" /> View Projects</span>
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-purple-500 to-primary bg-[length:200%_auto] opacity-0 group-hover:opacity-100 transition-opacity" style={{ animation: "gradient-shift 2s linear infinite" }}></div>
          </button>
          <a
            href="/resume.pdf"
            download
            className="px-8 py-3.5 rounded-full border-2 border-primary/30 text-foreground font-semibold hover:border-primary/60 hover:bg-primary/5 transition-all hover:scale-105 active:scale-95 flex items-center gap-2"
          >
            <Code2 className="w-4 h-4" /> Download Resume
          </a>
        </div>

        <div className="sr sr-delay-5 flex flex-wrap justify-center gap-6 mt-8">
          <div className="flex items-center gap-2 text-foreground/40 text-sm"><Server className="w-4 h-4 text-primary" /> Backend</div>
          <div className="flex items-center gap-2 text-foreground/40 text-sm"><Smartphone className="w-4 h-4 text-primary" /> Frontend</div>
          <div className="flex items-center gap-2 text-foreground/40 text-sm"><Database className="w-4 h-4 text-primary" /> Database</div>
          <div className="flex items-center gap-2 text-foreground/40 text-sm"><Cloud className="w-4 h-4 text-primary" /> Cloud</div>
        </div>
      </div>
    </section>
  );
}
