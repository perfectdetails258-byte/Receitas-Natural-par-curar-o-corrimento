
import React, { useState, useEffect } from 'react';
import UrgencyBar from './components/UrgencyBar';
import Headline from './components/Headline';
import VSL from './components/VSL';
import EmotionalSection from './components/EmotionalSection';
import LogicalSection from './components/LogicalSection';
import RationalSection from './components/RationalSection';
import ReaffirmationSection from './components/ReaffirmationSection';
import Footer from './components/Footer';
import SocialProof from './components/SocialProof';

const App: React.FC = () => {
  const [showCTA, setShowCTA] = useState(false);

  // VSL strategy: Revelar botões após um tempo determinado (ex: 5 segundos para demo)
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowCTA(true);
    }, 5000); 
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col min-h-screen relative">
      {/* 1. Barra de Urgência */}
      <UrgencyBar />
      
      {/* 2. Headline + 3. Sub Headline */}
      <Headline />
      
      <main className="flex-grow">
        {/* 4. VSL */}
        <VSL isVisible={showCTA} />
        
        {/* 5. Emoção */}
        <EmotionalSection />
        
        {/* 6. Lógica */}
        <LogicalSection />
        
        {/* 7. Racional */}
        <RationalSection />
        
        {/* 8. Face-reafirmação */}
        <ReaffirmationSection />
      </main>
      
      <Footer />
      
      {/* Notificações de Prova Social */}
      <SocialProof />
    </div>
  );
};

export default App;
