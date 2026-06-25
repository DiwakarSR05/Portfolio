import { useEffect, useState, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { EASE_OUT_EXPO } from "@/lib/motion";

export function Preloader({ onDone }: { onDone: () => void }) {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState<"loading" | "name" | "exit" | "done">("loading");
  const started = useRef(false);

  useEffect(() => {
    if (started.current) return;
    started.current = true;

    const start = performance.now();
    const dur = 1600;
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      setProgress(Math.floor(p * 100));
      if (p < 1) raf = requestAnimationFrame(tick);
      else {
        setPhase("name");
        setTimeout(() => setPhase("exit"), 700);
        setTimeout(() => {
          setPhase("done");
          onDone();
        }, 1500);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [onDone]);

  const NAME = "DIWAKAR SR";

  return (
    <AnimatePresence>
      {phase !== "done" && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-bg"
          initial={{ clipPath: "inset(0 0 0 0)" }}
          exit={{ clipPath: "inset(50% 0 50% 0)" }}
          transition={{ duration: 0.8, ease: EASE_OUT_EXPO }}
        >
          <div className="flex flex-col items-center gap-8">
            <div className="relative w-32 h-32">
              <svg viewBox="0 0 120 120" className="w-full h-full -rotate-90">
                <circle
                  cx="60"
                  cy="60"
                  r="54"
                  stroke="rgba(245,240,232,0.08)"
                  strokeWidth="2"
                  fill="none"
                />
                <circle
                  cx="60"
                  cy="60"
                  r="54"
                  stroke="var(--primary)"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  pathLength={1}
                  strokeDasharray={1}
                  strokeDashoffset={1 - progress / 100}
                  style={{
                    transition: "stroke-dashoffset 90ms linear",
                    filter: "drop-shadow(0 0 8px rgba(200,255,87,0.6))",
                  }}
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.svg
                  viewBox="0 0 60 60"
                  className="w-12 h-12"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4 }}
                >
                  <text
                    x="50%"
                    y="58%"
                    textAnchor="middle"
                    fontFamily="var(--font-display)"
                    fontWeight="700"
                    fontSize="34"
                    fill="none"
                    stroke="var(--ink-light)"
                    strokeWidth="1.2"
                    strokeDasharray="120"
                    strokeDashoffset={120 - progress * 1.2}
                  >
                    DSR
                  </text>
                </motion.svg>
              </div>
            </div>
            <div className="font-mono text-xs tracking-[0.2em] text-[var(--muted)]">
              {String(progress).padStart(3, "0")} / 100
            </div>
            <AnimatePresence>
              {phase !== "loading" && (
                <motion.div className="flex overflow-hidden">
                  {NAME.split("").map((ch, i) => (
                    <motion.span
                      key={i}
                      className="font-display font-bold text-2xl text-[var(--ink-light)] inline-block"
                      initial={{ y: "100%" }}
                      animate={{ y: 0 }}
                      transition={{ delay: i * 0.03, duration: 0.5, ease: EASE_OUT_EXPO }}
                    >
                      {ch === " " ? "\u00A0" : ch}
                    </motion.span>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
