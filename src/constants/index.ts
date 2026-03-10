import projectImage1 from "@/assets/uat.fitapp.webp";
import projectImage2 from "@/assets/prithadev.webp";
import projectImage3 from "@/assets/project3.webp";
import projectImage4 from "@/assets/project4.webp";
import projectImage5 from "@/assets/project5.webp";

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
  { label: "Projects", href: "#projects" },
  { label: "Bio", href: "#bio" },
  { label: "Skills", href: "#skills" },
  { label: "Work Experience", href: "#work" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const HERO = {
  name: "Pritha Karki",
  greet: "Hey 👋🏻",
  description:
    "I’m a frontend developer who builds clean, responsive, and user-friendly websites. I enjoy turning ideas into simple and engaging web experiences.",
};

export const PROJECTS: Project[] = [
  {
    id: 1,
    name: "FitApp.io",
    description:
      "The worlds SMARTEST Fitness App. Delivering Automation & smart scalable solutions to fitness businesses",
    image: projectImage1,
    siteUrl: "https://fitapp.io/",
  },
  {
    id: 2,
    name: "Personal Portfolio",
    description:
      "A personal portfolio website built with React and Tailwind CSS to showcase my skills, projects, and work experience.",
    image: projectImage2,
    siteUrl: "https://prithadev.netlify.app/",
  },
  {
    id: 3,
    name: "Sensai: Career Coach Platform",
    description:
      "An all-encompassing career coaching platform with tools for resume building, interview preparation, and job tracking. Features personalized onboarding, interactive dashboards, a markdown-based resume builder, mock interview modules, and cover letter generation.",
    image: projectImage3,
    githubLink: "https://github.com/getparas/sensai",
  },
  {
    id: 4,
    name: "Barbershop Booking Application",
    description:
      "A booking application that allows users to reserve seats for haircuts, beard trims, and styling services. Built with PHP, MySQL, JavaScript, and CSS, featuring real-time availability updates and seamless payment integration.",
    image: projectImage4,
    githubLink: "https://github.com/getparas/barbershopBookingApplication",
  },

  {
    id: 5,
    name: "All Projects",
    description:
      "A consolidated showcase of all personal and collaborative development projects spanning web applications, tools, and platforms.",
    image: projectImage5,
    githubLink: "https://github.com/prithaxdev",
  },
];

export const BIO: string[] = [
  "I am a self-taught frontend developer specializing in React, Next.js, and Tailwind CSS. Over the past few years, I've honed my skills by building interactive and responsive web applications that delight users and solve real-world problems.",
  "My passion lies in crafting clean, maintainable code and continuously learning emerging technologies to push the boundaries of web development.",
  "Outside of coding, I enjoy collaborating with designers, contributing to open-source projects, and sharing knowledge with the developer community.",
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
      "As a UI Designer at Er-Sathi, I create user-centered designs using Figma and other wireframing tools. I collaborate with teams to develop intuitive interfaces and conduct user research to enhance usability. My role involves iterating on designs based on feedback while maintaining brand consistency.",
  },
  {
    title: "Frontend Developer",
    company: "Panoptic Dataworks",
    duration: "October 2024 – Present",
    description:
      "As a Frontend Developer at Panoptic Dataworks, I collaborate with senior developers and designers to implement responsive user interfaces using React and Tailwind CSS. I write modular components, assist in code reviews, fix bugs, and optimize performance. My responsibilities also include maintaining coding standards and continuously learning best practices to contribute to high-quality, scalable web applications.",
  },
];

export const EDUCATION: Education[] = [
  {
    degree: "+2",
    stream: "Humanities",
    institution: "National Examination Board (NEB), Nepal",
    duration: "2017 – 2019",
    description:
      "Completed higher secondary education in the Humanities stream, focusing on literature, history, and social studies, and achieved top grades in core subjects.",
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Tribhuvan University",
    duration: "2021 – Running",
    description:
      "Pursuing a degree in Computer Applications, focusing on software development, algorithms, and database management. Engaged in projects involving web development and collaborative coding.",
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
