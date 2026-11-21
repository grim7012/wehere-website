import React from 'react';
import HeroSection from '../components/HeroSection.jsx';
import FeaturesSection from '../components/FeaturesSection.jsx';
import InteractiveMatcher from '../components/InteractiveMatcher.jsx';
import SafetySection from '../components/SafetySection.jsx';
import FAQSection from '../components/FAQSection.jsx';
import CTASection from '../components/CTASection.jsx';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <FeaturesSection />
      <InteractiveMatcher />
      <SafetySection />
      <FAQSection />
    </main>
  );
}
