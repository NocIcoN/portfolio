import SectionLabel from "@/components/ui/SectionLabel";
import { OWNER } from "@/lib/data";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 max-w-6xl mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20 items-center">
        {/* Visual card column */}
        <div className="bg-[#F0EDE8] rounded-3xl aspect-[3/4] flex flex-col items-center justify-center gap-5 p-8">
          <Image
            src="/avatar.jpg" 
            alt="Ilham Firdaus"
            width={50}
            height={50}
            className="w-75 h-75 rounded-full object-cover border-4 border-white shadow-md"
            priority
          />

          <div className="bg-white rounded-2xl px-10 py-4 border border-black/[0.08] w-75">
            <p className="text-[0.68rem] text-[#6B6860] uppercase tracking-widest">Current Role</p>
            <p className="font-semibold text-sm mt-1">{OWNER.role}</p>
          </div>

          <div className="bg-white rounded-2xl px-10 py-4 border border-black/[0.08] w-75">
            <p className="text-[0.68rem] text-[#6B6860] uppercase tracking-widest">Education</p>
            <p className="font-semibold text-sm mt-1">{OWNER.degree}</p>
          </div>
        </div>

        {/* Content column */}
        <div>
          <SectionLabel>About Me</SectionLabel>
          <h2 className="font-serif text-4xl leading-snug mb-6 text-[#1A1916]">
            A Developer Who Loves Building Things
          </h2>

          {OWNER.bio.map((paragraph, i) => (
            <p key={i} className="text-[#6B6860] text-sm leading-relaxed mb-4">
              {paragraph}
            </p>
          ))}

          {/* Meta grid */}
          <div className="grid grid-cols-2 gap-3 mt-8">
            {[
              { label: "Company", value: OWNER.company },
              { label: "Degree", value: OWNER.degree },
              { label: "Specialty", value: "Web & Mobile Dev" },
              { label: "Status", value: "Available for Work", highlight: true },
            ].map((item) => (
              <div key={item.label} className="bg-[#F0EDE8] rounded-xl p-4">
                <p className="text-[0.68rem] text-[#6B6860] uppercase tracking-widest mb-1">
                  {item.label}
                </p>
                <p
                  className={`text-sm font-medium leading-snug ${
                    item.highlight ? "text-[#2D6A4F] font-semibold" : "text-[#1A1916]"
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
