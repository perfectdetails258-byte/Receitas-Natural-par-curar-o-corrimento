
import React from 'react';

const LogicalSection: React.FC = () => {
  return (
    <section className="py-20 px-6 bg-[#FAF9F6]">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-[#2D5A27] mb-12 uppercase tracking-wide">Por que o problema persiste?</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-sm border-t-4 border-red-400">
            <h3 className="text-xl font-bold text-gray-800 mb-4">O problema não é você</h3>
            <p className="text-gray-600 leading-relaxed">
              O problema é que muitos produtos industriais desequilibram a flora íntima, piorando o corrimento e o odor. Sabonetes perfumados e remédios agressivos muitas vezes matam as bactérias boas que nos protegem.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-2xl shadow-sm border-t-4 border-[#2D5A27]">
            <h3 className="text-xl font-bold text-[#2D5A27] mb-4">A Sabedoria Ancestral</h3>
            <p className="text-gray-600 leading-relaxed">
              Receitas tradicionais e naturais ajudam a restaurar o equilíbrio do corpo, em vez de agredi-lo. Nossos ancestrais em Moçambique já utilizavam chás medicinais específicos para curar de dentro para fora.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogicalSection;
