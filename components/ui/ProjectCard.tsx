import Tag from "@/components/ui/Tag";
import type { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group bg-white border border-black/[0.08] rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(0,0,0,0.08)]">
      {/* Thumbnail */}
      <div
        className={`h-44 flex items-center justify-center text-5xl ${project.bgColor}`}
      >
        {project.emoji}
      </div>

      <div className="p-6">
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>

        <h3 className="font-semibold text-base text-[#1A1916] mb-2">{project.title}</h3>
        <p className="text-sm text-[#6B6860] leading-relaxed mb-5">{project.description}</p>

        <div className="flex gap-4">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[#2D6A4F] font-medium no-underline flex items-center gap-1 hover:underline"
            >
              🔗 Live Demo
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[#2D6A4F] font-medium no-underline flex items-center gap-1 hover:underline"
            >
              GitHub →
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
