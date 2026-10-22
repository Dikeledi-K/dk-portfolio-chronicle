import { motion } from "framer-motion";
import { Section } from "./Section";

const techSkills = [
  { name: "HTML", level: 90 },
  { name: "CSS", level: 85 },
  { name: "JavaScript", level: 80 },
  { name: "Python", level: 82 },
  { name: "Java", level: 70 },
  { name: "SQL", level: 78 },
  { name: "React", level: 82 },
  { name: "Tailwind CSS", level: 85 },
  { name: "Node.js", level: 72 },
  { name: "Git & GitHub", level: 85 },
  { name: "Docker", level: 60 },
  { name: "VS Code", level: 92 },
];

const softSkills = [
  "Problem Solving",
  "Communication",
  "Teamwork",
  "Leadership",
  "Adaptability",
  "Critical Thinking",
  "Time Management",
  "Fast Learner",
  "Attention to Detail",
  "Creativity",
];

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="Technical & human toolkit."
      subtitle="A blend of programming fluency, engineering craft and the human skills that make teams ship."
    >
      <div className="grid lg:grid-cols-2 gap-8">
        <div className="glass-card rounded-3xl p-8">
          <h3 className="text-lg font-semibold mb-6 text-primary">Programming & Tools</h3>
          <div className="space-y-5">
            {techSkills.map((s, i) => (
              <motion.div
                key={s.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
              >
                <div className="flex justify-between text-sm mb-1.5">
                  <span className="font-medium">{s.name}</span>
                  <span className="text-primary/80 font-mono text-xs">{s.level}%</span>
                </div>
                <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${s.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.1, delay: 0.15 + i * 0.03, ease: "easeOut" }}
                    className="h-full rounded-full bg-gradient-to-r from-[var(--c-accent-dark)] via-[var(--c-accent)] to-[var(--c-accent-light)]"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="glass-card rounded-3xl p-8">
          <h3 className="text-lg font-semibold mb-6 text-primary">Soft Skills</h3>
          <div className="flex flex-wrap gap-3">
            {softSkills.map((s, i) => (
              <motion.span
                key={s}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ y: -3 }}
                className="rounded-full border border-primary/25 bg-gradient-to-br from-primary/10 to-transparent px-4 py-2 text-sm font-medium text-foreground/90 hover:border-primary/60 hover:text-primary transition-colors"
              >
                {s}
              </motion.span>
            ))}
          </div>

          <div className="mt-10 grid grid-cols-3 gap-4">
            {[
              { n: "5+", l: "Years learning tech" },
              { n: "10+", l: "Projects built" },
              { n: "∞", l: "Curiosity" },
            ].map((k) => (
              <div key={k.l} className="rounded-2xl border border-primary/15 p-4 text-center">
                <p className="text-3xl font-bold gold-gradient-text font-display">{k.n}</p>
                <p className="text-xs text-muted-foreground mt-1">{k.l}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
