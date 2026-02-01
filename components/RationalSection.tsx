
import React from 'react';

const RationalSection: React.FC = () => {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#2D5A27]">Tudo o que precisas num só lugar</h2>
          <p className="text-gray-500 mt-2">Prático, direto e com resultados reais.</p>
        </div>

        <div className="bg-[#FAF9F6] rounded-[3rem] p-8 md:p-12 shadow-sm border border-gray-100">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Ebook Mockup */}
            <div className="relative">
              <div className="bg-[#2D5A27] rounded-2xl p-6 text-white aspect-[3/4] flex flex-col justify-between shadow-2xl transform rotate-3 relative z-10">
                <div>
                  <div className="text-xs font-bold uppercase tracking-widest opacity-80 mb-2">Manual Digital</div>
                  <h3 className="text-2xl font-bold leading-tight uppercase">Saúde Íntima Tradicional</h3>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="bg-white/20 px-2 py-1 rounded text-[10px] font-bold">PDF DIGITAL</span>
                  <span className="bg-white/20 px-2 py-1 rounded text-[10px] font-bold">SMARTPHONE</span>
                </div>
              </div>
              <div className="absolute top-4 -left-4 bg-gray-200 rounded-2xl w-full h-full -z-10 transform -rotate-3"></div>
            </div>

            <div className="space-y-6">
              <ul className="space-y-4">
                {[
                  "Chás e infusões tradicionais",
                  "Banhos de assento naturais",
                  "Ingredientes fáceis de encontrar",
                  "Passo a passo simples de preparar",
                  "Frequência correta de uso"
                ].map((item, i) => (
                  <li key={i} className="flex items-center space-x-3 text-gray-700">
                    <svg className="w-5 h-5 text-[#2D5A27]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-6 border-t border-gray-200">
                <div className="flex items-center space-x-4 mb-2">
                  <span className="text-4xl font-black text-[#B91C1C]">99 MT</span>
                  <span className="text-sm text-gray-400 line-through">500 MT</span>
                </div>
                <p className="text-xs text-gray-400 mb-6 uppercase tracking-widest">Acesso Imediato via M-Pesa / e-Mola</p>
                
                <button className="w-full py-4 bg-[#2D5A27] text-white font-bold rounded-xl shadow-lg hover:bg-green-800 transition-colors uppercase">
                  Garantir Meu Acesso
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RationalSection;
