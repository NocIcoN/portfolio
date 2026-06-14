type TimelineType = "work" | "learning" | "education";

interface TimelineItemProps {
  period: string;
  title: string;
  org: string;
  description: string;
  type: TimelineType;
}

const dotColors: Record<TimelineType, string> = {
  work: "bg-[#2D6A4F]",
  learning: "bg-[#52B788]",
  education: "bg-[#2D6A4F]",
};

export default function TimelineEntry({ period, title, org, description, type }: TimelineItemProps) {
  return (
    <div className="relative pl-8 pb-12 last:pb-0">
      {/* Dot */}
      <span
        className={`absolute left-0 top-1 w-3.5 h-3.5 rounded-full border-[3px] border-[#F7F5F2] ${dotColors[type]} -translate-x-[6px]`}
      />

      <p className="text-xs font-semibold tracking-widest uppercase text-[#2D6A4F] mb-1">
        {period}
      </p>
      <p className="font-semibold text-base text-[#1A1916] mb-0.5">{title}</p>
      <p className="text-sm text-[#6B6860] mb-3">{org}</p>
      <p className="text-sm text-[#6B6860] leading-relaxed">{description}</p>
    </div>
  );
}
