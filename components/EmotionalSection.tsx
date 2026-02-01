
import React from 'react';

const EmotionalSection: React.FC = () => {
  return (
    <section className="py-16 px-6 bg-white border-y border-gray-100">
      <div className="max-w-3xl mx-auto">
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <h3 className="text-2xl font-bold text-[#2D5A27]">Sentes-te desconfortável no teu dia-a-dia?</h3>
            <p className="text-gray-600 italic">"Muitas mulheres sofrem em silêncio por vergonha..."</p>
          </div>

          <div className="grid gap-4">
            {[
              "Vergonha de estar perto de outras pessoas",
              "Insegurança nos momentos de intimidade",
              "Desconforto constante e irritação na zona íntima",
              "Gastar dinheiro com remédios que não resolvem"
            ].map((item, i) => (
              <div key={i} className="flex items-center space-x-3 p-4 bg-[#FAF9F6] rounded-lg border border-gray-100">
                <svg className="w-5 h-5 text-red-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>

          <div className="bg-[#B91C1C] text-white p-6 rounded-2xl text-center shadow-lg">
            <h4 className="text-xl font-bold mb-2 uppercase">Não tem de ser assim!</h4>
            <p className="text-sm opacity-90">
              Descobre as receitas moçambicanas que podem ajudar-te a aliviar o corrimento e o desconforto íntimo de uma vez por todas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmotionalSection;
