import { motion } from "framer-motion";
import { Section } from "./Section";
import { GraduationCap, Sparkles, Cloud, Database } from "lucide-react";

const highlights = [
  { icon: GraduationCap, label: "WeThinkCode_ · Data Engineering" },
  { icon: Sparkles, label: "AI & Machine Learning" },
  { icon: Cloud, label: "Cloud Computing" },
  { icon: Database, label: "Data Engineering" },
];

export function About() {
  return (
    <Section id="about" eyebrow="About" title="Curious mind, engineer's heart.">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7 }}
        className="glass-card rounded-3xl p-8 md:p-12 grid lg:grid-cols-[1.5fr_1fr] gap-10"
      >
        <div className="space-y-5 text-muted-foreground leading-relaxed">
          <p>
            I'm <span className="text-foreground font-medium">Dikeledi Kwenaite</span>, an
            aspiring Software Engineer and Data Engineer with a strong passion for technology,
            problem-solving, and continuous learning.
          </p>
          <p>
            I began my academic journey by completing Electrical Engineering NATED courses
            from N1 to N5 at Letaba TVET College and Capricorn TVET College, where I developed
            a solid technical foundation.
          </p>
          <p>
            I completed a <span className="text-foreground">National Diploma in
            Software Engineering at WeThinkCode_</span>, where I specialised in Data Engineering.
            My interests span Software Development, Artificial Intelligence, Cloud Computing
            and Data Engineering.
          </p>
          <p>
            My career goal is to become a professional Data or Software Engineer and
            contribute to innovative technology solutions — while continuously growing my
            expertise.
          </p>
        </div>

        <div className="space-y-3">
          {highlights.map((h, i) => (
            <motion.div
              key={h.label}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="flex items-center gap-3 rounded-xl border border-primary/15 bg-primary/5 px-4 py-3"
            >
              <span className="grid place-items-center w-10 h-10 rounded-lg bg-primary/15 text-primary">
                <h.icon size={18} />
              </span>
              <span className="text-sm font-medium">{h.label}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </Section>
  );
}
