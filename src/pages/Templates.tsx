import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export const Templates = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const templates = [
    { id: 1, name: 'FF IDENTITY', type: 'Framer', price: '$49' },
    { id: 2, name: 'EDITORIAL OS', type: 'Webflow', price: '$79' },
    { id: 3, name: 'MINIMAL E-COM', type: 'React', price: '$99' },
    { id: 4, name: 'STUDIO PRO', type: 'Webflow', price: '$69' },
    { id: 5, name: 'MONOCHROME', type: 'Framer', price: '$39' },
    { id: 6, name: 'AGENCY DARK', type: 'React', price: '$89' },
  ];

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
  }, { scope: containerRef });

  return (
    <div className="w-full flex flex-col items-center pb-32" ref={containerRef}>
      
      {/* Brutalist Header */}
      <header className="w-full max-w-[1440px] mx-auto px-6 md:px-12 pt-32 pb-24 border-b-hairline flex flex-col">
        <h1 className="header-reveal text-xl font-sans uppercase tracking-[0.2em] text-gray-500 mb-8">Digital Products</h1>
        <h2 className="header-reveal text-fluid-7xl font-heading leading-none text-white uppercase">
          Premium Templates
        </h2>
        <p className="header-reveal text-2xl font-sans text-gray-400 font-light max-w-2xl mt-12 uppercase tracking-widest leading-relaxed">
          A collection of high-end, meticulously crafted templates for Framer, Webflow, and React. Built on robust, scalable design systems.
        </p>
      </header>

      {/* Product Gallery */}
      <section className="w-full max-w-[1440px] mx-auto px-6 md:px-12 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-24 gap-x-12">
          
          {templates.map((template, index) => (
            <div key={template.id} ref={el => { if (el) cardRefs.current[index] = el; }} className="group cursor-pointer flex flex-col">
              {/* Minimalist Image Placeholder */}
              <div className="w-full aspect-[4/5] border-hairline mb-6 relative overflow-hidden bg-gray-900 flex items-center justify-center">
                 <img src={index % 2 === 0 ? "/images/agency_interior_1779797602811.png" : "/images/app_mockup_realistic_1779797619474.png"} alt={template.name} className="absolute inset-0 w-full h-full object-cover grayscale opacity-50 group-hover:opacity-90 group-hover:scale-105 transition-all duration-700 ease-out" />
                 
                 <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-black/50 backdrop-blur-sm">
                    <span className="text-white border-hairline px-8 py-4 font-heading text-3xl uppercase tracking-widest">Buy Now</span>
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
