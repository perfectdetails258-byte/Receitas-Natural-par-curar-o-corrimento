
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 px-6 bg-[#FAF9F6] border-t border-gray-200">
      <div className="max-w-6xl mx-auto flex flex-col items-center space-y-6">
        <div className="flex items-center space-x-2">
          <div className="bg-[#2D5A27] w-8 h-8 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold">S</span>
          </div>
          <span className="text-xl font-bold text-[#2D5A27] tracking-tight">Segredos Naturais</span>
        </div>
        
        <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
          <a href="#" className="hover:text-[#2D5A27]">Termos de Uso</a>
          <a href="#" className="hover:text-[#2D5A27]">Políticas de Privacidade</a>
          <a href="#" className="hover:text-[#2D5A27]">Contato</a>
        </div>
        
        <p className="text-xs text-gray-400 text-center max-w-lg leading-relaxed">
          Este site não é afiliado ao Facebook ou a qualquer entidade do Facebook. Uma vez que você sai do Facebook, a responsabilidade não é deles, mas sim do nosso site. Fazemos todos os esforços para indicar claramente e mostrar provas reais.
        </p>
        
        <div className="pt-6 text-xs text-gray-400 uppercase tracking-widest">
          &copy; {new Date().getFullYear()} Segredos Naturais Moçambicanos. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
