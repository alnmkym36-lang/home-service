import React, { useState, Suspense, lazy } from 'react';
import { useApp } from '../App';

const Scene3D = lazy(() => import('./Scene3D'));

const Hero: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isEmergencyMode, setIsEmergencyMode] = useState(false);
  const [formData, setFormData] = useState({
    service: '',
    phone: '',
    address: ''
  });
  
  const { t, theme, lang, isBookingOpen, setIsBookingOpen } = useApp();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleBookingSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const message = encodeURIComponent(
        `أهلاً HomeServe Pro، محتاج طلب صيانة جديد:\n` +
        `🚨 النوع: ${isEmergencyMode ? 'طوارئ (وصول خلال ٣٠ دقيقة)' : 'حجز عادي'}\n` +
        `🛠️ الخدمة: ${formData.service}\n` +
        `📞 الموبايل: ${formData.phone}\n` +
        `📍 العنوان: ${formData.address}`
      );

      await new Promise(resolve => setTimeout(resolve, 1000));
      window.open(`https://wa.me/201119241396?text=${message}`, '_blank');

      setIsLoading(false);
      setIsSubmitted(true);

      setTimeout(() => {
        setIsSubmitted(false);
        setIsBookingOpen(false);
        setIsEmergencyMode(false);
        setFormData({ service: '', phone: '', address: '' });
      }, 5000);

    } catch (error) {
      console.error('Error sending request:', error);
      setIsLoading(false);
      alert('حدث خطأ، حاول مرة أخرى');
    }
  };

  const scrollToDownload = () => {
    const element = document.getElementById('app-download');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className={`relative min-h-[95vh] pt-32 pb-20 overflow-hidden flex flex-col items-center justify-center transition-colors ${theme === 'dark' ? 'bg-slate-950' : 'bg-white'}`}>
      
      {/* Background Technical Pattern */}
      <div className={`absolute inset-0 opacity-[0.03] pointer-events-none ${theme === 'dark' ? 'invert' : ''}`} style={{ backgroundImage: 'radial-gradient(#2563eb 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      <div className={`absolute inset-0 opacity-[0.02] pointer-events-none ${theme === 'dark' ? 'invert' : ''}`} style={{ backgroundImage: 'linear-gradient(#2563eb 0.5px, transparent 0.5px), linear-gradient(90deg, #2563eb 0.5px, transparent 0.5px)', backgroundSize: '100px 100px' }}></div>

      <div className="absolute inset-0 z-0 pointer-events-none opacity-40 lg:opacity-70">
        <Suspense fallback={null}>
          <Scene3D />
        </Suspense>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10 flex flex-col items-center">
        <div className={`text-center space-y-10 max-w-4xl mx-auto`}>
          <div className="flex flex-wrap justify-center gap-3">
            <div className={`inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs font-black shadow-sm backdrop-blur-md ${theme === 'dark' ? 'bg-blue-900/30 text-blue-300 border border-blue-800' : 'bg-blue-50/80 text-blue-600 border border-blue-100'}`}>
              <span className="w-2.5 h-2.5 bg-blue-600 rounded-full animate-pulse"></span>
              {t.hero.status}
            </div>
            <a href="tel:19999" className={`inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs font-black shadow-sm transition-all hover:scale-105 active:scale-95 backdrop-blur-md ${theme === 'dark' ? 'bg-red-900/30 text-red-400 border border-red-800' : 'bg-red-50/80 text-red-600 border border-red-100'}`}>
              <span className="animate-pulse">🚨</span>
              {t.hero.emergency}
            </a>
          </div>
          
          <div className="space-y-4">
            <h1 className={`text-6xl md:text-9xl font-black leading-[1] tracking-tight ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
              {t.hero.title} <br />
              <span className="text-blue-600 inline-block mt-2 relative">
                {t.hero.titleAccent}
                <div className="absolute -bottom-2 left-0 w-full h-4 bg-blue-600/10 -rotate-1 rounded-full -z-10"></div>
              </span>
            </h1>
            
            <p className={`text-xl md:text-2xl leading-relaxed max-w-2xl mx-auto font-medium ${theme === 'dark' ? 'text-slate-400' : 'text-slate-500'}`}>
              {t.hero.desc}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-6">
            <button 
              onClick={() => setIsBookingOpen(true)}
              className="group relative w-full sm:w-auto bg-blue-600 text-white px-16 py-6 rounded-[2rem] text-3xl font-black shadow-2xl shadow-blue-500/40 transition-all hover:bg-blue-700 hover:-translate-y-2 active:translate-y-0 active:scale-95 overflow-hidden"
            >
              <span className="relative z-10">{t.hero.ctaBook}</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
            </button>
            <button 
              onClick={scrollToDownload}
              className={`w-full sm:w-auto border-2 px-16 py-6 rounded-[2rem] text-3xl font-black transition-all hover:-translate-y-2 active:translate-y-0 active:scale-95 shadow-xl backdrop-blur-md ${theme === 'dark' ? 'bg-slate-800/40 border-slate-700 text-white hover:bg-slate-700' : 'bg-white/40 border-slate-200 text-slate-800 hover:border-blue-300 hover:text-blue-600'}`}>
              {t.hero.ctaApp}
            </button>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-12 pt-16 border-t border-slate-200/50 dark:border-slate-800/50">
             <div className="flex items-center gap-4 group">
                <div className="w-16 h-16 bg-green-50 dark:bg-green-900/20 rounded-2xl flex items-center justify-center text-green-600 text-4xl shadow-sm group-hover:rotate-12 transition-transform">✓</div>
                <div className={lang === 'ar' ? 'text-right' : 'text-left'}>
                  <div className="font-black text-2xl">{t.hero.badges.warranty}</div>
                  <div className="text-sm opacity-60">{t.hero.badges.warrantySub}</div>
                </div>
             </div>
             <div className="flex items-center gap-4 group">
                <div className="w-16 h-16 bg-blue-50 dark:bg-blue-900/20 rounded-2xl flex items-center justify-center text-blue-600 text-4xl shadow-sm group-hover:-rotate-12 transition-transform">👷</div>
                <div className={lang === 'ar' ? 'text-right' : 'text-left'}>
                  <div className="font-black text-2xl">{t.hero.badges.pros}</div>
                  <div className="text-sm opacity-60">{t.hero.badges.prosSub}</div>
                </div>
             </div>
          </div>
        </div>
      </div>

      {isBookingOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-md animate-in fade-in duration-300">
          <div 
            className="absolute inset-0" 
            onClick={() => setIsBookingOpen(false)}
          ></div>
          
          <div className="relative group w-full max-w-xl animate-in zoom-in duration-300">
            <button 
              onClick={() => setIsBookingOpen(false)}
              className="absolute -top-4 -left-4 w-12 h-12 bg-white rounded-full shadow-2xl flex items-center justify-center font-bold text-slate-900 hover:bg-slate-100 z-[110] border border-slate-200 transition-transform hover:scale-110 active:scale-90"
            >
              ✕
            </button>
            
            <div id="booking" className={`relative glass p-10 md:p-14 rounded-[3.5rem] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.3)] space-y-8 border transition-all duration-500 overflow-hidden ${theme === 'dark' ? 'bg-slate-800/95 border-slate-700' : 'bg-white/95 border-white'} ${isEmergencyMode ? 'ring-8 ring-orange-500/20' : ''}`}>
                
                <div className={`absolute top-0 right-0 left-0 p-4 flex items-center justify-center gap-3 transition-colors duration-500 ${isEmergencyMode ? 'bg-orange-600 text-white' : 'bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400'}`}>
                  <label className="flex items-center cursor-pointer gap-4">
                    <span className="text-sm font-black uppercase tracking-tighter">
                      {t.hero.emergencyToggle}
                    </span>
                    <div className="relative">
                      <input 
                        type="checkbox" 
                        className="sr-only" 
                        checked={isEmergencyMode} 
                        onChange={() => setIsEmergencyMode(!isEmergencyMode)}
                      />
                      <div className={`block w-12 h-7 rounded-full transition-colors ${isEmergencyMode ? 'bg-white' : 'bg-slate-300 dark:bg-slate-600'}`}></div>
                      <div className={`absolute left-1 top-1 w-5 h-5 rounded-full transition-transform ${isEmergencyMode ? 'translate-x-5 bg-orange-600' : 'bg-white'}`}></div>
                    </div>
                  </label>
                </div>

                {isSubmitted ? (
                  <div className="py-20 text-center animate-in zoom-in duration-500">
                    <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-5xl mx-auto mb-8 shadow-inner">✓</div>
                    <h3 className="text-4xl font-black mb-4 text-slate-900 dark:text-white">{t.hero.bookingSuccess}</h3>
                    <p className="text-slate-500 dark:text-slate-400 text-xl mb-10">
                      {t.hero.bookingSuccessSub}
                    </p>
                    <div className="flex flex-col gap-4">
                      <p className="text-sm font-bold text-slate-400 italic">{lang === 'ar' ? 'إذا لم يفتح الواتساب تلقائياً، تواصل معنا هنا:' : 'If WhatsApp didn\'t open automatically, contact us here:'}</p>
                      <a href="https://wa.me/201119241396" className="text-blue-600 font-black text-2xl hover:underline">٠١١١٩٢٤١٣٩٦</a>
                    </div>
                  </div>
                ) : (
                  <>
                    <div className="space-y-3 pt-8">
                      <h3 className={`text-4xl font-black transition-colors ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>{t.hero.widgetTitle}</h3>
                      <p className="text-slate-500 dark:text-slate-400 text-lg">{lang === 'ar' ? 'املا البيانات وهنحولك للواتساب فوراً لتأكيد الحجز' : 'Fill details and we will redirect you to WhatsApp'}</p>
                    </div>
                    
                    <form onSubmit={handleBookingSubmit} className="space-y-6">
                      <div className="space-y-5">
                        <div className="relative group">
                          <select 
                            name="service"
                            required 
                            value={formData.service}
                            onChange={handleInputChange}
                            className={`w-full border-2 p-6 rounded-3xl focus:ring-4 focus:ring-blue-500/20 outline-none transition-all appearance-none cursor-pointer font-bold text-xl ${theme === 'dark' ? 'bg-slate-700 border-slate-600 text-white' : 'bg-white border-slate-100 text-slate-900 hover:border-blue-400'}`}
                          >
                            <option value="" disabled>{lang === 'ar' ? 'اختار الخدمة المطلوبة' : 'Select Service'}</option>
                            <option>{t.services.plumbing}</option>
                            <option>{t.services.electric}</option>
                            <option>{t.services.ac}</option>
                            <option>{t.services.cleaning}</option>
                            <option>{t.services.carpentry}</option>
                            <option>{t.services.appliances}</option>
                            <option>{t.services.painting}</option>
                            <option>{t.services.construction}</option>
                          </select>
                          <div className={`absolute ${lang === 'ar' ? 'left-6' : 'right-6'} top-1/2 -translate-y-1/2 pointer-events-none text-blue-600 text-2xl`}>▼</div>
                        </div>

                        <div className="relative">
                          <input 
                            name="phone"
                            type="tel" 
                            placeholder={lang === 'ar' ? "رقم الموبايل (مثلاً: 010...)" : "Mobile Number"} 
                            required
                            value={formData.phone}
                            onChange={handleInputChange}
                            className={`w-full border-2 p-6 rounded-3xl focus:ring-4 focus:ring-blue-500/20 outline-none transition-all font-bold text-xl ${theme === 'dark' ? 'bg-slate-700 border-slate-600 text-white' : 'bg-white border-slate-100 text-slate-900 hover:border-blue-400'}`}
                          />
                        </div>

                        <div className="relative">
                          <input 
                            name="address"
                            type="text" 
                            placeholder={t.hero.address} 
                            required
                            value={formData.address}
                            onChange={handleInputChange}
                            className={`w-full border-2 p-6 rounded-3xl focus:ring-4 focus:ring-blue-500/20 outline-none transition-all font-bold text-xl ${theme === 'dark' ? 'bg-slate-700 border-slate-600 text-white' : 'bg-white border-slate-100 text-slate-900 hover:border-blue-400'}`}
                          />
                        </div>
                      </div>

                      <button 
                        type="submit" 
                        disabled={isLoading}
                        className={`w-full font-black py-7 rounded-[2rem] text-3xl shadow-2xl transition-all transform hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-4 ${
                          isEmergencyMode 
                            ? 'bg-orange-600 hover:bg-orange-700 shadow-orange-500/30 text-white' 
                            : 'bg-blue-600 hover:bg-blue-700 shadow-blue-500/30 text-white'
                        } ${isLoading ? 'opacity-70 cursor-wait' : ''}`}
                      >
                        {isLoading ? (
                          <span className="w-10 h-10 border-4 border-white/30 border-t-white rounded-full animate-spin"></span>
                        ) : (
                          <>
                            <span>{t.hero.widgetSubmit}</span>
                          </>
                        )}
                      </button>
                      
                      <div className="text-center space-y-4 pt-6 border-t border-slate-100 dark:border-slate-800">
                        <div className="flex flex-col items-center gap-3">
                           <p className="text-base text-slate-400 font-bold">
                            🔒 {lang === 'ar' ? 'بياناتك مشفرة وهتوصل للدعم فوراً' : 'Your data is encrypted and sent directly to support'}
                          </p>
                          <a href="tel:19999" className="text-orange-500 font-black text-2xl hover:scale-110 transition-transform flex items-center gap-2">
                            <span>📞</span> <span>{lang === 'ar' ? '١٩٩٩٩' : '19999'}</span>
                          </a>
                        </div>
                      </div>
                    </form>
                  </>
                )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;