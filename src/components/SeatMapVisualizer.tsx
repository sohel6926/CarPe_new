import React, { useState } from 'react';
import { 
  Users, 
  Shield, 
  Luggage, 
  CheckCircle2, 
  AlertCircle, 
  Sparkles, 
  UserCheck, 
  Info,
  Car
} from 'lucide-react';

export const SeatMapVisualizer: React.FC = () => {
  const [vehicleType, setVehicleType] = useState<'sedan' | 'mpv'>('sedan');
  const [scenario, setScenario] = useState<'standard' | 'solo-female' | 'two-female' | 'couple'>('solo-female');
  const [hasLuggage, setHasLuggage] = useState(true);

  return (
    <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 border border-[#E7E3EB] shadow-lg shadow-purple-950/5">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-5 border-b border-gray-100">
        <div>
          <div className="inline-flex items-center gap-1.5 bg-[#F4EDF9] text-[#5B16A6] text-xs font-bold px-3 py-1 rounded-full mb-2">
            <Sparkles className="w-3.5 h-3.5 text-[#00B936]" />
            <span>Interactive Platform Rule Visualizer</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-extrabold text-gray-900 font-display">
            Vehicle-Aware Seating & Women’s Safety Logic
          </h3>
          <p className="text-xs sm:text-sm text-gray-600 mt-1">
            Experience how CarPe allocates seats dynamically to guarantee comfort and safety.
          </p>
        </div>

        {/* Vehicle Selector */}
        <div className="flex items-center gap-1.5 sm:gap-2 bg-[#F8F7FA] p-1 sm:p-1.5 rounded-2xl border border-gray-200 self-start md:self-auto">
          <button
            onClick={() => setVehicleType('sedan')}
            className={`px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
              vehicleType === 'sedan'
                ? 'bg-[#5B16A6] text-white shadow-xs'
                : 'text-gray-600 hover:text-[#5B16A6]'
            }`}
          >
            <Car className="w-3.5 h-3.5" />
            <span>Sedan (Max 3)</span>
          </button>
          <button
            onClick={() => setVehicleType('mpv')}
            className={`px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
              vehicleType === 'mpv'
                ? 'bg-[#5B16A6] text-white shadow-xs'
                : 'text-gray-600 hover:text-[#5B16A6]'
            }`}
          >
            <Users className="w-3.5 h-3.5" />
            <span>MPV / Innova (Max 5)</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 pt-5 sm:pt-6">
        
        {/* Left: Controls & Scenario Selector */}
        <div className="lg:col-span-5 space-y-4 sm:space-y-5">
          <div>
            <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
              Test Passenger Scenarios
            </label>
            <div className="space-y-2">
              <button
                onClick={() => setScenario('solo-female')}
                className={`w-full p-2.5 sm:p-3 rounded-2xl text-left border text-xs transition-all cursor-pointer flex items-start gap-2.5 sm:gap-3 ${
                  scenario === 'solo-female'
                    ? 'border-[#5B16A6] bg-[#F4EDF9]/70 ring-1 ring-[#5B16A6]'
                    : 'border-gray-200 hover:bg-gray-50'
                }`}
              >
                <div className="w-8 h-8 rounded-xl bg-purple-100 text-[#5B16A6] flex items-center justify-center shrink-0 font-bold text-sm">
                  👩
                </div>
                <div>
                  <p className="font-bold text-gray-900">1 Solo Female Passenger</p>
                  <p className="text-gray-500 text-[11px]">Auto-allocated Front Passenger seat next to driver</p>
                </div>
              </button>

              <button
                onClick={() => setScenario('two-female')}
                className={`w-full p-2.5 sm:p-3 rounded-2xl text-left border text-xs transition-all cursor-pointer flex items-start gap-2.5 sm:gap-3 ${
                  scenario === 'two-female'
                    ? 'border-[#5B16A6] bg-[#F4EDF9]/70 ring-1 ring-[#5B16A6]'
                    : 'border-gray-200 hover:bg-gray-50'
                }`}
              >
                <div className="w-8 h-8 rounded-xl bg-emerald-100 text-[#00B936] flex items-center justify-center shrink-0 font-bold text-sm">
                  👩👩
                </div>
                <div>
                  <p className="font-bold text-gray-900">2 Independent Female Passengers</p>
                  <p className="text-gray-500 text-[11px]">Paired together in the rear row; no unrelated male adjacent</p>
                </div>
              </button>

              <button
                onClick={() => setScenario('couple')}
                className={`w-full p-2.5 sm:p-3 rounded-2xl text-left border text-xs transition-all cursor-pointer flex items-start gap-2.5 sm:gap-3 ${
                  scenario === 'couple'
                    ? 'border-[#5B16A6] bg-[#F4EDF9]/70 ring-1 ring-[#5B16A6]'
                    : 'border-gray-200 hover:bg-gray-50'
                }`}
              >
                <div className="w-8 h-8 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center shrink-0 font-bold text-sm">
                  👫
                </div>
                <div>
                  <p className="font-bold text-gray-900">Couple / Family Booking</p>
                  <p className="text-gray-500 text-[11px]">Free choice of adjacent seating together</p>
                </div>
              </button>

              <button
                onClick={() => setScenario('standard')}
                className={`w-full p-2.5 sm:p-3 rounded-2xl text-left border text-xs transition-all cursor-pointer flex items-start gap-2.5 sm:gap-3 ${
                  scenario === 'standard'
                    ? 'border-[#5B16A6] bg-[#F4EDF9]/70 ring-1 ring-[#5B16A6]'
                    : 'border-gray-200 hover:bg-gray-50'
                }`}
              >
                <div className="w-8 h-8 rounded-xl bg-gray-100 text-gray-700 flex items-center justify-center shrink-0 font-bold text-sm">
                  👥
                </div>
                <div>
                  <p className="font-bold text-gray-900">Standard Commuter Seating</p>
                  <p className="text-gray-500 text-[11px]">Strictly zero middle seats filled for spacious comfort</p>
                </div>
              </button>
            </div>
          </div>

          {/* Luggage Reservation Toggle */}
          <div className="p-3 sm:p-3.5 bg-[#F8F7FA] rounded-2xl border border-gray-200 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <Luggage className="w-5 h-5 text-[#5B16A6]" />
              <div>
                <p className="text-xs font-bold text-gray-900">Digital Boot Space (Trolley)</p>
                <p className="text-[11px] text-gray-500">Max 1 medium bag per rider</p>
              </div>
            </div>
            <button
              onClick={() => setHasLuggage(!hasLuggage)}
              className={`w-11 h-6 rounded-full transition-colors relative cursor-pointer ${
                hasLuggage ? 'bg-[#00B936]' : 'bg-gray-300'
              }`}
            >
              <span
                className={`w-4 h-4 rounded-full bg-white absolute top-1 transition-transform ${
                  hasLuggage ? 'left-6' : 'left-1'
                }`}
              />
            </button>
          </div>
        </div>

        {/* Right: Visual Seat Map Render (Fully Responsive, never cuts off) */}
        <div className="lg:col-span-7 flex flex-col items-center justify-center bg-[#F8F7FA] rounded-2xl sm:rounded-3xl p-3 sm:p-5 md:p-6 border border-gray-200 relative w-full overflow-hidden">
          
          <div className="text-center mb-3 sm:mb-4 px-1">
            <span className="text-[11px] sm:text-xs font-bold text-[#5B16A6] bg-[#F4EDF9] px-2.5 sm:px-3 py-1 rounded-full">
              {vehicleType === 'sedan' ? 'Sedan Cabin Layout (5-Seater)' : 'MPV 7-Seater Cabin Layout'}
            </span>
            <p className="text-[11px] sm:text-xs text-gray-500 mt-1">
              {vehicleType === 'sedan' 
                ? 'Only 3 passenger seats bookable • Middle seat locked empty' 
                : 'Only 5 passenger seats bookable • Middle seats locked empty'}
            </p>
          </div>

          {/* Car Chassis Graphic - Scaled responsively with max-w */}
          <div className="w-full max-w-[270px] xs:max-w-[290px] sm:max-w-[320px] bg-white rounded-[26px] sm:rounded-[36px] border-2 sm:border-[3px] border-gray-300 p-3 sm:p-4.5 shadow-xs relative mx-auto">
            
            {/* Windshield */}
            <div className="w-full h-7 sm:h-8 bg-blue-50/80 rounded-t-xl sm:rounded-t-2xl border border-blue-200/50 mb-3 sm:mb-4 flex items-center justify-center text-[9px] sm:text-[10px] text-blue-600 font-bold">
              Front Windshield
            </div>

            {/* Row 1: Driver & Front Passenger */}
            <div className="grid grid-cols-2 gap-2 sm:gap-3 mb-3 sm:mb-4">
              {/* Driver Seat */}
              <div className="h-14 sm:h-16 rounded-xl sm:rounded-2xl bg-gray-100 border border-gray-300 flex flex-col items-center justify-center text-center p-1">
                <span className="text-[9px] sm:text-[10px] font-bold text-gray-700">Driver</span>
                <span className="text-[7px] sm:text-[8px] text-gray-500">Verified Host</span>
              </div>

              {/* Front Passenger Seat */}
              <div
                className={`h-14 sm:h-16 rounded-xl sm:rounded-2xl border-2 flex flex-col items-center justify-center text-center p-1 transition-all ${
                  scenario === 'solo-female'
                    ? 'bg-[#E8FBF3] border-[#00B936] text-[#00B936]'
                    : 'bg-[#F4EDF9] border-[#5B16A6] text-[#5B16A6]'
                }`}
              >
                <span className="text-[9px] sm:text-[10px] font-extrabold leading-tight">
                  {scenario === 'solo-female' ? 'Solo Woman' : 'Front Seat'}
                </span>
                <span className="text-[7px] sm:text-[8px] font-bold">
                  {scenario === 'solo-female' ? 'Auto-Allocated ✓' : 'Available'}
                </span>
              </div>
            </div>

            {/* Row 2: Rear Seats (Sedan) or Middle Row (MPV) */}
            <div className="grid grid-cols-3 gap-1.5 sm:gap-2 mb-3">
              {/* Left Window */}
              <div
                className={`h-14 sm:h-16 rounded-xl sm:rounded-2xl border-2 flex flex-col items-center justify-center text-center p-0.5 sm:p-1 ${
                  scenario === 'two-female'
                    ? 'bg-[#E8FBF3] border-[#00B936] text-[#00B936]'
                    : 'bg-[#F4EDF9] border-[#5B16A6] text-[#5B16A6]'
                }`}
              >
                <span className="text-[8px] sm:text-[10px] font-bold leading-tight">
                  {scenario === 'two-female' ? 'Female 1' : 'Rear Left'}
                </span>
                <span className="text-[7px] sm:text-[8px]">Window</span>
              </div>

              {/* Middle Seat (Always Blocked on CarPe for comfort) */}
              <div className="h-14 sm:h-16 rounded-xl bg-gray-100 border border-dashed border-gray-300 flex flex-col items-center justify-center text-center p-0.5 opacity-80">
                <span className="text-[8px] sm:text-[9px] font-bold text-gray-400">Middle</span>
                <span className="text-[6px] sm:text-[7px] text-rose-500 font-extrabold uppercase tracking-wider leading-tight">
                  ALWAYS EMPTY
                </span>
              </div>

              {/* Right Window */}
              <div
                className={`h-14 sm:h-16 rounded-xl sm:rounded-2xl border-2 flex flex-col items-center justify-center text-center p-0.5 sm:p-1 ${
                  scenario === 'two-female'
                    ? 'bg-[#E8FBF3] border-[#00B936] text-[#00B936]'
                    : 'bg-[#F4EDF9] border-[#5B16A6] text-[#5B16A6]'
                }`}
              >
                <span className="text-[8px] sm:text-[10px] font-bold leading-tight">
                  {scenario === 'two-female' ? 'Female 2' : 'Rear Right'}
                </span>
                <span className="text-[7px] sm:text-[8px]">Window</span>
              </div>
            </div>

            {/* If MPV: Row 3 */}
            {vehicleType === 'mpv' && (
              <div className="grid grid-cols-3 gap-1.5 sm:gap-2 mb-3 pt-2 border-t border-gray-100">
                <div className="h-12 sm:h-14 rounded-xl bg-[#F4EDF9] border-2 border-[#5B16A6] flex flex-col items-center justify-center text-center p-0.5 text-[#5B16A6]">
                  <span className="text-[8px] sm:text-[9px] font-bold">Row 3 L</span>
                  <span className="text-[7px]">Available</span>
                </div>
                <div className="h-12 sm:h-14 rounded-xl bg-gray-100 border border-dashed border-gray-300 flex flex-col items-center justify-center text-[7px] text-rose-500 font-bold">
                  Empty
                </div>
                <div className="h-12 sm:h-14 rounded-xl bg-[#F4EDF9] border-2 border-[#5B16A6] flex flex-col items-center justify-center text-center p-0.5 text-[#5B16A6]">
                  <span className="text-[8px] sm:text-[9px] font-bold">Row 3 R</span>
                  <span className="text-[7px]">Available</span>
                </div>
              </div>
            )}

            {/* Rear Trunk / Boot Compartment */}
            <div className="w-full bg-gray-100 rounded-b-xl sm:rounded-b-2xl border border-gray-300 p-2 sm:p-2.5 text-center mt-2.5 sm:mt-3">
              <div className="flex items-center justify-center gap-1.5 text-[11px] sm:text-xs font-bold text-gray-700">
                <Luggage className="w-3.5 h-3.5 text-[#5B16A6]" />
                <span>Dedicated Boot Capacity</span>
              </div>
              <p className="text-[8px] sm:text-[9px] text-[#00B936] font-semibold mt-0.5">
                {hasLuggage ? '✓ 1 Medium Trolley Slot Reserved' : 'No Luggage Selected'}
              </p>
            </div>
          </div>

          {/* Active Rule Explanation Callout */}
          <div className="mt-3.5 sm:mt-4 w-full bg-white p-2.5 sm:p-3 rounded-xl sm:rounded-2xl border border-gray-200 text-xs text-gray-700 flex items-start gap-2 sm:gap-2.5">
            <Shield className="w-4 h-4 text-[#00B936] shrink-0 mt-0.5" />
            <p className="text-[10px] sm:text-[11px] leading-relaxed">
              <strong className="text-[#5B16A6]">CarPe Rule Active:</strong>{' '}
              {scenario === 'solo-female' && 'Single female travelers receive priority front seat allocation with dedicated legroom and unobstructed visibility.'}
              {scenario === 'two-female' && 'Two female passengers booking separately share the rear cabin together, preventing any unknown male passenger from sitting beside them.'}
              {scenario === 'couple' && 'Couples booking together can select adjacent seats with zero restrictions.'}
              {scenario === 'standard' && 'Standard bookings guarantee that middle seats remain completely vacant across the entire highway trip.'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
