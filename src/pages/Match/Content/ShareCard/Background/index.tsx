export default function Background() {
  return (
    <div aria-hidden={true} className="absolute inset-0">
      {/* gradient orbs */}
      <div className="absolute bg-neon-green/15 blur-3xl h-110 left-0 rounded-full top-0 w-110" />
      <div className="absolute bg-accent/10 blur-3xl h-64 left-1/2 rounded-full top-1/2 -translate-x-1/2 -translate-y-1/2 w-64" />
      <div className="absolute bg-neon-purple/15 blur-3xl bottom-0 h-110 right-0 rounded-full w-110" />

      {/* grid pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
              linear-gradient(to right, hsl(var(--neon-purple) / 0.3) 1px, transparent 1px),
              linear-gradient(to bottom, hsl(var(--neon-purple) / 0.3) 1px, transparent 1px)
            `,
          backgroundSize: '60px 60px',
        }}
      />

      {/* corner decorations */}
      <div className="absolute border-highlight/40 border-l-3 border-t-3 h-10 left-6 rounded-tl-3xl top-6 w-10" />
      <div className="absolute border-highlight/40 border-r-3 border-t-3 h-10 right-6 rounded-tr-3xl top-6 w-10" />
      <div className="absolute border-highlight/40 border-b-3 border-l-3 h-10 bottom-6 left-6 rounded-bl-3xl w-10" />
      <div className="absolute border-highlight/40 border-b-3 border-r-3 h-10 bottom-6 right-6 rounded-br-3xl w-10" />

      {/* scan lines overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none scan-lines z-10" />
    </div>
  );
}
