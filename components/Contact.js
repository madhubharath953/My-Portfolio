'use client';

import { useState } from 'react';
import { Mail, Linkedin, Github, Send, CheckCircle2 } from 'lucide-react';

// Web3Forms access key — free service that emails form submissions straight
// to your inbox with no backend of your own required.
// Get/manage your key at https://web3forms.com
const WEB3FORMS_ACCESS_KEY = 'b1e0a674-a548-450a-8183-e251a3b8be65';

export default function Contact() {
  const [values, setValues] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error

  const handleChange = (e) => {
    setValues((v) => ({ ...v, [e.target.name]: e.target.value }));
  };

  const validate = () => {
    const next = {};
    if (!values.name.trim()) next.name = 'Please enter your name.';
    if (!values.email.trim()) {
      next.email = 'Please enter your email.';
    } else if (!/^\S+@\S+\.\S+$/.test(values.email)) {
      next.email = 'Please enter a valid email address.';
    }
    if (!values.message.trim()) next.message = 'Please enter a message.';
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('sending');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `New portfolio message from ${values.name}`,
          name: values.name,
          email: values.email,
          message: values.message,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setStatus('sent');
        setValues({ name: '', email: '', message: '' });
        setTimeout(() => setStatus('idle'), 4000);
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-24 md:px-10">
      <p className="eyebrow mb-3">Contact</p>
      <h2 className="section-heading mb-3 text-3xl text-ink sm:text-4xl">
        Let&apos;s build something together
      </h2>
      <p className="mb-10 max-w-xl text-muted">
        I&apos;m always interested in building innovative projects, solving
        challenging problems, and exploring new opportunities.
      </p>

      <div className="grid gap-8 md:grid-cols-2">
        <div className="glass rounded-2xl p-7">
          <ul className="space-y-4">
            <li>
              <a
                href="mailto:bharathmadhu953@gmail.com"
                className="flex items-center gap-3 text-sm text-muted transition-colors hover:text-ink"
              >
                <span className="rounded-lg bg-white/[0.04] p-2 text-cyan-300">
                  <Mail size={16} />
                </span>
                bharathmadhu953@gmail.com
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/madhu-bharath-40705332b/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-sm text-muted transition-colors hover:text-ink"
              >
                <span className="rounded-lg bg-white/[0.04] p-2 text-cyan-300">
                  <Linkedin size={16} />
                </span>
                linkedin.com/in/madhu-bharath-40705332b
              </a>
            </li>
            <li>
              <a
                href="https://github.com/madhubharath953"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-sm text-muted transition-colors hover:text-ink"
              >
                <span className="rounded-lg bg-white/[0.04] p-2 text-cyan-300">
                  <Github size={16} />
                </span>
                github.com/madhubharath953
              </a>
            </li>
          </ul>
        </div>

        <form onSubmit={handleSubmit} noValidate className="glass rounded-2xl p-7">
          <div className="mb-4">
            <label htmlFor="name" className="mb-1.5 block text-xs font-medium text-muted">
              Name
            </label>
            <input
              id="name"
              name="name"
              value={values.name}
              onChange={handleChange}
              className="w-full rounded-lg border border-line bg-white/[0.02] px-3.5 py-2.5 text-sm text-ink outline-none focus:border-cyan-400"
              placeholder="Your name"
            />
            {errors.name && <p className="mt-1 text-xs text-red-400">{errors.name}</p>}
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="mb-1.5 block text-xs font-medium text-muted">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={values.email}
              onChange={handleChange}
              className="w-full rounded-lg border border-line bg-white/[0.02] px-3.5 py-2.5 text-sm text-ink outline-none focus:border-cyan-400"
              placeholder="you@example.com"
            />
            {errors.email && <p className="mt-1 text-xs text-red-400">{errors.email}</p>}
          </div>

          <div className="mb-5">
            <label htmlFor="message" className="mb-1.5 block text-xs font-medium text-muted">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={values.message}
              onChange={handleChange}
              className="w-full resize-none rounded-lg border border-line bg-white/[0.02] px-3.5 py-2.5 text-sm text-ink outline-none focus:border-cyan-400"
              placeholder="Tell me about your project or opportunity..."
            />
            {errors.message && <p className="mt-1 text-xs text-red-400">{errors.message}</p>}
          </div>

          <button
            type="submit"
            disabled={status === 'sending'}
            className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-violet-500 to-cyan-500 px-4 py-3 text-sm font-medium text-white transition-transform hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-70"
          >
            {status === 'sent' ? <CheckCircle2 size={16} /> : <Send size={16} />}
            {status === 'sending' && 'Sending...'}
            {status === 'sent' && 'Message sent'}
            {status === 'error' && 'Try again'}
            {status === 'idle' && 'Send Message'}
          </button>

          {status === 'error' && (
            <p className="mt-3 text-xs text-red-400">
              Something went wrong sending your message. Please try again, or email me directly.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
