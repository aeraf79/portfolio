// ============================================================
// src/pages/SkillsPage.jsx
// ============================================================

import { useRef } from "react";
import { motion, useInView }          from "framer-motion";
import SectionTitle                   from "../components/SectionTitle";
import { SKILLS, PROFICIENCY }        from "../utils/constants";
import { fadeInUp, staggerContainer } from "../utils/animations";

// ── ProficiencyBar ─────────────────────────────────────────
// Each bar is its own component so it can independently detect
// when it enters the viewport and trigger its animation.

function ProficiencyBar({ skill, level, index, parentInView }) {
  const ref      = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <motion.div
      ref={ref}
      className="skills__bar-row"
      initial={{ opacity: 0, x: -20 }}
      animate={parentInView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay: 0.5 + index * 0.1 }}
    >
      <div className="skills__bar-header">
        <span className="skills__bar-name">{skill}</span>
        <motion.span
          className="skills__bar-pct"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
        >
          {level}%
        </motion.span>
      </div>

      <div className="skills__bar-track">
        <motion.div
          className="skills__bar-fill"
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : {}}
          transition={{ delay: 0.1, duration: 1, ease: "easeOut" }}
        >
          {/* Shimmer sweep effect */}
          <motion.div
            className="skills__bar-shimmer"
            animate={isInView ? { x: ["-100%", "100%"] } : {}}
            transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
}

// ── SkillsPage ─────────────────────────────────────────────

export default function SkillsPage() {
  const ref      = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <div id="skills" ref={ref} className="page-section">

      <SectionTitle
        title="Technical Skills"
        accent="MY EXPERTISE"
        subtitle="A comprehensive toolkit built through years of hands-on experience"
      />

      {/* ── Skill category cards ── */}
      <motion.div
        className="skills__categories"
        variants={staggerContainer}
        initial="initial"
        animate={isInView ? "animate" : "initial"}
      >
        {Object.entries(SKILLS).map(([category, items]) => (
          <motion.div
            key={category}
            className="skills__category-card"
            variants={fadeInUp}
            whileHover={{ y: -5 }}
          >
            <div className="skills__category-name">{category}</div>
            <div className="skills__tags">
              {items.map((skill) => (
                <span key={skill} className="skills__tag">{skill}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* ── Proficiency bars ── */}
      <motion.div
        className="skills__proficiency-box"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        <h3 className="skills__proficiency-title">Core Competencies</h3>

        {PROFICIENCY.map((item, idx) => (
          <ProficiencyBar
            key={item.skill}
            skill={item.skill}
            level={item.level}
            index={idx}
            parentInView={isInView}
          />
        ))}
      </motion.div>
    </div>
  );
}