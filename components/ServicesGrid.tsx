
import React, { Suspense, lazy, useState } from 'react';
import { useApp } from '../App';

const ServiceIcon3D = lazy(() => import('./ServiceIcon3D'));

const ServicesGrid: React.FC = () => {
  const { t, theme, lang, setIsBookingOpen } = useApp();
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const formatPrice = (p: string) => {
    if (lang === 'en') return p;
    const arabicNumerals = ['٠','١','٢','٣','٤','٥','٦','٧','٨','٩'];
    return p.split('').map(char => isNaN(parseInt(char)) ? char : arabicNumerals[parseInt(char)]).join('');
  };

  const services = [
    { id: 'plumbing', name: t.services.plumbing, desc: t.services.hooks.plumbing, details: t.services.details.plumbing, price: "99", icon: "plumbing", badge: t.services.popular, badgeColor: "bg-orange-500" },
    { id: 'electric', name: t.services.electric, desc: t.services.hooks.electric, details: t.services.details.electric, price: "99", icon: "electric", badge: t.services.flash, badgeColor: "bg-red-500" },
    { id: 'ac', name: t.services.ac, desc: t.services.hooks.ac, details: t.services.details.ac, price: "149", icon: "ac", badge: t.services.warranty, badgeColor: "bg-blue-500" },
    { id: 'cleaning', name: t.services.cleaning, desc: t.services.hooks.cleaning, details: t.services.details.cleaning, price: "199", icon: "cleaning", badge: t.services.save, badgeColor: "bg-green-500" },
    { id: 'carpentry', name: t.services.carpentry, desc: t.services.hooks.carpentry, details: t.services.details.carpentry, price: "120", icon: "carpentry" },
    { id: 'appliances', name: t.services.appliances, desc: t.services.hooks.appliances, details: t.services.details.appliances, price: "150", icon: "appliances", badge: t.services.genuine, badgeColor: "bg-purple-500" },
    { id: 'painting', name: t.services.painting, desc: t.services.hooks.painting, details: t.services.details.painting, price: "250", icon: "painting" },
    { id: 'construction', name: t.services.construction, desc: t.services.hooks.construction, details: t.services.details.construction, price: "300", icon: "construction" },
  ];

  const handleServiceClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsBookingOpen(true);
  };

  return (
    <section id="services" className={`py-24 transition-colors duration-700 ${theme === 'dark' ? 'bg-slate-900' : 'bg-slate-50'}`}>
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-block px-4 py-1 rounded-full bg-orange-100 text-orange-600 text-sm font-black mb-4 animate-bounce">
            {t.services.dealsBanner}
          </div>
          <h2 className="text-3xl md:text-5xl font-black">{t.services.title}</h2>
          <p className="text-lg opacity-70 max-w-2xl mx-auto">{t.services.desc}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div 
              key={service.id} 
              onClick={handleServiceClick}
              onMouseEnter={() => setHoveredId(service.id)}
              onMouseLeave={() => setHoveredId(null)}
              className={`p-8 rounded-[2.5rem] border transition-all duration-500 transform hover:-translate-y-3 hover:scale-[1.02] active:scale-95 group cursor-pointer relative flex flex-col overflow-hidden hover:ring-4 ${
                theme === 'dark' 
                  ? 'bg-slate-800 border-slate-700 hover:border-blue-500 hover:ring-blue-500/20 shadow-2xl hover:shadow-blue-500/40' 
                  : 'bg-white border-slate-100 shadow-md hover:shadow-2xl hover:shadow-blue-200/50 hover:ring-blue-500/10'
              }`}
            >
              {service.badge && (
                <div className={`absolute top-6 ${lang === 'ar' ? 'left-6' : 'right-6'} z-30 ${service.badgeColor} text-white px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider shadow-lg transform ${lang === 'ar' ? '-rotate-12' : 'rotate-12'} group-hover:rotate-0 transition-transform`}>
                  {service.badge}
                </div>
              )}

              <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 z-20 pointer-events-none"></div>

              <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-br ${
                theme === 'dark' 
                  ? 'from-blue-600/20 via-blue-900/5 to-transparent' 
                  : 'from-blue-100/60 via-blue-50/10 to-transparent'
              }`}></div>

              <div className="mb-6 flex justify-center relative">
                <Suspense fallback={<div className="w-24 h-24 bg-slate-200 animate-pulse rounded-full" />}>
                  <ServiceIcon3D type={service.icon} theme={theme} isHovered={hoveredId === service.id} />
                </Suspense>
              </div>

              <div className="relative z-10">
                <h3 className={`text-xl font-bold mb-2 transition-colors duration-300 ${
                  theme === 'dark' ? 'group-hover:text-blue-400' : 'group-hover:text-blue-600'
                }`}>{service.name}</h3>
                <p className={`mb-2 font-black text-sm ${theme === 'dark' ? 'text-orange-400' : 'text-orange-600'}`}>
                  ✨ {service.desc}
                </p>
                
                <div className="max-h-0 opacity-0 group-hover:max-h-40 group-hover:opacity-100 transition-all duration-700 ease-in-out overflow-hidden mb-4">
                  <p className={`text-sm leading-relaxed border-t pt-4 ${
                    theme === 'dark' ? 'text-slate-400 border-slate-700' : 'text-slate-500 border-slate-100'
                  }`}>
                    {service.details}
                  </p>
                </div>
              </div>
              
              <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-50 dark:border-slate-700/50 relative z-10">
                <div className="flex flex-col">
                  <span className="text-[10px] opacity-50 line-through">
                    {formatPrice((parseInt(service.price) + 50).toString())} {t.services.currency}
                  </span>
                  <span className={`text-sm font-black transition-all duration-500 group-hover:scale-110 ${
                    theme === 'dark' 
                      ? 'text-green-300' 
                      : 'text-green-700'
                  }`}>
                    {t.services.startFrom} {formatPrice(service.price)} {t.services.currency}
                  </span>
                </div>
                <span className={`font-bold transition-transform duration-300 flex items-center gap-1 ${
                  theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
                } ${lang === 'ar' ? 'group-hover:-translate-x-2' : 'group-hover:translate-x-2'}`}>
                  {t.services.bookNow}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
