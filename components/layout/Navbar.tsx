"use client";

import Link from "next/link";
import { NAV_LINKS } from "@/lib/data";
import Image from "next/image";

export default function Navbar() {
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
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => handleScroll(e as React.MouseEvent<HTMLAnchorElement>, link.href)}
                className="text-sm text-[#6B6860] no-underline tracking-wide hover:text-[#2D6A4F] transition-colors duration-200 cursor-pointer"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          onClick={(e) => handleScroll(e as React.MouseEvent<HTMLAnchorElement>, "#contact")}
          className="bg-[#2D6A4F] text-white text-sm px-5 py-2 rounded-full hover:bg-[#1B4332] transition-colors duration-200 cursor-pointer no-underline"
        >
          Hire Me
        </a>
      </div>
    </nav>
  );
}
