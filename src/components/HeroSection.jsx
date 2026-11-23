import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const sectionRef = useRef(null);

  // Trigger entrance animations on mount
  useEffect(() => {
    const id = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(id);
  }, []);

  // Scroll-driven parallax
  useEffect(() => {
    let frame = 0;
    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        const y = window.scrollY;
        // Only track scroll while hero is near the viewport
        if (sectionRef.current) {
          const rect = sectionRef.current.getBoundingClientRect();
          if (rect.bottom > -200 && rect.top < window.innerHeight) {
            setScrollY(y);
          }
        }
        frame = 0;
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  // Clamp parallax so hero doesn't drift too far
  const p = Math.min(scrollY, 800);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative flex flex-col justify-between bg-[#FAF9FB] select-none
                 h-[calc(100dvh-4rem)] max-h-[calc(100dvh-4rem)]
                 overflow-hidden"
    >
      {/* 1. Ambient Glow in Logo Accent Colors */}
      <div className="absolute inset-0 pointer-events-none -z-10 flex items-center justify-center overflow-hidden">
        <div
          className="w-[800px] sm:w-[1050px] lg:w-[1300px] h-[550px] sm:h-[700px] lg:h-[850px] rounded-full bg-gradient-to-tr from-[#5E4BEE]/[0.09] via-[#7F77DD]/[0.06] to-[#378ADD]/[0.08] blur-[120px] transform -translate-y-6"
          style={{ transform: `translateY(calc(-1.5rem + ${p * 0.08}px))` }}
        />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[550px] lg:w-[800px] h-[300px] lg:h-[400px] bg-gradient-to-b from-white/95 to-transparent blur-3xl" />
      </div>

      {/* ═══════════════════════════════════════════════════════════
          MOBILE & SMALL SCREENS (< md)
      ═══════════════════════════════════════════════════════════ */}
      <div className="relative flex md:hidden h-full w-full z-10 min-h-0 overflow-hidden">

        {/* Background "WE HERE" in Low Opacity */}
        <div
          className={`absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 flex flex-col pointer-events-none select-none z-0 transition-all duration-1000 ease-out ${mounted ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-6'
            }`}
          style={{ transform: `translateY(calc(-50% + ${p * 0.06}px))` }}
        >
          <div className="font-display font-black text-[27vw] sm:text-[24vw] leading-[0.8] uppercase tracking-tighter text-zinc-900/[0.06]">
            WE
          </div>
          <div className="font-display font-black text-[27vw] sm:text-[24vw] leading-[0.8] uppercase tracking-tighter text-zinc-900/[0.06]">
            HER<span className="bg-gradient-to-tr from-[#5E4BEE]/40 via-[#7F77DD]/35 to-[#378ADD]/30 bg-clip-text text-transparent">E</span>
          </div>
        </div>

        {/* Girl on Extreme Right */}
        <div
          className={`absolute inset-y-0 right-0 h-full w-[65vw] sm:w-[55vw] z-10 pointer-events-none select-none flex items-start justify-end overflow-hidden pt-2 transition-all duration-[1400ms] ease-out ${mounted ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
          style={{ transform: `translateX(${p * 0.02}px)` }}
        >
          <img
            src="/assets/hero-ghost.png"
            alt=""
            className="absolute right-0 top-2 h-[88%] sm:h-[92%] w-auto max-w-none object-contain object-top translate-x-[48%] filter blur-[2px] opacity-20 z-0"
          />
          <img
            src="/assets/hero-cutout.png"
            alt="WeHere Hero Sanctuary"
            className="relative top-2 h-[90%] sm:h-[93%] w-auto max-w-none object-contain object-top translate-x-[46%] drop-shadow-[0_16px_32px_rgba(0,0,0,0.12)] z-10"
          />
        </div>

        {/* Foreground Content */}
        <div className="relative w-[60vw] sm:w-[52vw] max-w-[320px] h-full flex flex-col justify-center items-start pl-[clamp(1.15rem,4.5vw,2rem)] pr-2 z-20 shrink-0">

          {/* Kicker */}
          <div
            className={`flex items-center gap-1.5 mb-2 transition-all duration-700 ease-out ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
              }`}
            style={{ transitionDelay: '150ms' }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#5E4BEE]" />
            <span className="text-[10px] font-bold tracking-[0.2em] text-zinc-400 uppercase">
              You Are Not Alone
            </span>
          </div>

          {/* Headline */}
          <h1
            className={`text-[clamp(1.1rem,4.4vw,1.55rem)] font-medium text-zinc-900 leading-[1.25] tracking-tight mb-2 transition-all duration-700 ease-out ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
              }`}
            style={{ transitionDelay: '280ms' }}
          >
            Connecting Minds, Healing Together.
            <span className="block mt-1 text-zinc-500 font-normal text-xs sm:text-sm">
              Because No One Should Struggle Alone.
            </span>
          </h1>

          {/* Warm Human Subtext */}
          <p
            className={`text-[clamp(0.68rem,2.3vw,0.78rem)] text-zinc-500 leading-relaxed mb-4 max-w-[220px] transition-all duration-700 ease-out ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
              }`}
            style={{ transitionDelay: '420ms' }}
          >
            Sometimes, all we need is someone who understands. Someone who listens without judgment and reminds us we belong.
          </p>

          {/* CTA Button */}
          <a
            href="#download"
            className={`btn-spring group inline-flex items-center gap-2.5 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-zinc-900 text-white hover:bg-black text-[11px] sm:text-xs font-semibold tracking-wider uppercase border border-[#5E4BEE]/50 shadow-[0_4px_20px_rgba(94,75,238,0.3)] transition-all duration-700 ease-out ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
              }`}
            style={{ transitionDelay: '560ms' }}
          >
            <span>Discover WeHere</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#7A68F8] group-hover:text-white group-hover:translate-x-1 transition-all duration-300" />
          </a>

        </div>

      </div>

      {/* ═══════════════════════════════════════════════════════════
          DESKTOP & BIGGER SCREENS (md+)
      ═══════════════════════════════════════════════════════════ */}
      <div className="hidden md:block relative w-full h-full z-10 min-h-0 overflow-hidden">

        {/* 1. Background Typography with parallax */}
        <div
          className={`absolute inset-0 flex items-center justify-between pointer-events-none select-none z-0 px-6 lg:px-12 xl:px-16 transition-all duration-1000 ease-out ${mounted ? 'opacity-100' : 'opacity-0'
            }`}
          style={{ transform: `translateY(${p * 0.1}px)` }}
        >
          <div className="font-display font-black text-[22vw] lg:text-[20vw] leading-none uppercase tracking-tighter text-zinc-900/[0.06]">
            WE
          </div>
          <div className="font-display font-black text-[22vw] lg:text-[20vw] leading-none uppercase tracking-tighter text-zinc-900/[0.06]">
            HER<span className="bg-gradient-to-tr from-[#5E4BEE]/40 via-[#7F77DD]/35 to-[#378ADD]/30 bg-clip-text text-transparent">E</span>
          </div>
        </div>

        {/* 2. Main Portrait with parallax */}
        <div
          className={`absolute inset-x-0 bottom-0 h-full z-10 flex items-end justify-center pointer-events-none select-none overflow-hidden pb-0 transition-all duration-[1400ms] ease-out ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          style={{ transform: `translateY(${p * -0.05}px)` }}
        >
          <img
            src="/assets/hero-ghost.png"
            alt=""
            className="hidden xl:block absolute left-[12%] bottom-0 h-[68vh] xl:h-[72vh] w-auto object-contain object-bottom filter blur-[2px] opacity-25 z-0"
          />
          <img
            src="/assets/hero-cutout.png"
            alt="WeHere Hero Sanctuary"
            className="relative bottom-0 h-[68vh] lg:h-[71vh] xl:h-[74vh] max-h-[calc(100dvh-5.5rem)] w-auto object-contain object-bottom drop-shadow-[0_24px_48px_rgba(0,0,0,0.1)] z-10"
          />
        </div>

        {/* 3. Foreground Content */}
        <div className="relative w-full max-w-[1560px] mx-auto px-8 lg:px-14 xl:px-20 h-full z-20 pointer-events-none">
          <div className="grid grid-cols-12 h-full items-center">

            {/* LEFT COLUMN */}
            <div className="col-span-5 lg:col-span-4 flex flex-col justify-center items-start gap-4 lg:gap-5 pointer-events-auto z-20">

              {/* Kicker */}
              <div
                className={`flex items-center gap-2 transition-all duration-700 ease-out ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                style={{ transitionDelay: '200ms' }}
              >
                <span className="w-2 h-2 rounded-full bg-[#5E4BEE]" />
                <span className="text-[11px] font-bold tracking-[0.22em] text-zinc-400 uppercase">
                  A Space For Genuine Connection
                </span>
              </div>

              {/* Headline */}
              <h1
                className={`text-xl lg:text-2xl xl:text-3xl font-medium text-zinc-900 leading-[1.22] tracking-tight transition-all duration-700 ease-out ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                style={{ transitionDelay: '340ms' }}
              >
                Connecting Minds,
                <br />
                Healing Together.
                <span className="block mt-2 text-zinc-600 font-normal text-sm lg:text-base xl:text-lg leading-snug">
                  Because No One Should Struggle Alone.
                </span>
              </h1>

              {/* Empathetic Paragraph */}
              <p
                className={`text-xs lg:text-sm text-zinc-500 leading-relaxed max-w-[340px] transition-all duration-700 ease-out ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                style={{ transitionDelay: '480ms' }}
              >
                Sometimes, all we need is someone who understands. Someone who listens without judgment and reminds us that we are not alone.
              </p>

              {/* CTA Button & Store Badges */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3.5 pt-1">
                <a
                  href="#download"
                  className={`btn-spring group inline-flex items-center gap-3 px-6 py-3 rounded-full bg-zinc-900 text-white hover:bg-black text-xs font-semibold tracking-wider border-2 border-[#5E4BEE]/45 shadow-[0_8px_32px_rgba(94,75,238,0.28)] hover:shadow-[0_12px_44px_rgba(94,75,238,0.48)] hover:border-[#5E4BEE] transition-all duration-700 ease-out ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                    }`}
                  style={{ transitionDelay: '620ms' }}
                >
                  <span>Discover WeHere</span>
                  <ArrowRight className="w-4 h-4 text-[#7A68F8] group-hover:text-white group-hover:translate-x-1.5 transition-all duration-300" />
                </a>

                <div
                  className={`flex items-center gap-2 transition-all duration-700 ease-out ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                    }`}
                  style={{ transitionDelay: '700ms' }}
                >
                  <a
                    href="#download"
                    className="p-2.5 rounded-full bg-white/80 hover:bg-white text-zinc-900 border border-black/[0.08] shadow-sm hover:shadow transition-all flex items-center justify-center"
                    aria-label="Download on App Store"
                  >
                    <img
                      src="/assets/logo/apple.png"
                      alt="Apple App Store"
                      className="w-4 h-4 object-contain"
                    />
                  </a>
                  <a
                    href="#download"
                    className="p-2.5 rounded-full bg-white/80 hover:bg-white text-zinc-900 border border-black/[0.08] shadow-sm hover:shadow transition-all flex items-center justify-center"
                    aria-label="Get it on Google Play"
                  >
                    <img
                      src="/assets/logo/googleplay.jpg"
                      alt="Google Play"
                      className="w-4 h-4 object-contain rounded-sm"
                    />
                  </a>
                </div>
              </div>

            </div>

            {/* Center Spacer */}
            <div className="hidden lg:block lg:col-span-4" />

            {/* RIGHT COLUMN */}
            <div className="col-span-5 lg:col-span-4 col-start-8 lg:col-start-9 flex flex-col justify-center items-end text-right pointer-events-auto z-20">
              <div
                className={`flex flex-col items-end gap-2.5 max-w-[300px] lg:max-w-[340px] transition-all duration-700 ease-out ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                style={{ transitionDelay: '760ms' }}
              >
                <div className="h-[2px] w-9 rounded-full bg-gradient-to-r from-[#5E4BEE] via-[#7F77DD] to-[#378ADD] shadow-[0_0_10px_rgba(94,75,238,0.3)] mb-1" />
                <p className="text-xs lg:text-sm xl:text-base text-zinc-600 leading-relaxed font-normal">
                  Healing begins when we feel heard, understood, and accepted. You are not alone. WeHere is here.
                </p>
                <span className="text-[11px] font-mono font-medium text-zinc-400  tracking-widest pt-1">
                  WeHere Sanctuary
                </span>
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* Subtle Bottom Divider */}
      <div className="absolute inset-x-0 bottom-0 h-px bg-black/[0.04]" />
    </section>
  );
}