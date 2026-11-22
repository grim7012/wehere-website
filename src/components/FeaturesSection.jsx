import React from 'react';
import { ArrowRight, Plus } from 'lucide-react';

export default function FeaturesSection() {
  const cards = [
    {
      number: '01',
      title: 'Shared Experiences',
      desc: 'Discover and connect with individuals who relate to the real challenges and thoughts you choose to share.',
      image: '/assets/peer_connection.jpg'
    },
    {
      number: '02',
      title: 'Zero Judgment',
      desc: 'Experience open conversations in a gentle environment that genuinely values respect, active listening, and warmth.',
      image: '/assets/emotional_safety.jpg'
    },
    {
      number: '03',
      title: 'A Space To Be Yourself',
      desc: 'Express your feelings at your own comfort level, with full control over your privacy and personal story.',
      image: '/assets/mindful_journaling.jpg'
    }
  ];

  return (
    <section
      id="features"
      className="relative bg-[#EBECEF] text-zinc-900 py-16 sm:py-20 lg:py-28 px-5 sm:px-8 lg:px-14 border-t border-black/[0.08] overflow-hidden"
    >
      {/* Subtle Architectural Grid Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.035] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="relative max-w-[1560px] mx-auto z-10">

        {/* ── TOP SECTION HEADER / TRACKER ── */}
        <div className="flex items-center justify-between border-b border-zinc-300/80 pb-5 mb-10 sm:mb-14 text-xs font-semibold tracking-wider">
          <div className="flex items-center gap-2.5">
            <span className="text-[#5E4BEE] font-bold">/ 01</span>
            <span className="uppercase text-zinc-600 tracking-[0.2em]">What Makes WeHere Different</span>
          </div>

          <div className="flex items-center gap-3 text-zinc-500">
            <div className="flex items-center gap-1.5 font-mono text-[11px]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#5E4BEE]" />
              <span className="font-semibold text-zinc-800">2,840+</span>
              <span className="hidden sm:inline">people holding space</span>
            </div>
            <span className="text-zinc-400 font-light">+</span>
          </div>
        </div>

        {/* ── MAIN CONTENT GRID ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 xl:gap-12 items-stretch">
          
          {/* LEFT INTRO COLUMN */}
          <div className="lg:col-span-4 xl:col-span-4 flex flex-col justify-between items-start pr-0 lg:pr-4">
            
            <div className="max-w-[420px]">
              <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-[2.65rem] xl:text-5xl uppercase tracking-tight text-zinc-900 leading-[1.08] mb-5 sm:mb-6">
                A Community Built On True Understanding
              </h2>

              <p className="text-sm sm:text-base text-zinc-600 leading-relaxed font-normal mb-8 max-w-[360px]">
                We believe meaningful connections make difficult moments feel a little less lonely. We bring people together based on shared experiences, creating spaces for open conversations, mutual empathy, and genuine peer support.
              </p>
            </div>

            <a
              href="#about"
              className="group inline-flex items-center gap-3 px-6 py-3 rounded-lg border border-zinc-400/80 bg-zinc-200/50 hover:bg-zinc-900 hover:text-white hover:border-zinc-900 transition-all duration-300 text-xs sm:text-sm font-semibold tracking-wide text-zinc-900 shadow-sm"
            >
              <span>Explore Our Community</span>
              <ArrowRight className="w-4 h-4 text-[#5E4BEE] group-hover:text-white group-hover:translate-x-1 transition-all duration-300" />
            </a>

          </div>

          {/* RIGHT CARDS GRID */}
          <div className="lg:col-span-8 xl:col-span-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-5 xl:gap-6">
            {cards.map((c, i) => (
              <div
                key={i}
                className="group relative bg-[#F7F7F9] hover:bg-white rounded-2xl border border-zinc-300/80 hover:border-zinc-400/80 p-6 sm:p-7 flex flex-col justify-between h-[380px] sm:h-[400px] lg:h-[420px] transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.07)] overflow-hidden"
              >
                {/* Number & Plus */}
                <div className="flex items-center justify-between z-20">
                  <span className="font-mono text-xs font-bold text-zinc-400 tracking-wider">
                    {c.number}
                  </span>
                  <Plus className="w-4 h-4 text-zinc-400 group-hover:text-[#5E4BEE] transition-colors" />
                </div>

                {/* Text Content */}
                <div className="mt-4 mb-auto z-20 max-w-[220px]">
                  <h3 className="font-display font-bold text-xl sm:text-[1.35rem] text-zinc-900 leading-snug tracking-tight mb-2.5">
                    {c.title}
                  </h3>
                  <p className="text-xs sm:text-[13px] text-zinc-500 leading-relaxed font-normal">
                    {c.desc}
                  </p>
                </div>

                {/* Bottom Arrow Button */}
                <div className="flex items-end justify-between z-20 mt-6">
                  <div className="w-10 h-10 rounded-full border border-zinc-400/70 bg-white/80 group-hover:bg-zinc-900 group-hover:border-zinc-900 group-hover:text-white flex items-center justify-center text-zinc-700 transition-all duration-300 shadow-sm">
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                  </div>
                </div>

                {/* Diagonal Cut Corner Graphic */}
                <div className="absolute bottom-0 right-0 w-[70%] h-[58%] overflow-hidden rounded-br-2xl pointer-events-none z-10">
                  <div
                    className="absolute inset-0 bg-gradient-to-r from-[#5E4BEE] via-[#7F77DD] to-[#378ADD] z-10"
                    style={{ clipPath: 'polygon(0% 100%, 100% 20%, 100% 26%, 6% 100%)' }}
                  />
                  <div
                    className="absolute inset-0 overflow-hidden z-0"
                    style={{ clipPath: 'polygon(5% 100%, 100% 25%, 100% 100%, 0% 100%)' }}
                  >
                    <img
                      src={c.image}
                      alt=""
                      className="w-full h-full object-cover filter grayscale contrast-125 brightness-95 group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-zinc-900/15 mix-blend-multiply" />
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
