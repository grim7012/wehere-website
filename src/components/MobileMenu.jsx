import React from 'react';
import { Link } from 'react-router-dom';
import { X, ArrowUpRight, Download } from 'lucide-react';

export default function MobileMenu({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-white/98 backdrop-blur-2xl flex flex-col justify-between p-6 sm:p-8 overflow-y-auto animate-in fade-in duration-200">
      
      {/* Drawer Header */}
      <div className="flex items-center justify-between border-b border-black/[0.06] pb-5">
        <Link to="/" onClick={onClose} className="flex items-center gap-3">
          <img src="/assets/logo/icon_logo.png" alt="WeHere Logo" className="w-9 h-9 rounded-2xl object-contain shadow-sm" />
          <span className="font-display text-2xl font-extrabold tracking-tight text-wehere-dark">WeHere</span>
        </Link>
        <button
          onClick={onClose}
          type="button"
          aria-label="Close Menu"
          className="min-w-[44px] min-h-[44px] p-2.5 rounded-full bg-black/5 hover:bg-black/10 text-wehere-dark btn-spring flex items-center justify-center"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Drawer Navigation Links */}
      <nav className="flex flex-col py-8 gap-5">
        <Link
          to="/"
          onClick={onClose}
          className="font-display text-2xl sm:text-3xl font-extrabold text-wehere-dark hover:text-wehere-purple transition-colors py-1 flex items-center justify-between"
        >
          <span>Homepage</span>
          <ArrowUpRight className="w-5 h-5 text-wehere-tertiary" />
        </Link>
        <a
          href="/#features"
          onClick={onClose}
          className="font-display text-2xl sm:text-3xl font-extrabold text-wehere-dark hover:text-wehere-purple transition-colors py-1 flex items-center justify-between"
        >
          <span>Features</span>
          <ArrowUpRight className="w-5 h-5 text-wehere-tertiary" />
        </a>
        <Link
          to="/about"
          onClick={onClose}
          className="font-display text-2xl sm:text-3xl font-extrabold text-wehere-dark hover:text-wehere-purple transition-colors py-1 flex items-center justify-between"
        >
          <span>Our Story</span>
          <ArrowUpRight className="w-5 h-5 text-wehere-tertiary" />
        </Link>
        <a
          href="/#safety"
          onClick={onClose}
          className="font-display text-2xl sm:text-3xl font-extrabold text-wehere-dark hover:text-wehere-purple transition-colors py-1 flex items-center justify-between"
        >
          <span>Safety</span>
          <ArrowUpRight className="w-5 h-5 text-wehere-tertiary" />
        </a>
        <Link
          to="/policies"
          onClick={onClose}
          className="font-display text-2xl sm:text-3xl font-extrabold text-wehere-dark hover:text-wehere-purple transition-colors py-1 flex items-center justify-between"
        >
          <span>Policies</span>
          <ArrowUpRight className="w-5 h-5 text-wehere-tertiary" />
        </Link>
      </nav>

      {/* Drawer Footer Actions */}
      <div className="border-t border-black/[0.06] pt-6 flex flex-col gap-4">
        <a
          href="/#download"
          onClick={onClose}
          className="btn-spring w-full py-4 rounded-full bg-wehere-dark text-white font-display font-bold text-center text-base shadow-bumble-md flex items-center justify-center gap-2"
        >
          <span>Download WeHere Free</span>
          <Download className="w-5 h-5" />
        </a>
        
        <div className="flex items-center justify-between text-xs text-wehere-tertiary pt-2">
          <span>Strictly Adults 18+</span>
          <div className="flex items-center gap-4">
            <a href="https://www.instagram.com/weherenetwork" target="_blank" rel="noopener noreferrer" className="hover:text-wehere-dark">Instagram</a>
            <a href="https://m.facebook.com/profile.php?id=61595426812276" target="_blank" rel="noopener noreferrer" className="hover:text-wehere-dark">Facebook</a>
            <a href="https://youtube.com/@wehereapp" target="_blank" rel="noopener noreferrer" className="hover:text-wehere-dark">YouTube</a>
          </div>
        </div>
      </div>

    </div>
  );
}
