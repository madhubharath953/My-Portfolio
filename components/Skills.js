import { skillGroups, softSkills } from '@/data/skills';
import { Code2, Server, Database, BrainCircuit, BarChart3, MessageSquare, Puzzle } from 'lucide-react';

const icons = {
  Frontend: Code2,
  Backend: Server,
  Database: Database,
  'AI / ML': BrainCircuit,
  Analytics: BarChart3,
};

const softIcons = {
  Communication: MessageSquare,
  'Problem Solving': Puzzle,
};

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-24 md:px-10">
      <p className="eyebrow mb-3">Skills</p>
      <h2 className="section-heading mb-10 text-3xl text-ink sm:text-4xl">
        Technology I work with
      </h2>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group) => {
          const Icon = icons[group.label] ?? Code2;
          return (
            <div
              key={group.label}
              className="glass group rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-glow"
            >
              <div className="mb-4 flex items-center gap-3">
                <span className="rounded-lg bg-gradient-to-br from-violet-500/20 to-cyan-500/20 p-2 text-cyan-300">
                  <Icon size={20} />
                </span>
                <h3 className="font-display text-base font-medium text-ink">
                  {group.label}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-line bg-white/[0.03] px-3 py-1 font-mono text-xs text-muted transition-colors group-hover:text-ink"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      <h3 className="section-heading mb-6 mt-16 text-xl text-ink">
        Soft skills
      </h3>
      <div className="grid gap-5 sm:grid-cols-2">
        {softSkills.map((skill) => {
          const Icon = softIcons[skill.name] ?? MessageSquare;
          return (
            <div
              key={skill.name}
              className="glass flex items-start gap-4 rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-1"
            >
              <span className="rounded-lg bg-gradient-to-br from-violet-500/20 to-cyan-500/20 p-2.5 text-violet-400">
                <Icon size={20} />
              </span>
              <div>
                <h4 className="font-display text-base font-medium text-ink">
                  {skill.name}
                </h4>
                <p className="mt-1 text-sm text-muted">{skill.blurb}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
