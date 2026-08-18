import React, { useState, useEffect } from 'react';
import { PageId } from '../types';
import { Logo } from './Logo';
import { 
  Menu, 
  X, 
  Download, 
  ShieldCheck, 
  Sparkles, 
  PhoneCall, 
  ChevronRight 
} from 'lucide-react';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId, anchorId?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { id: PageId; label: string; badge?: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'services', label: 'Our Apps & Services' },
    { id: 'download', label: 'Download App' },
    { id: 'reviews', label: 'Reviews' },
    { id: 'faqs', label: 'FAQs' },
    { id: 'contact', label: 'Contact Us' },
  ];

  const handleNavClick = (page: PageId) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Top Banner: Positioning & Trust Line */}
      <div className="bg-[#5B16A6] text-white text-xs py-1.5 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2 font-medium">
            <span className="inline-flex items-center gap-1 bg-[#00B936] text-white px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider">
              Verified Carpool
            </span>
            <span className="hidden sm:inline text-white/90">
              Your trusted intercity carpool across 120+ Indian corridors
            </span>
            <span className="sm:hidden text-white/90">
              Smart. Social. Trusted.
            </span>
          </div>

          <div className="flex items-center gap-4 text-white/85 text-[11px]">
            <span className="hidden md:flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-[#00B936]" />
              100% Verified Drivers & Zero Middle Seats
            </span>
            <button
              onClick={() => handleNavClick('contact')}
              className="hover:text-white underline font-semibold flex items-center gap-1"
            >
              <PhoneCall className="w-3 h-3 text-[#00B936]" />
              24/7 Helpline
            </button>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-200 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-[#E7E3EB]'
            : 'bg-white border-b border-gray-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Logo
              size="md"
              showTagline={true}
              onClick={() => handleNavClick('home')}
            />

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="Main Navigation">
              {navItems.map((item) => {
                const isActive = currentPage === item.id;
                return (
                  <button
                    key={item.id}
                    id={`nav-link-${item.id}`}
                    onClick={() => handleNavClick(item.id)}
                    className={`px-3 py-2 rounded-xl text-sm font-semibold transition-all duration-150 flex items-center gap-1.5 cursor-pointer ${
                      isActive
                        ? 'bg-[#F4EDF9] text-[#5B16A6] font-bold shadow-xs'
                        : 'text-[#2A2A2A] hover:text-[#5B16A6] hover:bg-[#F4EDF9]/60'
                    }`}
                  >
                    {item.label}
                    {item.badge && (
                      <span className="bg-[#E8FBF3] text-[#00B936] text-[10px] font-bold px-1.5 py-0.2 rounded-full">
                        {item.badge}
                      </span>
                    )}
                  </button>
                );
              })}
            </nav>

            {/* Action CTAs */}
            <div className="hidden sm:flex items-center gap-3">
              <button
                id="header-download-btn"
                onClick={() => handleNavClick('download')}
                className="inline-flex items-center gap-2 bg-[#00B936] hover:bg-[#009c2e] text-white text-sm font-bold px-5 py-2.5 rounded-xl shadow-xs transition-all transform hover:-translate-y-0.5 cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>Download App</span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex lg:hidden items-center gap-2">
              <button
                id="mobile-download-icon-btn"
                onClick={() => handleNavClick('download')}
                className="sm:hidden inline-flex items-center justify-center p-2 bg-[#00B936] text-white rounded-xl"
                aria-label="Download App"
              >
                <Download className="w-4 h-4" />
              </button>

              <button
                id="mobile-hamburger-btn"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl text-gray-700 hover:text-[#5B16A6] hover:bg-[#F4EDF9] focus:outline-none"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Slide-Out Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden bg-black/40 backdrop-blur-xs flex justify-end">
          <div className="w-full max-w-sm bg-white h-full shadow-2xl flex flex-col p-6 overflow-y-auto animate-in slide-in-from-right duration-200">
            <div className="flex items-center justify-between pb-6 border-b border-gray-100">
              <Logo size="sm" showTagline={true} onClick={() => handleNavClick('home')} />
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-xl text-gray-500 hover:bg-gray-100"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="py-6 flex-1 flex flex-col gap-1">
              <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 px-3">
                Navigation
              </p>
              {navItems.map((item) => {
                const isActive = currentPage === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-left font-semibold text-base transition-colors ${
                      isActive
                        ? 'bg-[#F4EDF9] text-[#5B16A6] font-bold'
                        : 'text-gray-800 hover:bg-gray-50 hover:text-[#5B16A6]'
                    }`}
                  >
                    <span>{item.label}</span>
                    <ChevronRight className={`w-4 h-4 ${isActive ? 'text-[#5B16A6]' : 'text-gray-400'}`} />
                  </button>
                );
              })}
            </div>

            <div className="pt-4 border-t border-gray-100 space-y-3">
              <button
                onClick={() => handleNavClick('download')}
                className="w-full py-3.5 bg-[#00B936] hover:bg-[#009c2e] text-white rounded-xl font-bold flex items-center justify-center gap-2 shadow-sm"
              >
                <Download className="w-5 h-5" />
                <span>Download CarPe App</span>
              </button>

              <div className="bg-[#F8F7FA] p-3 rounded-xl text-xs text-gray-600 text-center">
                <p className="font-semibold text-[#5B16A6]">Need immediate assistance?</p>
                <p className="text-gray-500 mt-0.5">Helpline: 1800-CARPE-GO (24/7)</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
