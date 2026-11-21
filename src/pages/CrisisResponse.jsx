import React from 'react';
import PolicyLayout from '../components/PolicyLayout.jsx';
import { PhoneCall, ShieldAlert, HeartHandshake } from 'lucide-react';

export default function CrisisResponse() {
  const helplines = [
    { country: 'India (National)', name: 'Tele-MANAS', num: '14416 or 1800 891 4416', desc: 'Free 24/7 tele-mental health helpline operated by the Ministry of Health and Family Welfare.' },
    { country: 'India (Emergency)', name: 'National Emergency Helpline', num: '112', desc: 'Immediate emergency police, fire, and medical response.' },
    { country: 'India (Psychosocial)', name: 'KIRAN Helpline', num: '1800-599-0019', desc: '24/7 toll-free mental health rehabilitation support across multiple Indian languages.' },
    { country: 'India (NGO Crisis)', name: 'Vandrevala Foundation', num: '9999 666 555', desc: 'Free 24/7 professional mental health counseling.' },
    { country: 'United States & Canada', name: 'Suicide & Crisis Lifeline', num: '988', desc: 'Free 24/7 confidential support via phone call or SMS text.' },
    { country: 'United Kingdom', name: 'Samaritans', num: '116 123', desc: 'Free 24/7 listening service across the UK and Ireland.' }
  ];

  return (
    <PolicyLayout
      title="Self-Harm & Crisis Response Policy"
      badge="Safety & Life Protection Protocol"
      lastUpdated="October 2026"
    >
      <div className="space-y-6">
        <div className="bg-rose-50 border border-rose-200 p-6 rounded-3xl flex items-start gap-4">
          <ShieldAlert className="w-8 h-8 text-rose-600 shrink-0 mt-1" />
          <div className="space-y-2">
            <h2 className="font-bold text-rose-950 text-base sm:text-lg">If you are in immediate danger or experiencing thoughts of self-harm:</h2>
            <p className="text-xs sm:text-sm text-rose-900 leading-relaxed">
              Please do not rely on peer chat. WeHere connects everyday peers for emotional encouragement, not emergency clinical dispatch. Certified crisis counselors are standing by right now on toll-free national helplines to support you.
            </p>
          </div>
        </div>

        <section>
          <h2 className="text-xl font-bold text-wehere-dark mb-3">Immediate 24/7 Verified Helplines</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
            {helplines.map((h, i) => (
              <div key={i} className="bg-white p-5 rounded-2xl border border-black/[0.06] shadow-bumble-sm space-y-2">
                <span className="text-[10px] uppercase font-bold tracking-wider text-wehere-tertiary">{h.country}</span>
                <div className="font-display font-extrabold text-base text-wehere-dark">{h.name}</div>
                <div className="text-sm font-bold text-wehere-purple flex items-center gap-2">
                  <PhoneCall className="w-4 h-4 shrink-0" />
                  <span>{h.num}</span>
                </div>
                <p className="text-xs text-wehere-secondary">{h.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-wehere-dark mb-3">In-App Automated Interception</h2>
          <p>
            When keywords indicating severe psychological distress or suicide ideation are identified in user submissions or chat prompts, our automated safety shield immediately displays a high-priority banner with one-tap dialing to Tele-MANAS and regional crisis partners.
          </p>
        </section>
      </div>
    </PolicyLayout>
  );
}
