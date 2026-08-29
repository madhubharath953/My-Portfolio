import { experience } from '@/data/experience';
import { Briefcase } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-6 py-24 md:px-10">
      <p className="eyebrow mb-3">Experience</p>
      <h2 className="section-heading mb-12 text-3xl text-ink sm:text-4xl">
        Internship journey
      </h2>

      <div className="relative pl-8">
        <div className="absolute left-[11px] top-2 bottom-2 w-px bg-gradient-to-b from-violet-500 via-cyan-500/60 to-transparent" />

        <div className="flex flex-col gap-8">
          {experience.map((item) => (
            <div key={item.company + item.role} className="relative">
              <span className="absolute -left-8 top-1.5 flex h-6 w-6 items-center justify-center rounded-full border border-line bg-surface text-cyan-300">
                <Briefcase size={12} />
              </span>

              <div className="glass rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-1">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="font-display text-base font-medium text-ink">
                    {item.role}
                  </h3>
                  <span className="rounded-full border border-line px-3 py-1 font-mono text-[11px] text-muted">
                    {item.duration}
                  </span>
                </div>
                <p className="mt-1 text-sm text-cyan-300">{item.company}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
