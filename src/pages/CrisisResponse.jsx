import React, { useEffect, useRef, useState } from 'react';
import PolicyLayout from '../components/PolicyLayout.jsx';
import { PhoneCall, ShieldAlert, HeartHandshake } from 'lucide-react';

export default function CrisisResponse() {
  const sectionRef = useRef(null);
  const [isInView, setIsInView] = useState(false);
  const [mounted, setMounted] = useState(false);

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
      title: 'Non-Clinical Peer Support Boundary',
      content: 'WeHere is an emotional peer community designed to connect everyday adults through empathy and shared life experiences. We are not a medical hospital, licensed psychiatric practice, suicide intervention clinic, or acute emergency dispatch service.',
      image: '/assets/peer_connection.jpg',
      alt: 'Empathic peer listening representing supportive boundaries'
    },
    {
      num: '02',
      title: 'Immediate 24/7 National Emergency Lifelines',
      content: (
        <>
          <p className="mb-2 font-semibold text-zinc-900">
            If you or someone you know is in immediate physical danger:
          </p>
          <div className="space-y-1.5 text-xs text-zinc-700">
            <p><strong className="text-zinc-900">India:</strong> Call <span className="font-mono font-bold text-rose-600">112</span> (National Emergency) or <span className="font-mono font-bold text-[#5E4BEE]">14416</span> (Tele-MANAS)</p>
            <p><strong className="text-zinc-900">US & Canada:</strong> Call or text <span className="font-mono font-bold text-[#5E4BEE]">988</span> (Suicide & Crisis Lifeline)</p>
            <p><strong className="text-zinc-900">United Kingdom:</strong> Call <span className="font-mono font-bold text-[#5E4BEE]">116 123</span> (Samaritans)</p>
          </div>
        </>
      ),
      image: '/assets/emotional_safety.jpg',
      alt: 'Calm sanctuary representing emergency lifeline access',
      isHighlight: true
    },
    {
      num: '03',
      title: 'India Verified Crisis Networks',
      content: 'Access certified mental health professionals around the clock at no charge: Tele-MANAS (14416 or 1800-891-4416) under the Ministry of Health, KIRAN Psychosocial Support (1800-599-0019), and Vandrevala Foundation (9999 666 555).',
      image: '/assets/mindful_journaling.jpg',
      alt: 'Desk setting representing verified rehabilitation networks'
    },
    {
      num: '04',
      title: 'Automated Keyword Interception Shield',
      content: 'Our systems continuously monitor text prompts for high-risk indicators of self-harm or acute psychological crisis. When detected, our safety shield triggers an instantaneous high-priority overlay with one-tap dialing to certified regional lifelines.',
      image: '/assets/wehere-phone-showcase.jpg',
      alt: 'Mobile safety interface representing keyword interception shield'
    },
    {
      num: '05',
      title: 'Global Directory Support',
      content: 'For members connecting outside India or North America, WeHere coordinates routing through findahelpline.com, providing verified, free, and completely confidential mental health crisis support across more than 130 countries.',
      image: '/assets/campus_community.jpg',
      alt: 'Diverse community representing global crisis directory'
    },
    {
      num: '06',
      title: 'Community Protective Obligation',
      content: 'If a peer in your chat discloses active self-harm intent, please remain calm, encourage them to reach out to certified emergency numbers, and immediately utilize our in-app emergency report button for prompt moderation escalation.',
      image: '/assets/amber-photo.jpg',
      alt: 'Thoughtful portrait representing community protective care'
    },
  ];

  return (
    <PolicyLayout
      title="Self-Harm & Crisis Response Policy"
      badge="Safety & Life Protection Protocol"
      lastUpdated="October 2026"
      wide={true}
    >
      <div
        ref={sectionRef}
        className={`relative bg-[#FAF9FB] select-none overflow-hidden py-10 ${mounted ? 'opacity-100' : 'opacity-0 transition-opacity duration-1000'}`}
      >
        {/* Ambient subtle glow */}
        <div className="absolute inset-0 pointer-events-none -z-10 flex items-center justify-center overflow-hidden">
          <div className="w-[800px] h-[600px] rounded-full bg-gradient-to-tr from-rose-200/20 via-[#5E4BEE]/10 to-[#378ADD]/10 blur-[140px]" />
        </div>

        {/* Editorial Staggered Grid */}
        <div className="relative w-full mx-auto z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 lg:gap-y-24">
            {sections.map((item, idx) => (
              <div
                key={idx}
                className={`relative flex flex-col group transition-all duration-1000 ease-out ${
                  isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                } ${
                  idx % 3 === 0 ? 'lg:translate-y-0' :
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

                  <div className={`text-xs lg:text-sm leading-relaxed text-zinc-600 font-light ${item.isHighlight ? 'bg-zinc-100/90 p-4 border-l-2 border-rose-500' : ''}`}>
                    {item.content}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Emergency Notice Box */}
        <div className="mt-24 pt-8 border-t border-black/[0.06] text-xs text-zinc-500 space-y-1">
          <p className="font-bold text-zinc-800">Emergency & Crisis Escalation Notice</p>
          <p>WeHere Networks Private Limited • Strictly for adults 18+ • Certified peer connection</p>
          <p>For urgent institutional support: <a href="mailto:support@wehere.co.in" className="text-[#5E4BEE] underline">support@wehere.co.in</a></p>
        </div>

        {/* Bottom hairline */}
        <div className="absolute inset-x-0 bottom-0 h-px bg-black/[0.04]" />
      </div>
    </PolicyLayout>
  );
}
