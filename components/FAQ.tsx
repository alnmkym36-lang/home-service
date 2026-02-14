
import React, { useState } from 'react';
import { useApp } from '../App';

const FAQ: React.FC = () => {
  const { theme, t } = useApp();
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section id="faq" className={`py-24 transition-colors duration-500 ${theme === 'dark' ? 'bg-slate-900' : 'bg-white'}`}>
      <div className="container mx-auto px-4 md:px-8 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-5xl font-black mb-4 transition-colors ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>{t.faq.title}</h2>
          <p className="text-slate-600 dark:text-slate-400">{t.faq.subtitle}</p>
        </div>

        <div className="space-y-4">
          {t.faq.items.map((faq: any, idx: number) => (
            <div key={idx} className={`border rounded-3xl overflow-hidden shadow-sm transition-colors ${theme === 'dark' ? 'border-slate-800' : 'border-slate-100'}`}>
              <button 
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className={`w-full text-right p-6 flex items-center justify-between font-bold text-lg md:text-xl transition-colors ${theme === 'dark' ? 'bg-slate-800 text-white hover:bg-slate-700' : 'bg-white text-slate-800 hover:bg-slate-50'}`}
              >
                <span>{faq.q}</span>
                <span className={`transform transition-transform text-blue-600 ${openIdx === idx ? 'rotate-180' : ''}`}>▼</span>
              </button>
              {openIdx === idx && (
                <div className={`p-6 leading-relaxed border-t transition-colors ${theme === 'dark' ? 'bg-slate-800/50 text-slate-300 border-slate-700' : 'bg-blue-50/50 text-slate-600 border-slate-50'}`}>
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
