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
    id: "sql-basic-hackerrank",
    title: "SQL (Basic) Certificate",
    issuer: "HackerRank",
    issueDate: "Apr 2026",
    credentialUrl: "https://www.hackerrank.com/certificates/35d3245e6040",
    skills: ["SQL", "Relational Queries", "Data Filtering"],
    category: "Database & Engineering",
    featured: true,
  },
  {
    id: "tata-genai-data-analytics",
    title: "Tata - GenAI Powered Data Analytics Job Simulation",
    issuer: "Forage (Tata)",
    issueDate: "Jan 2026",
    credentialUrl: "https://www.theforage.com/completion-certificates/ifobHAoMjQs9s6bKS/gMTdCXwDdLYoXZ3wG_ifobHAoMjQs9s6bKS_692c3523a23a853db3e18d06_1767362751388_completion_certificate.pdf",
    skills: ["GenAI", "Data Analytics", "Business Insights"],
    category: "Data Analytics",
    featured: true,
  },
  {
    id: "ibm-ai-ml-advanced",
    title: "Artificial Intelligence & Machine Learning - Advanced Certificate",
    issuer: "IBM",
    issueDate: "Jun 2025",
    credentialUrl: "https://www.credly.com/badges/7a3178a2-9a55-4625-ae6b-624d97f76138",
    skills: ["Python", "Pandas", "Machine Learning", "AI Models"],
    category: "AI & ML",
    featured: true,
  },
  {
    id: "ms-powerbi-copilot",
    title: "Get started with Copilot in Power BI",
    issuer: "Microsoft",
    issueDate: "Dec 2025",
    credentialUrl: "https://learn.microsoft.com/api/achievements/share/en-us/KrishaJariwala-4033/WVM7L6PN?sharingId=C949822FCF0A3F7D",
    skills: ["Power BI", "Copilot", "AI Insights"],
    category: "Business Intelligence",
    featured: true,
  },
  {
    id: "ms-powerbi-model-framework",
    title: "Choose a Power BI model framework",
    issuer: "Microsoft",
    issueDate: "Dec 2025",
    credentialUrl: "https://learn.microsoft.com/api/achievements/share/en-us/KrishaJariwala-4033/ELGT3Q8P?sharingId=C949822FCF0A3F7D",
    skills: ["Power BI", "Data Modeling", "DAX"],
    category: "Business Intelligence",
    featured: true,
  },
  {
    id: "ms-powerbi-clean-transform-load",
    title: "Clean, transform, and load data in Power BI",
    issuer: "Microsoft",
    issueDate: "Dec 2025",
    credentialUrl: "https://learn.microsoft.com/api/achievements/share/en-us/KrishaJariwala-4033/7BDPB24Z?sharingId=C949822FCF0A3F7D",
    skills: ["Power BI", "Power Query", "ETL", "Data Cleaning"],
    category: "Business Intelligence",
    featured: true,
  },
  {
    id: "deloitte-data-analytics",
    title: "Deloitte Australia - Data Analytics Job Simulation",
    issuer: "Forage (Deloitte)",
    issueDate: "Nov 2025",
    credentialUrl: "https://www.theforage.com/completion-certificates/9PBTqmSxAf6zZTseP/io9DzWKe3PTsiS6GG_9PBTqmSxAf6zZTseP_692c3523a23a853db3e18d06_1764509828544_completion_certificate.pdf",
    skills: ["Data Analytics", "Client Reporting", "Data Visualization"],
    category: "Data Analytics",
    featured: false,
  },
  {
    id: "ms-discover-data-analysis",
    title: "Discover data analysis",
    issuer: "Microsoft",
    issueDate: "Nov 2025",
    credentialUrl: "https://learn.microsoft.com/api/achievements/share/en-us/KrishaJariwala-4033/8274K77W?sharingId=C949822FCF0A3F7D",
    skills: ["Data Analysis", "Data Analytics Fundamentals"],
    category: "Data Analytics",
    featured: false,
  },
  {
    id: "ms-get-started-powerbi",
    title: "Get started building with Power BI",
    issuer: "Microsoft",
    issueDate: "Nov 2025",
    credentialUrl: "https://learn.microsoft.com/api/achievements/share/en-us/KrishaJariwala-4033/HZAPKH28?sharingId=C949822FCF0A3F7D",
    skills: ["Power BI", "Dashboard Building"],
    category: "Business Intelligence",
    featured: false,
  },
  {
    id: "ms-fabric-end-to-end",
    title: "Introduction to end-to-end analytics using Microsoft Fabric",
    issuer: "Microsoft",
    issueDate: "Nov 2025",
    credentialUrl: "https://learn.microsoft.com/api/achievements/share/en-us/KrishaJariwala-4033/EL5NQQ8P?sharingId=C949822FCF0A3F7D",
    skills: ["Microsoft Fabric", "ETL", "Azure Data Factory"],
    category: "Database & Engineering",
    featured: false,
  },
  {
    id: "ms-fabric-data-science",
    title: "Get started with data science in Microsoft Fabric",
    issuer: "Microsoft",
    issueDate: "Nov 2025",
    credentialUrl: "https://learn.microsoft.com/api/achievements/share/en-us/KrishaJariwala-4033/NMMMBZCF?sharingId=C949822FCF0A3F7D",
    skills: ["Microsoft Fabric", "Data Science"],
    category: "AI & ML",
    featured: false,
  },
  {
    id: "ms-get-data-powerbi",
    title: "Get data in Power BI",
    issuer: "Microsoft",
    issueDate: "Nov 2025",
    credentialUrl: "https://learn.microsoft.com/api/achievements/share/en-us/KrishaJariwala-4033/DUUUPBXJ?sharingId=C949822FCF0A3F7D",
    skills: ["Power BI", "Business Intelligence", "Data Ingestion"],
    category: "Business Intelligence",
    featured: false,
  }
];
