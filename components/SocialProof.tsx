
import React, { useState, useEffect } from 'react';

interface Notification {
  name: string;
  city: string;
  phone: string;
}

const customers = [
  { name: "Ana M.", city: "Maputo" },
  { name: "Maria S.", city: "Matola" },
  { name: "Joana C.", city: "Beira" },
  { name: "Fátima L.", city: "Nampula" },
  { name: "Rosa A.", city: "Chimoio" },
  { name: "Beatriz N.", city: "Xai-Xai" },
  { name: "Helena J.", city: "Tete" },
  { name: "Luísa B.", city: "Quelimane" },
  { name: "Sílvia K.", city: "Inhambane" },
  { name: "Zuleika P.", city: "Pemba" }
];

const SocialProof: React.FC = () => {
  const [currentNotification, setCurrentNotification] = useState<Notification | null>(null);
  const [visible, setVisible] = useState(false);

  const generateRandomPhone = () => {
    const prefixes = ['82', '84', '85', '86', '87'];
    const prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
    const lastDigits = Math.floor(Math.random() * 90 + 10);
    return `+258 ${prefix}xxxxxx${lastDigits}`;
  };

  const showNextNotification = () => {
    const customer = customers[Math.floor(Math.random() * customers.length)];
    setCurrentNotification({
      ...customer,
      phone: generateRandomPhone()
    });
    setVisible(true);

    // Hide after 5 seconds
    setTimeout(() => {
      setVisible(false);
    }, 5000);
  };

  useEffect(() => {
    // Initial delay
    const initialTimer = setTimeout(showNextNotification, 3000);
    
    // Interval every 15 seconds
    const interval = setInterval(showNextNotification, 15000);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(interval);
    };
  }, []);

  if (!currentNotification) return null;

  return (
    <div 
      className={`fixed bottom-4 left-4 z-[60] transition-all duration-500 transform ${
        visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0 pointer-events-none'
      }`}
    >
      <div className="bg-white border border-gray-100 shadow-2xl rounded-2xl p-3 md:p-4 flex items-center space-x-3 max-w-[280px] md:max-w-xs">
        <div className="flex-shrink-0">
          <div className="w-10 h-10 bg-[#E7F3E5] rounded-full flex items-center justify-center">
            <svg className="w-6 h-6 text-[#2D5A27]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </div>
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-bold text-gray-900 truncate">
            {currentNotification.name} de {currentNotification.city}
          </p>
          <p className="text-xs text-gray-500 mb-1">
            ({currentNotification.phone})
          </p>
          <p className="text-xs font-medium text-[#2D5A27]">
            comprou o eBook
          </p>
        </div>
        <div className="flex-shrink-0 flex items-start">
          <div className="bg-green-100 p-1 rounded-full">
            <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialProof;
