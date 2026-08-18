import React, { useState } from 'react';
import { motion } from 'motion/react';
import { PageId } from '../types';
import { PhoneMockup } from '../components/PhoneMockup';
import { 
  Download, 
  QrCode, 
  Smartphone, 
  ShieldCheck, 
  Star, 
  CheckCircle2, 
  ArrowRight, 
  Send, 
  Check, 
  Sparkles,
  Search,
  Users,
  Navigation,
  AlertTriangle
} from 'lucide-react';

interface DownloadPageProps {
  onNavigate: (page: PageId, anchorId?: string) => void;
}

export const DownloadPage: React.FC<DownloadPageProps> = ({ onNavigate }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [smsSent, setSmsSent] = useState(false);

  const handleSendLink = (e: React.FormEvent) => {
    e.preventDefault();
    if (phoneNumber.trim().length >= 10) {
      setSmsSent(true);
      setTimeout(() => setSmsSent(false), 5000);
    }
  };

  const appCapabilities = [
    {
      title: 'Search & Discover Verified Rides',
      desc: 'Browse hundreds of daily intercity trips with transparent fixed fares and driver safety scores.',
      icon: Search,
    },
    {
      title: 'Digital Seat Selection & Luggage',
      desc: 'Choose your preferred window or front seat on our visual map with zero middle seat crowding.',
      icon: Users,
    },
    {
      title: 'Live Google Maps ETA & Route Tracking',
      desc: 'Follow your car’s exact highway trajectory with live speedometer and drop estimates.',
      icon: Navigation,
    },
    {
      title: 'One-Tap Emergency SOS Broadcast',
      desc: 'Keep your loved ones reassured with automated GPS alerts to your 3 trusted contacts.',
      icon: AlertTriangle,
    },
    {
      title: 'Post a Ride in Under 60 Seconds',
      desc: 'Car owners can offset highway fuel and toll expenses with verified fellow commuters.',
      icon: ShieldCheck,
    },
    {
      title: 'Seamless Dual Rider/Driver Switch',
      desc: 'Use one single profile to either book rides or host trips with instant UPI earnings.',
      icon: Sparkles,
    },
  ];

  return (
    <div className="space-y-12 sm:space-y-16 pb-16" id="download-page-container">
      
      {/* 1. HERO DOWNLOAD SECTION */}
      <section className="pt-6 sm:pt-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Copy, Badges & QR Code - Slide in from Left */}
          <motion.div 
            initial={{ opacity: 0, x: -35 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 space-y-6 text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 bg-[#F4EDF9] border border-[#5B16A6]/15 px-3.5 py-1.5 rounded-full text-xs font-bold text-[#5B16A6] uppercase tracking-wider">
              <Smartphone className="w-3.5 h-3.5 text-[#00B936]" />
              <span>Available for iOS & Android</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 tracking-tight font-display">
              Get the <span className="text-[#5B16A6]">CarPe App</span>
            </h1>

            <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Download the official CarPe mobile application. Book verified seats, track your journey in real-time, or share empty seats in your car on India’s most trusted intercity corridors.
            </p>

            {/* Store Download Badges */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              
              {/* Apple App Store Badge */}
              <motion.a
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                href="#download-ios"
                onClick={(e) => { e.preventDefault(); alert("CarPe iOS App ready for App Store download!"); }}
                className="w-full sm:w-auto bg-[#181124] hover:bg-black text-white px-5 py-3.5 rounded-2xl flex items-center gap-3.5 border border-gray-800 shadow-md transition-transform cursor-pointer"
              >
                <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.62-.75 1.04-1.8 1.01-2.87-1 .04-2.14.67-2.77 1.42-.56.65-1.05 1.73-.92 2.76 1.11.09 2.06-.56 2.68-1.31z" />
                </svg>
                <div className="text-left">
                  <p className="text-[10px] text-gray-400 uppercase font-semibold leading-none">Download on the</p>
                  <p className="text-base font-bold text-white leading-tight font-display">App Store</p>
                </div>
              </motion.a>

              {/* Google Play Store Badge */}
              <motion.a
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                href="#download-android"
                onClick={(e) => { e.preventDefault(); alert("CarPe Android App ready on Google Play Store!"); }}
                className="w-full sm:w-auto bg-[#181124] hover:bg-black text-white px-5 py-3.5 rounded-2xl flex items-center gap-3.5 border border-gray-800 shadow-md transition-transform cursor-pointer"
              >
                <svg className="w-7 h-7 fill-current text-[#00B936]" viewBox="0 0 24 24">
                  <path d="M3.609 1.814L13.792 12 3.61 22.186c-.194-.216-.31-.504-.31-.82V2.634c0-.316.116-.604.31-.82zm11.233 11.236l2.378 2.378-12.012 6.864 9.634-9.242zm2.378-2.05l-2.378 2.378L5.208 4.136l12.012 6.864zm1.19 1.19c.475.27.79.77.79 1.34 0 .57-.315 1.07-.79 1.34l-1.44.82-2.19-2.16 2.19-2.16 1.44.82z" />
                </svg>
                <div className="text-left">
                  <p className="text-[10px] text-gray-400 uppercase font-semibold leading-none">GET IT ON</p>
                  <p className="text-base font-bold text-white leading-tight font-display">Google Play</p>
                </div>
              </motion.a>
            </div>

            {/* QR Code Card */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.62, delay: 0.28 }}
              className="pt-4 p-5 bg-[#F8F7FA] rounded-3xl border border-gray-200 inline-flex flex-col sm:flex-row items-center gap-4 max-w-md mx-auto lg:mx-0"
            >
              {/* QR Code graphic SVG */}
              <div className="w-24 h-24 bg-white p-2 rounded-2xl border border-gray-300 shadow-xs flex items-center justify-center shrink-0">
                <svg className="w-full h-full text-[#5B16A6]" viewBox="0 0 100 100" fill="currentColor">
                  <rect x="5" y="5" width="28" height="28" rx="4" fill="#5B16A6" />
                  <rect x="11" y="11" width="16" height="16" fill="#FFFFFF" />
                  <rect x="15" y="15" width="8" height="8" fill="#00B936" />

                  <rect x="67" y="5" width="28" height="28" rx="4" fill="#5B16A6" />
                  <rect x="73" y="11" width="16" height="16" fill="#FFFFFF" />
                  <rect x="77" y="15" width="8" height="8" fill="#00B936" />

                  <rect x="5" y="67" width="28" height="28" rx="4" fill="#5B16A6" />
                  <rect x="11" y="73" width="16" height="16" fill="#FFFFFF" />
                  <rect x="15" y="77" width="8" height="8" fill="#00B936" />

                  <rect x="40" y="8" width="6" height="6" fill="#5B16A6" />
                  <rect x="50" y="8" width="6" height="6" fill="#00B936" />
                  <rect x="40" y="20" width="6" height="6" fill="#5B16A6" />
                  <rect x="52" y="24" width="6" height="6" fill="#5B16A6" />
                  <rect x="10" y="44" width="6" height="6" fill="#00B936" />
                  <rect x="22" y="48" width="6" height="6" fill="#5B16A6" />
                  <rect x="36" y="40" width="8" height="8" rx="2" fill="#5B16A6" />
                  <rect x="48" y="48" width="6" height="6" fill="#00B936" />
                  <rect x="60" y="40" width="6" height="6" fill="#5B16A6" />
                  <rect x="74" y="46" width="8" height="8" fill="#5B16A6" />
                  <rect x="88" y="42" width="6" height="6" fill="#00B936" />
                  <rect x="40" y="68" width="6" height="6" fill="#5B16A6" />
                  <rect x="52" y="74" width="6" height="6" fill="#00B936" />
                  <rect x="68" y="70" width="8" height="8" fill="#5B16A6" />
                  <rect x="82" y="78" width="6" height="6" fill="#5B16A6" />
                </svg>
              </div>

              <div className="text-center sm:text-left space-y-1">
                <p className="text-xs font-bold text-gray-900">Scan to Download Instant App</p>
                <p className="text-[11px] text-gray-500">
                  Point your phone's camera at this QR code to download directly on iOS or Android.
                </p>
                <p className="text-[10px] font-semibold text-[#00B936]">Version 2.4.0 • 28 MB</p>
              </div>
            </motion.div>

            {/* SMS Link Sender Simulation */}
            <div className="pt-2">
              <form onSubmit={handleSendLink} className="flex items-center max-w-md mx-auto lg:mx-0">
                <input
                  type="tel"
                  placeholder="Enter your 10-digit mobile number"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="flex-1 px-4 py-3 bg-white border border-gray-300 rounded-l-2xl text-xs focus:outline-none focus:ring-2 focus:ring-[#5B16A6] text-gray-900"
                />
                <button
                  type="submit"
                  className="px-5 py-3 bg-[#5B16A6] hover:bg-[#481185] text-white font-bold text-xs rounded-r-2xl flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Link</span>
                </button>
              </form>
              {smsSent && (
                <p className="text-xs font-bold text-[#00B936] mt-2 flex items-center gap-1">
                  <Check className="w-3.5 h-3.5" />
                  Download link dispatched via SMS to {phoneNumber}!
                </p>
              )}
            </div>

          </motion.div>

          {/* Right: Phone Frame Mockups - Slide in from Right */}
          <motion.div 
            initial={{ opacity: 0, x: 35 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5"
          >
            <PhoneMockup initialScreen="search" showControls={true} />
          </motion.div>

        </div>
      </section>

      {/* 2. WHAT YOU CAN DO IN THE APP (FEATURE HIGHLIGHTS) - Staggered Scroll-to-Reveal */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center max-w-3xl mx-auto space-y-3 mb-12"
        >
          <div className="inline-flex items-center gap-1.5 bg-[#E8FBF3] text-[#00B936] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>App Features</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 font-display">
            What You Can Do Inside the CarPe App
          </h2>
          <p className="text-gray-600 text-sm sm:text-base">
            Everything you need for effortless, safe, and transparent intercity mobility in a single pocket companion.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {appCapabilities.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.65, delay: (idx % 6) * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
                whileHover={{ y: -4, transition: { duration: 0.25 } }}
                className="relative bg-white rounded-3xl p-6 border border-[#E7E3EB] shadow-xs hover:border-[#5B16A6]/40 hover:shadow-lg hover:shadow-[#5B16A6]/5 transition-all duration-300 space-y-3 group overflow-hidden cursor-pointer"
              >
                {/* Subtle Refined Top Light Edge */}
                <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#5B16A6]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                <div className="relative z-10 w-12 h-12 rounded-2xl bg-[#F4EDF9] text-[#5B16A6] group-hover:bg-[#5B16A6] group-hover:text-white transition-all duration-300 flex items-center justify-center">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="relative z-10 text-base font-bold text-gray-900 font-display group-hover:text-[#5B16A6] transition-colors duration-200">
                  {item.title}
                </h3>
                <p className="relative z-10 text-xs sm:text-sm text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* 3. SAFETY SHOWCASE SECTION (Matching Reference) */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="bg-[#F8F7FA] rounded-3xl p-6 sm:p-10 border border-gray-200 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center overflow-hidden">
          
          {/* Left: Passenger Security Image Card */}
          <div className="lg:col-span-6 relative rounded-3xl overflow-hidden shadow-md border border-gray-200 aspect-[16/11] bg-gray-100">
            <img 
              src="/images/download-page.jpg" 
              alt="Passenger enjoying highway journey with live safety app"
              className="w-full h-full object-cover"
            />

            {/* Top Left Live Badge */}
            <div className="absolute top-4 left-4">
              <span className="inline-flex items-center gap-1.5 bg-[#00B936] text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-xs">
                <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                <span>Live GPS SOS Active</span>
              </span>
            </div>

            {/* Bottom Quote Overlay */}
            <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/90 via-black/50 to-transparent text-white space-y-0.5">
              <p className="text-xs font-bold leading-tight">
                &ldquo;Instant peace of mind for my family while I&apos;m on the highway.&rdquo;
              </p>
              <p className="text-[10px] text-white/70">
                Automated live route telemetry shared with your 3 trusted contacts.
              </p>
            </div>
          </div>

          {/* Right: Confidence & Security Content */}
          <div className="lg:col-span-6 space-y-4">
            <div className="inline-flex items-center gap-1.5 bg-[#E8FBF3] text-[#00B936] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Smart Travel Companion</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 font-display tracking-tight leading-tight">
              Confidence & Security on Every Expressway Mile
            </h2>

            <p className="text-sm text-gray-600 leading-relaxed">
              CarPe is not just a booking app; it&apos;s an intelligent safety guardian. From mandatory start-trip 4-digit OTPs that verify your driver before you sit, to real-time trajectory tracking and proactive front-seat seating algorithms for women, your highway journey is protected from pickup to arrival.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-2.5">
              <span className="inline-flex items-center gap-1.5 bg-[#F4EDF9] text-[#5B16A6] text-xs font-bold px-3 py-1.5 rounded-full border border-purple-500/20">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#00B936]" />
                <span>4-Digit Secure OTP</span>
              </span>
              <span className="inline-flex items-center gap-1.5 bg-[#F4EDF9] text-[#5B16A6] text-xs font-bold px-3 py-1.5 rounded-full border border-purple-500/20">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#00B936]" />
                <span>24/7 Safety Desk</span>
              </span>
              <span className="inline-flex items-center gap-1.5 bg-[#F4EDF9] text-[#5B16A6] text-xs font-bold px-3 py-1.5 rounded-full border border-purple-500/20">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#00B936]" />
                <span>3 Emergency Contacts</span>
              </span>
            </div>
          </div>

        </div>
      </motion.section>

    </div>
  );
};
