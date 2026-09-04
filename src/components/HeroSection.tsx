"use client";

import { Briefcase, Download } from "lucide-react";
import { BiLogoNodejs, BiLogoReact, BiLogoTypescript } from "react-icons/bi";
import { SiNestjs, SiNextdotjs } from "react-icons/si";

const techIcons = [
  { name: "TypeScript", icon: <BiLogoTypescript />, color: "#3178C6" },
  { name: "React", icon: <BiLogoReact />, color: "#61DAFB" },
  { name: "Next.js", icon: <SiNextdotjs />, color: "#ffffff" },
  { name: "Node.js", icon: <BiLogoNodejs />, color: "#339933" },
  { name: "Nest.js", icon: <SiNestjs />, color: "#E0234E" },
];

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-6 pt-20 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/15 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "1.5s" }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-primary/5 rounded-full blur-3xl animate-float"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center gap-6">
        <div className="sr flex flex-wrap justify-center gap-4">
          {techIcons.map((tech) => (
            <div
              key={tech.name}
              className="group flex items-center gap-2 px-4 py-2.5 rounded-xl bg-card border border-border hover:border-primary/40 hover:bg-primary/5 transition-all cursor-default"
            >
              <span className="text-2xl group-hover:scale-110 transition-transform" style={{ color: tech.color }}>{tech.icon}</span>
              <span className="text-foreground/70 text-sm font-medium">{tech.name}</span>
            </div>
          ))}
        </div>

        <h1 className="sr sr-delay-1 text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-foreground">
          Kalidash Odekare
        </h1>

        <p className="sr sr-delay-2 text-xl md:text-2xl text-primary font-semibold tracking-wide">
          Full Stack Developer
        </p>

        <p className="sr sr-delay-3 text-lg text-foreground/60 max-w-2xl leading-relaxed">
          Passionate about building end-to-end web applications with modern technologies.
          I love turning complex problems into simple, elegant solutions.
        </p>

        <div className="sr sr-delay-4 flex flex-wrap justify-center gap-4 mt-6">
          <button
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            className="flex items-center gap-2 px-8 py-3.5 rounded-full bg-primary text-primary-foreground font-semibold hover:scale-105 active:scale-95 transition-transform"
          >
            <Briefcase className="w-4 h-4" /> View Projects
          </button>
          <a
            href="/resume.pdf"
            download
            className="flex items-center gap-2 px-8 py-3.5 rounded-full border-2 border-primary/30 text-foreground font-semibold hover:border-primary/60 hover:bg-primary/5 transition-all hover:scale-105 active:scale-95"
          >
            <Download className="w-4 h-4" /> Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}
