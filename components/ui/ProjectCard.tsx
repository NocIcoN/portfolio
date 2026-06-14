import Tag from "@/components/ui/Tag";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  emoji: string;
  bgColor: string;
  liveUrl?: string;
  githubUrl?: string;
  liveLabel: string;
  githubLabel: string;
}

export default function ProjectCard({
  title,
  description,
  tags,
  emoji,
  bgColor,
  liveUrl,
  githubUrl,
  liveLabel,
  githubLabel,
}: ProjectCardProps) {
  return (
    <div className="group bg-white border border-black/[0.08] rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(0,0,0,0.08)]">
      <div className={`h-44 flex items-center justify-center text-5xl ${bgColor}`}>{emoji}</div>

      <div className="p-6">
        <div className="flex flex-wrap gap-1.5 mb-4">
          {tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>

        <h3 className="font-semibold text-base text-[#1A1916] mb-2">{title}</h3>
        <p className="text-sm text-[#6B6860] leading-relaxed mb-5">{description}</p>

        <div className="flex gap-4">
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[#2D6A4F] font-medium no-underline flex items-center gap-1 hover:underline"
            >
              {liveLabel}
            </a>
          )}
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[#2D6A4F] font-medium no-underline flex items-center gap-1 hover:underline"
            >
              {githubLabel}
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
