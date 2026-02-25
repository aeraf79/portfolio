// ============================================================
// src/pages/ProjectsPage.jsx
// ============================================================

import { useRef, useState }           from "react";
import { motion, useInView }          from "framer-motion";
import SectionTitle                   from "../components/SectionTitle";
import { PROJECTS }                   from "../utils/constants";
import { fadeInUp, staggerContainer } from "../utils/animations";

/** Convert a hex colour like "#00f5a0" → "0,245,160" for use in rgba(). */
function hexToRgb(hex) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `${r},${g},${b}`;
}

export default function ProjectsPage() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const ref      = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <div id="projects" ref={ref} className="page-section">

      <SectionTitle
        title="Featured Projects"
        accent="MY WORK"
        subtitle="Real-world applications I've built from scratch, solving actual problems"
      />

      <motion.div
        className="projects__grid"
        variants={staggerContainer}
        initial="initial"
        animate={isInView ? "animate" : "initial"}
      >
        {PROJECTS.map((project, idx) => {
          const isHovered = hoveredIndex === idx;

          return (
            <motion.div
              key={project.title}
              className="projects__card"
              variants={fadeInUp}
              transition={{ delay: idx * 0.1 }}
              onHoverStart={() => setHoveredIndex(idx)}
              onHoverEnd={()  => setHoveredIndex(null)}
              whileHover={{ y: -10 }}
              style={{
                borderColor: isHovered ? `${project.color}80` : undefined,
                background: isHovered
                  ? `linear-gradient(135deg, rgba(${hexToRgb(project.color)},0.1), rgba(255,255,255,0.02))`
                  : undefined,
              }}
            >
              {/* Faint background icon (decorative) */}
              <div className="projects__card-bg-icon">{project.icon}</div>

              {/* Header */}
              <div className="projects__card-header">
                <motion.div
                  className="projects__card-icon"
                  animate={isHovered ? { rotate: [0, 10, -10, 0] } : {}}
                  transition={{ duration: 0.5 }}
                >
                  {project.icon}
                </motion.div>

                <div>
                  <h3 className="projects__card-title">{project.title}</h3>
                  <span
                    className="projects__card-tech"
                    style={{ color: project.color }}
                  >
                    {project.tech}
                  </span>
                </div>
              </div>

              {/* Feature list */}
              <ul className="projects__card-points">
                {project.points.map((point, i) => (
                  <li key={i} className="projects__card-point">{point}</li>
                ))}
              </ul>

              {/* Links */}
              <div className="projects__card-links">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="projects__link"
                  >
                    <span>📦</span> View Code
                  </a>
                )}

                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="projects__link projects__link--live"
                    style={{
                      background:  `linear-gradient(135deg, ${project.color}20, transparent)`,
                      borderColor: `${project.color}40`,
                    }}
                  >
                    <span>🚀</span> Live Demo
                  </a>
                )}
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}