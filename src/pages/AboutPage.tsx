import React from 'react';
import { motion } from 'motion/react';
import { PageId } from '../types';
import { CORE_PRINCIPLES, COMPARISON_DATA } from '../data/mockData';
import { 
  ShieldCheck, 
  Target, 
  Heart, 
  Sparkles, 
  Calculator, 
  LayoutGrid, 
  Luggage, 
  Camera, 
  FileCheck2, 
  Fingerprint, 
  Shield, 
  Coins, 
  CreditCard, 
  Users, 
  Route, 
  Clock, 
  Check, 
  X, 
  ArrowRight,
  Download,
  Building,
  Award,
  Globe,
  MapPin
} from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: PageId, anchorId?: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  const iconMap: Record<string, any> = {
    Calculator,
    LayoutGrid,
    Luggage,
    Camera,
    FileCheck2,
    Fingerprint,
    Shield,
    Coins,
    CreditCard,
    Users,
    Route,
    Clock,
    Sparkles,
    MapPin,
  };

  return (
    <div className="space-y-12 sm:space-y-16 pb-16" id="about-page-container">
      
      {/* 1. HERO & MISSION HEADER */}
      <motion.section 
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.68, ease: [0.22, 1, 0.36, 1] }}
        className="pt-6 sm:pt-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4"
      >
        <div className="inline-flex items-center gap-2 bg-[#F4EDF9] border border-[#5B16A6]/15 px-3.5 py-1.5 rounded-full text-xs font-bold text-[#5B16A6] uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5 text-[#00B936]" />
          <span>Our Vision & Principles</span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 tracking-tight font-display">
          Building India’s Most <br className="hidden sm:inline" />
          <span className="text-[#5B16A6]">Trusted Intercity</span> Travel Network.
        </h1>

        <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
          We founded CarPe to replace chaos, awkward price negotiations, and safety anxieties with transparent technology, algorithmic fairness, and community trust.
        </p>
      </motion.section>

      {/* 2. OUR STORY (ORIGIN NARRATIVE) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#F8F7FA] rounded-3xl p-8 sm:p-12 border border-gray-200 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center overflow-hidden">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 space-y-4"
          >
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#5B16A6]">
              <Target className="w-4 h-4 text-[#00B936]" />
              <span>Our Story</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 font-display">
              Why We Built CarPe
            </h2>

            <div className="space-y-3.5 text-sm sm:text-base text-gray-600 leading-relaxed">
              <p>
                Every weekend, millions of working professionals, university students, and families travel between Indian city corridors like Hyderabad–Vijayawada, Bengaluru–Chennai, and Pune–Mumbai.
              </p>
              <p>
                For years, travelers had only two extremes: expensive last-minute commercial taxis, crowded buses, or informal WhatsApp and Telegram carpool groups. But informal carpooling was riddled with severe problems: drivers arbitrarily hiking prices at pickup, unpredictable cancellations leaving passengers stranded, unverified strangers, and cramped middle seats with zero boot space.
              </p>
              <p className="font-semibold text-gray-900">
                CarPe was engineered from the ground up to solve every single one of these pain points.
              </p>
              <p>
                By introducing centralized company-controlled pricing, mandatory 7-photo vehicle inspections, digital seat and luggage booking, automated women's safety seating, and a mutual accountability deposit system, CarPe turns peer carpooling into a dignified, punctual, and safe intercity standard.
              </p>
            </div>
          </motion.div>

          {/* Right: Verified Host Image + Mission Card (Matching Reference) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.72, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 space-y-4"
          >
            {/* Top Photo Card */}
            <div className="relative rounded-3xl overflow-hidden shadow-md border border-gray-200 aspect-[16/11] bg-gray-100">
              <img 
                src="/images/aboutus.jpg" 
                alt="Verified Car Owner Host"
                className="w-full h-full object-cover"
              />
              
              {/* Top Left Badge */}
              <div className="absolute top-3.5 left-3.5">
                <span className="inline-flex items-center gap-1.5 bg-white/95 backdrop-blur-md text-[#00B936] text-[11px] font-bold px-3 py-1 rounded-full shadow-xs border border-emerald-500/20">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Verified Car Owner Host</span>
                </span>
              </div>

              {/* Bottom Info Overlay */}
              <div className="absolute inset-x-0 bottom-0 p-3.5 bg-gradient-to-t from-black/90 via-black/50 to-transparent text-white space-y-0.5">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold font-display">Suresh K.</span>
                  <span className="text-[10px] font-bold bg-[#00B936] text-white px-1.5 py-0.5 rounded-md">
                    4.95 ★
                  </span>
                </div>
                <p className="text-[10px] text-white/80">
                  Honda City • 7-Photo Inspection Verified • 120+ Highway Trips
                </p>
              </div>
            </div>

            {/* Bottom Mission Card */}
            <div className="bg-white p-5 rounded-3xl border border-gray-200 shadow-2xs space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-[#5B16A6] text-white flex items-center justify-center shadow-2xs shrink-0">
                  <Heart className="w-4 h-4 text-[#00B936]" />
                </div>
                <div>
                  <h3 className="text-xs font-bold text-gray-900 font-display">
                    Our Core Mission
                  </h3>
                  <p className="text-[11px] text-gray-500 leading-tight">
                    Affordable, eco-conscious, safe peer transit.
                  </p>
                </div>
              </div>

              <div className="pt-2 border-t border-gray-100 grid grid-cols-2 gap-3 text-center">
                <div className="p-2.5 bg-[#F4EDF9] rounded-2xl">
                  <p className="text-base font-black text-[#5B16A6] font-display">12,000+ kg</p>
                  <p className="text-[10px] font-semibold text-gray-600">CO2 Emissions Saved</p>
                </div>
                <div className="p-2.5 bg-[#E8FBF3] rounded-2xl">
                  <p className="text-base font-black text-[#00B936] font-display">99.4%</p>
                  <p className="text-[10px] font-semibold text-gray-600">Fulfillment Rate</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* 3. CORE PRINCIPLES (13 DIFFERENTIATORS) - Staggered Scroll Reveal */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10" id="core-principles-section">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center max-w-3xl mx-auto space-y-3"
        >
          <div className="inline-flex items-center gap-1.5 bg-[#E8FBF3] text-[#00B936] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>The 14 Pillars of Trust</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 font-display">
            Our Core Architectural Principles
          </h2>
          <p className="text-gray-600 text-sm sm:text-base">
            Every feature on CarPe is governed by clear, non-negotiable rules designed to protect both the vehicle owner and the rider.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {CORE_PRINCIPLES.map((principle, index) => {
            const IconComponent = iconMap[principle.icon] || ShieldCheck;
            return (
              <motion.div
                key={principle.id}
                id={`principle-card-${principle.id}`}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.65, delay: (index % 4) * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
                whileHover={{ y: -4, transition: { duration: 0.25 } }}
                className="bg-white rounded-2xl p-5 sm:p-5.5 border border-[#E7E3EB] shadow-xs hover:shadow-md transition-all duration-200 hover:border-[#5B16A6] hover:ring-2 hover:ring-[#5B16A6]/20 flex flex-col justify-between space-y-3.5 group"
              >
                <div className="space-y-3">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-[#F4EDF9] text-[#5B16A6] flex items-center justify-center flex-shrink-0 group-hover:bg-[#5B16A6] group-hover:text-white transition-colors">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <h3 className="text-sm sm:text-base font-bold text-gray-900 font-display group-hover:text-[#5B16A6] transition-colors leading-snug">
                        {principle.title}
                      </h3>
                    </div>
                    <span className="text-xs font-bold text-gray-400 font-mono flex-shrink-0 pt-1">
                      #{String(index + 1).padStart(2, '0')}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {principle.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-gray-100">
                  <p className="text-[11px] font-semibold text-[#00B936] bg-[#E8FBF3] px-2.5 py-1 rounded-xl">
                    Impact: {principle.benefit}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* 4. WHY WE'RE DIFFERENT (COMPARISON MATRIX) */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" 
        id="comparison-section"
      >
        <div className="bg-[#F8F7FA] rounded-3xl p-6 sm:p-10 border border-gray-200 space-y-8">
          
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 font-display">
              CarPe vs. Alternatives
            </h2>
            <p className="text-sm text-gray-600">
              See why thousands of Indian commuters are switching from unstructured informal ride groups.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[640px]">
              <thead>
                <tr className="border-b border-gray-300 text-gray-500 font-bold uppercase tracking-wider text-[11px]">
                  <th className="py-4 px-4">Feature / Protocol</th>
                  <th className="py-4 px-4 bg-[#F4EDF9] text-[#5B16A6] rounded-t-2xl font-black">
                    CarPe Platform
                  </th>
                  <th className="py-4 px-4">Informal WhatsApp Groups</th>
                  <th className="py-4 px-4">Commercial Taxis</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {COMPARISON_DATA.map((row, idx) => (
                  <tr key={idx} className="hover:bg-white/80 transition-colors">
                    <td className="py-3.5 px-4 font-bold text-gray-900">
                      {row.feature}
                    </td>
                    <td className="py-3.5 px-4 bg-[#F4EDF9]/70 font-semibold text-[#5B16A6] flex items-center gap-1.5">
                      <Check className="w-4 h-4 text-[#00B936] shrink-0" />
                      <span>{row.carpe}</span>
                    </td>
                    <td className="py-3.5 px-4 text-gray-500">
                      {row.informalGroups}
                    </td>
                    <td className="py-3.5 px-4 text-gray-500">
                      {row.rideHailingApps}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>
      </motion.section>

      {/* 5. CTA SECTION */}
      <motion.section 
        initial={{ opacity: 0, scale: 0.97 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="bg-[#5B16A6] rounded-3xl p-8 sm:p-12 text-white text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display">
            Ready to Travel Smarter & Safer?
          </h2>
          <p className="text-white/80 max-w-xl mx-auto text-sm sm:text-base">
            Download the CarPe app today. Experience guaranteed seat comfort, upfront pricing, and verified co-commuters on your next intercity journey.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => onNavigate('download')}
              className="px-7 py-3.5 bg-[#00B936] hover:bg-[#009c2e] text-white rounded-xl font-bold text-sm shadow-md transition-all cursor-pointer flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              <span>Get the CarPe App</span>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => onNavigate('services')}
              className="px-7 py-3.5 bg-white/10 hover:bg-white/15 border border-white/20 text-white rounded-xl font-bold text-sm transition-all cursor-pointer flex items-center gap-2"
            >
              <span>Explore All 10 Service Groups</span>
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </div>
        </div>
      </motion.section>

    </div>
  );
};
