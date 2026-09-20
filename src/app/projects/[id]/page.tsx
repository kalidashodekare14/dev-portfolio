"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ExternalLink,
  Check,
  Copy,
  CheckCircle,
  Lightbulb,
  AlertTriangle,
  Award,
  BarChart3,
  Rocket,
  Sparkles,
  BookOpen,
  Target,
  Wrench,
  Trophy,
} from "lucide-react";
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
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Project Not Found</h1>
          <Link href="/" className="text-primary hover:underline">
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative h-[50vh] md:h-[60vh] overflow-hidden">
        <div className="absolute inset-0 animate-hero">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 project-hero-overlay" />
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-4xl mx-auto px-6 pb-10 w-full">
            <div className="animate-section">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 drop-shadow-lg">
                {project.title}
              </h1>
              <p className="text-lg md:text-xl text-white/80 font-medium">
                {project.subtitle}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Back Button */}
        <Link
          href="/"
          className="back-btn mb-10 animate-section"
          style={{ animationDelay: "0.1s" }}
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Projects
        </Link>

        {/* Action Buttons */}
        <div
          className="flex flex-wrap gap-4 mb-12 animate-section"
          style={{ animationDelay: "0.2s" }}
        >
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-github"
            >
              <SiGithub className="w-5 h-5" />
              View Source Code
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-live"
            >
              <ExternalLink className="w-5 h-5" />
              Live Demo
            </a>
          )}
        </div>

        <div className="section-divider mb-12" />

        {/* About Section */}
        <div className="project-section-card mb-8 sr sr-delay-1">
          <div className="flex items-center gap-4 mb-5">
            <div className="section-icon icon-about">
              <BookOpen className="w-5 h-5 text-white" />
            </div>
            <h2 className="text-xl font-semibold text-foreground">About this project</h2>
          </div>
          <p className="text-foreground/65 leading-relaxed text-[15px] mb-6">
            {project.fullDescription}
          </p>
          <div className="flex flex-wrap gap-3">
            {project.tags.map((tag) => (
              <span key={tag} className="tech-tag">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Key Features Section */}
        <div className="project-section-card mb-8 sr sr-delay-2">
          <div className="flex items-center gap-4 mb-5">
            <div className="section-icon icon-features">
              <Target className="w-5 h-5 text-white" />
            </div>
            <h2 className="text-xl font-semibold text-foreground">Key Features</h2>
          </div>
          <div className="space-y-3">
            {project.features.map((feature, index) => (
              <div
                key={feature}
                className={`flex items-start gap-3 text-foreground/65 sr sr-delay-${Math.min(index + 1, 7)}`}
              >
                <div className="w-6 h-6 rounded-full bg-emerald-500/10 flex items-center justify-center mt-0.5 shrink-0">
                  <Check className="w-3.5 h-3.5 text-emerald-500" />
                </div>
                <span className="text-[15px]">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Challenges & Solutions Section */}
        {project.challenges && project.challenges.length > 0 && (
          <div className="project-section-card mb-8 sr sr-delay-3">
            <div className="flex items-center gap-4 mb-5">
              <div className="section-icon icon-challenge">
                <AlertTriangle className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-xl font-semibold text-foreground">
                Challenges & Solutions
              </h2>
            </div>
            <div className="space-y-4">
              {project.challenges.map((item, index) => (
                <div key={index} className="challenge-card">
                  <div className="flex items-start gap-3 mb-3">
                    <span className="text-amber-500 font-semibold text-xs uppercase tracking-wider">
                      Challenge
                    </span>
                  </div>
                  <p className="text-foreground/70 text-[15px] mb-4 pl-0">
                    {item.challenge}
                  </p>
                  <div className="flex items-start gap-3 pt-3 border-t border-amber-500/10">
                    <Lightbulb className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />
                    <div>
                      <span className="text-amber-500 font-semibold text-xs uppercase tracking-wider block mb-1">
                        Solution
                      </span>
                      <p className="text-foreground/65 text-[15px]">{item.solution}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Demo Credentials Section */}
        {project.demoCredentials && project.demoCredentials.length > 0 && (
          <div className="project-section-card mb-8 sr sr-delay-4">
            <div className="flex items-center gap-4 mb-5">
              <div className="section-icon icon-demo">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-xl font-semibold text-foreground">Demo Credentials</h2>
            </div>
            <div className="space-y-3">
              {project.demoCredentials.map((cred, index) => (
                <div key={index} className="demo-cred-row">
                  <div className="flex items-center gap-2">
                    <span className="text-foreground/50 text-sm font-medium">
                      {cred.label}
                    </span>
                    <span className="text-foreground font-semibold">{cred.value}</span>
                  </div>
                  <button
                    onClick={() => handleCopy(cred.value, index)}
                    className="copy-btn"
                  >
                    {copiedIndex === index ? (
                      <>
                        <CheckCircle className="w-3.5 h-3.5" />
                        Copied!
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        Copy
                      </>
                    )}
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Technical Highlights Section */}
        {project.technicalHighlights && project.technicalHighlights.length > 0 && (
          <div className="project-section-card mb-8 sr sr-delay-5">
            <div className="flex items-center gap-4 mb-5">
              <div className="section-icon icon-highlights">
                <Wrench className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-xl font-semibold text-foreground">
                Technical Highlights
              </h2>
            </div>
            <div className="space-y-3">
              {project.technicalHighlights.map((highlight, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 text-foreground/65"
                >
                  <div className="w-6 h-6 rounded-full bg-blue-500/10 flex items-center justify-center mt-0.5 shrink-0">
                    <span className="text-blue-500 text-xs font-bold">{index + 1}</span>
                  </div>
                  <span className="text-[15px]">{highlight}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Achievements Section */}
        {project.achievements && project.achievements.length > 0 && (
          <div className="project-section-card mb-8 sr sr-delay-6">
            <div className="flex items-center gap-4 mb-5">
              <div className="section-icon icon-achievements">
                <Trophy className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-xl font-semibold text-foreground">Achievements</h2>
            </div>
            <div className="space-y-3">
              {project.achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 text-foreground/65"
                >
                  <div className="w-6 h-6 rounded-full bg-purple-500/10 flex items-center justify-center mt-0.5 shrink-0">
                    <Award className="w-3.5 h-3.5 text-purple-500" />
                  </div>
                  <span className="text-[15px]">{achievement}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Performance Metrics Section */}
        {project.performanceMetrics && project.performanceMetrics.length > 0 && (
          <div className="project-section-card mb-8 sr sr-delay-7">
            <div className="flex items-center gap-4 mb-5">
              <div className="section-icon icon-performance">
                <BarChart3 className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-xl font-semibold text-foreground">
                Performance Metrics
              </h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {project.performanceMetrics.map((metric, index) => (
                <div key={index} className="metric-card">
                  <p className="text-3xl font-bold bg-linear-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">
                    {metric.value}
                  </p>
                  <p className="text-foreground/50 text-sm mt-2 font-medium">
                    {metric.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Future Enhancements Section */}
        {project.futureEnhancements && project.futureEnhancements.length > 0 && (
          <div className="project-section-card mb-8 sr sr-delay-7">
            <div className="flex items-center gap-4 mb-5">
              <div className="section-icon icon-future">
                <Rocket className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-xl font-semibold text-foreground">
                Future Enhancements
              </h2>
            </div>
            <div className="space-y-3">
              {project.futureEnhancements.map((enhancement, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 text-foreground/65"
                >
                  <div className="w-6 h-6 rounded-full bg-teal-500/10 flex items-center justify-center mt-0.5 shrink-0">
                    <Rocket className="w-3.5 h-3.5 text-teal-500" />
                  </div>
                  <span className="text-[15px]">{enhancement}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
