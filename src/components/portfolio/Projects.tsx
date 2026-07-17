import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Section } from "./Section";
import { Github, ExternalLink, Bot, LayoutDashboard, User } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Project = {
  title: string;
  description: string;
  tech: string[];
  category: "AI" | "Web" | "Data";
  github?: string;
  demo?: string;
  icon: LucideIcon;
  accent: string;
};

const projects: Project[] = [
  {
    title: "AI Workplace Assistant",
    description:
      "An AI-powered productivity app that automates office tasks — intelligent task management, meeting summarisation, email generation, document assistance and productivity dashboards.",
    tech: ["React", "Tailwind CSS", "TypeScript", "OpenAI API"],
    category: "AI",
    github: "#",
    demo: "#",
    icon: Bot,
    accent: "from-amber-400/30 to-transparent",
  },
  {
    title: "Professional Portfolio Website",
    description:
      "A responsive developer portfolio showcasing my education, technical skills, certifications, projects and career journey.",
    tech: ["React", "Tailwind CSS", "TypeScript", "Framer Motion"],
    category: "Web",
    github: "#",
    demo: "#",
    icon: User,
    accent: "from-yellow-500/30 to-transparent",
  },
  {
    title: "Data Engineering Dashboard",
    description:
      "A modern data dashboard that visualises datasets through interactive charts and reports while demonstrating data engineering concepts.",
    tech: ["Python", "SQL", "React", "Charts"],
    category: "Data",
    github: "#",
    demo: "#",
    icon: LayoutDashboard,
    accent: "from-orange-400/30 to-transparent",
  },
];

const filters = ["All", "AI", "Web", "Data"] as const;

export function Projects() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const visible = projects.filter((p) => filter === "All" || p.category === filter);

  return (
    <Section
      id="projects"
      eyebrow="Selected work"
      title="Projects with real intent."
      subtitle="A few things I've built while learning — each one solved a real problem and taught me something new."
    >
      <div className="flex flex-wrap gap-2 mb-10">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
              filter === f
                ? "bg-primary text-primary-foreground shadow-[0_10px_30px_-10px_rgba(212,175,55,0.6)]"
                : "border border-primary/25 text-muted-foreground hover:text-primary hover:border-primary/50"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="popLayout">
          {visible.map((p, i) => (
            <motion.article
              key={p.title}
              layout
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              whileHover={{ y: -6 }}
              className="group relative glass-card rounded-3xl overflow-hidden flex flex-col"
            >
              <div className={`relative h-44 bg-gradient-to-br ${p.accent} border-b border-primary/10 overflow-hidden`}>
                <div className="absolute inset-0 opacity-30 [background:radial-gradient(circle_at_30%_30%,rgba(212,175,55,0.5),transparent_60%)]" />
                <div className="absolute inset-0 grid place-items-center">
                  <div className="grid place-items-center w-20 h-20 rounded-2xl bg-background/40 backdrop-blur-md border border-primary/30 text-primary group-hover:scale-110 transition-transform duration-500">
                    <p.icon size={32} />
                  </div>
                </div>
                <span className="absolute top-3 left-3 rounded-full bg-background/70 backdrop-blur px-3 py-1 text-[10px] uppercase tracking-widest text-primary border border-primary/30">
                  {p.category}
                </span>
              </div>

              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed flex-1">
                  {p.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mt-4">
                  {p.tech.map((t) => (
                    <span key={t} className="rounded-md bg-primary/10 border border-primary/20 px-2 py-0.5 text-[11px] text-primary/90">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex gap-2 mt-5">
                  {p.github && (
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-lg border border-primary/25 px-3 py-1.5 text-xs font-medium hover:bg-primary/10 transition-colors"
                    >
                      <Github size={14} /> Code
                    </a>
                  )}
                  {p.demo && (
                    <a
                      href={p.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-lg bg-primary text-primary-foreground px-3 py-1.5 text-xs font-semibold hover:bg-primary/90 transition-colors"
                    >
                      <ExternalLink size={14} /> Live
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </div>
    </Section>
  );
}
