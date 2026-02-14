
import React from 'react';
import { useApp } from '../App';

const Footer: React.FC = () => {
  const { theme, t } = useApp();

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
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">f</a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">t</a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">i</a>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-6">{t.footer.services}</h4>
            <ul className="space-y-4 text-slate-400">
              <li><a href="#" className="hover:text-white transition-colors">{t.services.plumbing}</a></li>
              <li><a href="#" className="hover:text-white transition-colors">{t.services.electric}</a></li>
              <li><a href="#" className="hover:text-white transition-colors">{t.services.ac}</a></li>
              <li><a href="#" className="hover:text-white transition-colors">{t.services.cleaning}</a></li>
              <li><a href="#" className="hover:text-white transition-colors">{t.services.carpentry}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-6">{t.footer.links}</h4>
            <ul className="space-y-4 text-slate-400">
              <li><a href="#" className="hover:text-white transition-colors">{t.nav.book}</a></li>
              <li><a href="#" className="hover:text-white transition-colors">{t.nav.whyUs}</a></li>
              <li><a href="#" className="hover:text-white transition-colors">{t.nav.pricing}</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-6">{t.footer.contact}</h4>
            <ul className="space-y-4 text-slate-400">
              <li className="flex items-center gap-3">
                <span className="text-blue-500">📍</span> Cairo, Egypt
              </li>
              <li className="flex items-center gap-3">
                <span className="text-blue-500">📞</span> 19999
              </li>
              <li className="flex items-center gap-3">
                <span className="text-blue-500">✉️</span> 
                <a href="mailto:alnmkym36@gmail.com" className="hover:text-white transition-colors">alnmkym36@gmail.com</a>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-green-500">💬</span> 01119241396
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-slate-500 text-sm">
          <div>© 2024 HomeServe Pro. {t.footer.rights}.</div>
          <div className="font-sans">Made with care.</div>
          <div className="flex gap-6">
            <img src="https://picsum.photos/40/25?grayscale" alt="Visa" className="opacity-30" />
            <img src="https://picsum.photos/40/26?grayscale" alt="Mastercard" className="opacity-30" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
