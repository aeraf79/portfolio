// ============================================================
// src/App.jsx  —  Root component: navigation, page routing, footer
// ============================================================

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

// Styles
import "./App.css";

// Components
import ParticleBackground from "./components/ParticleBackground";

// Pages
import HomePage     from "./pages/HomePage";
import AboutPage    from "./pages/AboutPage";
import SkillsPage   from "./pages/SkillsPage";
import ProjectsPage from "./pages/ProjectsPage";
import EducationPage from "./pages/EducationPage";
import ContactPage  from "./pages/ContactPage";

// Utils
import { NAV_ITEMS }                  from "./utils/constants";
import { fadeInUp, staggerContainer } from "./utils/animations";

// ── Map nav label → page component ───────────────────────────
const PAGES = {
  Home:      HomePage,
  About:     AboutPage,
  Skills:    SkillsPage,
  Projects:  ProjectsPage,
  Education: EducationPage,
  Contact:   ContactPage,
};

// ─────────────────────────────────────────────────────────────

export default function App() {
  const [activePage, setActivePage] = useState("Home");
  const [scrolled,   setScrolled]   = useState(false);

  // Frosted navbar effect on scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const PageComponent = PAGES[activePage];

  return (
    <>
      {/* ── Fixed background layers (behind everything) ── */}
      <div className="bg-gradient" />
      <div className="bg-grid" />
      <ParticleBackground />

      {/* ── Navigation ── */}
      <motion.nav
        className={`nav ${scrolled ? "nav--scrolled" : ""}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="nav__inner">

          {/* Logo — clicking always goes back to Home */}
          <motion.div
            className="nav__logo"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActivePage("Home")}
          >
            <span className="nav__logo-a">A</span>
            <span className="nav__logo-b">A</span>
            {/* Underline animates in on hover via CSS */}
            <span className="nav__logo-underline" />
          </motion.div>

          {/* Nav buttons */}
          <motion.div
            className="nav__links"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            {NAV_ITEMS.map((item, idx) => (
              <motion.button
                key={item}
                className={`nav__btn ${activePage === item ? "nav__btn--active" : ""}`}
                variants={fadeInUp}
                transition={{ delay: idx * 0.05 }}
                onClick={() => setActivePage(item)}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {item}

                {/* Sliding indicator under the active nav item */}
                {activePage === item && (
                  <motion.div
                    className="nav__btn-indicator"
                    layoutId="activeNav"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </motion.button>
            ))}
          </motion.div>

        </div>
      </motion.nav>

      {/* ── Page content ── */}
      <motion.div
        key={activePage}          /* re-mounts on page change to trigger fade */
        className="page-wrapper"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <PageComponent />
      </motion.div>

      {/* ── Footer ── */}
      <motion.footer
        className="footer"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="footer__inner">

          {/* Name + role */}
          <div>
            <div className="footer__name">Aeraf Ansari</div>
            <div className="footer__role">Java Full Stack Developer</div>
          </div>

          {/* Copyright / location */}
          <div className="footer__meta">
            <span>© 2025 All Rights Reserved</span>
            <span>Mumbai, India</span>
            <span>Built with React</span>
          </div>

          {/* Scroll back to top */}
          <button
            className="footer__scroll-top"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            title="Back to top"
          >
            ↑
          </button>

        </div>
      </motion.footer>
    </>
  );
}