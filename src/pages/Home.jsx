import React from 'react';
import HeroSection from '../components/HeroSection.jsx';
import FeaturesSection from '../components/FeaturesSection.jsx';
import InteractiveMatcher from '../components/InteractiveMatcher.jsx';
import OurStorySection from '../components/OurStorySection.jsx';
import SafetySection from '../components/SafetySection.jsx';
import MissionSection from '../components/MissionSection.jsx';
import FAQSection from '../components/FAQSection.jsx';
import CTASection from '../components/CTASection.jsx';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <FeaturesSection />
      <InteractiveMatcher />
      <SafetySection />
      <MissionSection />
      <FAQSection />
    </main>
  );
}
