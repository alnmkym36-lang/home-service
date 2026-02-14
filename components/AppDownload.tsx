
import React from 'react';
import { useApp } from '../App';

const AppDownload: React.FC = () => {
  const { theme, lang } = useApp();

  return (
    <section id="app-download" className={`py-24 transition-colors duration-500 ${theme === 'dark' ? 'bg-slate-950' : 'bg-white'} overflow-hidden`}>
      <div className="container mx-auto px-4 md:px-8">
        <div className="bg-gradient-to-br from-blue-700 to-blue-900 rounded-[3rem] p-12 lg:p-20 relative text-white flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 space-y-8 z-10">
            <h2 className="text-4xl md:text-6xl font-black leading-tight">
              {lang === 'ar' ? <>كل خدمات بيتك <br /> في جيبك!</> : <>All Home Services <br /> In Your Pocket!</>}
            </h2>
            <p className="text-blue-100 text-xl leading-relaxed">
              {lang === 'ar' 
                ? 'حمّل تطبيق HomeServe Pro وتابع الفني لحظة بلحظة، وادفع بأمان، وخد نقط هدايا على كل طلب.' 
                : 'Download HomeServe Pro app, track the pro live, pay securely, and earn points on every order.'}
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="flex items-center gap-4 bg-white/10 p-4 rounded-2xl">
                <span className="text-2xl">📍</span>
                <span className="font-bold">{lang === 'ar' ? 'تتبع الفني ع الخريطة' : 'Live Tracking'}</span>
              </div>
              <div className="flex items-center gap-4 bg-white/10 p-4 rounded-2xl">
                <span className="text-2xl">💳</span>
                <span className="font-bold">{lang === 'ar' ? 'دفع إلكتروني آمن' : 'Secure Payment'}</span>
              </div>
              <div className="flex items-center gap-4 bg-white/10 p-4 rounded-2xl">
                <span className="text-2xl">⭐</span>
                <span className="font-bold">{lang === 'ar' ? 'تقييم الخدمة فوراً' : 'Instant Rating'}</span>
              </div>
              <div className="flex items-center gap-4 bg-white/10 p-4 rounded-2xl">
                <span className="text-2xl">🎧</span>
                <span className="font-bold">{lang === 'ar' ? 'دعم مباشر' : 'Live Support'}</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-6">
              <button className="bg-slate-900 text-white px-8 py-4 rounded-2xl flex items-center gap-3 hover:bg-black transition-all">
                <span className="text-3xl"></span>
                <div className={lang === 'ar' ? 'text-right' : 'text-left'}>
                  <div className="text-xs opacity-70">Download on</div>
                  <div className="text-lg font-bold">App Store</div>
                </div>
              </button>
              <button className="bg-slate-900 text-white px-8 py-4 rounded-2xl flex items-center gap-3 hover:bg-black transition-all">
                <span className="text-3xl">🤖</span>
                <div className={lang === 'ar' ? 'text-right' : 'text-left'}>
                  <div className="text-xs opacity-70">Get it on</div>
                  <div className="text-lg font-bold">Google Play</div>
                </div>
              </button>
            </div>
          </div>

          <div className="flex-1 relative">
            <div className="relative z-10 w-64 md:w-80 h-[500px] md:h-[600px] bg-slate-800 rounded-[3rem] border-[8px] border-slate-700 shadow-2xl mx-auto overflow-hidden animate-float">
               <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-700 rounded-b-xl z-20"></div>
               <img src="https://picsum.photos/400/800?grayscale" alt="App interface" className="w-full h-full object-cover opacity-80" />
               <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent flex flex-col justify-end p-8 text-center">
                  <div className="w-16 h-16 bg-white rounded-2xl mx-auto mb-4 flex items-center justify-center shadow-lg">
                    <span className="text-blue-600 font-bold text-3xl">H</span>
                  </div>
                  <h4 className="text-2xl font-black mb-2">HomeServe Pro</h4>
                  <p className="text-sm opacity-80">{lang === 'ar' ? 'جاهز للخدمة دائماً' : 'Ready to serve'}</p>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppDownload;
