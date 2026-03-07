export function useScrollNavigation(offset = -85) {
  const scrollTo = (href: string, onComplete?: () => void) => {
    const target = document.querySelector(href);
    if (target) {
      const position =
        target.getBoundingClientRect().top + window.scrollY + offset;
      window.scrollTo({ top: position, behavior: "smooth" });
    }
    onComplete?.();
  };

  return { scrollTo };
}
