import React, { useState, useEffect, useRef } from 'react';

const faqs = [
  {
    q: 'What is WeHere and how does it work?',
    a: 'WeHere is a peer emotional support and social connection platform. We bring adults (18+) together based on shared experiences, challenges, and thoughts. Instead of popularity metrics, you connect with individuals who relate to your journey in an environment built on empathy and zero judgment.'
  },
  {
    q: 'Is WeHere completely free to join?',
    a: 'Yes, WeHere is completely free to join. We believe everyone deserves access to compassionate listening and meaningful human connection without advertisements or hidden fees.'
  },
  {
    q: 'Is WeHere a substitute for clinical therapy?',
    a: 'No. WeHere is a peer-to-peer support platform. It is not a substitute for professional mental health care, medical advice, diagnosis, or emergency services. If you or someone you know is in crisis, please seek immediate assistance from a qualified professional or emergency hotline.'
  },
  {
    q: 'How is my personal privacy protected?',
    a: 'We deeply respect your privacy. You have full control over how you present yourself, with the freedom to participate under a pseudonym. Your personal contact details are never shared publicly, and you only share what feels comfortable to you.'
  },
  {
    q: 'What happens if a conversation makes me uncomfortable?',
    a: 'Your comfort and peace of mind always come first. You can quietly unmatch or block any individual with a single tap, with no notifications sent to them. You can also report inappropriate behavior directly through our safety reporting mechanisms.'
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);
  const sectionRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  const toggle = (idx) => {
    setOpenIndex((current) => (current === idx ? -1 : idx));
  };

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

  return (
    <section
      ref={sectionRef}
      id="support"
      className="relative h-[80dvh] min-h-[600px] bg-white flex flex-col justify-center overflow-hidden select-none border-t border-black/10 py-12"
    >
      {/* Centered 75% Width Container */}
      <div
        className={`relative w-[75%] mx-auto z-10 transition-all duration-1000 ease-out ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
      >
        {/* ── SECTION HEADER ── */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="font-display font-black text-2xl sm:text-3xl lg:text-4xl  tracking-tight text-black leading-[1.1]">
            Everything You Need<br className="hidden sm:block" /> To Know
          </h2>
        </div>

        {/* ── MINIMALIST ACCORDION LIST ── */}
        <div className="border-t border-zinc-200">
          {faqs.map((item, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div key={idx} className="border-b border-zinc-200">
                <button
                  onClick={() => toggle(idx)}
                  type="button"
                  aria-expanded={isOpen}
                  className="w-full py-4 text-left flex items-center justify-between gap-4 group cursor-pointer"
                >
                  <span className="font-mono text-xs sm:text-sm font-semibold text-black  tracking-wider group-hover:text-zinc-600 transition-colors">
                    {item.q}
                  </span>

                  <div className="text-lg font-mono font-light text-zinc-400 shrink-0 transition-transform duration-300">
                    {isOpen ? '−' : '+'}
                  </div>
                </button>

                <div
                  className={`transition-all duration-500 ease-in-out overflow-hidden ${isOpen ? 'max-h-64 opacity-100 pb-5' : 'max-h-0 opacity-0'
                    }`}
                >
                  <p className="text-xs sm:text-sm text-zinc-500 leading-relaxed font-normal">
                    {item.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* ── BOTTOM NOTE ── */}

      </div>
    </section>
  );
}