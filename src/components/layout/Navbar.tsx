import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { EASE_OUT_EXPO } from "@/lib/motion";

const links = [
  { href: "#about", label: "About" },
  { href: "#work", label: "Work" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");
  const lastY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 60);
      setHidden(y > lastY.current && y > 200);
      lastY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive("#" + e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );
    links.forEach((l) => {
      const el = document.querySelector(l.href);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: hidden ? -100 : 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: EASE_OUT_EXPO, opacity: { delay: 0.3 } }}
        className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
          scrolled ? "backdrop-blur-xl bg-[#0A0908]/70 border-b border-[var(--border)]" : ""
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
          <a
            href="#top"
            className="flex items-center gap-1 font-display font-semibold text-xl tracking-tight text-[var(--ink-light)]"
          >
            DSR<span className="text-[var(--primary)] blink">_</span>
          </a>

          <nav className="hidden lg:flex items-center gap-1">
            {links.map((l) => {
              const isActive = active === l.href;
              return (
                <a
                  key={l.href}
                  href={l.href}
                  data-cursor="link"
                  className="relative px-4 py-2 text-sm font-body text-[var(--muted)] hover:text-[var(--ink-light)] transition-colors"
                >
                  {l.label}
                  <span
                    className={`absolute left-1/2 -translate-x-1/2 bottom-0.5 w-1 h-1 rounded-full bg-[var(--primary)] transition-opacity ${
                      isActive ? "opacity-100" : "opacity-0"
                    }`}
                  />
                </a>
              );
            })}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <a
              href="#contact"
              data-cursor="link"
              className="font-display font-medium text-sm bg-[var(--primary)] text-[var(--ink)] px-5 py-2.5 rounded-full hover:bg-[var(--ink-light)] transition-colors"
            >
              Hire Me →
            </a>
          </div>

          <button
            className="lg:hidden text-[var(--ink-light)] p-2"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
              <path
                d="M3 6h16M3 11h16M3 16h16"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[80] bg-[var(--bg)] lg:hidden flex flex-col"
          >
            <div className="flex justify-end p-6">
              <button
                onClick={() => setOpen(false)}
                className="text-[var(--ink-light)] text-2xl"
                aria-label="Close"
              >
                ×
              </button>
            </div>
            <div className="flex-1 flex flex-col justify-center px-8 gap-2 relative overflow-hidden">
              <div className="absolute -right-10 top-1/4 font-mono text-[260px] text-[var(--ink-light)]/[0.03] leading-none select-none">
                {"{}"}
              </div>
              {links.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={{ x: 60, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.07 * i, ease: EASE_OUT_EXPO }}
                  className="font-display font-semibold text-5xl text-[var(--ink-light)] py-3"
                >
                  {l.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
