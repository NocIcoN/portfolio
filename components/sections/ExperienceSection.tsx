"use client";

import SectionLabel from "@/components/ui/SectionLabel";
import TimelineEntry from "@/components/ui/TimelineEntry";
import { useLang } from "@/lib/LanguageContext";
import { TIMELINE_META } from "@/lib/data";

export default function ExperienceSection() {
  const { t } = useLang();

  return (
    <section id="experience" className="py-24 max-w-6xl mx-auto px-6">
      <SectionLabel>{t.experience.label}</SectionLabel>
      <h2 className="font-serif text-4xl text-[#1A1916] mb-12">{t.experience.heading}</h2>

      <div className="relative border-l border-black/[0.08] ml-1.5">
        {t.experience.items.map((item, i) => (
          <TimelineEntry 
            key={`${item.period}-${item.title}`}
            period={item.period}
            title={item.title}
            org={item.org}
            description={item.description}
            type={TIMELINE_META[i].type}
            />
        ))}
      </div>
    </section>
  );
}
