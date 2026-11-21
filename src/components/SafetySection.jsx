import React, { useRef } from 'react';

export default function SafetySection() {
  const scrollContainerRef = useRef(null);

  const handleScroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -480 : 480;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const bentoCards = [
    {
      kicker: '01 / IDENTITY SHIELD',
      title: 'Zero-Knowledge Pseudonymity',
      desc: 'Exchange lived experiences and speak freely without exposing your real name, phone number, workplace, or social handles.',
      width: 'w-[320px] sm:w-[480px] lg:w-[540px]',
      renderVisual: () => (
        <div className="bg-white/80 rounded-xl p-4 border border-zinc-200/80 shadow-xs flex flex-col gap-3 mt-4">
          <div className="flex items-center justify-between text-[11px] font-mono">
            <span className="flex items-center gap-1.5 text-emerald-600 font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Cryptographic Handshake: Active
            </span>
            <span className="text-zinc-400">SHA-256</span>
          </div>
          <div className="grid grid-cols-2 gap-2 text-xs">
            <div className="bg-zinc-100/80 rounded-lg p-2.5 border border-zinc-200/50">
              <div className="text-[10px] uppercase font-bold text-zinc-400 tracking-wider">Public Identity</div>
              <div className="font-semibold text-zinc-900 mt-0.5">Anonymous Peer</div>
            </div>
            <div className="bg-zinc-100/80 rounded-lg p-2.5 border border-zinc-200/50">
              <div className="text-[10px] uppercase font-bold text-zinc-400 tracking-wider">Bilateral Consent</div>
              <div className="font-semibold text-zinc-900 mt-0.5">Double Opt-In</div>
            </div>
          </div>
          <div className="w-full bg-zinc-200/70 h-1.5 rounded-full overflow-hidden">
            <div className="h-full w-full bg-gradient-to-r from-[#5E4BEE] via-[#7F77DD] to-[#378ADD]" />
          </div>
        </div>
      )
    },
    {
      kicker: '02 / REAL-TIME MONITORING',
      title: 'Automated Harm-Prevention Shields',
      desc: 'Continuous semantic analysis monitors for harassment, solicitation, or toxic conduct with sub-50ms latency.',
      width: 'w-[290px] sm:w-[360px] lg:w-[390px]',
      renderVisual: () => (
        <div className="bg-white/80 rounded-xl p-4 border border-zinc-200/80 shadow-xs flex flex-col justify-between gap-3 mt-4">
          <div className="flex items-baseline justify-between">
            <span className="text-3xl font-extrabold font-display text-zinc-900 tracking-tight">99.9%</span>
            <span className="text-[11px] font-semibold text-[#5E4BEE] bg-[#5E4BEE]/10 px-2 py-0.5 rounded-full">
              Zero Tolerance
            </span>
          </div>
          <div className="flex items-center justify-between text-[11px] text-zinc-500 font-mono">
            <span>Safe Space Index</span>
            <span>&lt; 50ms latency</span>
          </div>
          {/* Audio / Semantic Equalizer Bars in Logo Colors */}
          <div className="flex items-end gap-1.5 h-10 pt-1">
            <span className="flex-1 bg-[#5E4BEE] rounded-full h-[60%]" />
            <span className="flex-1 bg-[#7F77DD] rounded-full h-[100%]" />
            <span className="flex-1 bg-[#378ADD] rounded-full h-[40%]" />
            <span className="flex-1 bg-[#5E4BEE] rounded-full h-[85%]" />
            <span className="flex-1 bg-[#7F77DD] rounded-full h-[55%]" />
            <span className="flex-1 bg-[#378ADD] rounded-full h-[95%]" />
            <span className="flex-1 bg-[#5E4BEE] rounded-full h-[70%]" />
          </div>
        </div>
      )
    },
    {
      kicker: '03 / CLINICAL PROTOCOL',
      title: 'Instant Crisis Hotline Fallback',
      desc: 'We are a peer community, not emergency responders. When severe distress is detected, we seamlessly connect users with verified crisis helplines.',
      width: 'w-[310px] sm:w-[440px] lg:w-[480px]',
      renderVisual: () => (
        <div className="bg-white/80 rounded-xl p-4 border border-zinc-200/80 shadow-xs flex flex-col gap-3 mt-4">
          <div className="flex items-center justify-between text-xs font-semibold text-zinc-700">
            <span>Emergency Handover Pipeline</span>
            <span className="font-mono text-[11px] text-zinc-400">24/7 Redirection</span>
          </div>
          <div className="flex items-center gap-2 text-[11px] font-medium text-zinc-600">
            <div className="flex-1 py-1.5 px-2.5 rounded-lg bg-zinc-100 text-center border border-zinc-200/60">
              1. Triage
            </div>
            <span className="text-zinc-400">→</span>
            <div className="flex-1 py-1.5 px-2.5 rounded-lg bg-zinc-100 text-center border border-zinc-200/60">
              2. Warm Transfer
            </div>
            <span className="text-zinc-400">→</span>
            <div className="flex-1 py-1.5 px-2.5 rounded-lg bg-[#5E4BEE]/10 text-[#5E4BEE] font-bold text-center border border-[#5E4BEE]/20">
              3. Direct Hotline
            </div>
          </div>
          <div className="flex items-center justify-between pt-1 border-t border-zinc-200/60 text-[11px] text-zinc-500">
            <span>National 988 / Tele-MANAS Handshake</span>
            <span className="text-emerald-600 font-bold">100% Available</span>
          </div>
        </div>
      )
    },
    {
      kicker: '04 / COMMUNITY BOUNDARY',
      title: 'Strictly Adults 18+ Sanctuary',
      desc: 'Dedicated exclusively to adults navigating adult life transitions, career fatigue, grief, and emotional exhaustion. No minors, no curated drama.',
      width: 'w-[280px] sm:w-[340px] lg:w-[370px]',
      renderVisual: () => (
        <div className="bg-white/80 rounded-xl p-4 border border-zinc-200/80 shadow-xs flex items-center justify-between mt-4">
          <div className="flex flex-col">
            <span className="font-display font-black text-4xl text-zinc-900 tracking-tight">18+</span>
            <span className="text-[11px] text-zinc-500 font-medium mt-0.5">Verified Adult Space</span>
          </div>
          <div className="text-right flex flex-col items-end gap-1">
            <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-zinc-900 text-white">
              Age-Gated
            </span>
            <span className="text-[10px] text-zinc-400 font-mono">Zero Minor Exposure</span>
          </div>
        </div>
      )
    },
    {
      kicker: '05 / RADICAL CONTROL',
      title: '1-Tap Silent Disconnect & Purge',
      desc: 'You never owe an explanation. If an interaction feels misaligned, one tap instantly ends the room, unmatches both peers, and purges shared logs.',
      width: 'w-[310px] sm:w-[420px] lg:w-[460px]',
      renderVisual: () => (
        <div className="bg-white/80 rounded-xl p-4 border border-zinc-200/80 shadow-xs flex flex-col gap-2.5 mt-4">
          <div className="flex items-center justify-between text-xs font-semibold text-zinc-900">
            <span>Autonomous Sever Protocol</span>
            <span className="text-[#5E4BEE] font-mono text-[11px]">Instant Purge</span>
          </div>
          <div className="py-2 px-3 rounded-lg bg-zinc-900 text-white flex items-center justify-between text-[11px] font-medium">
            <span>Silent Unmatch Triggered</span>
            <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
          </div>
          <div className="flex items-center justify-between text-[10px] text-zinc-500 pt-0.5">
            <span>No notifications dispatched to peer</span>
            <span className="font-mono">Ephemeral logs erased</span>
          </div>
        </div>
      )
    }
  ];

  return (
    <section
      id="safety"
      className="relative bg-[#EBECEF] text-zinc-900 py-16 sm:py-20 lg:py-28 border-t border-black/[0.08] overflow-hidden select-none"
    >
      {/* Architectural Grid Overlay matching Features section */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.035] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="relative max-w-[1560px] mx-auto z-10 px-5 sm:px-8 lg:px-14">

        {/* ── TOP SECTION HEADER WITH SCROLL NAVIGATION CONTROLS ── */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 border-b border-zinc-300/80 pb-6 mb-8 sm:mb-12">
          
          <div>
            {/* Index Tracker */}
            <div className="flex items-center gap-2 mb-3 text-xs font-semibold tracking-wider">
              <span className="text-[#5E4BEE] font-bold">/ 03</span>
              <span className="uppercase text-zinc-600 tracking-[0.2em]">Safety &amp; Trust Protocols</span>
            </div>

            {/* Section Headline */}
            <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-[2.65rem] uppercase tracking-tight text-zinc-900 leading-[1.08]">
              Engineered For Radical Emotional Safety
            </h2>
            <p className="text-sm sm:text-base text-zinc-600 mt-2.5 max-w-2xl leading-relaxed">
              Every protection mechanism inside WeHere is designed to give you uncompromising peace of mind.
            </p>
          </div>

          {/* Horizontal Scroll Controls (No Lucide icons — pure SVG vectors) */}
          <div className="flex items-center gap-2.5 self-start sm:self-end shrink-0">
            <button
              onClick={() => handleScroll('left')}
              aria-label="Scroll left"
              type="button"
              className="w-10 h-10 rounded-xl bg-white border border-zinc-300/80 hover:bg-zinc-900 hover:text-white hover:border-zinc-900 transition-all duration-300 flex items-center justify-center text-zinc-800 shadow-xs active:scale-95"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => handleScroll('right')}
              aria-label="Scroll right"
              type="button"
              className="w-10 h-10 rounded-xl bg-white border border-zinc-300/80 hover:bg-zinc-900 hover:text-white hover:border-zinc-900 transition-all duration-300 flex items-center justify-center text-zinc-800 shadow-xs active:scale-95"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

        </div>

      </div>

      {/* ── BENTO HORIZONTAL SCROLLING TRACK ── */}
      <div
        ref={scrollContainerRef}
        className="flex gap-5 sm:gap-6 overflow-x-auto pb-8 pt-2 px-5 sm:px-8 lg:px-14 scroll-smooth scrollbar-none snap-x snap-mandatory"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {bentoCards.map((card, idx) => (
          <div
            key={idx}
            className={`${card.width} shrink-0 snap-start group relative bg-[#F7F7F9] hover:bg-white rounded-2xl border border-zinc-300/80 hover:border-zinc-400/80 p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.07)] overflow-hidden`}
          >
            {/* Top Bar: Kicker + Indicator mark */}
            <div className="flex items-center justify-between text-xs font-mono font-bold tracking-wider text-zinc-400 mb-3">
              <span>{card.kicker}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#5E4BEE] to-[#378ADD] opacity-70 group-hover:opacity-100 transition-opacity" />
            </div>

            {/* Main Content */}
            <div>
              <h3 className="font-display font-bold text-xl sm:text-[1.35rem] text-zinc-900 leading-snug tracking-tight mb-2">
                {card.title}
              </h3>
              <p className="text-xs sm:text-[13px] text-zinc-600 leading-relaxed font-normal">
                {card.desc}
              </p>
            </div>

            {/* Custom Interactive / Visual Mockup */}
            {card.renderVisual()}
          </div>
        ))}
      </div>

      {/* ── SUBTLE BOTTOM SCROLL INDICATOR ── */}
      <div className="max-w-[1560px] mx-auto px-5 sm:px-8 lg:px-14 flex items-center justify-between pt-2 text-[11px] font-mono text-zinc-500">
        <div className="flex items-center gap-2">
          <span className="w-2 h-0.5 rounded-full bg-[#5E4BEE]" />
          <span>Horizontal Bento Track</span>
        </div>
        <span className="hidden sm:inline">Swipe or use arrows to navigate pillars</span>
      </div>

    </section>
  );
}
