import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-line px-6 py-10 md:px-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 sm:flex-row">
        <div className="text-center sm:text-left">
          <p className="font-display text-base font-medium text-ink">
            Madhu Bharath E
          </p>
          <p className="text-sm text-muted">
            Full Stack Developer &amp; AI/ML Enthusiast
          </p>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/madhubharath953"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="rounded-lg p-2 text-muted transition-colors hover:text-ink"
          >
            <Github size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/madhu-bharath-40705332b/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="rounded-lg p-2 text-muted transition-colors hover:text-ink"
          >
            <Linkedin size={18} />
          </a>
          <a
            href="mailto:bharathmadhu953@gmail.com"
            aria-label="Email"
            className="rounded-lg p-2 text-muted transition-colors hover:text-ink"
          >
            <Mail size={18} />
          </a>
        </div>
      </div>

      <p className="mt-8 text-center text-xs text-muted">
        © 2026 Madhu Bharath E. All rights reserved.
      </p>
    </footer>
  );
}
