import { Link } from 'react-router-dom';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export const Home = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Elegant text reveal animation
    gsap.fromTo(
      ".reveal-text",
      { opacity: 0, y: 30, rotationX: -20 },
      { opacity: 1, y: 0, rotationX: 0, duration: 1.2, stagger: 0.15, ease: "power3.out", delay: 0.2 }
    );
    
    gsap.fromTo(
      ".reveal-fade",
      { opacity: 0 },
      { opacity: 1, duration: 1.5, ease: "power2.out", delay: 0.8 }
    );
  }, { scope: containerRef });

  return (
    <div className="w-full flex flex-col items-center" ref={containerRef}>
      
      {/* Editorial Hero Section */}
      <section className="w-full max-w-[1440px] mx-auto px-6 md:px-12 pt-32 pb-40 flex flex-col items-start border-b-hairline">
        <h1 className="text-fluid-7xl font-serif italic leading-[0.9] mb-12 text-black max-w-5xl" style={{ perspective: "1000px" }}>
          <div className="overflow-hidden"><div className="reveal-text origin-bottom">Crafting minimal</div></div>
          <div className="overflow-hidden"><div className="reveal-text origin-bottom text-gray-400">digital experiences</div></div>
          <div className="overflow-hidden"><div className="reveal-text origin-bottom">for modern brands.</div></div>
        </h1>
        <div className="reveal-fade flex flex-col sm:flex-row gap-8 items-start sm:items-center">
          <p className="text-base text-gray-500 max-w-md font-light leading-relaxed">
            Form Studio is an independent design practice focusing on identity, editorial web design, and bespoke React architectures.
          </p>
          <Link to="/services" className="btn-minimal shrink-0">
            Our Expertise
          </Link>
        </div>
      </section>

      {/* Minimalist Grid / List */}
      <section className="w-full max-w-[1440px] mx-auto px-6 md:px-12 py-32 border-b-hairline">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          
          <div className="md:col-span-4">
            <h2 className="text-xs uppercase tracking-[0.2em] text-gray-400 mb-8">Selected Disciplines</h2>
          </div>

          <div className="md:col-span-8 flex flex-col">
            
            <div className="border-t-hairline py-12 group hover:bg-gray-50 transition-colors duration-500 cursor-pointer flex justify-between items-center px-4 -mx-4">
              <div>
                <h3 className="text-fluid-3xl font-serif italic mb-2 text-black">Art Direction</h3>
                <p className="text-sm text-gray-500 font-light">Visual identity and brand positioning.</p>
              </div>
              <span className="text-gray-300 group-hover:text-black transition-colors duration-300">→</span>
            </div>

            <div className="border-t-hairline py-12 group hover:bg-gray-50 transition-colors duration-500 cursor-pointer flex justify-between items-center px-4 -mx-4">
              <div>
                <h3 className="text-fluid-3xl font-serif italic mb-2 text-black">Webflow & Framer</h3>
                <p className="text-sm text-gray-500 font-light">High-fidelity development without code.</p>
              </div>
              <span className="text-gray-300 group-hover:text-black transition-colors duration-300">→</span>
            </div>

            <div className="border-t-hairline border-b-hairline py-12 group hover:bg-gray-50 transition-colors duration-500 cursor-pointer flex justify-between items-center px-4 -mx-4">
              <div>
                <h3 className="text-fluid-3xl font-serif italic mb-2 text-black">Creative Engineering</h3>
                <p className="text-sm text-gray-500 font-light">Custom React applications and fluid GSAP physics.</p>
              </div>
              <span className="text-gray-300 group-hover:text-black transition-colors duration-300">→</span>
            </div>

          </div>
        </div>
      </section>

      {/* Featured Template Teaser */}
      <section className="w-full max-w-[1440px] mx-auto px-6 md:px-12 py-32">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
          <h2 className="text-fluid-5xl font-serif italic text-black">Latest Release</h2>
          <Link to="/templates" className="link-minimal text-gray-500 hover:text-black">
            View All Templates
          </Link>
        </div>

        <div className="w-full aspect-[2/1] bg-gray-100 relative overflow-hidden group">
           {/* Abstract minimalist placeholder */}
           <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-1/3 h-2/3 border-hairline bg-white shadow-xl transform -rotate-6 group-hover:rotate-0 group-hover:scale-105 transition-all duration-700 ease-out flex flex-col p-4">
                 <div className="w-1/2 h-2 bg-gray-200 mb-4 rounded-full"></div>
                 <div className="w-full h-1 bg-gray-100 mb-2 rounded-full"></div>
                 <div className="w-3/4 h-1 bg-gray-100 mb-2 rounded-full"></div>
              </div>
           </div>
           
           <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
              <div>
                <h3 className="text-xl font-medium mb-1 bg-white/80 backdrop-blur-sm px-3 py-1 inline-block">FF Identity</h3>
                <br/>
                <p className="text-xs text-gray-500 uppercase tracking-widest bg-white/80 backdrop-blur-sm px-3 py-1 inline-block mt-1">Framer Template</p>
              </div>
              <div className="bg-black text-white text-sm font-medium px-4 py-2">
                $49
              </div>
           </div>
        </div>
      </section>

    </div>
  );
};
