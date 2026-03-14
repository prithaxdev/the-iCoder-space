import { Search, Map, Paintbrush, Code2, Rocket, LucideIcon } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import {
  Timeline,
  TimelineBody,
  TimelineConnector,
  TimelineContent,
  TimelineHeader,
  TimelineIcon,
  TimelineItem,
  TimelineTime,
  TimelineTitle,
} from "@/components/ui/timeline";
import { PROCESS_STEPS } from "@/constants";

const ICON_MAP: Record<string, LucideIcon> = {
  Search,
  Map,
  Paintbrush,
  Code2,
  Rocket,
};

const Process = () => {
  return (
    <section id="process" className="w-full py-16">
      <SectionHeader title="How I Work" />

      <div className="w-full max-w-3xl mx-auto px-4">
        <Timeline variant="alternating">
          {PROCESS_STEPS.map((step) => {
            const Icon = ICON_MAP[step.iconName];
            return (
              <TimelineItem key={step.step}>
                <TimelineConnector>
                  <TimelineIcon className={step.color}>
                    <Icon className="h-5 w-5" />
                  </TimelineIcon>
                </TimelineConnector>
                <TimelineContent>
                  <TimelineHeader>
                    <TimelineTime>{step.step}</TimelineTime>
                    <TimelineTitle>{step.title}</TimelineTitle>
                  </TimelineHeader>
                  <TimelineBody>
                    <p className="mb-3">{step.description}</p>
                    <ul className="space-y-1">
                      {step.points.map((point) => (
                        <li key={point} className="flex items-start gap-2">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand/60" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </TimelineBody>
                </TimelineContent>
              </TimelineItem>
            );
          })}
        </Timeline>
      </div>
    </section>
  );
};

export default Process;
