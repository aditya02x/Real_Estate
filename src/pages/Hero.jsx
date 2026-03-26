import React from 'react';

const Hero = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center text-white">
      {/* 1. Background Image */}
      <img 
        className="absolute inset-0 w-full h-full object-cover" 
        src="https://i.pinimg.com/736x/4d/79/91/4d79915c605bc872c5b65e818ecae46d.jpg" 
        alt="Hero Background" 
      />

      {/* 2. Dark Overlay (Helps text stand out) */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* 3. Hero Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl">
        <p className='text-lg md:text-xl text-gray-200 mb-4 max-w-2xl mx-auto'>Established 1994</p>
        <h1 className="text-5xl md:text-7xl font-bold mb-2 tracking-tight">
          Designed for Better  <span className="text-white">Living</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
          Elevate your digital presence with sleek design and modern functionality. 
          Built for speed, styled for impact.
        </p>
        
        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
        
          <button className="px-8 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 rounded-full font-semibold transition-all">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;