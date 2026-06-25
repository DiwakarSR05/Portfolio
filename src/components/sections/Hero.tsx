import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { EASE_OUT_EXPO } from "@/lib/motion";
import { HeroBackground } from "@/components/layout/HeroBackground";

const ROLES = ["Full-Stack Developer", "Systems Thinker", "Interface Craftsman", "Problem Solver"];

const MARQUEE = [
  "DESIGN ENGINEER",
  "★",
  "SHIPS FAST",
  "★",
  "FROM SCHEMA TO PIXEL",
  "★",
  "OPEN TO WORK",
  "★",
  "JHAPA · NEPAL",
  "★",
];

function Scramble({ word }: { word: string }) {
  const [text, setText] = useState(word);
  useEffect(() => {
    const chars = "!<>-_\\/[]{}—=+*^?#________";
    let frame = 0;
    let id = 0;
    const scramble = () => {
      const out = word
        .split("")
        .map((c, i) => (frame > i * 2 ? c : chars[Math.floor(Math.random() * chars.length)]))
        .join("");
      setText(out);
      frame++;
      if (frame < word.length * 2 + 4) id = window.setTimeout(scramble, 35);
    };
    scramble();
    return () => clearTimeout(id);
  }, [word]);
  return <>{text}</>;
}

export function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [time, setTime] = useState("");

  useEffect(() => {
    const id = setInterval(() => setRoleIdx((i: number) => (i + 1) % ROLES.length), 2800);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const updateTime = () => {
      const d = new Date();
      setTime(
        d.toLocaleTimeString("en-GB", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          timeZone: "Asia/Kathmandu",
        }),
      );
    };
    updateTime();
    const id = setInterval(updateTime, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="top" className="relative min-h-dvh pt-12 pb-18 px-6 lg:px-10 overflow-hidden">
      <HeroBackground />

      <div className="relative max-w-[1400px] mx-auto flex flex-col items-center text-center">
        <div className="relative z-10 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6, ease: EASE_OUT_EXPO }}
            className="inline-flex items-center gap-3 mb-8 border border-(--border) rounded-full pl-2 pr-4 py-1.5 bg-(--bg-2)/60 backdrop-blur"
          >
            <span className="inline-flex items-center gap-1.5 bg-(--primary)/15 text-(--primary) text-[10px] font-mono uppercase tracking-[0.18em] px-2.5 py-1 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-(--primary) pulse-dot" />
              {time}
            </span>
            <span className="font-mono text-[11px] text-muted uppercase tracking-[0.14em]">
              Jhapa · Nepal
            </span>
          </motion.div>

          <h1
            className="font-display font-bold text-(--ink-light) leading-[0.88] tracking-[-0.045em] mb-6"
            style={{ fontSize: "clamp(52px, 8vw, 132px)" }}
          >
            {["DIWAKAR SINGH", "RAJBANSHI"].map((line, li) => (
              <div key={line} className="flex flex-wrap justify-center">
                {line.split("").map((ch, i) => (
                  <motion.span
                    key={i}
                    initial={{ rotateY: 90, opacity: 0 }}
                    animate={{ rotateY: 0, opacity: 1 }}
                    transition={{
                      delay: 0.4 + li * 0.25 + i * 0.035,
                      duration: 0.7,
                      ease: EASE_OUT_EXPO,
                    }}
                    className={`inline-block ${li === 1 ? "text-gradient-lime" : ""}`}
                    style={{ transformOrigin: "50% 50% -20px" }}
                  >
                     {ch === " " ? <span className="inline-block w-8" /> : ch}

                  </motion.span>
                ))}
              </div>
            ))}
          </h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.5 }}
            className="flex items-center justify-center gap-3 mb-8"
          >
            <span className="font-mono text-[11px] text-muted uppercase tracking-[0.18em]">
              // role
            </span>
            <span
              className="font-display font-medium text-(--ink-light) flex items-center"
              style={{ fontSize: "clamp(18px, 2vw, 26px)" }}
            >
              <Scramble key={roleIdx} word={ROLES[roleIdx]} />
              <span className="text-(--primary) blink ml-1">_</span>
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.6 }}
            className="font-body font-light text-[17px] text-muted max-w-[520px] mx-auto leading-[1.75] mb-10"
          >
            I build high-performance web applications with obsessive attention to detail — from
            database schema to pixel-perfect UI. Currently open to full-time roles and selective
            freelance work.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.9, type: "spring", stiffness: 200, damping: 18 }}
            className="flex flex-wrap items-center justify-center gap-4 mb-10"
          >
            <a
              href="#work"
              data-cursor="link"
              className="group inline-flex items-center gap-2 bg-(--primary) text-(--ink) font-display font-medium text-[15px] px-6 py-3.5 rounded-2xl clay-md hover:translate-y-[-2px] transition-transform"
            >
              View My Work
              <span className="transition-transform group-hover:translate-y-0.5">↓</span>
            </a>
          </motion.div>
        </div>
      </div>

      {/* Marquee strip */}
      <div className="relative mt-16 lg:mt-20 border-y border-(--border) overflow-hidden py-4">
        <div className="flex whitespace-nowrap marquee">
          {[...MARQUEE, ...MARQUEE, ...MARQUEE].map((w, i) => (
            <span
              key={i}
              className={`font-display font-semibold text-2xl mx-6 ${w === "★" ? "text-(--primary)" : "text-(--ink-light)/70"}`}
            >
              {w}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
