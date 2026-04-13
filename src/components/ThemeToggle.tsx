import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useTheme } from "@/context/ThemeContext";
import { cn } from "@/lib/utils";
import { Moon, Sun } from "lucide-react";

const ThemeIcon = ({
  className,
  isDark,
}: {
  className?: string;
  isDark: boolean;
}) => {
  const Icon = isDark ? Sun : Moon;
  return <Icon size={18} strokeWidth={1.8} className={cn(className)} />;
};

const ThemeToggle = ({ className }: { className?: string }) => {
  const { theme, toggle } = useTheme();
  const [previewTheme, setPreviewTheme] = useState<"light" | "dark" | null>(
    null,
  );
  const [isSwitching, setIsSwitching] = useState(false);
  const switchTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (switchTimeoutRef.current !== null) {
        window.clearTimeout(switchTimeoutRef.current);
      }
    };
  }, []);

  const iconTheme = previewTheme ?? theme;

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (isSwitching) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const x = Math.round(rect.left + rect.width / 2);
    const y = Math.round(rect.top + rect.height / 2);
    const nextTheme = theme === "dark" ? "light" : "dark";

    document.documentElement.style.setProperty("--vt-x", `${x}px`);
    document.documentElement.style.setProperty("--vt-y", `${y}px`);

    setPreviewTheme(nextTheme);
    setIsSwitching(true);

    switchTimeoutRef.current = window.setTimeout(() => {
      toggle();
      setIsSwitching(false);
      setPreviewTheme(null);
      switchTimeoutRef.current = null;
    }, 220);
  };

  return (
    <button
      onClick={handleClick}
      disabled={isSwitching}
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
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={iconTheme}
          initial={{ opacity: 0, scale: 0.65, rotate: -80 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          exit={{ opacity: 0, scale: 0.65, rotate: 80 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="inline-flex"
        >
          <ThemeIcon isDark={iconTheme === "dark"} />
        </motion.span>
      </AnimatePresence>
    </button>
  );
};

export default ThemeToggle;
