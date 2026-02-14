
import React from 'react';
import { useApp } from '../App';

const WhyUs: React.FC = () => {
  const { theme, t, lang } = useApp();

  return (
    <section id="why-us" className={`py-24 transition-colors duration-500 relative overflow-hidden ${theme === 'dark' ? 'bg-blue-950 text-white' : 'bg-blue-900 text-white'}`}>
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-800 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2"></div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className={`max-w-3xl mb-16 ${lang === 'ar' ? 'text-right' : 'text-left'}`}>
          <h2 className="text-3xl md:text-5xl font-black mb-6">{t.whyUs.title}</h2>
          <p className="text-blue-200 text-xl leading-relaxed">{t.whyUs.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.whyUs.items.map((item: any, idx: number) => (
            <div key={idx} className={`bg-blue-800/40 border border-blue-700 p-8 rounded-[2rem] hover:bg-blue-800/60 transition-all backdrop-blur-sm group ${lang === 'ar' ? 'text-right' : 'text-left'}`}>
              <span className="text-4xl block mb-6 transform group-hover:scale-110 transition-transform">{item.icon}</span>
              <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
              <p className="text-blue-200 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
