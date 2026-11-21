import React from 'react';
import PolicyLayout from '../components/PolicyLayout.jsx';

export default function CommunityGuidelines() {
  return (
    <PolicyLayout
      title="Community Guidelines & Safe Space Pledge"
      badge="Code of Conduct"
      lastUpdated="October 2026"
    >
      <div className="space-y-6">
        <section>
          <h2 className="text-xl font-bold text-wehere-dark mb-3">The WeHere Safe Space Pledge</h2>
          <p>
            WeHere exists to provide a quiet, empathetic sanctuary where adults can open up honestly without judgment. To safeguard this sanctuary, every member agrees to uphold our core community standards.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
          <div className="bg-emerald-50 p-5 rounded-2xl border border-emerald-200">
            <h3 className="font-bold text-emerald-900 mb-2">What We Foster 💜</h3>
            <ul className="text-xs sm:text-sm text-emerald-800 space-y-1.5 list-disc pl-4">
              <li>Active, non-judgmental listening</li>
              <li>Respect for diverse life situations</li>
              <li>Encouragement and mindful presence</li>
              <li>Strict confidentiality of shared stories</li>
            </ul>
          </div>
          <div className="bg-rose-50 p-5 rounded-2xl border border-rose-200">
            <h3 className="font-bold text-rose-900 mb-2">What Is Prohibited 🚫</h3>
            <ul className="text-xs sm:text-sm text-rose-800 space-y-1.5 list-disc pl-4">
              <li>Romantic solicitation & predatory behavior</li>
              <li>Hate speech, harassment, & shaming</li>
              <li>Unsolicited medical advice or diagnosis</li>
              <li>Commercial marketing & spamming</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-wehere-dark mb-3">1-Tap Silent Unmatch & Block</h2>
          <p>
            You have absolute autonomy over your conversations. If any peer interaction feels uncomfortable, unhelpful, or boundary-crossing, you can tap the shield icon to instantly unmatch and block the peer. The conversation will immediately vanish from both devices, and the user will not be notified.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-wehere-dark mb-3">Reporting Violations</h2>
          <p>
            Our safety guides and moderation team review every report submitted through the app. Malicious accounts are suspended swiftly to protect the integrity of the sanctuary.
          </p>
        </section>
      </div>
    </PolicyLayout>
  );
}
