import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function PolicyLayout({ title, badge, lastUpdated, wide = false, children }) {
  const [mounted, setMounted] = useState(false);
  const headerRef = useRef(null);

  // Trigger entrance animations on mount
  useEffect(() => {
    const id = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <main className="min-h-screen bg-[#F4F4F5] text-zinc-950 font-sans selection:bg-zinc-900 selection:text-white pb-24">

      {/* ── RAW CHECKERED HEADER BANNER ── */}
      <div ref={headerRef} className="relative border-b-2 border-zinc-950 overflow-hidden bg-white mb-12">

        {/* Checkerboard Pattern Overlay (Pure CSS) */}
        <div
          className="absolute inset-0 opacity-[0.15] pointer-events-none z-0"
          style={{
            backgroundImage: `
              linear-gradient(45deg, #000 25%, transparent 25%), 
              linear-gradient(-45deg, #000 25%, transparent 25%), 
              linear-gradient(45deg, transparent 75%, #000 75%), 
              linear-gradient(-45deg, transparent 75%, #000 75%)
            `,
            backgroundSize: '40px 40px',
            backgroundPosition: '0 0, 0 20px, 20px -20px, -20px 0px'
          }}
        />

        <div className="relative z-10 w-full max-w-6xl mx-auto px-6 lg:px-12 py-16 md:py-24">

          {/* Back Link */}
          <div
            className={`mb-12 transition-all duration-700 ease-out ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            <Link
              to="/policies"
              className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-zinc-600 hover:text-zinc-950 transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span>Back to Hub</span>
            </Link>
          </div>

          {/* Badge */}
          {badge && (
            <span
              className={`inline-block px-3 py-1 border border-zinc-950 bg-zinc-950 text-white text-xs font-mono uppercase tracking-widest mb-6 transition-all duration-700 ease-out ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              style={{ transitionDelay: '50ms' }}
            >
              {badge}
            </span>
          )}

          {/* Title */}
          <h1
            className={`text-[clamp(2.5rem,5vw,4.5rem)] font-black uppercase tracking-tighter leading-[0.9] max-w-4xl text-zinc-950 transition-all duration-1000 ease-out ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ transitionDelay: '100ms' }}
          >
            {title}
          </h1>

          {/* Meta Info */}
          {lastUpdated && (
            <p
              className={`mt-6 text-xs sm:text-sm text-zinc-600 font-mono font-medium max-w-xl leading-relaxed transition-all duration-1000 ease-out ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: '200ms' }}
            >
              Last Updated & Verified: {lastUpdated} <br className="sm:hidden" />
              <span className="hidden sm:inline mx-2">•</span>
              WeHere Networks Private Limited
            </p>
          )}
        </div>
      </div>

      {/* ── CONTENT CONTAINER ── */}
      <div className={`px-6 lg:px-12 mx-auto ${wide ? 'max-w-6xl' : 'max-w-4xl'}`}>
        <article
          className={`
            ${wide ? "w-full" : "max-w-none text-zinc-700 text-sm sm:text-base leading-relaxed space-y-8"}
            transition-all duration-1000 ease-out delay-300
            ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
          `}
        >
          {children}
        </article>
      </div>
    </main>
  );
}