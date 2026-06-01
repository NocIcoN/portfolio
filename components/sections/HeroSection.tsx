import Button from "@/components/ui/Button";
import { OWNER } from "@/lib/data";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center pt-20 pb-20 max-w-6xl mx-auto px-6"
    >
      {/* Available badge */}
      <div className="inline-flex items-center gap-2 bg-white border border-black/[0.08] rounded-full px-4 py-1.5 mb-8 w-fit text-sm text-[#6B6860]">
        <span className="w-2 h-2 rounded-full bg-[#52B788] animate-pulse block" />
        Open to opportunities
      </div>

      <p className="text-sm text-[#6B6860] tracking-widest uppercase mb-5">Hello, I&apos;m</p>

      <h1 className="font-serif text-[clamp(3rem,8vw,5.5rem)] leading-[1.05] text-[#1A1916] mb-4">
        {OWNER.name.split(" ")[0]}
        <br />
        <em className="italic text-[#2D6A4F]">{OWNER.name.split(" ")[1]}</em>
      </h1>

      <p className="text-lg text-[#6B6860] max-w-xl leading-relaxed mb-10">
        Junior Software Developer crafting clean, functional digital experiences — from web apps
        to mobile solutions. Currently at {OWNER.company}.
      </p>

      <div className="flex gap-4 flex-wrap items-center">
        <Button href="#projects">View My Work</Button>
        <Button href="#contact" variant="outline">Let&apos;s Talk</Button>
      </div>

      <div className="mt-16 flex items-center gap-3 text-[#6B6860] text-xs tracking-widest uppercase">
        <span className="w-10 h-px bg-[#6B6860] block" />
        Scroll to explore
      </div>
    </section>
  );
}
