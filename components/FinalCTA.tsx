
import React from 'react';
import { useApp } from '../App';

const FinalCTA: React.FC = () => {
  const { setIsBookingOpen, theme, t } = useApp();

  const scrollToDownload = () => {
    const element = document.getElementById('app-download');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className={`py-24 transition-colors ${theme === 'dark' ? 'bg-slate-950' : 'bg-slate-50'} relative overflow-hidden`}>
      <div className="container mx-auto px-4 md:px-8 relative z-10 text-center space-y-8">
        <h2 className={`text-4xl md:text-7xl font-black leading-tight ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
          {t.hero.title} <br /> <span className="text-blue-600">{t.hero.titleAccent}</span>
        </h2>
        <p className={`text-xl md:text-2xl max-w-2xl mx-auto opacity-70 ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
          {t.hero.desc}
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4">
          <button 
            onClick={() => setIsBookingOpen(true)}
            className="w-full sm:w-auto bg-blue-600 text-white px-12 py-5 rounded-2xl text-2xl font-black shadow-2xl shadow-blue-500/30 transition-all hover:bg-blue-700 hover:scale-105 active:scale-95"
          >
            {t.hero.ctaBook}
          </button>
          <button 
            onClick={scrollToDownload}
            className={`w-full sm:w-auto px-12 py-5 rounded-2xl text-2xl font-black transition-all hover:scale-105 active:scale-95 border-2 ${
              theme === 'dark' 
                ? 'bg-slate-800 text-white border-slate-700 hover:bg-slate-700' 
                : 'bg-white text-slate-800 border-slate-100 hover:border-blue-200 shadow-xl'
            }`}
          >
            {t.hero.ctaApp}
          </button>
        </div>

        <div className="flex items-center justify-center gap-12 pt-16 opacity-30 grayscale hover:grayscale-0 transition-all duration-700">
          <img src="https://picsum.photos/120/50?grayscale&sig=1" alt="Partner 1" className="h-10 md:h-12 object-contain" />
          <img src="https://picsum.photos/120/50?grayscale&sig=2" alt="Partner 2" className="h-10 md:h-12 object-contain" />
          <img src="https://picsum.photos/120/50?grayscale&sig=3" alt="Partner 3" className="h-10 md:h-12 object-contain" />
        </div>
      </div>
      
      {/* Decorative elements to match the modern vibe */}
      <div className="absolute top-20 left-10 text-8xl opacity-5 animate-float pointer-events-none select-none">🛠️</div>
      <div className="absolute bottom-20 right-10 text-8xl opacity-5 animate-float pointer-events-none select-none" style={{animationDelay: '1s'}}>🏠</div>
      
      {/* Gradient Blurs */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-orange-500/10 rounded-full blur-[100px] pointer-events-none"></div>
    </section>
  );
};

export default FinalCTA;
