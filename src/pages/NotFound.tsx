import { Link } from 'react-router-dom';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export const NotFound = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo(
      ".error-fade",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: "power4.out" }
    );
  }, { scope: containerRef });

  return (
    <div className="w-full min-h-screen bg-black flex flex-col justify-center items-center px-6 relative overflow-hidden" ref={containerRef}>
      <h1 className="text-[20vw] md:text-[250px] font-heading leading-[0.8] text-white error-fade mix-blend-difference z-10">
        404
      </h1>
      <h2 className="text-2xl md:text-5xl font-heading uppercase tracking-widest text-gray-500 mb-16 error-fade text-center z-10 mt-8">
        Void Reached
      </h2>
      <div className="error-fade z-10">
        <Link 
          to="/" 
          className="relative overflow-hidden group/btn inline-flex items-center justify-center border border-white/20 px-12 py-5 font-heading uppercase tracking-widest text-lg md:text-2xl transition-colors duration-500 hover:text-black text-white"
        >
          <span className="relative z-10">Return Home</span>
          <div className="absolute inset-0 bg-white translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] z-0"></div>
        </Link>
      </div>
    </div>
  );
};
