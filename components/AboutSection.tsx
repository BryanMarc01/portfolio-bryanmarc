"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Download, Github, Linkedin } from "lucide-react";
import { aboutCopy, aboutStats, promises, site, testimonials } from "@/lib/content";
import { useLanguage } from "@/lib/i18n";
import { SectionHeading } from "./SectionHeading";
import { CartoonButton } from "./CartoonButton";

export function AboutSection() {
  const { t, lang } = useLanguage();

  return (
    <section id="sobre-mi" className="relative bg-sky/10 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow={t(aboutCopy.eyebrow)} title={t(aboutCopy.title)} />

        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-lg leading-relaxed text-navy/80">{t(aboutCopy.body1)}</p>
            <p className="mt-4 text-lg leading-relaxed text-navy/80">{t(aboutCopy.body2)}</p>

            <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {aboutStats.map((stat) => (
                <div
                  key={stat.label.es}
                  className="rounded-2xl border-2 border-navy/10 bg-white p-4 text-center shadow-cartoon-sm"
                >
                  <p className="font-display text-2xl font-extrabold text-blue">{stat.value}</p>
                  <p className="mt-1 text-xs text-navy/60">{t(stat.label)}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <CartoonButton
                as="a"
                href={lang === "es" ? site.cvEs : site.cvEn}
                download
                variant="primary"
                icon={Download}
              >
                {t(aboutCopy.downloadCv)}
              </CartoonButton>
              <a
                href={site.linkedin}
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-1.5 font-display text-sm font-bold text-navy hover:text-blue"
              >
                <Linkedin className="h-4 w-4" /> LinkedIn
              </a>
              <a
                href={site.github}
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-1.5 font-display text-sm font-bold text-navy hover:text-blue"
              >
                <Github className="h-4 w-4" /> GitHub
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative"
          >
            <div className="relative mx-auto aspect-square w-full max-w-sm overflow-hidden rounded-[2.5rem] border-2 border-navy/10 bg-gradient-to-b from-sky/20 to-cyan/10 shadow-panel">
              <Image
                src="/assets/cards/about.png"
                alt="Bryan Marc saludando en una escena tropical"
                fill
                sizes="(min-width: 1024px) 30vw, 80vw"
                className="object-contain p-6"
              />
            </div>
            <aside className="mx-auto mt-6 max-w-sm rounded-3xl border-2 border-navy/10 bg-white p-6 shadow-panel">
              <p className="font-display text-sm font-bold uppercase tracking-wide text-blue">
                {t(aboutCopy.promisesTitle)}
              </p>
              <ul className="mt-3 space-y-2">
                {promises.map((p) => (
                  <li key={p.es} className="flex gap-2 text-sm text-navy/80">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-green" aria-hidden="true" />
                    {t(p)}
                  </li>
                ))}
              </ul>
            </aside>
          </motion.div>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-3">
          {testimonials.map((tItem, i) => (
            <motion.blockquote
              key={tItem.author}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="rounded-3xl border-2 border-navy/10 bg-white p-6 shadow-cartoon-sm"
            >
              <p className="text-sm italic leading-relaxed text-navy/80">&ldquo;{t(tItem.quote)}&rdquo;</p>
              <footer className="mt-4">
                <p className="font-display text-sm font-bold text-navy">{tItem.author}</p>
                <p className="text-xs text-navy/60">{t(tItem.role)}</p>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
