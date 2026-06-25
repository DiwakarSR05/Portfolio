import { useState } from "react";
import { motion } from "framer-motion";
import { EASE_OUT_EXPO } from "@/lib/motion";

export function Contact() {
  const [state, setState] = useState<"idle" | "loading" | "sent">("idle");
  const [copied, setCopied] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "Job Opportunity",
    message: "",
  });

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setState("loading");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          // NOTE: You'll need to replace this with your actual Web3Forms Access Key
          // Get one for free at https://web3forms.com/
          access_key: "YOUR_ACCESS_KEY",
          name: form.name,
          email: form.email,
          subject: `${form.subject} - from Portfolio`,
          message: form.message,
          from_name: "Portfolio Contact Form",
        }),
      });

      const result = await response.json();
      if (result.success) {
        setState("sent");
        setForm({ name: "", email: "", subject: "Job Opportunity", message: "" });
      } else {
        setState("idle");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setState("idle");
    }
  };

  const copyEmail = () => {
    navigator.clipboard.writeText("deewakarsinghraz@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  return (
    <section id="contact" className="relative bg-(--bg-2) py-32 px-6 lg:px-10">
      <div className="max-w-[1300px] mx-auto">
        <div className="mb-16 max-w-4xl">
          <div className="eyebrow mb-4">// let&apos;s connect</div>
          <h2
            className="font-display font-bold leading-[0.95] text-(--ink-light)"
            style={{ fontSize: "clamp(56px, 8.5vw, 130px)" }}
          >
            Let&apos;s build
            <br />
            something
            <br />
            <span className="text-gradient-lime">together.</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8">
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: EASE_OUT_EXPO }}
            onSubmit={submit}
            className="bg-(--surface) text-(--ink) rounded-3xl clay-lg p-8 lg:p-10 space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="Full Name *">
                <input
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  required
                  className="w-full bg-surface-dim clay-inset rounded-xl px-4 py-3 outline-none focus:ring-2 ring-(--primary) font-body text-[15px]"
                />
              </Field>
              <Field label="Email *">
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  required
                  className="w-full bg-surface-dim clay-inset rounded-xl px-4 py-3 outline-none focus:ring-2 ring-(--primary) font-body text-[15px]"
                />
              </Field>
            </div>
            <Field label="Subject">
              <select
                value={form.subject}
                onChange={(e) => setForm({ ...form, subject: e.target.value })}
                className="w-full bg-surface-dim clay-inset rounded-xl px-4 py-3 outline-none focus:ring-2 ring-(--primary) font-body text-[15px]"
              >
                {["Job Opportunity", "Freelance", "Collaboration", "Other"].map((s) => (
                  <option key={s}>{s}</option>
                ))}
              </select>
            </Field>
            <Field label="Message *">
              <textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                required
                rows={5}
                className="w-full bg-surface-dim clay-inset rounded-xl px-4 py-3 outline-none focus:ring-2 ring-(--primary) font-body text-[15px] resize-none"
              />
            </Field>

            <button
              type="submit"
              disabled={state !== "idle"}
              className="w-full bg-(--primary) text-(--ink) font-display font-medium text-[15px] py-4 rounded-2xl clay-md hover:translate-y-[-2px] transition-transform disabled:opacity-70 disabled:translate-y-0 flex items-center justify-center gap-2"
            >
              {state === "idle" && <>Send Message →</>}
              {state === "loading" && (
                <>
                  <span className="w-4 h-4 rounded-full border-2 border-(--ink) border-t-transparent animate-spin" />{" "}
                  Sending…
                </>
              )}
              {state === "sent" && <>✓ Message sent — I&apos;ll respond within 24h.</>}
            </button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.1, ease: EASE_OUT_EXPO }}
            className="space-y-4"
          >
            <button
              onClick={copyEmail}
              className="w-full text-left bg-(--surface) text-(--ink) rounded-3xl clay-md p-6 group hover:translate-y-[-4px] transition-transform"
            >
              <div className="font-mono text-[10px] tracking-widest text-muted-ink mb-2">
                EMAIL · CLICK TO COPY
              </div>
              <div className="font-display font-semibold text-2xl">deewakarsinghraz@gmail.com</div>
              {copied && (
                <div className="text-xs mt-2 text-primary-muted font-mono">
                  ✓ Copied to clipboard
                </div>
              )}
            </button>

            <div className="grid grid-cols-2 gap-4">
              {[
                { l: "GitHub", v: "/Diwakar" },
                { l: "LinkedIn", v: "/in/Diwakar-Singh-Rajbanshi" },
                { l: "Twitter / X", v: "@diwakarsr" },
                { l: "Location", v: "Jhapa, Nepal" },
              ].map((x) => (
                <a
                  key={x.l}
                  href="#"
                  className="bg-(--surface) text-(--ink) rounded-2xl clay-sm p-5 hover:translate-y-[-3px] transition-transform"
                >
                  <div className="font-mono text-[10px] tracking-widest text-muted-ink mb-1.5">
                    {x.l}
                  </div>
                  <div className="font-display font-medium text-[15px]">{x.v}</div>
                </a>
              ))}
            </div>

            <div className="bg-(--bg) border border-(--border) rounded-3xl p-6 text-(--ink-light)">
              <div className="flex items-center gap-2 font-mono text-[11px] tracking-widest text-(--primary) mb-3">
                <span className="w-2 h-2 rounded-full bg-(--primary) pulse-dot" />
                AVAILABILITY · LIVE
              </div>
              <div className="font-display text-lg leading-snug mb-2">
                Available for projects starting <span className="text-(--primary)">March 2026</span>
                .
              </div>
              <div className="font-body text-[13px] text-muted">
                Typical response time: under 24 hours.
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="block font-mono text-[10px] tracking-widest text-muted-ink uppercase mb-2">
        {label}
      </span>
      {children}
    </label>
  );
}
