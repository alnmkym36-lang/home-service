
import React, { useState, useEffect, createContext, useContext } from 'react';
import Header from './components/Header.tsx';
import Hero from './components/Hero.tsx';
import SocialProof from './components/SocialProof.tsx';
import ServicesGrid from './components/ServicesGrid.tsx';
import WhyUs from './components/WhyUs.tsx';
import PricingComparison from './components/PricingComparison.tsx';
import PricingPackages from './components/PricingPackages.tsx';
import HowItWorks from './components/HowItWorks.tsx';
import AppDownload from './components/AppDownload.tsx';
import Testimonials from './components/Testimonials.tsx';
import FAQ from './components/FAQ.tsx';
import FinalCTA from './components/FinalCTA.tsx';
import Footer from './components/Footer.tsx';
import StickyMobileCTA from './components/StickyMobileCTA.tsx';
import { translations } from './translations.ts';

type Language = 'ar' | 'en';
type Theme = 'light' | 'dark';

interface AppContextType {
  lang: Language;
  setLang: (l: Language) => void;
  theme: Theme;
  setTheme: (t: Theme) => void;
  isBookingOpen: boolean;
  setIsBookingOpen: (val: boolean) => void;
  t: any;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error("useApp must be used within AppProvider");
  return context;
};

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('ar');
  const [theme, setTheme] = useState<Theme>('light');
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  useEffect(() => {
    const html = document.documentElement;
    html.lang = lang;
    html.dir = lang === 'ar' ? 'rtl' : 'ltr';
    if (theme === 'dark') html.classList.add('dark');
    else html.classList.remove('dark');
  }, [lang, theme]);

  const value = { 
    lang, 
    setLang, 
    theme, 
    setTheme, 
    isBookingOpen, 
    setIsBookingOpen, 
    t: translations[lang] 
  };

  return (
    <AppContext.Provider value={value}>
      <div className={`min-h-screen transition-colors duration-500 ${theme === 'dark' ? 'bg-slate-950 text-white' : 'bg-slate-50 text-slate-900'}`}>
        <Header />
        <main>
          <Hero />
          <SocialProof />
          <ServicesGrid />
          <WhyUs />
          <PricingComparison />
          <PricingPackages />
          <HowItWorks />
          <AppDownload />
          <Testimonials />
          <FAQ />
          <FinalCTA />
        </main>
        <Footer />
        <StickyMobileCTA />
        
        {/* WhatsApp Floating Button */}
        <a 
          href="https://wa.me/201119241396" 
          target="_blank" 
          rel="noopener noreferrer"
          className="fixed bottom-24 right-6 md:bottom-8 md:right-8 z-50 w-16 h-16 bg-green-500 text-white rounded-full flex items-center justify-center shadow-2xl hover:bg-green-600 transition-all hover:scale-110 active:scale-95"
        >
          <svg className="w-10 h-10 fill-current" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.18-2.587-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.747-2.874-2.512-2.96-2.626-.087-.115-.708-.943-.708-1.799 0-.856.448-1.277.607-1.45.159-.174.347-.218.462-.218s.231.001.332.005c.109.004.258-.041.405.314.159.386.542 1.321.589 1.417.047.095.078.205.014.331-.064.127-.095.205-.189.314-.095.109-.2.242-.284.327-.095.095-.194.199-.084.388.11.189.489.808 1.05 1.309.721.644 1.325.843 1.514.937.189.095.299.079.41-.047.11-.127.472-.551.598-.74.127-.189.252-.158.425-.095s1.102.52 1.291.614c.189.095.314.143.361.221.047.079.047.46-.097.865z" /></svg>
        </a>
      </div>
    </AppContext.Provider>
  );
};

export default App;