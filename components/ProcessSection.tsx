"use client";

import { motion } from "framer-motion";
import { processSteps, processCopy } from "@/lib/content";
import { useLanguage } from "@/lib/i18n";
import { SectionHeading } from "./SectionHeading";

export function ProcessSection() {
  const { t } = useLanguage();

  return (
    <section id="proceso" className="relative bg-cream py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow={t(processCopy.eyebrow)} title={t(processCopy.title)} />

        <ol className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, i) => (
            <motion.li
              key={step.n}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="relative rounded-3xl border-2 border-navy/10 bg-white p-6 shadow-panel"
            >
              <span className="font-display text-3xl font-extrabold text-cyan">{step.n}</span>
              <h3 className="mt-2 font-display text-lg font-bold text-navy">{t(step.title)}</h3>
              <p className="mt-2 text-sm leading-relaxed text-navy/70">{t(step.description)}</p>
              <span className="mt-4 inline-block rounded-full bg-yellow/30 px-3 py-1 text-xs font-bold text-navy">
                {t(step.tag)}
              </span>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
