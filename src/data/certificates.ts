export type Certificate = {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  credentialUrl?: string;
  credentialId?: string;
  skills: string[];
  category: "Data Analytics" | "Business Intelligence" | "AI & ML" | "Database & Engineering" | "General";
  featured: boolean;
  image?: string;
};

export const certificates: Certificate[] = [
  {
    id: "power-bi-data-analyst",
    title: "Microsoft Certified: Power BI Data Analyst Associate",
    issuer: "Microsoft",
    issueDate: "2026",
    credentialUrl: "https://learn.microsoft.com",
    credentialId: "MS-PBI-984321",
    skills: ["Power BI", "DAX", "Data Modeling", "Power Query"],
    category: "Business Intelligence",
    featured: true,
  },
  {
    id: "google-data-analytics",
    title: "Google Data Analytics Professional Certificate",
    issuer: "Google / Coursera",
    issueDate: "2025",
    credentialUrl: "https://coursera.org",
    credentialId: "GOOG-DA-554123",
    skills: ["SQL", "R", "Tableau", "Data Cleaning", "Data Visualization"],
    category: "Data Analytics",
    featured: true,
  },
  {
    id: "ibm-data-science",
    title: "IBM Data Science Professional Specialization",
    issuer: "IBM",
    issueDate: "2025",
    credentialUrl: "https://coursera.org",
    credentialId: "IBM-DS-887129",
    skills: ["Python", "Pandas", "Machine Learning", "Scikit-Learn", "SQL"],
    category: "AI & ML",
    featured: true,
  },
  {
    id: "neo4j-certified-professional",
    title: "Neo4j Certified Professional",
    issuer: "GraphAcademy (Neo4j)",
    issueDate: "2025",
    credentialUrl: "https://graphacademy.neo4j.com",
    credentialId: "NEO-772109",
    skills: ["Neo4j", "Cypher Query Language", "Graph Databases", "Knowledge Graphs"],
    category: "Database & Engineering",
    featured: true,
  },
  {
    id: "postgresql-database-administration",
    title: "PostgreSQL Advanced Queries & Optimization",
    issuer: "DataCamp",
    issueDate: "2024",
    credentialUrl: "https://datacamp.com",
    credentialId: "DC-PG-110293",
    skills: ["PostgreSQL", "Query Optimization", "Database Indexing", "Stored Procedures"],
    category: "Database & Engineering",
    featured: false,
  },
  {
    id: "nlp-specialization",
    title: "Natural Language Processing Specialization",
    issuer: "DeepLearning.AI",
    issueDate: "2025",
    credentialUrl: "https://coursera.org",
    credentialId: "DLAI-NLP-309182",
    skills: ["NLP", "Vector Embeddings", "Text Classification", "Sentiment Analysis"],
    category: "AI & ML",
    featured: false,
  }
];
