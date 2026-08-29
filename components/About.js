'use client';

import { useState } from 'react';

export default function About() {
  const [photoError, setPhotoError] = useState(false);

  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-24 md:px-10">
      <p className="eyebrow mb-3">About</p>
      <h2 className="section-heading mb-8 text-3xl text-ink sm:text-4xl">
        Who I am
      </h2>

      <div className="grid gap-8 md:grid-cols-[280px_1fr] md:items-start">
        {/* Framed photo — replace public/profile.jpg with your real photo */}
        <div className="relative mx-auto w-full max-w-[280px] md:mx-0">
          <div className="absolute -inset-1 -z-10 rounded-2xl bg-gradient-to-br from-violet-500/40 to-cyan-400/40 blur-md" />
          <div className="glass aspect-[4/5] w-full overflow-hidden rounded-2xl">
            {!photoError ? (
              <img
                src="/profile.jpeg"
                alt="Madhu Bharath E"
                onError={() => setPhotoError(true)}
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center font-display text-4xl font-semibold text-ink">
                MB
              </div>
            )}
          </div>
        </div>

        <div className="glass shadow-glass rounded-2xl p-8 sm:p-10">
          <p className="text-lg leading-relaxed text-muted">
            I&apos;m a passionate{' '}
            <span className="text-ink">Full Stack Web Developer</span> and{' '}
            <span className="text-ink">AI/ML enthusiast</span> who enjoys
            building modern, user-friendly applications and solving real-world
            problems through technology.
          </p>
          <p className="mt-4 leading-relaxed text-muted">
            I have hands-on experience with React, Next.js, MongoDB, web
            development, and AI/ML. I enjoy developing practical applications
            and data-driven solutions that solve real-world problems.
          </p>
          <p className="mt-4 leading-relaxed text-muted">
            I&apos;ve gained industry exposure through internships in AI &amp;
            ML, Full Stack Development, and IBM Cognos Analytics. I&apos;m
            continuously learning new technologies and improving my
            problem-solving and communication skills.
          </p>
          <p className="mt-4 leading-relaxed text-muted">
            My goal is to build impactful digital products, solve challenging
            problems, and continuously grow as a developer.
          </p>
        </div>
      </div>
    </section>
  );
}
