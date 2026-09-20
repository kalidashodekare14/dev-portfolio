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
      "Every year, during winter, floods and cyclones in Bangladesh, underprivileged people suffer. Many donors want to help but do not know who to help. This project is a MERN Stack web platform that connects donors, receivers, volunteers and admin to ensure timely relief distribution.",
    image: "/projects/helplink.webp",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js", "Express.js", "MongoDB"],
    features: [
      "Receivers can post their issues and donors can easily view these requests and provide assistance through donations, ensuring a transparent and efficient support system.",
      "The platform uses AI to analyze request titles and determine emergency levels automatically. Highly urgent requests can be instantly prioritized or auto-approved to accelerate relief distribution during critical situations.",
      "ntegrated an AI-powered chatbot to provide instant support and guidance for users. The chatbot helps users navigate the platform, answer common questions, provide emergency assistance information, and improve overall user experience during disaster situations.",
      "Implemented secure authentication with protected routes and role-based permissions to ensure platform security and data privacy.",
      "Integrated REST APIs for authentication, donation management, request handling, and real-time data communication between frontend and backend systems.",
    ],
    github: "https://github.com/kalidashodekare14/HelpLink_Frontend",
    live: "https://helplink-frontend.vercel.app",
    challenges: [
      {
        challenge: "During critical disasters, manually screening hundreds of help requests created bottlenecks, significantly delaying immediate relief to high-risk victims.",
        solution: "Integrated an AI-powered text analysis model to evaluate request titles, extract severity indicators, and automatically calculate urgency scores for instant prioritization or auto-approval.",
      },
      {
        challenge: "Managing four distinct user roles (Receiver, Donor, Volunteer, Admin) created security risks regarding unauthorized data access, privilege escalation, and data mutation (e.g., users altering other users' requests).",
        solution: "Implemented JWT authentication with route guard middlewares, enforcing strict role-based authorization rules across both client-side routes and backend REST API endpoints.",
      },
      {
        challenge: "High user traffic during crisis situations led to repetitive inquiry support tickets and reduced platform usability for stressed users needing urgent help.",
        solution: "Built and embedded an AI-powered assistant to deliver real-time platform navigation, automated FAQs, and step-by-step guidance for emergency processes.",
      },
      {
        challenge: "Fetching and synchronizing dynamic updates across multiple unique dashboards created unnecessary payload overhead and slow response times under high-frequency updates.",
        solution: "Structured optimized RESTful API endpoints with pagination, precise payload scoping, and centralized state management to handle dynamic status changes smoothly.",
      },
    ],
    demoCredentials: [
      { label: "Email", value: "demo@helplink.com" },
      { label: "Password", value: "helplink123" },
    ],
    technicalHighlights: [
      "Designed type-safe UI components using Next.js, TypeScript, and Tailwind CSS to ensure high performance and fully responsive layouts.",
      "Managed complex asynchronous states and form validations seamlessly using RTK Query and React Hook Form.",
      "Built scalable REST APIs with Node.js, Express.js, and MongoDB, using Mongoose for efficient schema modeling and data access.",
      "Integrated OpenAI API for intelligent features and secured the application using JWT and NextAuth for robust role-based access.",
    ],
    // achievements: [
    //   "Connected 500+ volunteers with disaster-affected communities",
    //   "Reduced response time by 60% compared to traditional methods",
    //   "Featured in local tech community showcase",
    // ],
    // futureEnhancements: [
    //   "AI-powered volunteer-task matching optimization",
    //   "Mobile app development with React Native",
    //   "Integration with government disaster management APIs",
    //   "Multi-language support for broader accessibility",
    // ],
  },
  {
    id: "adoply",
    title: "Adoply",
    subtitle: "MERN Stack Pet Adoption Application",
    shortDescription: "A platform for pet lovers to find and adopt their perfect furry companion.",
    fullDescription:
      "Adoply is a comprehensive pet adoption platform that connects shelters with potential adopters. It features detailed pet profiles, adoption application tracking, and a seamless communication system between shelters and adopters.",
    image: "/projects/adoply.webp",
    tags: ["Next.js","Tailwind CSS", "TanStack Query", "Firebase", "Node.js", "Express.js", "MongoDB"],
    features: [
      "Built responsive Home, Pet Listing, and Pet Details pages with reusable components.",
      "Integrated REST API for dynamic pet data and managed state with TanStack Query",
      "Collaborated with team using Git and GitHub for feature development",
    ],
    github: "https://github.com/Mehedi86/adoptly-team-project",
    live: "https://adoptly-team-project.vercel.app",
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
      { label: "Admin Email", value: "kalidashodekare14@gmail.com" },
      { label: " Password", value: "Kalidash84@@##" },
    ],
    technicalHighlights: [
      "Implemented advanced search with filters for species, age, size, and location",
      "Built a real-time messaging system between adopters and shelters",
      "Created responsive UI with Tailwind CSS for seamless mobile experience",
      "Used MongoDB Atlas for scalable cloud database hosting",
    ],
    // achievements: [
    //   "Facilitated 200+ successful pet adoptions",
    //   "Partnered with 50+ local animal shelters",
    //   "99.9% uptime with zero data loss incidents",
    // ],
    // futureEnhancements: [
    //   "AI-based pet personality matching for better adoption fits",
    //   "Video call feature for virtual meet-and-greet",
    //   "Integration with pet insurance providers",
    //   "Gamification system to encourage adoptions",
    // ],
  },
  {
    id: "healthcare",
    title: "HealthCare",
    subtitle: "Doctor Appointment System",
    shortDescription: "A complete doctor appointment booking and management system.",
    fullDescription:
      "The Healthcare project is designed for patients. Here, you can easily book doctor appointments online without any hassle, make payments if required, and receive doctor consultations and treatments. Patients can view their booked appointments, and there is a dashboard that the admin can control.",
    image: "/projects/healthcare.webp",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js", "Express.js", "MongoDB"],
    features: [
      "Patients can easily find and select a doctor by filtering based on doctor name, department, and specialization to receive the care they need.",
      "Patients can easily book doctor appointments online without any hassle, make payments if required, and receive doctor consultations and treatments.",
    ],
    github: "https://github.com/kalidashodekare14/HealthCare",
    live: "https://health-care14.vercel.app/",
    challenges: [
      {
        challenge: "Multiple patients attempting to book the same doctor's appointment slot simultaneously caused race conditions, leading to double-booked time slots and schedule conflicts.",
        solution: "Implemented optimistic concurrency control and transactional DB operations (atomic updates) to temporarily lock slot availability during the checkout/booking workflow.",
      },
      {
        challenge: "Filtering large numbers of doctor profiles by name, department, and medical specialization simultaneously resulted in slow database queries and UI responsiveness lag.",
        solution: "Structured indexed database queries with debounced search inputs and server-side pagination to process multi-parameter filtering efficiently.",
      },
      {
        challenge: "Calculating live dashboard analytics (total revenue, patient counts, doctor distributions, appointment metrics) on every admin page load caused heavy server CPU load and delayed dashboard rendering.",
        solution: "Implemented cached aggregation pipelines and background data computation for analytics endpoints, invalidating caches only when new transactions or bookings occur.",
      },

    ],
    demoCredentials: [
      { label: "Admin Email", value: "kalidashodekare14@gmail.com" },
      { label: " Password", value: "Kalidash84@@##" },
    ],
    technicalHighlights: [
      "Developed a responsive, patient-centric UI and full-control admin dashboard using Next.js App Router and Tailwind CSS for optimal layout performance and quick page transitions.",
      "Implemented client-side filtering and dynamic booking workflows to deliver a frictionless scheduling experience across mobile and desktop devices.",
      "Designed structured MongoDB schemas for users, doctors, schedules, and appointments, optimizing query patterns for concurrent slot availability checks.",
      "Leveraged Next.js Server Actions / API Routes alongside MongoDB aggregation pipelines to efficiently compute real-time admin analytics and revenue metrics.",
    ],
    // achievements: [
    //   "Processed 1000+ appointments with zero scheduling conflicts",
    //   "Reduced no-show rates by 40% with automated reminders",
    //   "Improved patient satisfaction scores by 35%",
    // ],
    // performanceMetrics: [
    //   { label: "Average Load Time", value: "1.2s" },
    //   { label: "API Response Time", value: "<200ms" },
    //   { label: "Uptime", value: "99.9%" },
    // ],
    // futureEnhancements: [
    //   "Telemedicine video consultation integration",
    //   "AI-powered symptom checker and doctor recommendation",
    //   "Insurance claim processing automation",
    //   "Mobile app with push notifications",
    // ],
  },
];
