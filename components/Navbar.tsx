"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n";
import { navLinks, site, waHref, heroCopy } from "@/lib/content";
import { CartoonButton } from "./CartoonButton";
import { MobileNav } from "./MobileNav";
import { LanguageToggle } from "./LanguageToggle";

export function Navbar() {
  const { t } = useLanguage();

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="sticky top-0 z-30 border-b-2 border-navy/20 bg-gradient-to-r from-navy via-blue to-navy shadow-[0_4px_18px_-6px_rgba(6,42,99,0.5)]"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-2 sm:px-6 lg:px-8">
        <a
          href="#top"
          className="-my-2 flex shrink-0 items-center gap-2 transition-transform hover:scale-105"
          aria-label={`${site.name} Dev, inicio`}
        >
          <Image
            src="/assets/branding/logo.png"
            alt="Bryan Marc Dev"
            width={220}
            height={150}
            priority
            className="h-16 w-auto drop-shadow-[0_6px_10px_rgba(0,0,0,0.35)] sm:h-20 lg:h-24"
          />
        </a>

        <nav aria-label="Navegación principal" className="hidden lg:flex lg:items-center lg:gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-2 font-display text-sm font-semibold text-white/85 transition-colors hover:bg-white/15 hover:text-cyan"
            >
              {t(link.label)}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <LanguageToggle className="hidden sm:inline-flex" />
          <CartoonButton
            as="a"
            href={waHref(t(heroCopy.talkMessage))}
            target="_blank"
            rel="noopener"
            variant="cta"
            size="sm"
            className="hidden sm:inline-flex"
          >
            {t(heroCopy.hire)}
          </CartoonButton>
          <MobileNav />
        </div>
      </div>
    </motion.header>
  );
}
