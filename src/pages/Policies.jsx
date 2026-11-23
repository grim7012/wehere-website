import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

// ── CUSTOM SCROLL REVEAL HOOK ──
function useScrollReveal() {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return { ref, isVisible };
}

export default function Policies() {
  const headerReveal = useScrollReveal();

  const policies = [
    {
      num: '01',
      title: 'Privacy Policy',
      desc: 'Detailed disclosure under the Digital Personal Data Protection Act 2023 (India) and GDPR. Explains our approximate-only location handling, automatic photo metadata scrubbing, and complete right to erasure.',
      link: '/privacy-policy',
      btnText: 'Read Policy',
    },
    {
      num: '02',
      title: 'Terms of Service & User Guide',
      desc: 'The legal contract governing app usage, 18+ eligibility gating, user conduct, intellectual property, limitation of liability, and jurisdiction under Indian law.',
      link: '/terms-of-service',
      btnText: 'Read Terms',
    },
    {
      num: '03',
      title: 'Community Guidelines',
      desc: 'Our code of conduct. Enforces zero tolerance for bullying, romantic solicitation, commercial spam, and harassment. Outlines the 1-tap block and reporting mechanism.',
      link: '/community-guidelines',
      btnText: 'Read Guidelines',
    },
    {
      num: '04',
      title: 'Crisis Response',
      desc: 'Defines our strict non-clinical boundary, keyword interception rules, and direct routing protocols to certified emergency lifelines (Tele-MANAS, KIRAN, Vandrevala, 112, 988).',
      link: '/crisis-response',
      btnText: 'Read Protocol',
      isCritical: true,
    },
    {
      num: '05',
      title: 'Subscription & Refunds',
      desc: 'Transparent pricing schedule, auto-renewal management, digital delivery fulfillment, and 7-day duplicate billing dispute procedure.',
      link: '/refund-policy',
      btnText: 'Read Policy',
    },
    {
      num: '06',
      title: 'Grievance Redressal',
      desc: 'Mandatory notice under Rule 3(2) of Information Technology Rules, 2021. Contact information for Grievance Officer Srishti Gautam with binding 24h receipt and 15-day resolution timelines.',
      link: '/grievance-redressal',
      btnText: 'Read Grievance',
    }
  ];

  return (
    <main className="min-h-screen bg-[#F4F4F5] text-zinc-950 font-sans selection:bg-zinc-900 selection:text-white pb-24">

      {/* ── RAW CHECKERED HEADER BANNER ── */}
      <section
        ref={headerReveal.ref}
        className="relative border-b-2 border-zinc-950 overflow-hidden bg-white"
      >
        {/* Checkerboard Pattern Overlay (Pure CSS) */}
        <div
          className="absolute inset-0 opacity-[0.15] pointer-events-none z-0"
          style={{
            backgroundImage: `
              linear-gradient(45deg, #000 25%, transparent 25%), 
              linear-gradient(-45deg, #000 25%, transparent 25%), 
              linear-gradient(45deg, transparent 75%, #000 75%), 
              linear-gradient(-45deg, transparent 75%, #000 75%)
            `,
            backgroundSize: '40px 40px',
            backgroundPosition: '0 0, 0 20px, 20px -20px, -20px 0px'
          }}
        />

        <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-12 py-20 md:py-32 flex flex-col items-start justify-center">
          <span className={`inline-block px-3 py-1 border border-zinc-950 bg-zinc-950 text-white text-xs font-mono uppercase tracking-widest mb-6 transition-all duration-700 ease-out ${headerReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            Governance // 2026
          </span>

          <h1
            className={`text-[clamp(2.5rem,6vw,5rem)] font-black uppercase tracking-tighter leading-[0.9] max-w-4xl transition-all duration-1000 ease-out ${headerReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ transitionDelay: '100ms' }}
          >
            Policies,<br />
            Privacy &<br />
            Safety.
          </h1>

          <p
            className={`mt-6 text-sm md:text-base text-zinc-600 max-w-xl font-medium leading-relaxed transition-all duration-1000 ease-out ${headerReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ transitionDelay: '200ms' }}
          >
            Everything you need to know about our data architecture, community safety standards, user rights, and statutory grievance mechanisms.
          </p>
        </div>
      </section>

      {/* ── POLICIES GRID (BRUTALIST CARDS) ── */}
      <section className="max-w-6xl mx-auto px-6 lg:px-12 mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-zinc-950">
          {policies.map((p, idx) => (
            <PolicyCard key={idx} data={p} index={idx} />
          ))}
        </div>
      </section>

    </main>
  );
}

// ── SEPARATE CARD COMPONENT FOR CLEANER REVEAL LOGIC ──
function PolicyCard({ data, index }) {
  const { ref, isVisible } = useScrollReveal();

  return (
    <div
      ref={ref}
      className={`
        relative bg-white border-r border-b border-zinc-950 p-8 flex flex-col justify-between group
        transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]
        hover:bg-zinc-50
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}
      `}
      style={{ transitionDelay: `${(index % 3) * 150}ms` }}
    >
      {/* Number Header */}
      <div className="flex justify-between items-start mb-12">
        <span className="font-mono text-3xl font-bold text-zinc-300 group-hover:text-zinc-900 transition-colors duration-500">
          {data.num}
        </span>

        {/* Critical Flag (replaces the red icon) */}
        {data.isCritical && (
          <span className="px-2 py-1 text-[10px] font-mono font-bold uppercase tracking-widest border border-zinc-900 bg-white text-zinc-900 group-hover:bg-zinc-900 group-hover:text-white transition-colors">
            Critical
          </span>
        )}
      </div>

      {/* Content */}
      <div className="flex-grow flex flex-col">
        <h2 className="text-xl font-bold uppercase tracking-tight text-zinc-950 mb-3 leading-tight">
          {data.title}
        </h2>
        <p className="text-sm text-zinc-600 leading-relaxed mb-8 flex-grow">
          {data.desc}
        </p>
      </div>

      {/* Link Button */}
      <Link
        to={data.link}
        className="inline-flex items-center justify-between w-full border border-zinc-950 p-3 text-xs font-bold uppercase tracking-widest text-zinc-950 hover:bg-zinc-950 hover:text-white transition-all duration-300"
      >
        <span>{data.btnText}</span>
        <span className="font-mono text-base leading-none transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
          ↗
        </span>
      </Link>
    </div>
  );
}