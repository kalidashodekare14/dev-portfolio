export interface Project {
  id: string;
  title: string;
  subtitle: string;
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
    subtitle: "MERN Stack Disaster Relief Application",
    shortDescription: "A platform connecting volunteers with people in need of assistance during disasters.",
    fullDescription:
      "HelpLink is a community-driven disaster relief platform that bridges the gap between volunteers and individuals seeking help. It features real-time matching, location-based services, and a seamless communication system to coordinate relief efforts efficiently.",
    image: "/projects/helplink.webp",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js", "Express.js"],
    features: [
      "Real-time volunteer matching",
      "Location-based service discovery",
      "In-app messaging system",
      "Rating and review system",
      "Disaster alert notifications",
    ],
    github: "https://github.com/kalidash/helplink",
    live: "https://helplink.vercel.app",
  },
  {
    id: "adoply",
    title: "Adoply",
    subtitle: "MERN Stack Pet Adoption Application",
    shortDescription: "A platform for pet lovers to find and adopt their perfect furry companion.",
    fullDescription:
      "Adoply is a comprehensive pet adoption platform that connects shelters with potential adopters. It features detailed pet profiles, adoption application tracking, and a seamless communication system between shelters and adopters.",
    image: "/projects/adoply.webp",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js", "Express.js"],
    features: [
      "Pet search and filter system",
      "Shelter profiles and listings",
      "Adoption application tracking",
      "In-app messaging with shelters",
      "Pet health records management",
    ],
    github: "https://github.com/kalidash/adoply",
    live: "https://adoply.vercel.app",
  },
  {
    id: "healthcare",
    title: "HealthCare",
    subtitle: "Doctor Appointment System",
    shortDescription: "A complete doctor appointment booking and management system.",
    fullDescription:
      "HealthCare is a comprehensive doctor appointment system that streamlines the healthcare booking process. It features doctor search by specialty, real-time appointment scheduling, and a dashboard for both patients and doctors to manage their schedules.",
    image: "/projects/healthcare.webp",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js", "Express.js"],
    features: [
      "Doctor search by specialty",
      "Real-time appointment scheduling",
      "Patient dashboard",
      "Doctor availability management",
      "Appointment reminders and notifications",
    ],
    github: "https://github.com/kalidash/healthcare",
    live: "https://healthcare.vercel.app",
  },
];
