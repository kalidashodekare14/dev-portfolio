"use client";

import { Layers, Server, Wrench } from "lucide-react";
import { BiLogoReact, BiLogoTypescript, BiLogoNodejs } from "react-icons/bi";
import { FaAws } from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiExpress,
  SiNestjs,
  SiMongodb,
  SiPostgresql,
  SiRedis,
  SiGit,
  SiDocker,
  SiVercel,
  SiGithub,
  SiLinux,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { techStack } from "@/data/techstack";

const categoryIcons: Record<string, React.ReactNode> = {
  Frontend: <Layers className="w-5 h-5 text-primary" />,
  Backend: <Server className="w-5 h-5 text-primary" />,
  Tools: <Wrench className="w-5 h-5 text-primary" />,
};

const skillMeta: Record<string, { icon: React.ReactNode; color: string }> = {
  "React.js": { icon: <BiLogoReact />, color: "#61DAFB" },
  "Next.js": { icon: <SiNextdotjs />, color: "#ffffff" },
  "TypeScript": { icon: <BiLogoTypescript />, color: "#3178C6" },
  "Tailwind CSS": { icon: <SiTailwindcss />, color: "#06B6D4" },
  "Node.js": { icon: <BiLogoNodejs />, color: "#339933" },
  "Express.js": { icon: <SiExpress />, color: "#ffffff" },
  "Nest.js": { icon: <SiNestjs />, color: "#E0234E" },
  "MongoDB": { icon: <SiMongodb />, color: "#47A248" },
  "PostgreSQL": { icon: <SiPostgresql />, color: "#4169E1" },
  "Redis": { icon: <SiRedis />, color: "#DC382D" },
  "Git": { icon: <SiGit />, color: "#F05032" },
  "Docker": { icon: <SiDocker />, color: "#2496ED" },
  "AWS": { icon: <FaAws />, color: "#FF9900" },
  "Vercel": { icon: <SiVercel />, color: "#ffffff" },
  "GitHub Actions": { icon: <SiGithub />, color: "#ffffff" },
  "Linux": { icon: <SiLinux />, color: "#FCC624" },
  "VS Code": { icon: <VscVscode />, color: "#007ACC" },
};

export default function TechStack() {
  return (
    <section id="techstack" className="relative py-24 px-6 overflow-hidden">
      <div className="absolute top-0 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="sr text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">Tech Stack</span>
          </h2>
          <p className="text-foreground/60 max-w-2xl mx-auto">
            Technologies and tools I work with to build modern applications.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {techStack.map((category, catIndex) => (
            <div
              key={category.title}
              className={`sr sr-delay-${catIndex + 1} group p-6 rounded-2xl bg-card border border-border hover:border-primary/40 transition-all duration-300`}
            >
              <div className="flex items-center gap-2 justify-center mb-6">
                {categoryIcons[category.title]}
                <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                  {category.title}
                </h3>
              </div>
              <div className="flex flex-col gap-3">
                {category.skills.map((name) => {
                  const meta = skillMeta[name];
                  return (
                    <div
                      key={name}
                      className="flex items-center gap-3 px-4 py-3 rounded-xl bg-muted hover:bg-primary/10 border border-transparent hover:border-primary/20 hover:translate-x-1.5 transition-all cursor-default"
                    >
                      <span className="text-xl" style={{ color: meta?.color }}>{meta?.icon}</span>
                      <span className="text-foreground font-medium">{name}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
