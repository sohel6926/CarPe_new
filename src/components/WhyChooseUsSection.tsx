import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PageId } from '../types';
import { 
  BadgePercent, 
  ShieldCheck, 
  Shield, 
  LayoutGrid, 
  AlertTriangle, 
  Clock, 
  ChevronDown, 
  Sparkles,
  ArrowRight,
  ArrowLeft,
  Pause,
  Play
} from 'lucide-react';

interface WhyChooseUsSectionProps {
  onNavigate: (page: PageId, anchorId?: string) => void;
}

interface FeatureItem {
  id: string;
  title: string;
  badge: string;
  twoLineDesc: string;
  icon: React.ElementType;
  image: string;
  themeColor: string;
}

const FEATURES: FeatureItem[] = [
  {
    id: 'pricing',
    title: 'Company-Controlled Fair Pricing',
    badge: 'Zero Surge',
    twoLineDesc: 'Automated distance & fuel algorithms eliminate price negotiation. Zero hidden charges or sudden surge multiples.',
    icon: BadgePercent,
    image: '/images/fair-pricing.jpg',
    themeColor: '#5B16A6',
  },
  {
    id: 'trust-verification',
    title: 'Verified Drivers & 7-Photo Inspection',
    badge: '1-Car-1-Account',
    twoLineDesc: 'Government license, vehicle RC verification, and 7 mandatory visual photos (exterior, interior, trunk) before booking.',
    icon: ShieldCheck,
    image: '/images/verified-driver.jpg',
    themeColor: '#00B936',
  },
  {
    id: 'womens-safety',
    title: 'Intelligent Women’s Safety Seating',
    badge: 'Proactive Safety',
    twoLineDesc: 'Solo female riders are auto-seated in the front; pairs sit together in the rear. No woman next to an unrelated male.',
    icon: Shield,
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=900&auto=format&fit=crop',
    themeColor: '#5B16A6',
  },
  {
    id: 'seat-selection',
    title: 'Digital Seat & Luggage Booking',
    badge: 'No Middle Seat',
    twoLineDesc: 'Pick your seat on an interactive visual map with guaranteed zero middle seats on sedans and upfront boot reservation.',
    icon: LayoutGrid,
    image: 'https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?q=80&w=900&auto=format&fit=crop',
    themeColor: '#00B936',
  },
  {
    id: 'emergency-features',
    title: 'Emergency SOS with 3 Trusted Contacts',
    badge: 'Live GPS SOS',
    twoLineDesc: '1-tap Emergency Button broadcasts real-time GPS telemetry and tracking links to family and CarPe’s 24/7 Safety Desk.',
    icon: AlertTriangle,
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=900&auto=format&fit=crop',
    themeColor: '#5B16A6',
  },
  {
    id: 'journey-experience',
    title: 'Real-Time ETA via Google Maps',
    badge: 'Traffic-Synced',
    twoLineDesc: 'Live traffic synchronization, a transparent 40-minute pickup window, guaranteed AC, and polite ride etiquette.',
    icon: Clock,
    image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=900&auto=format&fit=crop',
    themeColor: '#00B936',
  },
];

export const WhyChooseUsSection: React.FC<WhyChooseUsSectionProps> = ({ onNavigate }) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isAutoPlay, setIsAutoPlay] = useState<boolean>(true);

  // Auto-cycle through cards
  useEffect(() => {
    if (!isAutoPlay) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % FEATURES.length);
    }, 5500);
    return () => clearInterval(timer);
  }, [isAutoPlay]);

  const handleSelectFeature = (idx: number) => {
    setActiveIndex(idx);
    setIsAutoPlay(false);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % FEATURES.length);
    setIsAutoPlay(false);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + FEATURES.length) % FEATURES.length);
    setIsAutoPlay(false);
  };

  return (
    <section className="bg-white py-14 sm:py-18 relative" id="why-carpe-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Section Header (Original Light Design) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center max-w-3xl mx-auto space-y-2.5"
        >
          <div className="inline-flex items-center gap-1.5 bg-[#E8FBF3] text-[#00B936] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Why Commuters Choose CarPe</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 font-display">
            Built to Fix Every Flaw in Informal Carpooling
          </h2>
          <p className="text-gray-600 text-sm sm:text-base">
            Informal ride groups suffer from cancellations, unfair price hikes, and safety worries. CarPe introduces structural engineering to peer-to-peer travel.
          </p>
        </motion.div>

        {/* 2-Column Layout: Accordion Stack on Left + Stacked Image Deck on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Stack with Chevrons (6 Points) */}
          <div className="lg:col-span-7 space-y-3">
            {FEATURES.map((item, idx) => {
              const Icon = item.icon;
              const isSelected = activeIndex === idx;
              const isPurple = item.themeColor === '#5B16A6';

              return (
                <div
                  key={item.id}
                  onClick={() => handleSelectFeature(idx)}
                  className={`rounded-2xl border transition-all duration-200 cursor-pointer overflow-hidden ${
                    isSelected
                      ? 'bg-[#FAF8FD] border-[#5B16A6] shadow-sm ring-1 ring-[#5B16A6]/20'
                      : 'bg-white border-gray-200 hover:border-gray-300 hover:bg-gray-50/70'
                  }`}
                >
                  {/* Title & Chevron Row */}
                  <div className="p-4 sm:p-4.5 flex items-center justify-between gap-3 select-none">
                    <div className="flex items-center gap-3.5 min-w-0">
                      {/* Icon Pill */}
                      <div
                        className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                          isSelected
                            ? isPurple
                              ? 'bg-[#5B16A6] text-white shadow-xs'
                              : 'bg-[#00B936] text-white shadow-xs'
                            : isPurple
                              ? 'bg-[#F4EDF9] text-[#5B16A6]'
                              : 'bg-[#E8FBF3] text-[#00B936]'
                        }`}
                      >
                        <Icon className="w-4.5 h-4.5" />
                      </div>

                      <div className="min-w-0">
                        <div className="flex items-center gap-2">
                          <h3 className={`text-sm sm:text-base font-bold font-display leading-tight truncate ${
                            isSelected ? 'text-gray-900' : 'text-gray-800'
                          }`}>
                            {item.title}
                          </h3>
                          <span
                            className={`hidden sm:inline-block text-[10px] font-bold px-2 py-0.5 rounded-full shrink-0 ${
                              isPurple
                                ? 'bg-[#F4EDF9] text-[#5B16A6]'
                                : 'bg-[#E8FBF3] text-[#00B936]'
                            }`}
                          >
                            {item.badge}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Animated Chevron */}
                    <div className="flex items-center gap-2 shrink-0">
                      <motion.div
                        animate={{ rotate: isSelected ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                        className={`w-7 h-7 rounded-full flex items-center justify-center transition-colors ${
                          isSelected ? 'bg-[#F4EDF9] text-[#5B16A6]' : 'text-gray-400'
                        }`}
                      >
                        <ChevronDown className="w-4 h-4" />
                      </motion.div>
                    </div>
                  </div>

                  {/* Clean 2-Line Description (Expanded on click) */}
                  <AnimatePresence>
                    {isSelected && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.28, ease: [0.25, 0.1, 0.25, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="px-4 sm:px-4.5 pb-4 pt-1 border-t border-gray-100/80">
                          <p className="text-xs sm:text-sm text-gray-600 leading-relaxed sm:pl-12">
                            {item.twoLineDesc}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* Right Column: Stacked Images with Slide-to-Back Animation (Reference Style) */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center space-y-3">
            
            {/* Card Stack Arena */}
            <div className="relative w-full max-w-[340px] sm:max-w-[370px] aspect-[3/3.8] flex items-center justify-center select-none py-4">
              
              {/* Stacked Images */}
              {FEATURES.map((item, idx) => {
                const diff = (idx - activeIndex + FEATURES.length) % FEATURES.length;
                
                // Show 3 stacked cards
                if (diff > 2) return null;

                const isTop = diff === 0;
                const isSecond = diff === 1;
                const isThird = diff === 2;

                const scale = isTop ? 1 : isSecond ? 0.94 : 0.88;
                const translateY = isTop ? 0 : isSecond ? -14 : -28;
                const rotate = isTop ? 0 : isSecond ? 3 : -3;
                const opacity = isTop ? 1 : isSecond ? 0.75 : 0.45;
                const zIndex = isTop ? 30 : isSecond ? 20 : 10;

                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ scale: 0.85, opacity: 0, y: 20 }}
                    animate={{
                      scale,
                      y: translateY,
                      rotate,
                      opacity,
                      zIndex,
                    }}
                    exit={{
                      x: 280,
                      y: 20,
                      rotate: 15,
                      opacity: 0,
                      scale: 0.9,
                      transition: { duration: 0.4, ease: 'easeInOut' }
                    }}
                    transition={{
                      type: 'spring',
                      stiffness: 240,
                      damping: 22,
                    }}
                    onClick={() => {
                      if (!isTop) handleSelectFeature(idx);
                    }}
                    className={`absolute inset-0 rounded-[32px] overflow-hidden shadow-2xl transition-shadow ${
                      isTop
                        ? 'shadow-purple-950/20 ring-1 ring-black/5 cursor-default'
                        : 'shadow-lg shadow-black/10 ring-1 ring-white/60 cursor-pointer'
                    }`}
                  >
                    {/* Background Image */}
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />

                    {/* Gradient Overlay for Crisp Text Readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/20" />

                    {/* Top Glassmorphic Icon Badge */}
                    <div className="absolute top-5 left-5">
                      <div className="w-11 h-11 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white shadow-md">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>

                    {/* Top Right Status Badge */}
                    <div className="absolute top-5 right-5">
                      <span className="text-[11px] font-bold text-white bg-black/40 backdrop-blur-md border border-white/25 px-3 py-1 rounded-full">
                        {item.badge}
                      </span>
                    </div>

                    {/* Bottom Content (Title + 2 Line Subtext + Indicator Dots) */}
                    <div className="absolute inset-x-0 bottom-0 p-6 space-y-3 text-white">
                      <div className="space-y-1.5">
                        <h4 className="text-xl sm:text-2xl font-black font-display tracking-tight leading-snug drop-shadow-sm">
                          {item.title}
                        </h4>
                        <p className="text-xs sm:text-sm text-white/90 leading-relaxed line-clamp-2 drop-shadow-xs">
                          {item.twoLineDesc}
                        </p>
                      </div>

                      {/* Slider Indicator Dots at the bottom of the card (like reference image) */}
                      <div className="flex items-center gap-1.5 pt-1">
                        {FEATURES.map((_, i) => (
                          <span
                            key={i}
                            className={`h-1.5 rounded-full transition-all duration-300 ${
                              activeIndex === i
                                ? 'w-6 bg-white shadow-xs'
                                : 'w-1.5 bg-white/40'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </motion.div>
                );
              })}

            </div>

            {/* Slider Controls (Prev / Next & Pause) */}
            <div className="flex items-center gap-3 text-xs text-gray-500 pt-1">
              <button
                onClick={handlePrev}
                className="w-8 h-8 rounded-full bg-gray-100 hover:bg-[#F4EDF9] hover:text-[#5B16A6] text-gray-700 flex items-center justify-center transition-colors cursor-pointer"
                title="Previous image"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>

              <button
                onClick={() => setIsAutoPlay(!isAutoPlay)}
                className="px-3 py-1 rounded-full bg-gray-100 hover:bg-[#F4EDF9] text-gray-700 hover:text-[#5B16A6] flex items-center gap-1 text-[11px] font-bold transition-colors cursor-pointer"
              >
                {isAutoPlay ? <Pause className="w-3 h-3 text-[#00B936]" /> : <Play className="w-3 h-3 text-[#5B16A6]" />}
                <span>{isAutoPlay ? 'Auto Sliding' : 'Paused'}</span>
              </button>

              <button
                onClick={handleNext}
                className="w-8 h-8 rounded-full bg-gray-100 hover:bg-[#F4EDF9] hover:text-[#5B16A6] text-gray-700 flex items-center justify-center transition-colors cursor-pointer"
                title="Next image"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

        {/* Global CTA button below */}
        <div className="text-center pt-2">
          <button
            id="view-all-core-rules-btn"
            onClick={() => onNavigate('services')}
            className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 bg-[#5B16A6] hover:bg-[#4A1089] text-white rounded-2xl font-bold text-sm sm:text-base shadow-md shadow-purple-950/10 hover:shadow-lg hover:shadow-purple-950/20 transition-all duration-200 cursor-pointer group"
          >
            <span>View Complete 10 Core Rules & Policies</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

      </div>
    </section>
  );
};
