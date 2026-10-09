export type SocialLink = {
  name: string;
  url: string;
  icon: string;
};

export type SkillGroup = {
  category: string;
  skills: string[];
};

export type Profile = {
  name: string;
  title: string;
  tagline: string;
  shortBio: string;
  fullBio: string[];
  email: string;
  location: string;
  status: string;
  socials: SocialLink[];
  skills: SkillGroup[];
  experience: {
    role: string;
    company: string;
    period: string;
    description: string;
    highlights: string[];
  }[];
};

export const profile: Profile = {
  name: "Krisha Jariwala",
  title: "Data Analytics & BI Specialist",
  tagline: "Turning complex data into decision-ready business intelligence & AI solutions.",
  shortBio:
    "Data Analytics, Business Intelligence & AI/ML technologist. Specialized in Power BI, SQL, Microsoft Fabric, Python, and data pipeline modeling.",
  fullBio: [
    "I'm Krisha Jariwala, a data technologist passionate about transforming raw data into visual narratives and intelligent decision frameworks.",
    "My expertise spans SQL database design, Power BI dashboard development, Microsoft Fabric end-to-end analytics, Python data science pipelines, and AI/ML model integration.",
    "I have completed certifications across Microsoft, IBM, HackerRank, and Forage (Tata & Deloitte Data Analytics simulations), demonstrating hands-on proficiency in solving real-world business challenges."
  ],
  email: "krisha22015@gmail.com",
  location: "India",
  status: "Open to Data Analytics, Power BI & AI/ML opportunities",
  socials: [
    { name: "GitHub", url: "https://github.com/Krisha22-ops", icon: "github" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/krisha-jariwala-43a595253/", icon: "linkedin" },
    { name: "Email", url: "mailto:krisha22015@gmail.com", icon: "email" }
  ],
  skills: [
    {
      category: "Analytics & BI",
      skills: ["Power BI", "SQL", "Microsoft Fabric", "DAX", "Data Modeling", "Power Query (ETL)"]
    },
    {
      category: "Data Science & AI",
      skills: ["Python", "Pandas & NumPy", "Machine Learning", "GenAI Analytics", "NLP"]
    },
    {
      category: "Database & Cloud",
      skills: ["PostgreSQL", "Neo4j Graph DB", "Azure Data Integration", "Git & GitHub"]
    },
    {
      category: "Web & Design",
      skills: ["Next.js", "TypeScript", "Tailwind CSS", "React"]
    }
  ],
  experience: [
    {
      role: "Data Analytics & BI Specialist",
      company: "Independent Projects & Industry Simulations",
      period: "2025 — Present",
      description: "Building production-grade dashboards, relational models, and GenAI-powered data analytics simulations.",
      highlights: [
        "Completed Tata GenAI Powered Data Analytics & Deloitte Australia Data Analytics simulations on Forage.",
        "Architected FundIQ mutual fund analytics suite processing large financial datasets.",
        "Built Olist E-Commerce intelligence platform comparing SQL vs Neo4j graph queries."
      ]
    },
    {
      role: "AI & ML Technologist",
      company: "Advanced Certifications & Academic Projects",
      period: "2024 — 2025",
      description: "Earned IBM Advanced AI/ML Certification and Microsoft Power BI & Fabric technical credentials.",
      highlights: [
        "Developed TrialSense clinical trial intelligence system combining graph DBs and vector retrieval.",
        "Created Wikipedia Edit Wars analysis using statistical collision and sentiment modeling."
      ]
    }
  ]
};
