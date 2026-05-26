import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export const Portfolio = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const projects = [
    { id: 1, title: 'Brand Identity', client: 'Lumina Studio', category: 'Design', aspect: 'aspect-[3/4]' },
    { id: 2, title: 'E-Commerce Platform', client: 'Aura', category: 'React', aspect: 'aspect-square' },
    { id: 3, title: 'Editorial Site', client: 'The Index', category: 'Webflow', aspect: 'aspect-[4/3]' },
    { id: 4, title: 'Creative Portfolio', client: 'Studio N', category: 'Framer', aspect: 'aspect-[3/4]' },
    { id: 5, title: 'Fintech App', client: 'Vault', category: 'React', aspect: 'aspect-[4/3]' },
    { id: 6, title: 'Marketing Site', client: 'Ozone', category: 'Webflow', aspect: 'aspect-square' },
  ];

  useGSAP(() => {
    gsap.fromTo(
      ".portfolio-item",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.15, ease: "power2.out" }
    );
  }, { scope: containerRef });

  return (
    <div className="w-full bg-white pb-32" ref={containerRef}>
      
      {/* Header */}
      <header className="w-full max-w-[1440px] mx-auto px-6 md:px-12 py-32 border-b-hairline flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
        <div>
          <h1 className="text-xs uppercase tracking-[0.2em] text-gray-400 mb-8">Selected Work</h1>
          <h2 className="text-fluid-5xl font-serif italic leading-none text-black">
            Our Portfolio.
          </h2>
        </div>
        <div className="flex gap-4">
          <button className="text-xs uppercase tracking-[0.2em] text-black border-b border-black pb-1">All</button>
          <button className="text-xs uppercase tracking-[0.2em] text-gray-400 hover:text-black transition-colors">Design</button>
          <button className="text-xs uppercase tracking-[0.2em] text-gray-400 hover:text-black transition-colors">Development</button>
        </div>
      </header>

      {/* Editorial Grid Layout */}
      <section className="w-full max-w-[1440px] mx-auto px-6 md:px-12 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
          
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className={`portfolio-item group cursor-pointer ${index % 2 !== 0 ? 'md:mt-32' : ''}`}
            >
              {/* Minimalist Image Area */}
              <div className={`w-full ${project.aspect} bg-gray-50 border-hairline mb-8 overflow-hidden relative`}>
                 <div className="absolute inset-0 bg-gray-100 flex items-center justify-center pattern-grid-lg opacity-50 group-hover:scale-105 transition-transform duration-1000 ease-out">
                    <span className="text-gray-300 font-serif italic text-4xl opacity-50">Project {project.id}</span>
                 </div>
              </div>

              {/* Meta Info */}
              <div className="flex flex-col">
                <div className="flex justify-between items-baseline mb-2">
                  <h3 className="text-2xl font-serif italic text-black">{project.title}</h3>
                  <span className="text-xs text-gray-400 uppercase tracking-widest">{project.category}</span>
                </div>
                <div className="w-full h-px bg-gray-200 my-4 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-500 font-light">Client</span>
                  <span className="text-sm font-medium text-black">{project.client}</span>
                </div>
              </div>
            </div>
          ))}

        </div>
      </section>

    </div>
  );
};
