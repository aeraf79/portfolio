// ============================================================
// src/pages/EducationPage.jsx
// ============================================================

import { useRef }            from "react";
import { motion, useInView } from "framer-motion";
import SectionTitle          from "../components/SectionTitle";
import { EDUCATION }         from "../utils/constants";

export default function EducationPage() {
  const ref      = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <div id="education" ref={ref} className="page-section page-section--narrow">

      <SectionTitle
        title="Education & Training"
        accent="MY JOURNEY"
        subtitle="Academic background and professional certifications"
      />

      <div className="education__timeline">

        {/* Animated vertical line */}
        <motion.div
          className="education__timeline-line"
          initial={{ height: 0 }}
          animate={isInView ? { height: "100%" } : {}}
          transition={{ duration: 1, delay: 0.2 }}
        />

        {/* ── Degree cards ── */}
        {EDUCATION.map((edu, idx) => (
          <motion.div
            key={edu.degree}
            className="education__item"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: idx * 0.2, duration: 0.6 }}
          >
            {/* Timeline dot */}
            <motion.div
              className={`education__dot ${edu.dotClass}`}
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{ delay: idx * 0.2 + 0.2, type: "spring", stiffness: 200 }}
            >
              {edu.icon}
            </motion.div>

            {/* Card body */}
            <motion.div
              className="education__card"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: idx * 0.2 + 0.3 }}
            >
              <div className="education__card-header">
                <h3 className="education__card-title">{edu.degree}</h3>
                <span className="education__card-period">{edu.period}</span>
              </div>

              <div className="education__card-institution">{edu.institution}</div>
              <div className="education__card-score">{edu.score}</div>

              {/* Achievements list */}
              {edu.achievements && (
                <div className="education__achievements">
                  <div className="education__achievements-label">ACHIEVEMENTS</div>
                  {edu.achievements.map((achievement) => (
                    <div key={achievement} className="education__achievement-item">
                      <span className="education__achievement-icon">🏆</span>
                      {achievement}
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          </motion.div>
        ))}

        {/* ── Certification card ── */}
        <motion.div
          className="education__item"
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          {/* Orange dot for the certification */}
          <motion.div
            className="education__dot education__dot--orange"
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
          >
            🏆
          </motion.div>

          <motion.div
            className="education__card"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.9 }}
          >
            <div className="education__card-header">
              <h3 className="education__card-title">
                Java Full Stack Developer Certification
              </h3>
              <span className="education__card-period education__card-period--orange">
                Dec 2025
              </span>
            </div>

            <div className="education__card-institution">
              IT Vedant Pvt Ltd — Intensive Full Stack Development Program
            </div>

            <p className="education__card-desc">
              Completed a 6-month intensive programme covering Java, Spring Boot,
              Hibernate, React.js, MySQL, and modern web development practices.
              Built multiple full-stack projects with industry-standard tools and
              methodologies.
            </p>
          </motion.div>
        </motion.div>

      </div>
    </div>
  );
}