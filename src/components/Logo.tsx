import React from 'react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showTagline?: boolean;
  className?: string;
  onClick?: () => void;
}

export const Logo: React.FC<LogoProps> = ({
  size = 'md',
  showTagline = false,
  className = '',
  onClick,
}) => {
  const sizeClasses = {
    sm: 'text-xl',
    md: 'text-2xl sm:text-3xl',
    lg: 'text-3xl sm:text-4xl',
    xl: 'text-4xl sm:text-5xl',
  };

  const dotSizes = {
    sm: 'w-2 h-2',
    md: 'w-2.5 h-2.5',
    lg: 'w-3 h-3',
    xl: 'w-3.5 h-3.5',
  };

  return (
    <div
      onClick={onClick}
      className={`inline-flex flex-col select-none ${onClick ? 'cursor-pointer' : ''} ${className}`}
      id="brand-logo"
    >
      <div className="flex items-center gap-1">
        {/* Route Icon Emblem */}
        <div className="relative flex items-center justify-center mr-1">
          <div className="w-8 h-8 rounded-xl bg-[#5B16A6] flex items-center justify-center shadow-sm">
            <svg
              className="w-5 h-5 text-white"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.5 2.8C2.1 11.2 2 11.7 2 12.2V16c0 .6.4 1 1 1h2" />
              <circle cx="7" cy="17" r="2" />
              <path d="M9 17h6" />
              <circle cx="17" cy="17" r="2" />
            </svg>
          </div>
          {/* Green dot representing destination */}
          <span className={`absolute -top-1 -right-1 ${dotSizes[size]} bg-[#00B936] rounded-full ring-2 ring-white`} />
        </div>

        {/* Wordmark: Car (#5B16A6) + Pe (#00B936) */}
        <span className={`font-black tracking-tight font-display flex items-baseline ${sizeClasses[size]}`}>
          <span className="text-[#5B16A6]">Car</span>
          <span className="text-[#00B936]">Pe</span>
        </span>
      </div>

      {showTagline && (
        <span className="text-[11px] font-semibold tracking-wider text-[#5B16A6]/80 uppercase mt-0.5 font-sans">
          Smart <span className="text-[#00B936]">•</span> Social <span className="text-[#00B936]">•</span> Trusted
        </span>
      )}
    </div>
  );
};
