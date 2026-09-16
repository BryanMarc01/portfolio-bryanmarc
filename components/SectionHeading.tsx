"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/cn";

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  className,
}: {
  eyebrow: string;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: "center" | "left";
  className?: string;
}) {
  return (
    <motion.header
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={cn(
        "mx-auto mb-12 max-w-2xl",
        align === "center" ? "text-center" : "text-left mx-0",
        className,
      )}
    >
      <span className="inline-flex items-center gap-2 rounded-full border-2 border-navy/15 bg-white px-4 py-1.5 text-sm font-bold uppercase tracking-wider text-blue shadow-cartoon-sm">
        {eyebrow}
      </span>
      <h2 className="mt-4 font-display text-3xl font-bold text-navy sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-4 text-lg text-navy/70">{subtitle}</p>
      ) : null}
    </motion.header>
  );
}
