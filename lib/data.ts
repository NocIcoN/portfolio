import type { Skill, Project, TimelineItem, Service, SocialLink } from "@/types";

export const OWNER = {
  name: "Ilham Firdaus",
  initials: "IF",
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP || "",
  email: process.env.NEXT_PUBLIC_EMAIL || "",
};

export const SKILLS_META = [
  { icon: "🌐", level: 90, learning: false },
  { icon: "🎨", level: 85, learning: false },
  { icon: "⚡", level: 80, learning: false },
  { icon: "⚛️", level: 55, learning: true },
  { icon: "▲", level: 40, learning: true },
  { icon: "🤖", level: 70, learning: false },
  { icon: "🐦", level: 35, learning: true },
  { icon: "🐙", level: 75, learning: false },
];

export const PROJECTS_META = [
  {
    tags: ["HTML", "CSS", "JavaScript"],
    emoji: "🛍️",
    bgColor: "bg-emerald-50",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    tags: ["Kotlin", "Android"],
    emoji: "📋",
    bgColor: "bg-blue-50",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    tags: ["React.js", "JavaScript"],
    emoji: "⚛️",
    bgColor: "bg-purple-50",
    liveUrl: "#",
    githubUrl: "#",
  },
];

export const TIMELINE_META: { type: "work" | "learning" | "education" }[] = [
  { type: "work" },
  { type: "learning" },
  { type: "learning" },
  { type: "education" },
];

export const SERVICES_META = [
  { icon: "🌐" },
  { icon: "📱" },
  { icon: "🔄" },
  { icon: "🔧" },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { icon: "🐙", name: "GitHub", handle: "@ilhamfirdaus", url: "https://github.com/NocIcoN" },
  { icon: "💼", name: "LinkedIn", handle: "Ilham Firdaus", url: "https://www.linkedin.com/in/milhamfirdaus025/" },
  { icon: "✉️", name: "Email", handle: OWNER.email, url: `mailto:${OWNER.email}` },
];

export const NAV_SECTIONS = [
  { key: "about", href: "#about" },
  { key: "skills", href: "#skills" },
  { key: "projects", href: "#projects" },
  { key: "journey", href: "#experience" },
  { key: "services", href: "#services" },
  { key: "contact", href: "#contact" },
] as const;
