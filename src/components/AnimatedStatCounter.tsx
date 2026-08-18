import React, { useEffect, useRef, useState } from 'react';

interface AnimatedStatCounterProps {
  value: string;
}

export const AnimatedStatCounter: React.FC<AnimatedStatCounterProps> = ({ value }) => {
  const [displayValue, setDisplayValue] = useState<string>('0');
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef<HTMLParagraphElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.15 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasAnimated) return;

    let targetNum = 0;
    let isDecimal = false;
    let suffix = '';

    if (value.includes('/')) {
      // e.g. "4.8 / 5"
      const parts = value.split('/');
      targetNum = parseFloat(parts[0].trim());
      isDecimal = true;
      suffix = ` / ${parts[1].trim()}`;
    } else {
      // e.g. "50,000+" or "120+" or "250,000+"
      const cleanStr = value.replace(/[^0-9.]/g, '');
      targetNum = parseFloat(cleanStr);
      if (value.includes('+')) {
        suffix = '+';
      }
    }

    const duration = 1800; // ms
    const startTime = performance.now();

    const updateCounter = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out quartic for smooth deceleration
      const easeOut = 1 - Math.pow(1 - progress, 4);
      const currentNum = targetNum * easeOut;

      if (isDecimal) {
        setDisplayValue(`${currentNum.toFixed(1)}${suffix}`);
      } else {
        const rounded = Math.floor(currentNum);
        setDisplayValue(`${rounded.toLocaleString('en-IN')}${suffix}`);
      }

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      } else {
        setDisplayValue(value);
      }
    };

    requestAnimationFrame(updateCounter);
  }, [hasAnimated, value]);

  return (
    <p
      ref={elementRef}
      className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-display tracking-tight transition-all duration-300"
    >
      {hasAnimated ? displayValue : '0' + (value.includes('+') ? '+' : value.includes('/') ? ' / 5' : '')}
    </p>
  );
};
