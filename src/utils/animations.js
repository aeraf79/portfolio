// ============================================================
// animations.js  —  Reusable Framer Motion variants
// ============================================================

/** Fade in and slide up — the most common entrance animation. */
export const fadeInUp = {
  initial:    { opacity: 0, y: 30 },
  animate:    { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

/** Simple opacity fade. */
export const fadeIn = {
  initial:    { opacity: 0 },
  animate:    { opacity: 1 },
  transition: { duration: 0.8 },
};

/** Parent wrapper that staggers its children by 100 ms each. */
export const staggerContainer = {
  animate: {
    transition: { staggerChildren: 0.1 },
  },
};

/** Pop-in scale animation — good for badges, dots, and icons. */
export const scaleIn = {
  initial:    { scale: 0 },
  animate:    { scale: 1 },
  transition: { type: "spring", stiffness: 260, damping: 20 },
};