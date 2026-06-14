import Link from "next/link";

type Variant = "primary" | "outline";

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

export default function Button({
  href,
  children,
  variant = "primary",
  className = "",
  onClick,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center px-8 py-3.5 rounded-full text-sm font-medium transition-all duration-200";

  const variants: Record<Variant, string> = {
    primary:
      "bg-[#2D6A4F] text-white hover:bg-[#1B4332] hover:-translate-y-0.5",
    outline:
      "bg-transparent text-[#1A1916] border border-[rgba(0,0,0,0.12)] hover:border-[#2D6A4F] hover:text-[#2D6A4F]",
  };

  const isExternal = href.startsWith("http") || href.startsWith("mailto");

  if (isExternal) {
    return (
      <a
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
        className={`${base} ${variants[variant]} ${className}`}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} onClick={onClick} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </Link>
  );
}
