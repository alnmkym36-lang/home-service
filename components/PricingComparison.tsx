
import React from 'react';
import { useApp } from '../App';

const PricingComparison: React.FC = () => {
  const { theme, t } = useApp();

  const scrollToPackages = () => {
    const element = document.getElementById('packages');
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="pricing" className={`py-24 transition-colors duration-500 ${theme === 'dark' ? 'bg-slate-950' : 'bg-white'}`}>
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-5xl font-black mb-4 transition-colors ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>{t.pricingComparison.title}</h2>
          <p className={`text-lg transition-colors ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>{t.pricingComparison.subtitle}</p>
        </div>

        <div className={`max-w-5xl mx-auto overflow-hidden rounded-[2.5rem] border shadow-2xl transition-colors ${theme === 'dark' ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'}`}>
          <table className="w-full text-right border-collapse">
            <thead>
              <tr className={theme === 'dark' ? 'bg-slate-800' : 'bg-slate-50'}>
                <th className={`p-6 text-xl font-black border-b transition-colors ${theme === 'dark' ? 'border-slate-700 text-slate-300' : 'border-slate-200 text-slate-900'}`}>{t.pricingComparison.headers[0]}</th>
                <th className={`p-6 text-xl font-black border-b transition-colors ${theme === 'dark' ? 'border-slate-700 text-blue-400' : 'border-slate-200 text-blue-600'}`}>{t.pricingComparison.headers[1]}</th>
                <th className={`p-6 text-xl font-black border-b transition-colors ${theme === 'dark' ? 'border-slate-700 text-slate-500' : 'border-slate-200 text-slate-400'}`}>{t.pricingComparison.headers[2]}</th>
              </tr>
            </thead>
            <tbody>
              {t.pricingComparison.features.map((row: string[], idx: number) => (
                <tr key={idx} className={`border-b transition-colors ${theme === 'dark' ? 'border-slate-800 hover:bg-slate-800/50' : 'border-slate-100 hover:bg-slate-50'}`}>
                  <td className={`p-6 font-bold transition-colors ${theme === 'dark' ? 'text-slate-300' : 'text-slate-700'}`}>{row[0]}</td>
                  <td className={`p-6 font-bold transition-colors ${theme === 'dark' ? 'text-green-400' : 'text-green-600'}`}>{row[1]}</td>
                  <td className="p-6 text-slate-500">{row[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="mt-12 text-center">
          <button 
            onClick={scrollToPackages}
            className="bg-blue-600 text-white px-12 py-4 rounded-full text-xl font-bold shadow-xl hover:bg-blue-700 transition-all transform hover:scale-105 active:scale-95"
          >
            {t.pricingComparison.cta}
          </button>
        </div>
      </div>
    </section>
  );
};

export default PricingComparison;
