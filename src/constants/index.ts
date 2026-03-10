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
    name: "Sensai: Career Coach Platform",
    description:
      "A career development platform with tools for building resumes, preparing for interviews, and tracking job applications. It includes personalized onboarding, dashboards, and a resume builder.",
    image: projectImage3,
    githubLink: "https://github.com/getparas/sensai",
  },
  {
    id: 4,
    name: "Barbershop Booking Application",
    description:
      "An online booking system for barbershops where users can schedule haircuts and grooming services with real-time availability.",
    image: projectImage4,
    githubLink: "https://github.com/getparas/barbershopBookingApplication",
  },

  {
    id: 5,
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
