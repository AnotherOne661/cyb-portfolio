import Image from "next/image";

interface ExperienceProps {
  exp: {
    company: string;
    role: string;
    period: string;
    image: string;
    url?: string;
    description?: string;
    location?: string;
  };
}

export default function ExperienceCard({ exp }: ExperienceProps) {
  const formatUrl = (url?: string) => {
    if (!url) return "#";
    return url.startsWith("http") ? url : `https://${url}`;
  };

  return (
    <div className="flex flex-col md:flex-row gap-8 bg-white/40 backdrop-blur-md p-8 border-l-[12px] border-cyber-dark hover:border-cyber-red transition-all group shadow-[10px_10px_0px_rgba(0,0,0,0.3)]">
      
      {/* Contenedor de Imagen/Logo */}
      <div className="w-full md:w-56 h-32 relative bg-white border-2 border-cyber-dark shrink-0 overflow-hidden shadow-inner">
        <Image 
          src={exp.image} 
          alt={exp.company} 
          fill 
          sizes="(max-width: 768px) 100vw, 224px"
          className="object-contain p-4 group-hover:scale-110 transition-transform duration-500" 
        />
      </div>
      
      <div className="flex-1 space-y-3">
        <div className="flex justify-between items-start flex-wrap gap-4">
          <a 
            href={formatUrl(exp.url)} 
            target="_blank" 
            rel="noopener noreferrer"
            className="block group/link"
          >
            <h3 className="text-3xl md:text-4xl font-bold uppercase leading-none group-hover/link:text-cyber-red group-hover:text-cyber-red transition-colors font-play flex items-center gap-2">
              {exp.role}
              {exp.url && (
                <span className="text-sm opacity-0 group-hover/link:opacity-100 transition-opacity">
                  ↗
                </span>
              )}
            </h3>
          </a>
          
          <span className="bg-black text-cyber-yellow text-sm px-3 py-1 font-play tracking-widest self-start">
            {exp.period}
          </span>
        </div>
        
        <p className="text-cyber-red font-bold text-sm md:text-base uppercase tracking-[0.2em] italic">
          {exp.company} {exp.location && `// ${exp.location}`}
        </p>
        
        {exp.description && (
          <p className="mt-4 text-base md:text-lg font-bold text-black/90 leading-relaxed border-t border-black/10 pt-4 text-pretty">
            {exp.description}
          </p>
        )}
      </div>
    </div>
  );
}