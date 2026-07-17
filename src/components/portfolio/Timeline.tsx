import { motion } from "framer-motion";
import { Section } from "./Section";
import { GraduationCap, Briefcase, Award } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Item = {
  title: string;
  place: string;
  period: string;
  detail?: string;
  status?: string;
  icon: LucideIcon;
};

const education: Item[] = [
  {
    title: "National Diploma in Software Engineering",
    place: "WeThinkCode_ · Specialisation: Data Engineering",
    period: "Present",
    status: "Currently Studying",
    icon: GraduationCap,
  },
  {
    title: "Electrical Engineering NATED (N1 – N5)",
    place: "Letaba TVET College · Capricorn TVET College",
    period: "Completed",
    detail: "Foundational engineering, mathematics and technical discipline.",
    icon: GraduationCap,
  },
];

const experience: Item[] = [
  {
    title: "Independent Software & Data Projects",
    place: "Self-directed",
    period: "Ongoing",
    detail:
      "Currently building software engineering projects, attending technology events, completing certifications and expanding practical software development and data engineering skills.",
    icon: Briefcase,
  },
];

function Timeline({ items }: { items: Item[] }) {
  return (
    <div className="relative pl-6 md:pl-8">
      <div className="absolute left-2 md:left-3 top-2 bottom-2 w-px bg-gradient-to-b from-primary/60 via-primary/25 to-transparent" />
      <div className="space-y-6">
        {items.map((it, i) => (
          <motion.div
            key={it.title}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="relative glass-card rounded-2xl p-6"
          >
            <span className="absolute -left-[26px] md:-left-[30px] top-6 grid place-items-center w-7 h-7 rounded-full bg-background border border-primary/50 text-primary">
              <it.icon size={14} />
            </span>
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="text-lg font-semibold">{it.title}</h3>
              <span className="text-xs uppercase tracking-widest text-primary">{it.period}</span>
            </div>
            <p className="mt-1 text-sm text-muted-foreground">{it.place}</p>
            {it.status && (
              <span className="inline-block mt-3 rounded-full bg-primary/15 border border-primary/30 px-3 py-0.5 text-xs text-primary">
                {it.status}
              </span>
            )}
            {it.detail && <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{it.detail}</p>}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export function Education() {
  return (
    <Section id="education" eyebrow="Education" title="Where I've studied.">
      <Timeline items={education} />
    </Section>
  );
}

export function Experience() {
  return (
    <Section id="experience" eyebrow="Experience" title="What I've been working on.">
      <Timeline items={experience} />
    </Section>
  );
}

const certifications = [
  { title: "Microsoft AI Fluency", issuer: "Microsoft", year: "2025" },
  { title: "Microsoft AI Skills Fest", issuer: "Microsoft", year: "2025" },
  { title: "Certification Placeholder", issuer: "Issuer", year: "20XX" },
  { title: "Certification Placeholder", issuer: "Issuer", year: "20XX" },
];

export function Certifications() {
  return (
    <Section id="certifications" eyebrow="Certifications" title="Continuous learning.">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {certifications.map((c, i) => (
          <motion.div
            key={c.title + i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            whileHover={{ y: -5 }}
            className="glass-card rounded-2xl p-6 flex flex-col"
          >
            <span className="grid place-items-center w-12 h-12 rounded-xl bg-primary/15 text-primary border border-primary/30">
              <Award size={20} />
            </span>
            <h3 className="mt-4 font-semibold text-foreground">{c.title}</h3>
            <p className="mt-1 text-xs text-muted-foreground">{c.issuer}</p>
            <p className="mt-4 text-xs uppercase tracking-widest text-primary/80">{c.year}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
