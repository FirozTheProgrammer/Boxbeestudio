import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { CopyEmail } from '../components/CopyEmail';

export const Contact = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo(
      ".header-fade",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: "power2.out" }
    );

    gsap.fromTo(
      ".contact-info-fade",
      { opacity: 0, x: -30 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".contact-section",
          start: "top 85%",
        }
      }
    );

    gsap.fromTo(
      ".form-fade",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".contact-section",
          start: "top 85%",
        }
      }
    );
  }, { scope: containerRef });

  return (
    <div className="w-full flex flex-col items-center pb-32" ref={containerRef}>
      
      {/* Brutalist Header */}
      <header className="w-full max-w-[1440px] mx-auto px-6 md:px-12 pt-32 pb-24 border-b-hairline flex flex-col">
        <h1 className="header-fade text-xl font-sans uppercase tracking-[0.2em] text-gray-500 mb-8">Get in touch</h1>
        <h2 className="header-fade text-fluid-7xl font-heading leading-none text-white uppercase max-w-5xl">
          Let's create something exceptional.
        </h2>
      </header>

      {/* Contact Section */}
      <section className="contact-section w-full max-w-[1440px] mx-auto px-6 md:px-12 py-32">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 lg:gap-24">
          
          {/* Info Side */}
          <div className="md:col-span-5 flex flex-col gap-16 border-r-0 md:border-r-hairline md:pr-12">
            
            <div className="contact-info-fade border-b-hairline pb-8">
              <h3 className="text-xl font-heading uppercase tracking-widest text-gray-500 mb-4">New Business</h3>
              <CopyEmail className="text-3xl md:text-5xl font-heading uppercase text-white hover:pl-4 transition-all duration-300 text-left" />
            </div>

            <div className="contact-info-fade border-b-hairline pb-8">
              <h3 className="text-xl font-heading uppercase tracking-widest text-gray-500 mb-4">Location</h3>
              <p className="text-2xl font-heading uppercase tracking-widest text-white leading-relaxed">
                BoxBee.Studio<br />
                Global / Remote<br />
                Operating primarily in CET.
              </p>
            </div>

            <div className="contact-info-fade">
              <h3 className="text-xl font-heading uppercase tracking-widest text-gray-500 mb-4">Social</h3>
              <div className="flex flex-col gap-4 items-start">
                <a href="#" className="text-3xl font-heading uppercase text-white hover:pl-4 transition-all duration-300">Instagram</a>
                <a href="#" className="text-3xl font-heading uppercase text-white hover:pl-4 transition-all duration-300">Twitter / X</a>
                <a href="#" className="text-3xl font-heading uppercase text-white hover:pl-4 transition-all duration-300">LinkedIn</a>
              </div>
            </div>
            
          </div>

          {/* Form Side */}
          <div className="md:col-span-7">
            <form className="w-full flex flex-col gap-12" onSubmit={(e) => e.preventDefault()}>
              
              <div className="flex flex-col form-fade border-b-hairline pb-4">
                <label htmlFor="name" className="text-xl font-heading uppercase tracking-widest text-gray-500 mb-4">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  placeholder="Jane Doe"
                  className="w-full bg-transparent py-2 text-3xl font-heading uppercase text-white placeholder:text-gray-700 focus:outline-none focus:text-white transition-colors"
                />
              </div>

              <div className="flex flex-col form-fade border-b-hairline pb-4">
                <label htmlFor="email" className="text-xl font-heading uppercase tracking-widest text-gray-500 mb-4">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  placeholder="jane@example.com"
                  className="w-full bg-transparent py-2 text-3xl font-heading uppercase text-white placeholder:text-gray-700 focus:outline-none focus:text-white transition-colors"
                />
              </div>

              <div className="flex flex-col form-fade border-b-hairline pb-4">
                <label htmlFor="project" className="text-xl font-heading uppercase tracking-widest text-gray-500 mb-4">Project Details</label>
                <textarea 
                  id="project" 
                  rows={4}
                  placeholder="Tell us about your goals, timeline, and budget..."
                  className="w-full bg-transparent py-2 text-2xl font-sans uppercase font-light tracking-widest text-white placeholder:text-gray-700 focus:outline-none focus:text-white transition-colors resize-none"
                ></textarea>
              </div>

              <div className="pt-8 form-fade">
                <button type="submit" className="border-hairline px-8 py-4 font-heading text-2xl uppercase hover:bg-white hover:text-black transition-colors w-full md:w-auto">
                  Submit Inquiry
                </button>
              </div>

            </form>
          </div>

        </div>
      </section>

    </div>
  );
};
