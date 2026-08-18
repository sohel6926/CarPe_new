import React, { useState } from 'react';
import { POPULAR_ROUTES } from '../data/mockData';
import { RouteOption, PageId } from '../types';
import { 
  Calculator, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  TrendingDown, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles,
  Luggage,
  Users
} from 'lucide-react';

interface FareEstimatorProps {
  onNavigate: (page: PageId, anchorId?: string) => void;
}

export const FareEstimator: React.FC<FareEstimatorProps> = ({ onNavigate }) => {
  const [selectedRoute, setSelectedRoute] = useState<RouteOption>(POPULAR_ROUTES[0]);

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E7E3EB] shadow-xl shadow-purple-950/5 relative overflow-hidden" id="fare-calculator-widget">
      
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-gray-100">
        <div>
          <span className="inline-flex items-center gap-1.5 bg-[#E8FBF3] text-[#00B936] text-xs font-bold px-3 py-1 rounded-full mb-1">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Algorithm-Based Price Engine</span>
          </span>
          <h3 className="text-xl sm:text-2xl font-extrabold text-gray-900 font-display">
            Estimate Your Intercity Fare & Savings
          </h3>
        </div>

        <span className="text-xs text-gray-500 font-medium">
          Zero Surge • Zero Driver Haggling
        </span>
      </div>

      {/* Corridor Selection Pills */}
      <div className="pt-6">
        <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2.5">
          Select Popular Arterial Route:
        </label>
        <div className="flex flex-wrap gap-2">
          {POPULAR_ROUTES.map((route) => {
            const isSelected = selectedRoute.from === route.from && selectedRoute.to === route.to;
            return (
              <button
                key={`${route.from}-${route.to}`}
                onClick={() => setSelectedRoute(route)}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                  isSelected
                    ? 'bg-[#5B16A6] text-white shadow-xs'
                    : 'bg-[#F8F7FA] text-gray-700 hover:bg-[#F4EDF9] hover:text-[#5B16A6] border border-gray-200'
                }`}
              >
                <span>{route.from}</span>
                <span className="text-[#00B936]">⇄</span>
                <span>{route.to}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Dynamic Route Breakdown Card */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mt-6 bg-[#F8F7FA] p-6 rounded-3xl border border-gray-200">
        
        {/* Left Info: Distance & Timing */}
        <div className="md:col-span-7 space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-gray-200">
            <div className="flex items-center gap-2 text-sm font-extrabold text-gray-900">
              <MapPin className="w-4 h-4 text-[#5B16A6]" />
              <span>{selectedRoute.from} to {selectedRoute.to}</span>
            </div>
            <div className="flex items-center gap-3 text-xs text-gray-500 font-semibold">
              <span>{selectedRoute.distance}</span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-[#00B936]" />
                {selectedRoute.avgDuration}
              </span>
            </div>
          </div>

          {/* Sequential Highway Stops */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div className="bg-white p-3 rounded-2xl border border-gray-200">
              <p className="font-bold text-[#5B16A6] mb-1 text-[11px] uppercase tracking-wider">
                Pickup Nodes ({selectedRoute.from})
              </p>
              <ul className="text-gray-600 space-y-1 text-[11px]">
                {selectedRoute.popularPickups.map((p) => (
                  <li key={p} className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#5B16A6]" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-3 rounded-2xl border border-gray-200">
              <p className="font-bold text-[#00B936] mb-1 text-[11px] uppercase tracking-wider">
                Drop Nodes ({selectedRoute.to})
              </p>
              <ul className="text-gray-600 space-y-1 text-[11px]">
                {selectedRoute.popularDrops.map((d) => (
                  <li key={d} className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00B936]" />
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Inclusions */}
          <div className="flex flex-wrap gap-3 pt-1 text-xs text-gray-600">
            <span className="flex items-center gap-1 text-[#5B16A6] font-semibold">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#00B936]" /> 100% AC Included
            </span>
            <span className="flex items-center gap-1 text-[#5B16A6] font-semibold">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#00B936]" /> No Middle Seat
            </span>
            <span className="flex items-center gap-1 text-[#5B16A6] font-semibold">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#00B936]" /> Boot Trolley Reserved
            </span>
          </div>
        </div>

        {/* Right Info: Fares & Value Proposition */}
        <div className="md:col-span-5 bg-white p-5 rounded-2xl border-2 border-[#5B16A6]/20 flex flex-col justify-between shadow-xs">
          <div>
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-gray-500 uppercase">Fixed CarPe Fare</span>
              <span className="bg-[#E8FBF3] text-[#00B936] text-xs font-extrabold px-2 py-0.5 rounded-full flex items-center gap-1">
                <TrendingDown className="w-3 h-3" /> Save {selectedRoute.savingsPercent}%
              </span>
            </div>

            <div className="mt-2">
              <span className="text-3xl sm:text-4xl font-black text-[#5B16A6] font-display">
                ₹{selectedRoute.estimatedFare}
              </span>
              <span className="text-xs text-gray-500 font-medium ml-1">/ passenger seat</span>
            </div>

            <div className="mt-2 pt-2 border-t border-gray-100 text-xs text-gray-500 space-y-1">
              <div className="flex justify-between">
                <span>Avg. Volvo/AC Bus Fare:</span>
                <span className="line-through text-gray-400">₹{selectedRoute.busTrainFare}</span>
              </div>
              <div className="flex justify-between">
                <span>Commercial Taxi Rate:</span>
                <span className="line-through text-gray-400">₹{selectedRoute.estimatedFare * 4}</span>
              </div>
              <div className="flex justify-between font-bold text-[#00B936] pt-1">
                <span>You Save Approx:</span>
                <span>₹{selectedRoute.busTrainFare - selectedRoute.estimatedFare} / trip</span>
              </div>
            </div>
          </div>

          <button
            onClick={() => onNavigate('download')}
            className="mt-4 w-full py-3 bg-[#00B936] hover:bg-[#009c2e] text-white rounded-xl text-xs font-bold flex items-center justify-center gap-2 shadow-xs transition-transform active:scale-95 cursor-pointer"
          >
            <span>Book this route on App</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
