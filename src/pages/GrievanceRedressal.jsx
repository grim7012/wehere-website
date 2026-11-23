import React, { useEffect, useRef, useState } from 'react';
import PolicyLayout from '../components/PolicyLayout.jsx';
import { Mail, MapPin, Clock, ShieldCheck } from 'lucide-react';

export default function GrievanceRedressal() {
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
      title: 'Statutory Regulatory Framework',
      content: 'In accordance with Rule 3(2) of the Information Technology (Intermediary Guidelines and Digital Media Ethics Code) Rules, 2021 and the Digital Personal Data Protection Act, 2023, WeHere maintains a dedicated, legally binding Grievance Redressal Mechanism for resolving user complaints and safety concerns.',
      image: '/assets/mindful_journaling.jpg',
      alt: 'Journal desk representing legal governance framework'
    },
    {
      num: '02',
      title: 'Designated Statutory Grievance Officer',
      content: (
        <>
          <p className="font-semibold text-zinc-900">Srishti Gautam</p>
          <p className="text-xs text-[#5E4BEE] font-mono uppercase tracking-wider mt-0.5">
            Grievance Redressal Officer & Additional CMO
          </p>
          <p className="mt-2 text-zinc-600">
            Designated under Indian law as the primary authority for addressing user grievances, content safety reports, and statutory regulatory notifications.
          </p>
        </>
      ),
      image: '/assets/founder-3.jpg',
      alt: 'Srishti Gautam Grievance Redressal Officer',
      isHighlight: true
    },
    {
      num: '03',
      title: '24-Hour Acknowledgment Mandate',
      content: 'Every grievance submitted to grievance@wehere.co.in is officially acknowledged within 24 hours of receipt. A formal automated confirmation containing a unique tracking ticket identifier is dispatched to the complainant for continuous progress monitoring.',
      image: '/assets/wehere-phone-showcase.jpg',
      alt: 'Mobile interface representing 24-hour grievance acknowledgment'
    },
    {
      num: '04',
      title: '15-Day Binding Resolution Timeline',
      content: 'Comprehensive internal investigation, review of chat logs, appropriate moderation enforcement, and a definitive written determination are issued by the Grievance Officer within a strict statutory timeframe of 15 business days from receipt.',
      image: '/assets/emotional_safety.jpg',
      alt: 'Calm setting representing systematic dispute resolution'
    },
    {
      num: '05',
      title: 'How to Submit a Valid Grievance',
      content: 'When filing a grievance, please provide your registered handle, a concise summary of the incident or safety violation, relevant timestamps, and any supporting screenshots. Incomplete submissions may require additional follow-up verification.',
      image: '/assets/campus_community.jpg',
      alt: 'Community group representing user incident reporting'
    },
    {
      num: '06',
      title: 'Direct Redressal & Physical Notice',
      content: 'Formal notices can be transmitted digitally to grievance@wehere.co.in or physically dispatched to our corporate office: WeHere Networks Private Limited, B-2484 Indira Nagar, Lucknow, Uttar Pradesh 226016, India.',
      image: '/assets/peer_connection.jpg',
      alt: 'Peer interaction representing direct communication'
    },
  ];

  return (
    <PolicyLayout
      title="Statutory Grievance Redressal Mechanism"
      badge="IT Rules 2021 (India) Compliance"
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

                  <div className={`text-xs lg:text-sm leading-relaxed text-zinc-600 font-light ${item.isHighlight ? 'bg-zinc-100/90 p-4 border-l-2 border-[#5E4BEE]' : ''}`}>
                    {item.content}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Statutory Contact Card */}
        <div className="mt-24 pt-8 border-t border-black/[0.06] text-xs text-zinc-500 space-y-1">
          <p className="font-bold text-zinc-800">WeHere Networks Private Limited</p>
          <p>CIN: U63122UP2026PTC253594 • Registered Office: B-2484 Indira Nagar, Lucknow, Uttar Pradesh 226016, India</p>
          <p>Direct Grievance Desk: <a href="mailto:grievance@wehere.co.in" className="text-[#5E4BEE] underline">grievance@wehere.co.in</a></p>
        </div>

        {/* Bottom hairline */}
        <div className="absolute inset-x-0 bottom-0 h-px bg-black/[0.04]" />
      </div>
    </PolicyLayout>
  );
}
