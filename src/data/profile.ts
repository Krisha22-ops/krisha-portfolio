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
  title: "Data Technologist & Analyst",
  tagline: "Turning raw data into decision-ready insights & intelligent systems.",
  shortBio:
    "Data technologist specializing in Data Analytics, Business Intelligence, and AI/ML solutions. I craft interactive dashboards, data pipelines, and graph-based intelligence systems.",
  fullBio: [
    "I'm a passionate data professional dedicated to bridging the gap between raw data and impactful business decisions.",
    "My expertise spans SQL databases, Python data science ecosystems, Power BI dashboarding, graph analytics (Neo4j), and vector search engine integration (Qdrant).",
    "Whether designing mutual fund analytics platforms, e-commerce supply chain intelligence dashboards, or semantic NLP tools, I focus on performance, clarity, and visual elegance."
  ],
  email: "krishajariwala@example.com", // Editable email
  location: "India",
  status: "Open to Data Analytics, BI & AI/ML opportunities",
  socials: [
    { name: "GitHub", url: "https://github.com", icon: "github" },
    { name: "LinkedIn", url: "https://linkedin.com", icon: "linkedin" },
    { name: "Twitter/X", url: "https://x.com", icon: "twitter" },
    { name: "Email", url: "mailto:krishajariwala@example.com", icon: "email" }
  ],
  skills: [
    {
      category: "Analytics & BI",
      skills: ["Power BI", "SQL (PostgreSQL)", "Tableau", "DAX", "Data Modeling", "ETL Pipelines"]
    },
    {
      category: "Data Science & AI",
      skills: ["Python", "Pandas & NumPy", "NLP (NLTK, Spacy)", "Machine Learning", "Qdrant Vector DB"]
    },
    {
      category: "Database & Engineering",
      skills: ["PostgreSQL", "Neo4j Graph DB", "Data Warehousing", "Git & GitHub", "REST APIs"]
    },
    {
      category: "Web & Tools",
      skills: ["Next.js", "TypeScript", "Tailwind CSS", "React", "Figma"]
    }
  ],
  experience: [
    {
      role: "Data Analytics & BI Consultant",
      company: "Independent Projects",
      period: "2025 — Present",
      description: "Building production-ready dashboards, relational database schemas, and AI retrieval systems.",
      highlights: [
        "Architected FundIQ mutual fund analytics suite processing large financial datasets.",
        "Built Olist E-Commerce end-to-end intelligence stack comparing SQL vs Neo4j graph queries.",
        "Developed TrialSense AI knowledge graph combining semantic search with Neo4j."
      ]
    },
    {
      role: "Data Science & NLP Engineer",
      company: "Academic & Personal Lab",
      period: "2024 — 2025",
      description: "Conducted exploratory data analysis, sentiment analysis, and graph modeling.",
      highlights: [
        "Analyzed Wikipedia editing patterns and editorial conflict dynamics.",
        "Trained sentiment classification models on social media interaction datasets."
      ]
    }
  ]
};
