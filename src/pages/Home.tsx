import { Link } from 'react-router-dom';
import { useRef, useState } from 'react';
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

  const [hoveredProduct, setHoveredProduct] = useState<string>('01');

  const digitalProducts = [
    { id: '01', name: 'FF IDENTITY', type: 'Framer', price: '$49', img: "/images/ff_identity_mockup_1779810702990.webp" },
    { id: '02', name: 'EDITORIAL OS', type: 'Webflow', price: '$79', img: "/images/editorial_os_mockup_1779810720630.webp" },
    { id: '03', name: 'MINIMAL E-COM', type: 'React', price: '$99', img: "/images/minimal_ecom_mockup_1779810739362.webp" },
    { id: '04', name: 'STUDIO PRO', type: 'Webflow', price: '$69', img: "/images/colorful_app_mockup_1779808535421.webp" },
    { id: '05', name: 'MONOCHROME', type: 'Framer', price: '$39', img: "/images/colorful_branding_1779808551322.webp" },
    { id: '06', name: 'AGENCY DARK', type: 'React', price: '$89', img: "/images/colorful_workspace_1779808518609.webp" }
  ];

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
             <Link to="/portfolio" className="relative overflow-hidden group/btn inline-flex items-center justify-center border-hairline px-8 py-4 font-heading text-2xl uppercase transition-colors duration-500 hover:text-black">
                <span className="absolute inset-0 bg-white translate-y-[100%] group-hover/btn:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"></span>
                <span className="relative z-10">View Work</span>
             </Link>
             <Link to="/contact" className="relative overflow-hidden group/btn inline-flex items-center justify-center border-hairline px-8 py-4 font-heading text-2xl uppercase transition-colors duration-500 hover:text-black">
                <span className="absolute inset-0 bg-white translate-y-[100%] group-hover/btn:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"></span>
                <span className="relative z-10">Contact</span>
             </Link>
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
          src="/images/realistic_studio_hero_1779808724537.webp" 
          alt="Studio Interior" 
          className="hero-img w-full h-[120%] object-cover opacity-80"
        />
      </section>

      {/* Ticker */}
      <div className="w-full marquee-container">
        <div className="marquee-content">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex">
              <span className="marquee-item">Web Design <span className="text-gray-600 font-sans">✦</span></span>
              <span className="marquee-item">Creative Dev <span className="text-gray-600 font-sans">✦</span></span>
              <span className="marquee-item">Brand Identity <span className="text-gray-600 font-sans">✦</span></span>
              <span className="marquee-item">E-Commerce <span className="text-gray-600 font-sans">✦</span></span>
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

        <div className="flex flex-col">
          {[
            { title: 'Lumina Studio', category: 'Brand & Web', year: '2024' },
            { title: 'The Index', category: 'Editorial', year: '2024' },
            { title: 'Vault Fintech', category: 'App Design', year: '2025' },
            { title: 'Aura Commerce', category: 'E-Com', year: '2025' }
          ].map((work, idx) => (
            <Link 
              key={idx} 
              to="/portfolio" 
              className="project-row brutalist-list-item group flex flex-col md:flex-row justify-between items-start md:items-center py-12 border-b-hairline hover:bg-white hover:text-black transition-colors duration-500 px-6 -mx-6 relative overflow-hidden md:overflow-visible"
            >
              <h3 className="text-4xl md:text-6xl font-heading uppercase relative z-10 group-hover:translate-x-8 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]">{work.title}</h3>
              
              <div className="flex gap-12 mt-4 md:mt-0 font-heading text-2xl uppercase tracking-widest text-gray-500 group-hover:text-gray-800 relative z-10 group-hover:-translate-x-8 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]">
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

        {/* Digital Products Index */}
        <section className="w-full max-w-[1440px] mx-auto px-6 md:px-12 py-32 flex flex-col border-t-hairline">
          <div className="flex justify-between items-end mb-16 border-b-hairline pb-8">
            <h2 className="text-fluid-5xl font-heading leading-none uppercase">Digital Products</h2>
            <Link to="/templates" className="font-sans text-sm uppercase tracking-[0.2em] text-gray-500 hover:text-white transition-colors">View Store →</Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative w-full">
            {/* Left side: List */}
            <div className="flex flex-col w-full">
              {/* Table Rows */}
              {digitalProducts.map((template) => (
                <Link 
                  to="/templates" 
                  key={template.id} 
                  className="product-row group relative grid grid-cols-1 md:grid-cols-12 gap-4 py-12 border-b border-gray-800 items-center transition-colors duration-500 brutalist-list-item overflow-hidden"
                  onMouseEnter={() => setHoveredProduct(template.id)}
                >
                  <div className="hidden md:block col-span-2 font-heading text-2xl text-gray-500 group-hover:text-white transition-colors duration-500 relative z-10 pl-6">{template.id}</div>
                  
                  <div className="col-span-1 md:col-span-7 relative z-10 flex items-center gap-6">
                    <h3 className="text-4xl md:text-6xl font-heading uppercase group-hover:translate-x-8 text-white group-hover:text-transparent group-hover:[-webkit-text-stroke:2px_white] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]">{template.name}</h3>
                    <span className="opacity-0 -translate-x-12 group-hover:opacity-100 group-hover:translate-x-0 text-white text-4xl transition-all duration-700 font-sans">→</span>
                  </div>
                  
                  <div className="col-span-1 md:col-span-3 text-right font-heading text-3xl uppercase tracking-widest text-gray-400 group-hover:text-white transition-colors duration-500 relative z-10 pr-6">
                    {template.price}
                  </div>
                </Link>
              ))}
            </div>

            {/* Right side: Sticky Image Preview */}
            <div className="hidden md:block w-full h-[700px] sticky top-32 p-4 border border-gray-800 bg-black">
              <div className="w-full h-full relative overflow-hidden flex items-center justify-center">
                {digitalProducts.map((template) => (
                  <img 
                    key={template.id}
                    src={template.img} 
                    alt={template.name}
                    className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                      hoveredProduct === template.id ? 'opacity-100 scale-100 filter-none' : 'opacity-0 scale-110 grayscale'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Hero Image 2 */}
      <section className="w-full h-[60vh] overflow-hidden border-y-hairline bg-gray-900 mt-16">
        <img 
          src="/images/realistic_desk_hero_1779808740043.webp" 
          alt="Studio Mockup" 
          className="hero-img w-full h-[120%] object-cover opacity-80"
        />
      </section>

    </div>
  );
};
