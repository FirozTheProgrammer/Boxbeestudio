import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export const About = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const team = [
    { name: 'SARAH JENKINS', role: 'Design Director', img: '/images/colorful_workspace_1779808518609.webp' },
    { name: 'MARCUS CHEN', role: 'Lead Engineer', img: '/images/real_studio_app_1779795446201.webp' },
    { name: 'ELENA ROSTOVA', role: 'Art Director', img: '/images/workspace_realistic_1779797581487.webp' },
  ];

  useGSAP(() => {
    gsap.fromTo(
      ".about-fade-hero",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: "power2.out" }
    );

    gsap.fromTo(
      ".manifesto-fade",
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".manifesto-section",
          start: "top 80%",
        }
      }
    );

    const teamMembers = gsap.utils.toArray('.brutalist-list-item') as HTMLElement[];
    teamMembers.forEach((member) => {
      gsap.fromTo(member,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: member,
            start: "top 85%",
          }
        }
      );
    });
  }, { scope: containerRef });

  return (
    <div className="w-full flex flex-col items-center pb-32" ref={containerRef}>
      
      {/* Editorial Header */}
      <header className="w-full max-w-[1440px] mx-auto px-6 md:px-12 pt-32 pb-24 border-b-hairline flex flex-col">
        <h1 className="text-xl font-sans uppercase tracking-[0.2em] text-gray-500 mb-8 about-fade-hero">About Practice</h1>
        <h2 className="text-fluid-7xl font-heading leading-[0.8] max-w-5xl text-white uppercase about-fade-hero">
          We believe in the power of restraint. Design should elevate content, not overpower it.
        </h2>
      </header>

      {/* The Manifesto */}
      <section className="manifesto-section w-full max-w-[1440px] mx-auto px-6 md:px-12 py-32 border-b-hairline">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          
          <div className="md:col-span-4">
            <h3 className="text-xl font-heading uppercase tracking-widest text-gray-500 manifesto-fade">The Manifesto</h3>
          </div>

          <div className="md:col-span-8 flex flex-col gap-12 border-l-hairline pl-0 md:pl-12">
            <p className="text-3xl md:text-5xl font-heading uppercase leading-tight text-white manifesto-fade">
              In a digital landscape cluttered with noise, we strive for clarity. We are a multidisciplinary design studio focusing on timeless aesthetics and robust engineering. 
            </p>
            <p className="text-xl md:text-2xl font-sans uppercase font-light tracking-widest leading-relaxed text-gray-400 manifesto-fade">
              BoxBee.Studio was founded on the principle that the best interfaces are those that recede, allowing the user's intent to take center stage. We combine rigid typography grids with fluid, organic motion to create experiences that feel both structured and alive.
            </p>
          </div>

        </div>
      </section>

      {/* Team Section: Massive Interactive List */}
      <section className="w-full max-w-[1440px] mx-auto px-6 md:px-12 py-32 flex flex-col">
        <div className="flex justify-between items-end mb-16 border-b-hairline pb-8">
          <h3 className="text-fluid-5xl font-heading uppercase text-white">The Team</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          {team.map((member, index) => (
            <div 
              key={index} 
              className="brutalist-list-item flex flex-col group cursor-pointer border border-gray-800 hover:border-white transition-colors duration-500 bg-black overflow-hidden"
            >
              <div className="w-full aspect-[4/5] relative overflow-hidden border-b border-gray-800 group-hover:border-white transition-colors duration-500">
                <img 
                  src={member.img} 
                  alt={member.name} 
                  className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-out group-hover:scale-105" 
                />
              </div>
              <div className="p-6 flex flex-col items-center text-center">
                <h4 className="text-3xl md:text-4xl font-heading uppercase text-white mb-2 group-hover:text-transparent group-hover:[-webkit-text-stroke:1px_white] transition-all duration-300">
                  {member.name}
                </h4>
                <p className="text-sm md:text-base font-sans uppercase tracking-[0.2em] text-gray-500">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};
