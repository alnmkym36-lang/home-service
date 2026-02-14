
import React from 'react';
import { useApp } from '../App';

const SocialProof: React.FC = () => {
  const { theme, t } = useApp();
  
  const stats = [
    { label: t.socialProof.stats[0].label, value: t.socialProof.stats[0].value, icon: "✨" },
    { label: t.socialProof.stats[1].label, value: t.socialProof.stats[1].value, icon: "👷" },
    { label: t.socialProof.stats[2].label, value: t.socialProof.stats[2].value, icon: "⏱️" },
    { label: t.socialProof.stats[3].label, value: t.socialProof.stats[3].value, icon: "⭐" },
  ];

  return (
    <div className={`transition-colors duration-500 border-y py-12 ${theme === 'dark' ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-100'}`}>
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center text-center space-y-2 group">
              <span className="text-4xl mb-2 grayscale group-hover:grayscale-0 transition-all transform group-hover:scale-110">{stat.icon}</span>
              <span className={`text-3xl md:text-4xl font-black transition-colors ${theme === 'dark' ? 'text-blue-400' : 'text-blue-900'}`}>{stat.value}</span>
              <span className={`font-bold transition-colors ${theme === 'dark' ? 'text-slate-400' : 'text-slate-500'}`}>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SocialProof;
