import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const items = [
  {
    quote:
      "He is a rare combination of deep technical skill and clear communication. He helped us ship a complex feature in record time.",
    name: "Abishek",
    role: "CEO, ABC.co",
    initials: "AP",
  },
  {
    quote:
      "He inherited a tangled Stripe integration and within two weeks our chargeback rate had halved. Clear thinking, clear code, clear communication.",
    name: "John Doe",
    role: "Founder, Ecommerce",
    initials: "JD",
  },
];

export function Testimonials() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setI((x) => (x + 1) % items.length), 6000);
    return () => clearInterval(id);
  }, []);

  const t = items[i];

  return (
    <section className="relative py-32 px-6 lg:px-10">
      <div className="max-w-[1100px] mx-auto">
        <div className="text-center mb-14">
          <div className="eyebrow mb-4">// social proof</div>
          <h2
            className="font-display font-bold leading-[1.05] text-[var(--ink-light)]"
            style={{ fontSize: "clamp(40px, 5.5vw, 72px)" }}
          >
            What people <span className="text-gradient-lime">say.</span>
          </h2>
        </div>

        <div className="relative min-h-[360px]">
          <AnimatePresence mode="wait">
            <motion.article
              key={i}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.5 }}
              className="bg-[var(--surface)] text-[var(--ink)] rounded-3xl clay-lg p-10 lg:p-14 relative overflow-hidden"
            >
              <span className="absolute -top-8 left-6 font-display font-bold text-[200px] text-[var(--primary)] opacity-25 leading-none select-none">
                &ldquo;
              </span>
              <blockquote className="relative font-body font-light italic text-xl lg:text-[26px] leading-[1.55] text-[var(--ink)] mb-10 max-w-3xl">
                {t.quote}
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[var(--bg)] text-[var(--ink-light)] font-display font-semibold flex items-center justify-center clay-sm">
                  {t.initials}
                </div>
                <div>
                  <div className="font-body font-bold text-[15px]">{t.name}</div>
                  <div className="font-body text-[13px] text-[var(--muted-ink)]">{t.role}</div>
                </div>
                <div className="ml-auto flex gap-1 text-[var(--primary-muted)]">
                  {Array.from({ length: 5 }).map((_, k) => (
                    <span key={k}>★</span>
                  ))}
                </div>
              </div>
            </motion.article>
          </AnimatePresence>
        </div>

        <div className="flex items-center justify-center gap-3 mt-8">
          <button
            onClick={() => setI((x) => (x - 1 + items.length) % items.length)}
            className="w-10 h-10 rounded-full bg-[var(--surface)] text-[var(--ink)] clay-sm"
          >
            ‹
          </button>
          {items.map((_, k) => (
            <button
              key={k}
              onClick={() => setI(k)}
              className={`h-2 rounded-full transition-all ${k === i ? "w-8 bg-[var(--primary)]" : "w-2 bg-[var(--muted)]/40"}`}
            />
          ))}
          <button
            onClick={() => setI((x) => (x + 1) % items.length)}
            className="w-10 h-10 rounded-full bg-[var(--surface)] text-[var(--ink)] clay-sm"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
}
