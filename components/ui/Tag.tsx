interface TagProps {
  children: React.ReactNode;
}

export default function Tag({ children }: TagProps) {
  return (
    <span className="text-[0.7rem] font-semibold tracking-wide bg-[#E9F5EE] text-[#1B4332] px-2.5 py-0.5 rounded-full">
      {children}
    </span>
  );
}
