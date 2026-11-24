import React, { useEffect, useRef, useState } from 'react';
import PolicyLayout from '../components/PolicyLayout.jsx';

export default function RefundPolicy() {
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
      title: 'Transparent Subscription Tiers',
      content: (
        <>
          <p className="mb-3">
            WeHere offers optional premium membership tiers providing unlimited daily peer matching and habit analytics:
          </p>
          <div className="space-y-2">
            <div className="flex items-center justify-between p-2 rounded-xl bg-white border border-black/[0.06]">
              <span className="font-mono text-xs text-zinc-600">Monthly</span>
              <span className="font-bold text-xs text-zinc-900">₹199 / mo</span>
            </div>
            <div className="flex items-center justify-between p-2 rounded-xl bg-purple-50/60 border border-purple-200">
              <span className="font-mono text-xs text-[#5E4BEE] font-semibold">Quarterly</span>
              <span className="font-bold text-xs text-[#5E4BEE]">₹499 (Save 16%)</span>
            </div>
            <div className="flex items-center justify-between p-2 rounded-xl bg-white border border-black/[0.06]">
              <span className="font-mono text-xs text-zinc-600">Annual</span>
              <span className="font-bold text-xs text-zinc-900">₹1,499 / yr</span>
            </div>
          </div>
        </>
      ),
      image: '/assets/wehere-phone-showcase.jpg',
      alt: 'Mobile interface representing pricing tiers',
      isHighlight: true
    },
    {
      num: '02',
      title: 'Instant Digital Delivery & Fulfillment',
      content: 'Premium features unlock immediately upon payment confirmation by Apple In-App Purchase or Google Play Billing. As a digital peer support service, all capabilities are delivered electronically with zero physical shipping or transit delays.',
      image: '/assets/emotional_safety.jpg',
      alt: 'Instant digital connection representing instant fulfillment'
    },
    {
      num: '03',
      title: 'Self-Serve Cancellation & Renewal',
      content: 'Subscriptions automatically renew at the end of each billing cycle unless cancelled at least 24 hours prior. You retain complete self-serve control to manage or cancel renewals at any time directly through your Google Play Subscriptions or Apple ID settings.',
      image: '/assets/mindful_journaling.jpg',
      alt: 'Journal setting representing mindful renewal controls'
    },
    {
      num: '04',
      title: 'Prepaid Grace Period Rights',
      content: 'Upon cancelling auto-renewal, all premium privileges remain fully active throughout the remaining balance of your prepaid term. Once concluded, your account transitions gracefully to our free community tier with zero unexpected renewal charges.',
      image: '/assets/amber-photo.jpg',
      alt: 'Portrait representing stress-free grace period'
    },
    {
      num: '05',
      title: 'Duplicate Billing & Dispute Resolution',
      content: 'If you encounter duplicate transactions, technical billing errors, or unauthorized charges, please reach out to us.',
      image: '/assets/campus_community.jpg',
      alt: 'Community support representing dispute assistance'
    },
    {
      num: '06',
      title: 'Store-Governed Refunds (Apple & Google)',
      content: 'Because in-app subscription payments are processed directly by Apple App Store and Google Play, store refund policies apply. Our team will readily supply transactional records and verification logs to assist with any dispute submitted to the platform stores.',
      image: '/assets/peer_connection.jpg',
      alt: 'Peer conversation representing trusted customer support'
    },
  ];

  return (
    <PolicyLayout
      title="Subscription & Refund Policy"
      badge="Billing & Purchases"
      lastUpdated="October 2026"
      wide={true}
    >
      <div
        ref={sectionRef}
        className={`relative bg-[#FAF9FB] select-none overflow-hidden py-10 ${mounted ? 'opacity-100' : 'opacity-0 transition-opacity duration-1000'}`}
      >
        {/* Ambient subtle glow */}
        <div className="absolute inset-0 pointer-events-none -z-10 flex items-center justify-center overflow-hidden">
          <div className="w-[800px] h-[600px] rounded-full bg-gradient-to-tr from-[#5E4BEE]/10 to-[#378ADD]/10 blur-[140px]" />
        </div>

        {/* Editorial Staggered Grid */}
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
                <span className="font-display text-4xl lg:text-5xl font-light text-zinc-400 mb-4 block tracking-tighter">
                  {item.num}
                </span>

                {/* Image Container with Monochrome-to-Color Hover Effect */}
                <div className="relative w-full aspect-[3/4] overflow-hidden bg-zinc-200 mb-5 shadow-sm">
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

                  <div className={`text-xs lg:text-sm leading-relaxed text-zinc-600 font-light ${item.isHighlight ? 'bg-zinc-100/90 p-4 border-l-2 border-[#5E4BEE]' : ''}`}>
                    {item.content}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Support Help Desk Notice */}

        {/* Bottom hairline */}
        <div className="absolute inset-x-0 bottom-0 h-px bg-black/[0.04]" />
      </div>
    </PolicyLayout>
  );
}
