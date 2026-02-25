// ============================================================
// constants.js  —  All static data used across the portfolio
// ============================================================

export const NAV_ITEMS = [
  "Home",
  "About",
  "Skills",
  "Projects",
  "Education",
  "Contact",
];

// ── Skills ──────────────────────────────────────────────────
export const SKILLS = {
  "Programming Languages": ["Java", "JavaScript", "TypeScript", "SQL", "HTML5", "CSS3"],
  "Frameworks & Libraries": ["Spring Boot", "Spring MVC", "Hibernate/JPA", "React.js", "Next.js", "Bootstrap", "Tailwind CSS"],
  "Databases & Tools": ["MySQL", "PostgreSQL", "MongoDB", "MySQL Workbench", "PgAdmin"],
  "Development Tools": ["Git", "GitHub", "VS Code", "Eclipse", "Postman", "Docker"],
};

export const PROFICIENCY = [
  { skill: "Java",                  level: 90 },
  { skill: "Spring Boot",           level: 85 },
  { skill: "React.js",              level: 80 },
  { skill: "MySQL",                 level: 85 },
  { skill: "JavaScript",            level: 80 },
  { skill: "HTML/CSS",              level: 90 },
];

// ── Projects ─────────────────────────────────────────────────
export const PROJECTS = [
  {
    title:  "NGO & Donation Management System",
    tech:   "Java, Spring Boot, React, MySQL",
    color:  "#00f5a0",
    icon:   "🌱",
    github: "https://github.com/aeraf79/java_full_stack_ngo-project",
    live:   "",
    points: [
      "Full-stack web app for managing NGO operations and donation tracking",
      "Donor registration, donation processing, payment management, email service, and admin dashboard",
      "RESTful APIs with MVC architecture and Spring Data JPA",
    ],
  },
  {
    title:  "Bakery E-Commerce Platform",
    tech:   "Java, Spring Boot, React, MySQL, Redis, Razorpay",
    color:  "#f59e0b",
    icon:   "🍞",
    github: "https://github.com/aeraf79/java_full_stack_bakery-project",
    live:   "",
    points: [
      "Full-stack bakery shopping platform with product browsing, cart management, and order tracking",
      "JWT-based authentication, favourites, Razorpay payment integration, and email notifications",
      "RESTful APIs with Spring Security, Spring Data JPA, and a responsive React frontend",
    ],
  },
  {
    title:  "Bank Management System",
    tech:   "Java, OOP, Console Application",
    color:  "#00d2ff",
    icon:   "🏦",
    github: "https://github.com/aeraf79/bank-management-system",
    live:   "",
    points: [
      "Enterprise-grade banking system with multi-role access (Admin, Customer)",
      "Transaction management with ACID compliance and audit logging",
      "Real-time balance updates and transaction history with pagination",
    ],
  },
  {
    title:  "MyDictionary",
    tech:   "React, JavaScript, API Integration",
    color:  "#a78bfa",
    icon:   "📖",
    github: "https://github.com/aeraf79/Dictionary-App",
    live:   "",
    points: [
      "Dictionary app using React with real-time word lookup via external API",
      "Word definitions, pronunciations, synonyms, and examples",
      "Fully responsive design for all devices",
    ],
  },
  {
    title:  "First Flight Travel",
    tech:   "HTML, CSS, Bootstrap",
    color:  "#c5ce26",
    icon:   "✈️",
    github: "https://github.com/aeraf79/first_flight",
    live:   "",
    points: [
      "Responsive travel agency website showcasing tour packages",
      "Multi-page layout with Home, Packages, Services, and Contact pages",
      "Seamless navigation using Bootstrap",
    ],
  },
];

// ── Education ────────────────────────────────────────────────
export const EDUCATION = [
  {
    degree:       "Bachelor of Science in Information Technology",
    institution:  "Mumbai University",
    period:       "May 2021 – July 2024",
    score:        "CGPA: 8.13 / 10.00",
    icon:         "🎓",
    dotClass:     "education__dot--green",
    achievements: ["First Class with Distinction", "Academic Excellence Award"],
  },
  {
    degree:       "Higher Secondary Certificate (Science)",
    institution:  "Maharashtra College of Arts, Science & Commerce",
    period:       "August 2021",
    score:        "Percentage: 80%",
    icon:         "📜",
    dotClass:     "education__dot--purple",
    achievements: ["Merit Scholarship Holder", "Computer Science Topper"],
  },
];

// ── Contact links ─────────────────────────────────────────────
export const CONTACT_LINKS = [
  { icon: "📧", label: "Email",    value: "aeraf79@gmail.com",           link: "mailto:aeraf79@gmail.com" },
  { icon: "📱", label: "Phone",    value: "+91 7021882328",              link: "tel:+917021882328" },
  { icon: "📍", label: "Location", value: "Mumbai, India",               link: null },
  { icon: "💼", label: "LinkedIn", value: "linkedin.com/in/aeraf-ansari", link: "https://linkedin.com/in/aeraf-ansari" },
  { icon: "🐙", label: "GitHub",   value: "github.com/aeraf79",          link: "https://github.com/aeraf79" },
];

export const SOCIAL_LINKS = [
  { icon: "💼", name: "LinkedIn", link: "https://linkedin.com/in/aeraf-ansari" },
  { icon: "🐙", name: "GitHub",   link: "https://github.com/aeraf79" },
  { icon: "X", name: "Twitter",  link: "https://twitter.com/aeraf79" },
  { icon: "📧", name: "Email",    link: "mailto:aeraf79@gmail.com" },
];