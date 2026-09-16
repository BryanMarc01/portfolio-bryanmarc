"use client";

import { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from "react";
import { motion } from "framer-motion";
import { ArrowRight, LucideIcon } from "lucide-react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "cta" | "ghost";
type Size = "sm" | "md" | "lg";

const base =
  "group relative inline-flex items-center justify-center gap-2 rounded-2xl font-display font-semibold tracking-wide border-2 transition-colors select-none";

const variantClasses: Record<Variant, string> = {
  primary:
    "border-navy bg-gradient-to-b from-sky to-blue text-white shadow-cartoon hover:brightness-110",
  cta: "border-navy bg-gradient-to-b from-yellow to-orange text-navy shadow-cartoon hover:brightness-105",
  ghost:
    "border-navy/70 bg-white/90 text-navy shadow-cartoon-sm hover:bg-white",
};

const sizeClasses: Record<Size, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

interface SharedProps {
  variant?: Variant;
  size?: Size;
  icon?: LucideIcon;
  showArrow?: boolean;
  children: ReactNode;
  className?: string;
}

const tap = { y: 3, boxShadow: "0 2px 0 0 rgba(6,42,99,0.9)" };
const hover = { y: -2 };

function InnerContent({
  icon: Icon,
  showArrow,
  children,
}: {
  icon?: LucideIcon;
  showArrow?: boolean;
  children: ReactNode;
}) {
  return (
    <>
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-2 top-1 h-1/3 rounded-full bg-white/40 blur-[2px]"
      />
      {Icon ? <Icon className="h-5 w-5 shrink-0" aria-hidden="true" /> : null}
      <span className="relative">{children}</span>
      {showArrow ? (
        <ArrowRight
          className="h-4 w-4 shrink-0 transition-transform duration-200 group-hover:translate-x-1"
          aria-hidden="true"
        />
      ) : null}
    </>
  );
}

type ConflictingHandlers =
  | "onDrag"
  | "onDragStart"
  | "onDragEnd"
  | "onAnimationStart"
  | "onAnimationEnd"
  | "onAnimationIteration";

type ButtonProps = SharedProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children" | ConflictingHandlers> & {
    as?: "button";
  };

type AnchorProps = SharedProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "children" | ConflictingHandlers> & {
    as: "a";
    href: string;
  };

export function CartoonButton(props: ButtonProps | AnchorProps) {
  const {
    variant = "primary",
    size = "md",
    icon,
    showArrow,
    children,
    className,
    ...rest
  } = props;

  const classes = cn(base, variantClasses[variant], sizeClasses[size], className);

  if (props.as === "a") {
    const { href, ...anchorRest } = rest as Omit<AnchorProps, keyof SharedProps | "as">;
    return (
      <motion.a
        href={href}
        whileHover={hover}
        whileTap={tap}
        transition={{ type: "spring", stiffness: 500, damping: 25 }}
        className={classes}
        {...anchorRest}
      >
        <InnerContent icon={icon} showArrow={showArrow}>
          {children}
        </InnerContent>
      </motion.a>
    );
  }

  return (
    <motion.button
      whileHover={hover}
      whileTap={tap}
      transition={{ type: "spring", stiffness: 500, damping: 25 }}
      className={classes}
      {...(rest as Omit<ButtonProps, keyof SharedProps | "as">)}
    >
      <InnerContent icon={icon} showArrow={showArrow}>
        {children}
      </InnerContent>
    </motion.button>
  );
}
