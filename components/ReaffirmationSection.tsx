
import React from 'react';

const ReaffirmationSection: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 leading-tight">
          Você tem duas escolhas agora...
        </h2>
        <div className="space-y-8 text-left text-lg text-gray-600 font-light">
          <p>
            1. Você pode continuar tentando soluções químicas que não funcionam e que agridem seu corpo, vendo o problema voltar a cada mês.
          </p>
          <div className="flex items-center justify-center py-4">
             <div className="h-px bg-gray-200 flex-grow"></div>
             <span className="px-4 text-gray-400 font-bold italic">OU</span>
             <div className="h-px bg-gray-200 flex-grow"></div>
          </div>
          <p className="text-gray-800 font-medium bg-[#E7F3E5] p-6 rounded-2xl border-l-4 border-[#2D5A27]">
            2. Você pode aprender agora receitas naturais milenares que cuidam da sua saúde íntima com respeito ao seu corpo, recuperando sua confiança e liberdade.
          </p>
        </div>
        

      </div>
    </section>
  );
};

export default ReaffirmationSection;
