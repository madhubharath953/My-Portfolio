'use client';

import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('#home');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const sections = links
      .map((l) => document.querySelector(l.href))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: 0 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-3' : 'py-5'
      }`}
    >
      <nav
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-2xl px-5 transition-all duration-300 ${
          scrolled ? 'glass shadow-glass py-2.5' : 'py-2 bg-transparent'
        }`}
      >
        <a href="#home" className="font-display text-lg font-semibold tracking-tight text-ink">
          MB<span className="text-violet-400">.</span>
        </a>

        <ul className="hidden gap-1 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`relative rounded-lg px-3 py-2 text-sm transition-colors ${
                  active === link.href
                    ? 'text-ink'
                    : 'text-muted hover:text-ink'
                }`}
              >
                {link.label}
                {active === link.href && (
                  <span className="absolute inset-x-3 -bottom-0.5 h-px bg-gradient-to-r from-violet-400 to-cyan-400" />
                )}
              </a>
            </li>
          ))}
        </ul>

        <button
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((o) => !o)}
          className="rounded-lg p-2 text-ink md:hidden"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="mx-auto mt-2 max-w-6xl px-4 md:hidden">
          <ul className="glass shadow-glass flex flex-col gap-1 rounded-2xl p-3">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`block rounded-lg px-3 py-2.5 text-sm ${
                    active === link.href ? 'bg-white/5 text-ink' : 'text-muted'
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
