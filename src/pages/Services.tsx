import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export const Services = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo(
      ".header-reveal",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: "power2.out" }
    );
  }, { scope: containerRef });

  return (
    <div className="w-full flex flex-col items-center pb-32" ref={containerRef}>
      
      {/* Brutalist Header */}
      <header className="w-full max-w-[1440px] mx-auto px-6 md:px-12 pt-32 pb-24 border-b-hairline flex flex-col">
        <h1 className="header-reveal text-xl font-sans uppercase tracking-[0.2em] text-gray-500 mb-8">Capabilities</h1>
        <h2 className="header-reveal text-fluid-7xl font-heading leading-none text-white uppercase max-w-5xl">
          We build digital products that stand out.
        </h2>
      </header>

      {/* Services List */}
      <section className="w-full max-w-[1440px] mx-auto px-6 md:px-12 py-24 flex flex-col">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 border-b-hairline pb-24 mb-24">
          <div className="md:col-span-4">
             <h2 className="text-2xl font-heading uppercase tracking-widest text-gray-500 mb-4">01</h2>
             <h2 className="text-fluid-4xl font-heading uppercase text-white">Identity & Design</h2>
          </div>
          <div className="md:col-span-8 flex flex-col justify-start">
             <p className="text-2xl font-sans text-gray-400 font-light max-w-2xl mb-12 uppercase tracking-widest leading-relaxed">
               Brand positioning, visual identity systems, and user interface design. We create aesthetics that resonate and leave a lasting impression.
             </p>
             <ul className="border-t-hairline pt-8 grid grid-cols-1 sm:grid-cols-2 gap-8">
               {['Brand Strategy', 'Visual Identity', 'UI/UX Design', 'Design Systems'].map((item, idx) => (
                 <li key={idx} className="text-2xl font-heading uppercase tracking-widest text-white flex items-center gap-4">
                   <span className="w-2 h-2 bg-white"></span> {item}
                 </li>
               ))}
             </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 border-b-hairline pb-24 mb-24">
          <div className="md:col-span-4">
             <h2 className="text-2xl font-heading uppercase tracking-widest text-gray-500 mb-4">02</h2>
             <h2 className="text-fluid-4xl font-heading uppercase text-white">No-Code Engineering</h2>
          </div>
          <div className="md:col-span-8 flex flex-col justify-start">
             <p className="text-2xl font-sans text-gray-400 font-light max-w-2xl mb-12 uppercase tracking-widest leading-relaxed">
               High-fidelity, scalable websites built visually. Perfect for marketing sites, portfolios, and blogs that need to move fast.
             </p>
             <ul className="border-t-hairline pt-8 grid grid-cols-1 sm:grid-cols-2 gap-8">
               {['Webflow Development', 'Framer Sites', 'CMS Architecture', 'SEO Optimization'].map((item, idx) => (
                 <li key={idx} className="text-2xl font-heading uppercase tracking-widest text-white flex items-center gap-4">
                   <span className="w-2 h-2 bg-white"></span> {item}
                 </li>
               ))}
             </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 border-b-hairline pb-24">
          <div className="md:col-span-4">
             <h2 className="text-2xl font-heading uppercase tracking-widest text-gray-500 mb-4">03</h2>
             <h2 className="text-fluid-4xl font-heading uppercase text-white">Custom React Builds</h2>
          </div>
          <div className="md:col-span-8 flex flex-col justify-start">
             <p className="text-2xl font-sans text-gray-400 font-light max-w-2xl mb-12 uppercase tracking-widest leading-relaxed">
               Bespoke web applications with fluid GSAP physics, WebGL integrations, and robust modern architectures.
             </p>
             <ul className="border-t-hairline pt-8 grid grid-cols-1 sm:grid-cols-2 gap-8">
               {['React & Next.js', 'GSAP Animation', 'Three.js / WebGL', 'Headless CMS', 'API Integrations', 'Performance Audits'].map((item, idx) => (
                 <li key={idx} className="text-2xl font-heading uppercase tracking-widest text-white flex items-center gap-4">
                   <span className="w-2 h-2 bg-white"></span> {item}
                 </li>
               ))}
             </ul>
          </div>
        </div>

      </section>
    </div>
  );
};
