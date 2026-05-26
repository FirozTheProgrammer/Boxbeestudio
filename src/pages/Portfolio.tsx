import { useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export const Portfolio = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeFilter, setActiveFilter] = useState('All');

  const projects = [
    { id: '01', title: 'Brand Identity', client: 'Lumina Studio', category: 'Design', aspect: 'aspect-[3/4]', type: 'Brand Identity & Web', img: '/images/ff_identity_mockup_1779810702990.png' },
    { id: '02', title: 'E-Commerce', client: 'Aura', category: 'React', aspect: 'aspect-square', type: 'Creative Engineering', img: '/images/minimal_ecom_mockup_1779810739362.png' },
    { id: '03', title: 'Editorial Site', client: 'The Index', category: 'Webflow', aspect: 'aspect-[4/3]', type: 'No-Code Development', img: '/images/editorial_os_mockup_1779810720630.png' },
    { id: '04', title: 'Portfolio', client: 'Studio N', category: 'Framer', aspect: 'aspect-[3/4]', type: 'Framer Website', img: '/images/colorful_app_mockup_1779808535421.png' },
  ];

  const filteredProjects = projects.filter(project => {
    if (activeFilter === 'All') return true;
    if (activeFilter === 'Design') return project.category === 'Design';
    if (activeFilter === 'Dev') return project.category !== 'Design'; // React, Webflow, Framer
    return true;
  });

  useGSAP(() => {
    gsap.fromTo(
      ".header-reveal",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: "power2.out" }
    );

    projectRefs.current.forEach((item) => {
      if (!item) return;
      const img = item.querySelector('.parallax-img');

      gsap.fromTo(item,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
          }
        }
      );

      if (img) {
        gsap.fromTo(img,
          { scale: 1.1 },
          {
            scale: 1,
            ease: "none",
            scrollTrigger: {
              trigger: item,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            }
          }
        );
      }
    });
  }, { scope: containerRef });

  return (
    <div className="w-full flex flex-col items-center pb-32" ref={containerRef}>
      
      {/* Brutalist Header */}
      <header className="w-full max-w-[1440px] mx-auto px-6 md:px-12 pt-32 pb-24 border-b-hairline flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
        <div>
          <h1 className="header-reveal text-xl font-sans uppercase tracking-[0.2em] text-gray-500 mb-8">Index</h1>
          <h2 className="header-reveal text-fluid-7xl font-heading leading-none text-white uppercase">
            Selected Works
          </h2>
        </div>
        <div className="header-reveal flex gap-8 font-heading text-3xl uppercase tracking-widest text-gray-500">
          <button 
            onClick={() => setActiveFilter('All')} 
            className={`${activeFilter === 'All' ? 'text-white border-b-hairline pb-2' : 'hover:text-white transition-colors'}`}
          >
            All
          </button>
          <button 
            onClick={() => setActiveFilter('Design')} 
            className={`${activeFilter === 'Design' ? 'text-white border-b-hairline pb-2' : 'hover:text-white transition-colors'}`}
          >
            Design
          </button>
          <button 
            onClick={() => setActiveFilter('Dev')} 
            className={`${activeFilter === 'Dev' ? 'text-white border-b-hairline pb-2' : 'hover:text-white transition-colors'}`}
          >
            Dev
          </button>
        </div>
      </header>

      {/* Projects Grid */}
      <section className="w-full max-w-[1440px] mx-auto px-6 md:px-12 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
          
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id} 
              ref={el => { if (el) projectRefs.current[index] = el; }}
              className={`group cursor-pointer flex flex-col ${index % 2 !== 0 ? 'md:mt-48' : ''}`}
            >
              {/* Image Area */}
              <div className={`w-full ${project.aspect} border-hairline overflow-hidden relative mb-6 bg-gray-900 group-hover:border-white transition-colors duration-500`}>
                 <img 
                    src={project.img} 
                    alt={project.title} 
                    className="parallax-img absolute inset-0 w-full h-[120%] object-cover opacity-80 group-hover:opacity-100 transition-all duration-700 ease-out -top-[10%]" 
                 />
                 <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-black/50 backdrop-blur-sm">
                    <span className="text-white border-hairline px-8 py-4 font-heading text-3xl uppercase tracking-widest">View Project</span>
                 </div>
              </div>
              
              {/* Text Area */}
              <div className="flex justify-between items-end border-t-hairline pt-6">
                <div>
                  <h3 className="text-4xl md:text-5xl font-heading uppercase text-white mb-2 group-hover:pl-4 transition-all duration-300">{project.title}</h3>
                  <p className="text-xl font-heading uppercase tracking-widest text-gray-500 group-hover:pl-4 transition-all duration-300 delay-75">{project.type}</p>
                </div>
                <span className="text-2xl font-heading uppercase tracking-widest text-gray-600">{project.id}</span>
              </div>
            </div>
          ))}

        </div>
      </section>
    </div>
  );
};
