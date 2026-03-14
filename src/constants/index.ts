import projectImage1 from "@/assets/uat.fitapp.webp";
import projectImage2 from "@/assets/prithadev.webp";
import projectImage3 from "@/assets/project3.webp";
import projectImage4 from "@/assets/project4.webp";
import projectImage5 from "@/assets/project5.webp";
import projectImage6 from "@/assets/zap.webp";

export interface NavLink {
  label: string;
  href: string;
}

export interface Project {
  id: number;
  name: string;
  description: string;
  image: string;
  githubLink?: string;
  siteUrl?: string;
}

export interface Skill {
  name: string;
  experience: string;
  iconKey: string;
  iconColor: string;
}

export interface Experience {
  title: string;
  company: string;
  duration: string;
  description: string;
}

export interface Education {
  degree: string;
  stream?: string;
  institution: string;
  duration: string;
  description: string;
}

export interface SocialLink {
  href: string;
  label: string;
  ariaLabel: string;
}

export const NAVIGATION_LINKS: NavLink[] = [
  { label: "Bio", href: "#bio" },
  { label: "Projects", href: "#projects" },
  { label: "Work Experience", href: "#work" },
  { label: "Education", href: "#education" },
  { label: "Skills", href: "#skills" },
  { label: "Process", href: "#process" },
  { label: "GitHub", href: "#github" },
  { label: "Contact", href: "#contact" },
];

export const HERO = {
  name: "Pritha Karki",
  greet: "Hey 👋🏻, Myself",
  description:
    "I’m a frontend developer who builds clean, responsive, and user-friendly websites. I enjoy turning ideas into simple and engaging web experiences.",
};

export const PROJECTS: Project[] = [
  {
    id: 1,
    name: "FitApp.io",
    description:
      "A smart fitness platform designed to help fitness businesses manage clients, automate tasks, and grow their services online.",
    image: projectImage1,
    siteUrl: "https://fitapp.io/",
  },
  {
    id: 2,
    name: "Personal Portfolio",
    description:
      "My personal portfolio built with React and Tailwind CSS to showcase my projects, skills, and experience as a frontend developer.",
    image: projectImage2,
    siteUrl: "https://prithadev.netlify.app/",
  },
  {
    id: 3,
    name: "Zap: Make Your Links Shorter",
    description:
      "Zap turns any long URL into a short, shareable link in seconds. Free, fast, and no sign-up required.",
    image: projectImage6,
    siteUrl: "https://zap-it.vercel.app/",
  },
  {
    id: 4,
    name: "Sensai: Career Coach Platform",
    description:
      "A career development platform with tools for building resumes, preparing for interviews, and tracking job applications. It includes personalized onboarding, dashboards, and a resume builder.",
    image: projectImage3,
    githubLink: "https://github.com/getparas/sensai",
  },
  {
    id: 5,
    name: "Barbershop Booking Application",
    description:
      "An online booking system for barbershops where users can schedule haircuts and grooming services with real-time availability.",
    image: projectImage4,
    githubLink: "https://github.com/getparas/barbershopBookingApplication",
  },

  {
    id: 6,
    name: "All Projects",
    description:
      "A collection of all my personal and collaborative projects, including web apps, tools, and experiments.",
    image: projectImage5,
    githubLink: "https://github.com/prithaxdev",
  },
];

export const BIO: string[] = [
  "I’m a self-taught frontend developer who enjoys building modern web applications using React, Next.js, and Tailwind CSS. I focus on creating clean, responsive interfaces that are easy to use and visually simple.",
  "I like writing organized code and continuously improving my development skills.",
  "When I'm not coding, I enjoy collaborating with other developers, learning new technologies, and exploring ideas that improve how people interact with the web.",
];

export const SKILLS: Skill[] = [
  {
    name: "React",
    experience: "2+ years",
    iconKey: "react",
    iconColor: "text-cyan-400",
  },
  {
    name: "Next.js",
    experience: "1+ years",
    iconKey: "nextjs",
    iconColor: "text-white",
  },
  {
    name: "TypeScript",
    experience: "1.5+ years",
    iconKey: "typescript",
    iconColor: "text-blue-400",
  },
  {
    name: "Tailwind CSS",
    experience: "2+ years",
    iconKey: "tailwindcss",
    iconColor: "text-teal-400",
  },
  {
    name: "Node.js",
    experience: "2+ years",
    iconKey: "nodejs",
    iconColor: "text-green-400",
  },
  {
    name: "MongoDB",
    experience: "1.5+ years",
    iconKey: "mongodb",
    iconColor: "text-green-500",
  },
  {
    name: "Convex",
    experience: "< 1 year",
    iconKey: "convex",
    iconColor: "text-orange-400",
  },
  {
    name: "TanStack",
    experience: "< 1 year",
    iconKey: "tanstack",
    iconColor: "text-red-400",
  },
  {
    name: "Git",
    experience: "2.5+ years",
    iconKey: "git",
    iconColor: "text-orange-500",
  },
];

export const EXPERIENCES: Experience[] = [
  {
    title: "UI Designer",
    company: "Er-Sathi",
    duration: "February 2022 – December 2024",
    description:
      "Designed user interfaces and wireframes using Figma while working closely with developers and product teams. Focused on improving usability, maintaining visual consistency, and creating clear design systems.",
  },
  {
    title: "Frontend Developer",
    company: "Panoptic Dataworks",
    duration: "October 2024 – Present",
    description:
      "Build and maintain responsive user interfaces using React and Tailwind CSS. Work with developers and designers to implement features, fix bugs, and improve performance while following clean coding practices.",
  },
];

export const EDUCATION: Education[] = [
  {
    degree: "+2",
    stream: "Humanities",
    institution: "National Examination Board (NEB), Nepal",
    duration: "2017 – 2019",
    description:
      "Completed higher secondary education in the Humanities stream with subjects focused on literature, history, and social studies.",
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Tribhuvan University",
    duration: "2021 – Running",
    description:
      "Currently studying Computer Applications with a focus on programming, software development, algorithms, and database systems.",
  },
];

export interface ProcessStep {
  step: string;
  title: string;
  iconName: string;
  color: string;
  description: string;
  points: string[];
}

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: "Step 01",
    title: "Discover",
    iconName: "Search",
    color: "bg-brand/10 text-brand dark:bg-brand/20 dark:text-brand",
    description:
      "I start by deeply understanding the problem - user goals, constraints, and context. No code before clarity.",
    points: [
      "Define the core problem & success criteria",
      "Research similar solutions & identify gaps",
      "Align on scope before touching the keyboard",
    ],
  },
  {
    step: "Step 02",
    title: "Plan",
    iconName: "Map",
    color:
      "bg-orange-100 text-orange-600 dark:bg-orange-950 dark:text-orange-400",
    description:
      "With the problem understood, I map out the architecture - choosing the right tools and breaking complexity into manageable pieces.",
    points: [
      "Choose the right stack for the job",
      "Sketch system architecture & data flow",
      "Break down work into atomic, shippable tasks",
    ],
  },
  {
    step: "Step 03",
    title: "Design",
    iconName: "Paintbrush",
    color:
      "bg-violet-100 text-violet-600 dark:bg-violet-950 dark:text-violet-400",
    description:
      "Design isn't just visuals - it's thinking through UX flows, component hierarchy, and accessibility before writing a line of UI code.",
    points: [
      "Wireframe layouts & define component structure",
      "Plan interaction states & edge cases",
      "Ensure accessibility & responsive behaviour",
    ],
  },
  {
    step: "Step 04",
    title: "Build",
    iconName: "Code2",
    color:
      "bg-emerald-100 text-emerald-600 dark:bg-emerald-950 dark:text-emerald-400",
    description:
      "This is where ideas become reality. I write clean, typed, focused code - shipping in small increments and reviewing as I go.",
    points: [
      "Write typed, readable, maintainable code",
      "Ship in small commits - each one shippable",
      "Self-review & refactor before calling it done",
    ],
  },
  {
    step: "Step 05",
    title: "Ship",
    iconName: "Rocket",
    color: "bg-sky-100 text-sky-600 dark:bg-sky-950 dark:text-sky-400",
    description:
      "Shipping is where the real feedback starts. I deploy, verify everything works in production, and keep iterating based on what users actually need.",
    points: [
      "Deploy and verify the app in production",
      "Monitor performance & catch issues early",
      "Gather feedback and plan the next iteration",
    ],
  },
];

export const SOCIAL_MEDIA_LINKS: SocialLink[] = [
  {
    href: "https://github.com/prithaxdev",
    label: "GitHub",
    ariaLabel: "Visit GitHub profile",
  },
  {
    href: "https://www.linkedin.com/in/getpritha/",
    label: "LinkedIn",
    ariaLabel: "Visit LinkedIn profile",
  },
  {
    href: "https://x.com/pritha_karki",
    label: "Twitter",
    ariaLabel: "Visit Twitter profile",
  },
];
