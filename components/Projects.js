import { projects } from '@/data/projects';
import { Github, ExternalLink } from 'lucide-react';

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-24 md:px-10">
      <p className="eyebrow mb-3">Projects</p>
      <h2 className="section-heading mb-10 text-3xl text-ink sm:text-4xl">
        Things I&apos;ve built
      </h2>

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <div
            key={project.title}
            className="glass group relative overflow-hidden rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-glow"
          >
            <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-glow-cyan opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100" />

            <h3 className="font-display text-lg font-medium text-ink">
              {project.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              {project.description}
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-line bg-white/[0.03] px-3 py-1 font-mono text-xs text-muted"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-6 flex items-center gap-3">
              <a
                href={project.github}
                className="inline-flex items-center gap-1.5 rounded-lg border border-line px-3.5 py-2 text-xs font-medium text-ink transition-colors hover:bg-white/[0.06]"
              >
                <Github size={14} />
                GitHub
              </a>
              <a
                href={project.demo}
                className="inline-flex items-center gap-1.5 rounded-lg bg-gradient-to-r from-violet-500 to-cyan-500 px-3.5 py-2 text-xs font-medium text-white transition-transform group-hover:scale-[1.03]"
              >
                <ExternalLink size={14} />
                Live Demo
              </a>
              <span className="ml-auto text-xs font-medium text-cyan-300 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                View Project →
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
