import { useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export const Templates = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const templates = [
    { id: 1, name: 'FF IDENTITY', type: 'Framer', price: '$49', img: '/images/ff_identity_mockup_1779810702990.webp' },
    { id: 2, name: 'EDITORIAL OS', type: 'Webflow', price: '$79', img: '/images/editorial_os_mockup_1779810720630.webp' },
    { id: 3, name: 'MINIMAL E-COM', type: 'React', price: '$99', img: '/images/minimal_ecom_mockup_1779810739362.webp' },
    { id: 4, name: 'STUDIO PRO', type: 'Webflow', price: '$69', img: '/images/colorful_app_mockup_1779808535421.webp' },
    { id: 5, name: 'MONOCHROME', type: 'Framer', price: '$39', img: '/images/colorful_branding_1779808551322.webp' },
    { id: 6, name: 'AGENCY DARK', type: 'React', price: '$89', img: '/images/colorful_workspace_1779808518609.webp' },
    { id: 7, name: 'DESIGN SYSTEM UI', type: 'Figma', price: '$29', img: '/images/real_studio_app_1779795446201.webp' },
  ];

  const [selectedCategory, setSelectedCategory] = useState('All');
  const categories = ['All', 'React', 'Framer', 'Webflow', 'Figma'];

  const filteredTemplates = selectedCategory === 'All' 
    ? templates 
    : templates.filter(t => t.type === selectedCategory);

  useGSAP(() => {
    gsap.fromTo(
      ".header-reveal",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: "power2.out" }
    );

    cardRefs.current.forEach((card) => {
      if(!card) return;
      gsap.fromTo(card,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
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
        <h1 className="header-reveal text-xl font-sans uppercase tracking-[0.2em] text-gray-500 mb-8 relative z-10">Digital Products</h1>
        <h2 className="header-reveal text-fluid-7xl font-heading leading-none text-white uppercase relative z-10">
          Premium Templates
        </h2>

        {/* Parallax Elements */}
        <div className="parallax-1 absolute top-[20%] right-[20%] pointer-events-none z-0 hidden md:block">
           <div className="float-1 bg-[#0000FF] text-white px-4 py-1 text-sm md:text-base font-sans font-medium select-none uppercase tracking-widest">
             Framer
           </div>
        </div>
        <div className="parallax-2 absolute bottom-[20%] left-[40%] pointer-events-none z-0 hidden md:block">
           <div className="float-2 bg-[#FFFF00] text-black px-4 py-1 text-sm md:text-base font-sans font-medium select-none uppercase tracking-widest">
             React
           </div>
        </div>
        <div className="parallax-3 absolute top-[50%] right-[10%] pointer-events-none z-0 hidden md:block">
           <div className="float-3 bg-[#FF0000] text-white px-4 py-1 text-sm md:text-base font-sans font-medium select-none uppercase tracking-widest">
             Webflow
           </div>
        </div>
        <p className="header-reveal text-2xl font-sans text-gray-400 font-light max-w-2xl mt-12 uppercase tracking-widest leading-relaxed">
          A collection of high-end, meticulously crafted templates for Framer, Webflow, React, and Figma. Built on robust, scalable design systems.
        </p>
      </header>

      {/* Product Gallery */}
      <section className="w-full max-w-[1440px] mx-auto px-6 md:px-12 py-24">
        {/* Category Filter */}
        <div className="flex flex-wrap items-center gap-4 mb-16 border-b-hairline pb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-8 py-3 border-hairline font-heading text-2xl uppercase transition-colors ${
                selectedCategory === category
                  ? 'bg-white text-black'
                  : 'bg-transparent text-gray-500 hover:text-white hover:border-gray-500'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-24 gap-x-12">
          
          {filteredTemplates.map((template, index) => (
            <div key={template.id} ref={el => { if (el) cardRefs.current[index] = el; }} className="group cursor-pointer flex flex-col">
              {/* Minimalist Image Placeholder */}
              <div className="w-full aspect-[4/5] border-hairline mb-6 relative overflow-hidden bg-gray-900 flex items-center justify-center">
                 <img src={template.img} alt={template.name} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-all duration-700 ease-out" />
                 
                 <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-black/50 backdrop-blur-sm">
                    <span className="relative overflow-hidden group/btn inline-flex items-center justify-center bg-white text-black px-10 py-4 font-heading text-3xl uppercase tracking-widest transition-colors duration-500 hover:text-white">
                      <span className="absolute inset-0 bg-black translate-y-[100%] group-hover/btn:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"></span>
                      <span className="relative z-10">Buy Now</span>
                    </span>
                 </div>
              </div>

              {/* Product Info */}
              <div className="flex justify-between items-start border-t-hairline pt-4">
                <div>
                  <h3 className="text-3xl font-heading text-white uppercase group-hover:pl-4 transition-all duration-300">{template.name}</h3>
                  <p className="text-lg font-heading text-gray-500 uppercase tracking-widest mt-2">{template.type} Template</p>
                </div>
                <div className="text-2xl font-heading text-white uppercase tracking-widest">
                  {template.price}
                </div>
              </div>
            </div>
          ))}

        </div>
      </section>

    </div>
  );
};
