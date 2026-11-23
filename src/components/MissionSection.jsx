import React, { useEffect, useRef, useState } from 'react';

export default function MissionSection() {
  const sectionRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

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

  return (
    <section
      ref={sectionRef}
      id="mission"
      className="relative w-full bg-[#EBECEF] text-zinc-950 border-t border-black/[0.08] overflow-hidden select-none py-6 sm:py-8"
    >
      {/* Centered 75% Width Container */}
      <div className="relative w-[90%] mx-auto flex flex-col md:flex-row items-stretch">

        {/* ── LEFT SIDE: CONTENT (Animated from Left) ── */}
        <div className="w-full md:w-1/2 flex flex-col justify-center p-6 sm:p-8 lg:p-12 bg-[#EBECEF]">
          <div
            className={`transition-all duration-1000 ease-out ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
              }`}
          >
            <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-zinc-500 font-semibold block mb-2">
              OUR MISSION
            </span>

            {/* Heading: Two words, stacked */}
            <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tighter text-zinc-950 leading-[0.9] mb-4">
              Healing<br />
              Together
            </h2>

            <p className="text-sm text-zinc-600 font-normal max-w-xs leading-relaxed mb-6">
              Because no one should struggle through life's challenges alone.
            </p>

            <a
              href="#download"
              className="group inline-flex items-center gap-3 px-6 py-2.5 bg-black text-white text-[10px] sm:text-xs uppercase tracking-widest font-bold hover:bg-zinc-800 transition-all duration-300 rounded-none w-fit"
            >
              <span>Download Now</span>
              <svg
                className="w-3.5 h-3.5 fill-none stroke-current group-hover:translate-x-1 transition-transform"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>
          </div>
        </div>

        {/* ── RIGHT SIDE: IMAGE (Animated from Right) ── */}
        <div
          className={`w-full md:w-1/2 relative h-[25vh] md:h-[70vh] min-h-[180px] transition-all duration-1000 ease-out overflow-hidden ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
          style={{ transitionDelay: '150ms' }}
        >
          <img
            src="/assets/mission-guy-turtleneck.jpg"
            alt="WeHere peer connection mission"
            className={`absolute inset-0 w-full h-full object-cover object-center filter contrast-105 transition-transform duration-[1.4s] ease-out ${isInView ? 'scale-100' : 'scale-110'
              }`}
            loading="eager"
          />
        </div>

      </div>
    </section>
  );
}