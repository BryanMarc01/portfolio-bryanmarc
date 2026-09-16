"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { faqCopy, faqs } from "@/lib/content";
import { useLanguage } from "@/lib/i18n";
import { SectionHeading } from "./SectionHeading";

export function FaqSection() {
  const { t } = useLanguage();

  return (
    <section id="faq" aria-labelledby="faq-heading" className="relative bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow={t(faqCopy.eyebrow)} title={t(faqCopy.title)} />

        <div className="space-y-3">
          {faqs.map((item, i) => (
            <motion.details
              key={item.question.es}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group rounded-2xl border-2 border-navy/10 bg-cream/60 px-5 py-4 shadow-cartoon-sm open:shadow-panel"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-base font-bold text-navy sm:text-lg">
                {t(item.question)}
                <ChevronDown
                  className="h-5 w-5 shrink-0 text-blue transition-transform group-open:rotate-180"
                  aria-hidden="true"
                />
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-navy/70 sm:text-base">
                {t(item.answer)}
              </p>
            </motion.details>
          ))}
        </div>
      </div>
    </section>
  );
}
