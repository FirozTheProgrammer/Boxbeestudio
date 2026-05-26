export const Contact = () => {
  return (
    <div className="w-full bg-white min-h-screen">
      <div className="w-full max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-2 min-h-[calc(100vh-80px)]">
        
        {/* Left Side - Typography / Info */}
        <div className="p-8 sm:p-12 lg:p-24 border-b-4 md:border-b-0 md:border-r-4 border-black flex flex-col justify-center bg-primary">
          <h1 className="text-fluid-6xl mb-6 leading-none">LET'S<br/>BUILD<br/>IT.</h1>
          <p className="text-fluid-xl font-bold mb-12 max-w-md">
            Ready to break the internet? Tell us about your project and we'll get back to you within 24 hours.
          </p>
          
          <div className="space-y-4">
            <div>
              <p className="font-bold uppercase tracking-widest text-sm mb-1">EMAIL</p>
              <a href="mailto:hello@boxbee.studio" className="text-fluid-2xl font-black hover:underline hover:text-white transition-colors">
                HELLO@BOXBEE.STUDIO
              </a>
            </div>
            <div>
              <p className="font-bold uppercase tracking-widest text-sm mb-1">LOCATION</p>
              <p className="text-fluid-xl font-black">
                GLOBAL (REMOTE)
              </p>
            </div>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="p-8 sm:p-12 lg:p-24 flex flex-col justify-center bg-white">
          <form className="w-full max-w-lg mx-auto space-y-8" onSubmit={(e) => e.preventDefault()}>
            
            <div className="flex flex-col">
              <label htmlFor="name" className="font-black uppercase text-xl mb-2">Name</label>
              <input 
                type="text" 
                id="name" 
                placeholder="JOHN DOE"
                className="w-full border-brutal bg-white p-4 font-bold text-lg placeholder:text-gray-400 focus:outline-none focus:bg-gray-50 focus:shadow-brutal transition-shadow"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="email" className="font-black uppercase text-xl mb-2">Email</label>
              <input 
                type="email" 
                id="email" 
                placeholder="JOHN@EXAMPLE.COM"
                className="w-full border-brutal bg-white p-4 font-bold text-lg placeholder:text-gray-400 focus:outline-none focus:bg-gray-50 focus:shadow-brutal transition-shadow"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="message" className="font-black uppercase text-xl mb-2">Message</label>
              <textarea 
                id="message" 
                rows={5}
                placeholder="TELL US ABOUT YOUR PROJECT..."
                className="w-full border-brutal bg-white p-4 font-bold text-lg placeholder:text-gray-400 focus:outline-none focus:bg-gray-50 focus:shadow-brutal transition-shadow resize-none"
              ></textarea>
            </div>

            <button 
              type="submit" 
              className="w-full py-6 bg-black text-white text-fluid-2xl font-black uppercase tracking-widest border-brutal border-black hover:bg-primary hover:text-black hover:-translate-y-2 hover:shadow-[8px_8px_0px_#0a0a0a] transition-all duration-200 active:translate-y-0 active:shadow-none"
            >
              Send Request
            </button>

          </form>

          <div className="mt-16 pt-8 border-t-4 border-black text-center">
             <p className="font-bold text-lg mb-4">Or skip the form.</p>
             <button className="btn-brutal bg-accent text-white border-black w-full sm:w-auto">
               Book a Discovery Call
             </button>
          </div>

        </div>

      </div>
    </div>
  );
};
