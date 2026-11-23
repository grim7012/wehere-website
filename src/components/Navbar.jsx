import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'lucide-react';

export default function Navbar({ onOpenMobileMenu }) {
  return (
    <header className="sticky top-0 z-50 bg-[#FAF9FB]/90 backdrop-blur-xl border-b border-black/[0.05] transition-all duration-200">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 h-16 flex items-center justify-between">
        
        {/* Left: Mobile Toggle & Quick Navigation */}
        <div className="flex items-center gap-6">
          <button
            onClick={onOpenMobileMenu}
            type="button"
            aria-label="Open Navigation Menu"
            className="min-w-[40px] min-h-[40px] p-2 rounded-full hover:bg-black/5 text-wehere-dark btn-spring flex items-center justify-center"
          >
            <Menu className="w-5 h-5" />
          </button>
          
          <nav className="hidden md:flex items-center gap-6 text-xs font-semibold tracking-[0.16em] uppercase text-zinc-500">
            <a href="/#features" className="hover:text-wehere-dark transition-colors py-1">Features</a>
            <span className="text-zinc-300">•</span>
            <Link to="/about" className="hover:text-wehere-dark transition-colors py-1">Our Story</Link>
          </nav>
        </div>

        {/* Center: Editorial Brand Mark */}
        <Link to="/" className="flex flex-col items-center group py-1 text-center" aria-label="WeHere Home">
          <div className="flex items-center gap-2">
            <img
              src="/assets/logo/icon_logo.png"
              alt="WeHere Logo"
              className="w-6 h-6 rounded-xl object-contain shadow-sm group-hover:scale-105 transition-transform duration-300"
            />
            <span className="font-display text-lg sm:text-xl font-black tracking-[-0.03em] text-wehere-dark group-hover:text-wehere-purple transition-colors">
              WeHere
            </span>
          </div>
          <span className="text-[8px] font-bold tracking-[0.28em] uppercase text-zinc-400 group-hover:text-wehere-purple/80 transition-colors hidden sm:block">
            Quiet Sanctuary
          </span>
        </Link>

        {/* Right: Safety, Support & Download Button */}
        <div className="flex items-center gap-6">
          <nav className="hidden md:flex items-center gap-6 text-xs font-semibold tracking-[0.16em] uppercase text-zinc-500">
            <a href="/#safety" className="hover:text-wehere-dark transition-colors py-1">Safety</a>
            <span className="text-zinc-300">•</span>
            <Link to="/policies" className="hover:text-wehere-dark transition-colors py-1">Policies</Link>
          </nav>

          <a
            href="/#download"
            className="btn-spring inline-flex items-center justify-center px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider bg-wehere-dark text-white hover:bg-black border border-[#5E4BEE]/25 shadow-sm hover:shadow-[0_4px_20px_rgba(94,75,238,0.25)] transition-all"
          >
            Get the App
          </a>
        </div>

      </div>
    </header>
  );
}
