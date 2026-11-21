import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, FileText, Users, ShieldAlert, Receipt, Headset, ArrowRight } from 'lucide-react';

export default function Policies() {
  const policies = [
    {
      icon: ShieldCheck,
      title: 'Privacy Policy',
      desc: 'Detailed disclosure under the Digital Personal Data Protection Act 2023 (India) and GDPR. Explains our approximate-only location handling, automatic photo metadata scrubbing, and complete right to erasure.',
      link: '/privacy-policy',
      btnText: 'Read Privacy Policy',
      badgeColor: 'bg-wehere-purpleBg text-wehere-purple'
    },
    {
      icon: FileText,
      title: 'Terms of Service & User Guide',
      desc: 'The legal contract governing app usage, 18+ eligibility gating, user conduct, intellectual property, limitation of liability, and jurisdiction under Indian law.',
      link: '/terms-of-service',
      btnText: 'Read Terms of Service',
      badgeColor: 'bg-wehere-purpleBg text-wehere-purple'
    },
    {
      icon: Users,
      title: 'Community Guidelines & Safe Space Pledge',
      desc: 'Our code of conduct. Enforces zero tolerance for bullying, romantic solicitation, commercial spam, and harassment. Outlines the 1-tap block and reporting mechanism.',
      link: '/community-guidelines',
      btnText: 'Read Guidelines',
      badgeColor: 'bg-wehere-purpleBg text-wehere-purple'
    },
    {
      icon: ShieldAlert,
      title: 'Self-Harm & Crisis Response Policy',
      desc: 'Defines our strict non-clinical boundary, keyword interception rules, and direct routing protocols to certified emergency lifelines (Tele-MANAS, KIRAN, Vandrevala, 112, 988).',
      link: '/crisis-response',
      btnText: 'Read Crisis Protocol',
      badgeColor: 'bg-rose-50 text-rose-600'
    },
    {
      icon: Receipt,
      title: 'Subscription & Refund Policy',
      desc: 'Transparent pricing schedule (₹199 monthly, ₹499 quarterly, ₹1,499 annual), auto-renewal management, digital delivery fulfillment, and 7-day duplicate billing dispute procedure.',
      link: '/refund-policy',
      btnText: 'Read Refund Policy',
      badgeColor: 'bg-wehere-purpleBg text-wehere-purple'
    },
    {
      icon: Headset,
      title: 'Statutory Grievance Redressal',
      desc: "Mandatory notice under Rule 3(2) of Information Technology Rules, 2021. Contact information for Grievance Officer Srishti Gautam with binding 24h receipt and 15-day resolution timelines.",
      link: '/grievance-redressal',
      btnText: 'Read Grievance Policy',
      badgeColor: 'bg-wehere-purpleBg text-wehere-purple'
    }
  ];

  return (
    <main className="py-16 md:py-24 px-6 lg:px-12 max-w-5xl mx-auto w-full">
      {/* Header */}
      <div className="text-center mb-16">
        <span className="px-3.5 py-1.5 rounded-full bg-wehere-purpleBg text-wehere-purple text-xs font-bold uppercase tracking-wider border border-wehere-purple/20">
          Regulatory Governance
        </span>
        <h1 className="font-display text-[clamp(2.4rem,5vw,3.75rem)] font-extrabold text-wehere-dark mt-4 leading-tight tracking-tight">
          Policies, Privacy & Safety
        </h1>
        <p className="text-wehere-secondary text-base md:text-lg mt-4 max-w-2xl mx-auto leading-relaxed">
          Everything you need to know about our data architecture, community safety standards, user rights, and statutory grievance mechanisms.
        </p>
      </div>

      {/* Policies Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {policies.map((p, idx) => {
          const Icon = p.icon;
          return (
            <div
              key={idx}
              className="glass-card rounded-[28px] p-8 shadow-bumble-sm flex flex-col justify-between hover:shadow-bumble-md transition-shadow group"
            >
              <div>
                <div
                  className={`w-12 h-12 rounded-2xl ${p.badgeColor} flex items-center justify-center mb-5 group-hover:scale-105 transition-transform`}
                >
                  <Icon className="w-6 h-6" />
                </div>
                <h2 className="font-display text-xl font-bold text-wehere-dark mb-2">
                  {p.title}
                </h2>
                <p className="text-sm text-wehere-secondary leading-relaxed mb-6">
                  {p.desc}
                </p>
              </div>

              <Link
                to={p.link}
                className="btn-spring inline-flex items-center gap-2 text-xs font-bold text-wehere-purple bg-wehere-purpleBg px-4 py-2.5 rounded-full w-max hover:bg-wehere-purple hover:text-white transition-all"
              >
                <span>{p.btnText}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          );
        })}
      </div>
    </main>
  );
}
