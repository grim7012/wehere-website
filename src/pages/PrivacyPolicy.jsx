import React, { useEffect, useRef, useState } from 'react';
import PolicyLayout from '../components/PolicyLayout.jsx';

export default function PrivacyPolicy() {
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
      title: 'Data Architecture & DPDP Act 2023',
      content: 'This Privacy Policy explains how WeHere Networks Private Limited collects, secures, and handles information across our peer support platform. Our protocols are built strictly under the Digital Personal Data Protection (DPDP) Act 2023 of India and international digital safety standards.',
      image: '/assets/mindful_journaling.jpg',
      alt: 'Journaling setting representing mindful data governance'
    },
    {
      num: '02',
      title: 'Strict 18+ Eligibility & Age Gating',
      content: 'WeHere is designed exclusively for adults aged 18 and older. Registration requires explicit affirmation of age eligibility. Any accounts discovered to belong to minors are terminated immediately with complete, permanent deletion of associated profile data.',
      image: '/assets/campus_community.jpg',
      alt: 'Young adults representing age eligibility gating'
    },
    {
      num: '03',
      title: 'Thoughtful Anonymity & Pseudonyms',
      content: 'Interact with complete emotional safety. WeHere enables you to engage under gentle pseudonym handles without exposing your real legal name, telephone number, or external identity to peers. Technical security logs are preserved solely for platform integrity and regulatory compliance.',
      image: '/assets/amber-photo.jpg',
      alt: 'Thoughtful portrait representing gentle anonymity',
      isHighlight: true
    },
    {
      num: '04',
      title: 'Zero GPS Tracking: Approximate Location Only',
      content: (
        <>
          <p>
            WeHere does not request GPS hardware permissions from your device and does not track, collect, or monitor precise real-time coordinates.
          </p>
          <p className="mt-2 text-zinc-500 font-normal">
            Users voluntarily select an approximate City/State from a dropdown menu solely to assist relevant regional peer matching.
          </p>
        </>
      ),
      image: '/assets/wehere-phone-showcase.jpg',
      alt: 'Mobile interface representing approximate location selection'
    },
    {
      num: '05',
      title: 'Encrypted Chat & Photo Metadata Scrubbing',
      content: 'All peer chat exchanges utilize cryptographic transmission protocols. When users share images in chat, our server pipeline automatically scrubs all EXIF geolocation and camera metadata before delivery to protect personal privacy.',
      image: '/assets/emotional_safety.jpg',
      alt: 'Calm setting representing encrypted communications'
    },
    {
      num: '06',
      title: 'Data Erasure & Grievance Redressal',
      content: 'You retain the permanent right to access, rectify, or completely erase your account and data directly in app settings. For statutory requests, our Grievance Officer Srishti Gautam (grievance@wehere.co.in) provides binding 24-hour receipt and 15-day resolution.',
      image: '/assets/peer_connection.jpg',
      alt: 'Empathetic conversation representing user support'
    },
  ];

  return (
    <PolicyLayout
      title="WeHere Privacy Policy"
      badge="DPDP Act 2023 & GDPR Compliant"
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

        {/* Corporate Entity Notice Box */}
        <div className="mt-24 pt-8 border-t border-black/[0.06] text-xs text-zinc-500 space-y-1">
          <p className="font-bold text-zinc-800">WeHere Networks Private Limited</p>
          <p>CIN: U63122UP2026PTC253594 • Registered Office: B-2484 Indira Nagar, Lucknow, Uttar Pradesh 226016, India</p>
          <p>Statutory Grievance Redressal Officer: Srishti Gautam (<a href="mailto:grievance@wehere.co.in" className="text-[#5E4BEE] underline">grievance@wehere.co.in</a>)</p>
        </div>

        {/* Bottom hairline */}
        <div className="absolute inset-x-0 bottom-0 h-px bg-black/[0.04]" />
      </div>
    </PolicyLayout>
  );
}
