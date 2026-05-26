import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export const Templates = () => {
  const containerRef = useRef<HTMLDivElement>(null);

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
      ".template-card",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: "power2.out" }
    );
  }, { scope: containerRef });

  return (
    <div className="w-full bg-white pb-32" ref={containerRef}>
      
      {/* Header */}
      <header className="w-full max-w-[1440px] mx-auto px-6 md:px-12 py-32 border-b-hairline flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
        <div>
          <h1 className="text-xs uppercase tracking-[0.2em] text-gray-400 mb-8">Digital Products</h1>
          <h2 className="text-fluid-5xl font-serif italic leading-none text-black">
            Premium Templates.
          </h2>
        </div>
        <p className="text-sm text-gray-500 max-w-sm font-light">
          A collection of high-end, meticulously crafted templates for Framer, Webflow, and React. Built on robust, scalable design systems.
        </p>
      </header>

      {/* Product Gallery */}
      <section className="w-full max-w-[1440px] mx-auto px-6 md:px-12 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-24 gap-x-12">
          
          {templates.map((template) => (
            <div key={template.id} className="template-card group cursor-pointer">
              {/* Minimalist Image Placeholder */}
              <div className="w-full aspect-[4/5] bg-gray-50 border-hairline mb-6 relative overflow-hidden flex items-center justify-center">
                 <div className="absolute inset-0 bg-gray-100 transform origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-700 ease-out z-0"></div>
                 
                 <div className="relative z-10 w-3/4 aspect-square border-hairline bg-white shadow-sm flex flex-col p-4 transform group-hover:scale-95 transition-transform duration-700">
                    <div className="w-full h-4 border-b-hairline mb-4 pb-2 flex justify-between">
                       <span className="w-1/4 h-[2px] bg-gray-300"></span>
                       <span className="w-1/4 h-[2px] bg-gray-300"></span>
                    </div>
                    <div className="flex-grow flex flex-col gap-2">
                       <div className="w-full h-1/2 bg-gray-100"></div>
                       <div className="w-3/4 h-1/4 bg-gray-100"></div>
                    </div>
                 </div>
              </div>

              {/* Product Info */}
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-medium text-black mb-1 group-hover:text-gray-600 transition-colors">{template.name}</h3>
                  <p className="text-xs text-gray-400 uppercase tracking-widest">{template.type} Template</p>
                </div>
                <div className="text-sm font-medium text-black bg-gray-50 px-3 py-1 border-hairline group-hover:bg-black group-hover:text-white transition-colors duration-300">
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
