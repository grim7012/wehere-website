import React from 'react';
import PolicyLayout from '../components/PolicyLayout.jsx';

export default function PrivacyPolicy() {
  return (
    <PolicyLayout
      title="WeHere Privacy Policy"
      badge="DPDP Act 2023 & GDPR Compliant"
      lastUpdated="October 2026"
    >
      <div className="space-y-6">
        <section>
          <h2 className="text-xl font-bold text-wehere-dark mb-3">1. Introduction</h2>
          <p>
            This Privacy Policy explains how WeHere Networks Private Limited ("WeHere", "Company", "we", "us" or "our") collects, uses, processes, stores, protects and discloses information in connection with the WeHere mobile application, website and related services (collectively, the "Platform").
          </p>
          <p className="mt-2">
            WeHere is a peer-support and social connection platform intended to help adults connect with other adults who may have similar experiences, interests, life challenges or circumstances. WeHere is not a hospital, clinic, psychiatric service, medical service or emergency response service.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-wehere-dark mb-3">2. Eligibility</h2>
          <p className="font-semibold text-wehere-dark">WeHere is intended strictly for individuals who are 18 years of age or older.</p>
          <p className="mt-1">
            By creating or using an account, you represent that you are at least 18 years old. WeHere takes reasonable measures to restrict or terminate accounts where it has reason to believe that a person does not satisfy the minimum-age requirement.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-wehere-dark mb-3">3. Information We Collect</h2>
          <div className="space-y-3">
            <div>
              <h3 className="font-bold text-wehere-dark">3.1 Registration & Profile Information</h3>
              <p>We may collect display name, email, mobile number, approximate age, selected interests, and optional biographical statements supplied during registration.</p>
            </div>
            <div>
              <h3 className="font-bold text-wehere-dark">3.2 Anonymous Profiles</h3>
              <p>WeHere allows you to create an anonymous or pseudonymous profile to interact without publicly displaying your legal identity. Technical metadata is maintained strictly for platform security, fraud prevention, and regulatory compliance.</p>
            </div>
            <div>
              <h3 className="font-bold text-wehere-dark">3.3 Approximate Location Only (Zero GPS Tracking)</h3>
              <p className="bg-amber-50 p-4 rounded-2xl border border-amber-200 text-amber-900 text-xs sm:text-sm">
                <strong>WeHere does NOT request GPS hardware permissions from your device and does NOT track or collect real-time precise geolocation coordinates.</strong> Users voluntarily select an approximate State/City from a dropdown list to assist regional peer matching.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-wehere-dark">3.4 Communications & Encryption</h3>
              <p>Peer conversations utilize encryption protocols. Metadata is processed strictly to maintain connectivity, prevent abuse, and uphold platform safety.</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-wehere-dark mb-3">4. Self-Harm & Crisis Protocol Notice</h2>
          <p>
            WeHere is an emotional peer community, not an acute emergency provider. When crisis disclosures or self-harm indicators occur, our automated protocol displays immediate, direct links to certified 24/7 national helplines including Tele-MANAS (14416 in India) and 988 (North America).
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-wehere-dark mb-3">5. Data Retention & Right to Erasure</h2>
          <p>
            In accordance with India's Digital Personal Data Protection (DPDP) Act 2023, you retain the permanent right to access, rectify, or fully erase your account and all associated data through in-app settings or by emailing our Grievance Officer at <a href="mailto:grievance@wehere.co.in" className="text-wehere-purple underline">grievance@wehere.co.in</a>.
          </p>
        </section>

        <section className="bg-zinc-50 p-6 rounded-3xl border border-black/[0.04] space-y-2 text-xs sm:text-sm">
          <p className="font-bold text-wehere-dark">WeHere Networks Private Limited</p>
          <p>CIN: U63122UP2026PTC253594 • Registered Office: B-2484 Indira Nagar, Lucknow, UP 226016, India</p>
          <p>Statutory Grievance Redressal Officer: Srishti Gautam (<a href="mailto:grievance@wehere.co.in" className="text-wehere-purple underline">grievance@wehere.co.in</a>)</p>
        </section>
      </div>
    </PolicyLayout>
  );
}
