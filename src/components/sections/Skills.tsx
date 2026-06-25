import { motion } from "framer-motion";
import { EASE_OUT_EXPO } from "@/lib/motion";

const groups = [
  {
    cat: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Three.js"],
  },
  { cat: "Backend", items: ["Django", "Node.js", "Express", "REST", "GraphQL", "WebSockets"] },
  { cat: "Database", items: ["PostgreSQL", "MongoDB", "SQLite", "Prisma", "Postgres"] },
  { cat: "DevOps & Cloud", items: ["Docker", "GitHub Actions", "Vercel", "AWS", "Nginx"] },
  { cat: "Tools", items: ["Git", "Figma", "GitLab"] },
];

const marquee = [
  "React",
  "TypeScript",
  "Next.js",
  "Node",
  "Postgres",
  "Prisma",
  "Tailwind",
  "Framer Motion",
  "Docker",
  "AWS",
  "Redis",
  "GraphQL",
  "Three.js",
];

export function Skills() {
  return (
    <section id="skills" className="relative py-32 px-6 lg:px-10 overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        <div className="mb-16 max-w-2xl">
          <div className="eyebrow mb-4">const skills = {"{"}</div>
          <h2
            className="font-display font-bold leading-[1.05] text-[var(--ink-light)]"
            style={{ fontSize: "clamp(40px, 5.5vw, 72px)" }}
          >
            The Tools <span className="text-gradient-lime">I Wield</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {groups.map((g, i) => (
            <motion.div
              key={g.cat}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.07, duration: 0.6, ease: EASE_OUT_EXPO }}
              className="bg-[var(--surface)] text-[var(--ink)] rounded-3xl clay-md p-6"
            >
              <div className="font-mono text-[11px] tracking-[0.15em] uppercase text-[var(--muted-ink)] mb-5">
                / {g.cat}
              </div>
              <div className="flex flex-wrap gap-2">
                {g.items.map((item) => (
                  <motion.span
                    key={item}
                    whileHover={{ y: -3, scale: 1.04 }}
                    className="font-ui text-[13px] px-3 py-1.5 rounded-full bg-[var(--surface-dim)] border-l-2 border-[var(--primary-muted)] cursor-default"
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="mt-24 relative">
        <div className="overflow-hidden">
          <div
            className="marquee flex whitespace-nowrap font-display font-bold text-[var(--surface)]/[0.06]"
            style={{ fontSize: "clamp(60px, 10vw, 140px)" }}
          >
            {[...marquee, ...marquee].map((m, i) => (
              <span key={i} className="px-8">
                {m} ·
              </span>
            ))}
          </div>
        </div>
        <div className="overflow-hidden mt-4">
          <div
            className="marquee-reverse flex whitespace-nowrap font-display font-bold text-[var(--primary)]/[0.08]"
            style={{ fontSize: "clamp(60px, 10vw, 140px)" }}
          >
            {[...marquee, ...marquee].reverse().map((m, i) => (
              <span key={i} className="px-8">
                {m} ·
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
