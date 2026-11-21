import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import MobileMenu from './components/MobileMenu.jsx';
import Footer from './components/Footer.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';

import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Policies from './pages/Policies.jsx';
import PrivacyPolicy from './pages/PrivacyPolicy.jsx';
import TermsOfService from './pages/TermsOfService.jsx';
import CommunityGuidelines from './pages/CommunityGuidelines.jsx';
import CrisisResponse from './pages/CrisisResponse.jsx';
import RefundPolicy from './pages/RefundPolicy.jsx';
import GrievanceRedressal from './pages/GrievanceRedressal.jsx';

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9FB] text-wehere-dark selection:bg-wehere-purple selection:text-white">
      <ScrollToTop />
      
      <Navbar onOpenMobileMenu={() => setIsMobileMenuOpen(true)} />
      
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />

      <div className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/policies" element={<Policies />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/community-guidelines" element={<CommunityGuidelines />} />
          <Route path="/crisis-response" element={<CrisisResponse />} />
          <Route path="/refund-policy" element={<RefundPolicy />} />
          <Route path="/grievance-redressal" element={<GrievanceRedressal />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}
