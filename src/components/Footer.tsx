import { motion } from "framer-motion";
import { Github, Linkedin, ArrowUpRight, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SOCIAL_MEDIA_LINKS, NAVIGATION_LINKS } from "@/constants";
import { useScrollNavigation } from "@/hooks/useScrollNavigation";
import PKLogo from "@/components/PKLogo";

const iconMap: Record<string, React.ElementType> = {
  GitHub: Github,
  LinkedIn: Linkedin,
  Twitter: Twitter,
};

const Footer = () => {
  const { scrollTo } = useScrollNavigation();

  return (
    <footer className="mt-20 w-full border-t border-black/8 dark:border-white/8">
      {/* Main footer content */}
      <div className="grid grid-cols-1 gap-10 py-12 sm:grid-cols-3">
        {/* Brand column */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-4"
        >
          <PKLogo />
          <p className="max-w-[200px] text-sm leading-relaxed text-black/40 dark:text-white/40">
            Frontend developer crafting clean, engaging web experiences.
          </p>
          <div className="flex gap-2">
            {SOCIAL_MEDIA_LINKS.map((link) => {
              const Icon = iconMap[link.label];
              return (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.ariaLabel}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-black/12 text-black/50 transition-all duration-200 hover:border-black/30 hover:bg-black/8 hover:text-black dark:border-white/12 dark:text-white/50 dark:hover:border-white/30 dark:hover:bg-white/8 dark:hover:text-white"
                >
                  {Icon && <Icon className="h-4 w-4" />}
                </a>
              );
            })}
          </div>
        </motion.div>

        {/* Navigation column */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-col gap-3 sm:items-center"
        >
          <p className="mb-1 text-xs font-semibold tracking-widest text-black/30 uppercase dark:text-white/30">
            Navigate
          </p>
          {NAVIGATION_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                scrollTo(link.href);
              }}
              className="w-fit cursor-pointer text-sm text-black/50 transition-colors duration-200 hover:text-black dark:text-white/50 dark:hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </motion.div>

        {/* CTA column */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col gap-4 sm:items-end"
        >
          <p className="text-xs font-semibold tracking-widest text-black/30 uppercase dark:text-white/30">
            Get in touch
          </p>
          <p className="text-sm leading-relaxed text-black/40 sm:text-right dark:text-white/40">
            Open to freelance projects and full-time opportunities.
          </p>
          <Button
            onClick={() => scrollTo("#contact")}
            variant="outline"
            className="w-fit gap-1.5 rounded-full border-black/15 text-black/70 transition-all duration-200 hover:border-black/30 hover:bg-black/8 hover:text-black dark:border-white/15 dark:text-white/70 dark:hover:border-white/30 dark:hover:bg-white/10 dark:hover:text-white"
          >
            Say hello
            <ArrowUpRight size={14} />
          </Button>
        </motion.div>
      </div>

      {/* Bottom bar */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="flex flex-col items-center justify-between gap-3 border-t border-black/8 py-6 sm:flex-row dark:border-white/8"
      >
        <p className="text-xs text-black/60 dark:text-white/60">
          &copy; {new Date().getFullYear()} Pritha Karki. All rights reserved.
        </p>
        <p className="text-xs text-black/60 dark:text-white/60">
          Built with React &amp; Tailwind CSS
        </p>
      </motion.div>
    </footer>
  );
};

export default Footer;
