import type { TimelineItem } from "@/types";

interface TimelineItemProps {
  item: TimelineItem;
}

const dotColors: Record<TimelineItem["type"], string> = {
  work: "bg-[#2D6A4F]",
  learning: "bg-[#52B788]",
  education: "bg-[#2D6A4F]",
};

export default function TimelineEntry({ item }: TimelineItemProps) {
  return (
    <div className="relative pl-8 pb-12 last:pb-0">
      {/* Dot */}
      <span
        className={`absolute left-0 top-1 w-3.5 h-3.5 rounded-full border-[3px] border-[#F7F5F2] ${dotColors[item.type]} -translate-x-[6px]`}
      />

      <p className="text-xs font-semibold tracking-widest uppercase text-[#2D6A4F] mb-1">
        {item.period}
      </p>
      <p className="font-semibold text-base text-[#1A1916] mb-0.5">{item.title}</p>
      <p className="text-sm text-[#6B6860] mb-3">{item.org}</p>
      <p className="text-sm text-[#6B6860] leading-relaxed">{item.description}</p>
    </div>
  );
}
