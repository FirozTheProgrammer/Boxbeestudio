import { Outlet, Link, NavLink, useLocation } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { CopyEmail } from './CopyEmail';

export const Layout = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const menuRef = useRef<HTMLDivElement>(null);
  const navContainerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    if (isOpen) {
      gsap.to(menuRef.current, { height: '100vh', opacity: 1, duration: 0.7, ease: 'power4.inOut' });
      gsap.fromTo('.mobile-link', 
        { y: 50, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 0.5, stagger: 0.1, delay: 0.3, ease: 'power2.out' }
      );
    } else {
      gsap.to(menuRef.current, { height: 0, opacity: 0, duration: 0.5, ease: 'power4.inOut' });
    }
  }, { dependencies: [isOpen], scope: navContainerRef });

  useEffect(() => {
    setIsOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col font-sans selection:bg-white selection:text-black">
      {/* Brutalist Navbar */}
      <nav ref={navContainerRef} className="fixed top-0 w-full z-50 bg-black/40 backdrop-blur-2xl border-b-hairline shadow-[0_4px_30px_rgba(0,0,0,0.1)]">
        <div className="w-full px-6 py-5 flex justify-between items-center">
          
          <Link to="/" className="text-3xl font-heading tracking-widest z-50 relative mix-blend-difference text-white uppercase">
            BOXBEE.STUDIO
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-12 font-heading text-xl uppercase tracking-widest">
            <NavLink to="/" className={({ isActive }) => `link-hover transition-colors ${isActive ? 'text-white' : 'text-gray-500 hover:text-white'}`}>Home</NavLink>
            <NavLink to="/services" className={({ isActive }) => `link-hover transition-colors ${isActive ? 'text-white' : 'text-gray-500 hover:text-white'}`}>Services</NavLink>
            <NavLink to="/templates" className={({ isActive }) => `link-hover transition-colors ${isActive ? 'text-white' : 'text-gray-500 hover:text-white'}`}>Store</NavLink>
            <NavLink to="/about" className={({ isActive }) => `link-hover transition-colors ${isActive ? 'text-white' : 'text-gray-500 hover:text-white'}`}>About</NavLink>
            <NavLink to="/contact" className={({ isActive }) => `link-hover transition-colors ${isActive ? 'text-white' : 'text-gray-500 hover:text-white'}`}>Contact</NavLink>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden z-50 relative w-10 h-10 flex flex-col justify-center items-center gap-2 mix-blend-difference"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className={`block w-8 h-[2px] bg-white transition-transform duration-300 ${isOpen ? 'rotate-45 translate-y-[10px]' : ''}`}></span>
            <span className={`block w-8 h-[2px] bg-white transition-opacity duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-8 h-[2px] bg-white transition-transform duration-300 ${isOpen ? '-rotate-45 -translate-y-[10px]' : ''}`}></span>
          </button>
        </div>

        <div 
          ref={menuRef} 
          className="fixed inset-0 bg-black h-0 opacity-0 overflow-hidden flex flex-col justify-center items-center gap-8"
        >
          <NavLink to="/" onClick={() => setIsOpen(false)} className={({ isActive }) => `mobile-link text-5xl font-heading uppercase tracking-widest transition-colors ${isActive ? 'text-white' : 'text-gray-600 hover:text-white'}`}>Home</NavLink>
          <NavLink to="/services" onClick={() => setIsOpen(false)} className={({ isActive }) => `mobile-link text-5xl font-heading uppercase tracking-widest transition-colors ${isActive ? 'text-white' : 'text-gray-600 hover:text-white'}`}>Services</NavLink>
          <NavLink to="/templates" onClick={() => setIsOpen(false)} className={({ isActive }) => `mobile-link text-5xl font-heading uppercase tracking-widest transition-colors ${isActive ? 'text-white' : 'text-gray-600 hover:text-white'}`}>Store</NavLink>
          <NavLink to="/about" onClick={() => setIsOpen(false)} className={({ isActive }) => `mobile-link text-5xl font-heading uppercase tracking-widest transition-colors ${isActive ? 'text-white' : 'text-gray-600 hover:text-white'}`}>About</NavLink>
          <NavLink to="/contact" onClick={() => setIsOpen(false)} className={({ isActive }) => `mobile-link text-5xl font-heading uppercase tracking-widest transition-colors ${isActive ? 'text-white' : 'text-gray-600 hover:text-white'}`}>Contact</NavLink>
        </div>
      </nav>

      <main className="flex-grow flex flex-col mt-[80px]">
        <Outlet />
      </main>

      {/* Brutalist Footer */}
      <footer className="w-full bg-black border-t-hairline pt-24 pb-12 px-6 md:px-12">
        <div className="w-full max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 border-b-hairline pb-24 mb-12">
          
          <div className="md:col-span-6 flex flex-col justify-between">
            <h2 className="text-fluid-6xl font-heading leading-[0.8] uppercase mb-12">Let's Build.</h2>
            <CopyEmail className="text-2xl font-heading uppercase tracking-widest link-hover self-start text-left" />
          </div>

          <div className="md:col-span-2 md:col-start-9 flex flex-col gap-6 font-heading text-xl uppercase tracking-widest text-gray-400">
            <Link to="/portfolio" className="hover:text-white transition-colors w-max">Work</Link>
            <Link to="/services" className="hover:text-white transition-colors w-max">Services</Link>
            <Link to="/about" className="hover:text-white transition-colors w-max">Studio</Link>
            <Link to="/contact" className="hover:text-white transition-colors w-max">Contact</Link>
          </div>

          <div className="md:col-span-2 flex flex-col gap-6 font-heading text-xl uppercase tracking-widest text-gray-400">
            <a href="#" className="hover:text-white transition-colors w-max">Twitter</a>
            <a href="#" className="hover:text-white transition-colors w-max">Instagram</a>
            <a href="#" className="hover:text-white transition-colors w-max">LinkedIn</a>
          </div>
        </div>

        <div className="w-full max-w-[1440px] mx-auto flex flex-col md:flex-row justify-between items-center text-sm font-sans text-gray-500 uppercase tracking-widest gap-4">
          <p>© {new Date().getFullYear()} BoxBee.Studio. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
};
