import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 500, damping: 35 });
  const sy = useSpring(y, { stiffness: 500, damping: 35 });
  const [variant, setVariant] = useState<"default" | "link" | "view">("default");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setVisible(true);
      const el = e.target as HTMLElement;
      const c = el.closest("[data-cursor]") as HTMLElement | null;
      if (c) setVariant((c.dataset.cursor as never) ?? "link");
      else if (el.closest("a, button")) setVariant("link");
      else setVariant("default");
    };
    const leave = () => setVisible(false);
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseleave", leave);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseleave", leave);
    };
  }, [x, y]);

  const size = variant === "default" ? 16 : variant === "view" ? 64 : 48;
  const label = variant === "view" ? "VIEW" : "";

  return (
    <motion.div
      className="custom-cursor pointer-events-none fixed top-0 left-0 z-[9999] rounded-full mix-blend-difference"
      style={{
        x: sx,
        y: sy,
        width: size,
        height: size,
        translateX: "-50%",
        translateY: "-50%",
        border: "1.5px solid rgba(245,240,232,0.85)",
        background: variant === "default" ? "transparent" : "rgba(200,255,87,0.15)",
        opacity: visible ? 1 : 0,
        transition: "width 0.2s ease, height 0.2s ease, background 0.2s ease",
      }}
    >
      {label && (
        <div className="absolute inset-0 flex items-center justify-center font-mono text-[10px] tracking-widest text-[var(--ink-light)]">
          {label}
        </div>
      )}
    </motion.div>
  );
}
