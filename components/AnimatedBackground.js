export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden bg-base">
      {/* base grid */}
      <div className="absolute inset-0 grid-overlay opacity-70" />

      {/* gradient blobs */}
      <div className="absolute -top-40 -left-32 h-[420px] w-[420px] rounded-full bg-glow-violet blur-3xl animate-drift" />
      <div className="absolute top-1/3 -right-24 h-[380px] w-[380px] rounded-full bg-glow-cyan blur-3xl animate-drift [animation-delay:3s]" />
      <div className="absolute bottom-0 left-1/4 h-[320px] w-[320px] rounded-full bg-glow-violet blur-3xl opacity-70 animate-drift [animation-delay:6s]" />

      {/* faint drifting particles */}
      <div className="absolute inset-0">
        {[...Array(14)].map((_, i) => (
          <span
            key={i}
            className="absolute block h-1 w-1 rounded-full bg-cyan-300/40 animate-floaty"
            style={{
              top: `${(i * 37) % 100}%`,
              left: `${(i * 53) % 100}%`,
              animationDelay: `${(i % 6) * 0.8}s`,
              animationDuration: `${6 + (i % 5)}s`,
            }}
          />
        ))}
      </div>

      {/* vignette for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-base/40 via-transparent to-base" />
    </div>
  );
}
