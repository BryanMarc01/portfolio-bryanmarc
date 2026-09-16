"use client";

import { useLanguage } from "@/lib/i18n";

export function LanguageToggle({ className }: { className?: string }) {
  const { lang, toggle } = useLanguage();
  const isEs = lang === "es";
  // Shows the flag/code of the language you'll switch TO.
  const target = isEs ? "en" : "es";

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isEs ? "Ver la página en inglés" : "View the page in Spanish"}
      className={
        "inline-flex h-11 items-center gap-1.5 rounded-xl border-2 border-navy bg-white px-2.5 font-display text-xs font-bold text-navy shadow-cartoon-sm transition-transform hover:-translate-y-0.5 " +
        (className ?? "")
      }
    >
      <FlagIcon lang={target} />
      {target.toUpperCase()}
    </button>
  );
}

function FlagIcon({ lang }: { lang: "es" | "en" }) {
  if (lang === "es") {
    return (
      <svg viewBox="0 0 24 16" className="h-4 w-6 rounded-sm" aria-hidden="true">
        <rect width="24" height="16" fill="#D8465C" />
        <rect y="4" width="24" height="8" fill="#4A6FA5" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 16" className="h-4 w-6 rounded-sm" aria-hidden="true">
      <rect width="24" height="16" fill="#fff" />
      <g fill="#D8465C">
        <rect y="0" width="24" height="1.85" />
        <rect y="3.7" width="24" height="1.85" />
        <rect y="7.4" width="24" height="1.85" />
        <rect y="11.1" width="24" height="1.85" />
        <rect y="14.8" width="24" height="1.2" />
      </g>
      <rect width="10.5" height="8.9" fill="#4A6FA5" />
      <g fill="#fff">
        <circle cx="2.2" cy="2" r=".7" />
        <circle cx="5.2" cy="2" r=".7" />
        <circle cx="8.2" cy="2" r=".7" />
        <circle cx="3.7" cy="4.4" r=".7" />
        <circle cx="6.7" cy="4.4" r=".7" />
        <circle cx="2.2" cy="6.8" r=".7" />
        <circle cx="5.2" cy="6.8" r=".7" />
        <circle cx="8.2" cy="6.8" r=".7" />
      </g>
    </svg>
  );
}
