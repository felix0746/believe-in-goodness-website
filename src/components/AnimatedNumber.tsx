'use client';

import { useEffect, useState } from 'react';

interface AnimatedNumberProps {
  end: number;
  duration?: number;
}

const AnimatedNumber = ({ end, duration = 2000 }: AnimatedNumberProps) => {
  const [currentNumber, setCurrentNumber] = useState(0);

  useEffect(() => {
    let startTime: number | null = null;
    
    const animateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const progressFraction = Math.min(progress / duration, 1);
      const nextNumber = Math.floor(progressFraction * end);
      
      setCurrentNumber(nextNumber);

      if (progress < duration) {
        requestAnimationFrame(animateCount);
      } else {
        setCurrentNumber(end);
      }
    };

    const animationFrameId = requestAnimationFrame(animateCount);

    return () => cancelAnimationFrame(animationFrameId);
  }, [end, duration]);

  return <span>{currentNumber.toLocaleString()}</span>;
};

export default AnimatedNumber;
