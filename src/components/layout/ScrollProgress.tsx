import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30, mass: 0.2 });
  return (
    <motion.div
      style={{
        scaleX,
        transformOrigin: "left",
        background: "linear-gradient(90deg, #C8FF57, #4ECDC4)",
      }}
      className="fixed top-0 left-0 right-0 h-[3px] z-[90]"
    />
  );
}
