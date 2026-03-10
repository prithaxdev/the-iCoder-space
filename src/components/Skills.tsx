import { motion } from "framer-motion";
import type { ComponentType, SVGProps } from "react";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiMongodb,
  SiGit,
  SiConvex,
  SiTanstack,
} from "@icons-pack/react-simple-icons";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import SectionHeader from "@/components/SectionHeader";
import { SKILLS } from "@/constants";

type IconComponent = ComponentType<
  SVGProps<SVGSVGElement> & { size?: number | string }
>;

const TECH_ICONS: Record<string, IconComponent> = {
  react: SiReact as IconComponent,
  nextjs: SiNextdotjs as IconComponent,
  typescript: SiTypescript as IconComponent,
  tailwindcss: SiTailwindcss as IconComponent,
  nodejs: SiNodedotjs as IconComponent,
  mongodb: SiMongodb as IconComponent,
  git: SiGit as IconComponent,
  convex: SiConvex as IconComponent,
  tanstack: SiTanstack as IconComponent,
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const rowVariants = {
  hidden: { opacity: 0, x: -16 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.45 } },
};

const Skills = () => {
  return (
    <section className="w-full py-8" id="skills">
      <SectionHeader title="Skills" />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="overflow-hidden rounded-2xl border border-black/10 bg-black/3 dark:border-white/10 dark:bg-white/3"
      >
        {SKILLS.map((skill, index) => {
          const Icon = TECH_ICONS[skill.iconKey];
          return (
            <motion.div key={skill.name} variants={rowVariants}>
              <div className="group flex items-center justify-between px-5 py-4 transition-colors duration-200 hover:bg-black/5 sm:px-6 sm:py-5 dark:hover:bg-white/5">
                <div className="flex items-center gap-4">
                  {Icon ? (
                    <Icon
                      className={`h-7 w-7 shrink-0 ${skill.iconColor} opacity-90 transition-opacity group-hover:opacity-100`}
                    />
                  ) : (
                    <span
                      className={`flex h-7 w-7 shrink-0 items-center justify-center rounded text-xs font-bold ${skill.iconColor}`}
                    >
                      {skill.name.slice(0, 2).toUpperCase()}
                    </span>
                  )}
                  <h3 className="text-sm font-medium text-black/80 transition-colors group-hover:text-black sm:text-base lg:text-lg dark:text-white/80 dark:group-hover:text-white">
                    {skill.name}
                  </h3>
                </div>
                <Badge
                  variant="secondary"
                  className="shrink-0 rounded-full border border-black/8 bg-black/8 px-3 text-xs font-medium text-black/50 hover:bg-black/12 dark:border-white/8 dark:bg-white/8 dark:text-white/50 dark:hover:bg-white/12"
                >
                  {skill.experience}
                </Badge>
              </div>
              {index < SKILLS.length - 1 && (
                <Separator className="bg-black/5 dark:bg-white/5" />
              )}
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
};

export default Skills;
