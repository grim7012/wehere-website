import React from 'react';
import PolicyLayout from '../components/PolicyLayout.jsx';

export default function RefundPolicy() {
  return (
    <PolicyLayout
      title="Subscription & Refund Policy"
      badge="Billing & Purchases"
      lastUpdated="October 2026"
    >
      <div className="space-y-6">
        <section>
          <h2 className="text-xl font-bold text-wehere-dark mb-3">1. Transparent Pricing</h2>
          <p>
            WeHere offers optional premium subscription tiers providing unlimited daily matches and habit analytics:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-4">
            <div className="p-4 rounded-2xl bg-white border border-black/[0.06] shadow-sm text-center">
              <div className="text-xs font-bold text-wehere-tertiary uppercase">Monthly</div>
              <div className="font-display font-extrabold text-2xl text-wehere-dark mt-1">₹199</div>
              <div className="text-[11px] text-wehere-secondary mt-1">Billed monthly</div>
            </div>
            <div className="p-4 rounded-2xl bg-wehere-purpleBg border border-wehere-purple/20 shadow-sm text-center">
              <div className="text-xs font-bold text-wehere-purple uppercase">Quarterly</div>
              <div className="font-display font-extrabold text-2xl text-wehere-purple mt-1">₹499</div>
              <div className="text-[11px] text-wehere-secondary mt-1">Billed quarterly (Save 16%)</div>
            </div>
            <div className="p-4 rounded-2xl bg-white border border-black/[0.06] shadow-sm text-center">
              <div className="text-xs font-bold text-wehere-tertiary uppercase">Annual</div>
              <div className="font-display font-extrabold text-2xl text-wehere-dark mt-1">₹1,499</div>
              <div className="text-[11px] text-wehere-secondary mt-1">Billed annually (Best value)</div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-wehere-dark mb-3">2. Digital Delivery & Fulfillment</h2>
          <p>
            Premium features are unlocked instantly upon successful confirmation of payment by Google Play or Apple App Store. No physical goods are shipped.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-wehere-dark mb-3">3. Cancellation & Renewal Management</h2>
          <p>
            You can cancel auto-renewal at any time through your Google Play Subscriptions or Apple Apple ID settings. Upon cancellation, your premium privileges will remain active until the conclusion of the paid billing period, with zero future renewal charges.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-wehere-dark mb-3">4. Billing Disputes & Refund Procedure</h2>
          <p>
            Because subscriptions are processed directly through Google Play and Apple App Store, their respective store refund guidelines apply. If you experience technical duplicate billing or unauthorized charges, please contact our support team at <a href="mailto:billing@wehere.co.in" className="text-wehere-purple underline">billing@wehere.co.in</a> within 7 days with your transaction receipt for immediate investigation.
          </p>
        </section>
      </div>
    </PolicyLayout>
  );
}
