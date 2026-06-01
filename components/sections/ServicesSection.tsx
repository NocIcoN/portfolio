import SectionLabel from "@/components/ui/SectionLabel";
import { SERVICES } from "@/lib/data";

export default function ServicesSection() {
  return (
    <section id="services" className="py-0">
      <div className="max-w-6xl mx-auto px-6 py-20 bg-white rounded-[2rem]">
        <SectionLabel>What I Offer</SectionLabel>
        <h2 className="font-serif text-4xl text-[#1A1916] mb-2">Services</h2>
        <p className="text-[#6B6860] mb-12">Ways I can help bring your ideas to life</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {SERVICES.map((service) => (
            <div
              key={service.title}
              className="group bg-[#F7F5F2] border border-black/[0.08] rounded-2xl p-8 transition-all duration-300 hover:border-[#2D6A4F] hover:bg-[#D8F3DC]"
            >
              <div className="text-3xl mb-4">{service.icon}</div>
              <h3 className="font-semibold text-sm text-[#1A1916] mb-2">{service.title}</h3>
              <p className="text-sm text-[#6B6860] leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
