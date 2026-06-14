"use client";
import { createContext, useContext, useState } from "react";
import { translations, type Locale, type Translation } from "./translations";

interface LangContextType {
  locale: Locale;
  t: Translation;
  toggle: () => void;
}

const LangContext = createContext<LangContextType | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<Locale>("en");
  const toggle = () => setLocale((l) => (l === "en" ? "id" : "en"));

  return (
    <LangContext.Provider value={{ locale, t: translations[locale], toggle }}>
      {children}
    </LangContext.Provider>
  );
}

export const useLang = () => {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used inside LanguageProvider");
  return ctx;
};