import React, { useEffect, useRef, useState } from 'react';

export default function FeaturesSection() {
  const sectionRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  // Trigger scroll animations when section enters viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const features = [
    {
      title: 'SHARED EXPERIENCES',
      desc: 'Connect with people who relate to your journey and shared challenges.',
      image: '/assets/peer_connection.jpg',
      alt: 'Two people connecting warmly'
    },
    {
      title: 'ZERO JUDGMENT',
      desc: 'Open conversations built on mutual empathy, kindness, and respect.',
      image: '/assets/emotional_safety.jpg',
      alt: 'Person listening with empathy'
    },
    {
      title: 'BE YOURSELF',
      desc: 'Express your feelings at your own pace, with complete personal privacy.',
      image: '/assets/mindful_journaling.jpg',
      alt: 'Person reflecting peacefully'
    }
  ];

  return (
    <section
      ref={sectionRef}
      id="features"
      className="relative bg-[#0B0B0E] text-white py-14 sm:py-18 lg:py-20 border-t border-white/[0.08] border-b border-black select-none overflow-hidden"
    >
      {/* Subtle WeHere Gradient Accent Line at Top */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#5E4BEE]/40 to-transparent pointer-events-none" />

      {/* Centered 75% Width Container */}
      <div className="relative w-[90%] mx-auto z-10">

        {/* ── MINIMAL SECTION TRACKER ── */}
        <div
          className={`flex items-center justify-between border-b border-white/[0.08] pb-4 mb-10 sm:mb-12 text-[11px] font-mono tracking-widest  transition-all duration-1000 ease-out ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
        >
          <div className="flex items-center gap-2.5">
            <span className="text-zinc-400 font-semibold">/ 01</span>
            <span className="text-zinc-500 tracking-[0.2em]">What Makes WeHere Different</span>
          </div>
          <span className="text-zinc-600 font-normal" />
        </div>

        {/* ── 3 EDITORIAL COLUMNS ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 lg:gap-10 xl:gap-14 items-center">
          {features.map((item, idx) => (
            <div
              key={idx}
              className={`group flex items-center gap-4 sm:gap-5 lg:gap-6 transition-all duration-[1200ms] ease-out ${isInView
                ? 'opacity-100 translate-y-0 translate-x-0 scale-100'
                : 'opacity-0 translate-y-12 -translate-x-8 scale-95'
                }`}
              style={{ transitionDelay: `${200 + idx * 200}ms` }}
            >
              {/* Left: Portrait Photograph */}
              <div className="relative shrink-0 w-24 sm:w-28 md:w-24 lg:w-32 xl:w-36 aspect-[3/4] rounded-md sm:rounded-lg overflow-hidden bg-zinc-900 ring-1 ring-white/10 group-hover:ring-[#5E4BEE]/50 transition-all duration-300 shadow-sm">
                <img
                  src={item.image}
                  alt={item.alt}
                  className="w-full h-full object-cover object-center filter grayscale-[20%] contrast-105 group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />
              </div>

              {/* Right: Typography */}
              <div className="flex flex-col justify-center min-w-0">
                <h3 className="font-display font-bold text-base sm:text-lg lg:text-xl text-white uppercase tracking-wider leading-snug group-hover:text-zinc-100 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400 font-normal leading-relaxed mt-1.5 sm:mt-2">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}