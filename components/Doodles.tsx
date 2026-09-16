import { cn } from "@/lib/cn";

/** Hand-drawn style decorative doodles, built as inline SVGs (no external art). */

export function DoodleStar({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      className={cn("h-8 w-8 text-yellow", className)}
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M20 3c1.5 6 3 9.5 7 11.5-4 2-5.5 5.5-7 11.5-1.5-6-3-9.5-7-11.5 4-2 5.5-5.5 7-11.5Z"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function DoodleSwirl({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 60 40"
      className={cn("h-8 w-16 text-white/70", className)}
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M3 30C10 8 30 4 40 14c7 7 2 18-8 16-7-1.5-8-9-2-12"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function DoodleArrowCurve({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 80 50"
      className={cn("h-10 w-20 text-navy/40", className)}
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M5 8c30-4 55 6 60 28"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      <path
        d="M55 27l11 9 2-14"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function DoodleSparkle({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={cn("h-4 w-4 text-cyan", className)}
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 0c.9 4.8 2.3 8 6 9-3.7 1-5.1 4.2-6 9-.9-4.8-2.3-8-6-9 3.7-1 5.1-4.2 6-9Z" />
    </svg>
  );
}

export function DoodleWave({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 24"
      className={cn("h-6 w-28 text-sky/50", className)}
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M2 14c8-10 16-10 24 0s16 10 24 0 16-10 24 0 16 10 24 0 16-10 24 0"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
    </svg>
  );
}
