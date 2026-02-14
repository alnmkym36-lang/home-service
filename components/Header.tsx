
import React, { useState, useEffect } from 'react';
import { useApp } from '../App';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { lang, setLang, theme, setTheme, t } = useApp();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({ top: elementPosition - offset, behavior: 'smooth' });
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? (theme === 'dark' ? 'bg-slate-900/90' : 'bg-white/90') + ' backdrop-blur-md py-2 shadow-lg' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-lg">H</div>
            <span className={`text-2xl font-black hidden sm:block ${theme === 'dark' ? 'text-white' : 'text-blue-900'}`}>HomeServe <span className="text-orange-500">Pro</span></span>
          </div>
          
          <nav className={`hidden xl:flex items-center gap-6 font-bold text-sm uppercase tracking-wide ${theme === 'dark' ? 'text-slate-300' : 'text-slate-600'}`}>
            <a href="#services" onClick={(e) => scrollToSection(e, 'services')} className="hover:text-blue-600 transition-colors">{t.nav.services}</a>
            <a href="#pricing" onClick={(e) => scrollToSection(e, 'pricing')} className="hover:text-blue-600 transition-colors">{t.nav.pricing}</a>
            <a href="#why-us" onClick={(e) => scrollToSection(e, 'why-us')} className="hover:text-blue-600 transition-colors">{t.nav.whyUs}</a>
          </nav>
        </div>

        <div className="flex items-center gap-3">
          {/* SOS Quick Button */}
          <a 
            href="tel:19999" 
            className="hidden sm:flex items-center gap-1 bg-red-600 text-white px-3 py-1.5 rounded-full text-[10px] font-black animate-pulse shadow-lg"
            title="Emergency Hotline"
          >
            🚨 <span className="hidden lg:inline">SOS: 19999</span>
          </a>

          <div className={`flex items-center gap-1 p-1 rounded-full border ${theme === 'dark' ? 'bg-slate-800 border-slate-700' : 'bg-slate-100 border-slate-200'}`}>
            <button 
              onClick={() => setLang(lang === 'ar' ? 'en' : 'ar')}
              className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-xs hover:bg-white dark:hover:bg-slate-700 transition-all"
            >
              {lang === 'ar' ? 'EN' : 'عربي'}
            </button>
            <button 
              onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
              className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:bg-white dark:hover:bg-slate-700"
            >
              {theme === 'light' ? '🌙' : '☀️'}
            </button>
          </div>

          <div className="flex items-center gap-2">
            <a 
              href="mailto:alnmkym36@gmail.com"
              className={`w-10 h-10 rounded-full flex items-center justify-center shadow-md transition-all hover:scale-110 active:scale-95 ${theme === 'dark' ? 'bg-slate-800 text-blue-400 border border-slate-700' : 'bg-white text-blue-600 border border-slate-100'}`}
              title="Email Us"
            >
              ✉️
            </a>
            <a 
              href="https://wa.me/201119241396"
              className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-full font-bold shadow-lg transition-all transform hover:scale-105"
            >
              💬 <span className="hidden sm:inline">{t.nav.contact}</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
