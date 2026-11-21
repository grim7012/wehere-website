import React, { useState } from 'react';

const faqs = [
  {
    q: 'What is WeHere and how does it work?',
    a: 'WeHere is a peer emotional support and personal wellness sanctuary connecting adults (18+) navigating life challenges such as workplace burnout, loneliness, and life transitions. Instead of appearance-focused profiles or vanity metrics, matches are made through shared life contexts, communication preferences, and the type of listening you need.'
  },
  {
    q: 'Is WeHere free to join?',
    a: 'Yes, WeHere is completely free to join and start connecting with peers. We are committed to keeping the core peer connection experience accessible, unmonetized by user data, and 100% ad-free.'
  },
  {
    q: 'Is WeHere a substitute for therapy or crisis counseling?',
    a: 'No. WeHere provides empathetic peer holding, not professional medical care, clinical psychotherapy, or psychiatric treatment. If you are experiencing acute distress or self-harm thoughts, please reach out directly to certified emergency lines like Tele-MANAS (14416 in India) or 988 (US/Canada).'
  },
  {
    q: 'How does WeHere protect my privacy and anonymity?',
    a: 'You create an account and chat under a chosen pseudonym. Your phone number, email, and location are never exposed to other peers. Real personal identity exchange is strictly gated by bilateral, double opt-in consent.'
  },
  {
    q: 'What happens if someone makes me feel uncomfortable?',
    a: 'You can unmatch or block any user with a single tap at any time. When you unmatch someone, the conversation immediately disappears for both participants, and they can no longer contact you. Ephemeral logs are purged permanently from our servers.'
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
            <span>Clear &amp; Transparent</span>
            <span className="text-zinc-400 font-light">+</span>
          </div>
        </div>

        {/* ── MAIN CONTENT GRID: Left Title/Contact + Right Accordion ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 xl:gap-12 items-start">

          {/* LEFT COLUMN: Editorial Title & Help Card */}
          <div className="lg:col-span-5 xl:col-span-5 flex flex-col justify-between items-start pr-0 lg:pr-6">
            <div className="max-w-[440px]">
              <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-[2.65rem] xl:text-5xl uppercase tracking-tight text-zinc-900 leading-[1.08] mb-5 sm:mb-6">
                Transparent Answers For Your Peace Of Mind
              </h2>
              <p className="text-sm sm:text-base text-zinc-600 leading-relaxed font-normal mb-8 max-w-[380px]">
                Have questions about our matching algorithm, privacy guarantees, or safety escalation protocols? Here is how WeHere safeguards your experience.
              </p>
            </div>

            {/* Support Inquiries Card */}
            <div className="w-full max-w-[380px] bg-[#F7F7F9] rounded-2xl border border-zinc-300/80 p-5 sm:p-6 shadow-xs flex flex-col gap-3">
              <div className="flex items-center gap-2 text-xs font-mono font-bold tracking-wider text-zinc-400">
                <span className="w-1.5 h-1.5 rounded-full bg-[#5E4BEE]" />
                <span>SUPPORT DIRECTORY</span>
              </div>
              <div className="text-sm font-bold text-zinc-900">
                Need more guidance?
              </div>
              <p className="text-xs text-zinc-500 leading-relaxed">
                Our support team and community guides are available 24/7 for safe platform inquiries.
              </p>
              <a
                href="mailto:support@wehere.org"
                className="inline-flex items-center justify-between w-full mt-1 px-4 py-2.5 rounded-xl bg-zinc-900 text-white hover:bg-black transition-colors text-xs font-semibold tracking-wide"
              >
                <span>Email Support Guides</span>
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

                    {/* Minimal + / − Toggle Icon (Zero Lucide) */}
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
