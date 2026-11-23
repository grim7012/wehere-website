import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="relative bg-[#0B0B0E] text-zinc-400 border-t border-zinc-800/80 pt-16 sm:pt-20 pb-12 px-5 sm:px-8 lg:px-14 select-none overflow-hidden">
      
      {/* Background Watermark Typography */}
      <div className="absolute inset-x-0 bottom-10 flex justify-between pointer-events-none select-none z-0 px-4 opacity-[0.02]">
        <span className="font-display font-black text-[22vw] leading-none uppercase tracking-tighter text-white">
          WE
        </span>
        <span className="font-display font-black text-[22vw] leading-none uppercase tracking-tighter text-white">
          HERE
        </span>
      </div>

      <div className="relative max-w-[1560px] mx-auto z-10 space-y-12 sm:space-y-16">
        
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-8 xl:gap-12">
          
          {/* Column 1: Brand & Entity (Cols 1-4) */}
          <div className="md:col-span-4 flex flex-col items-start gap-4">
            <Link to="/" className="flex items-center gap-3">
              <img
                src="/assets/logo/icon_logo.png"
                className="w-8 h-8 rounded-xl object-contain shadow-sm border border-white/10"
                alt="WeHere Logo"
              />
              <span className="font-display font-extrabold text-xl text-white tracking-tight">
                WeHere
              </span>
            </Link>

            <div className="space-y-1">
              <div className="text-xs font-semibold text-zinc-200">
                WeHere Networks Private Limited
              </div>
              <div className="text-xs text-[#7F77DD] font-medium">
                Connecting Minds, Healing Together.
              </div>
              <div className="text-xs text-zinc-500">
                Because No One Should Struggle Alone.
              </div>
            </div>

            <p className="leading-relaxed max-w-sm text-xs sm:text-sm text-zinc-400 font-normal">
              A supportive digital community where individuals connect through shared life challenges and honest conversations, without fear of judgment.
            </p>

            <div className="flex items-center gap-4 text-xs font-semibold text-zinc-400 pt-2">
              <a
                href="https://www.instagram.com/weherenetwork"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                Instagram
              </a>
              <span className="text-zinc-700">•</span>
              <a
                href="https://m.facebook.com/profile.php?id=61595426812276"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                Facebook
              </a>
              <span className="text-zinc-700">•</span>
              <a
                href="https://youtube.com/@wehereapp"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                YouTube
              </a>
            </div>
          </div>

          {/* Column 2: Platform Navigation (Cols 5-6) */}
          <div className="md:col-span-2 space-y-3">
            <div className="font-mono text-xs uppercase tracking-wider text-white font-bold">
              Navigation
            </div>
            <ul className="space-y-2.5 text-xs sm:text-sm text-zinc-400">
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  Our Story
                </Link>
              </li>
              <li>
                <a href="/#features" className="hover:text-white transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="/#safety" className="hover:text-white transition-colors">
                  Safety Commitments
                </a>
              </li>
              <li>
                <a href="/#support" className="hover:text-white transition-colors">
                  FAQ &amp; Support
                </a>
              </li>
              <li>
                <a href="/#download" className="hover:text-white transition-colors">
                  Get the App
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Legal & Compliance (Cols 7-9) */}
          <div className="md:col-span-3 space-y-3">
            <div className="font-mono text-xs uppercase tracking-wider text-white font-bold">
              Legal &amp; Policies
            </div>
            <ul className="space-y-2.5 text-xs sm:text-sm text-zinc-400">
              <li>
                <Link to="/policies" className="hover:text-[#7F77DD] transition-colors">
                  Policies Overview
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="hover:text-[#7F77DD] transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-of-service" className="hover:text-[#7F77DD] transition-colors">
                  Terms &amp; Conditions
                </Link>
              </li>
              <li>
                <Link to="/community-guidelines" className="hover:text-[#7F77DD] transition-colors">
                  Community Guidelines
                </Link>
              </li>
              <li>
                <Link to="/crisis-response" className="hover:text-[#7F77DD] transition-colors">
                  Safety &amp; Crisis Response Policy
                </Link>
              </li>
              <li>
                <Link to="/refund-policy" className="hover:text-[#7F77DD] transition-colors">
                  Subscription &amp; Refund Policy
                </Link>
              </li>
              <li>
                <Link to="/grievance-redressal" className="hover:text-[#7F77DD] transition-colors">
                  Grievance Redressal Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Crisis Support (Cols 10-12) */}
          <div className="md:col-span-3 space-y-3">
            <div className="font-mono text-xs uppercase tracking-wider text-white font-bold flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#5E4BEE]" />
              <span>Let Us Connect</span>
            </div>

            <div className="bg-zinc-900/80 rounded-2xl p-4 border border-zinc-800 text-xs space-y-2.5 text-zinc-400">
              <div className="space-y-1">
                <div className="text-zinc-300 font-semibold">General &amp; Support Inquiries:</div>
                <div className="text-zinc-400 font-mono text-[11px]">support@wehere.org</div>
              </div>

              <div className="space-y-1 border-t border-zinc-800 pt-2">
                <div className="text-zinc-300 font-semibold">Grievance Officer:</div>
                <div className="text-zinc-400 font-mono text-[11px]">grievance@wehere.org</div>
              </div>

              <div className="border-t border-zinc-800 pt-2 space-y-1 font-mono text-[11px]">
                <div className="text-zinc-400 font-sans text-[10px] uppercase font-bold tracking-wider">
                  Emergency Helplines (24/7)
                </div>
                <div className="text-zinc-200">India: Tele-MANAS (14416 / 112)</div>
                <div className="text-zinc-200">US &amp; Canada: 988 Lifeline</div>
                <div className="text-[#7F77DD]">Global: findahelpline.com</div>
              </div>
            </div>
          </div>

        </div>

        {/* Statutory Platform Disclaimer & Copyright */}
        <div className="border-t border-zinc-800/80 pt-8 space-y-4">
          <p className="text-[11px] leading-relaxed text-zinc-500 font-normal">
            <strong className="text-zinc-400">Statutory Notice:</strong> WeHere is a peer-to-peer support and social connection platform. It is not a substitute for professional mental health care, medical advice, diagnosis, or emergency services. If you or someone you know is experiencing a mental health crisis, please seek immediate assistance from a qualified professional or appropriate emergency service. Strictly for adults 18 years of age or older.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-zinc-500 text-[11px] font-mono pt-2 border-t border-zinc-900">
            <span>© 2026 WeHere Networks Private Limited. All rights reserved.</span>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              <span>Together, let us create a more understanding and connected world.</span>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
