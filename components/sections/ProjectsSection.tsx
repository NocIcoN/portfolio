"use client";

import SectionLabel from "@/components/ui/SectionLabel";
import ProjectCard from "@/components/ui/ProjectCard";
import { useLang } from "@/lib/LanguageContext";
import { PROJECTS_META } from "@/lib/data";

export default function ProjectsSection() {
  const { t } = useLang();

  return (
    <section id="projects" className="py-24 max-w-6xl mx-auto px-6">
      <SectionLabel>Featured Work</SectionLabel>
      <h2 className="font-serif text-4xl text-[#1A1916] mb-2">Projects</h2>
      <p className="text-[#6B6860] mb-12">A selection of things I&apos;ve built and shipped</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {t.projects.items.map((project, i) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            description={project.description}
            tags={PROJECTS_META[i].tags}
            emoji={PROJECTS_META[i].emoji}
            bgColor={PROJECTS_META[i].bgColor}
            liveUrl={PROJECTS_META[i].liveUrl}
            githubUrl={PROJECTS_META[i].githubUrl}
            liveLabel={t.projects.liveDemo}
            githubLabel={t.projects.github}
          />
        ))}
      </div>
    </section>
  );
}
