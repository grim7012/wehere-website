import React from 'react';
import PolicyLayout from '../components/PolicyLayout.jsx';

export default function TermsOfService() {
  return (
    <PolicyLayout
      title="Terms of Service & User Guide"
      badge="User Agreement"
      lastUpdated="October 2026"
    >
      <div className="space-y-6">
        <section>
          <h2 className="text-xl font-bold text-wehere-dark mb-3">1. Agreement to Terms</h2>
          <p>
            These Terms of Service constitute a legally binding agreement between you and WeHere Networks Private Limited. By accessing or using the WeHere Platform, you agree to comply with and be bound by these Terms.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-wehere-dark mb-3">2. Strictly Adults 18+ Only</h2>
          <p>
            You must be at least 18 years of age to access or use WeHere. By registering an account, you affirm and warrant that you are 18 years or older. Accounts discovered to be created by minors will be terminated immediately.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-wehere-dark mb-3">3. Nature of Service: Non-Clinical Peer Support</h2>
          <p className="bg-purple-50 p-4 rounded-2xl border border-purple-200 text-wehere-purple text-xs sm:text-sm font-medium">
            WeHere is a peer listening and habit-building application. It does NOT provide psychotherapy, medical treatment, emergency intervention, or clinical psychological evaluation. Conversations with peers do not replace consultations with qualified medical professionals.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-wehere-dark mb-3">4. User Conduct & Zero Tolerance Policy</h2>
          <p>You agree not to use the Platform to:</p>
          <ul className="list-disc pl-6 space-y-1.5 mt-2">
            <li>Harass, intimidate, stalk, or demean other users.</li>
            <li>Solicit unwanted romantic advances or engage in explicit, predatory, or abusive messaging.</li>
            <li>Distribute commercial spam, unauthorized marketing, or fraudulent solicitations.</li>
            <li>Impersonate any person or misrepresent your qualifications or institutional affiliations.</li>
          </ul>
          <p className="mt-3">
            Violation of conduct guidelines results in permanent, irreversible suspension of your account and device access.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-wehere-dark mb-3">5. Subscriptions, Payments & Cancellations</h2>
          <p>
            WeHere offers optional premium subscriptions via Apple In-App Purchase and Google Play Billing. Subscriptions automatically renew unless cancelled at least 24 hours prior to the conclusion of the active billing cycle through your device store settings.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-wehere-dark mb-3">6. Governing Law & Jurisdiction</h2>
          <p>
            These Terms are governed by and construed in accordance with the laws of India. Any legal dispute or proceeding arising out of or related to these Terms shall be subject to the exclusive jurisdiction of the competent courts in Lucknow, Uttar Pradesh, India.
          </p>
        </section>
      </div>
    </PolicyLayout>
  );
}
