
import React from 'react';
import { useApp } from '../App';

const StickyMobileCTA: React.FC = () => {
  const { setIsBookingOpen, theme, t } = useApp();

  return (
    <div className={`fixed bottom-0 left-0 right-0 p-4 border-t shadow-[0_-10px_30px_rgba(0,0,0,0.1)] md:hidden z-[60] transition-colors duration-500 ${theme === 'dark' ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-100'}`}>
      <div className="flex gap-3">
        <button 
          onClick={() => setIsBookingOpen(true)}
          className="flex-1 bg-blue-600 text-white font-black py-4 rounded-2xl text-lg shadow-lg shadow-blue-200 active:scale-95 transition-transform"
        >
          {t.hero.ctaBook}
        </button>
        <a 
          href="tel:19999"
          className="w-16 h-16 bg-green-500 text-white flex items-center justify-center rounded-2xl text-2xl shadow-lg shadow-green-200 active:scale-95 transition-transform"
        >
          📞
        </a>
      </div>
    </div>
  );
};

export default StickyMobileCTA;
