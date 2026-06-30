import { Briefcase, Building2, Globe, Users } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { dataInventory } from "@/config/privacyPolicy";

const subjects: {
  key: keyof typeof dataInventory;
  title: string;
  icon: LucideIcon;
  iconClass: string;
}[] = [
  {
    key: "abroaders",
    title: "Abroaders",
    icon: Briefcase,
    iconClass: "bg-accent/15 text-accent",
  },
  {
    key: "candidates",
    title: "Candidates",
    icon: Users,
    iconClass: "bg-teal/20 text-teal-deep",
  },
  {
    key: "clients",
    title: "Clients",
    icon: Building2,
    iconClass: "bg-amber/15 text-ink",
  },
  {
    key: "siteVisitors",
    title: "Site visitors",
    icon: Globe,
    iconClass: "bg-about-bg text-ink-muted",
  },
];

export default function PrivacyDataInventory() {
  return (
    <div className="grid sm:grid-cols-2 gap-4 lg:gap-5">
      {subjects.map(({ key, title, icon: Icon, iconClass }) => {
        const subject = dataInventory[key];
        return (
          <article
            key={key}
            className="glass-panel p-5 lg:p-6 flex flex-col h-full"
            aria-labelledby={`data-subject-${key}`}
          >
            <div className="flex items-start gap-4 mb-4">
              <div
                className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 ${iconClass}`}
              >
                <Icon className="w-5 h-5" strokeWidth={1.5} aria-hidden="true" />
              </div>
              <div>
                <h3 id={`data-subject-${key}`} className="font-bold text-ink">
                  {title}
                </h3>
                <p className="text-sm text-ink-muted leading-snug mt-1">{subject.role}</p>
              </div>
            </div>
            <ul className="flex flex-wrap gap-2 mt-auto" aria-label={`Data collected from ${title}`}>
              {subject.fields.map((field) => (
                <li
                  key={field}
                  className="text-xs font-medium text-ink-muted bg-white/70 border border-border/50 rounded-full px-3 py-1.5"
                >
                  {field}
                </li>
              ))}
            </ul>
          </article>
        );
      })}
    </div>
  );
}
