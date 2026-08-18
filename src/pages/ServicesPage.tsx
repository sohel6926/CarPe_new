import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PageId } from '../types';
import { SERVICE_FEATURE_GROUPS } from '../data/mockData';
import { FareEstimator } from '../components/FareEstimator';
import { 
  Sparkles, 
  ShieldCheck, 
  ChevronDown, 
  ChevronUp, 
  CheckCircle2, 
  ArrowRight, 
  Download, 
  IdCard, 
  BadgePercent, 
  LayoutGrid, 
  Shield, 
  Luggage, 
  CheckCircle, 
  AlertTriangle, 
  Route, 
  Scale, 
  Clock,
  Car,
  Filter
} from 'lucide-react';

interface ServicesPageProps {
  onNavigate: (page: PageId, anchorId?: string) => void;
  targetAnchorId?: string;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate, targetAnchorId }) => {
  const [expandedGroupId, setExpandedGroupId] = useState<string | null>(targetAnchorId || 'registration');
  const [filterTag, setFilterTag] = useState<'all' | 'safety' | 'pricing' | 'comfort'>('all');

  const iconMap: Record<string, any> = {
    IdCard,
    BadgePercent,
    LayoutGrid,
    Shield,
    Luggage,
    CheckCircle2,
    AlertTriangle,
    Route,
    Scale,
    Sparkles,
  };

  const filteredGroups = SERVICE_FEATURE_GROUPS.filter((group) => {
    if (filterTag === 'safety') {
      return ['registration', 'womens-safety', 'trust-verification', 'emergency-features'].includes(group.id);
    }
    if (filterTag === 'pricing') {
      return ['pricing', 'accountability', 'route-matching'].includes(group.id);
    }
    if (filterTag === 'comfort') {
      return ['seat-selection', 'boot-space', 'journey-experience'].includes(group.id);
    }
    return true;
  });

  const toggleExpand = (id: string) => {
    setExpandedGroupId(expandedGroupId === id ? null : id);
  };

  return (
    <div className="space-y-12 sm:space-y-16 pb-16" id="services-page-container">
      
      {/* 1. HERO HEADER */}
      <motion.section 
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.68, ease: [0.22, 1, 0.36, 1] }}
        className="pt-6 sm:pt-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4"
      >
        <div className="inline-flex items-center gap-2 bg-[#F4EDF9] border border-[#5B16A6]/15 px-3.5 py-1.5 rounded-full text-xs font-bold text-[#5B16A6] uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5 text-[#00B936]" />
          <span>Complete System Architecture</span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 tracking-tight font-display">
          Our Apps & <span className="text-[#5B16A6]">10 Core Services</span>
        </h1>

        <p className="text-sm sm:text-base text-gray-600 leading-relaxed max-w-2xl mx-auto">
          Explore the transparent rules, algorithmic seating models, and safety features that govern every shared highway journey on CarPe.
        </p>

        {/* Filter Pills */}
        <div className="pt-2 flex flex-wrap items-center justify-center gap-2">
          {[
            { id: 'all', label: 'All 10 Feature Groups' },
            { id: 'safety', label: '🛡️ Safety & Verification' },
            { id: 'pricing', label: '💰 Pricing & Deposits' },
            { id: 'comfort', label: '🚗 Seating & Journey Comfort' }
          ].map((f) => (
            <motion.button
              key={f.id}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setFilterTag(f.id as any)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                filterTag === f.id
                  ? 'bg-[#5B16A6] text-white shadow-xs'
                  : 'bg-[#F8F7FA] text-gray-700 hover:bg-[#F4EDF9]'
              }`}
            >
              {f.label}
            </motion.button>
          ))}
        </div>
      </motion.section>

      {/* 2. THE 10 GROUPED FEATURE SECTIONS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6" id="service-groups-list">
        {filteredGroups.map((group, index) => {
          const IconComponent = iconMap[group.iconName] || ShieldCheck;
          const isExpanded = expandedGroupId === group.id;
          const isPurple = group.colorTag === 'purple';

          return (
            <motion.div
              key={group.id}
              id={`service-group-${group.id}`}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: (index % 4) * 0.11, ease: [0.25, 0.1, 0.25, 1] }}
              className={`bg-white rounded-3xl border transition-all duration-200 overflow-hidden ${
                isExpanded
                  ? 'border-[#5B16A6] shadow-lg shadow-purple-950/5 ring-1 ring-[#5B16A6]'
                  : 'border-[#E7E3EB] shadow-xs hover:border-gray-300'
              }`}
            >
              {/* Group Header / Trigger */}
              <div
                onClick={() => toggleExpand(group.id)}
                className="p-6 sm:p-8 flex items-start sm:items-center justify-between gap-4 cursor-pointer select-none"
              >
                <div className="flex items-start sm:items-center gap-4 sm:gap-6">
                  {/* Number & Icon Pill */}
                  <div
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 transition-transform duration-200 group-hover:scale-105 ${
                      isPurple
                        ? 'bg-[#F4EDF9] text-[#5B16A6]'
                        : 'bg-[#E8FBF3] text-[#00B936]'
                    }`}
                  >
                    <IconComponent className="w-7 h-7" />
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-bold text-gray-400 font-mono">
                        GROUP {group.number} OF 10
                      </span>
                      <span
                        className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                          isPurple ? 'bg-[#F4EDF9] text-[#5B16A6]' : 'bg-[#E8FBF3] text-[#00B936]'
                        }`}
                      >
                        Official Protocol
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-extrabold text-gray-900 font-display">
                      {group.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-500 mt-1">
                      {group.shortIntro}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <span className="hidden sm:inline text-xs font-bold text-gray-400">
                    {isExpanded ? 'Collapse' : 'Details'}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600">
                    {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </div>
              </div>

              {/* Expandable Deep Dive Body with AnimatePresence */}
              <AnimatePresence>
                {isExpanded && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.42, ease: [0.25, 0.1, 0.25, 1] }}
                    className="px-6 sm:px-8 pb-8 pt-2 border-t border-gray-100 bg-[#FAF9FC] space-y-6 overflow-hidden"
                  >
                    
                    {/* Detailed Description */}
                    <div className="bg-white p-5 rounded-2xl border border-gray-200">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-[#5B16A6] mb-2">
                        Functional Overview
                      </h4>
                      <p className="text-sm text-gray-700 leading-relaxed">
                        {group.detailedDescription}
                      </p>
                    </div>

                    {/* Rules Accordion / Cards */}
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-3">
                        Platform Enforced Rules
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {group.rules.map((rule, idx) => (
                          <div key={idx} className="bg-white p-4 rounded-2xl border border-gray-200 space-y-1">
                            <p className="text-xs font-bold text-gray-900 flex items-center gap-1.5">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#5B16A6]" />
                              {rule.title}
                            </p>
                            <p className="text-xs text-gray-600 leading-relaxed pl-3">
                              {rule.desc}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </section>

      {/* 3. INTERACTIVE CORRIDOR FARE ESTIMATOR EMBED */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" 
        id="interactive-fare-estimator"
      >
        <FareEstimator onNavigate={onNavigate} />
      </motion.section>

      {/* 4. CTA BANNER */}
      <motion.section 
        initial={{ opacity: 0, scale: 0.97 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="bg-[#181124] rounded-3xl p-8 sm:p-12 text-white border border-purple-950/40 text-center space-y-6">
          <span className="bg-[#00B936] text-white text-xs font-extrabold px-3.5 py-1 rounded-full uppercase tracking-wider inline-block">
            Seamless Mobile Access
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display">
            All 10 Features Integrated in One Lightweight App
          </h2>
          <p className="text-white/70 max-w-xl mx-auto text-sm sm:text-base">
            From algorithmic fares to Google Maps live ETAs, the CarPe mobile app puts complete control in your hands.
          </p>
          <div className="pt-2">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => onNavigate('download')}
              className="px-8 py-4 bg-[#00B936] hover:bg-[#009c2e] text-white rounded-2xl font-bold text-sm shadow-lg shadow-[#00B936]/30 inline-flex items-center gap-2 cursor-pointer transition-transform"
            >
              <Download className="w-4 h-4" />
              <span>Download CarPe for iOS & Android</span>
            </motion.button>
          </div>
        </div>
      </motion.section>

    </div>
  );
};
