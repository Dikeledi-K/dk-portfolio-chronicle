import { motion } from "framer-motion";
import { Section } from "./Section";
import { GraduationCap, Briefcase, Award, ExternalLink } from "lucide-react";
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
    period: "Completed",
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
  { title: "Supervised Machine Learning: Regression and Classification", issuer: "DeepLearning.AI", year: "2026", url: "https://www.coursera.org/account/accomplishments/verify/SVBMB0B4XD47" },
  { title: "Unsupervised Learning, Recommenders, Reinforcement Learning", issuer: "DeepLearning.AI", year: "2026", url: "https://www.coursera.org/account/accomplishments/records/IIPBFM5CLT9T" },
  { title: "Artificial Intelligence on Microsoft Azure", issuer: "Microsoft", year: "2026", url: "https://www.coursera.org/account/accomplishments/records/Q6P6UQIWJATD" },
  { title: "Trustworthy AI: Managing Bias, Ethics, and Accountability", issuer: "Johns Hopkins University", year: "2026", url: "https://www.coursera.org/account/accomplishments/verify/EOECZC96UN6Q" },
  { title: "Python for Data Science, AI & Development", issuer: "IBM", year: "2026", url: "https://www.coursera.org/account/accomplishments/records/K743AKEDJRSL" },
];

export function Certifications() {
  return (
    <Section id="certifications" eyebrow="Certifications" title="Continuous learning.">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
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
            <div className="mt-auto pt-4 flex items-center justify-between gap-3">
              <p className="text-xs uppercase tracking-widest text-primary/80">{c.year}</p>
              <a
                href={c.url}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg border border-primary/25 px-3 py-1.5 text-xs font-medium hover:bg-primary/10 transition-colors"
              >
                <ExternalLink size={12} /> Show credential
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
