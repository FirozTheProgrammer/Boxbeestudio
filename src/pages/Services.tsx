import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export const Services = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo(
      ".service-block",
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: "power2.out" }
    );
  }, { scope: containerRef });

  return (
    <div className="w-full bg-white pb-32" ref={containerRef}>
      
      {/* Header */}
      <header className="w-full max-w-[1440px] mx-auto px-6 md:px-12 py-32 border-b-hairline">
        <h1 className="text-xs uppercase tracking-[0.2em] text-gray-400 mb-8">Our Capabilities</h1>
        <p className="text-fluid-4xl font-serif italic leading-tight max-w-4xl text-black">
          We combine rigorous typographic principles with modern engineering to craft timeless digital platforms.
        </p>
      </header>

      {/* Services List */}
      <section className="w-full max-w-[1440px] mx-auto px-6 md:px-12 py-24">
        <div className="flex flex-col space-y-24">
          
          {/* Service 1 */}
          <div className="service-block grid grid-cols-1 md:grid-cols-12 gap-12 border-t-hairline pt-12">
            <div className="md:col-span-4">
              <span className="text-sm text-gray-400 font-medium">01</span>
              <h2 className="text-fluid-3xl font-serif italic mt-4 text-black">Identity & Design</h2>
            </div>
            <div className="md:col-span-6 md:col-start-6">
              <p className="text-lg text-gray-600 font-light leading-relaxed mb-8">
                We start with the fundamentals: typography, grid, and space. Our design process in Figma focuses on establishing a robust design system that feels elegant and editorial, completely stripping away the unnecessary.
              </p>
              <ul className="space-y-4 text-sm uppercase tracking-widest text-gray-500">
                <li className="flex items-center gap-4"><span className="w-4 h-[1px] bg-gray-300"></span> Art Direction</li>
                <li className="flex items-center gap-4"><span className="w-4 h-[1px] bg-gray-300"></span> UI/UX Prototyping</li>
                <li className="flex items-center gap-4"><span className="w-4 h-[1px] bg-gray-300"></span> Design Systems</li>
              </ul>
            </div>
          </div>

          {/* Service 2 */}
          <div className="service-block grid grid-cols-1 md:grid-cols-12 gap-12 border-t-hairline pt-12">
            <div className="md:col-span-4">
              <span className="text-sm text-gray-400 font-medium">02</span>
              <h2 className="text-fluid-3xl font-serif italic mt-4 text-black">No-Code Engineering</h2>
            </div>
            <div className="md:col-span-6 md:col-start-6">
              <p className="text-lg text-gray-600 font-light leading-relaxed mb-8">
                For marketing sites and portfolios, we utilize Framer and Webflow. This allows us to translate our meticulous Figma designs into pixel-perfect, highly animated live sites with zero compromise on quality.
              </p>
              <ul className="space-y-4 text-sm uppercase tracking-widest text-gray-500">
                <li className="flex items-center gap-4"><span className="w-4 h-[1px] bg-gray-300"></span> Webflow Development</li>
                <li className="flex items-center gap-4"><span className="w-4 h-[1px] bg-gray-300"></span> Framer Motion & Interactions</li>
                <li className="flex items-center gap-4"><span className="w-4 h-[1px] bg-gray-300"></span> CMS Architecture</li>
              </ul>
            </div>
          </div>

          {/* Service 3 */}
          <div className="service-block grid grid-cols-1 md:grid-cols-12 gap-12 border-t-hairline border-b-hairline pt-12 pb-12">
            <div className="md:col-span-4">
              <span className="text-sm text-gray-400 font-medium">03</span>
              <h2 className="text-fluid-3xl font-serif italic mt-4 text-black">Custom React Builds</h2>
            </div>
            <div className="md:col-span-6 md:col-start-6">
              <p className="text-lg text-gray-600 font-light leading-relaxed mb-8">
                When a project requires complex state management or bespoke interactions, we build custom React applications. We pair Vite, Tailwind CSS, and GSAP to deliver experiences that are both beautiful and incredibly performant.
              </p>
              <ul className="space-y-4 text-sm uppercase tracking-widest text-gray-500">
                <li className="flex items-center gap-4"><span className="w-4 h-[1px] bg-gray-300"></span> SPA Development</li>
                <li className="flex items-center gap-4"><span className="w-4 h-[1px] bg-gray-300"></span> Advanced GSAP Animation</li>
                <li className="flex items-center gap-4"><span className="w-4 h-[1px] bg-gray-300"></span> API Integration</li>
              </ul>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};
