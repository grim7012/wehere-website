import React from 'react';

export default function CTASection() {
  return (
    <section
      id="download"
      className="relative bg-[#111116] text-white py-20 sm:py-24 lg:py-32 px-5 sm:px-8 lg:px-14 overflow-hidden select-none border-t border-zinc-800/80"
    >
      {/* Background radial ambient glow in logo colors */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] sm:w-[900px] h-[450px] sm:h-[600px] rounded-full bg-gradient-to-tr from-[#5E4BEE]/20 via-[#7F77DD]/15 to-[#378ADD]/15 blur-[140px] pointer-events-none" />

      {/* Subtle Architectural Grid */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.04] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="relative max-w-4xl mx-auto text-center z-10 flex flex-col items-center gap-6 sm:gap-8">
        
        {/* Section Tracker */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold tracking-wider text-zinc-300">
          <span className="text-[#7F77DD] font-bold">/ 05</span>
          <span className="uppercase tracking-[0.2em]">Take The First Step</span>
        </div>

        {/* Brand App Icon */}
        <div className="relative">
          <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-[#5E4BEE] via-[#7F77DD] to-[#378ADD] blur-md opacity-50" />
          <img
            src="/assets/logo/icon_logo.png"
            alt="WeHere App Icon"
            className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-3xl object-contain shadow-xl border border-white/20"
          />
        </div>

        {/* Headline from Document */}
        <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.08] text-white uppercase">
          You Are Not Alone. We Are Here.
        </h2>

        {/* Narrative Description from Document */}
        <p className="text-zinc-400 text-sm sm:text-base md:text-lg leading-relaxed max-w-xl font-normal">
          Connecting minds, healing together. Because no one should struggle alone. Join a supportive digital community where your experiences matter and your journey is respected.
        </p>

        {/* Official Store Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 pt-2 w-full sm:w-auto">
          
          {/* Apple App Store */}
          <a
            href="#download"
            className="group w-full sm:w-auto inline-flex items-center justify-center gap-3.5 px-7 py-3.5 rounded-2xl bg-white text-zinc-950 hover:bg-zinc-100 transition-all duration-300 shadow-[0_4px_24px_rgba(255,255,255,0.15)] border border-white"
          >
            <svg className="w-6 h-6 fill-zinc-950" viewBox="0 0 24 24">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.84c.64-.78 1.08-1.86.96-2.94-.93.04-2.06.62-2.72 1.4-.58.67-1.09 1.77-.95 2.83 1.04.08 2.1-.55 2.71-1.29z" />
            </svg>
            <div className="flex flex-col text-left">
              <span className="text-[10px] leading-tight font-medium text-zinc-600 uppercase tracking-wider">
                Download on the
              </span>
              <span className="text-sm sm:text-base font-bold leading-tight font-display text-zinc-950">
                App Store
              </span>
            </div>
          </a>

          {/* Google Play */}
          <a
            href="#download"
            className="group w-full sm:w-auto inline-flex items-center justify-center gap-3.5 px-7 py-3.5 rounded-2xl bg-white/10 hover:bg-white/15 text-white border border-white/20 transition-all duration-300 backdrop-blur-md"
          >
            <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
              <path d="M3.609 1.814L13.793 12 3.61 22.186c-.347-.367-.56-.91-.56-1.58V3.394c0-.67.213-1.213.56-1.58zm11.606 11.607l2.257 2.257-11.23 6.368 8.973-8.625zm0-2.842L6.242 1.954l11.23 6.368-2.257 2.257zm1.421 1.421l3.541 2.006c.866.49.866 1.298 0 1.788l-3.541 2.006-2.129-2.129 2.129-2.129z" />
            </svg>
            <div className="flex flex-col text-left">
              <span className="text-[10px] leading-tight font-medium text-white/70 uppercase tracking-wider">
                GET IT ON
              </span>
              <span className="text-sm sm:text-base font-bold leading-tight font-display text-white">
                Google Play
              </span>
            </div>
          </a>

        </div>

        {/* Trust Seal */}
        <div className="flex items-center gap-2.5 text-xs text-zinc-400 font-mono pt-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400" />
          <span>Strictly for adults 18+ • Free to join • 100% ad-free</span>
        </div>

      </div>
    </section>
  );
}
