"use client";

import { useState } from "react";
import Link from "next/link";
import { Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
  index: number;
};

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const [imageError, setImageError] = useState(false);

  // Dynamic visual accent gradients based on index / category
  const gradients = [
    "from-emerald-900/20 via-teal-800/10 to-stone-900/30",
    "from-amber-900/20 via-orange-800/10 to-stone-900/30",
    "from-indigo-900/20 via-purple-800/10 to-stone-900/30",
    "from-slate-900/20 via-blue-800/10 to-stone-900/30",
  ];
  const bgGradient = gradients[index % gradients.length];

  return (
    <div className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--warm-white)] transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-black/5">
      <div>
        {/* Card Header / Image / Graphic Visual */}
        <div className={`relative aspect-[16/10] overflow-hidden bg-gradient-to-br ${bgGradient} border-b border-[var(--border)]`}>
          {!imageError ? (
            <img
              src={project.image}
              alt={project.title}
              onError={() => setImageError(true)}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          ) : (
            /* Fallback Aesthetic Graphic Placeholder for Data Projects */
            <div className="absolute inset-0 flex flex-col justify-between p-6">
              <div className="flex items-center justify-between text-xs font-mono text-[var(--charcoal)]/60">
                <span className="rounded bg-[var(--ivory)] px-2 py-1 font-semibold uppercase tracking-wider">
                  {project.category}
                </span>
                <span>#{String(index + 1).padStart(2, "0")}</span>
              </div>

              {/* Data Visualization Art SVG */}
              <div className="my-auto flex items-center justify-center opacity-80">
                <svg className="w-full h-24 stroke-[var(--charcoal)]/30 fill-none" viewBox="0 0 300 100">
                  <path d="M0,80 Q50,20 100,60 T200,30 T300,70" strokeWidth="2" strokeDasharray="4 4" />
                  <path d="M0,50 Q75,90 150,40 T300,20" strokeWidth="3" className="stroke-[var(--terracotta)]" />
                  <circle cx="150" cy="40" r="5" className="fill-[var(--terracotta)]" />
                  <circle cx="225" cy="30" r="4" className="fill-[var(--sage)]" />
                </svg>
              </div>

              <div className="text-right font-mono text-[10px] text-[var(--muted)]">
                KRISHA JARIWALA LABS
              </div>
            </div>
          )}

          {/* Hover Overlay Button */}
          <div className="absolute inset-0 flex items-center justify-center bg-[var(--charcoal)]/40 backdrop-blur-[2px] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <Link
              href={`/projects/${project.slug}`}
              className="rounded-full bg-[var(--warm-white)] px-6 py-3 text-xs font-bold uppercase tracking-wider text-[var(--charcoal)] transition-transform duration-300 hover:scale-105"
            >
              View Case Study →
            </Link>
          </div>
        </div>

        {/* Card Content Body */}
        <div className="p-7">
          <div className="mb-4 flex items-center justify-between">
            <span className="rounded-full bg-[var(--sage)]/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-[var(--sage)]">
              {project.category}
            </span>
            <span className="text-xs font-mono text-[var(--muted)]">
              {project.year}
            </span>
          </div>

          <h3 className="font-serif text-2xl font-semibold leading-tight text-[var(--charcoal)] group-hover:text-[var(--terracotta)] transition-colors">
            <Link href={`/projects/${project.slug}`}>
              {project.title}
            </Link>
          </h3>

          <p className="mt-3 text-sm leading-relaxed text-[var(--muted)] line-clamp-3">
            {project.description}
          </p>

          {/* Metrics Preview if available */}
          {project.metrics && project.metrics.length > 0 && (
            <div className="mt-5 grid grid-cols-2 gap-3 border-t border-b border-[var(--border)]/60 py-3">
              {project.metrics.slice(0, 2).map((m, i) => (
                <div key={i} className="flex flex-col">
                  <span className="text-lg font-bold font-serif text-[var(--charcoal)]">{m.value}</span>
                  <span className="text-[10px] uppercase tracking-wider text-[var(--muted)]">{m.label}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Card Footer: Tech Stack Pills & Action */}
      <div className="p-7 pt-0 flex items-center justify-between border-t border-[var(--border)]/40 mt-4">
        <div className="flex flex-wrap gap-1.5 pt-4">
          {project.technologies.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-[var(--border)] bg-[var(--ivory)] px-2.5 py-0.5 text-[11px] font-medium text-[var(--charcoal)]/80"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="rounded-full bg-[var(--border)]/40 px-2 py-0.5 text-[10px] font-medium text-[var(--muted)]">
              +{project.technologies.length - 3}
            </span>
          )}
        </div>

        <Link
          href={`/projects/${project.slug}`}
          className="pt-4 text-xs font-semibold text-[var(--charcoal)] hover:text-[var(--terracotta)]"
        >
          Details →
        </Link>
      </div>
    </div>
  );
}
