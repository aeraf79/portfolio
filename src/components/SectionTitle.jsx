// ============================================================
// SectionTitle.jsx
// Shared animated heading used at the top of every section.
// ============================================================

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

/**
 * @param {string} title     - Main heading text.
 * @param {string} accent    - Small uppercase label above the heading.
 * @param {string} [subtitle]- Optional description below the heading.
 */
export default function SectionTitle({ title, accent, subtitle }) {
  const ref      = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      className="section-title__wrapper"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
    >
      {/* Small accent label */}
      <motion.span
        className="section-title__accent"
        initial={{ opacity: 0, x: -20 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        {accent}
      </motion.span>

      {/* Main heading */}
      <h2 className="section-title__heading">{title}</h2>

      {/* Optional subtitle */}
      {subtitle && (
        <motion.p
          className="section-title__subtitle"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 0.7 } : {}}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
}