"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { services, servicesCopy, waHref } from "@/lib/content";
import { useLanguage } from "@/lib/i18n";
import { SectionHeading } from "./SectionHeading";
import { cn } from "@/lib/cn";

const toneClasses: Record<(typeof services)[number]["tone"], string> = {
  mint: "bg-gradient-to-br from-green/15 to-cyan/10",
  sky: "bg-gradient-to-br from-sky/20 to-blue/10",
  lilac: "bg-gradient-to-br from-blue/15 to-navy/10",
  peach: "bg-gradient-to-br from-orange/20 to-yellow/10",
  butter: "bg-gradient-to-br from-yellow/25 to-orange/10",
};

export function ServicesSection() {
  const { t } = useLanguage();

  return (
    <section id="servicios" className="relative bg-blue/5 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={t(servicesCopy.eyebrow)}
          title={t(servicesCopy.title)}
          subtitle={t(servicesCopy.subtitle)}
        />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((svc, i) => (
            <motion.a
              key={svc.title.es}
              href={waHref(t(svc.message))}
              target="_blank"
              rel="noopener"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              whileHover={{ y: -5 }}
              className={cn(
                "group relative flex flex-col justify-between rounded-3xl border-2 border-navy/10 p-6 shadow-panel transition-shadow hover:shadow-[0_24px_44px_-16px_rgba(6,42,99,0.35)]",
                toneClasses[svc.tone],
                svc.wide ? "sm:col-span-2" : "",
              )}
            >
              <div>
                <h3 className="font-display text-lg font-bold text-navy sm:text-xl">
                  {t(svc.title)}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-navy/70">{t(svc.description)}</p>
              </div>
              <div className="mt-5 flex items-center justify-between gap-3">
                <span className="rounded-full bg-white/70 px-3 py-1 text-xs font-semibold text-navy/70">
                  {svc.stack}
                </span>
                <span className="inline-flex items-center gap-1 font-display text-sm font-bold text-blue">
                  {t(servicesCopy.talk)}
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>
            </motion.a>
          ))}
        </div>

        <p className="mt-10 text-center text-navy/70">
          {t(servicesCopy.unsure)}{" "}
          <a
            href={waHref(t(servicesCopy.unsureMessage))}
            target="_blank"
            rel="noopener"
            className="font-bold text-blue underline decoration-2 underline-offset-4"
          >
            {t(servicesCopy.unsureLink)}
          </a>
        </p>
      </div>
    </section>
  );
}
