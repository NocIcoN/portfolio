import SectionLabel from "@/components/ui/SectionLabel";
import ProjectCard from "@/components/ui/ProjectCard";
import { PROJECTS } from "@/lib/data";

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 max-w-6xl mx-auto px-6">
      <SectionLabel>Featured Work</SectionLabel>
      <h2 className="font-serif text-4xl text-[#1A1916] mb-2">Projects</h2>
      <p className="text-[#6B6860] mb-12">A selection of things I&apos;ve built and shipped</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}
