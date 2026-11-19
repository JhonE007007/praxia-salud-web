import {
  Activity, Award, Baby, Cpu, HeartPulse, Syringe, Target, Users,
  type LucideProps,
} from "lucide-react";

type P = LucideProps;
const base = (p: P) => ({
  width: p.size ?? 24,
  height: p.size ?? 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: p.strokeWidth ?? 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  className: p.className,
});

export const Scalpel = (p: P) => (
  <svg {...base(p)}><path d="M19 3 9 13l2 2L21 5V3z" /><path d="M9 13 3 21h4l4-6" /></svg>
);

export const VrHeadset = (p: P) => (
  <svg {...base(p)}>
    <path d="M3 9a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-4l-3-2.5L9 17H5a2 2 0 0 1-2-2z" />
    <circle cx="8" cy="12" r="1.2" /><circle cx="16" cy="12" r="1.2" />
  </svg>
);

export const WhatsApp = ({ className, size = 20 }: { className?: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.2-.4.3-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.8 11.8 0 0 0 4.5 4c1.7.7 2.3.8 3.2.6.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.1-.3-.2-.5-.3z" />
  </svg>
);

export const Instagram = (p: P) => (
  <svg {...base(p)}><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r=".6" fill="currentColor" /></svg>
);
export const Facebook = (p: P) => (
  <svg {...base(p)}><path d="M15 3h-2.5A3.5 3.5 0 0 0 9 6.5V10H6v4h3v7h4v-7h3l1-4h-4V7a1 1 0 0 1 1-1h2z" /></svg>
);
export const TikTok = (p: P) => (
  <svg {...base(p)}><path d="M14 3v11.5a3.5 3.5 0 1 1-3.5-3.5" /><path d="M14 3c.5 2.5 2.3 4 5 4.3" /></svg>
);
export const LinkedIn = (p: P) => (
  <svg {...base(p)}><rect x="3" y="3" width="18" height="18" rx="3" /><path d="M8 10v7M8 7v.01M12 17v-4a2 2 0 0 1 4 0v4M12 10v7" /></svg>
);

const map = {
  target: Target, cpu: Cpu, users: Users, award: Award,
  activity: Activity, scalpel: Scalpel, heart: HeartPulse, baby: Baby,
  syringe: Syringe, vr: VrHeadset,
} as const;

export type IconName = keyof typeof map;

export const Icon = ({ name, ...p }: P & { name: IconName }) => {
  const C = map[name];
  return <C strokeWidth={1.6} {...p} />;
};
