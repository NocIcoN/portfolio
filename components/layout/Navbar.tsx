"use client";

import { useEffect, useState } from "react";
import LangSwitch from "@/components/ui/LangSwitch";
import Link from "next/link";
import { NAV_SECTIONS } from "@/lib/data";
import Image from "next/image";
import { useLang } from "@/lib/LanguageContext";

export default function Navbar() {
  const { t } = useLang();
  const [activeSection, setActiveSection] = useState<string>("about");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const sectionIds = NAV_SECTIONS.map((s) => s.href.replace("#", ""));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-20% 0px -70% 0px",
        threshold: 0,
      }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-[rgba(247,245,242,0.9)] backdrop-blur-md border-b border-black/[0.06]">
      <div className="max-w-6xl mx-auto px-6 h-[60px] flex items-center justify-between">
        <Link href="#hero" onClick={(e) => handleScroll(e, "#hero")} className="flex items-center">
          <Image 
            src="/logo.png"
            alt="Ilham Firdaus logo"
            width={40}
            height={40}
            className="h-9 w-auto rounded-full"
          />
        </Link>

        <ul className="hidden md:flex items-center gap-8 list-none">
          {NAV_SECTIONS.map((section) => {
            const id = section.href.replace("#", "");
            const isActive = activeSection === id;
            return (
              <li key={section.href} className="relative">
                <a
                  href={section.href}
                  onClick={(e) => handleScroll(e, section.href)}
                  className={`text-sm no-underline tracking-wide transition-colors duration-200 cursor-pointer ${
                    isActive ? "text-[#2D6A4F] font-medium" : "text-[#6B6860] hover:text-[#2D6A4F]"
                  }`}
                >
                  {t.nav[section.key]}
                </a>
                <span
                  className={`absolute -bottom-[21px] left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#2D6A4F] transition-opacity duration-200 ${
                    isActive ? "opacity-100" : "opacity-0"
                  }`}
                />
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-3">
          <LangSwitch className="hidden sm:inline-flex" />

          <button
            disabled
            title="Currently unavailable"
            aria-disabled="true"
            className="hidden sm:inline-flex items-center justify-center bg-[#2D6A4F]/40 text-white text-sm px-5 py-2 rounded-full cursor-not-allowed select-none"
          >
            {t.nav.hire}
          </button>

          <button
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            className="md:hidden flex flex-col items-center justify-center gap-1.5 w-10 h-10 rounded-full border border-black/[0.08] hover:border-[#2D6A4F] transition-colors duration-200"
          >
            <span
              className={`block w-4 h-[1.5px] bg-[#1A1916] transition-transform duration-200 ${
                menuOpen ? "translate-y-[3px] rotate-45" : ""
              }`}
            />
            <span
              className={`block w-4 h-[1.5px] bg-[#1A1916] transition-transform duration-200 ${
                menuOpen ? "-translate-y-[3px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-[max-height] duration-300 ease-in-out bg-[#F7F5F2] border-b border-black/[0.06] ${
          menuOpen ? "max-h-[420px]" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col px-6 py-4 gap-1 list-none">
          {NAV_SECTIONS.map((section) => {
            const id = section.href.replace("#", "");
            const isActive = activeSection === id;
            return (
              <li key={section.href}>
                <a
                  href={section.href}
                  onClick={(e) => handleScroll(e, section.href)}
                  className={`flex items-center gap-2 py-2.5 text-sm no-underline transition-colors duration-200 ${
                    isActive ? "text-[#2D6A4F] font-medium" : "text-[#6B6860]"
                  }`}
                >
                  <span
                    className={`w-1.5 h-1.5 rounded-full bg-[#2D6A4F] transition-opacity duration-200 ${
                      isActive ? "opacity-100" : "opacity-0"
                    }`}
                  />
                  {t.nav[section.key]}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center justify-between px-6 pb-5 pt-1">
          <LangSwitch />
          <a href="#contact" onClick={(e) => handleScroll(e, "#contact")} 
            className="... bg-[#2D6A4F] hover:bg-[#1B4332] ... cursor-pointer">
            {t.nav.hire}
          </a>
        </div>
      </div>
    </nav>
  );
}
