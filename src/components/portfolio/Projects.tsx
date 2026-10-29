import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Section } from "./Section";
import { Github, ExternalLink, Sparkles, ChartColumn, Stethoscope, GraduationCap, HandCoins, School } from "lucide-react";
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
    title: "SchoolConnect",
    description:
      "AI help desk for South African public schools. It classifies parent messages in five languages, routes them to the right staff member with a promised response time, escalates anything overdue, forecasts busy weeks and produces weekly reports. Child-safety messages always go to a person, and learner data is protected under POPIA.",
    tech: ["Python", "FastAPI", "Streamlit", "PostgreSQL", "scikit-learn"],
    category: "AI",
    github: "https://github.com/Dikeledi-K/schoolconnect",
    demo: "https://schoolconnect-web-cwa0.onrender.com",
    icon: School,
    accent: "from-[rgb(var(--c-tint-3)/0.3)] to-transparent",
  },
  {
    title: "ClinicQ",
    description:
      "AI patient intake, triage and clinic-flow assistant for South African public clinics. It captures each patient's story, flags urgent cases early and tracks them from registration to pharmacy, while staff make every clinical decision.",
    tech: ["Python", "Streamlit", "Claude API", "SQLite"],
    category: "AI",
    github: "https://github.com/Dikeledi-K/AI_Solution",
    demo: "https://nztdbvtrm3ve2ixwknarwg.streamlit.app/",
    icon: Stethoscope,
    accent: "from-[rgb(var(--c-tint-1)/0.45)] to-transparent",
  },
  {
    title: "CreateAI",
    description:
      "An AI content and code generation workspace. Generate blog posts, emails, social posts, images, voice-overs and code from a prompt or uploaded documents, then refine with follow-ups and keep a history of results.",
    tech: ["React", "Vite", "Express", "OpenRouter"],
    category: "AI",
    github: "https://github.com/Dikeledi-K/content_generation",
    demo: "https://contentgeneration-mocha.vercel.app/",
    icon: Sparkles,
    accent: "from-[rgb(var(--c-tint-2)/0.25)] to-transparent",
  },
  {
    title: "StudyBuddy AI",
    description:
      "A friendly AI study assistant for explanations, summaries, study plans, quizzes, exam prep and coding help. Students can upload PDFs, Word documents or photos of their notes to study from their own material.",
    tech: ["Node.js", "Express", "Gemini API", "Tesseract OCR"],
    category: "AI",
    github: "https://github.com/Dikeledi-K/ai_chatbot",
    demo: "https://ai-chatbot-theta-mocha.vercel.app/",
    icon: GraduationCap,
    accent: "from-[rgb(var(--c-tint-3)/0.3)] to-transparent",
  },
  {
    title: "Quality & Returns Intelligence",
    description:
      "Turns customer feedback and returns data into product-quality insights: sentiment classification, recurring defect detection, product return rates and a ready-to-share Markdown report.",
    tech: ["Python", "Streamlit", "scikit-learn", "Plotly"],
    category: "Data",
    github: "https://github.com/Dikeledi-K/sentiment_analysis",
    demo: "https://sentimentanalysisgit-e5kmmnpan85xczqrsobmhf.streamlit.app/",
    icon: ChartColumn,
    accent: "from-[rgb(var(--c-tint-1)/0.45)] to-transparent",
  },
  {
    title: "iS'khaftin",
    description:
      "An Ubuntu community crowdfunding platform for South African communities. People start micro-campaigns for local needs, small donations are pooled together, and blockchain records keep every contribution traceable.",
    tech: ["Next.js", "Tailwind CSS", "Blockchain", "Farcaster Frames"],
    category: "Web",
    demo: "https://mini-app-six-bay.vercel.app/",
    icon: HandCoins,
    accent: "from-[rgb(var(--c-tint-2)/0.25)] to-transparent",
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
                ? "bg-primary text-primary-foreground shadow-[0_10px_30px_-10px_rgb(var(--c-accent-rgb)/0.6)]"
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
                <div className="absolute inset-0 opacity-30 [background:radial-gradient(circle_at_30%_30%,rgb(var(--c-accent-rgb)/0.5),transparent_60%)]" />
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
