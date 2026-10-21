import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { Download, Github, Linkedin, Mail, ArrowRight } from "lucide-react";
import portraitAsset from "@/assets/portrait.jpg.asset.json";
const portrait = portraitAsset.url;

const roles = ["Data Engineering", "Software Engineering", "AI Enthusiast", "Problem Solver"];

function useTypewriter(words: string[]) {
  const [text, setText] = useState("");
  const [i, setI] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[i % words.length];
    const speed = deleting ? 40 : 90;
    const t = setTimeout(() => {
      if (!deleting && text === current) {
        setTimeout(() => setDeleting(true), 1400);
        return;
      }
      if (deleting && text === "") {
        setDeleting(false);
        setI((v) => v + 1);
        return;
      }
      setText(deleting ? current.substring(0, text.length - 1) : current.substring(0, text.length + 1));
    }, speed);
    return () => clearTimeout(t);
  }, [text, deleting, i, words]);

  return text;
}

const floatIcons = ["</>", "{ }", "SQL", "AI", "λ", "Py", "JS", "◇", "▲", "⚙"];

export function Hero() {
  const typed = useTypewriter(roles);
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotateX = useTransform(my, [-1, 1], [6, -6]);
  const rotateY = useTransform(mx, [-1, 1], [-6, 6]);

  const onMove = (e: React.MouseEvent) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    mx.set(((e.clientX - r.left) / r.width - 0.5) * 2);
    my.set(((e.clientY - r.top) / r.height - 0.5) * 2);
  };

  return (
    <section
      id="home"
      ref={ref}
      onMouseMove={onMove}
      className="relative min-h-dvh pt-28 md:pt-32 pb-16 overflow-hidden"
    >
      {/* floating tech icons */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        {floatIcons.map((s, i) => (
          <motion.span
            key={i}
            className="absolute text-primary/20 font-mono text-2xl md:text-3xl select-none"
            style={{
              left: `${(i * 37) % 90 + 5}%`,
              top: `${(i * 53) % 80 + 8}%`,
            }}
            animate={{
              y: [0, -18, 0],
              opacity: [0.15, 0.35, 0.15],
              rotate: [0, i % 2 ? 8 : -8, 0],
            }}
            transition={{ duration: 6 + (i % 4), repeat: Infinity, ease: "easeInOut", delay: i * 0.3 }}
          >
            {s}
          </motion.span>
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-10 grid lg:grid-cols-[1.15fr_1fr] gap-12 items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-3 py-1 text-xs uppercase tracking-[0.2em] text-primary"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            Available for internships & graduate roles
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05]"
          >
            Dikeledi
            <br />
            <span className="gold-gradient-text">Kwenaite</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35, duration: 0.6 }}
            className="mt-5 space-y-1"
          >
            <p className="text-lg md:text-xl text-foreground/90">
              Software Engineering Graduate · Aspiring Data & Software Engineer
            </p>
            <p className="text-lg md:text-xl">
              <span className="text-muted-foreground">I specialise in </span>
              <span className="font-display font-semibold text-primary">
                {typed}
                <span className="ml-0.5 inline-block w-[2px] h-6 bg-primary align-middle animate-pulse" />
              </span>
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mt-6 max-w-xl text-muted-foreground leading-relaxed"
          >
            Building intelligent software solutions with AI, data, and modern web
            technologies — with a taste for clean code and refined design.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.6 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm font-semibold shadow-[0_10px_30px_-10px_rgba(212,175,55,0.6)] hover:shadow-[0_15px_40px_-10px_rgba(212,175,55,0.8)] transition-all hover:-translate-y-0.5"
            >
              View Projects
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="/cv.pdf"
              download
              className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/5 px-6 py-3 text-sm font-semibold text-foreground hover:bg-primary/15 transition-colors"
            >
              <Download size={16} /> Download CV
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-border/60 px-6 py-3 text-sm font-semibold text-foreground hover:border-primary/40 transition-colors"
            >
              Contact Me
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.85, duration: 0.6 }}
            className="mt-8 flex items-center gap-4"
          >
            {[
              { icon: Github, href: "https://github.com/Dikeledi-K", label: "GitHub" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/dikeledi-kwenaite-145327346", label: "LinkedIn" },
              { icon: Mail, href: "mailto:nonydikeledi@gmail.com", label: "Email" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noreferrer"
                className="grid place-items-center w-11 h-11 rounded-full border border-primary/25 text-muted-foreground hover:text-primary hover:border-primary/60 hover:-translate-y-0.5 transition-all"
              >
                <Icon size={18} />
              </a>
            ))}
          </motion.div>
        </div>

        {/* Portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          style={{ rotateX, rotateY, transformPerspective: 1000 }}
          className="relative mx-auto w-full max-w-md"
        >
          <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-tr from-primary/40 via-primary/10 to-transparent blur-2xl" aria-hidden />
          <div className="relative rounded-[2rem] overflow-hidden border border-primary/30 gold-border-glow">
            <img
              src={portrait}
              alt="Portrait of Dikeledi Kwenaite"
              width={912}
              height={1104}
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-background/80 via-transparent to-transparent" />
          </div>
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-6 -left-6 rounded-2xl px-4 py-3 bg-background/90 backdrop-blur-md border border-primary/40 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.8)]"
          >
            <p className="text-[10px] uppercase tracking-widest text-primary/80">Based in</p>
            <p className="text-sm font-semibold text-foreground">Johannesburg, ZA</p>
          </motion.div>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-4 -right-4 rounded-2xl px-4 py-3 bg-background/90 backdrop-blur-md border border-primary/40 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.8)]"
          >
            <p className="text-[10px] uppercase tracking-widest text-primary/80">Graduated from</p>
            <p className="text-sm font-semibold text-primary">WeThinkCode_</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
