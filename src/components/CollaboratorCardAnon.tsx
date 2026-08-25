interface CollaboratorProps {
  collaborator_anon: {
    id: string;
    sector: string;
    description: string;
    role: string;
  };
}

export default function CollaboratorCardAnon({
  collaborator_anon,
}: CollaboratorProps) {
  return (
    <div className="flex flex-col md:flex-row gap-8 bg-white/40 backdrop-blur-md p-8 border-l-[12px] border-cyber-dark hover:border-cyber-red transition-all group shadow-[10px_10px_0px_rgba(0,0,0,0.3)]">
      <div className="flex flex-col md:flex-row justify-between items-start gap-8">

        <div className="flex-1 space-y-4">
          <div className="space-y-1">

            <span className="text-xl md:text-4xl font-bold uppercase leading-none group-hover/link:text-cyber-red group-hover:text-cyber-red transition-colors font-play flex items-center gap-2">
              {collaborator_anon.sector}
            </span>

            <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-4">
              <h3 className="text-3xl font-bold tracking-tighter text-corp-navy uppercase leading-none">
                {collaborator_anon.description}
              </h3>
            </div>

            <p className="text-sm font-medium tracking-wide text-slate-500 mt-4">
              {collaborator_anon.role}
            </p>

          </div>
        </div>

      </div>

      <div className="absolute left-0 bottom-0 h-[2px] w-0 bg-corp-accent group-hover:w-full transition-all duration-700 opacity-30" />
    </div>
  );
}