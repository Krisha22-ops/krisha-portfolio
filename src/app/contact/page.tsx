"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { profile } from "@/data/profile";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Opens mailto fallback as well
    const mailtoUrl = `mailto:${profile.email}?subject=${encodeURIComponent(
      formData.subject || "Portfolio Contact Inquiry"
    )}&body=${encodeURIComponent(
      `From: ${formData.name} (${formData.email})\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailtoUrl;
    setSubmitted(true);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[var(--ivory)] text-[var(--charcoal)]">
      <Navbar />

      <main className="px-6 pb-24 pt-36 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            {/* Left Column: Direct Info */}
            <div className="lg:col-span-5">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">
                Get In Touch
              </span>
              <h1 className="mt-4 font-serif text-5xl font-bold sm:text-6xl">
                Let's connect & collaborate.
              </h1>
              <p className="mt-6 text-base text-[var(--muted)]">
                Whether you have a data analytics project, job opportunity, or just want to chat about SQL, Power BI, or NLP knowledge graphs—feel free to drop a message.
              </p>

              <div className="mt-10 space-y-6">
                <div className="rounded-2xl border border-[var(--border)] bg-[var(--warm-white)] p-6">
                  <span className="text-xs font-semibold uppercase tracking-[0.15em] text-[var(--muted)]">
                    Email Address
                  </span>
                  <div className="mt-2 flex items-center justify-between gap-4">
                    <span className="font-mono text-sm font-semibold">{profile.email}</span>
                    <button
                      onClick={copyEmail}
                      className="rounded-full bg-[var(--border)]/40 px-3 py-1.5 text-xs font-medium hover:bg-[var(--charcoal)] hover:text-white transition-colors"
                    >
                      {copied ? "Copied! ✓" : "Copy Email"}
                    </button>
                  </div>
                </div>

                <div className="rounded-2xl border border-[var(--border)] bg-[var(--warm-white)] p-6">
                  <span className="text-xs font-semibold uppercase tracking-[0.15em] text-[var(--muted)]">
                    Social Profiles
                  </span>
                  <div className="mt-4 flex flex-wrap gap-3">
                    {profile.socials.map((social) => (
                      <a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full border border-[var(--border)] bg-[var(--ivory)] px-4 py-2 text-xs font-semibold hover:border-[var(--charcoal)] transition-colors"
                      >
                        {social.name} ↗
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="lg:col-span-7">
              <div className="rounded-3xl border border-[var(--border)] bg-[var(--warm-white)] p-8 sm:p-12 shadow-sm">
                <h2 className="font-serif text-2xl font-bold">Send A Direct Message</h2>

                {submitted ? (
                  <div className="mt-6 rounded-2xl bg-[var(--sage)]/15 p-6 text-center text-[var(--sage)]">
                    <p className="font-bold text-lg">Thank you!</p>
                    <p className="mt-2 text-sm">
                      Your email client has been triggered. I will get back to you shortly!
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-4 text-xs font-semibold underline"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[var(--muted)]">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        placeholder="e.g. Jane Doe"
                        className="mt-2 w-full rounded-xl border border-[var(--border)] bg-[var(--ivory)] px-4 py-3 text-sm focus:border-[var(--charcoal)] focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[var(--muted)]">
                        Your Email
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="jane@example.com"
                        className="mt-2 w-full rounded-xl border border-[var(--border)] bg-[var(--ivory)] px-4 py-3 text-sm focus:border-[var(--charcoal)] focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[var(--muted)]">
                        Subject
                      </label>
                      <input
                        type="text"
                        value={formData.subject}
                        onChange={(e) =>
                          setFormData({ ...formData, subject: e.target.value })
                        }
                        placeholder="e.g. Data Analytics Project Inquiry"
                        className="mt-2 w-full rounded-xl border border-[var(--border)] bg-[var(--ivory)] px-4 py-3 text-sm focus:border-[var(--charcoal)] focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[var(--muted)]">
                        Message
                      </label>
                      <textarea
                        required
                        rows={5}
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        placeholder="Tell me about your project or opportunity..."
                        className="mt-2 w-full rounded-xl border border-[var(--border)] bg-[var(--ivory)] px-4 py-3 text-sm focus:border-[var(--charcoal)] focus:outline-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full rounded-full bg-[var(--charcoal)] py-4 text-xs font-semibold uppercase tracking-wider text-[var(--warm-white)] shadow-md transition-transform hover:scale-[1.02]"
                    >
                      Send Message →
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
