"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CartoonButton } from "./CartoonButton";
import type { Bilingual } from "@/lib/i18n";

export interface FeatureCardData {
  id: string;
  title: Bilingual;
  description: Bilingual;
  cta: Bilingual;
  href: string;
  image: string;
}

export function PortfolioFeatureCard({
  data,
  index,
  title,
  description,
  cta,
}: {
  data: FeatureCardData;
  index: number;
  title: string;
  description: string;
  cta: string;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
      whileHover={{ y: -6 }}
      className="group relative flex flex-col overflow-hidden rounded-3xl border-2 border-navy/10 bg-white shadow-panel transition-shadow duration-300 hover:shadow-[0_26px_50px_-16px_rgba(6,42,99,0.4)]"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-b from-sky/20 to-cyan/10">
        <Image
          src={data.image}
          alt=""
          fill
          sizes="(min-width: 1024px) 22vw, (min-width: 640px) 45vw, 90vw"
          className="object-contain object-center p-4 transition-transform duration-500 ease-out group-hover:scale-[1.06]"
        />
      </div>
      <div className="flex flex-1 flex-col gap-2 p-6">
        <h3 className="font-display text-xl font-bold text-navy">{title}</h3>
        <p className="flex-1 text-sm leading-relaxed text-navy/70">{description}</p>
        <CartoonButton as="a" href={data.href} variant="primary" size="sm" showArrow className="mt-3 w-fit">
          {cta}
        </CartoonButton>
      </div>
    </motion.article>
  );
}
