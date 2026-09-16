"use client";

import Image from "next/image";
import { Github, Instagram, Linkedin, Mail, MessageCircle } from "lucide-react";
import { footerCopy, site } from "@/lib/content";
import { useLanguage } from "@/lib/i18n";
import { DoodleWave } from "./Doodles";

export function Footer() {
  const { t } = useLanguage();

  const links = [
    { label: t(footerCopy.whatsapp), href: site.whatsappHref, icon: MessageCircle, external: true },
    { label: t(footerCopy.email), href: `mailto:${site.email}`, icon: Mail, external: false },
    { label: "LinkedIn", href: site.linkedin, icon: Linkedin, external: true },
    { label: "GitHub", href: site.github, icon: Github, external: true },
    { label: "Instagram", href: site.instagram, icon: Instagram, external: true },
  ];

  return (
    <footer className="relative overflow-hidden bg-navy pt-10">
      <DoodleWave className="mx-auto text-white/10" />
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-4 py-10 text-center sm:px-6 lg:flex-row lg:justify-between lg:text-left lg:px-8">
        <div className="flex flex-col items-center gap-3 lg:items-start">
          <Image
            src="/assets/branding/logo.png"
            alt="Bryan Marc Dev"
            width={220}
            height={150}
            className="h-14 w-auto drop-shadow-[0_6px_10px_rgba(0,0,0,0.35)] sm:h-16"
          />
          <p className="text-sm text-white/60">{t(footerCopy.role)}</p>
        </div>

        <nav aria-label="Enlaces de contacto" className="flex flex-wrap items-center justify-center gap-x-5 gap-y-3">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener" : undefined}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-white/80 transition-colors hover:text-cyan"
            >
              <link.icon className="h-4 w-4" aria-hidden="true" />
              {link.label}
            </a>
          ))}
        </nav>

        <p className="text-sm text-white/50">
          © {new Date().getFullYear()} {site.title} {site.fullName}
        </p>
      </div>
    </footer>
  );
}
