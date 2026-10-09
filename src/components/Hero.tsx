import Link from "next/link";
import { profile } from "@/data/profile";

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pb-20 pt-36 lg:px-10 lg:pt-44">
      {/* Decorative Background Mesh / Circles */}
      <div className="pointer-events-none absolute -right-20 -top-20 h-96 w-96 rounded-full bg-[var(--sage)]/10 blur-3xl" />
      <div className="pointer-events-none absolute -left-20 top-1/2 h-80 w-80 rounded-full bg-[var(--terracotta)]/5 blur-3xl" />

      <div className="mx-auto w-full max-w-7xl">
        <div className="max-w-5xl">
          {/* Status Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--sage)]/30 bg-[var(--sage)]/10 px-4 py-1.5 text-xs font-medium text-[var(--sage)]">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--sage)] opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--sage)]"></span>
            </span>
            {profile.status}
          </div>

          <h1 className="font-serif text-5xl font-normal leading-[1.02] tracking-tight sm:text-7xl lg:text-[7.5rem] text-[var(--charcoal)]">
            Turning <span className="italic font-light text-[var(--terracotta)]">data</span> into
            <br />
            actionable decisions.
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-[var(--muted)]">
            {profile.shortBio}
          </p>

          {/* Action CTAs & Quick Metrics */}
          <div className="mt-12 flex flex-col gap-6 border-t border-[var(--border)] pt-8 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/projects"
                className="rounded-full bg-[var(--charcoal)] px-7 py-4 text-xs font-semibold uppercase tracking-wider text-[var(--warm-white)] shadow-lg transition-all hover:bg-[var(--sage)] hover:shadow-xl"
              >
                Explore Selected Work ↓
              </Link>
              <Link
                href="/certificates"
                className="rounded-full border border-[var(--border)] bg-[var(--warm-white)] px-7 py-4 text-xs font-semibold uppercase tracking-wider text-[var(--charcoal)] transition-all hover:border-[var(--charcoal)]"
              >
                View Certificates
              </Link>
            </div>

            {/* Quick Metrics Bar */}
            <div className="flex items-center gap-8 border-l border-[var(--border)] pl-8 hidden lg:flex">
              <div>
                <span className="block font-serif text-3xl font-bold text-[var(--charcoal)]">6+</span>
                <span className="text-[11px] uppercase tracking-wider text-[var(--muted)]">Major Projects</span>
              </div>
              <div>
                <span className="block font-serif text-3xl font-bold text-[var(--charcoal)]">6+</span>
                <span className="text-[11px] uppercase tracking-wider text-[var(--muted)]">Certifications</span>
              </div>
              <div>
                <span className="block font-serif text-3xl font-bold text-[var(--charcoal)]">SQL / BI</span>
                <span className="text-[11px] uppercase tracking-wider text-[var(--muted)]">Core Stack</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
