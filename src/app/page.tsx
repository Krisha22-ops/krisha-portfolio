"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import ProjectCard from "@/components/ProjectCard";
import ProjectFilter from "@/components/ProjectFilter";
import CertificateCard from "@/components/CertificateCard";
import Experience from "@/components/Experience";
import { projects } from "@/data/projects";
import { certificates } from "@/data/certificates";
import { profile } from "@/data/profile";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = Array.from(new Set(projects.map((p) => p.category)));

  const filteredProjects = projects.filter((project) => {
    const matchesCategory =
      selectedCategory === "All" || project.category === selectedCategory;
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.technologies.some((tech) =>
        tech.toLowerCase().includes(searchQuery.toLowerCase())
      );
    return matchesCategory && matchesSearch;
  });

  const featuredCertificates = certificates.filter((c) => c.featured);

  return (
    <div className="min-h-screen bg-[var(--ivory)] text-[var(--charcoal)] selection:bg-[var(--sage)] selection:text-[var(--warm-white)]">
      <Navbar />

      <main>
        {/* Hero Section */}
        <Hero />

        {/* About Teaser Section */}
        <section className="border-t border-[var(--border)] px-6 py-24 lg:px-10">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-12">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--muted)] lg:col-span-3">
              01 / About Me
            </p>

            <div className="lg:col-span-9">
              <h2 className="font-serif text-3xl leading-snug sm:text-5xl lg:text-6xl text-[var(--charcoal)]">
                I transform messy datasets into visual stories & computational graphs people can actually act on.
              </h2>

              <p className="mt-8 max-w-3xl text-base leading-relaxed text-[var(--muted)]">
                {profile.fullBio[0]} {profile.fullBio[1]}
              </p>

              <div className="mt-10 flex flex-wrap gap-3">
                {profile.skills.flatMap((s) => s.skills).slice(0, 8).map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-[var(--border)] bg-[var(--warm-white)] px-4 py-2 text-xs font-medium text-[var(--charcoal)]"
                  >
                    ✦ {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Featured Projects Section with Category Tabs & Search */}
        <section id="work" className="border-t border-[var(--border)] px-6 py-24 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">
                  02 / Portfolio Work
                </p>
                <h2 className="font-serif text-4xl font-bold sm:text-6xl">
                  Projects & Case Studies
                </h2>
              </div>
              <Link
                href="/projects"
                className="text-xs font-semibold uppercase tracking-wider text-[var(--charcoal)] underline underline-offset-8 hover:text-[var(--terracotta)]"
              >
                View All Projects ({projects.length}) →
              </Link>
            </div>

            {/* Filter Bar */}
            <div className="mb-12">
              <ProjectFilter
                categories={categories}
                selectedCategory={selectedCategory}
                onSelectCategory={setSelectedCategory}
                searchQuery={searchQuery}
                onSearchChange={setSearchQuery}
              />
            </div>

            {/* Project Grid */}
            {filteredProjects.length > 0 ? (
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {filteredProjects.map((project, index) => (
                  <ProjectCard
                    key={project.slug}
                    project={project}
                    index={index}
                  />
                ))}
              </div>
            ) : (
              <div className="rounded-2xl border border-dashed border-[var(--border)] py-16 text-center">
                <p className="text-sm text-[var(--muted)]">
                  No projects match your filter query "{searchQuery}".
                </p>
                <button
                  onClick={() => {
                    setSelectedCategory("All");
                    setSearchQuery("");
                  }}
                  className="mt-4 text-xs font-semibold text-[var(--charcoal)] underline"
                >
                  Reset Filters
                </button>
              </div>
            )}
          </div>
        </section>

        {/* Certificates Showcase Section */}
        <section className="border-t border-[var(--border)] bg-[var(--warm-white)] px-6 py-24 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">
                  03 / Verified Credentials
                </p>
                <h2 className="font-serif text-4xl font-bold sm:text-5xl">
                  Certificates & Training
                </h2>
              </div>
              <Link
                href="/certificates"
                className="text-xs font-semibold uppercase tracking-wider text-[var(--charcoal)] underline underline-offset-8 hover:text-[var(--terracotta)]"
              >
                Explore All Certificates ({certificates.length}) →
              </Link>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {featuredCertificates.map((cert) => (
                <CertificateCard key={cert.id} certificate={cert} />
              ))}
            </div>
          </div>
        </section>

        {/* Experience Timeline */}
        <Experience />

        {/* Contact CTA Section */}
        <section className="border-t border-[var(--border)] px-6 py-32 lg:px-10">
          <div className="mx-auto max-w-7xl text-center">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">
              04 / Get In Touch
            </p>
            <h2 className="mx-auto max-w-4xl font-serif text-5xl font-bold leading-tight sm:text-7xl">
              Have a project, job opportunity, or dataset to explore?
            </h2>
            <p className="mx-auto mt-6 max-w-lg text-base text-[var(--muted)]">
              I am actively looking for Data Analytics, Business Intelligence, and AI/ML roles and projects.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="rounded-full bg-[var(--charcoal)] px-8 py-4 text-xs font-semibold uppercase tracking-wider text-[var(--warm-white)] transition-transform hover:scale-105"
              >
                Send A Message →
              </Link>
              <a
                href={`mailto:${profile.email}`}
                className="rounded-full border border-[var(--border)] bg-[var(--warm-white)] px-8 py-4 text-xs font-semibold uppercase tracking-wider text-[var(--charcoal)] transition-transform hover:scale-105"
              >
                Email Direct
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
