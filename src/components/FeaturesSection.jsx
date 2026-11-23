import React, { useState } from 'react';

export default function FeaturesSection() {
  const [activeMobileIdx, setActiveMobileIdx] = useState(0);

  const cards = [
    {
      title: 'Shared Experiences',
      desc: 'Connect with peers who relate to the real challenges you choose to share.',
      image: '/assets/peer_connection.jpg'
    },
    {
      title: 'Zero Judgment',
      desc: 'Open conversations in an environment that genuinely values empathy and listening.',
      image: '/assets/emotional_safety.jpg'
    },
    {
      title: 'Space To Be Yourself',
      desc: 'Share your thoughts at your own pace with complete control over your privacy.',
      image: '/assets/mindful_journaling.jpg'
    }
  ];

  return (
    <section
      id="features"
      className="relative bg-[#EBECEF] text-zinc-900 h-[100dvh] max-h-[100dvh] flex flex-col justify-between py-3 sm:py-5 lg:py-6 px-4 sm:px-8 lg:px-14 border-t border-black/[0.08] overflow-hidden select-none"
    >
      {/* Subtle Architectural Grid Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.035] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      {/* Subtle Ambient Glow in Logo Colors */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full bg-gradient-to-tr from-[#5E4BEE]/[0.05] via-[#7F77DD]/[0.03] to-[#378ADD]/[0.04] blur-[120px] pointer-events-none -z-10" />

      <div className="relative max-w-6xl mx-auto z-10 w-full h-full flex flex-col justify-between">

        {/* ── HEADER (Compact & Elegant with Logo Accent) ── */}
        <div className="text-center shrink-0 pt-1 sm:pt-2">
          <div className="inline-flex items-center gap-2 text-[10px] sm:text-xs font-semibold tracking-[0.25em] text-zinc-500 uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#5E4BEE] to-[#378ADD] shadow-[0_0_6px_rgba(94,75,238,0.5)]" />
            <span>This Is What We Do</span>
          </div>
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl text-zinc-900 tracking-tight mt-1">
            Our Core <span className="bg-gradient-to-r from-[#5E4BEE] to-[#378ADD] bg-clip-text text-transparent">Pillars</span>
          </h2>
        </div>

        {/* ── DESKTOP & TABLET: 3 Arch Cards Side By Side (md+) ── */}
        <div className="hidden md:flex items-center justify-center gap-5 lg:gap-7 flex-1 min-h-0 my-auto py-2">
          {cards.map((c, i) => (
            <div
              key={i}
              className="group flex flex-col bg-[#F7F7F9] hover:bg-white rounded-t-[160px] lg:rounded-t-[180px] rounded-b-2xl border border-zinc-300/80 hover:border-[#5E4BEE]/35 p-3 sm:p-3.5 lg:p-4 transition-all duration-300 shadow-sm hover:shadow-[0_16px_36px_rgba(94,75,238,0.1)] overflow-hidden h-full max-h-[64dvh] lg:max-h-[68dvh] w-[270px] lg:w-[310px] xl:w-[330px]"
            >
              {/* Arch Image Window: Grayscale image with blue/purple gradient rim */}
              <div className="w-full h-[64%] rounded-t-[140px] lg:rounded-t-[160px] p-[2px] bg-gradient-to-b from-[#5E4BEE]/30 via-[#378ADD]/20 to-transparent overflow-hidden shrink-0">
                <div className="w-full h-full rounded-t-[138px] lg:rounded-t-[158px] overflow-hidden relative bg-zinc-200">
                  <img
                    src={c.image}
                    alt={c.title}
                    className="w-full h-full object-cover filter grayscale contrast-125 brightness-95 group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/20 via-transparent to-transparent opacity-60" />
                </div>
              </div>

              {/* Card Content: Title & Minimal Description (No Read More Button) */}
              <div className="pt-4 lg:pt-5 px-2 text-center flex flex-col items-center justify-center flex-1 min-h-0">
                <h3 className="font-display text-lg lg:text-xl xl:text-2xl font-bold text-zinc-900 tracking-tight mb-1">
                  {c.title}
                </h3>

                {/* Subtle blue & purple accent bar */}
                <div className="w-5 h-[2px] rounded-full bg-gradient-to-r from-[#5E4BEE] to-[#378ADD] mb-2 group-hover:w-8 transition-all duration-300" />

                <p className="text-xs lg:text-[13px] text-zinc-500 leading-relaxed font-normal max-w-[240px]">
                  {c.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* ── MOBILE OPTIMIZED (< md): Single Viewport Horizontal Swipe ── */}
        <div className="flex md:hidden flex-col justify-center flex-1 min-h-0 w-full my-auto py-1">
          <div
            className="flex gap-3.5 overflow-x-auto snap-x snap-mandatory scrollbar-none px-3 py-1 items-center h-full max-h-[65dvh]"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            onScroll={(e) => {
              const scrollLeft = e.currentTarget.scrollLeft;
              const cardWidth = e.currentTarget.offsetWidth * 0.75;
              const idx = Math.round(scrollLeft / cardWidth);
              if (idx !== activeMobileIdx && idx >= 0 && idx < cards.length) {
                setActiveMobileIdx(idx);
              }
            }}
          >
            {cards.map((c, i) => (
              <div
                key={i}
                className="group flex flex-col bg-[#F7F7F9] rounded-t-[140px] rounded-b-2xl border border-zinc-300/80 p-3 pb-4 shadow-sm overflow-hidden h-full max-h-[60dvh] w-[75vw] max-w-[270px] shrink-0 snap-center justify-between"
              >
                {/* Arch Image Window with gradient rim */}
                <div className="w-full h-[64%] rounded-t-[130px] p-[2px] bg-gradient-to-b from-[#5E4BEE]/35 via-[#378ADD]/25 to-transparent overflow-hidden shrink-0">
                  <div className="w-full h-full rounded-t-[128px] overflow-hidden relative bg-zinc-200">
                    <img
                      src={c.image}
                      alt={c.title}
                      className="w-full h-full object-cover filter grayscale contrast-125 brightness-95"
                    />
                  </div>
                </div>

                {/* Card Content (No Read More Button) */}
                <div className="pt-3 px-1 text-center flex flex-col items-center justify-center flex-1 min-h-0">
                  <h3 className="font-display text-base font-bold text-zinc-900 tracking-tight mb-1">
                    {c.title}
                  </h3>
                  <div className="w-4 h-[2px] rounded-full bg-gradient-to-r from-[#5E4BEE] to-[#378ADD] mb-1.5" />
                  <p className="text-[11px] text-zinc-500 leading-snug font-normal line-clamp-2">
                    {c.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Dot Indicators with Logo Colors */}
          <div className="flex items-center justify-center gap-1.5 pt-2 shrink-0">
            {cards.map((_, i) => (
              <span
                key={i}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  activeMobileIdx === i
                    ? 'w-5 bg-gradient-to-r from-[#5E4BEE] to-[#378ADD] shadow-[0_0_6px_rgba(94,75,238,0.5)]'
                    : 'w-1.5 bg-zinc-400/60'
                }`}
              />
            ))}
          </div>
        </div>

        {/* ── FOOTER BAR ── */}
        <div className="text-center text-[10px] font-mono text-zinc-400 uppercase tracking-widest shrink-0 pb-1 flex items-center justify-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#5E4BEE]/60" />
          <span>WeHere Sanctuary Pillars</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#378ADD]/60" />
        </div>

      </div>
    </section>
  );
}
