
import React, { useState } from 'react';
import { useApp } from '../App';

const Footer: React.FC = () => {
  const { theme, t } = useApp();
  const [showPrivacy, setShowPrivacy] = useState(false);

  const handleScrollToSection = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const togglePrivacy = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowPrivacy(!showPrivacy);
    // Scroll to the section if opening
    if (!showPrivacy) {
      setTimeout(() => {
        document.getElementById('privacy-content')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 100);
    }
  };

  return (
    <footer className={`transition-colors duration-500 py-16 ${theme === 'dark' ? 'bg-slate-950 text-white border-t border-slate-900' : 'bg-slate-900 text-white'}`}>
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">H</div>
              <span className="text-2xl font-black">HomeServe <span className="text-orange-500">Pro</span></span>
            </div>
            <p className="text-slate-400 leading-relaxed">{t.footer.desc}</p>
            <div className="flex gap-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">f</a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-blue-400 transition-colors">t</a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors">i</a>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-6">{t.footer.services}</h4>
            <ul className="space-y-4 text-slate-400">
              <li><a href="#services" onClick={(e) => handleScrollToSection(e, 'services')} className="hover:text-white transition-colors">{t.services.plumbing}</a></li>
              <li><a href="#services" onClick={(e) => handleScrollToSection(e, 'services')} className="hover:text-white transition-colors">{t.services.electric}</a></li>
              <li><a href="#services" onClick={(e) => handleScrollToSection(e, 'services')} className="hover:text-white transition-colors">{t.services.ac}</a></li>
              <li><a href="#services" onClick={(e) => handleScrollToSection(e, 'services')} className="hover:text-white transition-colors">{t.services.cleaning}</a></li>
              <li><a href="#services" onClick={(e) => handleScrollToSection(e, 'services')} className="hover:text-white transition-colors">{t.services.carpentry}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-6">{t.footer.links}</h4>
            <ul className="space-y-4 text-slate-400">
              <li><a href="#booking" onClick={(e) => { e.preventDefault(); window.scrollTo({top:0, behavior:'smooth'}); }} className="hover:text-white transition-colors">{t.nav.book}</a></li>
              <li><a href="#why-us" onClick={(e) => handleScrollToSection(e, 'why-us')} className="hover:text-white transition-colors">{t.nav.whyUs}</a></li>
              <li><a href="#pricing" onClick={(e) => handleScrollToSection(e, 'pricing')} className="hover:text-white transition-colors">{t.nav.pricing}</a></li>
              <li>
                <button 
                  onClick={togglePrivacy} 
                  className="hover:text-white transition-colors flex items-center gap-2 text-slate-400"
                >
                  <span>{showPrivacy ? '−' : '+'}</span> {t.footer.privacyLink}
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-6">{t.footer.contact}</h4>
            <ul className="space-y-4 text-slate-400">
              <li className="flex items-center gap-3">
                <span className="text-blue-500">📍</span> 
                <a href="https://maps.google.com/?q=Cairo,Egypt" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Cairo, Egypt</a>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-blue-500">📞</span> 
                <a href="tel:19999" className="hover:text-white transition-colors">19999</a>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-blue-500">✉️</span> 
                <a href="mailto:alnmkym36@gmail.com" className="hover:text-white transition-colors">alnmkym36@gmail.com</a>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-green-500">💬</span> 
                <a href="https://wa.me/201119241396" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">01119241396</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 pb-8">
            {showPrivacy && (
              <div id="privacy-content" className="mb-6 p-6 rounded-2xl bg-white/5 border border-white/10 animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <div className="flex justify-between items-start mb-4">
                    <h5 className="text-white font-bold text-lg">{t.footer.privacyTitle}</h5>
                    <button onClick={() => setShowPrivacy(false)} className="text-slate-400 hover:text-white transition-colors text-2xl leading-none" title="إغلاق">&times;</button>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed">{t.footer.privacyText}</p>
              </div>
            )}
            
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-slate-500 text-sm">
                <div>© 2024 HomeServe Pro. {t.footer.rights}.</div>
                <div className="font-sans">Made with care.</div>
                <div className="flex gap-6">
                    <img src="https://picsum.photos/40/25?grayscale" alt="Visa" className="opacity-30" />
                    <img src="https://picsum.photos/40/26?grayscale" alt="Mastercard" className="opacity-30" />
                </div>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
