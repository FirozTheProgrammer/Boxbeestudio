import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export const Services = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo(
      ".header-reveal",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: "power2.out" }
    );

    gsap.utils.toArray('.service-block').forEach((block: any) => {
      gsap.fromTo(block,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: block,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });

    // Floating tags entrance & auto-move on scroll
    gsap.fromTo([".parallax-1", ".parallax-2", ".parallax-3"], 
      { opacity: 0, scale: 0.8, y: 50 },
      { 
        opacity: 1, 
        scale: 1, 
        y: 0, 
        duration: 1, 
        stagger: 0.2, 
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: ".parallax-1",
          start: "top 80%",
        },
        onComplete: () => {
          gsap.to(".float-1", { x: 40, y: -60, yoyo: true, repeat: -1, ease: "sine.inOut", duration: 3 });
          gsap.to(".float-2", { x: -50, y: 50, yoyo: true, repeat: -1, ease: "sine.inOut", duration: 4, delay: 0.5 });
          gsap.to(".float-3", { x: 60, y: -40, yoyo: true, repeat: -1, ease: "sine.inOut", duration: 3.5, delay: 1 });
        }
      }
    );

    // Mouse Parallax
    const onMouseMove = (e: MouseEvent) => {
      const { clientX } = e;
      const x = (clientX / window.innerWidth - 0.5) * 100;
      
      gsap.to(".parallax-1", { x: x * 1.5, duration: 1, ease: "power2.out" });
      gsap.to(".parallax-2", { x: x * -1.2, duration: 1.5, ease: "power2.out" });
      gsap.to(".parallax-3", { x: x * 0.8, duration: 0.8, ease: "power2.out" });
    };

    window.addEventListener("mousemove", onMouseMove);

    return () => window.removeEventListener("mousemove", onMouseMove);
  }, { scope: containerRef });

  return (
    <div className="w-full flex flex-col items-center pb-32" ref={containerRef}>
      
      {/* Brutalist Header */}
      <header className="w-full max-w-[1440px] mx-auto px-6 md:px-12 pt-32 pb-24 border-b-hairline flex flex-col relative overflow-hidden">
        <h1 className="header-reveal text-xl font-sans uppercase tracking-[0.2em] text-gray-500 mb-8 relative z-10">Capabilities</h1>
        <h2 className="header-reveal text-fluid-7xl font-heading leading-none text-white uppercase max-w-5xl relative z-10">
          We build digital products that stand out.
        </h2>

        {/* Parallax Elements */}
        <div className="parallax-1 absolute top-[20%] right-[20%] pointer-events-none z-20 hidden md:block">
           <div className="float-1 bg-[#0000FF] text-white px-4 py-1 text-sm md:text-base font-sans font-medium select-none uppercase tracking-widest">
             Engineering
           </div>
        </div>
        <div className="parallax-2 absolute bottom-[20%] left-[40%] pointer-events-none z-20 hidden md:block">
           <div className="float-2 bg-[#FFFF00] text-black px-4 py-1 text-sm md:text-base font-sans font-medium select-none uppercase tracking-widest">
             Design
           </div>
        </div>
        <div className="parallax-3 absolute top-[50%] right-[10%] pointer-events-none z-20 hidden md:block">
           <div className="float-3 bg-[#FF0000] text-white px-4 py-1 text-sm md:text-base font-sans font-medium select-none uppercase tracking-widest">
             Strategy
           </div>
        </div>
      </header>

      {/* Services List */}
      <section className="w-full max-w-[1440px] mx-auto px-6 md:px-12 py-24 flex flex-col">
        
        <div className="service-block group grid grid-cols-1 md:grid-cols-12 gap-12 border-b-hairline pb-24 mb-24 hover:bg-white/5 transition-colors duration-500 p-8 -mx-8 rounded-2xl cursor-pointer">
          <div className="md:col-span-4">
             <h2 className="text-2xl font-heading uppercase tracking-widest text-gray-500 group-hover:text-white transition-colors duration-500 mb-4">01</h2>
             <h2 className="text-fluid-4xl font-heading uppercase text-white group-hover:translate-x-4 transition-transform duration-500">Identity & Design</h2>
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

        <div className="service-block group grid grid-cols-1 md:grid-cols-12 gap-12 border-b-hairline pb-24 mb-24 hover:bg-white/5 transition-colors duration-500 p-8 -mx-8 rounded-2xl cursor-pointer">
          <div className="md:col-span-4">
             <h2 className="text-2xl font-heading uppercase tracking-widest text-gray-500 group-hover:text-white transition-colors duration-500 mb-4">02</h2>
             <h2 className="text-fluid-4xl font-heading uppercase text-white group-hover:translate-x-4 transition-transform duration-500">No-Code Engineering</h2>
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

        <div className="service-block group grid grid-cols-1 md:grid-cols-12 gap-12 border-b-hairline pb-24 hover:bg-white/5 transition-colors duration-500 p-8 -mx-8 rounded-2xl cursor-pointer">
          <div className="md:col-span-4">
             <h2 className="text-2xl font-heading uppercase tracking-widest text-gray-500 group-hover:text-white transition-colors duration-500 mb-4">03</h2>
             <h2 className="text-fluid-4xl font-heading uppercase text-white group-hover:translate-x-4 transition-transform duration-500">Custom React Builds</h2>
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
