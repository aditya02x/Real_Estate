import React from 'react';

const C = () => {
  const amenityList = [
    { name: "INFINITY POOL", icon: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
    { name: "TECHNOGYM HUB", icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" },
    { name: "ZEN SPA", icon: "M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707" },
    { name: "CHEF'S TABLE", icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" },
    { name: "PRIVATE CINEMA", icon: "M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" },
    { name: "ROOFTOP PARK", icon: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" },
    { name: "MEMBER'S CLUB", icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" },
    { name: "PRIVATE CELLAR", icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" },
  ];

  return (
    <div className="bg-white min-h-screen flex flex-col items-center py-24 px-6 font-sans">
      
      {/* Section Header */}
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-serif text-[#1a1a1a] mb-4">
          Elevated Amenities
        </h2>
        <p className="text-gray-400 text-sm uppercase tracking-widest font-light">
          Luxury is defined by the experiences that happen outside your front door.
        </p>
      </div>

      {/* 4-Column Icon Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-y-16 gap-x-12 max-w-5xl w-full">
        {amenityList.map((item, index) => (
          <div key={index} className="flex flex-col items-center group cursor-default">
            {/* Icon Container */}
            <div className="w-16 h-16 bg-[#f7f7f7] rounded-xl flex items-center justify-center mb-4 transition-colors group-hover:bg-[#efefef]">
              <svg 
                className="w-6 h-6 text-gray-400 group-hover:text-gray-600 transition-colors" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d={item.icon} />
              </svg>
            </div>
            
            {/* Label */}
            <span className="text-[10px] font-bold tracking-[0.2em] text-gray-500 text-center">
              {item.name}
            </span>
          </div>
        ))}
      </div>

      {/* Footer Title (As seen in the bottom left of your screenshot) */}

    </div>
  );
};

export default C;