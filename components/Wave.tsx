import { cn } from "@/lib/cn";

/** Curved section divider, colored to match the section that follows it. */
export function Wave({
  fill,
  flip = false,
  className,
}: {
  /** Tailwind text-color class controlling the SVG fill, e.g. "text-sky/20". */
  fill: string;
  flip?: boolean;
  className?: string;
}) {
  return (
    <div
      aria-hidden="true"
      className={cn("relative h-12 w-full overflow-hidden sm:h-16", fill, flip && "rotate-180", className)}
    >
      <svg viewBox="0 0 1440 100" preserveAspectRatio="none" className="h-full w-full">
        <path
          fill="currentColor"
          d="M0 55C220 15 420 0 660 18c240 18 380 62 580 56 80-2 150-14 200-32V100H0Z"
        />
      </svg>
    </div>
  );
}
