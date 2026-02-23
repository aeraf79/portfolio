import { useState, useEffect, useRef } from "react";

const NAV_ITEMS = ["Home", "About", "Skills", "Projects", "Education", "Contact"];

const SKILLS = {
  "Programming Languages": ["Java", "JavaScript", "SQL", "HTML5", "CSS3"],
  "Frameworks & Libraries": ["Spring Boot", "Spring MVC", "Hibernate/JPA", "React.js", "Bootstrap"],
  "Databases & Tools": ["MySQL", "MySQL Workbench"],
  "Development Tools": ["Git", "GitHub", "Visual Studio Code", "Eclipse"],
};

const PROJECTS = [
  {
    title: "NGO & Donation Management System",
    tech: "Java, Spring Boot, React, MySQL",
    color: "#00f5a0",
    icon: "🌱",
    points: [
      "Full-stack web app for managing NGO operations and donation tracking",
      "Donor registration, donation processing, payment management, email service, and admin dashboard",
      "RESTful APIs with MVC architecture and Spring Data JPA",
    ],
  },
  {
    title: "Bakery E-Commerce Platform",
    tech: "Java, Spring Boot, React, MySQL, Razorpay",
    color: "#f97316",
    icon: "🍞",
    points: [
      "Full-stack bakery shopping platform with product browsing, cart management, and order tracking",
      "JWT-based authentication, favourites, Razorpay payment integration, and email notifications",
      "RESTful APIs with Spring Security, Spring Data JPA, and a responsive React frontend",
    ],
  },
  {
    title: "Bank Management System",
    tech: "Java, OOP, Console Application",
    color: "#00d2ff",
    icon: "🏦",
    points: [
      "Console-based banking system with menu-driven interface",
      "Account creation, deposits, withdrawals, balance inquiry, and fund transfers",
      "OOP principles: inheritance, encapsulation, and polymorphism",
    ],
  },
  {
    title: "MyDictionary",
    tech: "React, JavaScript, API Integration",
    color: "#a78bfa",
    icon: "📖",
    points: [
      "Dictionary app using React with real-time word lookup via external API",
      "Word definitions, pronunciations, synonyms, and examples",
      "Fully responsive design for all devices",
    ],
  },
  {
    title: "First Flight",
    tech: "HTML, CSS, Bootstrap",
    color: "#f59e0b",
    icon: "✈️",
    points: [
      "Responsive travel agency website showcasing tour packages",
      "Multi-page layout with Home, Packages, Services, and Contact pages",
      "Seamless navigation using Bootstrap",
    ],
  },
];

const EDUCATION = [
  {
    degree: "Bachelor of Science in Information Technology",
    institution: "Mumbai University",
    period: "May 2021 – July 2024",
    score: "CGPA: 8.13/10.00",
    icon: "🎓",
  },
  {
    degree: "Higher Secondary Certificate",
    institution: "Maharashtra College of Art, Science and Commerce",
    period: "August 2021",
    score: "Score: 80%",
    icon: "📜",
  },
];

// Animated counter hook
function useCounter(target, duration = 2000) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  useEffect(() => {
    if (!started) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [started, target, duration]);
  return [count, () => setStarted(true)];
}

// Particle background
function ParticleBg() {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animId;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const particles = Array.from({ length: 60 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 2 + 0.5,
      dx: (Math.random() - 0.5) * 0.4,
      dy: (Math.random() - 0.5) * 0.4,
      opacity: Math.random() * 0.5 + 0.1,
    }));
    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0,245,160,${p.opacity})`;
        ctx.fill();
        p.x += p.dx; p.y += p.dy;
        if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
      });
      animId = requestAnimationFrame(draw);
    }
    draw();
    const resize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; };
    window.addEventListener("resize", resize);
    return () => { cancelAnimationFrame(animId); window.removeEventListener("resize", resize); };
  }, []);
  return <canvas ref={canvasRef} style={{ position: "fixed", top: 0, left: 0, zIndex: 0, pointerEvents: "none" }} />;
}

// ─── PAGES ───────────────────────────────────────────────────────────────────

function HomePage() {
  const [visible, setVisible] = useState(false);
  useEffect(() => { setTimeout(() => setVisible(true), 100); }, []);
  return (
    <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", position: "relative", padding: "2rem" }}>
      <div style={{ textAlign: "center", zIndex: 1, opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(40px)", transition: "all 1s cubic-bezier(.16,1,.3,1)" }}>
        <div style={{ display: "inline-block", background: "rgba(0,245,160,0.1)", border: "1px solid rgba(0,245,160,0.3)", borderRadius: "100px", padding: "6px 20px", marginBottom: "1.5rem", fontSize: "0.8rem", letterSpacing: "3px", color: "#00f5a0", textTransform: "uppercase" }}>
          Available for Work
        </div>
        <h1 style={{ fontFamily: "'Space Mono', monospace", fontSize: "clamp(3rem, 8vw, 7rem)", fontWeight: 700, margin: "0 0 0.5rem", lineHeight: 1, background: "linear-gradient(135deg, #fff 0%, #00f5a0 50%, #00d2ff 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
          AERAF<br />ANSARI
        </h1>
        <p style={{ fontFamily: "'Space Mono', monospace", fontSize: "clamp(0.9rem, 2vw, 1.2rem)", color: "#00f5a0", letterSpacing: "4px", marginBottom: "2rem", opacity: 0.8 }}>
          JAVA FULL STACK DEVELOPER
        </p>
        <p style={{ maxWidth: "560px", margin: "0 auto 3rem", color: "rgba(255,255,255,0.6)", lineHeight: 1.8, fontSize: "1rem" }}>
          BBSc IT graduate crafting scalable web applications with Java, Spring Boot, React & MySQL. 
          Building robust backends and seamless frontends.
        </p>
        <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
          {[
            { label: "📧 aeraf79@gmail.com", href: "mailto:aeraf79@gmail.com" },
            { label: "💼 LinkedIn", href: "https://linkedin.com/in/aeraf-ansari" },
            { label: "🐙 GitHub", href: "https://github.com/aeraf79" },
          ].map(link => (
            <a key={link.label} href={link.href} style={{ padding: "10px 20px", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.15)", borderRadius: "8px", color: "rgba(255,255,255,0.8)", textDecoration: "none", fontSize: "0.85rem", transition: "all 0.3s", cursor: "pointer" }}
              onMouseEnter={e => { e.target.style.background = "rgba(0,245,160,0.1)"; e.target.style.borderColor = "#00f5a0"; e.target.style.color = "#00f5a0"; }}
              onMouseLeave={e => { e.target.style.background = "rgba(255,255,255,0.05)"; e.target.style.borderColor = "rgba(255,255,255,0.15)"; e.target.style.color = "rgba(255,255,255,0.8)"; }}>
              {link.label}
            </a>
          ))}
        </div>
        {/* Stats */}
        <div style={{ display: "flex", gap: "3rem", justifyContent: "center", marginTop: "4rem", flexWrap: "wrap" }}>
          {[["5+", "Projects"], ["8.13", "CGPA"], ["2025", "Certified"]].map(([n, l]) => (
            <div key={l} style={{ textAlign: "center" }}>
              <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "2.5rem", fontWeight: 700, color: "#00f5a0" }}>{n}</div>
              <div style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.8rem", letterSpacing: "2px", textTransform: "uppercase" }}>{l}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function AboutPage() {
  return (
    <div style={{ minHeight: "100vh", padding: "8rem 2rem 4rem", maxWidth: "900px", margin: "0 auto" }}>
      <SectionTitle title="About Me" accent="WHO I AM" />
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "start", marginTop: "3rem" }}>
        <div>
          <div style={{ width: "100%", aspectRatio: "1", background: "linear-gradient(135deg, rgba(0,245,160,0.15), rgba(0,210,255,0.15))", borderRadius: "20px", border: "1px solid rgba(0,245,160,0.2)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "6rem", marginBottom: "1.5rem" }}>
            👨‍💻
          </div>
          <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "12px", padding: "1.2rem" }}>
            <div style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.75rem", letterSpacing: "2px", marginBottom: "0.5rem" }}>LOCATION</div>
            <div style={{ color: "#fff", fontSize: "0.95rem" }}>📍 Mumbai, Maharashtra 400011, India</div>
          </div>
        </div>
        <div>
          <h3 style={{ fontFamily: "'Space Mono', monospace", color: "#00f5a0", fontSize: "1.4rem", marginBottom: "1.5rem" }}>Recent BBSc IT Graduate</h3>
          <p style={{ color: "rgba(255,255,255,0.7)", lineHeight: 1.9, marginBottom: "1.5rem" }}>
            I'm a certified Java Full Stack Developer with hands-on expertise in building scalable web applications. My passion lies in bridging the gap between robust back-end architecture and intuitive front-end experiences.
          </p>
          <p style={{ color: "rgba(255,255,255,0.7)", lineHeight: 1.9, marginBottom: "2rem" }}>
            Proficient in object-oriented programming principles, I thrive in dynamic teams where clean code and thoughtful design intersect. I completed an intensive Java Full Stack Development course at IT Vedant Pvt Ltd, and I'm eager to contribute to impactful projects.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
            {[["🎯", "Full Stack Dev"], ["☕", "Java Expert"], ["⚛️", "React.js"], ["🗄️", "MySQL"]].map(([icon, label]) => (
              <div key={label} style={{ background: "rgba(0,245,160,0.05)", border: "1px solid rgba(0,245,160,0.15)", borderRadius: "8px", padding: "0.8rem 1rem", display: "flex", alignItems: "center", gap: "0.6rem" }}>
                <span style={{ fontSize: "1.2rem" }}>{icon}</span>
                <span style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.85rem" }}>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function SkillsPage() {
  const [active, setActive] = useState(null);
  return (
    <div style={{ minHeight: "100vh", padding: "8rem 2rem 4rem", maxWidth: "1000px", margin: "0 auto" }}>
      <SectionTitle title="Technical Skills" accent="MY TOOLKIT" />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1.5rem", marginTop: "3rem" }}>
        {Object.entries(SKILLS).map(([category, items]) => (
          <div key={category}
            style={{ background: active === category ? "rgba(0,245,160,0.08)" : "rgba(255,255,255,0.03)", border: `1px solid ${active === category ? "rgba(0,245,160,0.4)" : "rgba(255,255,255,0.08)"}`, borderRadius: "16px", padding: "1.5rem", cursor: "pointer", transition: "all 0.3s" }}
            onMouseEnter={() => setActive(category)}
            onMouseLeave={() => setActive(null)}>
            <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.75rem", color: "#00f5a0", letterSpacing: "2px", marginBottom: "1rem", textTransform: "uppercase" }}>{category}</div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
              {items.map(skill => (
                <span key={skill} style={{ background: "rgba(0,245,160,0.1)", border: "1px solid rgba(0,245,160,0.2)", borderRadius: "100px", padding: "4px 12px", fontSize: "0.78rem", color: "rgba(255,255,255,0.8)" }}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Skill bars */}
      <div style={{ marginTop: "4rem" }}>
        <h3 style={{ fontFamily: "'Space Mono', monospace", color: "rgba(255,255,255,0.5)", fontSize: "0.8rem", letterSpacing: "3px", marginBottom: "2rem" }}>PROFICIENCY</h3>
        {[["Java", 90], ["Spring Boot", 85], ["React.js", 80], ["MySQL", 82], ["JavaScript", 78], ["HTML/CSS", 88]].map(([skill, pct]) => (
          <div key={skill} style={{ marginBottom: "1.2rem" }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.4rem" }}>
              <span style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.9rem" }}>{skill}</span>
              <span style={{ color: "#00f5a0", fontFamily: "'Space Mono', monospace", fontSize: "0.8rem" }}>{pct}%</span>
            </div>
            <div style={{ background: "rgba(255,255,255,0.05)", borderRadius: "100px", height: "6px", overflow: "hidden" }}>
              <div style={{ width: `${pct}%`, height: "100%", background: "linear-gradient(90deg, #00f5a0, #00d2ff)", borderRadius: "100px", transition: "width 1s ease" }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ProjectsPage() {
  const [hover, setHover] = useState(null);
  return (
    <div style={{ minHeight: "100vh", padding: "8rem 2rem 4rem", maxWidth: "1100px", margin: "0 auto" }}>
      <SectionTitle title="Projects" accent="WHAT I BUILT" />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(480px, 1fr))", gap: "2rem", marginTop: "3rem" }}>
        {PROJECTS.map((p, i) => (
          <div key={p.title}
            style={{ background: hover === i ? `rgba(${hexToRgb(p.color)},0.07)` : "rgba(255,255,255,0.03)", border: `1px solid ${hover === i ? p.color + "55" : "rgba(255,255,255,0.08)"}`, borderRadius: "20px", padding: "2rem", transition: "all 0.4s", cursor: "default", position: "relative", overflow: "hidden" }}
            onMouseEnter={() => setHover(i)}
            onMouseLeave={() => setHover(null)}>
            <div style={{ position: "absolute", top: "-20px", right: "-20px", fontSize: "5rem", opacity: 0.08 }}>{p.icon}</div>
            <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1rem" }}>
              <span style={{ fontSize: "2rem" }}>{p.icon}</span>
              <div>
                <h3 style={{ fontFamily: "'Space Mono', monospace", color: "#fff", fontSize: "1rem", margin: 0, lineHeight: 1.3 }}>{p.title}</h3>
                <span style={{ fontSize: "0.75rem", color: p.color, opacity: 0.9 }}>{p.tech}</span>
              </div>
              <a href="https://github.com/aeraf79" style={{ marginLeft: "auto", color: p.color, fontSize: "0.75rem", textDecoration: "none", border: `1px solid ${p.color}33`, padding: "4px 10px", borderRadius: "6px" }}>GitHub →</a>
            </div>
            <ul style={{ margin: 0, paddingLeft: "1.2rem" }}>
              {p.points.map(pt => (
                <li key={pt} style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.85rem", lineHeight: 1.7, marginBottom: "0.3rem" }}>{pt}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

function EducationPage() {
  return (
    <div style={{ minHeight: "100vh", padding: "8rem 2rem 4rem", maxWidth: "800px", margin: "0 auto" }}>
      <SectionTitle title="Education" accent="MY JOURNEY" />
      <div style={{ marginTop: "3rem", position: "relative" }}>
        <div style={{ position: "absolute", left: "28px", top: 0, bottom: 0, width: "1px", background: "linear-gradient(180deg, #00f5a0, #00d2ff, transparent)" }} />
        {EDUCATION.map((edu, i) => (
          <div key={edu.degree} style={{ display: "flex", gap: "2rem", marginBottom: "3rem", position: "relative" }}>
            <div style={{ width: "56px", height: "56px", borderRadius: "50%", background: "linear-gradient(135deg, rgba(0,245,160,0.2), rgba(0,210,255,0.2))", border: "2px solid rgba(0,245,160,0.4)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.5rem", flexShrink: 0, zIndex: 1 }}>
              {edu.icon}
            </div>
            <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "16px", padding: "1.5rem 2rem", flex: 1 }}>
              <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "0.5rem", marginBottom: "0.5rem" }}>
                <h3 style={{ fontFamily: "'Space Mono', monospace", color: "#fff", margin: 0, fontSize: "1rem" }}>{edu.degree}</h3>
                <span style={{ fontFamily: "'Space Mono', monospace", color: "#00f5a0", fontSize: "0.8rem" }}>{edu.period}</span>
              </div>
              <div style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.85rem", marginBottom: "0.5rem" }}>{edu.institution}</div>
              <span style={{ background: "rgba(0,245,160,0.1)", border: "1px solid rgba(0,245,160,0.2)", borderRadius: "100px", padding: "3px 12px", fontSize: "0.78rem", color: "#00f5a0" }}>{edu.score}</span>
            </div>
          </div>
        ))}

        {/* Training & Certification */}
        <div style={{ display: "flex", gap: "2rem", marginBottom: "3rem", position: "relative" }}>
          <div style={{ width: "56px", height: "56px", borderRadius: "50%", background: "linear-gradient(135deg, rgba(167,139,250,0.2), rgba(0,210,255,0.2))", border: "2px solid rgba(167,139,250,0.4)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.5rem", flexShrink: 0, zIndex: 1 }}>🏋️</div>
          <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "16px", padding: "1.5rem 2rem", flex: 1 }}>
            <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "0.5rem", marginBottom: "0.5rem" }}>
              <h3 style={{ fontFamily: "'Space Mono', monospace", color: "#fff", margin: 0, fontSize: "1rem" }}>Java Full Stack Web Development</h3>
              <span style={{ fontFamily: "'Space Mono', monospace", color: "#a78bfa", fontSize: "0.8rem" }}>May 2025 – Dec 2025</span>
            </div>
            <div style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.85rem", marginBottom: "0.8rem" }}>IT Vedant Pvt Ltd</div>
            <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.85rem", lineHeight: 1.7, margin: 0 }}>
              Intensive Java Full Stack Development course with hands-on experience in Java, Spring Boot, MySQL, React, and responsive front-end technologies.
            </p>
          </div>
        </div>

        <div style={{ display: "flex", gap: "2rem", position: "relative" }}>
          <div style={{ width: "56px", height: "56px", borderRadius: "50%", background: "linear-gradient(135deg, rgba(245,158,11,0.2), rgba(0,245,160,0.2))", border: "2px solid rgba(245,158,11,0.4)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.5rem", flexShrink: 0, zIndex: 1 }}>🏆</div>
          <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "16px", padding: "1.5rem 2rem", flex: 1 }}>
            <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "0.5rem", marginBottom: "0.5rem" }}>
              <h3 style={{ fontFamily: "'Space Mono', monospace", color: "#fff", margin: 0, fontSize: "1rem" }}>Java Full Stack Developer</h3>
              <span style={{ fontFamily: "'Space Mono', monospace", color: "#f59e0b", fontSize: "0.8rem" }}>Dec 2025</span>
            </div>
            <div style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.85rem" }}>IT Vedant Pvt Ltd — Certification</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  return (
    <div style={{ minHeight: "100vh", padding: "8rem 2rem 4rem", maxWidth: "700px", margin: "0 auto" }}>
      <SectionTitle title="Contact" accent="GET IN TOUCH" />
      <p style={{ color: "rgba(255,255,255,0.5)", marginTop: "1rem", marginBottom: "3rem" }}>
        Interested in working together? I'm open to full-time roles and freelance projects.
      </p>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "3rem" }}>
        {[["📧", "Email", "aeraf79@gmail.com"], ["📍", "Location", "Mumbai, India"], ["💼", "LinkedIn", "linkedin.com/in/aeraf-ansari"], ["🐙", "GitHub", "github.com/aeraf79"], ["📱", "Phone", "+91 7021882328"]].map(([icon, label, value]) => (
          <div key={label} style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "12px", padding: "1rem 1.2rem" }}>
            <div style={{ fontSize: "1.2rem", marginBottom: "0.3rem" }}>{icon}</div>
            <div style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.7rem", letterSpacing: "2px", textTransform: "uppercase" }}>{label}</div>
            <div style={{ color: "rgba(255,255,255,0.8)", fontSize: "0.85rem", marginTop: "0.2rem" }}>{value}</div>
          </div>
        ))}
      </div>
      {sent ? (
        <div style={{ background: "rgba(0,245,160,0.1)", border: "1px solid rgba(0,245,160,0.3)", borderRadius: "12px", padding: "2rem", textAlign: "center", color: "#00f5a0" }}>
          ✅ Thanks! Message noted. (Connect via email directly!)
        </div>
      ) : (
        <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "20px", padding: "2rem" }}>
          {["name", "email"].map(field => (
            <div key={field} style={{ marginBottom: "1rem" }}>
              <label style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.75rem", letterSpacing: "2px", textTransform: "uppercase", display: "block", marginBottom: "0.4rem" }}>{field}</label>
              <input type={field === "email" ? "email" : "text"} value={form[field]} onChange={e => setForm({ ...form, [field]: e.target.value })}
                style={{ width: "100%", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "8px", padding: "0.8rem 1rem", color: "#fff", fontSize: "0.9rem", outline: "none", boxSizing: "border-box" }} />
            </div>
          ))}
          <div style={{ marginBottom: "1.5rem" }}>
            <label style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.75rem", letterSpacing: "2px", textTransform: "uppercase", display: "block", marginBottom: "0.4rem" }}>message</label>
            <textarea value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} rows={5}
              style={{ width: "100%", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "8px", padding: "0.8rem 1rem", color: "#fff", fontSize: "0.9rem", outline: "none", resize: "vertical", boxSizing: "border-box" }} />
          </div>
          <button onClick={() => setSent(true)}
            style={{ width: "100%", background: "linear-gradient(135deg, #00f5a0, #00d2ff)", border: "none", borderRadius: "8px", padding: "0.9rem", color: "#000", fontFamily: "'Space Mono', monospace", fontWeight: 700, fontSize: "0.9rem", cursor: "pointer", letterSpacing: "2px" }}>
            SEND MESSAGE →
          </button>
        </div>
      )}
    </div>
  );
}

// ─── SHARED COMPONENTS ────────────────────────────────────────────────────────

function SectionTitle({ title, accent }) {
  return (
    <div>
      <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.7rem", color: "#00f5a0", letterSpacing: "4px", marginBottom: "0.5rem" }}>{accent}</div>
      <h2 style={{ fontFamily: "'Space Mono', monospace", fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 700, color: "#fff", margin: 0, lineHeight: 1 }}>{title}</h2>
      <div style={{ width: "60px", height: "3px", background: "linear-gradient(90deg, #00f5a0, #00d2ff)", borderRadius: "100px", marginTop: "1rem" }} />
    </div>
  );
}

function hexToRgb(hex) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `${r},${g},${b}`;
}

// ─── MAIN APP ─────────────────────────────────────────────────────────────────

const PAGES = { Home: HomePage, About: AboutPage, Skills: SkillsPage, Projects: ProjectsPage, Education: EducationPage, Contact: ContactPage };

export default function App() {
  const [activePage, setActivePage] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const PageComponent = PAGES[activePage];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=DM+Sans:wght@300;400;500&display=swap');
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { background: #080c10; color: #fff; font-family: 'DM Sans', sans-serif; }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: #080c10; }
        ::-webkit-scrollbar-thumb { background: #00f5a0; border-radius: 100px; }
        @media (max-width: 600px) {
          .grid-2 { grid-template-columns: 1fr !important; }
          .grid-proj { grid-template-columns: 1fr !important; }
        }
      `}</style>

      {/* Animated background grid */}
      <div style={{ position: "fixed", inset: 0, backgroundImage: "linear-gradient(rgba(0,245,160,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,245,160,0.03) 1px, transparent 1px)", backgroundSize: "50px 50px", zIndex: 0 }} />
      <ParticleBg />

      {/* Glow orbs */}
      <div style={{ position: "fixed", width: "400px", height: "400px", borderRadius: "50%", background: "radial-gradient(circle, rgba(0,245,160,0.06), transparent)", top: "-100px", right: "-100px", zIndex: 0, pointerEvents: "none" }} />
      <div style={{ position: "fixed", width: "300px", height: "300px", borderRadius: "50%", background: "radial-gradient(circle, rgba(0,210,255,0.05), transparent)", bottom: "10%", left: "-50px", zIndex: 0, pointerEvents: "none" }} />

      {/* Navbar */}
      <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, padding: "1rem 2rem", display: "flex", alignItems: "center", justifyContent: "space-between", background: scrolled ? "rgba(8,12,16,0.9)" : "transparent", backdropFilter: scrolled ? "blur(20px)" : "none", borderBottom: scrolled ? "1px solid rgba(255,255,255,0.05)" : "none", transition: "all 0.4s" }}>
        <div style={{ fontFamily: "'Space Mono', monospace", fontWeight: 700, fontSize: "1.1rem", color: "#00f5a0", letterSpacing: "2px", cursor: "pointer" }} onClick={() => setActivePage("Home")}>
          AA<span style={{ color: "rgba(255,255,255,0.3)" }}>.</span>DEV
        </div>

        {/* Desktop nav */}
        <div style={{ display: "flex", gap: "0.5rem" }}>
          {NAV_ITEMS.map(item => (
            <button key={item} onClick={() => setActivePage(item)}
              style={{ background: activePage === item ? "rgba(0,245,160,0.1)" : "transparent", border: activePage === item ? "1px solid rgba(0,245,160,0.3)" : "1px solid transparent", borderRadius: "8px", padding: "6px 14px", color: activePage === item ? "#00f5a0" : "rgba(255,255,255,0.5)", fontFamily: "'Space Mono', monospace", fontSize: "0.75rem", cursor: "pointer", transition: "all 0.3s", letterSpacing: "1px" }}>
              {item}
            </button>
          ))}
        </div>
      </nav>

      {/* Page content */}
      <div style={{ position: "relative", zIndex: 1, minHeight: "100vh" }}>
        <PageComponent key={activePage} />
      </div>

      {/* Footer */}
      <footer style={{ position: "relative", zIndex: 1, textAlign: "center", padding: "2rem", borderTop: "1px solid rgba(255,255,255,0.05)", color: "rgba(255,255,255,0.3)", fontSize: "0.8rem", fontFamily: "'Space Mono', monospace" }}>
        © 2025 Aeraf Ansari · Mumbai, India · Built with React
      </footer>
    </>
  );
}