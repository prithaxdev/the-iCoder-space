import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import SectionHeader from "@/components/SectionHeader";
import { EXPERIENCES } from "@/constants";

const WorkExperience = () => {
  return (
    <section className="w-full py-8" id="work">
      <SectionHeader title="Work Experience" />

      <div className="space-y-5">
        {EXPERIENCES.map((experience, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
          >
            <Card className="group border-black/10 bg-black/3 backdrop-blur-sm transition-all duration-300 hover:bg-black/5 dark:border-white/10 dark:bg-white/3 dark:hover:bg-white/6">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="rounded-lg border border-black/10 bg-black/8 p-2 transition-colors group-hover:bg-black/12 dark:border-white/10 dark:bg-white/8 dark:group-hover:bg-white/12">
                      <Briefcase className="h-4 w-4 text-black/70 dark:text-white/70" />
                    </div>
                    <div>
                      <CardTitle className="text-lg font-semibold text-black/90 dark:text-white/90">
                        {experience.title}
                      </CardTitle>
                      <p className="mt-0.5 text-sm font-medium text-black/60 dark:text-white/60">
                        {experience.company}
                      </p>
                    </div>
                  </div>
                  <Badge
                    variant="outline"
                    className="shrink-0 rounded-full border-black/15 text-xs whitespace-nowrap text-black/50 dark:border-white/15 dark:text-white/50"
                  >
                    {experience.duration}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-relaxed text-black/50 lg:text-base dark:text-white/50">
                  {experience.description}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WorkExperience;
