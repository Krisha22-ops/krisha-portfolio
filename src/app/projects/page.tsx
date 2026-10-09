"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
import ProjectFilter from "@/components/ProjectFilter";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
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

  return (
    <div className="min-h-screen bg-[var(--ivory)] text-[var(--charcoal)]">
      <Navbar />

      <main className="px-6 pb-24 pt-36 lg:px-10">
        <div className="mx-auto max-w-7xl">
          {/* Header */}
          <div className="mb-12 border-b border-[var(--border)] pb-12">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">
              All Projects & Analytics
            </span>
            <h1 className="mt-4 font-serif text-5xl font-bold sm:text-7xl">
              Complete Portfolio
            </h1>
            <p className="mt-4 max-w-2xl text-base text-[var(--muted)]">
              Explore end-to-end data analytics platforms, business intelligence dashboards, knowledge graphs, and predictive models.
            </p>
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

          {/* Grid */}
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
                No projects found for query "{searchQuery}".
              </p>
              <button
                onClick={() => {
                  setSelectedCategory("All");
                  setSearchQuery("");
                }}
                className="mt-4 text-xs font-semibold text-[var(--charcoal)] underline"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
