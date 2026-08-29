import './globals.css';

export const metadata = {
  title: 'Madhu Bharath E | Full Stack Developer & AI/ML Enthusiast',
  description:
    'Portfolio of Madhu Bharath E, a Full Stack Developer and AI/ML enthusiast building modern web applications and intelligent solutions.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body bg-base text-ink antialiased">{children}</body>
    </html>
  );
}
