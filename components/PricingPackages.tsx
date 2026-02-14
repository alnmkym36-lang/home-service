
import React from 'react';
import { useApp } from '../App';

const PricingPackages: React.FC = () => {
  const { t, theme, lang } = useApp();

  const plans = [
    { key: 'basic', color: 'blue', icon: '🏠' },
    { key: 'gold', color: 'orange', icon: '✨', popular: true },
    { key: 'platinum', color: 'slate', icon: '🏆' }
  ];

  const handleWhatsAppJoin = (planName: string) => {
    const message = lang === 'ar' 
      ? encodeURIComponent(`أهلاً HomeServe Pro، محتاج أشترك في ${planName} وأحصل على خصم الـ 20%`)
      : encodeURIComponent(`Hi HomeServe Pro, I want to subscribe to ${planName} and get the 20% discount`);
    window.open(`https://wa.me/201119241396?text=${message}`, '_blank');
  };

  return (
    <section id="packages" className={`py-24 transition-colors ${theme === 'dark' ? 'bg-slate-900' : 'bg-slate-50'}`}>
      <div className="container mx-auto px-4 md:px-8">
        
        {/* WhatsApp Club Banner */}
        <div className={`mb-12 rounded-3xl p-4 md:p-5 flex flex-col md:flex-row items-center justify-between gap-4 border-2 border-dashed transition-all ${
          theme === 'dark' ? 'bg-green-900/10 border-green-800' : 'bg-green-50/50 border-green-200'
        }`}>
          <div className={`flex items-center gap-4 text-center ${lang === 'ar' ? 'md:text-right' : 'md:text-left'}`}>
            <div className="w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center text-xl shadow-md shrink-0 animate-bounce">
              💬
            </div>
            <div>
              <h3 className="text-lg font-black">{t.pricingPackages.whatsappClub}</h3>
              <p className="text-xs opacity-80">{t.pricingPackages.whatsappSub}</p>
            </div>
          </div>
          <button 
            onClick={() => handleWhatsAppJoin(t.pricingPackages.whatsappClub)}
            className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-xl text-sm font-black shadow-md transition-all hover:scale-105 active:scale-95 flex items-center gap-2 whitespace-nowrap"
          >
            {t.pricingPackages.ctaWhatsapp}
          </button>
        </div>

        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-black">{t.pricingPackages.title}</h2>
          <p className="text-lg opacity-70 max-w-2xl mx-auto">{t.pricingPackages.subtitle}</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {plans.map((p) => {
            const plan = t.pricingPackages.plans[p.key];
            return (
              <div 
                key={p.key} 
                className={`relative p-8 rounded-[2.5rem] border-2 transition-all duration-500 transform hover:-translate-y-4 flex flex-col ${
                  p.popular 
                    ? 'bg-blue-600 text-white border-blue-400 scale-105 shadow-2xl z-10' 
                    : theme === 'dark' ? 'bg-slate-800 border-slate-700 text-white' : 'bg-white border-slate-100 text-slate-900'
                }`}
              >
                {p.popular && (
                  <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-orange-500 text-white px-6 py-1 rounded-full text-sm font-black shadow-lg">
                    {t.services.popular}
                  </div>
                )}
                
                <div className="text-4xl mb-6">{p.icon}</div>
                <h3 className="text-2xl font-black mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-8">
                  <span className="text-5xl font-black">{plan.price}</span>
                  <span className="text-lg opacity-70">{t.services.currency} / {plan.period}</span>
                </div>

                <ul className="space-y-4 mb-10 flex-1">
                  {plan.features.map((feature: string, i: number) => (
                    <li key={i} className="flex items-center gap-3">
                      <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${p.popular ? 'bg-white/20' : 'bg-blue-100 text-blue-600'}`}>✓</span>
                      <span className="font-bold opacity-90">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button 
                  onClick={() => handleWhatsAppJoin(plan.name)}
                  className={`w-full py-4 rounded-2xl text-xl font-black transition-all active:scale-95 shadow-xl ${
                    p.popular 
                      ? 'bg-white text-blue-600 hover:bg-slate-100' 
                      : 'bg-blue-600 text-white hover:bg-blue-700'
                  }`}
                >
                  {t.pricingPackages.subscribe}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PricingPackages;
