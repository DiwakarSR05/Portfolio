export const EASE_OUT_EXPO = [0.16, 1, 0.3, 1] as const;
export const EASE_IN_EXPO = [0.7, 0, 0.84, 0] as const;
export const SPRING = { type: "spring" as const, stiffness: 400, damping: 28 };
export const SPRING_SOFT = { type: "spring" as const, stiffness: 200, damping: 22 };

export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE_OUT_EXPO } },
};

export const stagger = (delay = 0.06) => ({
  hidden: {},
  show: { transition: { staggerChildren: delay } },
});
