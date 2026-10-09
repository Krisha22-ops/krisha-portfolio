import { profile } from "@/data/profile";

export default function Experience() {
  return (
    <section className="border-t border-[var(--border)] px-6 py-24 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">
              03 / Experience & Track Record
            </p>
            <h2 className="font-serif text-4xl font-bold sm:text-5xl text-[var(--charcoal)]">
              Where analytical rigor meets practical execution.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-[var(--muted)]">
              Hands-on involvement building relational analytics pipelines, Power BI business dashboards, and graph-based retrieval architectures.
            </p>
          </div>

          <div className="lg:col-span-8">
            <div className="space-y-12">
              {profile.experience.map((exp, i) => (
                <div
                  key={i}
                  className="relative border-l-2 border-[var(--border)] pl-8 transition-colors hover:border-[var(--sage)]"
                >
                  <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full border-2 border-[var(--warm-white)] bg-[var(--charcoal)]" />
                  
                  <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-center">
                    <h3 className="font-serif text-2xl font-bold text-[var(--charcoal)]">
                      {exp.role}
                    </h3>
                    <span className="font-mono text-xs text-[var(--muted)]">
                      {exp.period}
                    </span>
                  </div>

                  <p className="mt-1 text-sm font-medium text-[var(--sage)]">
                    {exp.company}
                  </p>

                  <p className="mt-3 text-sm text-[var(--muted)]">
                    {exp.description}
                  </p>

                  <ul className="mt-4 space-y-2 text-xs text-[var(--charcoal)]/80">
                    {exp.highlights.map((h, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-[var(--terracotta)] font-bold">•</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
