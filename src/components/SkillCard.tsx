import Image from "next/image";


interface SkillProps{
  skill: {
    name: string;
    icon: string;
    url: string;
  };
}
export default function SkillCard({ skill } : SkillProps) {
  return (
    <a 
      href={skill.url} 
      target="_blank" 
      className="group flex flex-col items-center"
    >
      {/* Contenedor aumentado: w-32 h-32 */}
      <div className="relative w-28 h-28 md:w-36 md:h-36 bg-white p-4 border-2 border-transparent group-hover:border-cyber-blue transition-all duration-300 shadow-[8px_8px_0px_rgba(0,0,0,0.8)] group-hover:shadow-[0_0_20px_#00f0ff] group-hover:-translate-y-2 flex items-center justify-center">
        <Image 
          src={skill.icon} 
          alt={skill.name} 
          fill 
          sizes="(max-width: 768px) 112px, 144px"
          className="object-contain p-4 grayscale group-hover:grayscale-0 transition-all duration-500" 
        />
      </div>
      <span className="mt-4 font-play text-xs tracking-[0.3em] text-cyber-blue opacity-0 group-hover:opacity-100 transition-all uppercase">
        {skill.name}
      </span>
    </a>
  );
}