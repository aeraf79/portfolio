// ============================================================
// src/pages/HomePage.jsx
// ============================================================

import { motion } from "framer-motion";
import { useCounter }                    from "../utils/hooks";
import { fadeInUp, staggerContainer, scaleIn } from "../utils/animations";

export default function HomePage() {
  // useCounter(targetValue, duration)
  // For CGPA we count to 813 and divide by 100 → "8.13"
  const [projectRef,   projectCount]   = useCounter(5,    2000);
  const [cgpaRef,      cgpaCount]      = useCounter(813,  2000);
  const [certifiedRef, certifiedCount] = useCounter(2025, 2000);

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="home">
      <div className="home__inner">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >

          {/* ── Availability badge ── */}
          <motion.div
            className="home__badge"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 260, damping: 20 }}
          >
            <span className="home__badge-inner">
              <motion.span
                className="home__badge-dot"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
              />
              Open to Opportunities
            </span>
          </motion.div>

          {/* ── Name ── */}
          <motion.h1
            className="home__name"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1,   opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            AERAF ANSARI
          </motion.h1>

          {/* ── Role ── */}
          <motion.p
            className="home__role"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.9 }}
            transition={{ delay: 0.6 }}
          >
            Java Full Stack Developer
          </motion.p>

          {/* ── Description ── */}
          <motion.p
            className="home__desc"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            transition={{ delay: 0.8 }}
          >
            BSc IT graduate and certified Java Full Stack Developer. Hands-on
experience with Java, Spring Boot, React, and MySQL — building
scalable web applications with clean architecture and solid
object-oriented foundations. Ready to contribute from day one.
          </motion.p>

          {/* ── CTA buttons ── */}
          <motion.div
            className="home__actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1,  y: 0 }}
            transition={{ delay: 1 }}
          >
            <motion.button
              className="btn-primary"
              onClick={scrollToContact}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Hire Me
            </motion.button>

            <motion.a
              href="/AerafCV.pdf"
              download
              className="btn-outline"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Download Resume
            </motion.a>
          </motion.div>

          {/* ── Animated stats ── */}
          <motion.div
            className="home__stats"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            {/* Projects */}
            <motion.div whileHover={{ y: -5 }} style={{ textAlign: "center" }}>
              <div ref={projectRef} className="home__stat-number">
                {Math.round(projectCount)}+
              </div>
              <div className="home__stat-label">Projects</div>
            </motion.div>

            {/* CGPA */}
            <motion.div whileHover={{ y: -5 }} style={{ textAlign: "center" }}>
              <div ref={cgpaRef} className="home__stat-number">
                {(cgpaCount / 100).toFixed(2)}
              </div>
              <div className="home__stat-label">CGPA</div>
            </motion.div>

            {/* Year certified */}
            <motion.div whileHover={{ y: -5 }} style={{ textAlign: "center" }}>
              <div ref={certifiedRef} className="home__stat-number">
                {Math.round(certifiedCount)}
              </div>
              <div className="home__stat-label">Certified</div>
            </motion.div>
          </motion.div>

        </motion.div>
      </div>
    </div>
  );
}