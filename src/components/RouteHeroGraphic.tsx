import React, { useState } from 'react';
import { ShieldCheck, MapPin, Navigation, Play, Pause, Sparkles, CheckCircle2, Utensils, Coffee, Clock } from 'lucide-react';

export const RouteHeroGraphic: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(true);

  // SVG Highway Path Definition across Hyderabad -> Suryapet -> Vijayawada
  const highwayPath = "M 50,118 C 140,118 180,56 250,56 C 320,56 380,112 435,112";

  return (
    <div className="relative w-full max-w-xl mx-auto select-none" id="route-hero-illustration">
      {/* Background soft glow blobs */}
      <div className="absolute -top-10 -left-10 w-72 h-72 bg-[#5B16A6]/10 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute -bottom-10 -right-10 w-72 h-72 bg-[#00B936]/10 rounded-full blur-2xl pointer-events-none" />

      {/* Main Illustration Card */}
      <div className="relative bg-white/95 backdrop-blur-md rounded-3xl p-5 sm:p-7 border border-[#E7E3EB] shadow-xl shadow-purple-950/5 overflow-hidden">
        
        {/* Top Info Header */}
        <div className="flex items-center justify-between pb-3 border-b border-gray-100">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-[#F4EDF9] flex items-center justify-center text-[#5B16A6] shadow-xs">
              <Navigation className="w-5 h-5" />
            </div>
            <div>
              <p className="text-[11px] font-bold uppercase tracking-wider text-[#5B16A6]">
                Smart Intercity Corridor
              </p>
              <h4 className="text-sm font-bold text-gray-900">
                Hyderabad <span className="text-[#00B936]">⇄</span> Vijayawada (NH65)
              </h4>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              title={isPlaying ? "Pause car animation" : "Play car animation"}
              className="p-1.5 rounded-xl bg-gray-100 hover:bg-[#F4EDF9] text-gray-600 hover:text-[#5B16A6] transition-colors cursor-pointer text-xs flex items-center gap-1 font-medium"
            >
              {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
              <span className="text-[10px] font-bold hidden sm:inline">{isPlaying ? 'Pause' : 'Resume'}</span>
            </button>
            <div className="flex items-center gap-1.5 bg-[#E8FBF3] text-[#00B936] text-xs font-bold px-3 py-1.5 rounded-xl border border-[#00B936]/20">
              <ShieldCheck className="w-4 h-4" />
              <span>Verified Carpool</span>
            </div>
          </div>
        </div>

        {/* The Route Path SVG Graphic with Grounded Landmarks & Labels Below The Line */}
        <div className="relative py-2 my-1">
          <svg className="w-full h-56 overflow-visible" viewBox="0 0 480 168" fill="none">
            <defs>
              {/* Path ID for reference */}
              <path id="carpeHighway" d={highwayPath} />

              {/* Headlight Gradient */}
              <linearGradient id="headlightGlow" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#00B936" stopOpacity="0.55" />
                <stop offset="100%" stopColor="#00B936" stopOpacity="0" />
              </linearGradient>

              {/* Car Body Gradient */}
              <linearGradient id="carBodyGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#4A1089" />
                <stop offset="60%" stopColor="#5B16A6" />
                <stop offset="100%" stopColor="#6C1EBF" />
              </linearGradient>

              {/* Metallic Roof Highlight */}
              <linearGradient id="roofGleam" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
              </linearGradient>

              {/* Landmark Shading Gradients */}
              <linearGradient id="charminarBody" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#6B21A8" />
                <stop offset="100%" stopColor="#431407" />
              </linearGradient>

              <linearGradient id="charminarStone" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#7E22CE" />
                <stop offset="100%" stopColor="#4C1D95" />
              </linearGradient>

              <linearGradient id="goldFinial" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FDE047" />
                <stop offset="100%" stopColor="#D97706" />
              </linearGradient>

              <linearGradient id="foodPlazaGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#10B981" />
                <stop offset="100%" stopColor="#047857" />
              </linearGradient>

              <linearGradient id="templeGopuramGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#F59E0B" />
                <stop offset="50%" stopColor="#D97706" />
                <stop offset="100%" stopColor="#B45309" />
              </linearGradient>

              {/* Subtle Drop Shadow for Landmark Badges */}
              <filter id="softShadow" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="0" dy="2" stdDeviation="2.5" floodColor="#5B16A6" floodOpacity="0.12" />
              </filter>

              {/* Brake Light Pulse Filter */}
              <filter id="brakeGlow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="2.5" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* ========================================================================= */}
            {/* 1. POLISHED LANDMARK ILLUSTRATIONS (LOWERED CLOSER TO ROAD FOR HARMONY) */}
            {/* ========================================================================= */}

            {/* --- LANDMARK 1: ICONIC CHARMINAR (HYDERABAD) --- Lowered to y=68 */}
            <g id="charminar-landmark" transform="translate(50, 68)">
              {/* Circular Badge Canvas with Soft Border */}
              <circle cx="0" cy="0" r="25" fill="#FAF5FF" stroke="#E9D5FF" strokeWidth="1.5" filter="url(#softShadow)" />
              
              {/* Authentic Charminar Vector */}
              <g transform="translate(0, 5) scale(0.95)">
                {/* Stepped Granite Base */}
                <rect x="-18" y="6.5" width="36" height="2.5" rx="0.8" fill="#3B0764" />
                <rect x="-16" y="4.5" width="32" height="2" rx="0.5" fill="#4C1D95" />

                {/* Main Square Building Mass */}
                <rect x="-13" y="-12" width="26" height="17" rx="1" fill="url(#charminarStone)" />

                {/* Grand Qutb Shahi Pointed Central Arch */}
                <path
                  d="M -7,4.5 L -7,-1 Q -7,-7 0,-10 Q 7,-7 7,-1 L 7,4.5 Z"
                  fill="#FAF5FF"
                />
                {/* Inner Archway Depth */}
                <path
                  d="M -5.2,4.5 L -5.2,-0.5 Q -5.2,-5.5 0,-8 Q 5.2,-5.5 5.2,-0.5 L 5.2,4.5 Z"
                  fill="#2E1065"
                />

                {/* Double-Storey Upper Balcony / Gallery */}
                <rect x="-14" y="-13.5" width="28" height="2.2" rx="0.5" fill="#FAF5FF" />
                <rect x="-12" y="-17" width="24" height="3.5" rx="0.5" fill="#5B16A6" />
                {/* Miniature arched windows in upper gallery */}
                <circle cx="-7.5" cy="-15.2" r="0.9" fill="#FAF5FF" />
                <circle cx="-2.5" cy="-15.2" r="0.9" fill="#FAF5FF" />
                <circle cx="2.5" cy="-15.2" r="0.9" fill="#FAF5FF" />
                <circle cx="7.5" cy="-15.2" r="0.9" fill="#FAF5FF" />
                <rect x="-13" y="-18" width="26" height="1.2" rx="0.4" fill="#FAF5FF" />

                {/* --- 4 GRAND CORNER MINARETS --- */}
                {/* Minaret 1: Far Left Tower */}
                <g transform="translate(-14.5, 0)">
                  <rect x="-1.8" y="-23" width="3.6" height="27.5" rx="0.8" fill="#3B0764" />
                  {/* Fluted rings / balconies */}
                  <line x1="-2.4" y1="-7" x2="2.4" y2="-7" stroke="#FAF5FF" strokeWidth="0.8" />
                  <line x1="-2.4" y1="-14" x2="2.4" y2="-14" stroke="#FAF5FF" strokeWidth="0.8" />
                  <line x1="-2.4" y1="-20" x2="2.4" y2="-20" stroke="#FAF5FF" strokeWidth="0.8" />
                  {/* Bulbous Onion Dome + Spire */}
                  <ellipse cx="0" cy="-23" rx="2.5" ry="2" fill="url(#goldFinial)" />
                  <polygon points="0,-27.5 -1.2,-23.5 1.2,-23.5" fill="url(#goldFinial)" />
                </g>

                {/* Minaret 2: Far Right Tower */}
                <g transform="translate(14.5, 0)">
                  <rect x="-1.8" y="-23" width="3.6" height="27.5" rx="0.8" fill="#3B0764" />
                  {/* Fluted rings / balconies */}
                  <line x1="-2.4" y1="-7" x2="2.4" y2="-7" stroke="#FAF5FF" strokeWidth="0.8" />
                  <line x1="-2.4" y1="-14" x2="2.4" y2="-14" stroke="#FAF5FF" strokeWidth="0.8" />
                  <line x1="-2.4" y1="-20" x2="2.4" y2="-20" stroke="#FAF5FF" strokeWidth="0.8" />
                  {/* Bulbous Onion Dome + Spire */}
                  <ellipse cx="0" cy="-23" rx="2.5" ry="2" fill="url(#goldFinial)" />
                  <polygon points="0,-27.5 -1.2,-23.5 1.2,-23.5" fill="url(#goldFinial)" />
                </g>

                {/* Minaret 3 & 4: Inner Supporting Spires */}
                <rect x="-7.5" y="-20" width="1.6" height="7" fill="#4C1D95" />
                <circle cx="-6.7" cy="-20.5" r="1.1" fill="url(#goldFinial)" />

                <rect x="5.9" y="-20" width="1.6" height="7" fill="#4C1D95" />
                <circle cx="6.7" cy="-20.5" r="1.1" fill="url(#goldFinial)" />

                {/* Central Small Mosque Dome */}
                <path d="M -3.5,-18 Q 0,-21.5 3.5,-18 Z" fill="url(#goldFinial)" />
              </g>
            </g>


            {/* --- LANDMARK 2: SURYAPET FOOD COURT / RESTAURANT --- Lowered to y=20 */}
            <g id="suryapet-landmark" transform="translate(250, 20)">
              {/* Circular Badge Card */}
              <circle cx="0" cy="0" r="24" fill="#ECFDF5" stroke="#A7F3D0" strokeWidth="1.5" filter="url(#softShadow)" />

              {/* Food Plaza Vector Illustration */}
              <g transform="translate(0, 3) scale(0.92)">
                {/* Ground Platform */}
                <rect x="-16" y="8" width="32" height="2.5" rx="1" fill="#047857" />

                {/* Restaurant Building Facade */}
                <rect x="-13" y="-6" width="26" height="14" rx="1.5" fill="#1E1B4B" />

                {/* Modern Slanted Roof / Canopy */}
                <polygon points="-16,-6 0,-13 16,-6" fill="url(#foodPlazaGrad)" />
                <polygon points="-15,-6 0,-11.5 15,-6" fill="#34D399" opacity="0.4" />

                {/* Big Glass Windows with Warm Ambient Light */}
                <rect x="-10.5" y="-3" width="6.5" height="7" rx="1" fill="#FEF08A" opacity="0.9" />
                <line x1="-7.25" y1="-3" x2="-7.25" y2="4" stroke="#1E1B4B" strokeWidth="0.6" />
                <line x1="-10.5" y1="0.5" x2="-4" y2="0.5" stroke="#1E1B4B" strokeWidth="0.6" />

                {/* Glass Window 2 */}
                <rect x="4" y="-3" width="6.5" height="7" rx="1" fill="#FEF08A" opacity="0.9" />
                <line x1="7.25" y1="-3" x2="7.25" y2="4" stroke="#1E1B4B" strokeWidth="0.6" />
                <line x1="4" y1="0.5" x2="10.5" y2="0.5" stroke="#1E1B4B" strokeWidth="0.6" />

                {/* Central Entry Door */}
                <rect x="-2.5" y="-1" width="5" height="9" rx="0.8" fill="#10B981" />
                <circle cx="1.2" cy="3.5" r="0.6" fill="#FFFFFF" />

                {/* Steaming Coffee Cup Sign Badge on Roof */}
                <g transform="translate(0, -14)">
                  <circle cx="0" cy="0" r="5" fill="#FFFFFF" stroke="#059669" strokeWidth="1" />
                  {/* Cup */}
                  <path d="M -2,-1 L 2,-1 L 1.6,1.8 Q 0,2.8 -1.6,1.8 Z" fill="#5B16A6" />
                  <path d="M 2,-0.2 Q 3.2,-0.2 3.2,0.8 Q 3.2,1.6 1.8,1.6" stroke="#5B16A6" strokeWidth="0.6" fill="none" />
                  {/* Steam */}
                  <path d="M -0.8,-2 Q -1.2,-3 -0.8,-4" stroke="#D97706" strokeWidth="0.5" strokeLinecap="round" fill="none" />
                  <path d="M 0.8,-2 Q 0.4,-3 0.8,-4" stroke="#D97706" strokeWidth="0.5" strokeLinecap="round" fill="none" />
                </g>
              </g>
            </g>


            {/* --- LANDMARK 3: KANAKA DURGA TEMPLE GOPURAM (VIJAYAWADA) --- Lowered to y=64 */}
            <g id="vijayawada-landmark" transform="translate(435, 64)">
              {/* Circular Badge Card */}
              <circle cx="0" cy="0" r="25" fill="#FFFBEB" stroke="#FDE68A" strokeWidth="1.5" filter="url(#softShadow)" />

              {/* Temple Gopuram Vector */}
              <g transform="translate(0, 5) scale(0.92)">
                {/* Sacred Indrakeeladri Hill Base */}
                <path d="M -16,8 Q 0,4 16,8 L 16,11 L -16,11 Z" fill="#78350F" />

                {/* Tier 1 (Base Level) */}
                <rect x="-13" y="-1" width="26" height="9" rx="1" fill="url(#templeGopuramGrad)" />
                <path d="M -15,-1 L 15,-1 L 13,-3 L -13,-3 Z" fill="url(#goldFinial)" />
                {/* Temple Gateway Arch */}
                <path d="M -4,8 L -4,2.5 Q 0,0 4,2.5 L 4,8 Z" fill="#FFFBEB" />
                <path d="M -2.5,8 L -2.5,3.5 Q 0,1.5 2.5,3.5 L 2.5,8 Z" fill="#78350F" />

                {/* Tier 2 */}
                <rect x="-10" y="-9" width="20" height="6.5" rx="0.8" fill="url(#templeGopuramGrad)" />
                <path d="M -12,-9 L 12,-9 L 10.5,-11 L -10.5,-11 Z" fill="url(#goldFinial)" />
                {/* Carved Niche */}
                <rect x="-1.8" y="-7.5" width="3.6" height="3.5" rx="0.4" fill="#FFFBEB" />

                {/* Tier 3 */}
                <rect x="-7" y="-16" width="14" height="5.5" rx="0.8" fill="url(#templeGopuramGrad)" />
                <path d="M -9,-16 L 9,-16 L 7.5,-18 L -7.5,-18 Z" fill="url(#goldFinial)" />
                <circle cx="0" cy="-14" r="1.2" fill="#FFFBEB" />

                {/* Spire Peak / Shikharam */}
                <polygon points="0,-24 -5,-18 5,-18" fill="url(#goldFinial)" />

                {/* 3 Golden Kalashams (Sacred Temple Finials) */}
                <circle cx="-2.5,-23" r="1" fill="url(#goldFinial)" />
                <circle cx="0,-24.5" r="1.3" fill="url(#goldFinial)" />
                <circle cx="2.5,-23" r="1" fill="url(#goldFinial)" />

                {/* Saffron Temple Flag */}
                <path d="M 0,-24.5 L 0,-28.5 L 4.5,-26.5 L 0,-24.5" fill="#EA580C" />
              </g>
            </g>


            {/* ========================================================================= */}
            {/* 2. HIGHWAY ROAD & ROUTE PINS */}
            {/* ========================================================================= */}

            {/* Background Highway Track */}
            <path
              d={highwayPath}
              stroke="#F4EDF9"
              strokeWidth="20"
              strokeLinecap="round"
            />
            {/* Road Surface */}
            <path
              d={highwayPath}
              stroke="#5B16A6"
              strokeWidth="4.5"
              strokeLinecap="round"
            />
            {/* Dashed Center Route Line */}
            <path
              d={highwayPath}
              stroke="#00B936"
              strokeWidth="2"
              strokeDasharray="6 6"
              strokeLinecap="round"
            />

            {/* Origin Pin Marker (Hyderabad) */}
            <g transform="translate(50, 118)">
              <circle r="12" fill="#5B16A6" />
              <circle r="6" fill="#FFFFFF" />
              <circle r="2.5" fill="#5B16A6" />
            </g>

            {/* Intermediate En-Route Milestone Pin (Suryapet Stop) */}
            <g transform="translate(250, 56)">
              {/* Halos pulsing at stop - calm standard rate */}
              {isPlaying && (
                <circle r="15" fill="#00B936" opacity="0.3">
                  <animate attributeName="r" values="8;16;8" dur="2.4s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.45;0.12;0.45" dur="2.4s" repeatCount="indefinite" />
                </circle>
              )}
              <circle r="10" fill="#00B936" />
              <circle r="5" fill="#FFFFFF" />
              <circle r="2.5" fill="#00B936" />
            </g>

            {/* Destination Pin Marker (Vijayawada) */}
            <g transform="translate(435, 112)">
              <circle r="13" fill="#00B936" />
              <circle r="6.5" fill="#FFFFFF" />
              <circle r="3" fill="#00B936" />
            </g>


            {/* ========================================================================= */}
            {/* 3. HIGHWAY LABELS POSITIONED CLEARLY BELOW THE LINE */}
            {/* ========================================================================= */}

            {/* --- LABEL 1: HYDERABAD (BELOW ORIGIN PIN) --- */}
            <g id="label-hyderabad" transform="translate(50, 142)">
              <rect x="-34" y="-8" width="68" height="18" rx="9" fill="#5B16A6" filter="url(#softShadow)" />
              <text x="0" y="4" textAnchor="middle" fill="#FFFFFF" fontSize="8" fontWeight="800" letterSpacing="0.4" fontFamily="sans-serif">
                HYDERABAD
              </text>
            </g>

            {/* --- LABEL 2: SURYAPET (POSITIONED CLEARLY BELOW THE LINE) --- */}
            <g id="label-suryapet" transform="translate(250, 84)">
              <rect x="-38" y="-9" width="76" height="20" rx="10" fill="#00B936" filter="url(#softShadow)" />
              <rect x="-36" y="-7" width="72" height="16" rx="8" fill="#00962B" />
              <text x="0" y="4.5" textAnchor="middle" fill="#FFFFFF" fontSize="8" fontWeight="800" letterSpacing="0.4" fontFamily="sans-serif">
                SURYAPET
              </text>
            </g>

            {/* --- LABEL 3: VIJAYAWADA (BELOW DESTINATION PIN) --- */}
            <g id="label-vijayawada" transform="translate(435, 138)">
              <rect x="-36" y="-8" width="72" height="18" rx="9" fill="#5B16A6" filter="url(#softShadow)" />
              <text x="0" y="4" textAnchor="middle" fill="#FFFFFF" fontSize="8" fontWeight="800" letterSpacing="0.4" fontFamily="sans-serif">
                VIJAYAWADA
              </text>
            </g>


            {/* ========================================================================= */}
            {/* 4. ANIMATED CAR WITH PASSENGERS, STANDARD PACED HIGHWAY CRUISE (11s LOOP) */}
            {/* ========================================================================= */}
            <g className="car-vehicle-group">
              
              {/* --- MOTION PATH WITH NATURAL CRUISE & CLEAR HALT AT SURYAPET (~2.2s) --- */}
              {isPlaying ? (
                <animateMotion
                  path={highwayPath}
                  dur="11s"
                  repeatCount="indefinite"
                  rotate="auto"
                  keyPoints="0; 0.48; 0.48; 1; 1"
                  keyTimes="0; 0.38; 0.58; 0.90; 1"
                  calcMode="spline"
                  keySplines="0.45 0 0.25 1; 0 0 1 1; 0.45 0 0.25 1; 0 0 1 1"
                />
              ) : (
                <animateMotion
                  path={highwayPath}
                  dur="1s"
                  repeatCount="1"
                  rotate="auto"
                  keyPoints="0.48; 0.48"
                  keyTimes="0; 1"
                  fill="freeze"
                />
              )}

              {/* --- 1. DUST PUFF PARTICLES (Calm, gentle dissipation during cruise) --- */}
              <g id="dust-clouds" transform="translate(-16, 4)">
                {/* Dust Puff 1 */}
                <circle cx="0" cy="0" r="3" fill="#D3C4E3">
                  {isPlaying ? (
                    <>
                      <animate attributeName="cx" values="-2;-12;-22" dur="1.4s" repeatCount="indefinite" />
                      <animate attributeName="cy" values="0;-2;-5" dur="1.4s" repeatCount="indefinite" />
                      <animate attributeName="r" values="2;4;6.5" dur="1.4s" repeatCount="indefinite" />
                      {/* Active during movement, 0 opacity during Suryapet rest stop & destination pause */}
                      <animate
                        attributeName="opacity"
                        values="0.65; 0.65; 0; 0; 0.65; 0.65; 0; 0"
                        keyTimes="0; 0.36; 0.38; 0.58; 0.60; 0.88; 0.90; 1"
                        dur="11s"
                        repeatCount="indefinite"
                      />
                    </>
                  ) : (
                    <animate attributeName="opacity" values="0" dur="1s" fill="freeze" />
                  )}
                </circle>

                {/* Dust Puff 2 */}
                <circle cx="-4" cy="1" r="2.5" fill="#E7DCF2">
                  {isPlaying ? (
                    <>
                      <animate attributeName="cx" values="0;-14;-25" dur="1.4s" begin="0.4s" repeatCount="indefinite" />
                      <animate attributeName="cy" values="1;-1.5;-4" dur="1.4s" begin="0.4s" repeatCount="indefinite" />
                      <animate attributeName="r" values="1.8;3.5;6" dur="1.4s" begin="0.4s" repeatCount="indefinite" />
                      <animate
                        attributeName="opacity"
                        values="0.65; 0.65; 0; 0; 0.65; 0.65; 0; 0"
                        keyTimes="0; 0.36; 0.38; 0.58; 0.60; 0.88; 0.90; 1"
                        dur="11s"
                        repeatCount="indefinite"
                      />
                    </>
                  ) : (
                    <animate attributeName="opacity" values="0" dur="1s" fill="freeze" />
                  )}
                </circle>
              </g>

              {/* --- 2. HEADLIGHT CONE BEAM (Front Right) --- */}
              <polygon
                points="22,-4 44,-9 44,9 22,5"
                fill="url(#headlightGlow)"
              />

              {/* --- 3. CAR BODY (Sleek Sedan Silhouette) --- */}
              <path
                d="M -20,3 
                   L -20,-3 
                   Q -19,-5 -15,-6 
                   L -8,-12 
                   Q -5,-13 4,-13 
                   L 12,-13 
                   Q 15,-13 18,-6 
                   L 22,-4 
                   Q 24,-2 24,1 
                   L 24,4 
                   Q 24,5 21,5 
                   Q 19,2 14,2 
                   Q 9,2 7,5 
                   L -7,5 
                   Q -9,2 -14,2 
                   Q -19,2 -21,5 
                   Z"
                fill="url(#carBodyGrad)"
                stroke="#3E0B75"
                strokeWidth="0.8"
              />

              {/* Roof Glaze Highlight */}
              <path
                d="M -7,-12 L 11,-12 Q 13,-12 15,-8 L -5,-8 Z"
                fill="url(#roofGleam)"
              />

              {/* --- 4. WINDOWS (Front & Back Glass) --- */}
              {/* Rear Window Glass */}
              <path
                d="M -13,-5.5 L -7,-11 Q -6,-11.5 -2,-11.5 L -2,-4.5 L -12,-4.5 Z"
                fill="#E8FBF3"
                opacity="0.9"
              />

              {/* Front Window Glass */}
              <path
                d="M 1,-4.5 L 1,-11.5 Q 4,-11.5 9,-11.5 L 14.5,-6 Q 15.5,-5 16,-4.5 Z"
                fill="#E8FBF3"
                opacity="0.9"
              />

              {/* Central B-Pillar */}
              <rect x="-1" y="-12" width="2" height="7.5" fill="#3E0B75" />

              {/* --- 5. TWO PASSENGERS (Heads & Upper Body Visible in Windows) --- */}
              {/* PASSENGER 1: Rear Seat Commuter */}
              <g id="rear-passenger" transform="translate(-6.5, -4.5)">
                <path d="M -4.5,0.5 Q 0,-2.5 4.5,0.5 Z" fill="#00B936" />
                <rect x="-1" y="-2" width="2" height="2" fill="#F8D7B0" />
                <circle cx="0" cy="-3.5" r="2.3" fill="#F8D7B0" />
                <path d="M -2.3,-3.8 Q 0,-6.2 2.3,-3.8 Q 1.5,-4.5 -0.5,-4.8 Z" fill="#2C3E50" />
              </g>

              {/* PASSENGER 2: Front Driver */}
              <g id="front-passenger" transform="translate(6.5, -4.5)">
                <path d="M -4.5,0.5 Q 0,-2.5 4.5,0.5 Z" fill="#5B16A6" />
                <rect x="-1" y="-2" width="2" height="2" fill="#F3C69D" />
                <circle cx="0" cy="-3.5" r="2.3" fill="#F3C69D" />
                <path d="M -2.4,-3.8 Q 0,-6.4 2.4,-3.8 Q 1.2,-5 -0.8,-5.2 Z" fill="#1A1A1A" />
                {/* Steering wheel */}
                <circle cx="5" cy="-0.5" r="1.2" fill="#333333" />
                <path d="M 4,-2 Q 6,-0.5 4,1" stroke="#222" strokeWidth="0.8" fill="none" />
              </g>

              {/* --- 6. DETAILS: Mirrors, Handles & Front Light --- */}
              <rect x="13.5" y="-5" width="2.2" height="1.6" rx="0.7" fill="#00B936" />
              <rect x="-6" y="-1.5" width="3" height="0.8" rx="0.4" fill="#FFFFFF" opacity="0.8" />
              <rect x="4" y="-1.5" width="3" height="0.8" rx="0.4" fill="#FFFFFF" opacity="0.8" />
              <path d="M 21.5,-2.5 L 23.5,-1 Q 24,1 23.5,3 L 21.5,3 Z" fill="#00B936" />

              {/* --- 7. TAIL LIGHT / BRAKE LIGHT (Steady, clear deceleration indicator) --- */}
              <g>
                <circle cx="-19" cy="0" r="5" fill="#FF1E40" filter="url(#brakeGlow)">
                  {isPlaying ? (
                    <animate
                      attributeName="opacity"
                      values="0.25; 0.25; 0.9; 0.9; 0.25; 0.25; 0.9; 0.25"
                      keyTimes="0; 0.36; 0.39; 0.58; 0.61; 0.88; 0.92; 1"
                      dur="11s"
                      repeatCount="indefinite"
                    />
                  ) : (
                    <animate attributeName="opacity" values="0.9" dur="1s" fill="freeze" />
                  )}
                </circle>

                <path
                  d="M -19.5,-2 L -18,-2 L -18,2 L -19.5,2 Q -20.5,0 -19.5,-2 Z"
                  fill="#FF3838"
                >
                  {isPlaying ? (
                    <animate
                      attributeName="fill"
                      values="#FF4757; #FF4757; #FF0022; #FF0022; #FF4757; #FF4757; #FF0022; #FF4757"
                      keyTimes="0; 0.36; 0.39; 0.58; 0.61; 0.88; 0.92; 1"
                      dur="11s"
                      repeatCount="indefinite"
                    />
                  ) : (
                    <animate attributeName="fill" values="#FF0022" dur="1s" fill="freeze" />
                  )}
                </path>
              </g>

              {/* --- 8. WHEELS & SPINNING RIMS --- */}
              <g transform="translate(-14, 4.5)">
                <circle r="4.2" fill="#1C1B20" />
                <circle r="2.4" fill="#E2E8F0" />
                <circle r="1" fill="#5B16A6" />
                <line x1="-2" y1="0" x2="2" y2="0" stroke="#718096" strokeWidth="0.7" />
                <line x1="0" y1="-2" x2="0" y2="2" stroke="#718096" strokeWidth="0.7" />
              </g>

              <g transform="translate(13, 4.5)">
                <circle r="4.2" fill="#1C1B20" />
                <circle r="2.4" fill="#E2E8F0" />
                <circle r="1" fill="#5B16A6" />
                <line x1="-2" y1="0" x2="2" y2="0" stroke="#718096" strokeWidth="0.7" />
                <line x1="0" y1="-2" x2="0" y2="2" stroke="#718096" strokeWidth="0.7" />
              </g>
            </g>
          </svg>

          {/* Floating Waypoint Status Information Below The Graphic */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2.5 pt-3 px-1 text-xs">
            {/* Origin Card */}
            <div className="bg-white shadow-xs border border-gray-200 rounded-xl px-3 py-2 flex items-center gap-2.5 w-full sm:w-auto">
              <span className="w-3 h-3 rounded-full bg-[#5B16A6] flex-shrink-0" />
              <div>
                <p className="text-[10px] text-gray-500 font-medium leading-none">Origin Hub</p>
                <p className="text-xs font-bold text-gray-900 mt-0.5">Charminar / Gachibowli</p>
              </div>
            </div>

            {/* Mid Stop Card */}
            <div className="bg-[#ECFDF5] border border-[#00B936]/30 rounded-xl px-3.5 py-2 flex items-center gap-2.5 shadow-xs w-full sm:w-auto">
              <Utensils className="w-4 h-4 text-[#00B936] flex-shrink-0" />
              <div>
                <p className="text-[10px] text-[#00B936] font-bold leading-none flex items-center gap-1">
                  <Clock className="w-2.5 h-2.5" /> 10-Min Highway Halt
                </p>
                <p className="text-xs font-bold text-gray-900 mt-0.5">Suryapet Food Plaza</p>
              </div>
            </div>

            {/* Destination Card */}
            <div className="bg-white shadow-xs border border-gray-200 rounded-xl px-3 py-2 flex items-center gap-2.5 w-full sm:w-auto">
              <span className="w-3 h-3 rounded-full bg-[#00B936] flex-shrink-0" />
              <div>
                <p className="text-[10px] text-gray-500 font-medium leading-none">Destination</p>
                <p className="text-xs font-bold text-gray-900 mt-0.5">Kanaka Durga / Benz Circle</p>
              </div>
            </div>
          </div>
        </div>

        {/* Live Status Floating Badges */}
        <div className="grid grid-cols-3 gap-3 pt-4 mt-2 border-t border-gray-100 bg-[#F8F7FA] -mx-5 sm:-mx-7 -mb-5 sm:-mb-7 p-4 rounded-b-3xl">
          <div className="text-center">
            <p className="text-[11px] text-gray-500 font-medium">Calculated Fare</p>
            <p className="text-sm font-black text-[#5B16A6]">₹480 <span className="text-[10px] text-gray-400 font-normal">/ seat</span></p>
          </div>
          <div className="text-center border-x border-gray-200">
            <p className="text-[11px] text-gray-500 font-medium">Seating Comfort</p>
            <p className="text-xs font-bold text-[#00B936] flex items-center justify-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" /> No Middle Seat
            </p>
          </div>
          <div className="text-center">
            <p className="text-[11px] text-gray-500 font-medium">Luggage Allotment</p>
            <p className="text-xs font-bold text-gray-800">1 Trolley Reserved</p>
          </div>
        </div>
      </div>
    </div>
  );
};
