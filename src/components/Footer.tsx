import Image from "next/image";

export default function Footer() {
  return (
    <footer className="mt-20 bg-black text-cyber-yellow p-10 font-play border-t-4 border-cyber-red">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 items-center gap-8">
        
        <div className="flex justify-center md:justify-start gap-6 font-play text-sm tracking-widest">
          <a href="https://github.com/AnotherOne661" className="hover:text-cyber-blue transition-colors underline underline-offset-8">GITHUB</a>
          <a href="#" className="hover:text-cyber-blue transition-colors underline underline-offset-8">LINKEDIN</a>
        </div>

        <div className="flex justify-center order-first md:order-none">
          <div className="relative w-40 h-40 hover:rotate-12 transition-transform duration-500">
            <Image 
              src="/images/icon-wo-bg.webp" 
              alt="Logo" 
              fill 
              className="object-contain"
            />
          </div>
        </div>

        <div className="text-center md:text-right opacity-70 text-xs tracking-[0.2em] font-play uppercase">
          SYSTEM_STATUS: ONLINE <br/>
          © {new Date().getFullYear()} ANOTHERONE661
        </div>
      </div>
    </footer>
  );
}