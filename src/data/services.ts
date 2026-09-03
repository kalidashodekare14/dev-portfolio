export interface Service {
  title: string;
  description: string;
  icon: string;
}

export const services: Service[] = [
  {
    title: "Frontend Development",
    description: "Building responsive and interactive user interfaces with React, Next.js, and modern CSS frameworks.",
    icon: "🎨",
  },
  {
    title: "Backend Development",
    description: "Creating robust server-side applications with Node.js, Express, and Python FastAPI.",
    icon: "⚙️",
  },
  {
    title: "Database Design",
    description: "Designing and optimizing database schemas with PostgreSQL, MongoDB, and Redis.",
    icon: "🗄️",
  },
  {
    title: "API Development",
    description: "Building RESTful and GraphQL APIs with proper authentication and documentation.",
    icon: "🔌",
  },
  {
    title: "Cloud Deployment",
    description: "Deploying and managing applications on AWS, Vercel, and Docker containers.",
    icon: "☁️",
  },
  {
    title: "Full-Stack Applications",
    description: "End-to-end development of complete web applications from concept to production.",
    icon: "🚀",
  },
];
