interface SectionLabelProps {
  children: React.ReactNode;
}

export default function SectionLabel({ children }: SectionLabelProps) {
  return (
    <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#2D6A4F] bg-[#D8F3DC] px-3.5 py-1.5 rounded-full mb-6">
      <span className="w-1.5 h-1.5 rounded-full bg-[#2D6A4F] block" />
      {children}
    </span>
  );
}
