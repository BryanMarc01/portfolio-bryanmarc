"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useCallback, useEffect, useState } from "react";
import {
  Building2,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Code2,
  ExternalLink,
  Globe,
  Smartphone,
  Sparkles,
} from "lucide-react";
import { moreProjects, projects, projectsCopy, type ProjectCategory } from "@/lib/content";
import { useLanguage } from "@/lib/i18n";
import { SectionHeading } from "./SectionHeading";

const categoryIcon: Record<ProjectCategory, typeof Building2> = {
  realestate: Building2,
  software: Code2,
  app: Smartphone,
  generic: Globe,
};

const categoryTone: Record<ProjectCategory, string> = {
  realestate: "from-navy to-blue",
  software: "from-blue to-sky",
  app: "from-sky to-cyan",
  generic: "from-blue to-navy",
};

export function ProjectsSection() {
  const { t, lang } = useLanguage();

  const [selected, setSelected] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const onChange = () => setReducedMotion(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start" },
    reducedMotion ? [] : [Autoplay({ delay: 4500, stopOnInteraction: false, stopOnMouseEnter: true })],
  );

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((i: number) => emblaApi?.scrollTo(i), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelected(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  return (
    <section id="proyectos" className="relative bg-sky/10 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow={t(projectsCopy.eyebrow)} title={t(projectsCopy.title)} />

        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="-ml-6 flex py-3 sm:-ml-8">
              {projects.map((p) => {
                const Icon = categoryIcon[p.category];
                return (
                  <a
                    key={p.name}
                    href={p.href}
                    target="_blank"
                    rel="noopener"
                    className="group relative min-w-0 shrink-0 grow-0 basis-[85%] pl-6 sm:basis-1/2 sm:pl-8 lg:basis-1/3"
                  >
                    {/* rotating shine border, revealed on hover */}
                    <div className="relative h-full rounded-3xl p-[2px] transition-transform duration-300 group-hover:-translate-y-1.5">
                      <span
                        aria-hidden="true"
                        className="absolute inset-0 rounded-3xl opacity-0 [background:conic-gradient(from_0deg,transparent_0%,#35D7F3_10%,#0A73C9_22%,transparent_38%,transparent_100%)] transition-opacity duration-500 group-hover:opacity-100 group-hover:animate-[spin_2.4s_linear_infinite]"
                      />
                      <div className="relative flex h-full flex-col overflow-hidden rounded-[1.4rem] border-2 border-navy/15 bg-white shadow-[0_16px_32px_-12px_rgba(6,42,99,0.25)] transition-shadow duration-300 group-hover:shadow-[0_28px_48px_-14px_rgba(6,42,99,0.4)]">
                        <div className="relative aspect-video overflow-hidden">
                          {p.image ? (
                            <Image
                              src={p.image}
                              alt={p.name}
                              fill
                              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 85vw"
                              className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                            />
                          ) : p.logo ? (
                            <div
                              className={`flex h-full w-full items-center justify-center bg-gradient-to-br ${categoryTone[p.category]} p-10`}
                            >
                              <Image
                                src={p.logo}
                                alt={p.name}
                                width={150}
                                height={150}
                                className="h-full w-full object-contain drop-shadow-[0_8px_16px_rgba(0,0,0,0.25)] transition-transform duration-500 group-hover:scale-105"
                              />
                            </div>
                          ) : (
                            <div
                              className={`flex h-full w-full items-center justify-center bg-gradient-to-br ${categoryTone[p.category]}`}
                            >
                              <Icon className="h-16 w-16 text-white/85" strokeWidth={1.5} />
                            </div>
                          )}
                          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-navy/85 via-navy/10 to-transparent" />
                          <span className="absolute bottom-3 left-3 rounded-full bg-white/95 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-navy shadow-cartoon-sm">
                            {t(p.kind)}
                          </span>
                          {p.featured ? (
                            <span className="absolute right-3 top-3 inline-flex items-center gap-1 rounded-full border-2 border-navy bg-yellow px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-navy shadow-cartoon-sm">
                              <Sparkles className="h-3 w-3" />
                              {lang === "es" ? "Destacado" : "Featured"}
                            </span>
                          ) : null}
                        </div>
                        <div className="flex flex-1 flex-col gap-1.5 p-5">
                          <h3 className="font-display text-lg font-bold text-navy">{p.name}</h3>
                          <p className="flex-1 text-sm leading-relaxed text-navy/70">{t(p.description)}</p>
                          <span className="mt-2 inline-flex items-center gap-1 font-display text-sm font-bold text-blue transition-transform group-hover:translate-x-0.5">
                            {t(projectsCopy.visitSite)}
                            <ExternalLink className="h-3.5 w-3.5" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>

          <div className="mt-6 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={scrollPrev}
              aria-label={lang === "es" ? "Proyecto anterior" : "Previous project"}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border-2 border-navy bg-white text-navy shadow-cartoon-sm transition-transform hover:-translate-y-0.5"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <div className="flex flex-wrap items-center justify-center gap-2">
              {projects.map((p, i) => (
                <button
                  key={p.name}
                  type="button"
                  onClick={() => scrollTo(i)}
                  aria-label={lang === "es" ? `Ir al proyecto ${i + 1}: ${p.name}` : `Go to project ${i + 1}: ${p.name}`}
                  className={`h-2.5 rounded-full transition-all ${
                    selected === i ? "w-6 bg-blue" : "w-2.5 bg-navy/20"
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={scrollNext}
              aria-label={lang === "es" ? "Siguiente proyecto" : "Next project"}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border-2 border-navy bg-white text-navy shadow-cartoon-sm transition-transform hover:-translate-y-0.5"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <details className="group mt-10 rounded-3xl border-2 border-navy/10 bg-white p-5 shadow-cartoon-sm">
          <summary className="flex cursor-pointer list-none items-center justify-between font-display text-base font-bold text-navy">
            {t(projectsCopy.seeMore)}
            <ChevronDown className="h-5 w-5 transition-transform group-open:rotate-180" aria-hidden="true" />
          </summary>
          <ul className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {moreProjects.map((mp) =>
              mp.href ? (
                <li key={mp.name}>
                  <a
                    href={mp.href}
                    target="_blank"
                    rel="noopener"
                    className="flex items-center justify-between rounded-xl px-3 py-2 text-sm text-navy/80 hover:bg-cream"
                  >
                    <span>
                      <strong className="font-semibold text-navy">{mp.name}</strong>{" "}
                      <span className="text-navy/60">· {t(mp.kind)}</span>
                    </span>
                    <ExternalLink className="h-3.5 w-3.5 shrink-0" />
                  </a>
                </li>
              ) : (
                <li key={mp.name} className="rounded-xl px-3 py-2 text-sm text-navy/60">
                  <strong className="font-semibold text-navy/80">{mp.name}</strong> · {t(mp.kind)}
                </li>
              ),
            )}
          </ul>
        </details>
      </div>
    </section>
  );
}
