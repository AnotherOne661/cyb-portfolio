import Image from "next/image";
import { SKILLS, EXPERIENCES } from "@/constants/data";
import Waves from "@/components/Waves";
import Aside from "@/components/Aside";
import ExperienceCard from "@/components/Experience";
import SkillCard from "@/components/SkillCard";
import Footer from "@/components/Footer";
import LangToggle from "@/components/LangToggle";

interface PageProps{
  params: Promise<{lng: string}>
}

const getTranslation = async (lng: string) => {
  const locales: Record<string, any> = {
    es: () => import('@/locales/es.json').then((module) => module.default),
    en: () => import('@/locales/en.json').then((module) => module.default),
    pt: () => import('@/locales/pt.json').then((module) => module.default),
  };

  const fetchLocale = locales[lng] || locales.es;
  return await fetchLocale();
};
  
export default async function Home({params} : PageProps) {

  const { lng } = await params;
  const dict = await getTranslation(lng);
 
  return (
    <div className="relative min-h-screen flex flex-col font-play">
      {/* HEADER */}
      <header className="flex flex-col md:flex-row w-[90%] max-w-7xl mx-auto my-8 gap-6 items-center z-10">
        <div className="w-40 md:w-45 transition-transform hover:rotate-12">
          <Image src="/images/icon-wo-bg.webp" alt="Logo" width={120} height={120} priority />
        </div>
        <nav className="flex-1 w-full bg-cyber-yellow/20 backdrop-blur-md border border-cyber-yellow/50 rounded-lg p-4 flex justify-center overflow-hidden">
          <a href="https://youtu.be/AN1RJF55NXI?si=tzpBl0gH46DeVbsi&t=66" target="_blank" 
             className="cyp-text text-xl md:text-3xl text-edge-red text-cyber-yellow hover:text-cyber-blue animate-pulse transition-all rop-shadow-[4px_4px_0px_#ff003c]">
            "A thing of beauty, I know... will never fade away."
          </a>
        </nav>
        <LangToggle />
      </header>

      <div className="flex flex-col md:flex-row flex-grow w-full max-w-7xl mx-auto px-4 gap-8">
        <Aside />
        
        <main className="flex-1 space-y-20 pb-20">
          {/* HERO SECTION */}
          <section className="relative pt-10 pb-16 border-b-2 border-black/10">
            {/* Decoración de fondo sutil: Un número de versión o ID de sistema */}
            <span className="absolute top-0 right-0 font-cyber text-cyber-red/70 text-3xl -z-10 select-none">
              v2.0.26
            </span>

            <div className="space-y-8">
              {/* TÍTULO CON EFECTO DE RECORTE */}
              <div className="relative inline-block">
                <h1 className="font-cyber text-6xl md:text-6xl text-cyber-dark leading-[0.8] drop-shadow-[6px_6px_0px_#ff003c] tracking-[-0.02em]">
                  ANOTHER <br className="md:hidden" /> 
                  <span className="tracking-[0.05em] text-transparent bg-clip-text bg-gradient-to-r from-cyber-dark to-cyber-red/80">
                    ONE661
                  </span>
                </h1>
                {/* Adorno: Línea de escaneo */}
                <div className="absolute -bottom-2 left-0 w-full h-1 bg-cyber-blue shadow-[0_0_10px_#00f0ff]"></div>
              </div>

              {/* BLOQUE DE BIO CON DISEÑO DE "TERMINAL" */}
              <div className="relative group max-w-4xl">
                {/* Decoración lateral estilo código */}
                <div className="absolute -left-4 top-0 h-full w-1 bg-gradient-to-b from-cyber-red via-cyber-blue to-transparent"></div>
                
                <div className="font-play space-y-4 bg-gradient-to-b from-cyber-red/25 via-cyber-red/25 to-cyber-blue/25 p-6 border-l-4 border-cyber-blue shadow-lg backdrop-blur-sm">
                                  <p className="text-xl md:text-2xl font-bold text-black/90 leading-relaxed text-pretty" dangerouslySetInnerHTML={{ __html: dict.hero.bio_p1 }}>
                  </p>
                  
                  <p className="text-lg md:text-xl font-medium text-black/70 leading-relaxed border-l-2 border-black/20 pl-4" dangerouslySetInnerHTML={{ __html: dict.hero.bio_p2 }}>
                  </p>
                </div>
              </div>

              {/* TAGS / STATUS BAR */}
              <div className="flex flex-wrap gap-4 pt-4">
                <div className="flex items-center">
                  <span className="bg-black text-edge-cyber  text-cyber font-play  px-4 py-2 font-cyber text-sm md:text-lg tracking-widest uppercase flex items-center gap-2">
                    <span className="w-2 h-2 bg-cyber-blue animate-ping rounded-full"></span>
                    Junior Full-Stack Web Dev
                  </span>
                </div>
                <div className="bg-cyber-red text-white px-4 py-2 font-play text-sm md:text-lg tracking-widest uppercase skew-x-[-12deg]">
                  DevOps / AiOps
                </div>
              </div>
            </div>
          </section>

          {/* SECCIÓN COMPETENCIAS CON FONDO FIJO (PROFICIENCY) */}
          <section className="relative w-full overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.4)] border-y-4 border-cyber-dark">
            <div 
              className="absolute inset-0 z-0 bg-fixed bg-center bg-no-repeat bg-cover opacity-60"
              style={{ backgroundImage: "url('/images/profbg.webp')" }}
            />
            
            <div className="absolute inset-0 bg-cyber-dark/40 backdrop-blur-[1px] z-10"></div>

            <div className="relative z-20 p-8 md:p-16">
              <h2 className="font-cyber text-3xl md:text-5xl text-cyber-yellow mb-12 tracking-[0.2em] italic drop-shadow-[3px_3px_0px_#000]" >
                {dict.sections.competencies}
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-12 justify-items-center">
                {SKILLS.map((item) => (
                  <SkillCard key={item.name} skill={item} />
                ))}
              </div>
            </div>
          </section>

          {/* SECCIÓN EXPERIENCIA */}
          <section>
            <h2 className="font-cyber text-3xl md:text-4xl mb-10 tracking-[0.15em] border-l-8 border-cyber-dark pl-4 uppercase text-edge-cyber">
                {dict.sections.experience}
            </h2>
            <div className="grid gap-8">
              {EXPERIENCES.map((exp, index) => (
                <ExperienceCard key={index} exp={exp} />
              ))}
            </div>
          </section>
        </main>
      </div>

      <Waves />
      <Footer />
    </div>
  );
}