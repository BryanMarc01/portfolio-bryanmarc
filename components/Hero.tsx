"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Github, MailPlus } from "lucide-react";
import { CartoonButton } from "./CartoonButton";
import { HeroObject } from "./HeroObject";
import { DoodleStar, DoodleSparkle, DoodleArrowCurve } from "./Doodles";
import { heroSignpost, heroTagline, heroCopy, site, waHref } from "@/lib/content";
import { useLanguage } from "@/lib/i18n";

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function Hero() {
  const { t, lang } = useLanguage();

  return (
    <section
      id="top"
      className="relative isolate flex min-h-[92vh] flex-col overflow-hidden pt-6"
      aria-label="Presentación"
    >
      <div className="absolute inset-0 -z-10">
        <Image
          src="/assets/hero/hero-background.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/10 via-transparent to-cream" />
      </div>

      {/* drifting clouds */}
      <div className="pointer-events-none absolute inset-0 -z-[5] overflow-hidden" aria-hidden="true">
        <div className="absolute left-[-10%] top-[8%] h-16 w-40 animate-drift rounded-full bg-white/70 blur-md" />
        <div className="absolute left-[20%] top-[16%] h-12 w-32 animate-drift rounded-full bg-white/60 blur-md [animation-delay:3s]" />
        <div className="absolute right-[5%] top-[10%] h-14 w-36 animate-drift rounded-full bg-white/70 blur-md [animation-delay:1.5s]" />
      </div>

      <div className="relative mx-auto flex w-full max-w-7xl flex-1 flex-col items-center px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          className="mt-4 max-w-3xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border-2 border-white/70 bg-navy/40 px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-white shadow-cartoon-sm backdrop-blur-sm sm:text-sm">
            <span className="h-2 w-2 animate-pulse rounded-full bg-cyan" aria-hidden="true" />
            {t(heroTagline)}
          </span>

          <h1 className="text-outline mt-4 font-display text-4xl font-extrabold text-white drop-shadow-[0_4px_0_rgba(6,42,99,0.9)] sm:text-5xl md:text-6xl">
            Bryan Marc
          </h1>
          <p className="mt-1 font-display text-sm font-semibold text-white/85 drop-shadow-[0_1px_0_rgba(6,42,99,0.9)] sm:text-base">
            {t(heroCopy.credential)}
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <CartoonButton
              as="a"
              href={waHref(t(heroCopy.ideaMessage))}
              target="_blank"
              rel="noopener"
              variant="cta"
              size="lg"
              icon={MailPlus}
            >
              {t(heroCopy.idea)}
            </CartoonButton>
            <CartoonButton
              as="a"
              href="#proyectos"
              variant="ghost"
              size="lg"
              icon={Github}
            >
              {t(heroCopy.seeProjects)}
            </CartoonButton>
          </div>
        </motion.div>

        {/* Island scene */}
        <div className="relative mt-6 h-[420px] w-full max-w-5xl flex-1 sm:h-[480px] md:h-[560px]">
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="absolute left-[2%] top-[6%] w-[30%] max-w-[190px] animate-sway sm:left-[4%] sm:top-[2%]"
          >
            <Image
              src="/assets/hero/code-sign.png"
              alt="Letrero de madera con CODE, DESIGN, BUILD, EXPLORE"
              width={520}
              height={780}
              priority
              className="h-auto w-full drop-shadow-[0_12px_18px_rgba(6,42,99,0.25)]"
            />
            <div className="absolute inset-0 grid grid-rows-4">
              {heroSignpost.map((s) => (
                <button
                  key={s.label}
                  type="button"
                  onClick={() => scrollToId(s.targetId)}
                  aria-label={`${lang === "es" ? "Ir a la sección" : "Go to section"}: ${s.label}`}
                  className="group/sign relative w-[85%] rounded-r-full focus-visible:outline-offset-4"
                >
                  <span className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border-2 border-navy bg-white px-2 py-0.5 text-[10px] font-bold text-navy opacity-0 shadow-cartoon-sm transition-opacity group-hover/sign:opacity-100 group-focus-visible/sign:opacity-100">
                    {lang === "es" ? "Ir a" : "Go to"} {s.label}
                  </span>
                </button>
              ))}
            </div>
          </motion.div>

          <HeroObject
            src="/assets/hero/retro-computer.png"
            alt="Computadora retro sobre una roca tropical con el mensaje CREATE, EXPLORE, SOLVE, REPEAT"
            width={620}
            height={480}
            animate="float"
            delay={0.35}
            tooltip={lang === "es" ? "Ver mi GitHub" : "See my GitHub"}
            onActivate={() => window.open(site.github, "_blank", "noopener")}
            className="right-[0%] top-[10%] w-[42%] max-w-[280px] sm:right-[2%]"
          />

          <HeroObject
            src="/assets/hero/character-workspace.png"
            alt="Bryan Marc trabajando en su laptop, escritorio con planta y libros de BUILD, LEARN, CREATE"
            width={700}
            height={560}
            animate="float-slow"
            delay={0.15}
            priority
            className="left-1/2 top-[30%] w-[62%] max-w-[440px] -translate-x-1/2 sm:top-[26%]"
          />

          <HeroObject
            src="/assets/hero/dock.png"
            alt="Muelle de madera con el letrero A BRIGHTER WEB TOGETHER y una gaviota"
            width={620}
            height={420}
            animate="bob"
            delay={0.4}
            tooltip={lang === "es" ? "Escríbeme" : "Message me"}
            onActivate={() => scrollToId("contacto")}
            className="bottom-[-2%] left-[4%] w-[46%] max-w-[300px] sm:left-[6%]"
          />

          <DoodleStar className="absolute right-[10%] top-[4%] animate-float-slow" />
          <DoodleSparkle className="absolute left-[38%] top-[8%] animate-glow" />
          <DoodleArrowCurve className="absolute bottom-[18%] right-[6%] hidden animate-float-slow sm:block" />
        </div>
      </div>

      <div className="relative -mt-6 h-16 w-full sm:h-20" aria-hidden="true">
        <svg viewBox="0 0 1440 100" preserveAspectRatio="none" className="h-full w-full text-cream">
          <path
            fill="currentColor"
            d="M0 60C240 10 480 0 720 20c240 20 480 60 720 30V100H0Z"
          />
        </svg>
      </div>
    </section>
  );
}
