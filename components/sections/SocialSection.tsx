"use client";

import SectionLabel from "@/components/ui/SectionLabel";
import { useLang } from "@/lib/LanguageContext";
import { SOCIAL_LINKS } from "@/lib/data";

export default function SocialSection() {
  const { t } = useLang();

  return (
    <section id="social" className="py-24 max-w-6xl mx-auto px-6 text-center">
      <SectionLabel>{t.social.label}</SectionLabel>
      <h2 className="font-serif text-4xl text-[#1A1916] mb-2">{t.social.heading}</h2>
      <p className="text-[#6B6860] mb-12">{t.social.subtitle}</p>

      <div className="flex justify-center gap-6 flex-wrap">
        {SOCIAL_LINKS.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target={link.url.startsWith("http") ? "_blank" : undefined}
            rel={link.url.startsWith("http") ? "noopener noreferrer" : undefined}
            className="group bg-white border border-black/[0.08] rounded-2xl px-10 py-8 flex flex-col items-center gap-3 min-w-[160px] no-underline text-[#1A1916] transition-all duration-300 hover:border-[#2D6A4F] hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(45,106,79,0.12)]"
          >
            <span className="text-4xl">{link.icon}</span>
            <span className="font-semibold text-sm">{link.name}</span>
            <span className="text-xs text-[#6B6860]">{link.handle}</span>
          </a>
        ))}
      </div>
    </section>
  );
}
