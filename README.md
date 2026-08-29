# Madhu Bharath E — Developer Portfolio

A modern, dark, glassmorphism-style portfolio built with Next.js, React, and Tailwind CSS.

## 1. Install dependencies

Make sure you have Node.js 18+ installed, then run:

```bash
npm install
```

## 2. Run the project locally

```bash
npm run dev
```

Open http://localhost:3000 in your browser.

## 3. Add your real links (GitHub / LinkedIn / Email)

Search for `your-username` and `bharathmadhu953@gmail.com` and replace them with your real
details in these files:

- `components/Hero.js`
- `components/Contact.js`
- `components/Footer.js`

Your LinkedIn URL is already filled in everywhere
(`linkedin.com/in/madhu-bharath-40705332b`).

## 4. Add your resume

1. Put your resume PDF in `public/resume.pdf` (the "Download Resume" button in
   `components/Hero.js` already points to `/resume.pdf`).
2. If you'd rather use a different filename, update the `href` in `Hero.js`.

## 5. Add project images

This starter ships without project screenshots to avoid guessing at visuals you haven't
provided. To add them:

1. Put images in `public/projects/` (e.g. `public/projects/smart-bus.png`).
2. In `components/Projects.js`, add an `<img>`/`next/image` element inside each project
   card, or add an `image` field to each entry in `data/projects.js` and render it.

## 6. Add certificate files

1. Put your certificate PDFs/images in `public/certificates/`.
2. Open `data/certifications.js` and update each `file` path to match, e.g.
   `/certificates/postulate-ai-ml.pdf`.

The four certifications already listed (Postulate, Digisailor, Adroit/IBM Cognos, Liztech)
match the certificates you provided — only the `file` path needs updating once you add the
actual files.

## 7. Update project links

In `data/projects.js`, replace the placeholder `github: '#'` and `demo: '#'` values with
your real repository and live demo URLs.

## 8. Deploy to Vercel

1. Push this project to a GitHub repository.
2. Go to https://vercel.com, sign in, and click **Add New → Project**.
3. Import your GitHub repository.
4. Vercel auto-detects Next.js — leave the default build settings as-is.
5. Click **Deploy**. You'll get a live URL (e.g. `your-portfolio.vercel.app`) in a couple
   of minutes.
6. Optional: add a custom domain under your Vercel project's **Settings → Domains**.

## Project structure

```
app/            Next.js App Router entry (layout, page, global styles)
components/     Navbar, Hero, About, Skills, Projects, Experience,
                Certifications, Achievements, Contact, Footer, AnimatedBackground
data/           Editable content: projects.js, skills.js, experience.js, certifications.js
public/         Static assets — add resume.pdf, /projects, /certificates here
```

## Notes on content accuracy

All internship dates, companies, and domains in `data/experience.js` and
`data/certifications.js` were taken directly from the certificates you provided
(Postulate, Digisailor, Adroit Technologies, Liztech). Project names, tech stack, and the
AICCI hackathon achievement were taken from your brief as given — nothing has been
invented. Placeholder values (`#` links, `your-username`, `bharathmadhu953@gmail.com`,
certificate file paths) are clearly marked with `TODO` comments in the code so you know
exactly what to replace.
