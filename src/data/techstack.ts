export interface TechCategory {
  title: string;
  skills: string[];
}

export const techStack: TechCategory[] = [
  {
    title: "Frontend",
    skills: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express.js", "Nest.js", "MongoDB", "PostgreSQL", "Redis"],
  },
  {
    title: "Tools",
    skills: ["Git", "Docker", "AWS", "Vercel", "GitHub Actions", "Linux", "VS Code"],
  },
];
