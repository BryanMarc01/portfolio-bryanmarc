"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ReactNode, useState } from "react";
import { cn } from "@/lib/cn";

interface HeroObjectProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  tooltip?: string;
  onActivate?: () => void;
  animate?: "float" | "float-slow" | "sway" | "bob" | "none";
  delay?: number;
  priority?: boolean;
  children?: ReactNode;
}

export function HeroObject({
  src,
  alt,
  width,
  height,
  className,
  tooltip,
  onActivate,
  animate = "float",
  delay = 0,
  priority = false,
  children,
}: HeroObjectProps) {
  const [showTip, setShowTip] = useState(false);
  const isInteractive = Boolean(onActivate);
  const animateClassMap = {
    float: "animate-float",
    "float-slow": "animate-float-slow",
    sway: "animate-sway",
    bob: "animate-bob",
    none: "",
  } as const;
  const animateClass = animateClassMap[animate];

  const content = (
    <motion.div
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7, delay, ease: "easeOut" }}
      className={cn("absolute", animateClass, className)}
      style={{ animationDelay: `${delay}s` }}
      onMouseEnter={() => setShowTip(true)}
      onMouseLeave={() => setShowTip(false)}
      onFocus={() => setShowTip(true)}
      onBlur={() => setShowTip(false)}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        className="h-auto w-full drop-shadow-[0_12px_18px_rgba(6,42,99,0.25)]"
      />
      {children}
      {tooltip && showTip ? (
        <span
          role="tooltip"
          className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border-2 border-navy bg-white px-3 py-1 text-xs font-bold text-navy shadow-cartoon-sm"
        >
          {tooltip}
        </span>
      ) : null}
    </motion.div>
  );

  if (!isInteractive) return content;

  return (
    <button
      type="button"
      onClick={onActivate}
      aria-label={tooltip ?? alt}
      className="contents cursor-pointer"
    >
      {content}
    </button>
  );
}
