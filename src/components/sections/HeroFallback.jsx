/**
 * Lightweight CSS-only fallback for the Hero background on mobile.
 * Replaces the 5MB Spline 3D scene with pure CSS animations.
 * Zero external dependencies.
 */
const HeroFallback = () => {
  return (
    <div className="absolute inset-0 bg-black overflow-hidden">
      {/* Animated gradient orb */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full opacity-20"
        style={{
          background: 'radial-gradient(circle, #C41E3A 0%, transparent 70%)',
          animation: 'heroOrb 8s ease-in-out infinite',
        }}
      />
      
      {/* Secondary orb */}
      <div 
        className="absolute top-1/3 right-1/4 w-[300px] h-[300px] rounded-full opacity-10"
        style={{
          background: 'radial-gradient(circle, #EF4444 0%, transparent 70%)',
          animation: 'heroOrb 12s ease-in-out infinite reverse',
        }}
      />

      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Noise texture overlay for depth */}
      <div 
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
        }}
      />

      {/* CSS Keyframes */}
      <style>{`
        @keyframes heroOrb {
          0%, 100% { transform: translate(-50%, -50%) scale(1); }
          50% { transform: translate(-50%, -50%) scale(1.3); }
        }
      `}</style>
    </div>
  );
};

export default HeroFallback;
