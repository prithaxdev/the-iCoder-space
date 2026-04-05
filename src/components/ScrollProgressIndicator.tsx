import { useCallback, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { useScrollNavigation } from "@/hooks/useScrollNavigation";
import { useTheme } from "@/context/ThemeContext";

// ─── Public types ──────────────────────────────────────────────────────────────

export interface ScrollSection {
  id: string;
  label: string;
}

interface ScrollProgressIndicatorProps {
  /**
   * Define this array outside the parent component (or via useMemo) so the
   * reference is stable and IntersectionObservers aren't recreated on every render.
   */
  sections: ScrollSection[];
  className?: string;
}

// ─── Marker appearance per state ──────────────────────────────────────────────

type MarkerState = "active" | "completed" | "upcoming";

const MARKER: Record<
  MarkerState,
  { width: number; height: number; opacity: number }
> = {
  active: { width: 30, height: 2, opacity: 1 },
  completed: { width: 20, height: 2, opacity: 0.55 },
  upcoming: { width: 14, height: 1, opacity: 0.2 },
};

const HOVER_WIDTH: Record<MarkerState, number> = {
  active: 28,
  completed: 22,
  upcoming: 18,
};

// ─── Component ────────────────────────────────────────────────────────────────

const ScrollProgressIndicator = ({
  sections,
  className,
}: ScrollProgressIndicatorProps) => {
  const [activeId, setActiveId] = useState<string>(() => sections[0]?.id ?? "");
  const [visible, setVisible] = useState(false);
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const { scrollTo } = useScrollNavigation();
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const activeIndex = Math.max(
    0,
    sections.findIndex((s) => s.id === activeId),
  );

  // ── Show after 200 px of scroll (passive — no layout thrash) ──────────────
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 200);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // ── IntersectionObserver: fires only on section boundary crossings,
  //    never on every scroll tick — zero re-render cost while scrolling ────────
  useEffect(() => {
    // Mutable map lives entirely inside this effect closure
    const ratioMap = new Map<string, number>(sections.map((s) => [s.id, 0]));

    const pickMostVisible = () => {
      let maxRatio = -1;
      let maxId = sections[0]?.id ?? "";
      ratioMap.forEach((ratio, id) => {
        if (ratio > maxRatio) {
          maxRatio = ratio;
          maxId = id;
        }
      });
      setActiveId(maxId);
    };

    const observers = sections.flatMap(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return [];
      const obs = new IntersectionObserver(
        ([entry]) => {
          ratioMap.set(id, entry.intersectionRatio);
          pickMostVisible();
        },
        { threshold: [0, 0.1, 0.25, 0.5, 0.75, 1.0] },
      );
      obs.observe(el);
      return [obs];
    });

    return () => observers.forEach((obs) => obs.disconnect());
  }, [sections]);

  // Stable: scrollTo reference from the hook never changes
  const handleClick = useCallback(
    (id: string) => scrollTo(`#${id}`),
    [scrollTo],
  );

  return (
    <AnimatePresence>
      {visible && (
        <motion.nav
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          aria-label="Page sections"
          className={cn(
            "fixed top-1/2 right-4 z-40 -translate-y-1/2",
            "hidden flex-col items-end gap-5 lg:flex",
            className,
          )}
        >
          {sections.map(({ id, label }, i) => {
            const state: MarkerState =
              i < activeIndex
                ? "completed"
                : i === activeIndex
                  ? "active"
                  : "upcoming";

            const cfg = MARKER[state];
            const isActive = state === "active";
            const isHovered = id === hoveredId;

            return (
              <div
                key={id}
                className="relative flex items-center justify-end"
                onMouseEnter={() => setHoveredId(id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                {/* ── Tooltip ─────────────────────────────────────────────── */}
                <AnimatePresence>
                  {isHovered && (
                    <motion.span
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 10 }}
                      transition={{ duration: 0.15, ease: "easeOut" }}
                      className={cn(
                        "pointer-events-none select-none",
                        "absolute top-1/2 right-full mr-3 -translate-y-1/2",
                        "border-border rounded-md border whitespace-nowrap",
                        "bg-card px-2.5 py-1 shadow-sm",
                        "text-card-foreground text-xs font-medium tracking-wide",
                      )}
                    >
                      {label}
                    </motion.span>
                  )}
                </AnimatePresence>

                {/* ── Horizontal line marker ──────────────────────────────── */}
                <motion.button
                  onClick={() => handleClick(id)}
                  aria-label={`Navigate to ${label}`}
                  aria-current={isActive ? "true" : undefined}
                  // Animate width + height + opacity driven by section state
                  animate={{
                    width: cfg.width,
                    height: cfg.height,
                    opacity: cfg.opacity,
                  }}
                  // Hover briefly expands and brightens the line
                  whileHover={{
                    width: HOVER_WIDTH[state],
                    opacity: 1,
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  // origin-right → the line grows/shrinks toward the viewport edge
                  className={cn(
                    "block origin-right cursor-pointer rounded-full",
                    "ring-offset-background focus-visible:outline-none",
                    "focus-visible:ring-ring focus-visible:ring-2 focus-visible:ring-offset-2",
                    isActive ? "bg-foreground dark:bg-brand" : "bg-foreground",
                  )}
                  style={
                    isActive && isDark
                      ? { boxShadow: "0 0 7px hsl(var(--brand) / 0.5)" }
                      : undefined
                  }
                />
              </div>
            );
          })}
        </motion.nav>
      )}
    </AnimatePresence>
  );
};

export default ScrollProgressIndicator;
