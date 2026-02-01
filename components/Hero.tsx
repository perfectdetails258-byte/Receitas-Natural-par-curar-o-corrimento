
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="bg-[#FAF9F6] pt-8 pb-12 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-xl md:text-3xl font-bold text-[#2D5A27] mb-8">
          Existe algo que pode te ajudar!
        </h2>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-10">
          <div className="w-full md:w-1/2 relative">
            <div className="bg-white p-4 rounded-3xl shadow-xl transform -rotate-2 border border-gray-100">
              <img 
                src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800" 
                alt="Saúde e Bem-estar Natural" 
                className="rounded-2xl w-full h-64 object-cover"
              />
              <div className="absolute -top-4 -right-4 bg-[#B91C1C] text-white font-bold py-4 px-4 rounded-full shadow-lg transform rotate-12 border-4 border-white">
                APENAS <br/> 99 MT
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2 text-left space-y-4">
            <p className="text-lg text-gray-700 font-light leading-relaxed">
              Muita gente passa por desconfortos íntimos e não sabe por onde começar para melhorar.
            </p>
            <p className="text-lg text-gray-700 font-light leading-relaxed">
              Pensando nisso, reunimos <span className="font-bold text-[#2D5A27]">receitas tradicionais moçambicanas</span>, usadas há gerações, que podem ajudar no alívio do corrimento, mau odor e irritação.
            </p>
            <div className="bg-[#E7F3E5] p-4 rounded-xl border-l-4 border-[#2D5A27]">
              <p className="text-sm font-semibold text-[#2D5A27]">
                Ingredientes naturais e acessíveis que encontras em qualquer mercado.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
