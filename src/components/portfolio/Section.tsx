import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function Section({
  id,
  eyebrow,
  title,
  subtitle,
  children,
  className = "",
}: {
  id: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`relative py-24 md:py-32 ${className}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-14"
        >
          {eyebrow && (
            <p className="text-xs uppercase tracking-[0.3em] text-primary mb-3">{eyebrow}</p>
          )}
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="gold-gradient-text">{title}</span>
          </h2>
          {subtitle && (
            <p className="mt-4 text-muted-foreground leading-relaxed">{subtitle}</p>
          )}
        </motion.div>
        {children}
      </div>
    </section>
  );
}
