import { useRef, useState } from "react";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { EASE_OUT_EXPO } from "@/lib/motion";

const entries = [
  {
    year: "2026",
    period: "Jan 2026 — Present",
    role: " Full-Stack Engineer",
    company: "Whoez Group",
    location: "Remote · Jhapa",
    description:
      "Leading the rebuild of an internal logistics platform serving 40+ regional partners. Architected the realtime tracking layer (PostgreSQL LISTEN/NOTIFY + WebSockets).",
    tech: ["Next.js", "Prisma", "PostgreSQL", "Redis", "AWS"],
    highlights: [
      "Led the rebuild of an internal logistics platform serving 40+ regional partners.",
      "Architected the realtime tracking layer using PostgreSQL LISTEN/NOTIFY and WebSockets for low-latency updates.",
      "Implemented a robust ETL pipeline to migrate legacy data with zero downtime.",
    ],
  },
  {
    year: "2025",
    period: "2025",
    role: "Full-Stack Developer",
    company: "Academic Project- ecom",
    location: "Jhapa, Nepal",
    description:
      "Built a full-stack ecommerce platform as part of my academic curriculum. Developed a Next.js frontend with a Django REST API backend, integrating Stripe for payments and Prisma for database management.",
    tech: ["React", "Django", "Khalti", "SQL"],
    highlights: [
      "Built a full-stack ecommerce platform as part of my academic curriculum.",
      "Developed a Next.js frontend with a Django REST API backend, integrating Stripe for payments and Prisma for database management.",
      "Implemented user authentication, product management, and order processing features.",
    ],
  },

  {
    year: "2022",
    period: "2024",
    role: "Foundations",
    company: "Self-directed",
    location: "Jhapa, Nepal",
    description:
      "Studied the fundamentals of distributed systems, databases, and software architecture. Built a toy SQL engine in TypeScript to solidify my understanding of query parsing and execution.",
    tech: ["HTML/CSS", "JavaScript", "SQL", "Django"],
    highlights: [
      "Built a toy SQL engine in TypeScript to solidify my understanding of query parsing and execution.",
      "Completed 12+ courses on distributed systems, databases, and software architecture.",
      "Contributed to open-source projects to gain practical experience.",
    ],
  },
];

function TimelineCard({
  e,
  side,
  idx,
}: {
  e: (typeof entries)[number];
  side: "left" | "right";
  idx: number;
}) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className={`relative grid grid-cols-1 lg:grid-cols-2 gap-6 mb-16 ${side === "right" ? "lg:[&>*:first-child]:col-start-2" : ""}`}
    >
      <motion.div
        initial={{ opacity: 0, x: side === "left" ? -60 : 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: EASE_OUT_EXPO }}
        className="bg-[var(--surface)] text-[var(--ink)] rounded-3xl clay-md p-6 relative"
      >
        <div className="flex items-start justify-between gap-4 mb-3">
          <div>
            <div className="font-display font-semibold text-xl mb-1">{e.role}</div>
            <div className="font-body text-sm text-[var(--muted-ink)]">
              <span className="font-medium text-[var(--ink)]">{e.company}</span> · {e.location}
            </div>
          </div>
          <span className="font-mono text-[11px] px-2.5 py-1 rounded-full bg-[var(--primary)] text-[var(--ink)] whitespace-nowrap">
            {e.year}
          </span>
        </div>
        <div className="font-mono text-[10px] tracking-wider text-[var(--muted-ink)] mb-4">
          {e.period}
        </div>
        <p className="font-body text-[14px] text-[var(--ink)]/80 leading-[1.7] mb-4">
          {e.description}
        </p>

        <button
          onClick={() => setOpen(!open)}
          className="font-ui text-[12px] text-[var(--muted-ink)] hover:text-[var(--ink)]"
        >
          {open ? "Hide Details ↑" : "Show Details ↓"}
        </button>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden"
            >
              <ul className="mt-4 space-y-2 font-body text-[13px] text-[var(--ink)]/80">
                {e.highlights.map((h) => (
                  <li key={h} className="flex gap-2">
                    <span className="text-[var(--primary-muted)]">→</span>
                    {h}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-1.5 mt-4">
                {e.tech.map((t) => (
                  <span
                    key={t}
                    className="font-ui text-[11px] px-2 py-1 rounded-md bg-[var(--surface-dim)]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Spine dot */}
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ type: "spring", stiffness: 300, damping: 18, delay: 0.2 }}
        className="hidden lg:block absolute left-1/2 top-8 -translate-x-1/2 w-3.5 h-3.5 rounded-full bg-[var(--primary)] glow-lime ring-4 ring-[var(--bg)] z-10"
      />
      <div className="hidden lg:block" />
    </div>
  );
}

export function Experience() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 80%", "end 20%"] });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="experience" className="relative py-32 px-6 lg:px-10">
      <div className="max-w-[1200px] mx-auto">
        <div className="mb-20 max-w-2xl">
          <div className="eyebrow mb-4">const career = [</div>
          <h2
            className="font-display font-bold leading-[1.05] text-[var(--ink-light)]"
            style={{ fontSize: "clamp(40px, 5.5vw, 72px)" }}
          >
            My Journey <span className="text-gradient-lime">So Far</span>
          </h2>
        </div>

        <div ref={ref} className="relative">
          <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-[var(--border)]" />
          <motion.div
            style={{ height: lineHeight }}
            className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-0 w-px bg-gradient-to-b from-[var(--primary)] via-[var(--primary)] to-transparent"
          />
          {entries.map((e, i) => (
            <TimelineCard key={e.year} e={e} side={i % 2 === 0 ? "left" : "right"} idx={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
