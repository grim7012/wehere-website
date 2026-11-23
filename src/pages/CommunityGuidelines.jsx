import React, { useEffect, useRef, useState } from 'react';
import PolicyLayout from '../components/PolicyLayout.jsx';

export default function CommunityGuidelines() {
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
      title: 'The WeHere Safe Space Pledge',
      content: 'WeHere exists to provide a quiet, empathetic sanctuary where adults can open up honestly without fear of judgment. Every member enters the platform with a shared pledge to uphold psychological safety, compassion, and personal dignity.',
      image: '/assets/emotional_safety.jpg',
      alt: 'Calm sanctuary representing safe space pledge'
    },
    {
      num: '02',
      title: 'What We Foster by Default',
      content: (
        <>
          <p className="mb-2">Our culture rests upon constructive, non-judgmental peer companionship:</p>
          <ul className="list-disc pl-4 space-y-1 text-xs text-zinc-600">
            <li>Empathetic listening without unsolicited clinical diagnosis.</li>
            <li>Respect for diverse identities, cultures, and life paths.</li>
            <li>Honoring emotional boundaries and pseudonymity.</li>
            <li>Daily mindful check-ins and mutual encouragement.</li>
          </ul>
        </>
      ),
      image: '/assets/peer_connection.jpg',
      alt: 'Warm peer conversation representing empathetic listening',
      isHighlight: true
    },
    {
      num: '03',
      title: 'Strict Prohibitions & Zero Tolerance',
      content: (
        <>
          <p className="mb-2">To safeguard our members, we enforce strict zero-tolerance bans for:</p>
          <ul className="list-disc pl-4 space-y-1 text-xs text-zinc-600">
            <li>Romantic solicitation, dating approaches, and predatory messaging.</li>
            <li>Harassment, bullying, stalking, and demeaning commentary.</li>
            <li>Commercial advertising, financial solicitations, and spam.</li>
            <li>Hate speech or identity-based discrimination.</li>
          </ul>
        </>
      ),
      image: '/assets/amber-photo.jpg',
      alt: 'Thoughtful portrait representing firm community boundaries'
    },
    {
      num: '04',
      title: '1-Tap Silent Unmatch & Shield',
      content: 'You maintain absolute autonomy over your conversations. If any interaction makes you feel uncomfortable or oversteps your boundaries, tap the shield icon to instantly unmatch and block the peer. The chat vanishes from both devices with zero notification sent.',
      image: '/assets/wehere-phone-showcase.jpg',
      alt: 'Mobile application interface showing 1-tap unmatch shield'
    },
    {
      num: '05',
      title: 'Honoring Anonymity & Digital Privacy',
      content: 'Never pressure peers to disclose legal names, personal phone numbers, physical locations, or external social media profiles. Gentle pseudonyms safeguard vulnerability and allow honest, uninhibited sharing.',
      image: '/assets/mindful_journaling.jpg',
      alt: 'Writing desk representing privacy and anonymity'
    },
    {
      num: '06',
      title: 'Continuous Safety Moderation',
      content: 'Our safety moderators review every user report with care. Accounts confirmed to breach our community standards are permanently suspended to preserve a safe, supportive sanctuary for everyone.',
      image: '/assets/campus_community.jpg',
      alt: 'Group of young adults representing community moderation'
    },
  ];

  return (
    <PolicyLayout
      title="Community Guidelines & Safe Space Pledge"
      badge="Code of Conduct"
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

        {/* Community Standards Notice Box */}
        <div className="mt-24 pt-8 border-t border-black/[0.06] text-xs text-zinc-500 space-y-1">
          <p className="font-bold text-zinc-800">WeHere Networks Private Limited</p>
          <p>Empathetic peer support for adults 18+ • Zero tolerance for harassment or unsolicited advances</p>
          <p>For conduct violations: <a href="mailto:grievance@wehere.co.in" className="text-[#5E4BEE] underline">grievance@wehere.co.in</a></p>
        </div>

        {/* Bottom hairline */}
        <div className="absolute inset-x-0 bottom-0 h-px bg-black/[0.04]" />
      </div>
    </PolicyLayout>
  );
}
