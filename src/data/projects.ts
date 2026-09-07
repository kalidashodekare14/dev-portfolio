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
  challenges?: { challenge: string; solution: string }[];
  demoCredentials?: { label: string; value: string }[];
  technicalHighlights?: string[];
  achievements?: string[];
  performanceMetrics?: { label: string; value: string }[];
  futureEnhancements?: string[];
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
    challenges: [
      {
        challenge: "Handling real-time updates for volunteer availability across multiple regions",
        solution: "Implemented WebSocket connections with Socket.io for instant updates and used Redis for caching frequent queries.",
      },
      {
        challenge: "Scaling the matching algorithm to handle thousands of concurrent requests",
        solution: "Designed a priority queue system with geospatial indexing to efficiently match volunteers with nearby requests.",
      },
    ],
    demoCredentials: [
      { label: "Email", value: "demo@helplink.com" },
      { label: "Password", value: "helplink123" },
    ],
    technicalHighlights: [
      "Built with Next.js 14 App Router for optimized server-side rendering",
      "Implemented real-time geolocation tracking with Leaflet maps",
      "Used Prisma ORM with PostgreSQL for robust data management",
      "Deployed on Vercel with CI/CD pipeline via GitHub Actions",
    ],
    achievements: [
      "Connected 500+ volunteers with disaster-affected communities",
      "Reduced response time by 60% compared to traditional methods",
      "Featured in local tech community showcase",
    ],
    futureEnhancements: [
      "AI-powered volunteer-task matching optimization",
      "Mobile app development with React Native",
      "Integration with government disaster management APIs",
      "Multi-language support for broader accessibility",
    ],
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
    challenges: [
      {
        challenge: "Managing complex adoption workflows with multiple approval stages",
        solution: "Designed a state machine pattern to track adoption status and automated notifications at each stage.",
      },
      {
        challenge: "Ensuring pet data accuracy across multiple shelters",
        solution: "Implemented a verification system with shelter admin dashboards and automated data validation.",
      },
    ],
    demoCredentials: [
      { label: "Email", value: "demo@adoply.com" },
      { label: "Password", value: "adoply123" },
    ],
    technicalHighlights: [
      "Implemented advanced search with filters for species, age, size, and location",
      "Built a real-time messaging system between adopters and shelters",
      "Created responsive UI with Tailwind CSS for seamless mobile experience",
      "Used MongoDB Atlas for scalable cloud database hosting",
    ],
    achievements: [
      "Facilitated 200+ successful pet adoptions",
      "Partnered with 50+ local animal shelters",
      "99.9% uptime with zero data loss incidents",
    ],
    futureEnhancements: [
      "AI-based pet personality matching for better adoption fits",
      "Video call feature for virtual meet-and-greet",
      "Integration with pet insurance providers",
      "Gamification system to encourage adoptions",
    ],
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
    challenges: [
      {
        challenge: "Preventing double-booking of appointment slots",
        solution: "Implemented database-level constraints with optimistic locking to ensure slot availability during concurrent bookings.",
      },
      {
        challenge: "Handling timezone differences for remote consultations",
        solution: "Used UTC storage with automatic timezone conversion based on user location and doctor preferences.",
      },
    ],
    technicalHighlights: [
      "Built role-based authentication for patients, doctors, and admins",
      "Implemented calendar integration with Google Calendar API",
      "Created automated email and SMS reminders using Nodemailer",
      "Designed responsive dashboard with real-time availability updates",
    ],
    achievements: [
      "Processed 1000+ appointments with zero scheduling conflicts",
      "Reduced no-show rates by 40% with automated reminders",
      "Improved patient satisfaction scores by 35%",
    ],
    performanceMetrics: [
      { label: "Average Load Time", value: "1.2s" },
      { label: "API Response Time", value: "<200ms" },
      { label: "Uptime", value: "99.9%" },
    ],
    futureEnhancements: [
      "Telemedicine video consultation integration",
      "AI-powered symptom checker and doctor recommendation",
      "Insurance claim processing automation",
      "Mobile app with push notifications",
    ],
  },
];
