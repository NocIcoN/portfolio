"use client";

import SectionLabel from "@/components/ui/SectionLabel";
import SkillCard from "@/components/ui/SkillCard";
import { useLang } from "@/lib/LanguageContext";
import { SKILLS_META } from "@/lib/data";

export default function SkillsSection() {
  const { t } = useLang();

  return (
    <section id="skills" className="py-24 max-w-6xl mx-auto px-6 text-center">
      <SectionLabel>{t.skills.label}</SectionLabel>
      <h2 className="font-serif text-4xl text-[#1A1916] mb-2">{t.skills.heading}</h2>
      <p className="text-[#6B6860] mb-12">{t.skills.subtitle}</p>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 text-left">
        {t.skills.items.map((skill, i) => (
          <SkillCard
            key={skill.name}
            name={skill.name}
            description={skill.description}
            icon={SKILLS_META[i].icon}
            level={SKILLS_META[i].level}
            learning={SKILLS_META[i].learning}
            learningLabel={t.skills.learningBadge}
          />
        ))}
      </div>
    </section>
  );
}
