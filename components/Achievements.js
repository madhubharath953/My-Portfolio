import { achievements } from '@/data/projects';
import { Trophy } from 'lucide-react';

export default function Achievements() {
  return (
    <section id="achievements" className="mx-auto max-w-6xl px-6 py-24 md:px-10">
      <p className="eyebrow mb-3">Achievements</p>
      <h2 className="section-heading mb-10 text-3xl text-ink sm:text-4xl">
        Recognition
      </h2>

      <div className="grid gap-6 sm:grid-cols-2">
        {achievements.map((item) => (
          <div
            key={item.title}
            className="glass shadow-glow relative overflow-hidden rounded-2xl p-8"
          >
            <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-glow-violet blur-2xl" />
            <span className="mb-4 inline-flex rounded-xl bg-gradient-to-br from-violet-500/25 to-cyan-500/25 p-3 text-cyan-300">
              <Trophy size={26} />
            </span>
            <h3 className="font-display text-xl font-semibold text-ink">
              {item.title}
            </h3>
            <p className="mt-2 text-sm text-muted">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
