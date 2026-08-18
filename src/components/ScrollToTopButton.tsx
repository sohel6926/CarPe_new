import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronUp, Car } from 'lucide-react';

export const ScrollToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setScrollProgress(progress);
      setIsVisible(scrollTop > 280);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.6, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 20 }}
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.95 }}
          onClick={scrollToTop}
          id="scroll-to-top-btn"
          title="Return to top of page"
          className="fixed bottom-20 sm:bottom-20 right-5 sm:right-6 z-50 w-11 h-11 rounded-full bg-white border-2 border-purple-100 text-[#5B16A6] shadow-xl shadow-purple-950/20 flex items-center justify-center cursor-pointer group hover:bg-[#5B16A6] hover:text-white hover:border-[#5B16A6] transition-all duration-200"
        >
          {/* Circular Progress Ring */}
          <svg className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none" viewBox="0 0 36 36">
            <circle
              cx="18"
              cy="18"
              r="15"
              fill="none"
              stroke="#F4EDF9"
              strokeWidth="2.5"
            />
            <circle
              cx="18"
              cy="18"
              r="15"
              fill="none"
              stroke="#00B936"
              strokeWidth="2.5"
              strokeDasharray={94.2}
              strokeDashoffset={94.2 - (94.2 * scrollProgress) / 100}
              strokeLinecap="round"
              className="transition-all duration-150"
            />
          </svg>

          <ChevronUp className="w-5 h-5 relative z-10 group-hover:-translate-y-0.5 transition-transform" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};
