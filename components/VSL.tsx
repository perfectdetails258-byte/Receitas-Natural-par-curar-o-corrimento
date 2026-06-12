
import React, { useEffect } from 'react';

interface VSLProps {
  isVisible?: boolean;
}

const VSL: React.FC<VSLProps> = ({ isVisible = true }) => {
  useEffect(() => {
    const scriptId = 'smartplayer-sdk-v4';
    if (!document.getElementById(scriptId)) {
      const s = document.createElement("script");
      s.id = scriptId;
      s.src = "https://scripts.converteai.net/lib/js/smartplayer-wc/v4/sdk.js";
      s.async = true;
      document.head.appendChild(s);
    }
  }, []);

  return (
    <section className="pt-6 md:pt-10 pb-12 px-4 md:px-6 bg-[#FAF9F6]">
      <div className="max-w-4xl mx-auto">
        {/* SmartPlayer VSL Container */}
        <div id="ifr_6a2b3a32e2fcee65f7f19ef5_wrapper" style={{ margin: '0 auto', width: '100%' }}>
          <div
            id="ifr_6a2b3a32e2fcee65f7f19ef5_aspect"
            style={{ position: 'relative', paddingTop: '56.25%' }}
          >
            <iframe
              frameBorder={0}
              allowFullScreen
              id="ifr_6a2b3a32e2fcee65f7f19ef5"
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
              referrerPolicy="origin"
              src="about:blank"
              onLoad={(e) => {
                const iframe = e.currentTarget;
                iframe.onload = null;
                const search = window.location.search || '?';
                iframe.src =
                  'https://scripts.converteai.net/f1e055dd-5317-4742-95ea-187e03fffcf2/players/6a2b3a32e2fcee65f7f19ef5/v4/embed.html' +
                  search +
                  '&vl=' +
                  encodeURIComponent(window.location.href);
              }}
            />
          </div>
        </div>

        <div className="mt-6 flex flex-col items-center justify-center space-y-4 text-center">
          <p className="flex items-center text-[#2D5A27] font-semibold text-base">
            <span className="mr-2 text-xl">🔊</span> Ative o som — essa informação pode mudar a sua vida
          </p>

          {/* Botão de Compra embaixo da VSL (Revelado conforme script) */}
          <div className={`w-full max-w-lg transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-95 pointer-events-none'}`}>
            <div className="bg-white p-6 rounded-3xl shadow-xl border-2 border-[#E7F3E5] flex flex-col items-center">
              <div className="flex items-center space-x-3 mb-4">
                <span className="text-[#B91C1C] font-black text-4xl">99 MT</span>
                <span className="text-gray-400 line-through text-sm italic">500 MT</span>
              </div>

              <button className="w-full py-5 px-8 bg-[#2D5A27] text-white font-black text-xl rounded-2xl shadow-[0_10px_20px_rgba(45,90,39,0.3)] hover:bg-[#1b3a18] active:scale-95 transition-all uppercase tracking-wider mb-4 animate-bounce">
                Quero Acessar o Ebook Agora
              </button>

              <div className="flex items-center space-x-4 opacity-80">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center text-[8px] text-white font-bold">M-Pesa</div>
                  <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-[8px] text-white font-bold italic">e-Mola</div>
                </div>
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-none text-left">Pagamento via M-Pesa<br />e e-Mola disponível</span>
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-2 text-gray-400 text-xs bg-white px-3 py-1 rounded-full shadow-sm">
            <span className="h-2 w-2 bg-green-500 rounded-full animate-pulse"></span>
            <span>+2.457 mulheres assistindo em Moçambique agora</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VSL;
