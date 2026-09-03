"use client";

import { useState } from "react";
import { ExternalLink, GitFork, X, ArrowRight } from "lucide-react";
import { projects, type Project } from "@/data/projects";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="relative py-24 px-6 overflow-hidden">
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="sr text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-foreground/60 max-w-2xl mx-auto">A showcase of my recent work and personal projects.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className={`sr sr-delay-${(index % 6) + 1} cursor-pointer group relative rounded-2xl bg-card border border-border hover:border-primary/40 overflow-hidden hover:-translate-y-2 transition-all duration-300`}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="h-48 bg-muted flex items-center justify-center group-hover:bg-primary/5 transition-colors relative overflow-hidden">
                <GitFork className="w-12 h-12 text-foreground/20 group-hover:scale-110 group-hover:text-primary/40 transition-all duration-300" />
              </div>
              <div className="relative z-10 p-6">
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">{project.title}</h3>
                  <ArrowRight className="w-4 h-4 text-foreground/30 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                </div>
                <p className="text-foreground/60 text-sm mb-4 line-clamp-2">{project.shortDescription}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-2.5 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium border border-primary/20">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/70 backdrop-blur-sm"
          onClick={() => setSelectedProject(null)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="sr sr-scale relative w-full max-w-lg rounded-2xl bg-card border border-border p-8 max-h-[80vh] overflow-y-auto"
          >
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-primary/5 to-transparent pointer-events-none"></div>
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">{selectedProject.title}</h3>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="text-foreground/50 hover:text-foreground hover:rotate-90 transition-all duration-300 p-1"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <p className="text-foreground/70 leading-relaxed mb-6">{selectedProject.fullDescription}</p>

              <div className="mb-6">
                <h4 className="text-sm font-semibold text-foreground/50 uppercase mb-3">Features</h4>
                <ul className="space-y-2">
                  {selectedProject.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-foreground/70 text-sm">
                      <span className="text-primary">✓</span>{feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {selectedProject.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20">{tag}</span>
                ))}
              </div>

              <div className="flex gap-4">
                {selectedProject.github && (
                  <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-foreground/10 text-foreground text-sm font-medium hover:bg-foreground/20 transition-colors hover:scale-105 active:scale-95">
                    <GitFork className="w-4 h-4" /> GitHub
                  </a>
                )}
                {selectedProject.live && (
                  <a href={selectedProject.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity hover:scale-105 active:scale-95">
                    <ExternalLink className="w-4 h-4" /> Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
