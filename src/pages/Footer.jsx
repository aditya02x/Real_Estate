import React from 'react';

const Footer = () => {
  return (
    <div className="bg-[#fcfcfc] py-24 px-6 md:px-16 font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
        
        {/* Left Side: Form */}
        <div>
          <h2 className="text-5xl font-serif text-[#1a1a1a] mb-6">Begin Your Inquiry</h2>
          <p className="text-gray-500 mb-12 max-w-md leading-relaxed">
            Our private consultants are available for personal tours and architectural consultations. Please leave your details below.
          </p>

          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-bold tracking-widest text-gray-400 uppercase">Full Name</label>
                <input type="text" placeholder="Enter your name" className="bg-[#f2f2f2] border-none p-4 rounded-sm focus:ring-1 focus:ring-[#8b7a5e] outline-none" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-bold tracking-widest text-gray-400 uppercase">Email Address</label>
                <input type="email" placeholder="Email@example.com" className="bg-[#f2f2f2] border-none p-4 rounded-sm focus:ring-1 focus:ring-[#8b7a5e] outline-none" />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[10px] font-bold tracking-widest text-gray-400 uppercase">Preferred Project</label>
              <select className="bg-[#f2f2f2] border-none p-4 rounded-sm appearance-none outline-none text-gray-600">
                <option>The Lumina Heights</option>
                <option>The Monolith Suites</option>
                <option>The Zenith Vista</option>
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[10px] font-bold tracking-widest text-gray-400 uppercase">Message</label>
              <textarea rows="4" placeholder="Tell us about your requirements" className="bg-[#f2f2f2] border-none p-4 rounded-sm focus:ring-1 focus:ring-[#8b7a5e] outline-none resize-none"></textarea>
            </div>

            <button className="bg-[#8b7a5e] text-white px-10 py-4 text-[11px] font-bold tracking-[0.2em] uppercase hover:bg-[#76674f] transition-colors rounded-sm shadow-md">
              Submit Inquiry
            </button>
          </form>
        </div>

        {/* Right Side: Map & Global Offices */}
        <div className="flex flex-col justify-between">
          {/* Stylized Map Placeholder */}
          <div className="relative w-full h-[400px] bg-[#d1d1d1] overflow-hidden rounded-sm mb-12">
            {/* Using a placeholder for the grid-map pattern */}
            <div className="absolute inset-0 opacity-40" style={{ backgroundImage: `radial-gradient(#000 1px, transparent 1px)`, backgroundSize: '20px 20px' }}></div>
            
            {/* Floating Address Card */}
            <div className="absolute bottom-10 left-10 bg-white p-8 shadow-xl max-w-xs">
              <h4 className="font-serif text-lg mb-2">The Monolith Studio</h4>
              <p className="text-xs text-gray-400 leading-relaxed mb-4">
                428 Architectural Way, Metropolitan District<br />
                NY 10012, United States
              </p>
              <p className="text-sm font-medium text-[#1a1a1a]">+1 (212) 880-9000</p>
            </div>
          </div>

          {/* Global Offices Footer */}
          <div className="grid grid-cols-3 gap-4 border-t border-gray-100 pt-8">
            <div>
              <p className="text-[9px] font-bold text-gray-300 tracking-[0.2em] uppercase mb-1">Global HQ</p>
              <p className="text-sm text-gray-600">Manhattan, NY</p>
            </div>
            <div>
              <p className="text-[9px] font-bold text-gray-300 tracking-[0.2em] uppercase mb-1">European Bureau</p>
              <p className="text-sm text-gray-600">Copenhagen, DK</p>
            </div>
            <div>
              <p className="text-[9px] font-bold text-gray-300 tracking-[0.2em] uppercase mb-1">Asian Office</p>
              <p className="text-sm text-gray-600">Kyoto, JP</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Footer;