import {
  Code2,
  Database,
  Server,
  Layout,
  Terminal,
  Cpu,
  FileCode2,
  Hash,
  Sparkles,
  HardDrive,
  Network,
  GitFork,
  Box,
  Play,
  RefreshCw,
  Globe,
  Cloud,
  GitBranch,
  Component,
  Radio,
} from "lucide-react";
// NOTE: lucide-react in this project no longer ships brand/social icons
// (Github/Linkedin/Twitter/Instagram were removed upstream) — sourced from
// @tabler/icons-react instead, which is already installed for the rest of the site.
import {
  IconBrandGithub as Github,
  IconBrandLinkedin as Linkedin,
  IconBrandX as Twitter,
  IconBrandInstagram as Instagram,
} from "@tabler/icons-react";

export const portfolioData = {
  personalInfo: {
    name: "Lalit Gurjar",
    tagline:
      "Full Stack Developer | Node js guy which build scalable solution ",
    description:
      "I build full-stack AI applications that integrate large language models into production systems. Specializing in end-to-end development from LLM API integration (OpenAI, Anthropic) through scalable backend architecture and responsive frontends.Technical expertise spans frontend (React, NextJS, TypeScript), backend (Node.js, FastAPI, REST APIs), databases (PostgreSQL, MongoDB), and infrastructure (Docker, CI/CD, GitHub Actions, VPS deployment). Experienced with system design, WebSocket implementation, and real-time data handling using Redis and Socket.IO.Currently pursuing B.Tech in Computer Engineering at National Institute of Technology Patna while contributing to production systems. Certified in AWS Cloud Practitioner and Oracle Cloud Infrastructure AI Foundations. Proficient in Git, Linux, and modern development workflows.Looking to collaborate on AI-powered applications, backend optimization, and full-stack engineering challenges. Open to opportunities in AI engineering, backend development, and system architecture roles.",
    image:
      "https://res.cloudinary.com/dsmyka9cr/image/upload/v1778235248/WhatsApp_Image_2026-05-08_at_15.43.16_hkrbuz.jpg",
    resumeLink:
      "https://res.cloudinary.com/dsmyka9cr/image/upload/v1782059466/collageformateresume_vesbd5.pdf",
  },
  education: [
    { id: 1, title: "B.Tech in Computer Science", institution: "NIT Patna", year: "2024 - present" },
    { id: 2, title: "Higher Secondary (12th)", institution: "MHBGSSS patodi", board: "RBSE", year: "2023" },
  ],
  skills: [
    { category: "Languages", items: [{ name: "C++", icon: Code2 }, { name: "JavaScript", icon: FileCode2 }, { name: "SQL", icon: Database }] },
    { category: "Frameworks", items: [{ name: "ReactJS", icon: Code2 }, { name: "NextJS", icon: Layout }, { name: "Express JS", icon: Server }, { name: "FastAPI", icon: Terminal }] },
    { category: "Backend & Infrastructure", items: [{ name: "Node.js", icon: Server }, { name: "REST API", icon: Cpu }, { name: "LLM API Integration", icon: Sparkles }, { name: "WebSockets", icon: Network }, { name: "System Design", icon: GitFork }] },
    { category: "Database", items: [{ name: "MongoDB", icon: Database }, { name: "PostgreSQL", icon: Database }, { name: "Redis", icon: HardDrive }] },
    { category: "DevOps & Deployment", items: [{ name: "Docker", icon: Box }, { name: "GitHub Actions", icon: Play }, { name: "CI/CD", icon: RefreshCw }, { name: "Caddy", icon: Globe }, { name: "VPS Deployment", icon: Cloud }] },
    { category: "Tools", items: [{ name: "Git", icon: GitBranch }, { name: "GitHub", icon: Github }, { name: "Linux", icon: Terminal }, { name: "Postman", icon: Radio }, { name: "Blender", icon: Component }] },
  ],
  learning: {
    technologies: ["AI integration", "Next.js 14", "System Design"],
    note: "Currently deep diving into AI integration and system design things.",
  },
  projects: [
    { id: 0, title: "PollMan – Full-Stack Real-Time Poll & Survey Platform", description: "A modern full-stack real-time poll and survey platform with live analytics, public sharing, poll publishing, and interactive dashboards built using React, Node.js, MongoDB, Socket.IO, and Recharts", tech: ["React", "Typescript", "Express.js", "Node JS", "Socket.IO", "Oauth 2.0", "Recharts"], github: "https://github.com/lalit999999/PollMan", live: "https://pollman.onrender.com/" },
    { id: 1, title: "Super Alein - AI-powered Gmail + Google Calendar command center", description: "SuperAlien is an AI-powered productivity platform that augments Gmail and Google Calendar with intelligent features. It provides AI email summarization, smart management, advanced search, and agent-driven automation—without cloning Gmail. Built for professionals who want to work smarter, not harder.", tech: ["Next js", "Typescript", "Clerk Auth", "Corsair dev", "PostgreSQL", "OpenAI", "Gmail and Google Calendar Connectors"], github: "https://github.com/lalit999999/super-alien", live: "https://superalein.lalitgurjar.in/" },
    { id: 2, title: "Real-time Rider Location Tracking Application", description: "A real-time application for tracking rider locations using WebSocket technology. The application allows users to view the live location of riders on a map, providing an interactive and dynamic experience.", tech: ["HTML5", "CSS3", "Node.js", "Express.js", "MongoDB", "Socket.io", "Redis Pub/Sub", "Passport.js", "Google Oauth 2.0", "CORS", "Dotenv"], github: "https://github.com/lalit999999/realtime-rider-location-tracting-application", live: "https://realtime-rider-location-tracting.onrender.com" },
    { id: 3, title: "Local Service Booking Platform (Full stack application)", description: "Built a MERN-based service marketplace platform with RESTful APIs for services, bookings, categories,and reviews.Implemented JWT authentication and role-based authorization for Customer, Provider, and Admin access ,Designed a booking lifecycle system (Requested → Confirmed → In-progress → Completed → Cancelled).Structured MongoDB schemas using Mongoose for scalable data management and CRUD operations.Integrated image uploads using Multer and Cloudinary for profile and service-related images.", tech: ["React", "Vite", "Node.js", "Express.js", "MongoDB", "JWT", "Axios", "Cloudinary", "Multer", "CORS", "Dotenv"], github: "https://github.com/lalit999999/service_provider_frontend", live: "https://l-s-p.lalitgurjar.in/" },
    { id: 4, title: "Nebula CheckGrid (Real-time Application)", description: "Nebula CheckGrid is inspired by the 1 Million Checkboxes idea, but built as a practical full-stack real-time app for learning and evaluation.", tech: ["HTML5", "CSS3", "Node.js", "Express.js", "MongoDB", "Socket.io", "Redis Pub/Sub", "Passport.js", "Google Oauth 2.0", "CORS", "Dotenv"], github: "https://github.com/lalit999999/1M-Check_box", live: "https://onem-check-box.onrender.com/" },
    { id: 5, title: "WDC Induction Platform", description: "The WDC Induction Platform is a secure, full-stack web application designed to digitize and automate the student recruitment and onboarding process for the university club. It eliminates manual paperwork by providing a centralized dashboard for both administrators and applicants, streamlining workflows from initial registration to final evaluation", tech: ["Node.js", "Express.js", "MongoDB", "JWT"], github: "https://github.com/lalit999999/wdc_redesign_frontend", live: "https://wdc.lalitgurjar.in/" },
    { id: 6, title: "MiniYouTube Backend", description: "Developed a RESTful backend system for a Mini YouTube–like video sharing platform to manage users,videos, and authentication", tech: ["Node.js", "Express.js", "MongoDB", "JWT", "bcrypt", "Multer", "Cloudinary"], github: "https://github.com/lalit999999/miniyoutube_backend", live: "https://github.com/lalit999999/miniyoutube_backend" },
  ],
  certifications: [
    { id: 1, title: "OCI AI Foundations Associate (2025)", issuer: "Oracle", date: "sept 2025", credentialUrl: "https://mylearn.oracle.com/ou/learning-path/become-a-oci-ai-foundations-associate-2025/147781", image: "https://res.cloudinary.com/dsmyka9cr/image/upload/v1773149399/oraclecirtificate_elmzum.jpg", skills: ["Basic ML", "AI"], color: "emerald" },
    { id: 2, title: "AWS Cloud Quest: Cloud Practitioner - Training Badge", issuer: "AWS", date: "April 2026", credentialUrl: "https://www.credly.com/badges/d30fe051-d896-46e7-bd43-3f0077d0fc43/public_url", image: "https://res.cloudinary.com/dsmyka9cr/image/upload/q_auto/f_auto/v1775403413/aws_labs_cir2_lwhqyd.jpg", skills: ["Amazon Web Services (AWS)", "AWS", "AWS Cloud", "AWS Cloud Computing", "AWS Cloud Foundations"], color: "blue" },
    { id: 3, title: "Full stack generative and Agentic AI with python", issuer: "Udemy", date: "June 2026", credentialUrl: "https://www.udemy.com/certificate/UC-cefd5275-ff28-47de-a824-c380e58e660e/", image: "https://res.cloudinary.com/dsmyka9cr/image/upload/v1782059915/udemycir_yqhshg.jpg", skills: ["Stateful AI system design with LangGraph", "RAG pipeline implementation", "Model Context Protocol (MCP) server development", "Data validation and structuring with Pydantic", "Containerized deployment with Docker"], color: "purple" },
  ],
  socials: [
    { name: "GitHub", url: "https://github.com/lalit999999", icon: Github },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/lalitgujar/", icon: Linkedin },
    { name: "Twitter", url: "https://x.com/lalit7363", icon: Twitter },
    { name: "Blog", url: "https://hashnode.com/@lalitgujjar", icon: Hash },
  ],
};
