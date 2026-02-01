
import React from 'react';

interface CTAProps {
  isVisible: boolean;
}

const CTASection: React.FC<CTAProps> = ({ isVisible }) => {
  if (!isVisible) return null;

  return (
    <section id="cta" className="py-16 px-6 bg-[#E7F3E5]">
      <div className="max-w-3xl mx-auto text-center">
        <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl border border-[#2D5A27]/10">
          <h2 className="text-2xl md:text-4xl font-black text-[#2D5A27] mb-6 leading-tight uppercase">
            Recupera a tua Confiança Hoje!
          </h2>
          
          <div className="mb-10 bg-[#FAF9F6] p-6 rounded-2xl border border-dashed border-[#2D5A27]/30">
             <p className="text-gray-500 line-through text-sm mb-1">Preço Normal: 500 MT</p>
             <div className="flex flex-col items-center">
                <span className="text-[#B91C1C] font-black text-5xl md:text-6xl mb-2">99 MT</span>
                <span className="text-xs font-bold text-[#2D5A27] uppercase bg-[#E7F3E5] px-3 py-1 rounded-full">
                  Promoção de Lançamento
                </span>
             </div>
          </div>

          <button className="w-full py-6 px-8 bg-[#2D5A27] text-white font-black text-xl md:text-2xl rounded-2xl shadow-xl hover:bg-[#1b3a18] transform hover:-translate-y-1 active:translate-y-0 transition-all mb-8 uppercase tracking-widest animate-pulse">
            Quero Acessar as Receitas Agora
          </button>

          <div className="flex flex-col items-center space-y-4">
            <p className="text-sm font-semibold text-gray-600 uppercase tracking-widest">Aceitamos Pagamentos:</p>
            <div className="flex items-center space-x-6">
              {/* M-Pesa Style Label */}
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-xs">M-Pesa</div>
              </div>
              {/* e-Mola Style Label */}
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-xs italic">e-Mola</div>
              </div>
            </div>
            <p className="text-[10px] text-gray-400 mt-4">Compra segura e acesso digital imediato após confirmação.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
