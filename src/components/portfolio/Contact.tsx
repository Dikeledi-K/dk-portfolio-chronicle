import { useState } from "react";
import { motion } from "framer-motion";
import { Section } from "./Section";
import { Mail, MapPin, Github, Linkedin, Send, Check, Loader2 } from "lucide-react";

// Messages are delivered to this inbox by FormSubmit (https://formsubmit.co), a free
// form-to-email service. The very first message sends an activation email to this
// address; click "Activate Form" in it once, and every message after that arrives directly.
const CONTACT_EMAIL = "nonydikeledi@gmail.com";
const FORM_ENDPOINT = `https://formsubmit.co/ajax/${CONTACT_EMAIL}`;

type Status = "idle" | "sending" | "sent" | "error";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [honey, setHoney] = useState(""); // hidden spam trap; real visitors leave it empty

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === "sending") return;
    if (honey) {
      setStatus("sent");
      return;
    }
    setStatus("sending");
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          subject: form.subject || "(no subject)",
          message: form.message,
          _subject: `Portfolio message: ${form.subject || "New message"} (from ${form.name})`,
          _replyto: form.email,
          _template: "table",
          _captcha: "false",
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || data.success === false || data.success === "false") throw new Error(data.message || "Send failed");
      setStatus("sent");
      setForm({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setStatus("idle"), 6000);
    } catch {
      setStatus("error");
    }
  };

  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Let's build something remarkable."
      subtitle="Have an opportunity, a question, or just want to say hello? My inbox is open."
    >
      <div className="grid lg:grid-cols-[1fr_1.2fr] gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card rounded-3xl p-8 space-y-6"
        >
          <div>
            <p className="text-xs uppercase tracking-widest text-primary">Reach out</p>
            <h3 className="mt-2 text-2xl font-semibold">Dikeledi Kwenaite</h3>
            <p className="text-muted-foreground text-sm mt-1">
              Aspiring Software & Data Engineer
            </p>
          </div>

          <div className="space-y-4">
            {[
              { icon: Mail, label: "Email", value: CONTACT_EMAIL, href: `mailto:${CONTACT_EMAIL}` },
              { icon: MapPin, label: "Location", value: "Johannesburg, South Africa" },
              { icon: Github, label: "GitHub", value: "Dikeledi-K", href: "https://github.com/Dikeledi-K" },
              { icon: Linkedin, label: "LinkedIn", value: "dikeledi-kwenaite", href: "https://www.linkedin.com/in/dikeledi-kwenaite-145327346" },
            ].map((c) => (
              <a
                key={c.label}
                href={c.href}
                target={c.href?.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="flex items-center gap-4 rounded-xl border border-primary/15 bg-primary/5 px-4 py-3 hover:border-primary/50 hover:bg-primary/10 transition-colors group"
              >
                <span className="grid place-items-center w-10 h-10 rounded-lg bg-background border border-primary/30 text-primary">
                  <c.icon size={16} />
                </span>
                <div className="min-w-0">
                  <p className="text-[10px] uppercase tracking-widest text-muted-foreground">{c.label}</p>
                  <p className="text-sm font-medium text-foreground truncate group-hover:text-primary transition-colors">{c.value}</p>
                </div>
              </a>
            ))}
          </div>
        </motion.div>

        <motion.form
          onSubmit={submit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="glass-card rounded-3xl p-8 space-y-5"
        >
          <div className="grid sm:grid-cols-2 gap-5">
            <Field label="Name" name="name" value={form.name} onChange={(v) => setForm({ ...form, name: v })} required />
            <Field label="Email" name="email" type="email" value={form.email} onChange={(v) => setForm({ ...form, email: v })} required />
          </div>
          <Field label="Subject" name="subject" value={form.subject} onChange={(v) => setForm({ ...form, subject: v })} />
          <div>
            <label htmlFor="message" className="text-xs uppercase tracking-widest text-muted-foreground">
              Message
            </label>
            <textarea
              id="message"
              required
              rows={6}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="mt-2 w-full resize-none rounded-xl bg-background/60 border border-border/60 focus:border-primary/60 focus:ring-2 focus:ring-primary/20 outline-none px-4 py-3 text-sm placeholder:text-muted-foreground/60"
              placeholder="Tell me about the opportunity or idea..."
            />
          </div>
          <input
            type="text"
            name="_honey"
            value={honey}
            onChange={(e) => setHoney(e.target.value)}
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            className="hidden"
          />
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <button
              type="submit"
              disabled={status === "sending"}
              className="shrink-0 whitespace-nowrap inline-flex items-center justify-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm font-semibold shadow-[0_10px_30px_-10px_rgb(var(--c-accent-rgb)/0.6)] hover:shadow-[0_15px_40px_-10px_rgb(var(--c-accent-rgb)/0.9)] hover:-translate-y-0.5 transition-all disabled:opacity-70 disabled:hover:translate-y-0"
            >
              {status === "sending" ? (
                <>
                  <Loader2 size={16} className="animate-spin" /> Sending…
                </>
              ) : status === "sent" ? (
                <>
                  <Check size={16} /> Message sent
                </>
              ) : (
                <>
                  <Send size={16} /> Send Message
                </>
              )}
            </button>
            <p role="status" aria-live="polite" className="text-sm">
              {status === "sent" && (
                <span className="text-primary">Thank you! Your message is on its way. I'll get back to you soon.</span>
              )}
              {status === "error" && (
                <span className="text-muted-foreground">
                  Sorry, the message couldn't be sent. Please email me directly at{" "}
                  <a href={`mailto:${CONTACT_EMAIL}`} className="text-primary underline underline-offset-2">
                    {CONTACT_EMAIL}
                  </a>
                  .
                </span>
              )}
            </p>
          </div>
        </motion.form>
      </div>
    </Section>
  );
}

function Field({
  label,
  name,
  value,
  onChange,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="text-xs uppercase tracking-widest text-muted-foreground">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        maxLength={200}
        className="mt-2 w-full rounded-xl bg-background/60 border border-border/60 focus:border-primary/60 focus:ring-2 focus:ring-primary/20 outline-none px-4 py-3 text-sm placeholder:text-muted-foreground/60"
        placeholder={label}
      />
    </div>
  );
}
