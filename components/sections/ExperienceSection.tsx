import SectionLabel from "@/components/ui/SectionLabel";
import TimelineEntry from "@/components/ui/TimelineEntry";
import { TIMELINE } from "@/lib/data";

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24 max-w-6xl mx-auto px-6">
      <SectionLabel>Journey</SectionLabel>
      <h2 className="font-serif text-4xl text-[#1A1916] mb-12">Experience &amp; Learning</h2>

      {/* Timeline line + entries */}
      <div className="relative border-l border-black/[0.08] ml-1.5">
        {TIMELINE.map((item) => (
          <TimelineEntry key={`${item.period}-${item.title}`} item={item} />
        ))}
      </div>
    </section>
  );
}
