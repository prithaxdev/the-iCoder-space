import { useState, useEffect } from "react";

/**
 * Returns the ID of the section currently in view based on scroll position.
 * @param sectionIds - Array of HTML element IDs (without #)
 * @param offset     - Pixels from top to consider "in view" (accounts for sticky header)
 */
export function useActiveSection(sectionIds: string[], offset = 120): string {
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + offset;

      // Walk in reverse so the last matching section wins (scroll-down friendly)
      for (const id of [...sectionIds].reverse()) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(id);
          return;
        }
      }
      setActiveSection("");
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, [sectionIds, offset]);

  return activeSection;
}
