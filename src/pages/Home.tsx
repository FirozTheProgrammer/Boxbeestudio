import { Link } from 'react-router-dom';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export const Home = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Massive text reveal
    gsap.fromTo(
      ".hero-text",
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0, duration: 1.2, stagger: 0.1, ease: "power4.out", delay: 0.2 }
    );
    
    // Image parallax
    gsap.fromTo(".hero-img", 
      { yPercent: 20, scale: 1.1 },
      { yPercent: -10, scale: 1, ease: "none", scrollTrigger: { trigger: ".hero-section", start: "top top", end: "bottom top", scrub: true }}
    );

    // List item borders
    const listItems = gsap.utils.toArray('.brutalist-list-item');
    listItems.forEach((item: any) => {
      gsap.fromTo(item, 
        { opacity: 0, x: -50 }, 
        { opacity: 1, x: 0, duration: 0.8, scrollTrigger: { trigger: item, start: "top 90%" }}
      );
    });

  }, { scope: containerRef });

  return (
    <div className="w-full flex flex-col items-center" ref={containerRef}>
      
      {/* Brutalist Hero */}
      <section className="hero-section w-full px-6 md:px-12 pt-32 pb-24 border-b-hairline flex flex-col">
        <h1 className="text-fluid-7xl font-heading leading-[0.8] mb-12 text-white uppercase max-w-[1440px] mx-auto w-full">
          <div className="overflow-hidden"><div className="hero-text">Digital Products</div></div>
          <div className="overflow-hidden"><div className="hero-text">Engineered for</div></div>
          <div className="overflow-hidden"><div className="hero-text text-gray-500">The Future.</div></div>
        </h1>
        
        <div className="w-full max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-end mt-12">
          <div className="md:col-span-5 flex gap-4">
             <Link to="/portfolio" className="border-hairline px-8 py-4 font-heading text-2xl uppercase hover:bg-white hover:text-black transition-colors">View Work</Link>
             <Link to="/contact" className="border-hairline px-8 py-4 font-heading text-2xl uppercase hover:bg-white hover:text-black transition-colors">Contact</Link>
          </div>
          <div className="md:col-span-7 flex justify-end">
            <p className="text-xl font-sans text-gray-400 font-light max-w-md text-right uppercase tracking-widest">
              BoxBee.Studio is a multidisciplinary design practice focusing on brutalist aesthetics and robust engineering.
            </p>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="w-full h-[60vh] md:h-[80vh] overflow-hidden border-b-hairline bg-gray-900">
        <img 
          src="/images/agency_interior_1779797602811.png" 
          alt="Studio Interior" 
          className="hero-img w-full h-[120%] object-cover grayscale opacity-80"
        />
      </section>

      {/* Ticker */}
      <div className="w-full marquee-container">
        <div className="marquee-content">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex">
              <span className="marquee-item">Web Design <span className="w-2 h-2 bg-white rounded-full"></span></span>
              <span className="marquee-item">Creative Development <span className="w-2 h-2 bg-white rounded-full"></span></span>
              <span className="marquee-item">Brand Identity <span className="w-2 h-2 bg-white rounded-full"></span></span>
              <span className="marquee-item">E-Commerce <span className="w-2 h-2 bg-white rounded-full"></span></span>
            </div>
          ))}
        </div>
      </div>

      {/* Brutalist Projects */}
      <section className="w-full max-w-[1440px] mx-auto px-6 md:px-12 py-32 flex flex-col">
        <div className="flex justify-between items-end mb-16 border-b-hairline pb-8">
          <h2 className="text-fluid-5xl font-heading leading-none uppercase">Projects</h2>
          <span className="font-sans text-sm uppercase tracking-[0.2em] text-gray-500">2024—2025</span>
        </div>

        <div className="flex flex-col border-t-hairline">
          {[
            { title: 'Lumina Studio', category: 'Brand & Web', year: '2024' },
            { title: 'The Index', category: 'Editorial', year: '2024' },
            { title: 'Vault Fintech', category: 'App Design', year: '2025' },
            { title: 'Aura Commerce', category: 'E-Com', year: '2025' }
          ].map((work, idx) => (
            <Link 
              key={idx} 
              to="/portfolio" 
              className="brutalist-list-item group flex flex-col md:flex-row justify-between items-start md:items-center py-12 border-b-hairline hover:bg-white hover:text-black transition-colors px-6 -mx-6"
            >
              <h3 className="text-4xl md:text-6xl font-heading uppercase">{work.title}</h3>
              <div className="flex gap-12 mt-4 md:mt-0 font-heading text-2xl uppercase tracking-widest text-gray-500 group-hover:text-gray-800">
                <span>{work.category}</span>
                <span>{work.year}</span>
              </div>
              </Link>
            ))}
          </div>
          
          <div className="mt-12 flex justify-center">
             <Link to="/portfolio" className="border-hairline px-8 py-4 font-heading text-2xl uppercase hover:bg-white hover:text-black transition-colors">View All Projects</Link>
          </div>
        </section>

        {/* Templates Preview Section */}
        <section className="w-full max-w-[1440px] mx-auto px-6 md:px-12 py-32 flex flex-col border-t-hairline">
          <div className="flex justify-between items-end mb-16 border-b-hairline pb-8">
            <h2 className="text-fluid-5xl font-heading leading-none uppercase">Digital Products</h2>
            <Link to="/templates" className="font-sans text-sm uppercase tracking-[0.2em] text-gray-500 hover:text-white transition-colors">View Store →</Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-y-16 gap-x-12">
            {[
              { id: 1, name: 'FF IDENTITY', type: 'Framer', price: '$49' },
              { id: 2, name: 'EDITORIAL OS', type: 'Webflow', price: '$79' },
              { id: 3, name: 'MINIMAL E-COM', type: 'React', price: '$99' }
            ].map((template, index) => (
              <div key={template.id} className="group cursor-pointer flex flex-col brutalist-list-item">
                <div className="w-full aspect-[4/5] border-hairline mb-6 relative overflow-hidden bg-gray-900 flex items-center justify-center">
                  <img src={index % 2 === 0 ? "/images/agency_interior_1779797602811.png" : "/images/app_mockup_realistic_1779797619474.png"} alt={template.name} className="absolute inset-0 w-full h-full object-cover grayscale opacity-50 group-hover:opacity-90 group-hover:scale-105 transition-all duration-700 ease-out" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-black/50 backdrop-blur-sm">
                      <span className="text-white border-hairline px-8 py-4 font-heading text-3xl uppercase tracking-widest">Buy Now</span>
                  </div>
                </div>
                <div className="flex justify-between items-start border-t-hairline pt-4">
                  <div>
                    <h3 className="text-3xl font-heading text-white uppercase group-hover:pl-4 transition-all duration-300">{template.name}</h3>
                    <p className="text-lg font-heading text-gray-500 uppercase tracking-widest mt-2">{template.type} Template</p>
                  </div>
                  <div className="text-2xl font-heading text-white uppercase tracking-widest">{template.price}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Hero Image 2 */}
      <section className="w-full h-[60vh] overflow-hidden border-y-hairline bg-gray-900 mt-16">
        <img 
          src="/images/workspace_realistic_1779797581487.png" 
          alt="Studio Mockup" 
          className="hero-img w-full h-[120%] object-cover grayscale opacity-80"
        />
      </section>

    </div>
  );
};
