import React, { useState } from 'react';

const faqs = [
  {
    q: 'What is WeHere and how does it work?',
    a: 'WeHere is a peer emotional support and social connection platform. We bring adults (18+) together based on shared experiences, challenges, and thoughts. Instead of curated photos or popularity metrics, you connect with individuals who truly understand what you are going through, in an environment built on empathy and zero judgment.'
  },
  {
    q: 'Is WeHere completely free to join?',
    a: 'Yes, WeHere is completely free to join. We believe everyone deserves access to compassionate listening and meaningful human connection, without advertisements or hidden fees.'
  },
  {
    q: 'Is WeHere a substitute for clinical therapy?',
    a: 'No. WeHere is a peer-to-peer support and social connection platform. It is not a substitute for professional mental health care, medical advice, diagnosis, or emergency services. If you or someone you know is in crisis, please seek immediate assistance from a qualified professional or emergency service such as Tele-MANAS (14416 in India) or 988 (US and Canada).'
  },
  {
    q: 'How is my personal privacy protected?',
    a: 'We deeply respect your privacy. You have full control over how you present yourself, with the freedom to participate under a pseudonym. Your personal contact details are never shared publicly, and you only share what feels comfortable to you.'
  },
  {
    q: 'What happens if a conversation makes me uncomfortable?',
    a: 'Your comfort and peace of mind always come first. You can quietly unmatch or block any individual with a single tap, with no notifications sent to them. You can also report inappropriate behavior directly through our reporting mechanisms.'
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (idx) => {
    setOpenIndex((current) => (current === idx ? -1 : idx));
  };

  return (
    <section
      id="support"
      className="relative bg-[#EBECEF] text-zinc-900 py-16 sm:py-20 lg:py-28 px-5 sm:px-8 lg:px-14 border-t border-black/[0.08] overflow-hidden select-none"
    >
      {/* Architectural Grid Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.035] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="relative max-w-[1560px] mx-auto z-10">

        {/* ── TOP SECTION HEADER ── */}
        <div className="flex items-center justify-between border-b border-zinc-300/80 pb-5 mb-10 sm:mb-14 text-xs font-semibold tracking-wider">
          <div className="flex items-center gap-2.5">
            <span className="text-[#5E4BEE] font-bold">/ 04</span>
            <span className="uppercase text-zinc-600 tracking-[0.2em]">Common Questions</span>
          </div>

          <div className="flex items-center gap-3 text-zinc-500 font-mono text-[11px]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#5E4BEE]" />
            <span>Always Clear &amp; Open</span>
            <span className="text-zinc-400 font-light">+</span>
          </div>
        </div>

        {/* ── MAIN CONTENT GRID ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 xl:gap-12 items-start">

          {/* LEFT COLUMN: Warm Headline & Contact Card */}
          <div className="lg:col-span-5 xl:col-span-5 flex flex-col justify-between items-start pr-0 lg:pr-6">
            <div className="max-w-[440px]">
              <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-[2.65rem] xl:text-5xl uppercase tracking-tight text-zinc-900 leading-[1.08] mb-5 sm:mb-6">
                Everything You Need To Know
              </h2>
              <p className="text-sm sm:text-base text-zinc-600 leading-relaxed font-normal mb-8 max-w-[380px]">
                We believe that honest conversations begin with clarity. Here are answers to common questions about our community, privacy features, and safety standards.
              </p>
            </div>

            {/* Support Inquiries Card */}
            <div className="w-full max-w-[380px] bg-[#F7F7F9] rounded-2xl border border-zinc-300/80 p-5 sm:p-6 shadow-xs flex flex-col gap-3">
              <div className="flex items-center gap-2 text-xs font-mono font-bold tracking-wider text-zinc-400">
                <span className="w-1.5 h-1.5 rounded-full bg-[#5E4BEE]" />
                <span>LET US CONNECT</span>
              </div>
              <div className="text-sm font-bold text-zinc-900">
                Have more questions?
              </div>
              <p className="text-xs text-zinc-500 leading-relaxed">
                Whether you are exploring membership or have a question about our mission, our team is always happy to hear from you.
              </p>
              <a
                href="mailto:support@wehere.org"
                className="inline-flex items-center justify-between w-full mt-1 px-4 py-2.5 rounded-xl bg-zinc-900 text-white hover:bg-black transition-colors text-xs font-semibold tracking-wide"
              >
                <span>Send Us A Message</span>
                <span className="text-[#7F77DD] font-mono text-sm">→</span>
              </a>
            </div>
          </div>

          {/* RIGHT COLUMN: Modern Accordion Cards */}
          <div className="lg:col-span-7 xl:col-span-7 flex flex-col gap-3.5">
            {faqs.map((item, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={idx}
                  className={`group relative rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? 'bg-white border-zinc-400/80 shadow-[0_8px_24px_rgba(0,0,0,0.06)]'
                      : 'bg-[#F7F7F9] hover:bg-white border-zinc-300/80 shadow-xs'
                  }`}
                >
                  {/* Left Accent Stripe when open */}
                  {isOpen && (
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#5E4BEE] via-[#7F77DD] to-[#378ADD]" />
                  )}

                  <button
                    onClick={() => toggle(idx)}
                    type="button"
                    aria-expanded={isOpen}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4"
                  >
                    <div className="flex items-center gap-3.5">
                      <span className="font-mono text-xs font-bold text-zinc-400">
                        {`0${idx + 1}`}
                      </span>
                      <span className="font-display font-bold text-base sm:text-lg text-zinc-900 group-hover:text-zinc-950 transition-colors">
                        {item.q}
                      </span>
                    </div>

                    <div className="w-8 h-8 rounded-full bg-zinc-200/60 group-hover:bg-zinc-900 group-hover:text-white transition-all flex items-center justify-center shrink-0 text-zinc-700 font-mono text-base font-light">
                      {isOpen ? '−' : '+'}
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-6 sm:px-6 sm:pb-6 pl-10 sm:pl-11 text-xs sm:text-sm text-zinc-600 leading-relaxed border-t border-zinc-200/60 pt-3">
                      {item.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
