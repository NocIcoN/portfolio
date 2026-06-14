interface SkillCardProps {
  name: string;
  description: string;
  icon: string;
  level: number;
  learning?: boolean;
  learningLabel: string;
}

export default function SkillCard({
  name,
  description,
  icon,
  level,
  learning,
  learningLabel,
}: SkillCardProps) {
  return (
    <div className="group bg-white border border-black/[0.08] rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#52B788] hover:shadow-[0_8px_24px_rgba(45,106,79,0.1)] relative overflow-hidden">
      {/* Top accent bar */}
      <span className="absolute top-0 left-0 right-0 h-[3px] bg-[#2D6A4F] opacity-0 group-hover:opacity-100 transition-opacity duration-200" />

      <div className="text-3xl mb-3">{icon}</div>
      <p className="font-semibold text-sm text-[#1A1916] mb-1">{name}</p>
      <p className="text-xs text-[#6B6860] leading-relaxed">{description}</p>

      {/* Level bar */}
      <div className="h-[3px] bg-[#F0EDE8] rounded-full mt-4 overflow-hidden">
        <div
          className="h-full bg-[#2D6A4F] rounded-full transition-all duration-700"
          style={{ width: `${level}%` }}
        />
      </div>

      {learning && (
        <span className="inline-block mt-3 text-[0.62rem] font-bold tracking-widest uppercase bg-amber-100 text-amber-700 px-2.5 py-0.5 rounded-full">
          {learningLabel}
        </span>
      )}
    </div>
  );
}
