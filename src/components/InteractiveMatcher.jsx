import React from 'react';

export default function InteractiveMatcher() {
  return (
    <section
      id="app"
      className="relative bg-[#F4F6F9] text-zinc-900 py-12 sm:py-16 lg:py-20 px-5 sm:px-8 lg:px-14 xl:px-16 border-t border-black/[0.06] overflow-hidden select-none"
    >
      {/* Ambient Brand Color Halos */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] lg:w-[850px] h-[550px] rounded-full bg-gradient-to-tr from-[#5E4BEE]/[0.10] via-[#7F77DD]/[0.06] to-[#378ADD]/[0.08] blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-5 right-5 w-[500px] h-[500px] rounded-full bg-[#5E4BEE]/[0.08] blur-[120px] pointer-events-none -z-10" />

      {/* Main Container - Full Width Expansion */}
      <div className="relative max-w-[1560px] mx-auto z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 xl:gap-12 items-center">

          {/* ═══════════════════════════════════════════════════════════
              LEFT COLUMN: Warm Storytelling & Store Badges
          ═══════════════════════════════════════════════════════════ */}
          <div className="lg:col-span-5 xl:col-span-5 flex flex-col items-start max-w-xl">
            
            {/* Index Tracker */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-zinc-200 shadow-xs mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#5E4BEE]" />
              <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-zinc-600 font-semibold">
                / 02 Digital Sanctuary
              </span>
            </div>

            {/* Headline */}
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-[2.75rem] xl:text-5xl text-zinc-900 tracking-tight leading-[1.1] mb-4 sm:mb-5">
              Care And Understanding In Your Pocket
            </h2>

            {/* Paragraph */}
            <p className="text-sm sm:text-base text-zinc-600 leading-relaxed font-normal mb-6 sm:mb-7 max-w-lg">
              Many individuals experience anxiety, loneliness, stress, emotional fatigue, and personal struggles. Finding someone who genuinely understands should never feel out of reach. WeHere connects people based on shared experiences, creating spaces for heartfelt conversations, mutual empathy, and genuine peer support.
            </p>

            {/* Store Download Badges */}
            <div className="flex flex-wrap items-center gap-3.5 mb-6 sm:mb-7">
              
              {/* Apple App Store */}
              <a
                href="#download"
                className="group inline-flex items-center gap-3 px-5 py-2.5 rounded-xl bg-zinc-950 text-white hover:bg-black transition-all duration-300 shadow-sm hover:shadow-md border border-zinc-800"
              >
                <svg className="w-5 h-5 fill-white shrink-0" viewBox="0 0 24 24">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.84c.64-.78 1.08-1.86.96-2.94-.93.04-2.06.62-2.72 1.4-.58.67-1.09 1.77-.95 2.83 1.04.08 2.1-.55 2.71-1.29z" />
                </svg>
                <div className="flex flex-col text-left">
                  <span className="text-[9px] uppercase tracking-wider text-zinc-400 font-medium leading-none">
                    Download on the
                  </span>
                  <span className="text-sm font-semibold tracking-tight text-white leading-tight font-display">
                    App Store
                  </span>
                </div>
              </a>

              {/* Google Play */}
              <a
                href="#download"
                className="group inline-flex items-center gap-3 px-5 py-2.5 rounded-xl bg-zinc-950 text-white hover:bg-black transition-all duration-300 shadow-sm hover:shadow-md border border-zinc-800"
              >
                <svg className="w-5 h-5 fill-white shrink-0" viewBox="0 0 24 24">
                  <path d="M3.609 1.814L13.793 12 3.61 22.186c-.347-.367-.56-.91-.56-1.58V3.394c0-.67.213-1.213.56-1.58zm11.606 11.607l2.257 2.257-11.23 6.368 8.973-8.625zm0-2.842L6.242 1.954l11.23 6.368-2.257 2.257zm1.421 1.421l3.541 2.006c.866.49.866 1.298 0 1.788l-3.541 2.006-2.129-2.129 2.129-2.129z" />
                </svg>
                <div className="flex flex-col text-left">
                  <span className="text-[9px] uppercase tracking-wider text-zinc-400 font-medium leading-none">
                    GET IT ON
                  </span>
                  <span className="text-sm font-semibold tracking-tight text-white leading-tight font-display">
                    Google Play
                  </span>
                </div>
              </a>

            </div>

            {/* Community Rating */}
            <div className="flex items-center gap-3.5">
              <span className="font-display font-extrabold text-2xl sm:text-3xl text-zinc-900 tracking-tight leading-none">
                4.9
              </span>
              <div className="flex flex-col justify-center gap-0.5">
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-3.5 h-3.5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-xs text-zinc-500 font-medium tracking-tight">
                  12,400+ Community Stories Shared
                </span>
              </div>
            </div>

          </div>

          {/* ═══════════════════════════════════════════════════════════
              RIGHT COLUMN: 3D Isometric Phone (Large High-Impact Size)
          ═══════════════════════════════════════════════════════════ */}
          <div className="lg:col-span-7 xl:col-span-7 flex justify-center lg:justify-end items-center relative">
            <div className="relative w-full max-w-[700px] xl:max-w-[800px] lg:-mr-4 xl:-mr-8">
              
              {/* Vibrant Ambient Glow Aura */}
              <div className="absolute -inset-8 bg-gradient-to-tr from-[#5E4BEE]/25 via-[#7F77DD]/20 to-[#378ADD]/20 rounded-full blur-3xl -z-10 transform scale-95" />

              {/* Floating 3D Device Image (Expanded Scale) */}
              <img
                src="/assets/wehere-phone-3d-chat.png"
                alt="WeHere 3D phone interface with floating peer connection chats"
                className="w-full h-auto object-contain select-none filter drop-shadow-[0_25px_45px_rgba(94,75,238,0.20)] hover:scale-[1.02] transition-transform duration-700 ease-out"
                loading="eager"
              />

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
