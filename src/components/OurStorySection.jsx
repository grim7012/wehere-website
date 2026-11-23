import React from 'react';

export default function OurStorySection() {
  const storyPoints = [
    {
      number: '01/',
      text: 'Human connection matters. In an increasingly digital world, genuine emotional understanding can feel distant.'
    },
    {
      number: '02/',
      text: 'Bridging the gap through shared experiences, open conversations, and mutual peer-to-peer empathy.'
    },
    {
      number: '03/',
      text: 'No judgment, pressure, or labels. Ensuring no individual feels isolated in their personal journey.'
    }
  ];

  return (
    <section
      id="story"
      className="relative bg-white text-zinc-950 border-t border-black/[0.08] overflow-hidden select-none"
    >
      <div className="max-w-[1560px] mx-auto min-h-[640px] lg:min-h-[720px] grid grid-cols-1 lg:grid-cols-12 items-stretch">

        {/* ═══════════════════════════════════════════════════════════
            LEFT COLUMN: Label, Arrows & Giant Stacked Typography
        ═══════════════════════════════════════════════════════════ */}
        <div className="lg:col-span-5 xl:col-span-5 p-8 sm:p-12 lg:p-16 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-black/[0.06]">
          
          {/* Top Label */}
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-zinc-900 font-bold">
              ABOUT
            </span>
          </div>

          {/* Center Giant Stacked Typography */}
          <div className="my-auto py-10 lg:py-16">
            {/* Top Arrow */}
            <div className="text-zinc-900 text-lg font-mono mb-4 lg:mb-6 pl-1">
              →
            </div>

            {/* Giant Title */}
            <h2 className="font-display font-black text-6xl sm:text-7xl md:text-8xl lg:text-[6.25rem] xl:text-[7.5rem] uppercase tracking-tighter text-zinc-950 leading-[0.85]">
              OUR<br />STORY
            </h2>

            {/* Bottom Arrow */}
            <div className="text-zinc-900 text-lg font-mono mt-6 lg:mt-8 pl-1">
              →
            </div>
          </div>

          {/* Bottom Sub-label */}
          <div className="text-[11px] font-mono uppercase tracking-[0.2em] text-zinc-400">
            WeHere Networks
          </div>

        </div>

        {/* ═══════════════════════════════════════════════════════════
            CENTER COLUMN: Tall Vertical Editorial Portrait
        ═══════════════════════════════════════════════════════════ */}
        <div className="lg:col-span-3 xl:col-span-3 relative min-h-[380px] sm:min-h-[480px] lg:min-h-full bg-zinc-100 overflow-hidden border-b lg:border-b-0 lg:border-r border-black/[0.06]">
          <img
            src="/assets/story-center-model.jpg"
            alt="WeHere editorial story portrait"
            className="w-full h-full object-cover object-center filter contrast-105"
            loading="lazy"
          />
        </div>

        {/* ═══════════════════════════════════════════════════════════
            RIGHT COLUMN: Breadcrumb Tabs & 3 Minimal Numbered Points
        ═══════════════════════════════════════════════════════════ */}
        <div className="lg:col-span-4 xl:col-span-4 p-8 sm:p-12 lg:p-16 flex flex-col justify-between">
          
          {/* Top Navigation / Breadcrumbs */}
          <div className="flex items-center justify-between sm:justify-start gap-4 text-xs font-mono uppercase tracking-widest text-zinc-900 pb-6 border-b border-black/[0.06]">
            <span className="font-bold">ABOUT</span>
            <span className="text-zinc-300">/</span>
            <span className="text-zinc-400">PHILOSOPHY</span>
          </div>

          {/* 3 Numbered Minimal Points */}
          <div className="my-auto py-10 lg:py-14 flex flex-col gap-8 sm:gap-10">
            {storyPoints.map((item, idx) => (
              <div key={idx} className="flex flex-col gap-2">
                <span className="font-mono text-sm font-bold text-zinc-900 tracking-wider">
                  {item.number}
                </span>
                <p className="text-xs sm:text-sm text-zinc-700 leading-relaxed font-normal max-w-sm">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          {/* Bottom Philosophy Note */}
          <div className="text-[11px] font-mono tracking-wider text-zinc-400 pt-6 border-t border-black/[0.06]">
            01 / 03 Core Tenets
          </div>

        </div>

      </div>
    </section>
  );
}
