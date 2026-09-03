export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  tags: string[];
  features: string[];
  github?: string;
  live?: string;
}

export const projects: Project[] = [
  {
    id: "helplink",
    title: "HelpLink",
    shortDescription: "A platform connecting volunteers with people in need of assistance.",
    fullDescription: "HelpLink is a community-driven platform that bridges the gap between volunteers and individuals seeking help. It features real-time matching, location-based services, and a seamless communication system.",
    image: "/projects/helplink.jpg",
    tags: ["React", "Node.js", "MongoDB", "Socket.io"],
    features: [
      "Real-time volunteer matching",
      "Location-based service discovery",
      "In-app messaging system",
      "Rating and review system",
    ],
    github: "https://github.com/kalidash/helplink",
    live: "https://helplink.vercel.app",
  },
  {
    id: "anantnetra",
    title: "AnantNetra",
    shortDescription: "An AI-powered surveillance and monitoring system.",
    fullDescription: "AnantNetra leverages artificial intelligence for intelligent surveillance. It uses computer vision to detect anomalies, track objects, and provide real-time alerts for security applications.",
    image: "/projects/anantnetra.jpg",
    tags: ["Python", "TensorFlow", "OpenCV", "FastAPI"],
    features: [
      "Real-time object detection",
      "Anomaly detection alerts",
      "Video recording and playback",
      "Dashboard with analytics",
    ],
    github: "https://github.com/kalidash/anantnetra",
  },
  {
    id: "bookstore",
    title: "Bookstore",
    shortDescription: "A full-stack e-commerce platform for buying and selling books.",
    fullDescription: "Bookstore is a complete e-commerce solution for book lovers. It features a catalog with search and filter, shopping cart, secure checkout, and an admin dashboard for inventory management.",
    image: "/projects/bookstore.jpg",
    tags: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
    features: [
      "Advanced search and filtering",
      "Shopping cart and wishlist",
      "Secure payment integration",
      "Admin inventory dashboard",
    ],
    github: "https://github.com/kalidash/bookstore",
    live: "https://bookstore.vercel.app",
  },
];
