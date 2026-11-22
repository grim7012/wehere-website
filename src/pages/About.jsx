import React from 'react';
import { Mail, MapPin } from 'lucide-react';

export default function About() {
  const founders = [
    {
      initial: 'K',
      gradient: 'from-wehere-purple to-purple-400',
      name: 'Kanishk Kashyap',
      role: 'Director, CEO & Founder',
      dept: 'Product Architecture & Vision • WeHere Networks',
      quote: '"There was a time in my life when I felt completely alone."',
      bio: [
        "I was going through a difficult period, facing challenges that felt heavy and isolating. During those moments, I realized something that stayed with me: when you're overwhelmed, you don't always need unsolicited advice, diagnoses, or quick fixes. Often, you simply need someone who is willing to listen without judgment.",
        "Traditional social platforms are built around performance, algorithms, and surface-level interactions. We built WeHere to be the opposite: a calm, grounded space where you can unburden your mind, speak honestly, and connect with peers on the exact same wavelength."
      ]
    },
    {
      initial: 'N',
      gradient: 'from-amber-500 to-rose-400',
      name: 'Nailah Istifa',
      role: 'Co-founder & COO',
      dept: 'Operations & Community Safety • WeHere Networks',
      quote: '"Living alone in a new city, the hardest part was the quiet."',
      bio: [
        "I've always had a tendency to overthink. Living alone in a city far from home, there were nights when scrolling through social media only amplified the silence and disconnection. I realized that the hardest part was not the external pressure, it was being stuck in a spiral of thoughts with no safe outlet.",
        "At WeHere, my priority is making sure our community is genuinely safe and dignified. That means strict conduct standards, thoughtful privacy protections, and responsive moderation so no one ever feels unsafe while reaching out."
      ]
    },
    {
      initial: 'S',
      gradient: 'from-emerald-500 to-teal-400',
      name: 'Srishti Gautam',
      role: 'Additional CMO & Grievance Officer',
      dept: 'Statutory Redressal & Outreach • WeHere Networks',
      quote: '"People carry immense silent pressures in their careers and daily lives."',
      bio: [
        "Through my work across community initiatives and educational spaces, I constantly see the heavy emotional toll of burnout, modern deadlines, and quiet isolation. Professional mental healthcare is vital, but everyday stress begins much earlier, and what helps early on is having someone safe to talk to.",
        "As WeHere's Grievance Redressal Officer under India's IT Rules 2021, I personally ensure our platform remains accountable, transparent, and trustworthy, with every member concern acknowledged within 24 hours."
      ]
    }
  ];

  const principles = [
    {
      num: '01',
      bg: 'bg-wehere-purpleBg text-wehere-purple',
      title: 'Respect & Kindness by Default',
      desc: 'Zero tolerance for harassment, unsolicited dating approaches, or dismissive attitudes. Every conversation begins with a shared commitment to mutual respect and psychological safety.'
    },
    {
      num: '02',
      bg: 'bg-amber-50 text-amber-600',
      title: 'Thoughtful Anonymity',
      desc: 'Interact comfortably under gentle pseudonym handles. Your real name, contact number, and personal identity remain completely private unless both peers mutually agree to share names.'
    },
    {
      num: '03',
      bg: 'bg-emerald-50 text-emerald-600',
      title: 'Non-Clinical & Ethical Peer Support',
      desc: 'We are a peer-to-peer support community, not a clinical healthcare provider. We offer supportive listening and habit tools, alongside clear, immediate access to licensed 24/7 national helplines.'
    },
    {
      num: '04',
      bg: 'bg-purple-50 text-wehere-purple',
      title: 'Privacy & Data Control',
      desc: "No precise GPS location tracking, automatic photo metadata scrubbing, and complete self-serve account deletion under India's DPDP Act 2023."
    }
  ];

  return (
    <main className="py-16 sm:py-24 px-5 sm:px-8 lg:px-12 max-w-6xl mx-auto">
      {/* Hero Story Banner */}
      <div className="text-center mb-16 sm:mb-20 max-w-3xl mx-auto">
        <span className="px-3.5 py-1.5 rounded-full bg-wehere-purpleBg text-wehere-purple text-xs font-bold uppercase tracking-wider border border-wehere-purple/20">
          Our Story & Leadership
        </span>
        <h1 className="font-display text-[clamp(2.4rem,5.5vw,4.25rem)] font-extrabold text-wehere-dark mt-4 leading-tight tracking-tight">
          Built by people who understand what it feels like to struggle in silence.
        </h1>
        <p className="text-wehere-secondary text-base sm:text-lg mt-5 leading-relaxed">
          We founded WeHere on a simple conviction: when life gets heavy, you shouldn't have to carry it alone. Everyday emotional struggles don't always need clinical labels, and sometimes what helps most is simply one empathetic person who genuinely listens.
        </p>
      </div>

      {/* Leadership Section */}
      <section className="mb-20">
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="px-3.5 py-1 rounded-full bg-white border border-wehere-border text-wehere-purple text-xs font-bold uppercase tracking-wider shadow-sm">
            The Leadership
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-wehere-dark mt-3 tracking-tight">
            Meet Our Founders
          </h2>
          <p className="text-wehere-secondary text-sm sm:text-base mt-2">
            The team building a calmer, safer peer support community from Lucknow, India.
          </p>
        </div>

        <div className="space-y-8">
          {founders.map((f, i) => (
            <div
              key={i}
              className="glass-card rounded-[36px] p-8 sm:p-12 shadow-bumble-md flex flex-col md:flex-row gap-8 lg:gap-12 items-start"
            >
              <div className="md:w-1/3 flex flex-col items-center md:items-start text-center md:text-left shrink-0">
                <div
                  className={`w-24 h-24 rounded-3xl bg-gradient-to-tr ${f.gradient} text-white shadow-bumble-purple flex items-center justify-center text-3xl font-display font-extrabold mb-4`}
                >
                  {f.initial}
                </div>
                <h3 className="font-display text-2xl font-extrabold text-wehere-dark">{f.name}</h3>
                <p className="text-wehere-purple font-display font-bold text-sm mt-0.5">{f.role}</p>
                <div className="mt-3 text-xs text-wehere-tertiary">{f.dept}</div>
              </div>
              <div className="md:w-2/3 space-y-4 text-wehere-secondary text-sm sm:text-base leading-relaxed border-t md:border-t-0 md:border-l border-black/[0.06] pt-6 md:pt-0 md:pl-8 lg:pl-10">
                <p className="font-medium text-wehere-dark italic">{f.quote}</p>
                {f.bio.map((paragraph, j) => (
                  <p key={j}>{paragraph}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Operating Principles */}
      <section className="space-y-12">
        <div className="text-center max-w-xl mx-auto">
          <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-wehere-dark">Our Operating Principles</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {principles.map((p, idx) => (
            <div key={idx} className="glass-card p-8 rounded-[30px]">
              <div className={`w-11 h-11 rounded-2xl ${p.bg} flex items-center justify-center font-bold text-sm mb-4`}>
                {p.num}
              </div>
              <h3 className="font-display font-bold text-xl text-wehere-dark mb-2">{p.title}</h3>
              <p className="text-sm text-wehere-secondary leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>

        {/* Corporate Entity Box */}
        <div className="glass-card rounded-[36px] p-8 sm:p-12">
          <span className="text-xs uppercase font-bold tracking-wider text-wehere-purpleLight">Company & Registered Office</span>
          <h3 className="font-display text-2xl font-bold text-wehere-dark mt-2 mb-4">
            WeHere Networks Private Limited
          </h3>
          <div className="space-y-3 text-sm text-wehere-secondary leading-relaxed max-w-2xl">
            <p className="flex items-start gap-2">
              <MapPin className="w-5 h-5 text-wehere-purple shrink-0 mt-0.5" />
              <span><strong>Registered Office:</strong> B-2484 Indira Nagar, Lucknow, Uttar Pradesh 226016, India.</span>
            </p>
            <p className="flex items-start gap-2">
              <Mail className="w-5 h-5 text-wehere-purple shrink-0 mt-0.5" />
              <span><strong>Statutory Grievance Redressal Officer:</strong> Srishti Gautam (<a href="mailto:grievance@wehere.co.in" className="text-wehere-purple underline">grievance@wehere.co.in</a>)</span>
            </p>
            <p className="flex items-start gap-2">
              <Mail className="w-5 h-5 text-wehere-purple shrink-0 mt-0.5" />
              <span><strong>Corporate & Partnership Inquiries:</strong> <a href="mailto:contact@weherenetworks.com" className="text-wehere-purple underline">contact@weherenetworks.com</a></span>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
