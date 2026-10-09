import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { projects } from "@/data/projects";

type ProjectDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[var(--ivory)] text-[var(--charcoal)]">
      <Navbar />

      <main className="px-6 pb-24 pt-36 lg:px-10">
        <div className="mx-auto max-w-5xl">
          {/* Back Button */}
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[var(--muted)] hover:text-[var(--charcoal)]"
          >
            ← Back to all projects
          </Link>

          {/* Header */}
          <div className="mt-8 border-b border-[var(--border)] pb-12">
            <div className="flex items-center gap-3">
              <span className="rounded-full bg-[var(--sage)]/15 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-[var(--sage)]">
                {project.category}
              </span>
              <span className="font-mono text-xs text-[var(--muted)]">
                {project.year}
              </span>
            </div>

            <h1 className="mt-4 font-serif text-4xl font-bold leading-tight sm:text-6xl text-[var(--charcoal)]">
              {project.title}
            </h1>

            <p className="mt-6 text-xl leading-relaxed text-[var(--muted)]">
              {project.description}
            </p>

            {/* Quick Action Links */}
            <div className="mt-8 flex flex-wrap gap-4">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-[var(--charcoal)] px-6 py-3 text-xs font-semibold uppercase tracking-wider text-[var(--warm-white)] hover:bg-[var(--sage)] transition-colors"
                >
                  GitHub Repository ↗
                </a>
              )}
              {project.liveDemo && (
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-[var(--border)] bg-[var(--warm-white)] px-6 py-3 text-xs font-semibold uppercase tracking-wider text-[var(--charcoal)] hover:border-[var(--charcoal)] transition-colors"
                >
                  Live Dashboard ↗
                </a>
              )}
            </div>
          </div>

          {/* Key Metrics Banner */}
          {project.metrics && project.metrics.length > 0 && (
            <div className="my-12 grid grid-cols-2 gap-6 rounded-2xl border border-[var(--border)] bg-[var(--warm-white)] p-8 sm:grid-cols-3">
              {project.metrics.map((m, idx) => (
                <div key={idx} className="flex flex-col">
                  <span className="font-serif text-4xl font-bold text-[var(--charcoal)]">
                    {m.value}
                  </span>
                  <span className="mt-1 text-xs font-semibold uppercase tracking-wider text-[var(--muted)]">
                    {m.label}
                  </span>
                </div>
              ))}
            </div>
          )}

          {/* Overview & Deep Dive */}
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="space-y-8 lg:col-span-8">
              <div>
                <h2 className="font-serif text-2xl font-bold text-[var(--charcoal)]">
                  Project Overview & Objectives
                </h2>
                {project.fullDescription ? (
                  <div className="mt-4 space-y-4 text-base leading-relaxed text-[var(--muted)]">
                    {project.fullDescription.map((p, i) => (
                      <p key={i}>{p}</p>
                    ))}
                  </div>
                ) : (
                  <p className="mt-4 text-base leading-relaxed text-[var(--muted)]">
                    {project.description}
                  </p>
                )}
              </div>

              {/* Key Technical Highlights */}
              {project.keyHighlights && project.keyHighlights.length > 0 && (
                <div>
                  <h2 className="font-serif text-2xl font-bold text-[var(--charcoal)]">
                    Key Technical Architecture Highlights
                  </h2>
                  <ul className="mt-4 space-y-3 text-sm text-[var(--charcoal)]/90">
                    {project.keyHighlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-3 rounded-xl border border-[var(--border)] bg-[var(--warm-white)] p-4">
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--sage)]/20 text-xs font-bold text-[var(--sage)]">
                          ✓
                        </span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Sidebar Details */}
            <div className="space-y-8 lg:col-span-4">
              <div className="rounded-2xl border border-[var(--border)] bg-[var(--warm-white)] p-6">
                <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">
                  Technologies Used
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-[var(--border)] bg-[var(--ivory)] px-3 py-1 text-xs font-medium text-[var(--charcoal)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-8 border-t border-[var(--border)] pt-6">
                  <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">
                    Category
                  </h3>
                  <p className="mt-2 text-sm font-semibold text-[var(--charcoal)]">
                    {project.category}
                  </p>
                </div>

                <div className="mt-6 border-t border-[var(--border)] pt-6">
                  <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">
                    Year
                  </h3>
                  <p className="mt-2 text-sm font-semibold text-[var(--charcoal)]">
                    {project.year}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
