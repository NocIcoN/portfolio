import type { Skill, Project, TimelineItem, Service, SocialLink } from "@/types";

export const OWNER = {
  name: "Ilham Firdaus",
  initials: "IF",
  role: "Junior Software Developer",
  company: "PT Assist Software Indonesia Pratama",
  degree: "S1 Sistem Informasi",
  university: "STMIK PPKIA Pradnya Paramita",
  location: "Malang, East Java, Indonesia",
  email: "ilhamfirdaus08123@email.com",
  whatsapp: "6281228264986",
  bio: [
    "I'm a junior software developer based in Indonesia with a passion for creating well-crafted, user-friendly applications. I graduated with a degree in Information Systems from STMIK PPKIA Pradnya Paramita.",
    "Currently working at PT Assist Software Indonesia Pratama, I'm continually expanding my skill set — from web technologies like HTML, CSS, and JavaScript to modern frameworks like React.js and Next.js, as well as Android development with Kotlin and cross-platform apps with Flutter.",
    "I believe good software is built at the intersection of clean code and thoughtful design.",
  ],
};

export const SKILLS: Skill[] = [
  { name: "HTML", description: "Semantic markup & structure", icon: "🌐", level: 90 },
  { name: "CSS", description: "Layouts, animations & design", icon: "🎨", level: 85 },
  { name: "JavaScript", description: "ES6+, DOM, async", icon: "⚡", level: 80 },
  { name: "Kotlin", description: "Android native development", icon: "🤖", level: 70 },
  { name: "React.js", description: "Components, hooks, state", icon: "⚛️", level: 55, learning: true },
  { name: "Next.js", description: "SSR, routing, full-stack", icon: "▲", level: 40, learning: true },
  { name: "Flutter", description: "Cross-platform mobile apps", icon: "🐦", level: 35, learning: true },
  { name: "Git & GitHub", description: "Version control & collaboration", icon: "🐙", level: 75 },
];

export const PROJECTS: Project[] = [
  {
    title: "E-Commerce Landing Page",
    description:
      "A responsive product landing page with smooth animations, a shopping cart UI, and mobile-first layout. Focused on clean, fast-loading UI.",
    tags: ["HTML", "CSS", "JavaScript"],
    emoji: "🛍️",
    bgColor: "bg-emerald-50",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Task Manager Android App",
    description:
      "A native Android task management app built with Kotlin, featuring local storage, priority tags, and a clean Material Design interface.",
    tags: ["Kotlin", "Android"],
    emoji: "📋",
    bgColor: "bg-blue-50",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Weather Dashboard",
    description:
      "A React-based weather app integrating a public API to display real-time data with location search and a visual forecast UI.",
    tags: ["React.js", "JavaScript"],
    emoji: "⚛️",
    bgColor: "bg-purple-50",
    liveUrl: "#",
    githubUrl: "#",
  },
];

export const TIMELINE: TimelineItem[] = [
  {
    period: "2025 — Present",
    title: "Junior Software Developer",
    org: "PT Assist Software Indonesia Pratama",
    description:
      "Working on real-world software products, collaborating with teams, writing maintainable code.",
    type: "work",
  },
  {
    period: "2025 — Present",
    title: "Learning React.js & Next.js",
    org: "Self-taught / Online Resources",
    description:
      "Deepening front-end skills with modern React patterns, hooks, and exploring server-side rendering with Next.js for full-stack capabilities.",
    type: "learning",
  },
  {
    period: "2025 — Present",
    title: "Exploring Flutter",
    org: "Self-taught / Mobile Development",
    description:
      "Building cross-platform mobile apps with Flutter to complement my native Android experience with Kotlin.",
    type: "learning",
  },
  {
    period: "2024",
    title: "Internship",
    org: "PT. Winnicode Garuda Teknologi Indonesia",
    description:
      "Completed a software development internship, contributing to real projects, learning industry workflows, and gaining practical experience in a professional environment.",
    type: "work",
  },
  {
    period: "2023",
    title: "Studi Independen",
    org: "Bangkit Academy",
    description:
      "Completed an intensive independent study program focused on Cloud Computing and gaining hands-on experience with Goole Cloud Platform services.",
    type: "education",
  },
  {
    period: "2021 — 2025",
    title: "S1 Sistem Informasi",
    org: "STMIK PPKIA Pradnya Paramita, Malang",
    description:
      "Completed a Bachelor's degree in Information Systems, building strong foundations in software development, database systems, and computer networking.",
    type: "education",
  },
];

export const SERVICES: Service[] = [
  {
    icon: "🌐",
    title: "Web Development",
    description:
      "Building responsive, modern websites and web applications using HTML, CSS, JavaScript, and React.js that look great on any device.",
  },
  {
    icon: "📱",
    title: "Android Development",
    description:
      "Native Android apps built with Kotlin — clean UI, smooth performance, and structured code following Android best practices.",
  },
  // {
  //   icon: "🔄",
  //   title: "Cross-Platform Apps",
  //   description:
  //     "Mobile applications that work on both iOS and Android using Flutter, delivering a single codebase with a native feel.",
  // },
  {
    icon: "🔧",
    title: "UI Implementation",
    description:
      "Turning Figma designs or mockups into pixel-perfect, interactive interfaces with attention to detail and usability.",
  },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { icon: "🐙", name: "GitHub", handle: "@ilhamfirdaus", url: "https://github.com/NocIcoN" },
  { icon: "💼", name: "LinkedIn", handle: "Ilham Firdaus", url: "https://www.linkedin.com/in/milhamfirdaus025/" },
  { icon: "✉️", name: "Email", handle: "ilhamfirdaus@gmail.com", url: "mailto:ilhamfirdaus08123@gmail.com" },
];

export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Journey", href: "#experience" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];
