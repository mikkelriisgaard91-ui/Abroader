import { Briefcase, Building2, Globe, Users } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { dataFlows, privacyPolicyMeta } from "@/config/privacyPolicy";

const participantStyles: Record<
  string,
  { icon: LucideIcon; accent: string }
> = {
  Abroaders: { icon: Briefcase, accent: "bg-accent/15 text-accent" },
  Candidates: { icon: Users, accent: "bg-teal/20 text-teal-deep" },
  Clients: { icon: Building2, accent: "bg-amber/15 text-ink" },
  Platform: { icon: Globe, accent: "bg-ink text-base" },
  "Finance providers": { icon: Building2, accent: "bg-about-bg text-ink-muted" },
};

function FlowNode({ name, central = false }: { name: string; central?: boolean }) {
  const style = participantStyles[name] ?? participantStyles.Platform;
  const Icon = style.icon;

  return (
    <div
      className={`flex flex-col items-center text-center ${
        central ? "z-10" : ""
      }`}
    >
      <div
        className={`w-14 h-14 lg:w-16 lg:h-16 rounded-2xl flex items-center justify-center mb-2 ${
          central ? "glow-ring scale-110" : ""
        } ${style.accent}`}
      >
        <Icon className="w-6 h-6 lg:w-7 lg:h-7" strokeWidth={1.5} aria-hidden="true" />
      </div>
      <p
        className={`text-xs lg:text-sm font-bold leading-tight ${
          central ? "text-ink" : "text-ink-muted"
        }`}
      >
        {name}
      </p>
    </div>
  );
}

export default function PrivacyPlatformOverview() {
  const meta = privacyPolicyMeta;

  return (
    <figure className="privacy-flow-diagram glass-panel p-6 lg:p-8 my-8">
      <figcaption className="sr-only">
        Diagram showing how personal data flows between Abroaders, Candidates, Clients,
        and the Abroader Platform operated by {meta.controller}.
      </figcaption>

      <p className="text-sm font-semibold text-ink mb-2">How the Platform works</p>
      <p className="text-sm text-ink-muted mb-8 max-w-2xl">
        Three groups use {meta.platformName}. Personal data moves through the Platform
        to match people to roles, track commissions, and manage client relationships.
      </p>

      <div className="grid grid-cols-3 gap-4 lg:gap-8 items-center mb-8 max-w-2xl mx-auto">
        <FlowNode name="Abroaders" />
        <FlowNode name="Platform" central />
        <FlowNode name="Clients" />
      </div>

      <div className="flex justify-center mb-8">
        <div className="flex flex-col items-center">
          <div className="w-px h-6 bg-gradient-to-b from-accent/40 to-accent/10" aria-hidden="true" />
          <FlowNode name="Candidates" />
          <p className="text-[11px] text-ink-subtle mt-1 max-w-[10rem] text-center leading-snug">
            Apply via Abroader landing pages &amp; vacancies
          </p>
        </div>
      </div>

      <div className="border-t border-border/60 pt-6">
        <p className="text-xs font-bold uppercase tracking-wider text-ink-subtle mb-4">
          Key data flows
        </p>
        <ul className="grid sm:grid-cols-2 gap-3">
          {dataFlows.map((flow) => (
            <li
              key={`${flow.from}-${flow.to}-${flow.label}`}
              className="flex gap-3 items-start rounded-2xl bg-white/50 border border-border/40 px-4 py-3"
            >
              <span className="shrink-0 mt-0.5 text-accent font-bold text-xs" aria-hidden="true">
                →
              </span>
              <span className="text-sm text-ink-muted leading-snug">
                <span className="font-semibold text-ink">{flow.from}</span>
                {" → "}
                <span className="font-semibold text-ink">{flow.to}</span>
                <span className="block mt-0.5 text-xs">{flow.label}</span>
              </span>
            </li>
          ))}
        </ul>
      </div>

      <p className="mt-6 text-xs text-ink-subtle leading-relaxed">
        Site visitors who browse abroader.io without an account may also have cookies,
        IP address, and device data collected — see Sections 2 and 10 below.
      </p>
    </figure>
  );
}
