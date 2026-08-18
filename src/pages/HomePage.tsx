import React from 'react';
import { motion } from 'motion/react';
import { PageId } from '../types';
import { TRUST_STATS, REVIEWS_DATA } from '../data/mockData';
import { RouteHeroGraphic } from '../components/RouteHeroGraphic';
import { SeatMapVisualizer } from '../components/SeatMapVisualizer';
import { PhoneMockup } from '../components/PhoneMockup';
import { AnimatedStatCounter } from '../components/AnimatedStatCounter';
import { WhyChooseUsSection } from '../components/WhyChooseUsSection';
import { 
  ShieldCheck, 
  ArrowRight, 
  Download, 
  Sparkles, 
  UserCheck, 
  Star, 
  CheckCircle2, 
  MapPin, 
  Car, 
  Users, 
  Luggage,
  Award,
  ChevronRight
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: PageId, anchorId?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  // Teaser reviews from mockData
  const previewReviews = REVIEWS_DATA.slice(0, 3);

  return (
    <div className="space-y-10 sm:space-y-12 pb-14" id="home-page-container">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-6 sm:pt-10 overflow-hidden" id="hero-section">
        {/* Soft decorative background circles */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-[#F4EDF9]/80 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Copy & Actions - Slide in from Left */}
            <motion.div 
              initial={{ opacity: 0, x: -35 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-7 space-y-6 text-center lg:text-left"
            >
              {/* Trust Pill */}
              <div className="inline-flex items-center gap-2 bg-[#F4EDF9] border border-[#5B16A6]/20 px-3.5 py-1.5 rounded-full text-xs font-bold text-[#5B16A6] shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-[#00B936] animate-pulse" />
                <span>India&apos;s 1st Algorithmic Intercity Carpool Platform</span>
              </div>

              {/* Main Headline */}
              <div className="space-y-2">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 tracking-tight leading-[1.08] font-display">
                  Smart. Social. <br className="hidden sm:inline" />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5B16A6] via-[#7B2CBF] to-[#00B936]">
                    Trusted Highway Travel.
                  </span>
                </h1>
                <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed pt-1">
                  Connect verified car owners with everyday intercity commuters. Fixed algorithm pricing, guaranteed zero middle seats, upfront luggage space, and 1-tap emergency SOS.
                </p>
              </div>

              {/* Primary Dual CTAs */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => onNavigate('download')}
                  className="w-full sm:w-auto px-7 py-3.5 bg-[#5B16A6] hover:bg-[#4A1089] text-white rounded-2xl font-bold text-sm shadow-md shadow-purple-950/15 hover:shadow-lg hover:shadow-purple-950/25 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Download className="w-4 h-4" />
                  <span>Get App for Android & iOS</span>
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => onNavigate('services')}
                  className="w-full sm:w-auto px-6 py-3.5 bg-[#F8F7FA] hover:bg-[#F4EDF9] text-gray-800 hover:text-[#5B16A6] rounded-2xl font-bold text-sm border border-gray-200 hover:border-[#5B16A6]/30 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Explore 10 Platform Rules</span>
                  <ArrowRight className="w-4 h-4 text-[#00B936]" />
                </motion.button>
              </div>

              {/* Key Trust Micro-Pills */}
              <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs font-semibold text-gray-500">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#00B936]" />
                  <span>100% ID Verified</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#00B936]" />
                  <span>Women&apos;s Safe Seating</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#00B936]" />
                  <span>No Middle Seats</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#00B936]" />
                  <span>Zero Price Surges</span>
                </div>
              </div>
            </motion.div>

            {/* Right Interactive Highway Route Card - Slide in from Right */}
            <motion.div 
              initial={{ opacity: 0, x: 35 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.75, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-5"
            >
              <RouteHeroGraphic />
            </motion.div>

          </div>
        </div>
      </section>

      {/* 2. WHY CHOOSE US (INTERACTIVE ACCORDION STACK + 3D CARD DECK) */}
      <WhyChooseUsSection onNavigate={onNavigate} />

      {/* 3. HOW IT WORKS (3 SIMPLE SEQUENTIAL STEPS + INTERACTIVE PHONE) */}
      <section className="bg-[#F8F7FA] py-12 sm:py-16 border-y border-gray-200" id="how-it-works-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-center max-w-3xl mx-auto space-y-2.5 mb-10 sm:mb-12"
          >
            <div className="inline-flex items-center gap-1.5 bg-[#F4EDF9] text-[#5B16A6] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-[#00B936]" />
              <span>Simple 3-Step Process</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 font-display">
              How CarPe Works For You
            </h2>
            <p className="text-gray-600 text-sm sm:text-base">
              Whether you are offering an empty seat on your daily commute or booking a comfortable highway ride, getting started takes under 2 minutes.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: 3 Step Cards Aligned Vertically */}
            <div className="lg:col-span-7 space-y-4 sm:space-y-5">
              
              {/* Step 1 */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.05, ease: [0.25, 0.1, 0.25, 1] }}
                whileHover={{ y: -3, transition: { duration: 0.2 } }}
                className="bg-white rounded-2xl p-5 sm:p-6 border border-gray-200 shadow-xs space-y-3"
              >
                <div className="flex items-center justify-between gap-2 flex-wrap">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-[#5B16A6] text-white flex items-center justify-center text-sm font-black font-display shadow-xs flex-shrink-0">
                      1
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-gray-900 font-display leading-tight">
                      Register & Verify
                    </h3>
                  </div>
                  <span className="text-xs font-bold text-[#5B16A6] bg-[#F4EDF9] px-3 py-1 rounded-full">
                    ✓ 100% ID & Phone Authenticated
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed sm:pl-12">
                  Sign up with mobile OTP, add 3 trusted emergency contacts, and complete driver verification with license, RC, and 7 vehicle inspection photos.
                </p>
              </motion.div>

              {/* Step 2 */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
                whileHover={{ y: -3, transition: { duration: 0.2 } }}
                className="bg-white rounded-2xl p-5 sm:p-6 border-2 border-[#00B936]/35 shadow-xs space-y-3"
              >
                <div className="flex items-center justify-between gap-2 flex-wrap">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-[#00B936] text-white flex items-center justify-center text-sm font-black font-display shadow-xs flex-shrink-0">
                      2
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-gray-900 font-display leading-tight">
                      Search or Post a Ride
                    </h3>
                  </div>
                  <span className="text-xs font-bold text-[#00B936] bg-[#E8FBF3] px-3 py-1 rounded-full">
                    ✓ Digital Seat Map & No Middle Seats
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed sm:pl-12">
                  Enter your pickup and drop city. View algorithm-calculated fixed fares, choose your seat on the interactive map, and reserve boot space upfront.
                </p>
              </motion.div>

              {/* Step 3 */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
                whileHover={{ y: -3, transition: { duration: 0.2 } }}
                className="bg-white rounded-2xl p-5 sm:p-6 border border-gray-200 shadow-xs space-y-3"
              >
                <div className="flex items-center justify-between gap-2 flex-wrap">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-[#5B16A6] text-white flex items-center justify-center text-sm font-black font-display shadow-xs flex-shrink-0">
                      3
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-gray-900 font-display leading-tight">
                      Travel Safely & Rate
                    </h3>
                  </div>
                  <span className="text-xs font-bold text-[#5B16A6] bg-[#F4EDF9] px-3 py-1 rounded-full">
                    ✓ 1-Tap SOS & Trusted Live Tracking
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed sm:pl-12">
                  Verify the car plate, share the 4-digit start OTP with your driver, enjoy Google Maps live ETA tracking, and rate your trip experience upon arrival.
                </p>
              </motion.div>

              <div className="pt-2">
                <button
                  onClick={() => onNavigate('services')}
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#5B16A6] hover:text-[#00B936] bg-white px-5 py-3 rounded-xl border border-gray-200 shadow-xs hover:border-[#5B16A6] transition-all cursor-pointer"
                >
                  <span>Explore deep technical rules on Services page</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

            </div>

            {/* Right Column: Mobile Interactive App Screen Animation */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-5 flex justify-center w-full mt-6 lg:mt-0"
            >
              <PhoneMockup initialScreen="search" showControls={true} />
            </motion.div>

          </div>

        </div>
      </section>

      {/* 4. INTERACTIVE SEAT MAP & SAFETY VISUALIZER */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" 
        id="seat-map-section"
      >
        <SeatMapVisualizer />
      </motion.section>

      {/* 5. TRUST / STATS SECTION WITH ANIMATED COUNTERS */}
      <motion.section 
        initial={{ opacity: 0, scale: 0.97 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" 
        id="trust-stats-section"
      >
        <div className="bg-[#181124] text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#5B16A6]/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#00B936]/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
            {TRUST_STATS.map((stat, idx) => (
              <div key={idx} className={`text-center space-y-2 ${idx !== 0 ? 'sm:pl-6 pt-6 sm:pt-0' : ''}`}>
                <AnimatedStatCounter value={stat.value} />
                <h3 className="text-sm font-bold text-[#00B936] uppercase tracking-wider">
                  {stat.label}
                </h3>
                <p className="text-xs text-white/60 max-w-[200px] mx-auto">
                  {stat.subtext}
                </p>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* 6. TESTIMONIAL PREVIEW - Staggered Scroll-to-Reveal */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="testimonial-preview-section">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8"
        >
          <div>
            <div className="inline-flex items-center gap-1.5 bg-[#F4EDF9] text-[#5B16A6] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-2">
              <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
              <span>Real Indian Highway Experiences</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 font-display">
              What Verified Travelers Say
            </h2>
          </div>

          <button
            onClick={() => onNavigate('reviews')}
            className="text-sm font-bold text-[#5B16A6] hover:text-[#00B936] flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            <span>View all 8+ corridor reviews</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>

        <div className="flex flex-row overflow-x-auto gap-4 sm:gap-5 pb-3 sm:pb-0 snap-x snap-mandatory md:grid md:grid-cols-3 -mx-4 px-4 sm:mx-0 sm:px-0">
          {previewReviews.map((rev, idx) => (
            <motion.div
              key={rev.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.62, delay: idx * 0.12, ease: [0.25, 0.1, 0.25, 1] }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="min-w-[285px] sm:min-w-[320px] md:min-w-0 flex-1 shrink-0 md:shrink snap-start bg-white rounded-2xl p-5 sm:p-6 border border-[#E7E3EB] shadow-xs flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-xs font-bold text-[#5B16A6] bg-[#F4EDF9] px-2.5 py-0.5 rounded-full">
                    {rev.category}
                  </span>
                </div>

                <p className="text-xs font-bold text-gray-800 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#00B936]" />
                  <span>{rev.route}</span>
                </p>

                <p className="text-sm text-gray-600 italic leading-relaxed">
                  "{rev.quote}"
                </p>
              </div>

              <div className="pt-3 border-t border-gray-100 flex items-center gap-3">
                <div className={`w-9 h-9 rounded-full ${rev.avatarColor} text-white flex items-center justify-center font-bold text-xs`}>
                  {rev.avatarInitials}
                </div>
                <div>
                  <h4 className="text-xs font-bold text-gray-900">{rev.name}</h4>
                  <p className="text-[10px] text-gray-500">{rev.role} • Verified</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <p className="text-[11px] text-gray-500 sm:hidden mt-2 text-center flex items-center justify-center gap-1">
          <span>← Swipe horizontally to explore more reviews →</span>
        </p>
      </section>

      {/* 7. DOWNLOAD CTA BANNER */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" 
        id="download-cta-banner"
      >
        <div className="bg-gradient-to-r from-[#5B16A6] to-[#451080] rounded-3xl p-8 sm:p-12 text-white shadow-xl relative overflow-hidden">
          {/* Subtle decorative shapes */}
          <div className="absolute -top-12 -right-12 w-64 h-64 bg-[#00B936]/20 rounded-full blur-2xl pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8 space-y-4 text-center lg:text-left">
              <span className="bg-[#00B936] text-white text-xs font-extrabold px-3.5 py-1 rounded-full uppercase tracking-wider inline-block">
                Start Saving on Your Highway Trips
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display tracking-tight leading-tight">
                Ready to Experience Smarter Carpooling?
              </h2>
              <p className="text-white/80 text-sm sm:text-base max-w-xl mx-auto lg:mx-0">
                Join over 50,000+ verified commuters traveling between Hyderabad, Vijayawada, Bangalore, Chennai, Pune, Mumbai, and Delhi.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col items-center justify-center gap-3">
              <motion.button
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => onNavigate('download')}
                className="w-full py-4 px-6 bg-[#00B936] hover:bg-[#009c2e] text-white rounded-2xl font-extrabold text-sm shadow-lg shadow-[#00B936]/30 flex items-center justify-center gap-2.5 transition-all cursor-pointer"
              >
                <Download className="w-5 h-5" />
                <span>Get CarPe App Now</span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => onNavigate('about')}
                className="w-full py-3.5 px-6 bg-white/10 hover:bg-white/15 border border-white/20 text-white rounded-2xl font-bold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <span>Read Our Mission & Values</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </motion.button>
            </div>
          </div>
        </div>
      </motion.section>

    </div>
  );
};

