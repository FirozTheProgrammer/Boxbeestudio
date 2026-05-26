export const About = () => {
  const team = [
    { name: 'ALEX', role: 'FOUNDER & DEV', color: 'bg-primary' },
    { name: 'SARAH', role: 'HEAD OF DESIGN', color: 'bg-accent' },
    { name: 'MIKE', role: 'FRAMER EXPERT', color: 'bg-black' },
    { name: 'EMMA', role: 'REACT ENGINEER', color: 'bg-white' },
  ];

  return (
    <div className="w-full bg-white pb-24">
      {/* Manifesto Section */}
      <header className="w-full max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 border-b-4 border-black">
        <h1 className="text-fluid-7xl leading-[0.85] mb-12">
          WE <br /> HATE <br /> BORING <br /> WEBSITES.
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-fluid-3xl mb-4 text-accent">THE MANIFESTO</h2>
          </div>
          <div>
            <p className="text-fluid-xl font-bold leading-relaxed border-l-4 border-black pl-6">
              The web has become a sea of identical templates and rounded corners. We exist to break the mold. We build digital experiences that are loud, fast, and unapologetically bold. No fluff. No compromises. Just raw performance and striking aesthetics.
            </p>
          </div>
        </div>
      </header>

      {/* Team Spotlight */}
      <section className="w-full max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <h2 className="text-fluid-4xl mb-12 border-b-4 border-black pb-4">THE TEAM</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member) => (
            <div key={member.name} className="border-brutal bg-white flex flex-col group">
              <div className={`aspect-square border-b-4 border-black relative overflow-hidden flex items-center justify-center ${member.color}`}>
                <div className="absolute inset-0 pattern-grid-lg opacity-20"></div>
                {/* CSS Profile Placeholder */}
                <div className={`w-3/4 h-3/4 border-brutal bg-white rounded-full transition-transform duration-500 group-hover:scale-110 flex items-center justify-center`}>
                   <div className="w-1/2 h-1/2 bg-black rotate-45 group-hover:rotate-90 transition-transform duration-500"></div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-fluid-2xl mb-1">{member.name}</h3>
                <p className="font-bold text-gray-500">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
