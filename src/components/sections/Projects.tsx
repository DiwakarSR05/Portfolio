import { useState, useRef } from "react";
import { AnimatePresence, motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { EASE_OUT_EXPO } from "@/lib/motion";
import { projects, Project } from "@/data/projects";
import { Link } from "@tanstack/react-router";
import { ExternalLink, Github } from "lucide-react";

type Cat = "all" | "fullstack" | "frontend" | "open-source" | "experiment";

const filters: { key: Cat; label: string }[] = [
  { key: "all", label: "All" },
  { key: "frontend", label: "Frontend" },
  { key: "fullstack", label: "Full-Stack" },
  { key: "open-source", label: "Open Source" },
  { key: "experiment", label: "Experiments" },
];

function ProjectCard({ p, i }: { p: Project; i: number }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseX = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseY = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(mouseY, [-0.5, 0.5], [7, -7]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-7, 7]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ delay: (i % 4) * 0.08, duration: 0.7, ease: EASE_OUT_EXPO }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="group relative bg-(--bg) border border-(--border) rounded-[32px] overflow-hidden transition-colors hover:border-(--primary)/30"
    >
      <Link
        to={"/projects/$projectId" as any}
        params={{ projectId: p.id } as any}
        className="block relative aspect-16/10 overflow-hidden"
      >
        {/* Project Image */}
        <motion.div
          className="absolute inset-0 transition-transform duration-700 group-hover:scale-110"
          style={{ transformStyle: "preserve-3d", translateZ: 20 }}
        >
          <img src={p.screenshots[0]} alt={p.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-(--bg)/80 via-transparent to-transparent opacity-60" />
        </motion.div>

        {/* Floating Accent Glow */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-0 group-hover:opacity-20 blur-3xl transition-opacity duration-500 pointer-events-none"
          style={{ background: `radial-gradient(circle, ${p.tint}, transparent 70%)` }}
        />

        <div className="absolute top-6 left-6 font-mono text-[10px] tracking-tighter text-(--ink-light)/40 backdrop-blur-md bg-(--bg)/20 px-2 py-1 rounded-md">
          /{String(i + 1).padStart(2, "0")}
        </div>

        <div className="absolute bottom-6 left-6 right-6">
          <h3 className="font-display font-bold text-3xl text-(--ink-light) leading-none mb-2" style={{ transform: "translateZ(30px)" }}>
            {p.title}
          </h3>
          <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
            <span className="text-xs font-ui text-(--primary) uppercase tracking-widest">{p.category}</span>
          </div>
        </div>

        {/* Reveal Badge */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="bg-(--primary) text-(--ink) px-6 py-2.5 rounded-full font-display font-semibold text-sm shadow-xl shadow-(--primary)/20" style={{ transform: "translateZ(50px)" }}>
            View Project ↗
          </div>
        </div>
      </Link>

      <div className="p-8 bg-gradient-to-b from-transparent to-(--ink-)/50">
        <div className="flex flex-wrap gap-2 mb-6">
          {p.stack.slice(0, 3).map((s) => (
            <span key={s} className="font-mono text-[9px] px-2.5 py-1 rounded-lg bg-[var(--primary)] text-[var(--ink)] border border-(--border) uppercase tracking-wider">
              {s}
            </span>
          ))}
          {p.stack.length > 3 && <span className="text-[10px] text-muted-ink">+{p.stack.length - 3}</span>}
        </div>

        <p className="font-body text-[14px] text-muted-ink leading-relaxed line-clamp-2 mb-8 h-10">
          {p.description}
        </p>

        <div className="pt-6 border-t border-(--border)/50 flex items-center justify-between">
          <div className="flex gap-5">
            <a href={p.links.live} target="_blank" rel="noreferrer" className="text-muted hover:text-(--primary) transition-colors flex items-center gap-1.5 text-xs font-ui group/link">
              <ExternalLink size={14} className="group-hover/link:rotate-12 transition-transform" />
              Live
            </a>
            <a href={p.links.github} target="_blank" rel="noreferrer" className="text-muted hover:text-(--primary) transition-colors flex items-center gap-1.5 text-xs font-ui group/link">
              <Github size={14} className="group-hover/link:scale-110 transition-transform" />
              Source
            </a>
          </div>
          <span className="text-[10px] font-mono text-muted/50 tracking-widest">{p.year}</span>
        </div>
      </div>
    </motion.article>
  );
}

export function Projects() {
  const [cat, setCat] = useState<Cat>("all");
  const [view, setView] = useState<"grid" | "list">("grid");
  const filtered = cat === "all" ? projects : projects.filter((p) => p.category === cat);

  return (
    <section id="work" className="relative bg-(--bg-2) py-32 px-6 lg:px-10 overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-(--primary)/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />

      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="eyebrow mb-4"
            >
              // selected work
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-display font-bold leading-[1.05] text-(--ink-light)"
              style={{ fontSize: "clamp(40px, 5.5vw, 72px)" }}
            >
              Coded with <span className="text-gradient-lime">Passion.</span>
            </motion.h2>
          </div>
          <div className="flex items-center gap-2 bg-(--surface)/10 backdrop-blur-xl p-1.5 rounded-full border border-(--border)">
            {(["grid", "list"] as const).map((v) => (
              <button key={v} onClick={() => setView(v)}
                className={`px-6 py-2 rounded-full text-xs font-ui transition-all duration-300 ${view === v ? "bg-(--primary) text-(--ink) shadow-lg" : "text-muted hover:text-ink-light"}`}>
                {v}
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-16">
          {filters.map((f, i) => (
            <motion.button
              key={f.key}
              onClick={() => setCat(f.key)}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              data-cursor="link"
              className={`px-5 py-2.5 rounded-full font-ui text-[13px] border transition-all duration-400 ${cat === f.key
                ? "bg-(--primary) text-(--ink) border-(--primary) shadow-lg shadow-(--primary)/20"
                : "border-(--border) text-muted hover:text-(--ink-light) hover:border-(--ink-light)/30 bg-(--surface)/5"
                }`}>
              {f.label}
            </motion.button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          {view === "grid" ? (
            <motion.div key="grid" layout
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="grid md:grid-cols-2 gap-8 lg:gap-10 perspective-1000">
              {filtered.map((p, i) => (
                <ProjectCard key={p.id} p={p} i={i} />
              ))}
            </motion.div>
          ) : (
            <motion.div key="list"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="border-t border-(--border)">
              {filtered.map((p, i) => (
                <motion.div key={p.id}
                  initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }} transition={{ delay: i * 0.04 }}>
                  <Link
                    to={"/projects/$projectId" as any}
                    params={{ projectId: p.id } as any}
                    className="group grid grid-cols-[40px_1fr_auto_auto] gap-4 lg:gap-8 items-center py-8 border-b border-(--border) hover:bg-(--surface)/3 hover:px-6 transition-all duration-500"
                    data-cursor="link"
                  >
                    <span className="font-mono text-xs text-muted/50 group-hover:text-(--primary) transition-colors">/{String(i + 1).padStart(2, "0")}</span>
                    <span className="font-display font-semibold text-2xl lg:text-4xl text-(--ink-light) group-hover:text-(--primary) transition-colors">
                      {p.title}
                    </span>
                    <div className="hidden lg:flex gap-2">
                      {p.stack.slice(0, 4).map((s) => (
                        <span key={s} className="font-mono text-[9px] px-2 py-1 rounded border border-(--border) text-muted uppercase tracking-wider">{s}</span>
                      ))}
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="font-mono text-xs text-muted/50">{p.year}</span>
                      <div className="w-10 h-10 rounded-full border border-(--border) flex items-center justify-center group-hover:bg-(--primary) group-hover:text-(--ink) transition-all duration-500">
                        →
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
