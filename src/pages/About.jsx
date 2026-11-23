import React, { useEffect, useRef, useState } from 'react';
import { Mail, MapPin, ArrowUpRight } from 'lucide-react';

// ── ANIMATION HOOKS ──
function useScrollReveal() {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); // Reveal once
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return { ref, isVisible };
}

function useParallax(speed = 0.05) {
  const [offset, setOffset] = useState(0);
  useEffect(() => {
    let frame = 0;
    const handleScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        setOffset(window.scrollY * speed);
        frame = 0;
      });
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [speed]);
  return offset;
}

export default function About() {
  const heroReveal = useScrollReveal();
  const storyReveal = useScrollReveal();
  const foundersReveal = useScrollReveal();
  const principlesReveal = useScrollReveal();
  const corporateReveal = useScrollReveal();

  const parallaxOffset = useParallax(0.08);

  const founders = [
    {
      name: 'Kanishk Kashyap',
      role: 'Director, CEO & Founder',
      dept: 'Product Architecture & Vision',
      image: '/assets/founder-1.jpg',
      quote: "We built WeHere so no one ever has to struggle in silence. A calm, grounded space built on empathy, dignity, and zero judgment."
    },
    {
      name: 'Nailah Istifa',
      role: 'Co-founder & COO',
      dept: 'Operations & Community Safety',
      image: '/assets/founder-2.jpg',
      quote: "Our priority is ensuring our community is genuinely safe and dignified. Strict conduct standards so no one feels unsafe reaching out."
    },
    {
      name: 'Srishti Gautam',
      role: 'Additional CMO & Grievance Officer',
      dept: 'Statutory Redressal & Outreach',
      image: '/assets/founder-3.jpg',
      quote: "Everyday stress begins much earlier, and what helps early on is having someone safe, trustworthy, and empathetic to talk to."
    }
  ];

  const principles = [
    {
      num: '01',
      title: 'Respect & Kindness by Default',
      desc: 'Zero tolerance for harassment, unsolicited dating approaches, or dismissive attitudes. Every conversation begins with a shared commitment to mutual respect and psychological safety.'
    },
    {
      num: '02',
      title: 'Thoughtful Anonymity',
      desc: 'Interact comfortably under gentle pseudonym handles. Your real name, contact number, and personal identity remain completely private unless both peers mutually agree to share names.'
    },
    {
      num: '03',
      title: 'Non-Clinical & Ethical Peer Support',
      desc: 'We are a peer-to-peer support community, not a clinical healthcare provider. We offer supportive listening and habit tools, alongside clear, immediate access to licensed 24/7 national helplines.'
    },
    {
      num: '04',
      title: 'Privacy & Data Control',
      desc: "No precise GPS location tracking, automatic photo metadata scrubbing, and complete self-serve account deletion under India's DPDP Act 2023."
    }
  ];

  return (
    <main className="select-none overflow-hidden bg-[#FAF9FB]">

      {/* ── HERO STORY BANNER (EDITORIAL LAYOUT - SIZED DOWN) ── */}
      <section
        ref={heroReveal.ref}
        className="relative w-full max-w-[1560px] mx-auto px-6 sm:px-10 lg:px-16 pt-8 sm:pt-12 pb-16 border-b border-black/[0.06] mb-16"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center min-h-[450px] lg:min-h-[520px]">

          {/* ── LEFT COLUMN ── */}
          <div className="lg:col-span-6 flex flex-col justify-between h-full py-2 space-y-6">

            {/* Top Sub-card & Accent Headline */}
            <div
              className={`flex flex-col sm:flex-row items-start sm:items-center gap-6 transition-all duration-1000 ease-out ${heroReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
              <div className="w-20 h-20 sm:w-24 sm:h-24 bg-[#F4F4F6] border border-black/[0.06] shrink-0 overflow-hidden relative shadow-sm group">
                <img
                  src="/assets/hero-portrait.jpg"
                  alt="WeHere Sanctuary"
                  className="w-full h-full object-cover filter contrast-105 scale-110 group-hover:scale-125 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-[#5E4BEE]/10 mix-blend-multiply pointer-events-none" />
              </div>

              <div className="flex flex-col">
                <span className="w-2.5 h-2.5 bg-[#5E4BEE] mb-2.5 inline-block animate-pulse" />
                <h2 className="font-display font-bold text-lg sm:text-xl text-zinc-950 leading-tight tracking-tight">
                  Thoughtful <span className="text-[#5E4BEE]">listening.</span><br />
                  <span className="text-[#378ADD]">Shared human</span><br />
                  healing.
                </h2>
                <a href="#founders" className="text-[11px] font-mono uppercase tracking-[0.18em] text-zinc-400 hover:text-zinc-950 transition-colors mt-2 group inline-flex items-center gap-1">
                  More info <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>

            {/* Mid Narrative */}
            <div
              className={`max-w-md space-y-2 transition-all duration-1000 ease-out delay-150 ${heroReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
              <p className="text-xs sm:text-sm text-zinc-500 leading-relaxed font-normal">
                We founded WeHere on a simple conviction: when life gets heavy, you shouldn't have to carry it alone. Everyday emotional struggles don't always need clinical labels, and sometimes what helps most is simply one empathetic person who genuinely listens.
              </p>
              <a href="#founders" className="inline-block text-xs font-mono uppercase tracking-wider text-zinc-900 underline underline-offset-4 hover:text-[#5E4BEE] transition-colors pt-1">
                Meet our team
              </a>
            </div>

            {/* Giant Stacked "OUR STORY" - REDUCED BY HALF */}
            {/* Giant Stacked "OUR STORY" - REDUCED BY HALF */}
            <div
              ref={storyReveal.ref}
              className="pt-2 overflow-hidden"
            >
              <h1
                className={`font-display font-black text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] xl:text-[4rem] uppercase tracking-tighter text-zinc-950 leading-[0.85]`}
                style={{
                  clipPath: storyReveal.isVisible ? 'inset(0 0 0 0)' : 'inset(100% 0 0 0)',
                  opacity: storyReveal.isVisible ? 1 : 0,
                  transform: storyReveal.isVisible ? 'translateY(0)' : 'translateY(2rem)',
                  transition: 'clip-path 1.2s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.8s ease-out, transform 0.8s ease-out'
                }}
              >
                OUR<br />
                STORY
              </h1>
            </div>          </div>

          {/* ── RIGHT COLUMN: DOMINANT PORTRAIT ── */}
          <div className="lg:col-span-6 relative flex items-center justify-center lg:justify-end">
            <div
              className={`relative w-full max-w-[480px] aspect-[4/5] sm:aspect-square lg:aspect-[4/5] overflow-hidden bg-[#FAF9FB] shadow-lg transition-all duration-1000 ease-out delay-200 ${heroReveal.isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-95'}`}
            >
              <img
                src="/assets/hero-portrait.jpg"
                alt="WeHere Sanctuary Peer Support"
                className="w-full h-full object-cover filter contrast-[1.08] grayscale select-none transition-transform duration-[2s] hover:scale-105"
                style={{ transform: `translateY(${parallaxOffset}px)` }}
              />

              {/* Accent Band */}
              <div className="absolute inset-x-0 bottom-[14%] sm:bottom-[16%] h-[24%] sm:h-[26%] bg-gradient-to-r from-[#5E4BEE] via-[#7F77DD] to-[#378ADD] flex items-center justify-between shadow-xl">
                <a
                  href="#founders"
                  aria-label="Scroll to founders"
                  className="absolute bottom-0 left-0 w-12 h-12 sm:w-14 sm:h-14 bg-zinc-950 text-white flex items-center justify-center hover:bg-black transition-colors group z-20"
                >
                  <ArrowUpRight className="w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>

                <div className="pl-16 sm:pl-20 pr-6 w-full flex items-center justify-between text-white select-none">
                  <span className="font-display font-extrabold text-[10px] sm:text-xs tracking-wider uppercase opacity-95">
                    Quiet Sanctuary • Adults 18+
                  </span>
                  <span className="text-[10px] font-mono uppercase tracking-[0.2em] opacity-80 hidden sm:inline-block">
                    WeHere 2026
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── REST OF ABOUT PAGE ── */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">

        {/* ── OUR FOUNDERS SECTION ── */}
        <section id="founders" className="mb-24 sm:mb-32" ref={foundersReveal.ref}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-start">

            {/* BLOCK 1 */}
            <div
              className={`lg:col-span-6 flex flex-col transition-all duration-1000 ease-out ${foundersReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}
            >
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-5 sm:gap-6 items-center">
                <div className="sm:col-span-6 relative aspect-[3/4] w-full overflow-hidden bg-zinc-100 shadow-md group">
                  <img
                    src={founders[0].image}
                    alt={founders[0].name}
                    className="w-full h-full object-cover filter contrast-105 group-hover:scale-105 transition-transform duration-1000"
                    loading="lazy"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-1/2 bg-[#5E4BEE]/20 mix-blend-multiply pointer-events-none" />
                </div>

                <div className="sm:col-span-6 flex flex-col justify-center py-2 sm:py-0">
                  <span className="font-display font-black text-3xl sm:text-4xl lg:text-[2.5rem] uppercase tracking-tight text-zinc-950 leading-[0.92]">OUR</span>
                  <span className="font-display font-black text-3xl sm:text-4xl lg:text-[2.5rem] uppercase tracking-tight text-[#5E4BEE] leading-[0.92]">EXPERIENCE</span>
                  <span className="font-display font-black text-3xl sm:text-4xl lg:text-[2.5rem] uppercase tracking-tight text-zinc-950 leading-[0.92] mt-1">OUR</span>
                  <div className="flex items-center gap-2.5">
                    <span className="font-display font-black text-3xl sm:text-4xl lg:text-[2.5rem] uppercase tracking-tight text-zinc-950 leading-[0.92]">PRIDE</span>
                    <span className="w-2.5 h-2.5 bg-[#5E4BEE] shrink-0 inline-block mb-1" />
                  </div>
                </div>
              </div>

              <div className="mt-5 max-w-sm">
                <h3 className="font-display font-bold text-base sm:text-lg text-zinc-900 leading-tight">{founders[0].name}</h3>
                <p className="text-[11px] font-mono text-[#5E4BEE] uppercase tracking-wider mb-2">{founders[0].role}</p>
                <p className="text-xs text-zinc-500 leading-relaxed font-normal">"{founders[0].quote}"</p>
              </div>
            </div>

            {/* BLOCK 2 */}
            <div
              className={`lg:col-span-3 flex flex-col transition-all duration-1000 ease-out delay-150 ${foundersReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}
            >
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-zinc-100 shadow-md group">
                <img src={founders[1].image} alt={founders[1].name} className="w-full h-full object-cover filter contrast-105 group-hover:scale-105 transition-transform duration-1000" loading="lazy" />
              </div>
              <div className="mt-5">
                <h3 className="font-display font-bold text-base sm:text-lg text-zinc-900 leading-tight">{founders[1].name}</h3>
                <p className="text-[11px] font-mono text-[#5E4BEE] uppercase tracking-wider mb-2">{founders[1].role}</p>
                <p className="text-xs text-zinc-500 leading-relaxed font-normal">"{founders[1].quote}"</p>
              </div>
            </div>

            {/* BLOCK 3 */}
            <div
              className={`lg:col-span-3 flex flex-col transition-all duration-1000 ease-out delay-300 ${foundersReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}
            >
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-zinc-100 shadow-md group">
                <img src={founders[2].image} alt={founders[2].name} className="w-full h-full object-cover filter contrast-105 group-hover:scale-105 transition-transform duration-1000" loading="lazy" />
              </div>
              <div className="mt-5">
                <h3 className="font-display font-bold text-base sm:text-lg text-zinc-900 leading-tight">{founders[2].name}</h3>
                <p className="text-[11px] font-mono text-[#5E4BEE] uppercase tracking-wider mb-2">{founders[2].role}</p>
                <p className="text-xs text-zinc-500 leading-relaxed font-normal">"{founders[2].quote}"</p>
              </div>
            </div>

          </div>
        </section>

        {/* ── OPERATING PRINCIPLES ── */}
        <section id="principles" className="space-y-12 mb-20" ref={principlesReveal.ref}>
          <div
            className={`text-center max-w-xl mx-auto transition-all duration-1000 ease-out ${principlesReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <span className="inline-flex items-center gap-2 mb-4 text-[10px] font-mono uppercase tracking-[0.25em] text-zinc-500 font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-zinc-900 animate-pulse" />
              Our Operating Principles
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-zinc-950 uppercase tracking-tight">
              Our Operating Principles
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {principles.map((p, idx) => (
              <div
                key={idx}
                className={`bg-white border border-zinc-200 rounded-2xl p-6 sm:p-7 transition-all duration-700 ease-out hover:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] hover:-translate-y-1 ${principlesReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                  }`}
                style={{ transitionDelay: `${idx * 150}ms` }}
              >
                <div className="w-9 h-9 rounded-lg bg-zinc-100 border border-zinc-200 flex items-center justify-center font-mono font-bold text-[11px] text-zinc-600 mb-4 group-hover:bg-[#5E4BEE] group-hover:text-white transition-colors">
                  {p.num}
                </div>
                <h3 className="font-display font-bold text-lg text-zinc-900 mb-2">{p.title}</h3>
                <p className="text-sm text-zinc-500 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>

          {/* ── CORPORATE ENTITY BOX ── */}
          <div
            ref={corporateReveal.ref}
            className={`bg-white border border-zinc-200 rounded-2xl p-6 sm:p-10 transition-all duration-1000 ease-out ${corporateReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
          >
            <span className="text-[10px] uppercase font-mono font-semibold tracking-[0.25em] text-zinc-500">
              Company &amp; Registered Office
            </span>
            <h3 className="font-display text-xl sm:text-2xl font-bold text-zinc-950 mt-2 mb-6">
              WeHere Networks Private Limited
            </h3>

            <div className="space-y-4 text-sm text-zinc-500 leading-relaxed max-w-2xl">
              <div className="flex items-start gap-3 hover:text-zinc-800 transition-colors">
                <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-400 shrink-0 w-20 pt-1">Address</span>
                <span className="text-zinc-600">B-2484 Indira Nagar, Lucknow, Uttar Pradesh 226016, India.</span>
              </div>
              <div className="flex items-start gap-3 hover:text-zinc-800 transition-colors">
                <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-400 shrink-0 w-20 pt-1">Grievance</span>
                <span className="text-zinc-600">
                  Srishti Gautam (Grievance Redressal Officer) :{' '}
                  <a href="mailto:grievance@wehere.co.in" className="underline underline-offset-2 decoration-zinc-300 hover:decoration-[#5E4BEE] transition-colors">
                    grievance@wehere.co.in
                  </a>
                </span>
              </div>
              <div className="flex items-start gap-3 hover:text-zinc-800 transition-colors">
                <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-400 shrink-0 w-20 pt-1">Business</span>
                <span className="text-zinc-600">
                  <a href="mailto:contact@weherenetworks.com" className="underline underline-offset-2 decoration-zinc-300 hover:decoration-[#5E4BEE] transition-colors">
                    contact@weherenetworks.com
                  </a>
                </span>
              </div>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}