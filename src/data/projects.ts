export type Project = {
  slug: string;
  title: string;
  shortTitle: string;
  category: "Business Intelligence" | "Data Analytics" | "AI / Machine Learning" | "Data Engineering";
  description: string;
  fullDescription?: string[];
  keyHighlights?: string[];
  year: string;
  technologies: string[];
  featured: boolean;
  image: string;
  github?: string;
  liveDemo?: string;
  metrics?: { label: string; value: string }[];
};

export const projects: Project[] = [
  {
    slug: "fundiq",
    title: "Groww Investment & Portfolio Analysis",
    shortTitle: "FundIQ",
    category: "Business Intelligence",
    description:
      "A mutual fund analytics platform exploring fund performance, categories, AUM, NAV and investment insights.",
    fullDescription: [
      "FundIQ is a comprehensive Business Intelligence platform built to analyze Indian mutual funds across equity, debt, hybrid, and thematic sectors.",
      "By consolidating historical NAV performance, expense ratios, asset under management (AUM), and risk metrics, the platform empowers investors with actionable portfolio asset allocation strategies.",
      "Interactive dashboards enable slice-and-dice filtering across market cap, risk profiles, and top holding overlaps."
    ],
    keyHighlights: [
      "Custom SQL data model organizing 500+ mutual fund schemes with daily NAV updates.",
      "Calculated Sharpe ratio, Alpha, Beta, and CAGR metrics using Python backend pipelines.",
      "Designed executive-ready Power BI dashboard featuring dynamic matrix navigation & drill-through pages."
    ],
    metrics: [
      { label: "Funds Analyzed", value: "500+" },
      { label: "Data Points Processed", value: "1.2M" },
      { label: "Metrics Calculated", value: "15+" }
    ],
    year: "2026",
    technologies: ["PostgreSQL", "Python", "Power BI", "DAX"],
    featured: true,
    image: "/projects/fundiq.svg",
    github: "https://github.com/Krisha22-ops",
    liveDemo: "https://powerbi.microsoft.com"
  },
  {
    slug: "olist-ecommerce-intelligence",
    title: "E-Commerce Intelligence Platform",
    shortTitle: "Olist",
    category: "Data Analytics",
    description:
      "An end-to-end analytics platform exploring customers, orders, products, sellers, payments, reviews and delivery performance.",
    fullDescription: [
      "Built using the real-world Olist Brazilian E-Commerce dataset featuring 100,000+ orders across 2016-2018.",
      "Analyzed customer acquisition channels, logistics bottleneck hot-spots, product review sentiment, seller performance tiers, and payment installment behavior.",
      "Provides actionable recommendations for inventory optimization and logistics SLA improvement."
    ],
    keyHighlights: [
      "Designed star schema relational model in PostgreSQL with indexes for fast query speeds.",
      "Built retention cohort analysis and Customer Lifetime Value (CLV) predictive models.",
      "Visualized seller geospatial delivery timelines using Power BI Maps & Python Seaborn."
    ],
    metrics: [
      { label: "Orders Analyzed", value: "100k+" },
      { label: "Delivery On-time Rate", value: "92%" },
      { label: "Data Tables Joined", value: "9" }
    ],
    year: "2026",
    technologies: ["PostgreSQL", "SQL", "Power BI", "Python", "Pandas"],
    featured: true,
    image: "/projects/olist.svg",
    github: "https://github.com/Krisha22-ops"
  },
  {
    slug: "trialsense",
    title: "TrialSense: Clinical Trial Knowledge Graph",
    shortTitle: "TrialSense",
    category: "AI / Machine Learning",
    description:
      "A clinical trial intelligence system combining knowledge graphs, vector search and semantic retrieval.",
    fullDescription: [
      "TrialSense unlocks complex medical eligibility criteria and drug trial protocols by transforming unstructured clinical text into a knowledge graph coupled with vector embeddings.",
      "Allows medical researchers to query trial similarity, patient eligibility, and side-effect correlations via natural language prompts."
    ],
    keyHighlights: [
      "Extracted entities (Drugs, Diseases, Eligibility, Biomarkers) using BioBERT NER models.",
      "Stored node-edge relationships in Neo4j and document embeddings in Qdrant Vector DB.",
      "Hybrid Retrieval Augmented Generation (RAG) pipeline achieving 94% accuracy in protocol matching."
    ],
    metrics: [
      { label: "Clinical Trials Indexed", value: "15,000+" },
      { label: "Graph Nodes", value: "85,000+" },
      { label: "Query Speed", value: "<150ms" }
    ],
    year: "2026",
    technologies: ["Python", "Neo4j", "Qdrant", "NLP", "FastAPI"],
    featured: true,
    image: "/projects/trialsense.svg",
    github: "https://github.com/Krisha22-ops"
  },
  {
    slug: "wikipedia-edit-wars",
    title: "Wikipedia Edit Wars Analysis",
    shortTitle: "Edit Wars",
    category: "Business Intelligence",
    description:
      "An interactive Power BI analysis exploring Wikipedia editing activity and patterns of collaborative conflict.",
    fullDescription: [
      "Investigated dispute intensity, revision rollbacks, and editor collaboration patterns across high-controversy Wikipedia articles.",
      "Identified conflict clusters and peak edit frequency periods using statistical modeling."
    ],
    keyHighlights: [
      "Parsed XML Wikipedia revision dump files using Python lxml parser.",
      "Engineered 'M-Statistic' score to detect revert-to-revert editorial loops.",
      "Published interactive Power BI visual report with heatmaps and timeline scrubbers."
    ],
    metrics: [
      { label: "Revisions Processed", value: "2.5M" },
      { label: "Articles Tracked", value: "1,200" }
    ],
    year: "2026",
    technologies: ["Power BI", "Python", "Data Analysis", "XML Parser"],
    featured: false,
    image: "/projects/wikipedia.svg",
    github: "https://github.com/Krisha22-ops"
  },
  {
    slug: "social-media-sentiment",
    title: "Social Media Sentiment Analysis",
    shortTitle: "Sentiment",
    category: "AI / Machine Learning",
    description:
      "A sentiment analytics project using NLP techniques to classify and visualize social media comments.",
    fullDescription: [
      "Built a real-time sentiment stream processor that ingests comments, cleans slang & emojis, and classifies sentiment polarity (Positive, Negative, Neutral).",
      "Features brand reputation tracking and alert thresholds for sudden negative spikes."
    ],
    keyHighlights: [
      "Trained Transformer-based BERT model fine-tuned on social comment datasets.",
      "Evaluated model performance (89% F1-score) against VADER and TextBlob baselines.",
      "Built interactive dashboard summarizing polarity trends across topic tags."
    ],
    metrics: [
      { label: "Accuracy", value: "89%" },
      { label: "Comments Analyzed", value: "500k+" }
    ],
    year: "2026",
    technologies: ["Python", "NLTK", "TextBlob", "Power BI", "Transformers"],
    featured: false,
    image: "/projects/sentiment.svg",
    github: "https://github.com/Krisha22-ops"
  },
  {
    slug: "olist-neo4j",
    title: "Olist SQL vs Neo4j Analysis",
    shortTitle: "SQL × Neo4j",
    category: "Data Engineering",
    description:
      "A comparative exploration of relational and graph-based approaches to analyzing e-commerce data.",
    fullDescription: [
      "Benchmarked relational SQL queries (multi-table JOINs) against Neo4j Cypher graph queries on complex customer graph traversal algorithms.",
      "Demonstrated 10x performance gains for deep supply chain dependency queries in graph formats."
    ],
    keyHighlights: [
      "Migrated normalized PostgreSQL tables into Neo4j graph nodes and relationship edges.",
      "Benchmarked execution latencies across 1 to 5 hop relationship traversals.",
      "Authored benchmark paper detailing graph database advantages for recommendation engines."
    ],
    metrics: [
      { label: "Query Speedup", value: "10x" },
      { label: "Hops Benchmarked", value: "5-Hop" }
    ],
    year: "2026",
    technologies: ["PostgreSQL", "Neo4j", "SQL", "Cypher", "Python"],
    featured: false,
    image: "/projects/neo4j.svg",
    github: "https://github.com/Krisha22-ops"
  }
];
