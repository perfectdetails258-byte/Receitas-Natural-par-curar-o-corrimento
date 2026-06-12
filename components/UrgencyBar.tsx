import React, { useState, useEffect } from 'react';

const UrgencyBar: React.FC = () => {
  const INITIAL_TIME = 10 * 60; // 10 minutes
  const RESTART_TIME = 15 * 60; // 15 minutes

  const [timeLeft, setTimeLeft] = useState<number>(INITIAL_TIME);

  useEffect(() => {
    const storedTime = localStorage.getItem('urgencyTimeLeft');
    const storedTimestamp = localStorage.getItem('urgencyTimestamp');
    
    let timeToSet = INITIAL_TIME;

    if (storedTime && storedTimestamp) {
      const timePassed = Math.floor((Date.now() - parseInt(storedTimestamp, 10)) / 1000);
      const remaining = parseInt(storedTime, 10) - timePassed;
      
      if (remaining > 0) {
        timeToSet = remaining;
      } else {
        timeToSet = RESTART_TIME;
      }
    }
    
    setTimeLeft(timeToSet);

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        const next = prev - 1;
        if (next <= 0) {
          return RESTART_TIME;
        }
        return next;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    localStorage.setItem('urgencyTimeLeft', timeLeft.toString());
    localStorage.setItem('urgencyTimestamp', Date.now().toString());
  }, [timeLeft]);

  const formatMins = (seconds: number) => {
    return Math.floor(seconds / 60).toString().padStart(2, '0');
  };

  const formatSecs = (seconds: number) => {
    return (seconds % 60).toString().padStart(2, '0');
  };

  return (
    <div className="w-full bg-[#E11620] text-white py-1 px-3 flex flex-row items-center justify-center gap-2 m-0 border-none">
      <span className="uppercase font-bold text-[10px] sm:text-xs tracking-[0.08em] whitespace-nowrap">
        Atenção: Esta oferta única expira em
      </span>
      <span className="text-sm sm:text-base font-black tracking-tight leading-none flex items-center space-x-0.5">
        <span>{formatMins(timeLeft)}</span>
        <span className="opacity-80 font-medium">:</span>
        <span>{formatSecs(timeLeft)}</span>
      </span>
    </div>
  );
};

export default UrgencyBar;
