'use client';
import { useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';

 type Locale = 'en' | 'es' | 'pt';

  interface Language {
    code: Locale;
    label: string;
  }

export default function LangToggle() {
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const languages : Language[]= [
    { code: 'en', label: 'ENGLISH_V2.0' },
    { code: 'es', label: 'ESPAÑOL_V1.0' },
    { code: 'pt', label: 'PORTUGUÊS_V1.0' }
  ];
 
  const currentLang = languages.find(l => pathname.startsWith(`/${l.code}`)) || languages[1];

  const changeLanguage = (newLang : Locale) => {
    const newPath = pathname.replace(/^\/(en|es|pt)/, `/${newLang}`);
    router.push(newPath);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left z-50">
      {/* Botón Principal */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="font-play text-[10px] md:text-xs tracking-widest bg-cyber-red text-white px-6 py-2 skew-x-[-12deg] hover:bg-cyber-blue transition-all duration-300 shadow-[4px_4px_0px_#000] flex items-center gap-2"
      >
        {currentLang.label}
        <span className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>▼</span>
      </button>

      {/* Menú Dropdown */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-cyber-dark border-2 border-cyber-blue shadow-[8px_8px_0px_rgba(0,0,0,0.8)] animate-in fade-in zoom-in duration-200 origin-top-right">
          <div className="py-1 flex flex-col">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => changeLanguage(lang.code)}
                className={`px-4 py-3 text-left font-cyber text-[10px] tracking-[0.2em] transition-colors
                  ${currentLang.code === lang.code 
                    ? 'bg-cyber-blue text-cyber-dark font-black' 
                    : 'text-cyber-blue hover:bg-cyber-blue/20'
                  }`}
              >
                {">"} {lang.label}
              </button>
            ))}
          </div>
          {/* Decoración HUD inferior */}
          <div className="h-1 w-full bg-gradient-to-r from-cyber-blue via-transparent to-cyber-red opacity-50"></div>
        </div>
      )}
    </div>
  );
}