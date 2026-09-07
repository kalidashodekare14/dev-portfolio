"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Check, Copy, CheckCircle, Lightbulb, AlertTriangle, Award, BarChart3, Rocket, Sparkles } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { projects } from "@/data/projects";

export default function ProjectDetail() {
  const params = useParams();
  const project = projects.find((p) => p.id === params.id);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleCopy = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Project Not Found</h1>
          <Link href="/#projects" className="text-primary hover:underline">
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-foreground/70 hover:text-primary transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Projects
        </Link>

        <div className="rounded-2xl overflow-hidden border border-border bg-card mb-8">
          <div className="relative h-64 md:h-96">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        <div className="mb-6">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">{project.title}</h1>
          <p className="text-primary font-medium text-lg">{project.subtitle}</p>
        </div>

        <div className="flex flex-wrap gap-4 mb-8">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-full bg-foreground/10 text-foreground text-sm font-medium hover:bg-foreground/20 transition-colors hover:scale-105 active:scale-95"
            >
              <SiGithub className="w-4 h-4" /> View on GitHub
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity hover:scale-105 active:scale-95"
            >
              <ExternalLink className="w-4 h-4" /> Live Demo
            </a>
          )}
        </div>

        <div className="h-px bg-border mb-8"></div>

        <div className="mb-8">
          <h2 className="text-xl font-semibold text-foreground mb-4">About this project</h2>
          <p className="text-foreground/70 leading-relaxed">{project.fullDescription}</p>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-semibold text-foreground mb-4">Key Features</h2>
          <ul className="space-y-3">
            {project.features.map((feature) => (
              <li key={feature} className="flex items-start gap-3 text-foreground/70">
                <Check className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {project.challenges && project.challenges.length > 0 && (
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-primary" />
              Challenges & Solutions
            </h2>
            <div className="space-y-4">
              {project.challenges.map((item, index) => (
                <div key={index} className="p-4 rounded-xl bg-card border border-border">
                  <div className="flex items-start gap-3 mb-2">
                    <span className="text-primary font-semibold text-sm">Challenge:</span>
                    <p className="text-foreground/70 text-sm">{item.challenge}</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Lightbulb className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <p className="text-foreground/70 text-sm">{item.solution}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {project.demoCredentials && project.demoCredentials.length > 0 && (
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-primary" />
              Demo Credentials
            </h2>
            <div className="p-4 rounded-xl bg-card border border-border">
              {project.demoCredentials.map((cred, index) => (
                <div key={index} className="flex items-center justify-between py-2">
                  <div>
                    <span className="text-foreground/60 text-sm">{cred.label}: </span>
                    <span className="text-foreground font-medium">{cred.value}</span>
                  </div>
                  <button
                    onClick={() => handleCopy(cred.value, index)}
                    className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-primary/10 text-primary text-xs font-medium hover:bg-primary/20 transition-colors"
                  >
                    {copiedIndex === index ? (
                      <>
                        <CheckCircle className="w-3.5 h-3.5" /> Copied!
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" /> Copy
                      </>
                    )}
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {project.technicalHighlights && project.technicalHighlights.length > 0 && (
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
              <Award className="w-5 h-5 text-primary" />
              Technical Highlights
            </h2>
            <ul className="space-y-3">
              {project.technicalHighlights.map((highlight, index) => (
                <li key={index} className="flex items-start gap-3 text-foreground/70">
                  <span className="text-primary mt-1">•</span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {project.achievements && project.achievements.length > 0 && (
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
              <Award className="w-5 h-5 text-primary" />
              Achievements
            </h2>
            <ul className="space-y-3">
              {project.achievements.map((achievement, index) => (
                <li key={index} className="flex items-start gap-3 text-foreground/70">
                  <Check className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {project.performanceMetrics && project.performanceMetrics.length > 0 && (
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
              <BarChart3 className="w-5 h-5 text-primary" />
              Performance Metrics
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {project.performanceMetrics.map((metric, index) => (
                <div key={index} className="p-4 rounded-xl bg-card border border-border text-center">
                  <p className="text-2xl font-bold text-primary">{metric.value}</p>
                  <p className="text-foreground/60 text-sm mt-1">{metric.label}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {project.futureEnhancements && project.futureEnhancements.length > 0 && (
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
              <Rocket className="w-5 h-5 text-primary" />
              Future Enhancements
            </h2>
            <ul className="space-y-3">
              {project.futureEnhancements.map((enhancement, index) => (
                <li key={index} className="flex items-start gap-3 text-foreground/70">
                  <span className="text-primary mt-1">→</span>
                  <span>{enhancement}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="mb-8">
          <h2 className="text-xl font-semibold text-foreground mb-4">Tech Stack</h2>
          <div className="flex flex-wrap gap-3">
            {project.tags.map((tag) => (
              <span key={tag} className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
