
import React, { useState, useEffect } from 'react';

const UrgencyBar: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState(600); // 10 minutes

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="sticky top-0 z-50 bg-[#B91C1C] text-white py-2 px-4 text-center font-bold shadow-md">
      <div className="max-w-4xl mx-auto flex items-center justify-center space-x-2 text-xs md:text-sm uppercase tracking-wider">
        <span className="animate-pulse">⚠️</span>
        <span>Apenas 99 MT - Oferta Expira em:</span>
        <span className="underline">{formatTime(timeLeft)}</span>
      </div>
    </div>
  );
};

export default UrgencyBar;
