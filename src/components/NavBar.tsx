import { useState, useEffect, useCallback } from "react";
import { Menu, X, Github, Linkedin, ArrowUpRight, Twitter } from "lucide-react";
import { motion } from "framer-motion";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetClose,
} from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useScrollNavigation } from "@/hooks/useScrollNavigation";
import { useActiveSection } from "@/hooks/useActiveSection";
import { NAVIGATION_LINKS, SOCIAL_MEDIA_LINKS } from "@/constants";
import PKLogo from "@/components/PKLogo";
import ThemeToggle from "@/components/ThemeToggle";

const socialIconMap: Record<string, React.ElementType> = {
  GitHub: Github,
  LinkedIn: Linkedin,
  Twitter: Twitter,
};

const ConnectButton = ({ className }: { className?: string }) => {
  const { scrollTo } = useScrollNavigation();
  return (
    <Button
      onClick={() => scrollTo("#contact")}
      className={cn(
        "relative h-10 rounded-full p-1 ps-4 pe-12 text-sm font-medium",
        "group transition-all duration-500 hover:ps-12 hover:pe-4",
        "w-fit cursor-pointer overflow-hidden",
        className,
      )}
    >
      <span className="relative z-10 transition-all duration-500">
        Let&apos;s Connect
      </span>
      <span className="bg-background text-foreground absolute right-1 flex h-8 w-8 items-center justify-center rounded-full transition-all duration-500 group-hover:right-[calc(100%-36px)] group-hover:rotate-45">
        <ArrowUpRight size={14} />
      </span>
    </Button>
  );
};

const NavBar = () => {
  const [sticky, setSticky] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { scrollTo } = useScrollNavigation();

  const sectionIds = NAVIGATION_LINKS.map((l) => l.href.replace("#", ""));
  const activeSection = useActiveSection(sectionIds);

  const handleScroll = useCallback(() => setSticky(window.scrollY >= 50), []);
  const handleResize = useCallback(() => {
    if (window.innerWidth >= 1024) setIsOpen(false);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [handleScroll, handleResize]);

  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    scrollTo(href, () => setIsOpen(false));
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -32 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeInOut" }}
      className="fixed top-0 z-50 flex h-20 w-full items-center justify-center px-4"
    >
      <div
        className={cn(
          "flex w-full max-w-5xl items-center justify-between gap-4 transition-all duration-500",
          sticky
            ? "bg-background/70 dark:border-border/40 rounded-full border border-black/10 px-4 py-2.5 shadow-2xl shadow-black/10 backdrop-blur-xl dark:shadow-black/20"
            : "bg-transparent",
        )}
      >
        {/* Logo */}
        <a href="/" aria-label="Back to top" className="shrink-0">
          <PKLogo />
        </a>

        {/* Desktop nav pills */}
        <NavigationMenu className="hidden rounded-full border border-black/10 bg-black/5 p-1 lg:flex dark:border-white/10 dark:bg-white/8">
          <NavigationMenuList className="flex gap-0">
            {NAVIGATION_LINKS.map((item) => {
              const id = item.href.replace("#", "");
              const isActive = activeSection === id;
              return (
                <NavigationMenuItem key={item.href}>
                  <NavigationMenuLink
                    href={item.href}
                    onClick={(e) =>
                      handleLinkClick(
                        e as React.MouseEvent<HTMLAnchorElement>,
                        item.href,
                      )
                    }
                    className={cn(
                      "cursor-pointer rounded-full px-3 py-1.5 text-xs font-medium tracking-wide transition-all duration-200",
                      isActive
                        ? "bg-black/10 text-black dark:bg-white/15 dark:text-white"
                        : "text-black/55 hover:bg-black/8 hover:text-black dark:text-white/60 dark:hover:bg-white/10 dark:hover:text-white",
                    )}
                  >
                    {item.label}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              );
            })}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Desktop right side: theme toggle + CTA */}
        <div className="hidden items-center gap-2 lg:flex">
          <ThemeToggle />
          <ConnectButton />
        </div>

        {/* Mobile: theme toggle + menu trigger */}
        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <button
                aria-label="Open menu"
                className="rounded-full border border-black/20 p-2 transition-colors hover:bg-black/8 dark:border-white/20 dark:hover:bg-white/10"
              >
                <Menu
                  width={20}
                  height={20}
                  className="text-black dark:text-white"
                />
              </button>
            </SheetTrigger>

            <SheetContent
              side="right"
              showCloseButton={false}
              className="bg-background/95 w-full border-l border-black/8 p-0 backdrop-blur-xl sm:w-96 dark:border-white/8"
            >
              {/* Sheet header */}
              <div className="flex items-center justify-between border-b border-black/8 p-6 dark:border-white/8">
                <a href="/" onClick={() => setIsOpen(false)}>
                  <PKLogo />
                </a>
                <SheetClose asChild>
                  <button
                    aria-label="Close menu"
                    className="rounded-full border border-black/20 p-2.5 transition-colors hover:bg-black/8 dark:border-white/20 dark:hover:bg-white/10"
                  >
                    <X
                      width={16}
                      height={16}
                      className="text-black dark:text-white"
                    />
                  </button>
                </SheetClose>
              </div>

              {/* Sheet body */}
              <div className="flex h-[calc(100%-85px)] flex-col gap-10 overflow-y-auto px-6 py-8">
                <div className="flex flex-col gap-8">
                  <SheetTitle className="sr-only">Navigation menu</SheetTitle>

                  <NavigationMenu
                    orientation="vertical"
                    className="w-full flex-none items-start"
                  >
                    <NavigationMenuList className="flex w-full flex-col items-start gap-2">
                      {NAVIGATION_LINKS.map((item) => {
                        const id = item.href.replace("#", "");
                        const isActive = activeSection === id;
                        return (
                          <NavigationMenuItem
                            key={item.href}
                            className="w-full"
                          >
                            <NavigationMenuLink
                              href={item.href}
                              onClick={(e) =>
                                handleLinkClick(
                                  e as React.MouseEvent<HTMLAnchorElement>,
                                  item.href,
                                )
                              }
                              className={cn(
                                "group/nav flex cursor-pointer items-center py-1 text-2xl font-semibold tracking-tight transition-all duration-200",
                                isActive
                                  ? "text-foreground"
                                  : "hover:text-foreground text-black/40 hover:translate-x-2 dark:text-white/45",
                              )}
                            >
                              <div
                                className={cn(
                                  "bg-foreground h-0.5 transition-all duration-300",
                                  isActive
                                    ? "mr-3 w-4 opacity-100"
                                    : "w-0 opacity-0 group-hover/nav:mr-3 group-hover/nav:w-4 group-hover/nav:opacity-100",
                                )}
                              />
                              {item.label}
                            </NavigationMenuLink>
                          </NavigationMenuItem>
                        );
                      })}
                    </NavigationMenuList>
                  </NavigationMenu>

                  <ConnectButton />
                </div>

                {/* Social + copyright — pinned to bottom */}
                <div className="mt-auto flex flex-col gap-4">
                  <div className="flex gap-2">
                    {SOCIAL_MEDIA_LINKS.map((link) => {
                      const Icon = socialIconMap[link.label];
                      return (
                        <a
                          key={link.href}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={link.ariaLabel}
                          className="flex items-center justify-center rounded-full border border-black/20 p-3 transition-colors hover:bg-black/8 dark:border-white/20 dark:hover:bg-white/10"
                        >
                          {Icon && <Icon width={16} height={16} />}
                        </a>
                      );
                    })}
                  </div>
                  <p className="text-muted-foreground text-xs">
                    &copy; {new Date().getFullYear()} Pritha Karki. All rights
                    reserved.
                  </p>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
};

export default NavBar;
