import Image from "next/image";

interface CollaboratorProps {
  collab: {
    name: string;
    icon: string;
    url: string;
  };
}

export default function CollaboratorCard({ collab }: CollaboratorProps) {
  return (
    <a 
      href={collab.url} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="group relative flex items-center gap-6 bg-white border border-slate-100 p-6 transition-all duration-300 hover:border-corp-accent/30 hover:shadow-[0_15px_35px_rgba(0,0,0,0.05)] hover:-translate-y-1"
    >
      {/* CONTENEDOR DE IMAGEN: 
          Aumentado a w-20 h-20 (80px) para darle más presencia al colaborador.
      */}
      <div className="relative w-20 h-20 shrink-0 rounded-full overflow-hidden border border-slate-200 bg-slate-50 transition-transform duration-500 group-hover:scale-105">
<Image 
          src={collab.icon} 
          alt={collab.name} 
          fill 
          sizes="80px"
          /* CAMBIO CLAVE: 'object-contain' mantiene la proporción.
             'p-3' (arriba) evita que se estire hasta los bordes.
          */
          className="object-contain grayscale group-hover:grayscale-0 transition-all duration-700 opacity-90 group-hover:opacity-100"
        />
      </div>

      {/* INFORMACIÓN */}
      <div className="flex-1 min-w-0">
        <h4 className="text-base font-bold text-corp-navy uppercase tracking-tight group-hover:text-corp-accent transition-colors truncate">
          {collab.name}
        </h4>
        <div className="flex items-center gap-2 mt-1">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">
            Verified Partner
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-slate-200 group-hover:bg-corp-accent transition-colors"></span>
        </div>
      </div>

      {/* ICONO DE SALIDA */}
      <div className="text-slate-300 group-hover:text-corp-accent transition-all duration-300 transform group-hover:translate-x-1 group-hover:-translate-y-1">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="18" 
          height="18" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2.5" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <path d="M7 17l9.2-9.2M17 17V7H7"/>
        </svg>
      </div>

      {/* DECORACIÓN INFERIOR */}
      <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-corp-accent transition-all duration-500 group-hover:w-full opacity-40"></div>
    </a>
  );
}