import { Link, Outlet, useLocation } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const menuRef = useRef<HTMLDivElement>(null);
  const navContainerRef = useRef<HTMLElement>(null);

  const links = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Templates', path: '/templates' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  useGSAP(() => {
    if (isOpen) {
      gsap.to(menuRef.current, { height: '100vh', opacity: 1, duration: 0.7, ease: 'power4.inOut' });
      // Stagger in links
      gsap.fromTo(
        '.mobile-link', 
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, stagger: 0.1, delay: 0.3, ease: 'power2.out' }
      );
    } else {
      gsap.to(menuRef.current, { height: 0, opacity: 0, duration: 0.5, ease: 'power3.inOut' });
    }
  }, [isOpen]);

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <nav ref={navContainerRef} className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-sm border-b-hairline mix-blend-normal">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="flex justify-between h-24 items-center">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-2xl font-serif italic tracking-tight text-black">
              Form Studio
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-12">
            {links.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-xs uppercase tracking-[0.2em] transition-colors duration-300 ${
                    isActive ? 'text-black font-semibold' : 'text-gray-500 hover:text-black'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center relative z-50">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-xs uppercase tracking-[0.2em] text-black focus:outline-none"
            >
              {isOpen ? 'Close' : 'Menu'}
            </button>
          </div>
        </div>
      </div>

      {/* Fullscreen Mobile Menu */}
      <div
        ref={menuRef}
        className="md:hidden absolute top-0 left-0 w-full bg-white overflow-hidden -z-10 flex flex-col justify-center items-center"
        style={{ height: 0, opacity: 0 }}
      >
        <div className="flex flex-col items-center space-y-8">
          {links.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.name}
                to={link.path}
                className={`mobile-link text-3xl font-serif italic tracking-tight opacity-0 ${
                  isActive ? 'text-gray-400' : 'text-black'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

const Footer = () => {
  return (
    <footer className="bg-white border-t-hairline">
      <div className="max-w-[1440px] mx-auto py-24 px-6 md:px-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-16">
        <div className="w-full md:w-1/2">
          <h2 className="text-fluid-6xl font-serif italic leading-none mb-8 text-black">Form Studio</h2>
          <p className="text-sm tracking-wide text-gray-500 max-w-sm font-light">
            An independent design practice focusing on digital experiences, brand identity, and typography-driven interfaces.
          </p>
        </div>
        <div className="flex flex-col items-start md:items-end space-y-2">
          <a href="#" className="link-minimal text-xs text-gray-500 hover:text-black">Instagram</a>
          <a href="#" className="link-minimal text-xs text-gray-500 hover:text-black">Twitter</a>
          <a href="#" className="link-minimal text-xs text-gray-500 hover:text-black">LinkedIn</a>
          <p className="text-xs text-gray-400 uppercase tracking-widest mt-8">
            &copy; {new Date().getFullYear()} Form Studio
          </p>
        </div>
      </div>
    </footer>
  );
};

export const Layout = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useGSAP(() => {
    // Subtle, elegant fade-up on route change
    gsap.fromTo(
      containerRef.current,
      { opacity: 0, y: 15 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out', delay: 0.1 }
    );
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen bg-white text-black selection:bg-gray-200">
      <Navbar />
      {/* pt-24 offsets the fixed navbar height */}
      <main className="flex-grow w-full overflow-x-hidden pt-24">
        <div ref={containerRef} className="w-full h-full min-h-[70vh]">
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  );
};
