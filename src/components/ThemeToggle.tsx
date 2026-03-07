import { useTheme } from "@/context/ThemeContext";
import { cn } from "@/lib/utils";

const ThemeIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={cn("size-4", className)}
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
    <path d="M12 3l0 18" />
    <path d="M12 9l4.65 -4.65" />
    <path d="M12 14.3l7.37 -7.37" />
    <path d="M12 19.6l8.85 -8.85" />
  </svg>
);

const ThemeToggle = ({ className }: { className?: string }) => {
  const { toggle } = useTheme();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = Math.round(rect.left + rect.width / 2);
    const y = Math.round(rect.top + rect.height / 2);
    document.documentElement.style.setProperty("--vt-x", `${x}px`);
    document.documentElement.style.setProperty("--vt-y", `${y}px`);
    toggle();
  };

  return (
    <button
      onClick={handleClick}
      aria-label="Toggle theme"
      className={cn(
        "flex h-9 w-9 items-center justify-center rounded-full",
        "border border-black/15 dark:border-white/20",
        "text-black/60 dark:text-white/60",
        "hover:text-black dark:hover:text-white",
        "hover:bg-black/8 dark:hover:bg-white/10",
        "cursor-pointer transition-all duration-200",
        className,
      )}
    >
      <ThemeIcon />
    </button>
  );
};

export default ThemeToggle;
