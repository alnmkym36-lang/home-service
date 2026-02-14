
import React from 'react';

const EmergencyBanner: React.FC = () => {
  return (
    <section className="bg-orange-500 py-12">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 text-white">
          <div className="flex items-center gap-6 text-center lg:text-right">
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center text-4xl animate-pulse">
              🚨
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-black mb-2">حالة طوارئ؟ فني خلال ٣٠ دقيقة!</h2>
              <p className="text-orange-100 text-xl">سباكة، كهرباء، أو تكييف.. بنوصلك فوراً داخل القاهرة والجيزة.</p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
            <a href="tel:19999" className="bg-white text-orange-600 px-10 py-4 rounded-2xl text-2xl font-black flex items-center justify-center gap-3 shadow-xl transition-all hover:scale-105 active:scale-95 group">
              <span className="group-hover:rotate-12 transition-transform">📞</span> ١٩٩٩٩
            </a>
            <button 
              onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-slate-900 text-white px-10 py-4 rounded-2xl text-xl font-bold flex items-center justify-center gap-3 shadow-xl transition-all hover:bg-black hover:scale-105 active:scale-95"
            >
              طلب طوارئ الآن
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmergencyBanner;
