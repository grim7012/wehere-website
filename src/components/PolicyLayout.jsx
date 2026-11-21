import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Shield } from 'lucide-react';

export default function PolicyLayout({ title, badge, lastUpdated, children }) {
  return (
    <main className="py-12 sm:py-20 px-5 sm:px-8 max-w-4xl mx-auto">
      {/* Back Link */}
      <div className="mb-8">
        <Link
          to="/policies"
          className="inline-flex items-center gap-2 text-xs font-bold text-wehere-secondary hover:text-wehere-purple transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Policies Hub</span>
        </Link>
      </div>

      {/* Header */}
      <div className="mb-12 border-b border-black/[0.06] pb-8">
        {badge && (
          <span className="px-3.5 py-1 rounded-full bg-wehere-purpleBg text-wehere-purple text-xs font-bold uppercase tracking-wider inline-block mb-3 border border-wehere-purple/20">
            {badge}
          </span>
        )}
        <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-wehere-dark tracking-tight leading-tight">
          {title}
        </h1>
        {lastUpdated && (
          <p className="text-xs sm:text-sm text-wehere-tertiary mt-3">
            Last Updated & Verified: {lastUpdated} • WeHere Networks Private Limited
          </p>
        )}
      </div>

      {/* Content Article */}
      <article className="prose prose-zinc max-w-none text-wehere-secondary text-sm sm:text-base leading-relaxed space-y-6">
        {children}
      </article>
    </main>
  );
}
