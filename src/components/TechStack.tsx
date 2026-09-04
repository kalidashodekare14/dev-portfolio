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

interface SkillMeta {
  icon: React.ReactNode;
  color?: string;
  useThemeColor?: boolean;
}

const skillMeta: Record<string, SkillMeta> = {
  "React.js": { icon: <BiLogoReact />, color: "#61DAFB" },
  "Next.js": { icon: <SiNextdotjs />, useThemeColor: true },
  "TypeScript": { icon: <BiLogoTypescript />, color: "#3178C6" },
  "Tailwind CSS": { icon: <SiTailwindcss />, color: "#06B6D4" },
  "Node.js": { icon: <BiLogoNodejs />, color: "#339933" },
  "Express.js": { icon: <SiExpress />, useThemeColor: true },
  "Nest.js": { icon: <SiNestjs />, color: "#E0234E" },
  "MongoDB": { icon: <SiMongodb />, color: "#47A248" },
  "PostgreSQL": { icon: <SiPostgresql />, color: "#4169E1" },
  "Redis": { icon: <SiRedis />, color: "#DC382D" },
  "Git": { icon: <SiGit />, color: "#F05032" },
  "Docker": { icon: <SiDocker />, color: "#2496ED" },
  "AWS": { icon: <FaAws />, color: "#FF9900" },
  "Vercel": { icon: <SiVercel />, useThemeColor: true },
  "GitHub Actions": { icon: <SiGithub />, useThemeColor: true },
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
            <span className="bg-linear-to-r from-foreground to-primary bg-clip-text text-transparent">Tech Stack</span>
          </h2>
          <p className="text-foreground/60 max-w-2xl mx-auto">
            Technologies and tools I work with to build modern applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {techStack.map((category, catIndex) => (
            <div
              key={category.title}
              className={`sr sr-delay-${catIndex + 1} bg-card border border-border rounded-2xl p-6 space-y-5`}
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center">
                  {categoryIcons[category.title]}
                </div>
                <h3 className="text-base font-semibold text-foreground">{category.title}</h3>
              </div>

              <div className="grid grid-cols-3 lg:grid-cols-4 gap-5 items-start">
                {category.skills.map((name) => {
                  const meta = skillMeta[name];
                  return (
                    <div key={name} className="flex flex-col items-center gap-2 w-20 group">
                      <div className="align-center w-14 h-14 rounded-xl bg-muted border border-border flex items-center justify-center group-hover:border-primary/50 transition-colors">
                        <span
                          className={`text-3xl ${meta?.useThemeColor ? "text-foreground" : ""}`}
                          style={meta?.color && !meta?.useThemeColor ? { color: meta.color } : undefined}
                        >{meta?.icon}</span>
                      </div>
                      <span className="text-xs text-muted-foreground font-medium text-center leading-tight w-full">{name}</span>
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
