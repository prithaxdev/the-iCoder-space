import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeader from "@/components/SectionHeader";
import { PROJECTS, type Project } from "@/constants";

const ProjectLinks = ({
  project,
  size = "default",
}: {
  project: Project;
  size?: "sm" | "default";
}) => {
  const btnBase =
    size === "sm"
      ? "w-full rounded-lg text-xs font-medium"
      : "rounded-full font-semibold";

  return (
    <>
      {project.siteUrl && (
        <Button
          asChild
          size={size}
          className={
            size === "sm"
              ? btnBase
              : `${btnBase} bg-white text-black hover:bg-white/90`
          }
          variant={size === "sm" ? "outline" : "default"}
        >
          <a href={project.siteUrl} target="_blank" rel="noopener noreferrer">
            <ExternalLink className="h-3.5 w-3.5" />
            View Site
          </a>
        </Button>
      )}
      {project.githubLink && (
        <Button
          asChild
          size={size}
          variant="outline"
          className={
            size === "sm"
              ? `${btnBase} border-black/15 text-black/80 hover:bg-black/8 hover:text-black dark:border-white/15 dark:text-white/80 dark:hover:bg-white/10 dark:hover:text-white`
              : "rounded-full border-white/20 bg-white/15 text-white hover:bg-white/25"
          }
        >
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="h-3.5 w-3.5" />
            View on GitHub
          </a>
        </Button>
      )}
    </>
  );
};

const Projects = () => {
  return (
    <section className="w-full pt-20" id="projects">
      <SectionHeader title="Projects" />

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((project, i) => (
          <motion.article
            key={project.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group overflow-hidden rounded-2xl border border-black/10 bg-black/3 shadow-lg dark:border-white/10 dark:bg-white/3"
          >
            {/* ── Image ── */}
            <div className="relative aspect-video overflow-hidden">
              <motion.img
                whileHover={{ scale: 1.06 }}
                transition={{ duration: 0.4 }}
                src={project.image}
                alt={project.name}
                className="h-full w-full object-cover"
              />

              {/* Desktop hover overlay */}
              <div className="absolute inset-0 hidden flex-col items-center justify-center bg-black/70 p-4 opacity-0 backdrop-blur-md transition-opacity duration-300 group-hover:opacity-100 lg:flex">
                <h3 className="mb-2 text-center text-base leading-tight font-semibold text-white">
                  {project.name}
                </h3>
                <p className="mb-5 line-clamp-4 text-center text-xs leading-relaxed text-white/75">
                  {project.description}
                </p>
                <div className="flex flex-wrap justify-center gap-2">
                  <ProjectLinks project={project} size="default" />
                </div>
              </div>
            </div>

            {/* ── Mobile info card ── */}
            <div className="space-y-3 p-4 lg:hidden">
              <h3 className="text-sm leading-tight font-semibold text-black/90 dark:text-white/90">
                {project.name}
              </h3>
              <p className="line-clamp-3 text-xs leading-relaxed text-black/55 dark:text-white/55">
                {project.description}
              </p>
              <div className="flex flex-col gap-2">
                <ProjectLinks project={project} size="sm" />
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
