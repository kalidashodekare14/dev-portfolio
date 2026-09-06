"use client";

import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Folder } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 px-6 overflow-hidden">
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="sr text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">A showcase of my recent work and personal projects.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative rounded-2xl bg-card border border-border hover:border-primary/40 overflow-hidden hover:-translate-y-2 transition-all duration-300 ease-out"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0 group-hover:w-32 h-1 bg-gradient-to-r from-transparent via-primary to-transparent transition-all duration-300 ease-out"></div>

              <Link href={`/projects/${project.id}`} className="block">
                <div className="h-48 bg-muted relative overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </Link>

              <div className="relative z-10 p-6">
                <Link href={`/projects/${project.id}`} className="block">
                  <div className="flex items-center gap-2 mb-1">
                    <Folder className="w-5 h-5 text-primary" />
                    <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">{project.title}</h3>
                  </div>
                  <p className="text-foreground/70 text-sm mb-3">{project.subtitle}</p>
                </Link>

                <div className="h-px bg-border mb-4"></div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-2.5 py-1 rounded-full bg-primary/10 text-foreground/80 text-xs font-medium border border-primary/20">{tag}</span>
                  ))}
                </div>

                <div className="flex items-center gap-3">
                  <Link
                    href={`/projects/${project.id}`}
                    className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-all duration-300"
                  >
                    View Details <ExternalLink className="w-4 h-4" />
                  </Link>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="w-9 h-9 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-foreground/60 hover:text-foreground hover:bg-primary/20 hover:border-primary/40 hover:scale-110 transition-all duration-300"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="w-9 h-9 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-foreground/60 hover:text-foreground hover:bg-primary/20 hover:border-primary/40 hover:scale-110 transition-all duration-300"
                    >
                      <SiGithub className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
