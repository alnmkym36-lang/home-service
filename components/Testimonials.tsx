
import React from 'react';
import { useApp } from '../App';

const Testimonials: React.FC = () => {
  const { theme, t } = useApp();

  return (
    <section id="testimonials" className={`py-24 transition-colors duration-500 ${theme === 'dark' ? 'bg-slate-950' : 'bg-slate-50'}`}>
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-5xl font-black mb-4 transition-colors ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>{t.testimonials.title}</h2>
          <p className={`text-lg transition-colors ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>{t.testimonials.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.testimonials.reviews.map((rev: any, idx: number) => (
            <div key={idx} className={`p-8 rounded-[2rem] border shadow-sm relative group hover:shadow-xl transition-all ${theme === 'dark' ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-100'}`}>
              <div className="flex gap-1 text-orange-400 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="opacity-100">⭐</span>
                ))}
              </div>
              <p className={`leading-relaxed italic mb-6 transition-colors ${theme === 'dark' ? 'text-slate-300' : 'text-slate-700'}`}>"{rev.text}"</p>
              <div className={`flex items-center gap-4 border-t pt-4 transition-colors ${theme === 'dark' ? 'border-slate-800' : 'border-slate-50'}`}>
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400 font-bold">
                  {rev.name[0]}
                </div>
                <div>
                  <div className={`font-bold transition-colors ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>{rev.name}</div>
                  <div className="text-xs text-slate-500">{rev.area}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
