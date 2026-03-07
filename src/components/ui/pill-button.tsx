import * as React from "react";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface PillButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;

  asChild?: boolean;
}

const PillButton = React.forwardRef<HTMLButtonElement, PillButtonProps>(
  ({ label, className, ...props }, ref) => (
    <Button
      ref={ref}
      className={cn(
        "relative h-12 rounded-full p-1 ps-6 pe-14 text-sm font-medium",
        "group transition-all duration-500 hover:ps-14 hover:pe-6",
        "w-fit cursor-pointer overflow-hidden",
        className,
      )}
      {...props}
    >
      <span className="relative z-10 transition-all duration-500">{label}</span>
      <span className="bg-background text-foreground absolute right-1 flex h-10 w-10 items-center justify-center rounded-full transition-all duration-500 group-hover:right-[calc(100%-44px)] group-hover:rotate-45">
        <ArrowUpRight size={16} />
      </span>
    </Button>
  ),
);
PillButton.displayName = "PillButton";

/** Outline variant — transparent bg, border */
const PillButtonOutline = React.forwardRef<HTMLButtonElement, PillButtonProps>(
  ({ label, className, ...props }, ref) => (
    <Button
      ref={ref}
      variant="outline"
      className={cn(
        "relative h-12 rounded-full p-1 ps-6 pe-14 text-sm font-medium",
        "group transition-all duration-500 hover:ps-14 hover:pe-6",
        "w-fit cursor-pointer overflow-hidden border-black/20 text-black hover:bg-black/8 dark:border-white/20 dark:text-white dark:hover:bg-white/10",
        className,
      )}
      {...props}
    >
      <span className="relative z-10 transition-all duration-500">{label}</span>
      <span className="absolute right-1 flex h-10 w-10 items-center justify-center rounded-full bg-black/8 text-black transition-all duration-500 group-hover:right-[calc(100%-44px)] group-hover:rotate-45 dark:bg-white/10 dark:text-white">
        <ArrowUpRight size={16} />
      </span>
    </Button>
  ),
);
PillButtonOutline.displayName = "PillButtonOutline";

export { PillButton, PillButtonOutline };
