export interface Skill {
  name: string;
  description: string;
  icon: string;
  level: number; // 0-100
  learning?: boolean;
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  emoji: string;
  bgColor: string;
  liveUrl?: string;
  githubUrl?: string;
}

export interface TimelineItem {
  period: string;
  title: string;
  org: string;
  description: string;
  type: "work" | "learning" | "education";
}

export interface Service {
  icon: string;
  title: string;
  description: string;
}

export interface SocialLink {
  icon: string;
  name: string;
  handle: string;
  url: string;
}
