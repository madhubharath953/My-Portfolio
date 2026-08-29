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
  const [photoError, setPhotoError] = useState(false);

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

        {/* Right: profile photo — replace public/profile.jpg with your real photo */}
        <div className="relative mx-auto w-full max-w-md animate-floaty [animation-duration:8s]">
          <div className="absolute -inset-2 -z-10 rounded-[2rem] bg-gradient-to-br from-violet-500/40 to-cyan-400/40 blur-xl" />
          <div className="glass shadow-glass aspect-square w-full overflow-hidden rounded-[2rem]">
            {!photoError ? (
              <img
                src="/profile.jpg"
                alt="Madhu Bharath E"
                onError={() => setPhotoError(true)}
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center font-display text-6xl font-semibold text-ink">
                MB
              </div>
            )}
          </div>
          <div className="absolute -bottom-4 -right-4 -z-10 h-28 w-28 rounded-full bg-glow-violet blur-2xl" />
        </div>
      </div>
    </section>
  );
}
