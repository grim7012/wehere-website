import React, { useEffect, useRef, useState } from 'react';

export default function SafetySection() {
  const sectionRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  // Trigger scroll animations when the section comes into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const cards = [
    {
      type: 'image',
      image: '/assets/emotional_safety.jpg',
      alt: 'Empathetic listening and emotional safety',
      span: 'lg:col-span-2 md:col-span-2'
    },
    {
      type: 'content',
      tag: '01 / RESPECT',
      title: 'MUTUAL RESPECT',
      desc: "Honor every identity and lived experience, without judgment.",
      span: 'lg:col-span-1'
    },
    {
      type: 'content',
      tag: '02 / HARMONY',
      title: 'ZERO HARASSMENT',
      desc: 'Conversations strictly protected from harassment or bullying.',
      span: 'lg:col-span-1'
    },
    {
      type: 'content',
      tag: '03 / PRIVACY',
      title: 'PERSONAL PRIVACY',
      desc: 'Total control over your boundaries, identity, and story.',
      span: 'lg:col-span-1'
    },
    {
      type: 'content',
      tag: '04 / CARE',
      title: 'RESPONSIBLE CARE',
      desc: 'Clear reporting tools and direct access to crisis services.',
      span: 'lg:col-span-1'
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="safety"
      className="relative bg-[#0B0B0E] text-white min-h-[100dvh] md:h-[100dvh] md:max-h-[100dvh] flex flex-col justify-center py-8 sm:py-10 border-t border-b border-zinc-800/80 overflow-hidden select-none"
    >
      {/* Subtle Architectural Grid Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      {/* Ambient Brand Halos */}
      <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-full bg-[#5E4BEE]/[0.05] blur-[100px] pointer-events-none -z-10" />

      {/* Centered 75% Width Container */}
      <div className="relative w-[90%] max-w-[1440px] mx-auto z-10 flex flex-col md:h-full md:justify-between gap-6">

        {/* ── TOP SECTION HEADER ── */}
        <div
          className={`flex flex-col lg:flex-row lg:items-end justify-between gap-4 pb-4 sm:pb-6 border-b border-zinc-800 shrink-0 transition-all duration-1000 ease-out ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
        >
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-2 text-[10px] font-mono tracking-widest text-zinc-400">
              <span className="font-semibold text-zinc-300">/ 03</span>
              <span>Our Commitment</span>
            </div>
            <h2 className="font-display font-extrabold text-xl sm:text-3xl lg:text-4xl uppercase tracking-tight text-white leading-[1.1] sm:leading-[1.05]">
              A Community Where Respect Comes First
            </h2>
          </div>
          <div className="max-w-sm lg:text-right hidden sm:block">
          </div>
        </div>

        {/* ── BENTO GRID ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:flex-1 md:min-h-0">
          {cards.map((item, idx) => {

            // Staggered animation delays based on index
            const delay = `${200 + idx * 100}ms`;

            if (item.type === 'image') {
              return (
                <div
                  key={idx}
                  className={`group relative rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-900 shadow-md h-[160px] sm:h-[200px] md:h-full transition-all duration-1000 ease-out ${item.span} ${isInView ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-95'
                    }`}
                  style={{ transitionDelay: delay }}
                >
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="w-full h-full object-cover filter grayscale-[35%] contrast-110 brightness-90 group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0E]/80 via-transparent to-transparent" />
                </div>
              );
            }

            return (
              <div
                key={idx}
                className={`group relative bg-[#131317] hover:bg-[#17171D] rounded-2xl border border-zinc-800/90 hover:border-zinc-700 p-4 sm:p-5 flex flex-col justify-between min-h-[120px] sm:min-h-[140px] md:h-full transition-all duration-1000 ease-out shadow-md ${item.span} ${isInView ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-95'
                  }`}
                style={{ transitionDelay: delay }}
              >
                {/* Card Top: Index only (No icons) */}
                <div className="flex items-center justify-end shrink-0">
                  <span className="text-[10px] font-mono tracking-widest text-zinc-500 font-semibold">
                    {item.tag}
                  </span>
                </div>

                {/* Card Content */}
                <div className="mt-3 md:my-auto md:pt-2">
                  <h3 className="font-display font-bold text-sm sm:text-base uppercase tracking-wider text-white mb-1 group-hover:text-zinc-100 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-[11px] sm:text-xs text-zinc-400 font-normal leading-snug sm:line-clamp-2">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}