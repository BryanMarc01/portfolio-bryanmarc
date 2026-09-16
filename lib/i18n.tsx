"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";

export type Lang = "es" | "en";

export interface Bilingual {
  es: string;
  en: string;
}

interface LanguageContextValue {
  lang: Lang;
  toggle: () => void;
  t: (value: Bilingual) => string;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

const STORAGE_KEY = "bm-lang";

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("es");

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored === "en" || stored === "es") setLang(stored);
    } catch {
      // ignore (private mode / blocked storage)
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  function toggle() {
    setLang((prev) => {
      const next: Lang = prev === "es" ? "en" : "es";
      try {
        localStorage.setItem(STORAGE_KEY, next);
      } catch {
        // ignore
      }
      return next;
    });
  }

  function t(value: Bilingual) {
    return value[lang];
  }

  return (
    <LanguageContext.Provider value={{ lang, toggle, t }}>{children}</LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used inside <LanguageProvider>");
  return ctx;
}
