import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  ShieldCheck, 
  Navigation, 
  AlertTriangle, 
  Users, 
  Luggage, 
  Check, 
  ArrowRight, 
  Search,
  CheckCircle2
} from 'lucide-react';

interface PhoneMockupProps {
  initialScreen?: 'search' | 'seat' | 'tracking' | 'emergency';
  showControls?: boolean;
}

/**
 * Animated Interactive Tap Guide Badge
 * Sleek modern floating beacon pill positioned cleanly below the action button
 */
const InteractiveTapGuide: React.FC<{
  label?: string;
  variant?: 'emerald' | 'purple';
}> = ({ label = 'Tap here', variant = 'emerald' }) => {
  const isEmerald = variant === 'emerald';
  const dotColor = isEmerald ? 'bg-[#00B936]' : 'bg-[#5B16A6]';
  const pingColor = isEmerald ? 'bg-[#00B936]/60' : 'bg-[#5B16A6]/60';

  return (
    <div className="absolute top-[calc(100%+6px)] right-3 z-40 pointer-events-none flex flex-col items-center select-none">
      <motion.div
        className="flex flex-col items-center"
        animate={{
          y: [0, -3.5, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 1.8,
          ease: 'easeInOut',
        }}
      >
        {/* Upward Pointing Arrow Notch */}
        <div className="w-0 h-0 border-x-[4.5px] border-x-transparent border-b-[5px] border-b-[#181124] -mb-[0.5px]" />

        {/* Sleek Dark Floating Badge */}
        <div className="flex items-center gap-1.5 bg-[#181124] text-white px-2.5 py-1 rounded-full shadow-md shadow-black/25 border border-white/20 text-[8.5px] font-bold tracking-tight">
          {/* Animated Pulsing Sonar Dot */}
          <span className="relative flex h-2 w-2">
            <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${pingColor}`} />
            <span className={`relative inline-flex rounded-full h-2 w-2 ${dotColor}`} />
          </span>

          <span className="leading-none">{label}</span>

          <motion.span
            animate={{ scale: [1, 1.25, 1], opacity: [0.7, 1, 0.7] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
            className="text-[9px] text-[#00B936] leading-none"
          >
            ✦
          </motion.span>
        </div>
      </motion.div>
    </div>
  );
};

export const PhoneMockup: React.FC<PhoneMockupProps> = ({
  initialScreen = 'search',
  showControls = true,
}) => {
  const [activeScreen, setActiveScreen] = useState<'search' | 'seat' | 'tracking' | 'emergency'>(initialScreen);

  const handleNextScreen = (next: 'search' | 'seat' | 'tracking' | 'emergency') => {
    setActiveScreen(next);
  };

  return (
    <div className="w-full max-w-[270px] sm:max-w-[285px] mx-auto flex flex-col items-center relative">
      
      {/* Screen selector tabs */}
      {showControls && (
        <div className="flex items-center gap-1 p-1 bg-[#F4EDF9] rounded-xl mb-4 border border-[#5B16A6]/10 w-full justify-between shadow-2xs">
          <button
            onClick={() => setActiveScreen('search')}
            className={`px-2 py-1 rounded-lg text-[10px] sm:text-[11px] font-bold transition-all cursor-pointer flex-1 text-center ${
              activeScreen === 'search'
                ? 'bg-[#5B16A6] text-white shadow-xs'
                : 'text-[#5B16A6] hover:bg-white/60'
            }`}
          >
            Search
          </button>
          <button
            onClick={() => setActiveScreen('seat')}
            className={`px-2 py-1 rounded-lg text-[10px] sm:text-[11px] font-bold transition-all cursor-pointer flex-1 text-center ${
              activeScreen === 'seat'
                ? 'bg-[#5B16A6] text-white shadow-xs'
                : 'text-[#5B16A6] hover:bg-white/60'
            }`}
          >
            Seat Map
          </button>
          <button
            onClick={() => setActiveScreen('tracking')}
            className={`px-2 py-1 rounded-lg text-[10px] sm:text-[11px] font-bold transition-all cursor-pointer flex-1 text-center ${
              activeScreen === 'tracking'
                ? 'bg-[#5B16A6] text-white shadow-xs'
                : 'text-[#5B16A6] hover:bg-white/60'
            }`}
          >
            Live ETA
          </button>
          <button
            onClick={() => setActiveScreen('emergency')}
            className={`px-2 py-1 rounded-lg text-[10px] sm:text-[11px] font-bold transition-all cursor-pointer flex-1 text-center ${
              activeScreen === 'emergency'
                ? 'bg-[#5B16A6] text-white shadow-xs'
                : 'text-[#5B16A6] hover:bg-white/60'
            }`}
          >
            SOS
          </button>
        </div>
      )}

      {/* Phone Hardware Frame */}
      <div className="relative w-full max-w-[260px] sm:max-w-[275px] aspect-[9/17.8] bg-[#120E18] p-2.5 rounded-[38px] shadow-xl border-[3.5px] border-gray-800 ring-1 ring-black/25 select-none">
        
        {/* Notch / Dynamic Island */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 w-20 h-4 bg-black rounded-full z-30 flex items-center justify-end px-2">
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-500/80 animate-pulse" />
        </div>

        {/* Screen Content Container */}
        <div className="w-full h-full bg-white rounded-[28px] overflow-hidden flex flex-col relative text-[#1A1A1A]">
          
          {/* Top Status Bar */}
          <div className="pt-2 px-4 pb-1.5 flex items-center justify-between text-[10px] font-bold text-gray-500 bg-white border-b border-gray-50">
            <span>09:41</span>
            <div className="flex items-center gap-1">
              <span className="text-[9px]">5G</span>
              <span className="w-3.5 h-1.5 rounded-xs border border-gray-500 flex items-center p-0.5">
                <span className="w-full h-full bg-[#00B936] rounded-2xs" />
              </span>
            </div>
          </div>

          {/* SCREEN 1: Route Search & Corridor Discovery */}
          {activeScreen === 'search' && (
            <div className="flex-1 flex flex-col p-3 overflow-y-auto space-y-2 bg-[#FAFAFA] relative">
              <div className="flex items-center justify-between">
                <div>
                  <h5 className="font-extrabold text-xs text-[#5B16A6] font-display">Find Intercity Ride</h5>
                  <p className="text-[9px] text-gray-500">100% Algorithmic Fixed Fare</p>
                </div>
                <span className="bg-[#E8FBF3] text-[#00B936] text-[9px] font-bold px-1.5 py-0.5 rounded-full">
                  No Surges
                </span>
              </div>

              {/* Search Card */}
              <div className="bg-white rounded-xl p-2.5 border border-gray-100 shadow-2xs space-y-1.5">
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-[#5B16A6]" />
                  <div className="flex-1 border-b border-gray-50 pb-0.5">
                    <p className="text-[8px] text-gray-400 font-medium">Pickup</p>
                    <p className="text-[11px] font-bold text-gray-900 leading-tight">Hyderabad (Gachibowli)</p>
                  </div>
                </div>

                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-[#00B936]" />
                  <div className="flex-1">
                    <p className="text-[8px] text-gray-400 font-medium">Drop</p>
                    <p className="text-[11px] font-bold text-gray-900 leading-tight">Vijayawada (Benz Circle)</p>
                  </div>
                </div>
              </div>

              {/* Matched Ride Card */}
              <div className="bg-white rounded-xl p-2.5 border-2 border-[#5B16A6]/25 shadow-xs space-y-1.5 relative">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <div className="w-7 h-7 rounded-full bg-[#5B16A6] text-white flex items-center justify-center font-bold text-[10px]">
                      SK
                    </div>
                    <div>
                      <p className="text-[11px] font-bold text-gray-900 leading-tight">Suresh K. (Verified)</p>
                      <p className="text-[8px] text-gray-500">Honda City • 4.9 ★</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-xs font-black text-[#5B16A6]">₹480</p>
                    <p className="text-[8px] text-[#00B936] font-bold">Fixed</p>
                  </div>
                </div>

                <div className="flex items-center justify-between text-[9px] bg-[#F4EDF9] p-1.5 rounded-lg text-[#5B16A6] font-medium">
                  <span>04:00 PM (40m window)</span>
                  <span className="font-bold">2 Seats</span>
                </div>

                {/* Interactive Select Seat Button with Guide Badge */}
                <div className="relative pt-0.5">
                  <button 
                    onClick={() => handleNextScreen('seat')}
                    className="w-full py-1.5 bg-[#00B936] hover:bg-[#009c2e] text-white rounded-lg text-[11px] font-bold flex items-center justify-center gap-1 cursor-pointer transition-all shadow-xs active:scale-95"
                  >
                    <span>Select Seat</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>

                  {/* Clean Animated Tap Guide */}
                  <InteractiveTapGuide label="Tap here" variant="emerald" />
                </div>
              </div>

              {/* Trust Badge */}
              <div className="bg-white p-1.5 rounded-lg border border-gray-100 flex items-center gap-1.5 text-[9px] text-gray-600">
                <ShieldCheck className="w-3.5 h-3.5 text-[#00B936] shrink-0" />
                <span>Zero middle seats • ₹100 locked</span>
              </div>
            </div>
          )}

          {/* SCREEN 2: Digital Seat Selection Map */}
          {activeScreen === 'seat' && (
            <div className="flex-1 flex flex-col p-3 overflow-y-auto space-y-2 bg-[#FAFAFA] relative">
              <div className="flex items-center justify-between">
                <div>
                  <h5 className="font-extrabold text-xs text-[#5B16A6] font-display">Select Seat</h5>
                  <p className="text-[9px] text-gray-500">Sedan (Max 3 Riders)</p>
                </div>
                <span className="bg-[#F4EDF9] text-[#5B16A6] text-[9px] font-bold px-1.5 py-0.5 rounded-full">
                  No Middle
                </span>
              </div>

              {/* Car Graphic Seat Layout */}
              <div className="bg-white rounded-xl p-2.5 border border-gray-200 shadow-2xs">
                <div className="w-28 mx-auto bg-gray-50 border-2 border-gray-200 rounded-2xl p-2 relative">
                  
                  {/* Steering wheel / Driver */}
                  <div className="flex justify-between items-center pb-2 mb-1.5 border-b border-gray-200">
                    <div className="w-8 h-8 rounded-lg bg-gray-200 flex flex-col items-center justify-center text-[7px] font-bold text-gray-600">
                      <span>Driver</span>
                    </div>
                    {/* Front Passenger Seat */}
                    <div className="w-8 h-8 rounded-lg bg-[#E8FBF3] border border-[#00B936] flex flex-col items-center justify-center text-[7px] font-bold text-[#00B936]">
                      <span>Front</span>
                    </div>
                  </div>

                  {/* Rear Row */}
                  <div className="flex justify-between items-center gap-1">
                    {/* Rear Left (Selected) */}
                    <div className="w-8 h-8 rounded-lg bg-[#5B16A6] text-white flex flex-col items-center justify-center text-[7px] font-bold shadow-xs">
                      <span>Seat</span>
                      <Check className="w-2 h-2" />
                    </div>

                    {/* Middle Seat Blocked */}
                    <div className="w-5 h-6 rounded-md bg-gray-100 flex items-center justify-center text-[6px] text-gray-400 border border-dashed border-gray-300">
                      Empty
                    </div>

                    {/* Rear Right */}
                    <div className="w-8 h-8 rounded-lg bg-gray-200 text-gray-500 flex flex-col items-center justify-center text-[7px] font-bold">
                      <span>Booked</span>
                    </div>
                  </div>

                  {/* Boot Space Bar */}
                  <div className="mt-1.5 pt-1 border-t border-gray-200 text-center">
                    <span className="text-[7px] font-bold text-[#5B16A6] bg-[#F4EDF9] px-1.5 py-0.5 rounded-full">
                      Trunk: 1 / 3 Slots Free
                    </span>
                  </div>
                </div>
              </div>

              {/* Luggage Option */}
              <div className="bg-white p-2 rounded-xl border border-gray-100 flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <Luggage className="w-3.5 h-3.5 text-[#5B16A6]" />
                  <div>
                    <p className="text-[10px] font-bold text-gray-900">1 Trolley Bag (Boot)</p>
                    <p className="text-[8px] text-gray-400">Guaranteed slot</p>
                  </div>
                </div>
                <span className="w-3.5 h-3.5 rounded-full bg-[#00B936] text-white flex items-center justify-center text-[9px] font-bold">
                  ✓
                </span>
              </div>

              <div className="relative pt-0.5">
                <button 
                  onClick={() => handleNextScreen('tracking')}
                  className="w-full py-1.5 bg-[#00B936] text-white rounded-lg text-[10px] font-bold shadow-xs flex items-center justify-center gap-1 cursor-pointer active:scale-95 transition-all"
                >
                  <span>Pay ₹50 Advance</span>
                  <ArrowRight className="w-3 h-3" />
                </button>

                {/* Clean Animated Tap Guide */}
                <InteractiveTapGuide label="Confirm seat" variant="emerald" />
              </div>
            </div>
          )}

          {/* SCREEN 3: Live Highway Tracking & ETA */}
          {activeScreen === 'tracking' && (
            <div className="flex-1 flex flex-col p-3 overflow-y-auto space-y-2 bg-[#FAFAFA] relative">
              <div className="flex items-center justify-between">
                <div>
                  <h5 className="font-extrabold text-xs text-[#5B16A6] font-display">Live Highway</h5>
                  <p className="text-[9px] text-gray-500">Google Maps ETA</p>
                </div>
                <span className="bg-[#E8FBF3] text-[#00B936] text-[8px] font-bold px-1.5 py-0.5 rounded-full flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00B936] animate-ping" />
                  On Route
                </span>
              </div>

              {/* Mini Map View Visual */}
              <div className="h-20 bg-[#F4EDF9] rounded-xl relative overflow-hidden border border-[#5B16A6]/20 flex items-center justify-center p-2">
                <div className="w-full h-1 bg-[#5B16A6] relative rounded-full">
                  <div className="absolute left-1/3 -top-2.5 w-5 h-5 rounded-full bg-[#5B16A6] text-white flex items-center justify-center text-[8px] font-bold shadow-md ring-2 ring-white">
                    🚗
                  </div>
                  <div className="absolute right-0 -top-1 w-3 h-3 rounded-full bg-[#00B936] ring-2 ring-white" />
                </div>

                <div className="absolute bottom-1 left-1.5 bg-white/95 px-1.5 py-0.5 rounded text-[8px] font-bold text-[#5B16A6]">
                  84 km/h
                </div>
                <div className="absolute bottom-1 right-1.5 bg-white/95 px-1.5 py-0.5 rounded text-[8px] font-bold text-gray-800">
                  ETA: 08:30 PM
                </div>
              </div>

              {/* Driver & OTP Card */}
              <div className="bg-white rounded-xl p-2 border border-gray-100 shadow-2xs space-y-1">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <div className="w-6 h-6 rounded-full bg-purple-100 text-[#5B16A6] flex items-center justify-center font-bold text-[9px]">
                      SK
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-gray-900 leading-tight">Suresh Kumar</p>
                      <p className="text-[8px] text-gray-400">TS 09 EZ 4412</p>
                    </div>
                  </div>
                  <div className="bg-[#F8F7FA] px-1.5 py-0.5 rounded border border-gray-200 text-center">
                    <p className="text-[6px] text-gray-400 uppercase font-bold">OTP</p>
                    <p className="text-[10px] font-black text-[#5B16A6]">7842</p>
                  </div>
                </div>
              </div>

              <div className="relative pt-0.5">
                <button 
                  onClick={() => handleNextScreen('emergency')}
                  className="w-full py-1.5 bg-rose-50 text-rose-700 border border-rose-200 rounded-lg text-[9px] font-bold flex items-center justify-center gap-1 cursor-pointer active:scale-95 transition-all"
                >
                  <AlertTriangle className="w-3 h-3 text-rose-600" />
                  <span>Test Emergency SOS</span>
                </button>
              </div>
            </div>
          )}

          {/* SCREEN 4: Safety & Emergency SOS */}
          {activeScreen === 'emergency' && (
            <div className="flex-1 flex flex-col p-3 overflow-y-auto space-y-2 bg-[#FAFAFA] relative">
              <div className="flex items-center justify-between">
                <div>
                  <h5 className="font-extrabold text-xs text-[#5B16A6] font-display">Safety & SOS</h5>
                  <p className="text-[8px] text-gray-500">Live GPS Broadcast</p>
                </div>
                <ShieldCheck className="w-4 h-4 text-[#00B936]" />
              </div>

              {/* Big Red SOS Button */}
              <div className="bg-white rounded-xl p-2.5 border border-rose-100 shadow-2xs text-center space-y-1">
                <button 
                  onClick={() => handleNextScreen('search')}
                  className="w-11 h-11 mx-auto rounded-full bg-rose-600 hover:bg-rose-700 text-white flex flex-col items-center justify-center shadow-md shadow-rose-600/30 transition-transform active:scale-95 cursor-pointer ring-2 ring-rose-100"
                >
                  <AlertTriangle className="w-4 h-4" />
                  <span className="text-[7px] font-black tracking-widest">SOS</span>
                </button>
                <p className="text-[9px] font-bold text-gray-800">1-Tap Live Link Alert</p>
                <p className="text-[7px] text-gray-500">3 Trusted Contacts Alerted</p>
              </div>

              <div className="bg-[#E8FBF3] p-1.5 rounded-lg text-[8px] text-[#00B936] font-semibold flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3 shrink-0" />
                <span>24/7 Safety Desk Monitored</span>
              </div>
            </div>
          )}

          {/* Bottom App Navigation Bar */}
          <div className="py-1.5 px-4 bg-white border-t border-gray-100 flex items-center justify-between text-gray-400">
            <button 
              onClick={() => setActiveScreen('search')}
              className={`flex flex-col items-center gap-0.5 cursor-pointer ${activeScreen === 'search' ? 'text-[#5B16A6]' : ''}`}
            >
              <Search className="w-3.5 h-3.5" />
              <span className="text-[7px] font-bold">Rides</span>
            </button>
            <button 
              onClick={() => setActiveScreen('seat')}
              className={`flex flex-col items-center gap-0.5 cursor-pointer ${activeScreen === 'seat' ? 'text-[#5B16A6]' : ''}`}
            >
              <Users className="w-3.5 h-3.5" />
              <span className="text-[7px] font-bold">Seats</span>
            </button>
            <button 
              onClick={() => setActiveScreen('tracking')}
              className={`flex flex-col items-center gap-0.5 cursor-pointer ${activeScreen === 'tracking' ? 'text-[#5B16A6]' : ''}`}
            >
              <Navigation className="w-3.5 h-3.5" />
              <span className="text-[7px] font-bold">Track</span>
            </button>
            <button 
              onClick={() => setActiveScreen('emergency')}
              className={`flex flex-col items-center gap-0.5 cursor-pointer ${activeScreen === 'emergency' ? 'text-rose-600' : ''}`}
            >
              <ShieldCheck className="w-3.5 h-3.5" />
              <span className="text-[7px] font-bold">Safety</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
