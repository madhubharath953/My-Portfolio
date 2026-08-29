'use client';

import { useEffect, useState } from 'react';
import { Github, Linkedin, Mail, ArrowRight, Download } from 'lucide-react';

const roles = ['Full Stack Developer', 'AI/ML Enthusiast', 'UI/UX Explorer'];

function useTypedRole() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    const speed = deleting ? 35 : 65;

    const timeout = setTimeout(() => {
      if (!deleting) {
        const next = current.slice(0, text.length + 1);
        setText(next);
        if (next === current) {
          setTimeout(() => setDeleting(true), 1200);
        }
      } else {
        const next = current.slice(0, text.length - 1);
        setText(next);
        if (next === '') {
          setDeleting(false);
          setRoleIndex((i) => (i + 1) % roles.length);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [text, deleting, roleIndex]);

  return text;
}

export default function Hero() {
  const typed = useTypedRole();

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center px-6 pt-28 pb-16 md:px-10"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-16 md:grid-cols-2">
        {/* Left: intro */}
        <div className="animate-[fadeUp_0.8s_ease] [animation-fill-mode:backwards]">
          <p className="eyebrow mb-4">Portfolio / 2026</p>
          <h1 className="section-heading text-4xl leading-tight text-ink sm:text-5xl">
            Hi, I&apos;m Madhu Bharath <span className="inline-block">👋</span>
          </h1>
          <p className="mt-3 font-mono text-lg text-cyan-300 sm:text-xl">
            {typed}
            <span className="animate-blink">|</span>
          </p>
          <p className="mt-6 max-w-md text-muted">
            Building modern web applications and intelligent solutions that
            solve real-world problems.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-500 to-cyan-500 px-5 py-3 text-sm font-medium text-white shadow-glow transition-transform hover:scale-[1.03]"
            >
              View My Projects
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="/resume.pdf"
              className="glass inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-medium text-ink transition-colors hover:bg-white/[0.06]"
            >
              <Download size={16} />
              Download Resume
            </a>
          </div>

          <div className="mt-8 flex items-center gap-4">
            <a
              href="https://github.com/madhubharath953"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="rounded-lg p-2 text-muted transition-colors hover:text-ink"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/madhu-bharath-40705332b/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="rounded-lg p-2 text-muted transition-colors hover:text-ink"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:bharathmadhu953@gmail.com"
              aria-label="Email"
              className="rounded-lg p-2 text-muted transition-colors hover:text-ink"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>

        {/* Right: signature terminal card */}
        <div className="relative mx-auto w-full max-w-md animate-floaty [animation-duration:8s]">
          <div className="glass shadow-glass overflow-hidden rounded-2xl">
            <div className="flex items-center gap-1.5 border-b border-line px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
              <span className="ml-3 font-mono text-xs text-muted">profile.json</span>
            </div>
            <pre className="overflow-x-auto p-5 font-mono text-[13px] leading-6 text-ink/90">
              <code>
                <span className="text-violet-400">const</span> developer = {'{'}
                {'\n'}  name: <span className="text-cyan-300">&quot;Madhu Bharath E&quot;</span>,
                {'\n'}  role: [<span className="text-cyan-300">&quot;Full Stack Dev&quot;</span>, <span className="text-cyan-300">&quot;AI/ML&quot;</span>],
                {'\n'}  stack: [<span className="text-cyan-300">&quot;React&quot;</span>, <span className="text-cyan-300">&quot;Next.js&quot;</span>, <span className="text-cyan-300">&quot;Python&quot;</span>],
                {'\n'}  status: <span className="text-cyan-300">&quot;open to opportunities&quot;</span>,
                {'\n'}{'}'};
              </code>
            </pre>
          </div>
          <div className="absolute -bottom-4 -right-4 -z-10 h-28 w-28 rounded-full bg-glow-violet blur-2xl" />
        </div>
      </div>
    </section>
  );
}
