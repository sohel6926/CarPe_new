import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Radio, 
  MapPin, 
  ShieldCheck, 
  ChevronUp, 
  ChevronDown, 
  Sparkles, 
  Car, 
  X, 
  Compass, 
  Clock, 
  Users, 
  ArrowRight,
  Zap,
  Activity
} from 'lucide-react';
import { PageId } from '../types';

interface LiveHighwayRadarBarProps {
  onNavigate: (page: PageId, anchorId?: string) => void;
}

interface CorridorUpdate {
  id: string;
  corridor: string;
  routeCode: string;
  driver: string;
  vehicle: string;
  status: string;
  savings: string;
  seats: string;
  time: string;
  verified: boolean;
}

const LIVE_UPDATES: CorridorUpdate[] = [
  {
    id: 'up-1',
    corridor: 'Hyderabad ⇄ Vijayawada',
    routeCode: 'NH-65 Corridor',
    driver: 'Ramesh V. (Verified Tech Lead)',
    vehicle: 'Hyundai Creta • TS 09 EA 4492',
    status: 'Suryapet Food Plaza Midway Break',
    savings: '₹620 saved vs Taxi',
    seats: '3/3 Booked (No Middle)',
    time: '2 mins ago',
    verified: true,
  },
  {
    id: 'up-2',
    corridor: 'Bengaluru ⇄ Chennai',
    routeCode: 'NH-48 Expressway',
    driver: 'Dr. Ananya S. (Verified Physician)',
    vehicle: 'Honda City • KA 01 MJ 8821',
    status: 'Automated Women-Only Front Seating Active',
    savings: '₹840 saved vs Taxi',
    seats: '2/2 Booked',
    time: 'Just now',
    verified: true,
  },
  {
    id: 'up-3',
    corridor: 'Pune ⇄ Mumbai',
    routeCode: 'Mumbai-Pune Expressway',
    driver: 'Kunal M. (Verified Consultant)',
    vehicle: 'Tata Nexon EV • MH 12 TR 1934',
    status: 'Zero Surge Price Locked at ₹340/seat',
    savings: '₹550 saved vs Taxi',
    seats: '3/3 Booked',
    time: '4 mins ago',
    verified: true,
  },
  {
    id: 'up-4',
    corridor: 'Delhi ⇄ Jaipur',
    routeCode: 'NE-4 Expressway',
    driver: 'Vikram R. (Verified Architect)',
    vehicle: 'Mahindra XUV700 • DL 3C CW 9012',
    status: 'Google Maps Traffic-Synced Pickup Completed',
    savings: '₹920 saved vs Taxi',
    seats: '4/4 Booked',
    time: '6 mins ago',
    verified: true,
  }
];

export const LiveHighwayRadarBar: React.FC<LiveHighwayRadarBarProps> = ({ onNavigate }) => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeCarCount, setActiveCarCount] = useState(148);
  const [isDismissed, setIsDismissed] = useState(false);

  // Cycle through updates at a comfortable readable interval
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % LIVE_UPDATES.length);
    }, 6500);
    return () => clearInterval(timer);
  }, []);

  // Subtle natural fluctuation in active vehicles
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCarCount((prev) => {
        const delta = Math.floor(Math.random() * 3) - 1; // -1, 0, or +1
        return Math.max(140, Math.min(165, prev + delta));
      });
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  if (isDismissed) {
    return (
      <motion.button
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        onClick={() => setIsDismissed(false)}
        className="fixed bottom-5 right-5 z-40 bg-[#5B16A6] text-white p-3 rounded-full shadow-lg shadow-purple-950/20 hover:bg-[#4A1089] transition-all flex items-center gap-2 text-xs font-bold cursor-pointer"
        title="Open Live Highway Radar"
      >
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00B936] opacity-75" />
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#00B936]" />
        </span>
        <Radio className="w-4 h-4" />
        <span className="hidden sm:inline">Live Network</span>
      </motion.button>
    );
  }

  const currentUpdate = LIVE_UPDATES[currentIdx];

  return (
    <div className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:max-w-md z-40">
      <motion.div
        layout
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
        className="bg-gray-900/95 backdrop-blur-md text-white rounded-2xl border border-white/10 shadow-2xl shadow-purple-950/30 overflow-hidden"
      >
        {/* Top Header Pill Bar */}
        <div className="px-3.5 py-2.5 bg-gradient-to-r from-gray-900 via-[#2E1065] to-gray-900 flex items-center justify-between gap-2.5 border-b border-white/10">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00B936] opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#00B936]" />
            </span>
            <span className="text-[10px] sm:text-[11px] font-black uppercase tracking-wider text-[#00B936] flex items-center gap-1">
              <Activity className="w-3 h-3 animate-pulse" />
              LIVE RADAR
            </span>
            <span className="text-[10px] text-white/50">•</span>
            <span className="text-[11px] font-bold text-white/90">
              {activeCarCount} Verified Carpools En Route
            </span>
          </div>

          <div className="flex items-center gap-1">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="p-1 text-white/70 hover:text-white rounded-lg hover:bg-white/10 transition-colors cursor-pointer text-xs flex items-center gap-0.5"
              title={isExpanded ? "Collapse telemetry" : "Expand telemetry"}
            >
              <span className="text-[10px] font-medium hidden sm:inline">
                {isExpanded ? 'Hide' : 'Telemetry'}
              </span>
              {isExpanded ? <ChevronDown className="w-3.5 h-3.5" /> : <ChevronUp className="w-3.5 h-3.5" />}
            </button>
            <button
              onClick={() => setIsDismissed(true)}
              className="p-1 text-white/50 hover:text-white rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
              title="Minimize bar"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Live Rolling Headline */}
        <div className="p-3 sm:p-3.5">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentUpdate.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
              className="space-y-1.5"
            >
              <div className="flex items-center justify-between text-xs">
                <span className="font-extrabold text-[#00B936] flex items-center gap-1">
                  <MapPin className="w-3 h-3" />
                  {currentUpdate.corridor}
                </span>
                <span className="text-[10px] text-white/50 font-mono">
                  {currentUpdate.time}
                </span>
              </div>

              <p className="text-xs text-white/90 font-medium line-clamp-1">
                {currentUpdate.status}
              </p>

              <div className="flex items-center justify-between pt-1 text-[11px] text-white/70">
                <span className="text-purple-300 font-semibold">{currentUpdate.vehicle}</span>
                <span className="bg-[#00B936]/20 text-[#00B936] px-2 py-0.5 rounded-full text-[10px] font-bold">
                  {currentUpdate.savings}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Expandable Telemetry Feed */}
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="pt-3 mt-3 border-t border-white/10 space-y-2.5 overflow-hidden"
              >
                <div className="bg-white/5 p-2.5 rounded-xl space-y-2 text-xs">
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="text-white/60">Algorithm Pricing:</span>
                    <span className="text-[#00B936] font-bold">100% Fixed (Zero Surge)</span>
                  </div>
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="text-white/60">Active Driver:</span>
                    <span className="text-white font-medium">{currentUpdate.driver}</span>
                  </div>
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="text-white/60">Safety Protocol:</span>
                    <span className="text-purple-300 font-medium">100% ID + 7-Photo Verified</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 pt-1">
                  <button
                    onClick={() => {
                      onNavigate('services', 'route-matching');
                      setIsExpanded(false);
                    }}
                    className="w-full py-2 bg-[#5B16A6] hover:bg-[#4A1089] text-white text-xs font-bold rounded-xl flex items-center justify-center gap-1 transition-colors cursor-pointer"
                  >
                    <span>View Rules</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                  <button
                    onClick={() => {
                      onNavigate('home');
                      setIsExpanded(false);
                      // scroll to estimator
                      setTimeout(() => {
                        const el = document.getElementById('fare-estimator-section');
                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                      }, 200);
                    }}
                    className="w-full py-2 bg-[#00B936] hover:bg-[#009c2e] text-white text-xs font-bold rounded-xl flex items-center justify-center gap-1 transition-colors cursor-pointer"
                  >
                    <Zap className="w-3 h-3" />
                    <span>Estimate Fare</span>
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
};
