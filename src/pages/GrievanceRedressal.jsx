import React from 'react';
import PolicyLayout from '../components/PolicyLayout.jsx';
import { Mail, Clock, ShieldCheck, MapPin } from 'lucide-react';

export default function GrievanceRedressal() {
  return (
    <PolicyLayout
      title="Statutory Grievance Redressal Mechanism"
      badge="IT Rules 2021 (India) Compliance"
      lastUpdated="October 2026"
    >
      <div className="space-y-6">
        <section>
          <p>
            In accordance with the Information Technology (Intermediary Guidelines and Digital Media Ethics Code) Rules, 2021 and the Digital Personal Data Protection Act, 2023, WeHere Networks Private Limited has established a dedicated, statutory Grievance Redressal Mechanism for resolving user complaints and safety concerns.
          </p>
        </section>

        {/* Designated Officer Box */}
        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-black/[0.06] shadow-bumble-sm space-y-4">
          <div className="flex items-center gap-2 text-xs font-bold text-wehere-purple uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4" />
            <span>Designated Statutory Officer</span>
          </div>
          <div>
            <div className="font-display font-extrabold text-2xl text-wehere-dark">Srishti Gautam</div>
            <div className="text-sm font-semibold text-wehere-secondary mt-0.5">Grievance Redressal Officer & Additional CMO</div>
            <div className="text-xs text-wehere-tertiary">WeHere Networks Private Limited</div>
          </div>

          <div className="border-t border-black/[0.06] pt-4 space-y-2 text-sm text-wehere-secondary">
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-wehere-purple" />
              <span>Direct Grievance Email: <a href="mailto:grievance@wehere.co.in" className="text-wehere-purple font-semibold underline">grievance@wehere.co.in</a></span>
            </div>
            <div className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-wehere-purple shrink-0 mt-0.5" />
              <span>Registered Office: B-2484 Indira Nagar, Lucknow, Uttar Pradesh 226016, India</span>
            </div>
          </div>
        </div>

        <section>
          <h2 className="text-xl font-bold text-wehere-dark mb-3">Statutory Resolution Timelines</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
            <div className="p-5 rounded-2xl bg-white border border-black/[0.06] shadow-sm">
              <div className="flex items-center gap-2 text-xs font-bold text-emerald-600 uppercase">
                <Clock className="w-4 h-4" />
                <span>Step 1: Acknowledgment</span>
              </div>
              <div className="font-display font-bold text-xl text-wehere-dark mt-2">Within 24 Hours</div>
              <p className="text-xs text-wehere-secondary mt-1">Receipt of your grievance ticket is formally acknowledged via return email with a unique tracking ID.</p>
            </div>
            <div className="p-5 rounded-2xl bg-white border border-black/[0.06] shadow-sm">
              <div className="flex items-center gap-2 text-xs font-bold text-wehere-purple uppercase">
                <Clock className="w-4 h-4" />
                <span>Step 2: Formal Disposal</span>
              </div>
              <div className="font-display font-bold text-xl text-wehere-dark mt-2">Within 15 Days</div>
              <p className="text-xs text-wehere-secondary mt-1">Complete investigation, corrective action, and formal written resolution issued by the Grievance Officer.</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-wehere-dark mb-3">How to File a Grievance</h2>
          <p>
            When emailing <a href="mailto:grievance@wehere.co.in" className="text-wehere-purple underline">grievance@wehere.co.in</a>, please include:
          </p>
          <ul className="list-disc pl-6 space-y-1.5 mt-2">
            <li>Your registered email address or account handle.</li>
            <li>A clear description of the violation, bug, or safety concern.</li>
            <li>Any supporting screenshots, usernames, or transaction identifiers.</li>
          </ul>
        </section>
      </div>
    </PolicyLayout>
  );
}
