"use client";

import Link from "next/link";
import { useLang } from "@/lib/LanguageContext";
import { NAV_SECTIONS, OWNER } from "@/lib/data";

export default function Footer() {
  const { t } = useLang();

  return (
    <footer className="bg-[#1A1916] text-white/60 py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6 flex-wrap">
        <div>
          <p className="font-serif text-xl text-white">{OWNER.name}</p>
          <p className="text-sm mt-1">
            {t.footer.role} · {t.footer.location}
          </p>
        </div>

        <div className="flex gap-6 flex-wrap">
          {NAV_SECTIONS.map((section) => (
            <Link
              key={section.href}
              href={section.href}
              className="text-sm text-white/50 no-underline hover:text-[#52B788] transition-colors duration-200"
            >
              {t.nav[section.key]}
            </Link>
          ))}
        </div>

        <p className="text-sm">
          © {new Date().getFullYear()} {OWNER.name}. {t.footer.rights}
        </p>
      </div>
    </footer>
  );
}
