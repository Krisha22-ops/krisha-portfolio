"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CertificateCard from "@/components/CertificateCard";
import { certificates } from "@/data/certificates";

export default function CertificatesPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = Array.from(new Set(certificates.map((c) => c.category)));

  const filteredCertificates = certificates.filter((cert) =>
    selectedCategory === "All" ? true : cert.category === selectedCategory
  );

  return (
    <div className="min-h-screen bg-[var(--ivory)] text-[var(--charcoal)]">
      <Navbar />

      <main className="px-6 pb-24 pt-36 lg:px-10">
        <div className="mx-auto max-w-7xl">
          {/* Header */}
          <div className="mb-12 border-b border-[var(--border)] pb-12">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">
              Verified Skills & Qualifications
            </span>
            <h1 className="mt-4 font-serif text-5xl font-bold sm:text-7xl">
              Certifications & Badges
            </h1>
            <p className="mt-4 max-w-2xl text-base text-[var(--muted)]">
              Official certifications earned in Microsoft Power BI, Google Data Analytics, IBM Data Science, Neo4j Graph Databases, and NLP.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="mb-12 flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedCategory("All")}
              className={`rounded-full px-5 py-2.5 text-xs font-semibold tracking-wide transition-all ${
                selectedCategory === "All"
                  ? "bg-[var(--charcoal)] text-[var(--warm-white)] shadow-md"
                  : "border border-[var(--border)] bg-[var(--warm-white)] text-[var(--charcoal)]/80 hover:bg-[var(--border)]/40"
              }`}
            >
              All Certificates ({certificates.length})
            </button>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`rounded-full px-5 py-2.5 text-xs font-semibold tracking-wide transition-all ${
                  selectedCategory === cat
                    ? "bg-[var(--charcoal)] text-[var(--warm-white)] shadow-md"
                    : "border border-[var(--border)] bg-[var(--warm-white)] text-[var(--charcoal)]/80 hover:bg-[var(--border)]/40"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredCertificates.map((cert) => (
              <CertificateCard key={cert.id} certificate={cert} />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
