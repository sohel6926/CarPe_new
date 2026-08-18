import React from 'react';
import { PageId } from '../types';
import { Logo } from './Logo';
import { 
  ShieldCheck, 
  MapPin, 
  Phone, 
  Mail, 
  Sparkles, 
  AlertCircle, 
  Heart, 
  ExternalLink,
  ChevronRight
} from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageId, anchorId?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleNav = (page: PageId, anchorId?: string) => {
    onNavigate(page, anchorId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#181124] text-white/80 pt-16 pb-12 border-t border-purple-950/40 relative overflow-hidden" id="site-footer">
      {/* Subtle background route glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#5B16A6]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-[#00B936]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          
          {/* Col 1: Brand & Identity */}
          <div className="lg:col-span-2 space-y-4">
            <Logo size="md" showTagline={true} onClick={() => handleNav('home')} className="brightness-125" />
            <p className="text-white/70 text-sm leading-relaxed max-w-sm">
              <strong className="text-white font-semibold">Your trusted intercity carpool.</strong> CarPe connects verified everyday commuters across India with company-controlled algorithmic pricing, women's safety seating, digital luggage allocation, and guaranteed comfort with zero middle seats.
            </p>

            <div className="pt-2 flex flex-col gap-2 text-xs text-white/70">
              <div className="flex items-center gap-2 text-white/90">
                <span className="w-2 h-2 rounded-full bg-[#00B936] animate-pulse" />
                <span>Operating live across 120+ arterial highway corridors</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#00B936]" />
                <span>100% Government ID & 7-Photo Vehicle Inspected</span>
              </div>
            </div>

            {/* Quick App Download Badges */}
            <div className="pt-3 flex flex-wrap items-center gap-3">
              <button
                onClick={() => handleNav('download')}
                className="bg-white/10 hover:bg-white/15 border border-white/20 px-3.5 py-2 rounded-xl text-xs font-semibold text-white flex items-center gap-2 transition-all cursor-pointer"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.62-.75 1.04-1.8 1.01-2.87-1 .04-2.14.67-2.77 1.42-.56.65-1.05 1.73-.92 2.76 1.11.09 2.06-.56 2.68-1.31z" />
                </svg>
                <span>App Store</span>
              </button>

              <button
                onClick={() => handleNav('download')}
                className="bg-white/10 hover:bg-white/15 border border-white/20 px-3.5 py-2 rounded-xl text-xs font-semibold text-white flex items-center gap-2 transition-all cursor-pointer"
              >
                <svg className="w-4 h-4 fill-current text-[#00B936]" viewBox="0 0 24 24">
                  <path d="M3.609 1.814L13.792 12 3.61 22.186c-.194-.216-.31-.504-.31-.82V2.634c0-.316.116-.604.31-.82zm11.233 11.236l2.378 2.378-12.012 6.864 9.634-9.242zm2.378-2.05l-2.378 2.378L5.208 4.136l12.012 6.864zm1.19 1.19c.475.27.79.77.79 1.34 0 .57-.315 1.07-.79 1.34l-1.44.82-2.19-2.16 2.19-2.16 1.44.82z" />
                </svg>
                <span>Google Play</span>
              </button>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <p className="text-white font-bold text-sm uppercase tracking-wider mb-4 font-display">
              Company
            </p>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button onClick={() => handleNav('home')} className="hover:text-[#00B936] transition-colors flex items-center gap-1.5 cursor-pointer">
                  <ChevronRight className="w-3.5 h-3.5 text-[#5B16A6]" /> Home
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('about')} className="hover:text-[#00B936] transition-colors flex items-center gap-1.5 cursor-pointer">
                  <ChevronRight className="w-3.5 h-3.5 text-[#5B16A6]" /> About Us & Story
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('services')} className="hover:text-[#00B936] transition-colors flex items-center gap-1.5 cursor-pointer">
                  <ChevronRight className="w-3.5 h-3.5 text-[#5B16A6]" /> 10 Platform Rules
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('download')} className="hover:text-[#00B936] transition-colors flex items-center gap-1.5 cursor-pointer">
                  <ChevronRight className="w-3.5 h-3.5 text-[#00B936]" /> Download App
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('reviews')} className="hover:text-[#00B936] transition-colors flex items-center gap-1.5 cursor-pointer">
                  <ChevronRight className="w-3.5 h-3.5 text-[#5B16A6]" /> Rider Reviews
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('faqs')} className="hover:text-[#00B936] transition-colors flex items-center gap-1.5 cursor-pointer">
                  <ChevronRight className="w-3.5 h-3.5 text-[#5B16A6]" /> Help & FAQs
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('contact')} className="hover:text-[#00B936] transition-colors flex items-center gap-1.5 cursor-pointer">
                  <ChevronRight className="w-3.5 h-3.5 text-[#5B16A6]" /> Contact Support
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Core Features */}
          <div>
            <p className="text-white font-bold text-sm uppercase tracking-wider mb-4 font-display">
              Key Features
            </p>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button onClick={() => handleNav('services', 'pricing')} className="hover:text-[#00B936] text-left transition-colors cursor-pointer">
                  Algorithmic Pricing
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('services', 'womens-safety')} className="hover:text-[#00B936] text-left transition-colors cursor-pointer flex items-center gap-1">
                  Women's Safety Seating
                  <span className="bg-[#00B936]/20 text-[#00B936] text-[10px] font-bold px-1.5 py-0.5 rounded">Core</span>
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('services', 'seat-selection')} className="hover:text-[#00B936] text-left transition-colors cursor-pointer">
                  Digital Seat Selection
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('services', 'boot-space')} className="hover:text-[#00B936] text-left transition-colors cursor-pointer">
                  Digital Boot Reservation
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('services', 'trust-verification')} className="hover:text-[#00B936] text-left transition-colors cursor-pointer">
                  7-Photo Car Verification
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('services', 'emergency-features')} className="hover:text-[#00B936] text-left transition-colors cursor-pointer">
                  Emergency SOS Broadcast
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('services', 'accountability')} className="hover:text-[#00B936] text-left transition-colors cursor-pointer">
                  ₹100 Driver Deposit System
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Top Corridors & Support */}
          <div>
            <p className="text-white font-bold text-sm uppercase tracking-wider mb-4 font-display">
              Popular Routes
            </p>
            <ul className="space-y-2 text-xs">
              <li className="text-white/90">Hyderabad ⇄ Vijayawada (NH65)</li>
              <li className="text-white/90">Bangalore ⇄ Chennai (NH48)</li>
              <li className="text-white/90">Pune ⇄ Mumbai (Expressway)</li>
              <li className="text-white/90">Delhi ⇄ Jaipur (NH48)</li>
              <li className="text-white/90">Ahmedabad ⇄ Surat (NE1)</li>
              <li className="text-white/90">Chandigarh ⇄ Delhi (NH44)</li>
              <li className="text-white/90">Hyderabad ⇄ Warangal (NH163)</li>
            </ul>

            <div className="mt-5 pt-4 border-t border-white/10">
              <p className="text-xs font-semibold text-white">Emergency In-Ride Assistance</p>
              <p className="text-xs text-[#00B936] font-mono mt-0.5">1800-CARPE-GO (Toll-Free)</p>
              <p className="text-[11px] text-white/50 mt-1">support@carpe.in</p>
            </div>
          </div>
        </div>

        {/* Safety Callout Box */}
        <div className="my-8 p-4 rounded-2xl bg-white/5 border border-white/10 flex flex-col sm:flex-row items-start sm:items-center gap-3 text-xs text-white/70">
          <AlertCircle className="w-5 h-5 text-[#00B936] shrink-0" />
          <p className="leading-relaxed">
            <strong className="text-white">Safety Notice:</strong> CarPe is a verified peer-to-peer carpooling platform designed for shared intercity fuel-cost reimbursement. For real-time in-transit emergencies, please trigger the in-app <span className="text-white font-semibold underline cursor-pointer" onClick={() => handleNav('services', 'emergency-features')}>Emergency SOS Button</span> to instantly broadcast your live GPS telemetry to your 3 trusted contacts.
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between text-xs text-white/50 gap-4">
          <p>© {new Date().getFullYear()} CarPe Mobility Technologies Pvt. Ltd. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <button onClick={() => handleNav('faqs')} className="hover:text-white transition-colors">Privacy Policy</button>
            <button onClick={() => handleNav('faqs')} className="hover:text-white transition-colors">Terms of Service</button>
            <button onClick={() => handleNav('faqs')} className="hover:text-white transition-colors">Community Guidelines</button>
            <button onClick={() => handleNav('contact')} className="hover:text-white transition-colors">Support Desk</button>
          </div>
        </div>
      </div>
    </footer>
  );
};
