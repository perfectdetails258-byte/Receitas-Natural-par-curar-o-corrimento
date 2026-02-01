
import React from 'react';

const Headline: React.FC = () => {
  return (
    <div className="bg-[#B91C1C] pt-6 pb-8 md:pt-10 md:pb-12 shadow-inner border-b border-black/10">
      <div className="max-w-4xl mx-auto px-6 text-center space-y-4">
        {/* Headline Principal */}
        <h1 className="text-2xl md:text-5xl font-extrabold text-white leading-tight uppercase tracking-tight">
          SOFRES DE CORRIMENTO E MAU CHEIRO?
        </h1>
        
        {/* Sub Headline */}
        <p className="text-sm md:text-xl text-white/90 font-medium max-w-2xl mx-auto leading-relaxed">
          Descubra as receitas tradicionais moçambicanas à base de chás e infusões naturais para cuidar da sua saúde íntima sem químicos agressivos.
        </p>
      </div>
    </div>
  );
};

export default Headline;
