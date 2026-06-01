import SectionLabel from "@/components/ui/SectionLabel";
import SkillCard from "@/components/ui/SkillCard";
import { SKILLS } from "@/lib/data";

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 max-w-6xl mx-auto px-6 text-center">
      <SectionLabel>Tech Stack</SectionLabel>
      <h2 className="font-serif text-4xl text-[#1A1916] mb-2">Skills &amp; Technologies</h2>
      <p className="text-[#6B6860] mb-12">What I work with and what I&apos;m actively learning</p>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 text-left">
        {SKILLS.map((skill) => (
          <SkillCard key={skill.name} skill={skill} />
        ))}
      </div>
    </section>
  );
}
