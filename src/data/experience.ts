export interface ExperienceEntry {
  title: string;
  company: string;
  period: string;
  description: string | string[];
  employmentType?: string;
  location?: string;
  tags?: string[];
}

export const experience: ExperienceEntry[] = [
  {
    title: "Full Stack Developer Intern",
    company: "AnantNetra Technologies",
    period: "23 June 2026 - Present",
    description: [
      "Architected and maintained responsive, reusable frontend design systems using Next.js, TypeScript, and Tailwind CSS, reducing development time for new features.",
      "Engineered scalable RESTful APIs with Node.js, Express, and NestJS, while optimizing frontend state management and data fetching using RTK Query.",
      "Boosted overall application speed and SEO rankings through advanced performance tuning, including code-splitting, lazy loading, and SSR optimization.",
      "Streamlined cross-stack debugging and automated deployment pipelines, ensuring smooth releases via structured Git feature-branch workflows.",
    ],
    employmentType: "Internship",
    location: "Remote (Jaipur, Rajasthan, India)",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js", "Express.js", "Nest.js", "PostgreSQL", "Prisma", "Docker", "Redis"],
  },
];
