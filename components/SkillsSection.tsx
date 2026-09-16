"use client";

import { motion } from "framer-motion";
import {
  BrainCircuit,
  Boxes,
  Database,
  GraduationCap,
  Kanban,
  type LucideIcon,
  Mic,
  MonitorSmartphone,
  PhoneCall,
  ShieldCheck,
  Smartphone,
  Sparkles,
  TestTube2,
  Workflow,
} from "lucide-react";
import type { IconType } from "react-icons";
import {
  SiDocker,
  SiDotnet,
  SiElectron,
  SiExpo,
  SiFirebase,
  SiFlutter,
  SiGit,
  SiKotlin,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiSupabase,
  SiTailwindcss,
  SiTauri,
  SiTypescript,
} from "react-icons/si";
import { skillGroups, skillsCopy, type SkillCategoryIcon, type SkillTone } from "@/lib/content";
import { useLanguage } from "@/lib/i18n";
import { SectionHeading } from "./SectionHeading";
import { cn } from "@/lib/cn";

const toneClasses: Record<SkillTone, string> = {
  sky: "border-sky/40 bg-sky/10",
  navy: "border-navy/30 bg-navy/5",
  cyan: "border-cyan/40 bg-cyan/10",
  orange: "border-orange/40 bg-orange/10",
  green: "border-green/40 bg-green/10",
  blue: "border-blue/40 bg-blue/10",
};

const categoryIcon: Record<SkillCategoryIcon, LucideIcon> = {
  mobile: Smartphone,
  web: MonitorSmartphone,
  desktop: MonitorSmartphone,
  data: Database,
  ai: BrainCircuit,
  fundamentals: GraduationCap,
};

// Brand icons where one exists; a purpose-picked lucide icon everywhere else
// (concepts like "clean code" or "agile" have no logo to point to).
const techIcons: Record<string, IconType | LucideIcon> = {
  reactnative: SiReact,
  flutter: SiFlutter,
  kotlin: SiKotlin,
  expo: SiExpo,
  react: SiReact,
  nextjs: SiNextdotjs,
  typescript: SiTypescript,
  tailwind: SiTailwindcss,
  nodejs: SiNodedotjs,
  tauri: SiTauri,
  electron: SiElectron,
  dotnet: SiDotnet,
  postgresql: SiPostgresql,
  mongodb: SiMongodb,
  firebase: SiFirebase,
  supabase: SiSupabase,
  docker: SiDocker,
  git: SiGit,
  openai: BrainCircuit,
  voiceai: Mic,
  twilio: PhoneCall,
  agents: Workflow,
  oop: Boxes,
  cleancode: Sparkles,
  testing: TestTube2,
  agile: Kanban,
  security: ShieldCheck,
};

export function SkillsSection() {
  const { t } = useLanguage();

  return (
    <section id="skills" className="relative bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={t(skillsCopy.eyebrow)}
          title={t(skillsCopy.title)}
          subtitle={t(skillsCopy.subtitle)}
        />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => {
            const CategoryIcon = categoryIcon[group.icon];
            return (
              <motion.div
                key={group.title.es}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: i * 0.07 }}
                className={cn("rounded-3xl border-2 p-6 shadow-panel", toneClasses[group.tone])}
              >
                <div className="flex items-center gap-2.5">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border-2 border-navy bg-white text-navy shadow-cartoon-sm">
                    <CategoryIcon className="h-5 w-5" strokeWidth={2} />
                  </span>
                  <h3 className="font-display text-lg font-bold text-navy">{t(group.title)}</h3>
                </div>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => {
                    const Icon = techIcons[item.iconKey] ?? Sparkles;
                    return (
                      <li
                        key={item.iconKey}
                        className="inline-flex items-center gap-1.5 rounded-full border-2 border-navy/10 bg-white px-3 py-1.5 text-sm font-semibold text-navy shadow-cartoon-sm transition-transform hover:-translate-y-0.5"
                      >
                        <Icon className="h-4 w-4 shrink-0 text-blue" aria-hidden="true" />
                        {t(item.label)}
                      </li>
                    );
                  })}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
