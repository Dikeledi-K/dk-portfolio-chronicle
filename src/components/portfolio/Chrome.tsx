import { useEffect, useState } from "react";
import { AnimatePresence, motion, useScroll } from "framer-motion";
import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  return (
    <motion.div
      style={{ scaleX: scrollYProgress }}
      className="fixed top-0 left-0 right-0 h-[2px] origin-left bg-gradient-to-r from-[#8A6D1E] via-[#D4AF37] to-[#F5D77A] z-[60]"
    />
  );
}

export function BackToTop() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.6 }}
          aria-label="Back to top"
          className="fixed bottom-6 right-6 z-50 grid place-items-center w-12 h-12 rounded-full bg-primary text-primary-foreground shadow-[0_10px_30px_-10px_rgba(212,175,55,0.8)] hover:-translate-y-1 transition-transform"
        >
          <ArrowUp size={18} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-primary/15 bg-background/70">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <p className="text-sm">
            © 2026 <span className="text-primary font-medium">Dikeledi Kwenaite</span>
          </p>
          <p className="text-xs text-muted-foreground mt-1">
            Built with React, Tailwind CSS and TypeScript.
          </p>
        </div>
        <div className="flex items-center gap-3">
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
              className="grid place-items-center w-10 h-10 rounded-full border border-primary/25 text-muted-foreground hover:text-primary hover:border-primary/60 transition-colors"
            >
              <Icon size={16} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
