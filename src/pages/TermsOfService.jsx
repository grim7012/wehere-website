import React, { useEffect, useRef, useState } from 'react';
import PolicyLayout from '../components/PolicyLayout.jsx';

export default function TermsOfService() {
  const sectionRef = useRef(null);
  const [isInView, setIsInView] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Entrance + Scroll Reveal
  useEffect(() => {
    const id = requestAnimationFrame(() => setMounted(true));
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsInView(true),
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      cancelAnimationFrame(id);
      observer.disconnect();
    };
  }, []);

  const sections = [
    {
      num: '01',
      title: 'Agreement to Terms',
      content: 'These Terms of Service constitute a legally binding agreement between you and WeHere Networks Private Limited. By accessing or using the WeHere Platform, you agree to comply with and be bound by these Terms.',
      image: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=600&h=800',
      alt: 'Abstract texture representing binding agreement'
    },
    {
      num: '02',
      title: 'Strictly Adults 18+ Only',
      content: 'You must be at least 18 years of age to access or use WeHere. By registering an account, you affirm and warrant that you are 18 years or older. Accounts discovered to be created by minors will be terminated immediately.',
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=600&h=800',
      alt: 'Abstract texture representing age restriction'
    },
    {
      num: '03',
      title: 'Nature of Service: Non-Clinical Peer Support',
      content: 'WeHere is a peer listening and habit-building application. It does NOT provide psychotherapy, medical treatment, emergency intervention, or clinical psychological evaluation. Conversations with peers do not replace consultations with qualified medical professionals.',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=600&h=800',
      alt: 'Abstract texture representing peer support',
      isHighlight: true
    },
    {
      num: '04',
      title: 'User Conduct & Zero Tolerance Policy',
      content: (
        <>
          <p className="mb-2">You agree not to use the Platform to:</p>
          <ul className="list-disc pl-4 space-y-1 mb-3">
            <li>Harass, intimidate, stalk, or demean other users.</li>
            <li>Solicit unwanted romantic advances or engage in explicit, predatory, or abusive messaging.</li>
            <li>Distribute commercial spam, unauthorized marketing, or fraudulent solicitations.</li>
            <li>Impersonate any person or misrepresent your qualifications or institutional affiliations.</li>
          </ul>
          <p className="text-[11px] font-bold font-mono text-zinc-900 uppercase tracking-widest border-t border-zinc-300 pt-2">
            Violation results in permanent, irreversible suspension.
          </p>
        </>
      ),
      image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=600&h=800',
      alt: 'Abstract texture representing strict boundaries'
    },
    {
      num: '05',
      title: 'Subscriptions & Cancellations',
      content: 'WeHere offers optional premium subscriptions via Apple In-App Purchase and Google Play Billing. Subscriptions automatically renew unless cancelled at least 24 hours prior to the conclusion of the active billing cycle through your device store settings.',
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=600&h=800',
      alt: 'Abstract texture representing subscription flow'
    },
    {
      num: '06',
      title: 'Governing Law & Jurisdiction',
      content: 'These Terms are governed by and construed in accordance with the laws of India. Any legal dispute or proceeding arising out of or related to these Terms shall be subject to the exclusive jurisdiction of the competent courts in Lucknow, Uttar Pradesh, India.',
      image: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&q=80&w=600&h=800',
      alt: 'Abstract texture representing jurisdiction'
    },
  ];

  return (
    <PolicyLayout
      title="Terms of Service & User Guide"
      badge="Legal // Framework"
      lastUpdated="October 2026"
      wide={true}
    >
      <div
        ref={sectionRef}
        className={`relative bg-transparent select-none overflow-hidden py-10 ${mounted ? 'opacity-100' : 'opacity-0 transition-opacity duration-1000'}`}
      >
        {/* Editorial Staggered Grid (Matching Refund Policy) */}
        <div className="relative w-full mx-auto z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 lg:gap-y-24">
            {sections.map((item, idx) => (
              <div
                key={idx}
                className={`relative flex flex-col group transition-all duration-1000 ease-out ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                  } ${idx % 3 === 0 ? 'lg:translate-y-0' :
                    idx % 3 === 1 ? 'lg:translate-y-16' :
                      'lg:translate-y-32'
                  }`}
                style={{ transitionDelay: `${idx * 150}ms` }}
              >
                {/* Ghost Number */}
                <span className="font-mono text-4xl lg:text-5xl font-light text-zinc-400 mb-4 block tracking-tighter">
                  {item.num}
                </span>

                {/* Image Container with Monochrome-to-Color Hover Effect */}
                <div className="relative w-full aspect-[3/4] overflow-hidden bg-zinc-200 mb-5 border border-zinc-300">
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="w-full h-full object-cover filter grayscale contrast-125 opacity-90 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500" />
                </div>

                {/* Typography Container */}
                <div className="flex flex-col flex-grow">
                  <h3 className="font-serif text-xl lg:text-2xl text-zinc-900 mb-3 leading-tight tracking-tight">
                    {item.title}
                  </h3>

                  <div className={`text-xs lg:text-sm leading-relaxed text-zinc-600 font-light ${item.isHighlight ? 'bg-zinc-200/60 p-4 border-l-2 border-zinc-900' : ''}`}>
                    {item.content}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Support Help Desk Notice */}
        <div className="mt-24 pt-8 border-t border-zinc-300 text-xs text-zinc-500 space-y-1">
          <p className="font-bold text-zinc-800 uppercase tracking-widest font-mono text-[10px] mb-2">Legal & Compliance Desk</p>
          <p>For statutory notices, user conduct escalations, or jurisdiction inquiries: <a href="mailto:legal@wehere.co.in" className="text-zinc-900 underline decoration-zinc-400 hover:decoration-zinc-900 transition-colors">legal@wehere.co.in</a></p>
          <p>WeHere Networks Private Limited • CIN: U63122UP2026PTC253594 • Lucknow, UP 226016, India</p>
        </div>

        {/* Bottom hairline */}
        <div className="absolute inset-x-0 bottom-0 h-px bg-black/[0.04]" />
      </div>
    </PolicyLayout>
  );
}