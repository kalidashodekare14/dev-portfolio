export interface Skill {
  name: string;
  icon: string;
}

export interface TechCategory {
  title: string;
  skills: Skill[];
}

export const techStack: TechCategory[] = [
  {
    title: "Frontend",
    skills: [
      { name: "React", icon: "⚛️" },
      { name: "Next.js", icon: "▲" },
      { name: "TypeScript", icon: "📘" },
      { name: "Tailwind CSS", icon: "🎨" },
      { name: "HTML5", icon: "📄" },
      { name: "CSS3", icon: "🎭" },
      { name: "JavaScript", icon: "💛" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: "🟢" },
      { name: "Express.js", icon: "🚀" },
      { name: "Python", icon: "🐍" },
      { name: "FastAPI", icon: "⚡" },
      { name: "PostgreSQL", icon: "🐘" },
      { name: "MongoDB", icon: "🍃" },
      { name: "Redis", icon: "🔴" },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", icon: "🔀" },
      { name: "Docker", icon: "🐳" },
      { name: "AWS", icon: "☁️" },
      { name: "Vercel", icon: "▲" },
      { name: "GitHub Actions", icon: "⚙️" },
      { name: "Linux", icon: "🐧" },
      { name: "VS Code", icon: "💻" },
    ],
  },
];
