"use client";

import { FormEvent, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Mail, MapPin, MessageCircle, Send } from "lucide-react";
import { contactCopy, site } from "@/lib/content";
import { useLanguage } from "@/lib/i18n";
import { SectionHeading } from "./SectionHeading";
import { CartoonButton } from "./CartoonButton";

export function ContactSection() {
  const { t, lang } = useLanguage();
  const [status, setStatus] = useState<"idle" | "error" | "ok">("idle");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    if (!name || !email || !message) {
      setStatus("error");
      return;
    }

    const subject = lang === "es" ? `Nuevo proyecto de ${name}` : `New project from ${name}`;
    const body = `${message}\n\n— ${name} (${email})`;
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setStatus("ok");
    form.reset();
  }

  return (
    <section id="contacto" className="relative bg-navy py-20 sm:py-24">
      <div className="pointer-events-none absolute inset-0 -z-0 opacity-10">
        <Image src="/assets/cards/contact.png" alt="" fill className="object-cover" />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={t(contactCopy.eyebrow)}
          title={<span className="text-white">{t(contactCopy.title)}</span>}
          subtitle={<span className="text-white/70">{t(contactCopy.subtitle)}</span>}
        />

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <ContactRow icon={MessageCircle} label={t(contactCopy.whatsapp)} value="+1 829 494 6176" href={site.whatsappHref} />
            <ContactRow icon={Mail} label={t(contactCopy.email)} value={site.email} href={`mailto:${site.email}`} />
            <ContactRow icon={MapPin} label={t(contactCopy.whereIAm)} value={lang === "es" ? site.location : site.locationEn} />
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            noValidate
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-3xl border-2 border-white/15 bg-white p-6 shadow-panel sm:p-8"
          >
            <p className="font-display text-lg font-bold text-navy">{t(contactCopy.formTitle)}</p>

            <label className="mt-4 block text-sm font-semibold text-navy">
              {t(contactCopy.name)}
              <input
                type="text"
                name="name"
                autoComplete="name"
                required
                className="mt-1.5 w-full rounded-xl border-2 border-navy/15 px-4 py-2.5 text-navy outline-none transition-colors focus:border-blue"
              />
            </label>

            <label className="mt-4 block text-sm font-semibold text-navy">
              {t(contactCopy.mail)}
              <input
                type="email"
                name="email"
                autoComplete="email"
                required
                className="mt-1.5 w-full rounded-xl border-2 border-navy/15 px-4 py-2.5 text-navy outline-none transition-colors focus:border-blue"
              />
            </label>

            <label className="mt-4 block text-sm font-semibold text-navy">
              {t(contactCopy.message)}
              <textarea
                name="message"
                rows={4}
                required
                placeholder={t(contactCopy.messagePlaceholder)}
                className="mt-1.5 w-full rounded-xl border-2 border-navy/15 px-4 py-2.5 text-navy outline-none transition-colors focus:border-blue"
              />
            </label>

            {status === "error" ? (
              <p role="alert" className="mt-3 text-sm font-semibold text-orange">
                {t(contactCopy.error)}
              </p>
            ) : null}

            <CartoonButton type="submit" variant="cta" size="lg" icon={Send} className="mt-5 w-full">
              {t(contactCopy.submit)}
            </CartoonButton>
            <p className="mt-3 text-center text-xs text-navy/60">{t(contactCopy.note)}</p>

            {status === "ok" ? (
              <p className="mt-3 text-center text-sm font-semibold text-green">{t(contactCopy.ok)}</p>
            ) : null}
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function ContactRow({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: typeof Mail;
  label: string;
  value: string;
  href?: string;
}) {
  const inner = (
    <>
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border-2 border-white/20 bg-white/10 text-cyan">
        <Icon className="h-5 w-5" aria-hidden="true" />
      </span>
      <span>
        <span className="block text-xs font-semibold uppercase tracking-wide text-white/50">
          {label}
        </span>
        <span className="block font-display text-lg font-semibold text-white">{value}</span>
      </span>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener" : undefined}
        className="flex items-center gap-4 rounded-2xl border-2 border-white/10 bg-white/5 p-4 transition-colors hover:bg-white/10"
      >
        {inner}
      </a>
    );
  }

  return <div className="flex items-center gap-4 rounded-2xl border-2 border-white/10 bg-white/5 p-4">{inner}</div>;
}
