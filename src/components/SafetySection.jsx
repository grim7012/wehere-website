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
      kicker: '01 / PRIVACY AND CHOICE',
      title: 'Control How You Show Up',
      desc: 'You decide how much to share and when. Connect under a chosen pseudonym without revealing your real name, phone number, or personal social profiles.',
      width: 'w-[320px] sm:w-[480px] lg:w-[540px]',
      renderVisual: () => (
        <div className="bg-white/80 rounded-xl p-4 border border-zinc-200/80 shadow-xs flex flex-col gap-3 mt-4">
          <div className="flex items-center justify-between text-[11px] font-mono">
            <span className="flex items-center gap-1.5 text-emerald-600 font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              Private Pseudonym Active
            </span>
            <span className="text-zinc-400">Zero Pressure</span>
          </div>
          <div className="grid grid-cols-2 gap-2 text-xs">
            <div className="bg-zinc-100/80 rounded-lg p-2.5 border border-zinc-200/50">
              <div className="text-[10px] uppercase font-bold text-zinc-400 tracking-wider">Your Identity</div>
              <div className="font-semibold text-zinc-900 mt-0.5">Completely Protected</div>
            </div>
            <div className="bg-zinc-100/80 rounded-lg p-2.5 border border-zinc-200/50">
              <div className="text-[10px] uppercase font-bold text-zinc-400 tracking-wider">Personal Pace</div>
              <div className="font-semibold text-zinc-900 mt-0.5">Share When Ready</div>
            </div>
          </div>
          <div className="w-full bg-zinc-200/70 h-1.5 rounded-full overflow-hidden">
            <div className="h-full w-full bg-gradient-to-r from-[#5E4BEE] via-[#7F77DD] to-[#378ADD]" />
          </div>
        </div>
      )
    },
    {
      kicker: '02 / MUTUAL RESPECT',
      title: 'Respect Always Comes First',
      desc: 'We encourage kindness and mutual respect. Harassment, discrimination, and bullying have zero place in our community.',
      width: 'w-[290px] sm:w-[360px] lg:w-[390px]',
      renderVisual: () => (
        <div className="bg-white/80 rounded-xl p-4 border border-zinc-200/80 shadow-xs flex flex-col justify-between gap-3 mt-4">
          <div className="flex items-baseline justify-between">
            <span className="text-3xl font-extrabold font-display text-zinc-900 tracking-tight">100%</span>
            <span className="text-[11px] font-semibold text-[#5E4BEE] bg-[#5E4BEE]/10 px-2 py-0.5 rounded-full">
              Zero Judgment
            </span>
          </div>
          <div className="flex items-center justify-between text-[11px] text-zinc-500 font-mono">
            <span>Commitment to Empathy</span>
            <span>Kindness Standard</span>
          </div>
          {/* Gentle Equalizer Bars */}
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
      kicker: '03 / RESPONSIBLE CARE',
      title: 'Support Grounded In Safety',
      desc: 'We are a peer support community walking beside you. If anyone ever experiences a mental health crisis, we provide direct, compassionate connections to qualified professionals.',
      width: 'w-[310px] sm:w-[440px] lg:w-[480px]',
      renderVisual: () => (
        <div className="bg-white/80 rounded-xl p-4 border border-zinc-200/80 shadow-xs flex flex-col gap-3 mt-4">
          <div className="flex items-center justify-between text-xs font-semibold text-zinc-700">
            <span>Compassionate Crisis Support</span>
            <span className="font-mono text-[11px] text-zinc-400">Available 24/7</span>
          </div>
          <div className="flex items-center gap-2 text-[11px] font-medium text-zinc-600">
            <div className="flex-1 py-1.5 px-2.5 rounded-lg bg-zinc-100 text-center border border-zinc-200/60">
              1. Empathetic Care
            </div>
            <span className="text-zinc-400">→</span>
            <div className="flex-1 py-1.5 px-2.5 rounded-lg bg-zinc-100 text-center border border-zinc-200/60">
              2. Warm Guidance
            </div>
            <span className="text-zinc-400">→</span>
            <div className="flex-1 py-1.5 px-2.5 rounded-lg bg-[#5E4BEE]/10 text-[#5E4BEE] font-bold text-center border border-[#5E4BEE]/20">
              3. Certified Helplines
            </div>
          </div>
          <div className="flex items-center justify-between pt-1 border-t border-zinc-200/60 text-[11px] text-zinc-500">
            <span>National 988 and Tele-MANAS Handshake</span>
            <span className="text-emerald-600 font-bold">Always Here</span>
          </div>
        </div>
      )
    },
    {
      kicker: '04 / OUR COMMUNITY',
      title: 'Dedicated Strictly To Adults 18+',
      desc: 'Created exclusively for adults navigating real adult life challenges, workplace stress, personal transitions, and emotional hurdles in a mature, supportive space.',
      width: 'w-[280px] sm:w-[340px] lg:w-[370px]',
      renderVisual: () => (
        <div className="bg-white/80 rounded-xl p-4 border border-zinc-200/80 shadow-xs flex items-center justify-between mt-4">
          <div className="flex flex-col">
            <span className="font-display font-black text-4xl text-zinc-900 tracking-tight">18+</span>
            <span className="text-[11px] text-zinc-500 font-medium mt-0.5">Adult Community of Care</span>
          </div>
          <div className="text-right flex flex-col items-end gap-1">
            <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-zinc-900 text-white">
              Verified Space
            </span>
            <span className="text-[10px] text-zinc-400 font-mono">Thoughtful Peers</span>
          </div>
        </div>
      )
    },
    {
      kicker: '05 / PERSONAL BOUNDARIES',
      title: 'Step Away With Zero Pressure',
      desc: 'You never owe anyone an explanation. If a conversation does not feel right, you can leave quietly with a single tap at any time.',
      width: 'w-[310px] sm:w-[420px] lg:w-[460px]',
      renderVisual: () => (
        <div className="bg-white/80 rounded-xl p-4 border border-zinc-200/80 shadow-xs flex flex-col gap-2.5 mt-4">
          <div className="flex items-center justify-between text-xs font-semibold text-zinc-900">
            <span>Your Personal Comfort</span>
            <span className="text-[#5E4BEE] font-mono text-[11px]">Always Respected</span>
          </div>
          <div className="py-2 px-3 rounded-lg bg-zinc-900 text-white flex items-center justify-between text-[11px] font-medium">
            <span>Quietly Disconnect</span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
          </div>
          <div className="flex items-center justify-between text-[10px] text-zinc-500 pt-0.5">
            <span>No awkward notifications sent</span>
            <span className="font-mono">Your comfort comes first</span>
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
      {/* Architectural Grid Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.035] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="relative max-w-[1560px] mx-auto z-10 px-5 sm:px-8 lg:px-14">

        {/* ── TOP SECTION HEADER WITH SCROLL NAVIGATION CONTROLS ── */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 border-b border-zinc-300/80 pb-6 mb-8 sm:mb-12">
          
          <div>
            {/* Index Tracker */}
            <div className="flex items-center gap-2 mb-3 text-xs font-semibold tracking-wider">
              <span className="text-[#5E4BEE] font-bold">/ 03</span>
              <span className="uppercase text-zinc-600 tracking-[0.2em]">Safety And Community</span>
            </div>

            {/* Section Headline */}
            <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-[2.65rem] uppercase tracking-tight text-zinc-900 leading-[1.08]">
              A Community Where Respect Comes First
            </h2>
            <p className="text-sm sm:text-base text-zinc-600 mt-2.5 max-w-2xl leading-relaxed">
              A supportive community begins with trust, personal responsibility, and mutual respect. Here is our commitment to you.
            </p>
          </div>

          {/* Horizontal Scroll Controls */}
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
            <div className="flex items-center justify-between text-xs font-mono font-bold tracking-wider text-zinc-400 mb-3">
              <span>{card.kicker}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#5E4BEE] to-[#378ADD] opacity-70 group-hover:opacity-100 transition-opacity" />
            </div>

            <div>
              <h3 className="font-display font-bold text-xl sm:text-[1.35rem] text-zinc-900 leading-snug tracking-tight mb-2">
                {card.title}
              </h3>
              <p className="text-xs sm:text-[13px] text-zinc-600 leading-relaxed font-normal">
                {card.desc}
              </p>
            </div>

            {card.renderVisual()}
          </div>
        ))}
      </div>

      {/* ── BOTTOM SCROLL NOTE ── */}
      <div className="max-w-[1560px] mx-auto px-5 sm:px-8 lg:px-14 flex items-center justify-between pt-2 text-[11px] font-mono text-zinc-500">
        <div className="flex items-center gap-2">
          <span className="w-2 h-0.5 rounded-full bg-[#5E4BEE]" />
          <span>Our Community Commitments</span>
        </div>
        <span className="hidden sm:inline">Swipe or use arrows to read more</span>
      </div>

    </section>
  );
}
