'use client';
import { usePathname, useRouter } from 'next/navigation';

export default function LangToggle() {
  const router = useRouter();
  const pathname = usePathname();

  const toggleLanguage = () => {
    const newLang = pathname.startsWith('/en') ? 'es' : 'en';
    const newPath = pathname.replace(/^\/(en|es)/, `/${newLang}`);
    router.push(newPath);
  };

  return (
    <button 
      onClick={toggleLanguage}
      className="font-play text-xs tracking-widest bg-cyber-red text-white px-4 py-2 skew-x-[-12deg] hover:bg-cyber-blue transition-colors shadow-[4px_4px_0px_#000]"
    >
      {pathname.startsWith('/en') ? 'ESPAÑOL_V1.0' : 'ENGLISH_V2.0'}
    </button>
  );
}