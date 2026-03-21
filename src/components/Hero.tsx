import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { PillButton, PillButtonOutline } from "@/components/ui/pill-button";
import { useScrollNavigation } from "@/hooks/useScrollNavigation";
import { HERO } from "@/constants";
import iCoderImg from "@/assets/icoder.webp";
import {
  SiReact,
  SiTypescript,
  SiNodedotjs,
} from "@icons-pack/react-simple-icons";

const Hero = () => {
  const { scrollTo } = useScrollNavigation();

  // 3D tilt — mouse tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]), {
    stiffness: 200,
    damping: 30,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 10]), {
    stiffness: 200,
    damping: 30,
  });

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  function handleMouseLeave() {
    mouseX.set(0);
    mouseY.set(0);
  }

  return (
    <section className="grid min-h-[calc(100vh-80px)] grid-cols-1 items-center gap-12 py-12 lg:grid-cols-2">
      {/* ── Text ── */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="order-2 space-y-6 lg:order-1"
      >
        <div className="space-y-3">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl tracking-tight text-black/55 md:text-2xl dark:text-white/55"
          >
            {HERO.greet}
          </motion.p>

          <h1
            className="text-5xl leading-tight tracking-wide md:text-6xl lg:text-7xl xl:text-[6rem] xl:leading-[1.05]"
            style={{
              fontFamily: "var(--font-serif)",
              fontStyle: "italic",
              fontWeight: 700,
            }}
          >
            {HERO.name}
          </h1>
        </div>

        <p className="text-base leading-relaxed text-black/55 lg:text-lg dark:text-white/55">
          {HERO.description}
        </p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-wrap items-center gap-3 pt-2"
        >
          <PillButton
            label="View My Work"
            onClick={() => scrollTo("#projects")}
          />
          <PillButtonOutline
            label="Get in Touch"
            onClick={() => scrollTo("#contact")}
          />
        </motion.div>
      </motion.div>

      {/* ── Portrait ── */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="order-1 flex justify-center lg:order-2 lg:p-4"
      >
        {/* Perspective wrapper — mouse events live here */}
        <div
          className="relative"
          style={{ perspective: "900px" }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          {/* Dot grid background */}
          <div
            className="pointer-events-none absolute -inset-10 -z-10 rounded-3xl opacity-50 dark:opacity-40"
            style={{
              backgroundImage:
                "radial-gradient(circle, hsl(var(--foreground) / 0.18) 1px, transparent 1px)",
              backgroundSize: "22px 22px",
            }}
          />

          {/* Brand aura — blurred color glow behind image */}
          <div className="bg-brand/30 dark:bg-brand/20 pointer-events-none absolute inset-0 -z-10 m-auto h-3/4 w-3/4 rounded-full blur-3xl" />

          {/* 3D tilt container */}
          <motion.div
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            className="relative"
          >
            {/* Image */}
            <img
              src={iCoderImg}
              width={480}
              height={480}
              alt="Pritha Karki"
              loading="eager"
              fetchPriority="high"
              decoding="async"
              className="h-60 w-60 rounded-2xl object-cover shadow-2xl ring-1 shadow-black/15 ring-black/8 sm:h-72 sm:w-72 lg:h-100 lg:w-100 xl:h-115 xl:w-115 dark:shadow-black/50 dark:ring-white/8"
            />

            {/* Floating card: Available for work — bottom right */}
            <motion.div
              initial={{ opacity: 0, scale: 0.75 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.0, duration: 0.5, ease: "backOut" }}
              className="absolute -right-4 -bottom-5 flex items-center gap-2 rounded-full border border-black/8 bg-white/95 px-3 py-2 shadow-lg shadow-black/10 backdrop-blur-sm sm:-right-6 sm:-bottom-6 dark:border-white/10 dark:bg-zinc-900/95"
            >
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              <span className="text-xs font-medium text-zinc-700 dark:text-zinc-300">
                Available for work
              </span>
            </motion.div>

            {/* Floating card: Experience — top left (desktop only) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.75 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2, duration: 0.5, ease: "backOut" }}
              className="absolute -top-5 -left-8 rounded-xl border border-black/8 bg-white/95 px-3 py-2.5 shadow-lg shadow-black/10 backdrop-blur-sm dark:border-white/10 dark:bg-zinc-900/95"
            >
              <p className="text-[10px] leading-none text-zinc-400 dark:text-zinc-500">
                Experience
              </p>
              <p className="mt-0.5 text-sm font-semibold text-zinc-800 dark:text-zinc-100">
                2+ Years
              </p>
            </motion.div>

            {/* Floating card: Tech stack icons — right side (desktop only) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.75 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.4, duration: 0.5, ease: "backOut" }}
              className="absolute top-10 -right-8 flex flex-col items-center gap-2.5 rounded-xl border border-black/8 bg-white/95 p-2.5 shadow-lg shadow-black/10 backdrop-blur-sm dark:border-white/10 dark:bg-zinc-900/95"
            >
              <SiReact size={16} style={{ color: "#61DAFB" }} />
              <SiTypescript size={16} style={{ color: "#3178C6" }} />
              <SiNodedotjs size={16} style={{ color: "#339933" }} />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
