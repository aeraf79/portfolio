// ============================================================
// src/pages/ContactPage.jsx
// ============================================================

import { useRef, useState }           from "react";
import { motion, useInView }          from "framer-motion";
import SectionTitle                   from "../components/SectionTitle";
import { CONTACT_LINKS, SOCIAL_LINKS } from "../utils/constants";
import { fadeInUp, staggerContainer } from "../utils/animations";

export default function ContactPage() {
  const [formData,     setFormData]     = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted,  setIsSubmitted]  = useState(false);

  const ref      = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  // Returns an onChange handler that updates only the given field
  const updateField = (field) => (e) =>
    setFormData((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulated delay — replace with a real API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: "", email: "", message: "" });

    // Auto-hide success message after 5 s
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <div id="contact" ref={ref} className="page-section page-section--medium">

      <SectionTitle
        title="Let's Connect"
        accent="CONTACT ME"
        subtitle="Interested in working together? I'm always open to discussing new opportunities."
      />

      <motion.div
        className="contact__grid"
        variants={staggerContainer}
        initial="initial"
        animate={isInView ? "animate" : "initial"}
      >
        {/* ── Left: contact info ── */}
        <motion.div variants={fadeInUp}>
          <h3 className="contact__heading">Get in Touch</h3>

          {/* Contact detail rows */}
          <div className="contact__items">
            {CONTACT_LINKS.map((item) => (
              <div key={item.label} className="contact__item">
                <div className="contact__item-icon-wrap">{item.icon}</div>

                <div>
                  <div className="contact__item-label">{item.label}</div>
                  {item.link ? (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contact__item-value"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <div className="contact__item-value">{item.value}</div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Social icon row */}
          <div className="contact__social-panel">
            <div className="contact__social-label">Social Profiles</div>
            <div className="contact__social-links">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.name}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact__social-link"
                  title={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* ── Right: contact form ── */}
        <motion.div variants={fadeInUp}>
          <div className="contact__form-card">
            <h3 className="contact__form-heading">Send a Message</h3>

            {isSubmitted ? (
              /* Success state */
              <motion.div
                className="contact__success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <div className="contact__success-icon">🎉</div>
                <h4 className="contact__success-title">Message Sent!</h4>
                <p className="contact__success-text">
                  Thanks for reaching out. I'll get back to you soon.
                </p>
              </motion.div>
            ) : (
              /* Form */
              <form onSubmit={handleSubmit}>

                <div className="contact__form-group">
                  <label className="contact__form-label">Your Name</label>
                  <input
                    type="text"
                    className="contact__form-input"
                    value={formData.name}
                    onChange={updateField("name")}
                    required
                  />
                </div>

                <div className="contact__form-group">
                  <label className="contact__form-label">Email Address</label>
                  <input
                    type="email"
                    className="contact__form-input"
                    value={formData.email}
                    onChange={updateField("email")}
                    required
                  />
                </div>

                <div className="contact__form-group">
                  <label className="contact__form-label">Your Message</label>
                  <textarea
                    rows={5}
                    className="contact__form-textarea"
                    value={formData.message}
                    onChange={updateField("message")}
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="contact__form-submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <span className="contact__spinner" />
                      Sending…
                    </>
                  ) : (
                    <>Send Message <span>→</span></>
                  )}
                </button>

              </form>
            )}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}