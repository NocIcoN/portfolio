"use client";

import { useLang } from "@/lib/LanguageContext";

interface LangSwitchProps {
  className?: string;
}

export default function LangSwitch({ className = "" }: LangSwitchProps) {
  const { locale, toggle } = useLang();

  return (
    <button
      onClick={toggle}
      aria-label="Toggle language"
      className={`text-sm font-medium border border-black/[0.08] px-3 py-1.5 rounded-full hover:border-[#2D6A4F] hover:text-[#2D6A4F] transition-colors duration-200 ${className}`}
    >
      {locale === "en" ? "🇮🇩 ID" : "🇬🇧 EN"}
    </button>
  );
}
