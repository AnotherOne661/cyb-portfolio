const projects = [
  { name: "Cyberpunk RED Dataterm / GM Screen", href: "https://anothersdataterm.vercel.app" },
  { name: "Basic Portfolio", href: "https://anotherone-portfolio.vercel.app" },
];

export default function Aside() {
  return (
    <aside className="w-full md:w-[30%] text-center font-play border-b-4 md:border-b-0 md:border-r-4 border-black p-8 [border-image:linear-gradient(to_bottom_right,#ff003c,#fcee09)_1_100%]">
      <h2 className="text-2xl mb-8 drop-shadow-[1px_0_5px_#fcee09]">My web-related projects:</h2>
      <ul className="space-y-4">
        {projects.map((project) => (
          <li key={project.name}>
            <a href={project.href} target="_blank" className="text-cyber-yellow text-xl hover:text-cyber-red transition-all drop-shadow-[2px_0_5px_black]">
              {project.name}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
}