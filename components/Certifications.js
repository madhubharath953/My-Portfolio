import { certifications } from '@/data/certifications';
import { Award, FileText } from 'lucide-react';

export default function Certifications() {
  return (
    <section id="certifications" className="mx-auto max-w-6xl px-6 py-24 md:px-10">
      <p className="eyebrow mb-3">Certifications</p>
      <h2 className="section-heading mb-10 text-3xl text-ink sm:text-4xl">
        Certificates
      </h2>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-2">
        {certifications.map((cert) => (
          <div
            key={cert.title}
            className="glass flex flex-col justify-between rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-1"
          >
            <div>
              <span className="mb-3 inline-flex rounded-lg bg-gradient-to-br from-violet-500/20 to-cyan-500/20 p-2 text-cyan-300">
                <Award size={18} />
              </span>
              <h3 className="font-display text-base font-medium text-ink">
                {cert.title}
              </h3>
              <p className="mt-1 text-sm text-muted">{cert.org}</p>
              <p className="mt-1 font-mono text-xs text-muted">{cert.date}</p>
            </div>

            <a
              href={cert.file}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex w-fit items-center gap-1.5 rounded-lg border border-line px-3.5 py-2 text-xs font-medium text-ink transition-colors hover:bg-white/[0.06]"
            >
              <FileText size={14} />
              View Certificate
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
