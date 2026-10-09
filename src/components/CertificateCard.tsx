import { Certificate } from "@/data/certificates";

type CertificateCardProps = {
  certificate: Certificate;
};

export default function CertificateCard({ certificate }: CertificateCardProps) {
  return (
    <div className="group relative flex flex-col justify-between rounded-2xl border border-[var(--border)] bg-[var(--warm-white)] p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-[var(--sage)]/50">
      <div>
        {/* Card Top: Issuer & Category */}
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--sage)]/10 text-xs font-bold text-[var(--sage)]">
              📜
            </span>
            <span className="text-xs font-semibold uppercase tracking-wider text-[var(--muted)]">
              {certificate.issuer}
            </span>
          </div>
          <span className="text-xs font-mono text-[var(--muted)]">
            {certificate.issueDate}
          </span>
        </div>

        {/* Certificate Title */}
        <h3 className="mt-5 font-serif text-xl font-bold leading-snug text-[var(--charcoal)] group-hover:text-[var(--terracotta)] transition-colors">
          {certificate.title}
        </h3>

        {/* Credential ID */}
        {certificate.credentialId && (
          <p className="mt-2 font-mono text-[11px] text-[var(--muted)]">
            ID: <span className="text-[var(--charcoal)]/80">{certificate.credentialId}</span>
          </p>
        )}

        {/* Verified Skills */}
        <div className="mt-6 flex flex-wrap gap-1.5">
          {certificate.skills.map((skill) => (
            <span
              key={skill}
              className="rounded-md bg-[var(--ivory)] border border-[var(--border)] px-2.5 py-1 text-[11px] font-medium text-[var(--charcoal)]/80"
            >
              ✓ {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Action Verification Link */}
      <div className="mt-8 border-t border-[var(--border)]/50 pt-4 flex items-center justify-between">
        <span className="text-[11px] font-semibold uppercase tracking-wider text-[var(--sage)]">
          {certificate.category}
        </span>

        {certificate.credentialUrl && (
          <a
            href={certificate.credentialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-xs font-semibold text-[var(--charcoal)] hover:text-[var(--terracotta)]"
          >
            Verify Credential ↗
          </a>
        )}
      </div>
    </div>
  );
}
