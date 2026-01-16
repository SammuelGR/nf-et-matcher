const stars = Array.from({ length: 50 }, () => ({
  delay: Math.random() * 5,
  size: Math.random() * 2 + 1,
  x: Math.random() * 100,
  y: Math.random() * 100,
}));

export default function Background() {
  return (
    <div aria-hidden={true} className="z-0 fixed inset-0 overflow-hidden pointer-events-none">
      {/* base gradient */}
      <div className="absolute inset-0 bg-linear-to-br from-background via-background to-card" />

      {/* animated orbs */}
      <div className="absolute animate-pulse-glow bg-neon-purple/20 blur-[100px] h-80 -left-40 rounded-full top-0 w-80" />

      <div
        className="absolute animate-pulse-glow bg-neon-cyan/5 blur-[150px] h-150 left-1/2 rounded-full top-1/2 -translate-x-1/2 -translate-y-1/2 w-150"
        style={{ animationDelay: '2s' }}
      />

      <div
        className="absolute animate-pulse-glow bg-neon-yellow/15 blur-[120px] bottom-0 h-96 -right-40 rounded-full w-96"
        style={{ animationDelay: '1s' }}
      />

      {/* stars */}
      {stars.map((star, i) => (
        <div
          key={i}
          className="absolute animate-twinkle bg-white rounded-full"
          style={{
            animationDelay: `${star.delay}s`,
            height: `${star.size}px`,
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
          }}
        />
      ))}

      {/* 3D grid floor */}
      <div className="absolute bottom-0 left-0 right-0 h-[40vh] grid-perspective opacity-50" />

      {/* noise texture */}
      <div className="absolute inset-0 noise opacity-[0.02] pointer-events-none z-50" />

      {/* scan lines overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none scan-lines z-100" />
    </div>
  );
}
