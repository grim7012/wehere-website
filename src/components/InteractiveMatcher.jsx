import React from 'react';
import { Star, ShieldCheck, Heart, Sparkles, MessageCircle, ArrowRight } from 'lucide-react';

export default function InteractiveMatcher() {
  return (
    <section
      id="app"
      className="relative bg-white text-zinc-900 py-16 sm:py-24 lg:py-32 px-5 sm:px-8 lg:px-14 border-t border-black/[0.06] overflow-hidden select-none"
    >
      {/* ── Background Subtle Ambient Glow in Logo Colors ── */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] lg:w-[650px] h-[500px] lg:h-[650px] rounded-full bg-gradient-to-tr from-[#5E4BEE]/[0.06] via-[#7F77DD]/[0.04] to-[#378ADD]/[0.05] blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-[1440px] mx-auto z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* ═══════════════════════════════════════════════════════════
              LEFT COLUMN: Headline, Narrative, App Store Badges & Rating
          ═══════════════════════════════════════════════════════════ */}
          <div className="lg:col-span-6 xl:col-span-6 flex flex-col items-start max-w-xl">
            
            {/* Index Tracker */}
            <div className="flex items-center gap-2 mb-4 text-xs font-semibold tracking-wider">
              <span className="text-[#5E4BEE] font-bold">/ 02</span>
              <span className="uppercase text-zinc-500 tracking-[0.2em]">Mobile Sanctuary</span>
            </div>

            {/* High-Impact Headline matching Bankai reference */}
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl xl:text-[3.25rem] text-zinc-900 tracking-tight leading-[1.12] mb-5 sm:mb-6">
              The Next Standard In Digital Empathy &amp; Peer Support
            </h2>

            {/* Paragraph */}
            <p className="text-sm sm:text-base text-zinc-600 leading-relaxed font-normal mb-8 sm:mb-10 max-w-lg">
              With real-time situational peer matching, end-to-end pseudonymous encryption, and guided mindful practices, emotional holding is now accessible on the WeHere App.
            </p>

            {/* Official Store Download Badges */}
            <div className="flex flex-wrap items-center gap-3.5 mb-8 sm:mb-10">
              
              {/* Apple App Store Badge */}
              <a
                href="#download"
                className="group inline-flex items-center gap-3 px-5 py-2.5 rounded-xl bg-zinc-950 text-white hover:bg-black transition-all duration-300 shadow-sm hover:shadow-md border border-zinc-800"
              >
                <svg className="w-6 h-6 fill-white" viewBox="0 0 24 24">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.84c.64-.78 1.08-1.86.96-2.94-.93.04-2.06.62-2.72 1.4-.58.67-1.09 1.77-.95 2.83 1.04.08 2.1-.55 2.71-1.29z" />
                </svg>
                <div className="flex flex-col text-left">
                  <span className="text-[9px] uppercase tracking-wider text-zinc-400 font-medium leading-none">
                    Download on the
                  </span>
                  <span className="text-sm sm:text-base font-semibold tracking-tight text-white leading-tight font-display">
                    App Store
                  </span>
                </div>
              </a>

              {/* Google Play Store Badge */}
              <a
                href="#download"
                className="group inline-flex items-center gap-3 px-5 py-2.5 rounded-xl bg-zinc-950 text-white hover:bg-black transition-all duration-300 shadow-sm hover:shadow-md border border-zinc-800"
              >
                <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
                  <path d="M3.609 1.814L13.793 12 3.61 22.186c-.347-.367-.56-.91-.56-1.58V3.394c0-.67.213-1.213.56-1.58zm11.606 11.607l2.257 2.257-11.23 6.368 8.973-8.625zm0-2.842L6.242 1.954l11.23 6.368-2.257 2.257zm1.421 1.421l3.541 2.006c.866.49.866 1.298 0 1.788l-3.541 2.006-2.129-2.129 2.129-2.129z" />
                </svg>
                <div className="flex flex-col text-left">
                  <span className="text-[9px] uppercase tracking-wider text-zinc-400 font-medium leading-none">
                    GET IT ON
                  </span>
                  <span className="text-sm sm:text-base font-semibold tracking-tight text-white leading-tight font-display">
                    Google Play
                  </span>
                </div>
              </a>

            </div>

            {/* Rating & Reviews Score */}
            <div className="flex items-center gap-3.5">
              <span className="font-display font-extrabold text-3xl sm:text-4xl text-zinc-900 tracking-tight leading-none">
                4.9
              </span>
              <div className="flex flex-col justify-center gap-1">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="text-xs text-zinc-500 font-medium tracking-tight">
                  12,400+ Verified Sanctuary Reviews
                </span>
              </div>
            </div>

          </div>

          {/* ═══════════════════════════════════════════════════════════
              RIGHT COLUMN: Orbital Rings + Phone Mockup + Floating 3D Cards
          ═══════════════════════════════════════════════════════════ */}
          <div className="lg:col-span-6 xl:col-span-6 flex items-center justify-center relative min-h-[580px] lg:min-h-[640px]">
            
            {/* 1. Orbital Ring Trackers in Background */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              
              {/* Outer Orbit Ring */}
              <div className="w-[360px] sm:w-[460px] lg:w-[520px] h-[360px] sm:h-[460px] lg:h-[520px] rounded-full border border-zinc-200 relative flex items-center justify-center">
                
                {/* Orbital Accents Dots */}
                <div className="absolute -left-1.5 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-[#5E4BEE] shadow-[0_0_10px_rgba(94,75,238,0.6)]" />
                <div className="absolute -right-1.5 top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-[#378ADD] shadow-[0_0_8px_rgba(55,138,221,0.5)]" />

                {/* Inner Dashed Orbit */}
                <div className="w-[280px] sm:w-[360px] lg:w-[410px] h-[280px] sm:h-[360px] lg:h-[410px] rounded-full border border-dashed border-[#7F77DD]/25" />
              </div>

            </div>

            {/* 2. Floating Card Left: Verified Peer Safe Space (Pops out to the left) */}
            <div className="absolute -left-2 sm:left-4 lg:left-0 top-[48%] -translate-y-1/2 z-20 bg-white/95 backdrop-blur-md rounded-2xl p-3 shadow-[0_12px_32px_rgba(0,0,0,0.1)] border border-black/[0.06] flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#5E4BEE] to-[#378ADD] flex items-center justify-center text-white shadow-sm">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div className="flex flex-col pr-1">
                <span className="text-[10px] uppercase font-bold tracking-wider text-zinc-400">
                  Mutual Match
                </span>
                <span className="text-xs font-bold text-zinc-900">
                  100% Encrypted Peer
                </span>
              </div>
            </div>

            {/* 3. The Smartphone Chassis (iPhone Pro Design) */}
            <div className="relative z-10 w-[290px] sm:w-[315px] rounded-[50px] bg-zinc-950 p-3 shadow-[0_24px_60px_rgba(0,0,0,0.18),0_4px_12px_rgba(0,0,0,0.06)] border-[4px] border-zinc-800 ring-1 ring-black/20">
              
              {/* Inner Screen */}
              <div className="bg-[#FAF9FC] rounded-[40px] p-4 flex flex-col justify-between min-h-[560px] overflow-hidden border border-black/5 relative">
                
                {/* Dynamic Island & Status Bar */}
                <div className="flex items-center justify-between px-2 pt-0.5 mb-2.5 text-[11px] font-semibold text-zinc-900">
                  <span>9:41</span>
                  {/* Dynamic Island pill */}
                  <div className="w-20 h-4 bg-black rounded-full flex items-center justify-end px-2 gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#5E4BEE]" />
                  </div>
                  {/* Battery & Signal */}
                  <div className="flex items-center gap-1.5">
                    <span className="w-3.5 h-2 rounded-[2px] border border-zinc-900 inline-block relative after:content-[''] after:w-1.5 after:h-1 after:bg-zinc-900 after:absolute after:top-0.5 after:left-0.5" />
                  </div>
                </div>

                {/* Profile Greeting Header */}
                <div className="flex items-center justify-between px-1 mb-3">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#5E4BEE] to-[#378ADD] text-white flex items-center justify-center font-bold text-xs shadow-sm">
                      M
                    </div>
                    <div>
                      <div className="text-xs font-bold text-zinc-900">Maya S.</div>
                      <div className="text-[9px] text-zinc-500 flex items-center gap-1 font-medium">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                        Holding space
                      </div>
                    </div>
                  </div>
                  <div className="w-7 h-7 rounded-full bg-white border border-black/5 flex items-center justify-center text-zinc-600 shadow-xs">
                    <Sparkles className="w-3.5 h-3.5 text-[#5E4BEE]" />
                  </div>
                </div>

                {/* Active Cards Row (Matching the Bankai cards) */}
                <div className="relative mb-3.5 overflow-visible">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-zinc-400 mb-1.5 px-1">
                    My Resonance
                  </div>
                  
                  <div className="flex items-center gap-2.5">
                    {/* Primary Dark Card (like Mastercard in reference) */}
                    <div className="w-[195px] h-[120px] rounded-2xl bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-950 text-white p-3 shadow-md flex flex-col justify-between border border-zinc-700/60 shrink-0 relative overflow-hidden">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1 text-[10px] font-bold tracking-tight text-white/90">
                          <span className="w-2 h-2 rounded-full bg-[#5E4BEE]" />
                          WeHere Peer
                        </div>
                        <span className="text-[10px] font-mono font-semibold px-1.5 py-0.5 rounded bg-white/10 text-[#7F77DD]">
                          98%
                        </span>
                      </div>

                      <div>
                        <div className="text-[10px] text-zinc-400 font-medium">Topic Focus</div>
                        <div className="text-sm font-bold tracking-tight text-white">Work Burnout</div>
                      </div>

                      <div className="flex items-center justify-between text-[9px] text-zinc-400 border-t border-white/10 pt-1.5">
                        <span>@gentle_moss</span>
                        <span className="text-emerald-400 font-semibold">Active Now</span>
                      </div>
                    </div>

                    {/* Secondary Grey Card (like Visa card peaking in reference) */}
                    <div className="w-[130px] h-[120px] rounded-2xl bg-zinc-800/90 text-white p-3 shadow-md flex flex-col justify-between border border-zinc-700/40 shrink-0">
                      <div className="text-[9px] font-bold text-zinc-300">Quiet Room</div>
                      <div className="text-xs font-bold text-white">Mindful Pause</div>
                      <span className="text-[9px] text-zinc-400">95% Aligned</span>
                    </div>
                  </div>
                </div>

                {/* Recent Activity List (Matching Bankai reference list) */}
                <div className="flex flex-col gap-1.5 mb-3">
                  <div className="flex items-center justify-between px-1 mb-1">
                    <span className="text-xs font-bold text-zinc-900">Recent Activity</span>
                    <span className="text-[10px] font-semibold text-[#5E4BEE] bg-[#5E4BEE]/10 px-2 py-0.5 rounded-full">
                      This Week
                    </span>
                  </div>

                  {/* List Item 1 */}
                  <div className="bg-white rounded-xl p-2.5 border border-black/[0.04] flex items-center justify-between shadow-xs">
                    <div className="flex items-center gap-2.5">
                      <div className="w-7 h-7 rounded-lg bg-[#5E4BEE]/10 text-[#5E4BEE] flex items-center justify-center">
                        <Heart className="w-3.5 h-3.5 fill-current" />
                      </div>
                      <div>
                        <div className="text-[11px] font-bold text-zinc-900 leading-tight">Grounding Circle</div>
                        <div className="text-[9px] text-zinc-400">02 August 2026</div>
                      </div>
                    </div>
                    <span className="text-[11px] font-bold font-mono text-zinc-800">+15m</span>
                  </div>

                  {/* List Item 2 */}
                  <div className="bg-white rounded-xl p-2.5 border border-black/[0.04] flex items-center justify-between shadow-xs">
                    <div className="flex items-center gap-2.5">
                      <div className="w-7 h-7 rounded-lg bg-[#378ADD]/10 text-[#378ADD] flex items-center justify-center">
                        <MessageCircle className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <div className="text-[11px] font-bold text-zinc-900 leading-tight">Active Listening</div>
                        <div className="text-[9px] text-zinc-400">31 July 2026</div>
                      </div>
                    </div>
                    <span className="text-[11px] font-bold font-mono text-zinc-800">1:1</span>
                  </div>

                  {/* List Item 3 */}
                  <div className="bg-white rounded-xl p-2.5 border border-black/[0.04] flex items-center justify-between shadow-xs">
                    <div className="flex items-center gap-2.5">
                      <div className="w-7 h-7 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
                        <Sparkles className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <div className="text-[11px] font-bold text-zinc-900 leading-tight">Box Breathing</div>
                        <div className="text-[9px] text-zinc-400">28 July 2026</div>
                      </div>
                    </div>
                    <span className="text-[11px] font-bold font-mono text-emerald-600">4-4-4</span>
                  </div>
                </div>

                {/* Floating Bottom Navigation with Center Action Button */}
                <div className="bg-white rounded-full p-1.5 border border-black/[0.06] flex items-center justify-between px-4 shadow-sm relative">
                  <span className="w-2 h-2 rounded-full bg-zinc-900" />
                  <span className="w-2 h-2 rounded-full bg-zinc-300" />
                  
                  {/* Floating Action Button */}
                  <div className="w-9 h-9 rounded-full bg-zinc-950 text-white flex items-center justify-center shadow-md -my-2 border-2 border-white">
                    <ArrowRight className="w-4 h-4 text-[#7F77DD]" />
                  </div>

                  <span className="w-2 h-2 rounded-full bg-zinc-300" />
                  <span className="w-2 h-2 rounded-full bg-zinc-300" />
                </div>

              </div>

            </div>

            {/* 4. Floating Card Right: Secondary Visa-style card peaking out */}
            <div className="hidden sm:flex absolute -right-2 lg:right-2 top-[32%] z-20 bg-zinc-900 text-white rounded-xl p-3 shadow-[0_16px_36px_rgba(0,0,0,0.18)] border border-zinc-700/80 flex flex-col gap-1 rotate-3 pointer-events-none">
              <div className="flex items-center gap-2 text-[10px] text-zinc-400">
                <span className="w-2 h-2 rounded-full bg-[#378ADD]" />
                Peer Shield
              </div>
              <span className="text-xs font-bold text-white tracking-tight">
                Pseudonym Active
              </span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
