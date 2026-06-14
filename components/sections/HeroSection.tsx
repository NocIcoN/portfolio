import Button from "@/components/ui/Button";
import { useLang } from "@/lib/LanguageContext";

export default function HeroSection() {
  const { t } = useLang();

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center pt-20 pb-20 max-w-6xl mx-auto px-6"
    >
      {/* Available badge */}
      <div className="inline-flex items-center gap-2 bg-white border border-black/[0.08] rounded-full px-4 py-1.5 mb-8 w-fit text-sm text-[#6B6860]">
        <span className="w-2 h-2 rounded-full bg-[#52B788] animate-pulse block" />
        {t.hero.badge}
      </div>

      <p className="text-sm text-[#6B6860] tracking-widest uppercase mb-5">{t.hero.greeting}</p>

      <h1 className="font-serif text-[clamp(3rem,8vw,5.5rem)] leading-[1.05] text-[#1A1916] mb-4">
        {t.hero.firstName}
        <br />
        <em className="italic text-[#2D6A4F]">{t.hero.lastName}</em>
      </h1>

      <p className="text-lg text-[#6B6860] max-w-xl leading-relaxed mb-10">{t.hero.subtitle}</p>

      <div className="flex gap-4 flex-wrap items-center">
        <Button href="#projects">{t.hero.ctaWork}</Button>
        <Button href="#contact" variant="outline">
          {t.hero.ctaTalk}
        </Button>
      </div>

      <div className="mt-16 flex items-center gap-3 text-[#6B6860] text-xs tracking-widest uppercase">
        <span className="w-10 h-px bg-[#6B6860] block" />
        {t.hero.scroll}
      </div>
    </section>
  );
}
