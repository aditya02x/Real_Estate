import React from 'react';

const A = () => {
  return (
    <div className="bg-[#f9f9f9] min-h-screen p-8 md:p-16 font-sans text-[#333]">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start mb-12">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-6xl font-serif mb-6 text-[#1a1a1a]">
            Signature Residences
          </h1>
          <p className="text-gray-500 text-lg leading-relaxed max-w-lg">
            Curated living spaces that blend raw materials with refined 
            aesthetics. Each project is a testament to our commitment to 
            structural integrity and visual silence.
          </p>
        </div>
        
        {/* Status Badges */}
        <div className="flex gap-3 mt-8 md:mt-0 uppercase tracking-widest text-[10px] font-bold">
          <span className="px-4 py-2 bg-[#e8e8e8] text-gray-500 rounded-full">
            Available Now
          </span>
          <span className="px-4 py-2 bg-[#e8e8e8] text-gray-500 rounded-full">
            Q4 2025 Release
          </span>
        </div>
      </div>

      {/* Grid Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Large Card: The Lumina Heights */}
        <div className="md:col-span-2 relative group overflow-hidden rounded-xl h-[500px]">
          <img 
            src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1500" 
            alt="The Lumina Heights"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
          <div className="absolute bottom-10 left-10 text-white">
            <span className="uppercase tracking-[0.2em] text-xs font-medium opacity-80 mb-2 block">
              Penthouse Series
            </span>
            <h2 className="text-4xl font-serif mb-4">The Lumina Heights</h2>
            <p className="max-w-sm text-sm text-gray-300 leading-relaxed">
              A 3,400 sq.ft. sanctuary overlooking the metropolitan skyline 
              with private terrace gardens.
            </p>
          </div>
        </div>

        {/* Smaller Card: The Monolith Suites */}
        <div className="relative group overflow-hidden rounded-xl h-[500px]">
          <img 
            src="https://unsplash.com/photos/green-plant-on-white-ceramic-pot-IH7wPsjwomc" 
            alt="The Monolith Suites"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
          <div className="absolute bottom-10 left-10 text-white">
            <span className="uppercase tracking-[0.2em] text-xs font-medium opacity-80 mb-2 block">
              Studio Series
            </span>
            <h2 className="text-4xl font-serif">The Monolith Suites</h2>
          </div>
        </div>

      </div>
    </div>
  );
};

export default A;