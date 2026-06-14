"use client";

import SectionLabel from "@/components/ui/SectionLabel";
import { useLang } from "@/lib/LanguageContext";
import Image from "next/image";

export default function AboutSection() {
  const { t } = useLang();
  const meta = t.about.meta;

  return (
    <section id="about" className="py-24 max-w-6xl mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20 items-center">
        <div className="bg-[#F0EDE8] rounded-3xl aspect-[3/4] flex flex-col items-center justify-center gap-5 p-8">
          <Image
            src="/avatar.jpg" 
            alt="Ilham Firdaus"
            width={112}
            height={112}
            className="w-75 h-75 rounded-full object-cover border-4 border-white shadow-md"
            priority
          />

          <div className="bg-white rounded-2xl px-10 py-4 border border-black/[0.08] w-75">
            <p className="text-[0.68rem] text-[#6B6860] uppercase tracking-widest">
              {t.about.roleCardLabel}
            </p>
            <p className="font-semibold text-sm mt-1">{t.about.roleCardValue}</p>
          </div>

          <div className="bg-white rounded-2xl px-10 py-4 border border-black/[0.08] w-75">
            <p className="text-[0.68rem] text-[#6B6860] uppercase tracking-widest">
              {t.about.eduCardLabel}
            </p>
            <p className="font-semibold text-sm mt-1">{t.about.eduCardValue}</p>
          </div>
        </div>

        <div>
          <SectionLabel>{t.about.label}</SectionLabel>
          <h2 className="font-serif text-4xl leading-snug mb-6 text-[#1A1916]">
            {t.about.heading}
          </h2>

          {t.about.bio.map((paragraph, i) => (
            <p key={i} className="text-[#6B6860] text-sm leading-relaxed mb-4">
              {paragraph}
            </p>
          ))}

          <div className="grid grid-cols-2 gap-3 mt-8">
            {[meta.company, meta.degree, meta.specialty, meta.status].map((item, i) => (
              <div key={item.label} className="bg-[#F0EDE8] rounded-xl p-4">
                <p className="text-[0.68rem] text-[#6B6860] uppercase tracking-widest mb-1">
                  {item.label}
                </p>
                <p
                  className={`text-sm font-medium leading-snug ${
                    i === 3 ? "text-[#2D6A4F] font-semibold" : "text-[#1A1916]"
                  }`}
                >
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
