// ============================================================
// src/pages/AboutPage.jsx
// ============================================================

import { useRef } from "react";
import { motion, useInView }             from "framer-motion";
import SectionTitle                      from "../components/SectionTitle";
import { fadeInUp, staggerContainer }    from "../utils/animations";

// Tech pills shown in the profile card
const TECH_PILLS = ["Java", "Spring", "React", "MySQL", "AWS"];

// Expertise cards shown on the right
const EXPERTISE = [
  { icon: "🎯", label: "Full Stack Dev",  desc: "End-to-end solutions" },
  { icon: "☕", label: "Java Expert",     desc: "Spring ecosystem"     },
  { icon: "⚛️", label: "React.js",        desc: "Modern frontend"      },
  { icon: "🗄️", label: "Database Design", desc: "SQL & NoSQL"          },
];

export default function AboutPage() {
  const ref      = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <div id="about" ref={ref} className="page-section">

      <SectionTitle
        title="About Me"
        accent="WHO I AM"
        subtitle="A passionate developer with a keen eye for detail and a love for building exceptional digital experiences."
      />

      <motion.div
        className="about__grid"
        variants={staggerContainer}
        initial="initial"
        animate={isInView ? "animate" : "initial"}
      >
        {/* ── Left column: profile card ── */}
        <motion.div variants={fadeInUp}>

          {/* Floating profile card */}
          <motion.div
            className="about__profile-card"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {/* Floating avatar */}
            <motion.div
              className="about__avatar"
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            >
              👨‍💻
            </motion.div>

            {/* Tech pills */}
            <div className="about__tech-pills">
              {TECH_PILLS.map((tech) => (
                <span key={tech} className="about__tech-pill">{tech}</span>
              ))}
            </div>
          </motion.div>

          {/* Location / availability info box */}
          <motion.div
            className="about__info-box"
            variants={fadeInUp}
            transition={{ delay: 0.2 }}
          >
            <div>
              <div className="about__info-label">LOCATION</div>
              <div className="about__info-value">📍 Mumbai, Maharashtra, India</div>
            </div>
            <div>
              <div className="about__info-label">AVAILABILITY</div>
              <div className="about__info-value about__info-value--green">
                ⚡ Full-time / Freelance
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* ── Right column: text + expertise ── */}
        <motion.div variants={fadeInUp}>
          <h3 className="about__heading">Building Scalable Solutions</h3>

          <p className="about__text">
            I'm a certified Java Full Stack Developer with a strong foundation in
            object-oriented programming and enterprise application development.
            My journey in tech started with a curiosity for how things work, and
            evolved into a passion for building robust, user-friendly applications.
          </p>

          <p className="about__text">
            Currently expanding my skills in cloud technologies and microservices
            architecture. I believe in writing clean, maintainable code and creating
            seamless experiences that users love.
          </p>

          {/* Expertise cards */}
          <div className="about__expertise-grid">
            {EXPERTISE.map((item) => (
              <div key={item.label} className="about__expertise-card">
                <div className="about__expertise-icon">{item.icon}</div>
                <div className="about__expertise-title">{item.label}</div>
                <div className="about__expertise-desc">{item.desc}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}