import { createFileRoute, Link, useParams } from "@tanstack/react-router";
import { projects } from "@/data/projects";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { CustomCursor } from "@/components/layout/CustomCursor";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const Route = createFileRoute("/projects/$projectId")({
  component: ProjectCaseStudy,
});

const EASE_OUT_EXPO = [0.16, 1, 0.3, 1] as any;

function ProjectCaseStudy() {
  const { projectId } = useParams({ from: "/projects/$projectId" });
  const project = projects.find((p) => p.id === projectId);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-(--bg) text-(--ink-light)">
        <div className="text-center">
          <h1 className="text-4xl font-display font-bold mb-4">Project Not Found</h1>
          <Link to="/" hash="work" className="text-(--primary) hover:underline font-ui">
            ← Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-(--bg) text-(--ink-light) min-h-screen">
      <CustomCursor />
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-0 pb-0 lg:pt-20 lg:pb-20 px-6 lg:px-10 overflow-hidden">
        <div className="max-w-[1400px] mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE_OUT_EXPO }}
          >
            <Link
              to="/"
              hash="work"
              className="inline-flex items-center gap-2 text-muted hover:text-(--primary) transition-colors mb-8 font-ui text-sm uppercase tracking-widest"
            >
              <span>←</span> Back to Portfolio
            </Link>
            <div className="eyebrow mb-6">// {project.category.replace("-", " ")}</div>
            <h1
              className="font-display font-bold leading-[1] mb-8"
              style={{ fontSize: "clamp(48px, 8vw, 120px)" }}
            >
              {project.title}
            </h1>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-10 border-y border-(--border)">
              <div>
                <div className="text-[10px] uppercase tracking-tighter text-muted mb-2 font-mono">
                  Role
                </div>
                <div className="font-ui text-sm">{project.role}</div>
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-tighter text-muted mb-2 font-mono">
                  Year
                </div>
                <div className="font-ui text-sm">{project.year}</div>
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-tighter text-muted mb-2 font-mono">
                  Stack
                </div>
                <div className="font-ui text-sm flex flex-wrap gap-x-2">
                  {project.stack.slice(0, 3).join(", ")}
                </div>
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-tighter text-muted mb-2 font-mono">
                  Live
                </div>
                <a
                  href={project.links.live}
                  target="_blank"
                  rel="noreferrer"
                  className="font-ui text-sm text-(--primary) hover:underline"
                >
                  Visit Site ↗
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Background Tint / Gradient */}
        <div
          className="absolute top-0 right-0 w-1/2 h-full opacity-20 pointer-events-none"
          style={{
            background: `radial-gradient(circle at center, ${project.tint}, transparent 70%)`,
            filter: "blur(120px)",
          }}
        />
      </section>

      {/* Main Image */}
      <section className="px-6 lg:px-10 pb-32">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: EASE_OUT_EXPO, delay: 0.2 }}
            className="relative aspect-video rounded-[40px] overflow-hidden clay-lg"
          >
            <img
              src={project.screenshots[0]}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Overview & Core Content */}
      <section className="px-6 lg:px-10 py-32 bg-(--bg-2)">
        <div className="max-w-[1400px] mx-auto grid lg:grid-cols-[1fr_1.5fr] gap-20">
          <div>
            <h2 className="font-display font-medium text-4xl mb-8">Overview</h2>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((s) => (
                <span
                  key={s}
                  className="px-4 py-2 rounded-full border border-(--border) text-xs font-ui bg-(--surface)/5"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
          <div className="space-y-12">
            <p className="font-body text-xl lg:text-2xl text-muted-ink leading-relaxed">
              {project.longDescription}
            </p>

            <div className="grid md:grid-cols-2 gap-12 pt-12 border-t border-(--border)">
              <div>
                <h3 className="font-display font-bold text-lg uppercase tracking-widest text-(--primary) mb-6">
                  The Challenge
                </h3>
                <p className="font-body text-muted-ink leading-relaxed">{project.challenge}</p>
              </div>
              <div>
                <h3 className="font-display font-bold text-lg uppercase tracking-widest text-gradient-lime mb-6">
                  The Solution
                </h3>
                <p className="font-body text-muted-ink leading-relaxed">{project.solution}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Screenshot Gallery */}
      <section className="px-6 lg:px-10 py-32">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="font-display font-bold text-5xl mb-16 text-center">
            Visual <span className="text-muted">Journey</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-10">
            {project.screenshots.slice(1).map((src, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
                className="rounded-3xl overflow-hidden clay-md"
              >
                <img
                  src={src}
                  alt={`${project.title} screen ${idx + 2}`}
                  className="w-full h-auto"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Next Project / Footer Call to Action */}
      <section className="px-6 lg:px-10 py-32 border-t border-(--border)">
        <div className="max-w-[1400px] mx-auto text-center">
          <div className="eyebrow mb-8">// next adventure</div>
          <Link to="/" hash="work" className="group inline-block">
            <h2 className="font-display font-bold text-5xl lg:text-8xl hover:text-(--primary) transition-colors duration-500">
              See All <span className="text-(--primary)">Projects</span> ↗
            </h2>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
