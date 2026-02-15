
import React from 'react';
import { useApp } from '../App';

const HowItWorks: React.FC = () => {
  const { theme, t } = useApp();

  return (
    <section className={`py-24 transition-colors duration-500 ${theme === 'dark' ? 'bg-slate-900' : 'bg-slate-50'}`}>
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-20">
          <h2 className={`text-3xl md:text-5xl font-black mb-4 transition-colors ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>{t.howItWorks.title}</h2>
          <p className={`text-lg transition-colors ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>{t.howItWorks.subtitle}</p>
        </div>

        <div className="relative grid md:grid-cols-3 gap-12">
          {/* Connector Line for Desktop */}
          <div className={`hidden md:block absolute top-1/2 left-0 w-full h-1 -z-10 -translate-y-12 transition-colors ${theme === 'dark' ? 'bg-slate-800' : 'bg-blue-100'}`}></div>
          
          {t.howItWorks.steps.map((step: any, idx: number) => (
            <div key={idx} className="flex flex-col items-center text-center group">
              <div className={`w-24 h-24 border-4 border-blue-600 rounded-full flex items-center justify-center text-5xl mb-8 relative shadow-xl group-hover:scale-110 transition-all ${theme === 'dark' ? 'bg-slate-800' : 'bg-white'}`}>
                {idx === 0 ? "📱" : idx === 1 ? "📅" : "🏠"}
                <span className="absolute -top-2 -right-2 w-10 h-10 bg-orange-500 text-white text-xl font-black rounded-full flex items-center justify-center shadow-md">
                  {step.num}
                </span>
              </div>
              <h3 className={`text-2xl font-black mb-4 transition-colors ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>{step.title}</h3>
              <p className={`leading-relaxed max-w-[250px] transition-colors ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
