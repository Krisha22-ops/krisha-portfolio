import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Experience from "@/components/Experience";
import { profile } from "@/data/profile";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[var(--ivory)] text-[var(--charcoal)]">
      <Navbar />

      <main className="px-6 pb-24 pt-36 lg:px-10">
        <div className="mx-auto max-w-7xl">
          {/* Header */}
          <div className="mb-16 border-b border-[var(--border)] pb-12">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">
              Background & Expertise
            </span>
            <h1 className="mt-4 font-serif text-5xl font-bold sm:text-7xl">
              About {profile.name}
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-[var(--muted)]">
              {profile.title} based in {profile.location}.
            </p>
          </div>

          {/* Full Bio Section */}
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <h2 className="font-serif text-3xl font-bold leading-snug sm:text-4xl">
                My Philosophy: Data should inform decisions, not create noise.
              </h2>

              <div className="mt-6 space-y-6 text-base leading-relaxed text-[var(--muted)]">
                {profile.fullBio.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>

            {/* Quick Summary Card */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-[var(--border)] bg-[var(--warm-white)] p-8">
                <h3 className="font-serif text-xl font-bold">Quick Overview</h3>
                <ul className="mt-6 space-y-4 text-sm">
                  <li className="flex justify-between border-b border-[var(--border)]/60 pb-3">
                    <span className="text-[var(--muted)]">Location:</span>
                    <span className="font-semibold">{profile.location}</span>
                  </li>
                  <li className="flex justify-between border-b border-[var(--border)]/60 pb-3">
                    <span className="text-[var(--muted)]">Specialization:</span>
                    <span className="font-semibold text-right">Data Analytics & BI</span>
                  </li>
                  <li className="flex justify-between border-b border-[var(--border)]/60 pb-3">
                    <span className="text-[var(--muted)]">Primary Tools:</span>
                    <span className="font-semibold">SQL, Power BI, Python</span>
                  </li>
                  <li className="flex justify-between border-b border-[var(--border)]/60 pb-3">
                    <span className="text-[var(--muted)]">Availability:</span>
                    <span className="font-semibold text-[var(--sage)]">Open for Work</span>
                  </li>
                </ul>

                <div className="mt-8">
                  <a
                    href={`mailto:${profile.email}`}
                    className="block w-full rounded-full bg-[var(--charcoal)] py-3 text-center text-xs font-semibold uppercase tracking-wider text-[var(--warm-white)]"
                  >
                    Contact Direct →
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Skills Grid Matrix */}
          <div className="mt-24 border-t border-[var(--border)] pt-16">
            <h2 className="font-serif text-3xl font-bold sm:text-4xl">
              Technical Skillset Matrix
            </h2>
            <p className="mt-2 text-sm text-[var(--muted)]">
              Core technologies, query engines, frameworks, and BI dashboard tools.
            </p>

            <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {profile.skills.map((group) => (
                <div
                  key={group.category}
                  className="rounded-2xl border border-[var(--border)] bg-[var(--warm-white)] p-6"
                >
                  <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-[var(--sage)]">
                    {group.category}
                  </h3>
                  <ul className="mt-4 space-y-2 text-sm">
                    {group.skills.map((skill) => (
                      <li key={skill} className="flex items-center gap-2 font-medium">
                        <span className="text-[var(--terracotta)]">•</span>
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Experience />

      <Footer />
    </div>
  );
}
