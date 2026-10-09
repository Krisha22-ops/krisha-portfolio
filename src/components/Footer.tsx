import Link from "next/link";
import { profile } from "@/data/profile";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--warm-white)] px-6 py-16 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Brand Info */}
          <div className="lg:col-span-5">
            <Link href="/" className="font-serif text-2xl font-bold tracking-tight">
              {profile.name}
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-[var(--muted)]">
              {profile.tagline}
            </p>
            <div className="mt-6 flex items-center gap-2 text-xs font-medium text-[var(--sage)]">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--sage)] opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--sage)]"></span>
              </span>
              {profile.status}
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="grid grid-cols-2 gap-8 lg:col-span-4">
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">
                Navigation
              </h4>
              <ul className="mt-4 space-y-2 text-sm">
                <li>
                  <Link href="/" className="transition-colors hover:text-[var(--terracotta)]">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/projects" className="transition-colors hover:text-[var(--terracotta)]">
                    Projects Showcase
                  </Link>
                </li>
                <li>
                  <Link href="/certificates" className="transition-colors hover:text-[var(--terracotta)]">
                    Certificates
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="transition-colors hover:text-[var(--terracotta)]">
                    About & Bio
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="transition-colors hover:text-[var(--terracotta)]">
                    Contact Me
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">
                Connect
              </h4>
              <ul className="mt-4 space-y-2 text-sm">
                {profile.socials.map((social) => (
                  <li key={social.name}>
                    <a
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-colors hover:text-[var(--terracotta)]"
                    >
                      {social.name} ↗
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact Direct */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">
              Direct Inquiry
            </h4>
            <p className="mt-4 text-sm text-[var(--muted)]">
              Interested in collaborating or hiring for data analytics & BI roles?
            </p>
            <a
              href={`mailto:${profile.email}`}
              className="mt-4 inline-block text-sm font-medium text-[var(--charcoal)] underline underline-offset-4 hover:text-[var(--terracotta)]"
            >
              {profile.email}
            </a>
          </div>
        </div>

        <div className="mt-16 flex flex-col justify-between gap-4 border-t border-[var(--border)] pt-8 text-xs text-[var(--muted)] sm:flex-row">
          <span>© {new Date().getFullYear()} {profile.name}. All rights reserved.</span>
          <span>Designed with precision & aesthetic craftsmanship.</span>
        </div>
      </div>
    </footer>
  );
}
