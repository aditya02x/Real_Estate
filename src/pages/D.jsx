import React from 'react';

const D= () => {
  const plans = [
    {
      title: "The Canvas Suite",
      type: "TYPE A | 1,240 SQ.FT.",
      specs: [
        { label: "Bedrooms", value: "02" },
        { label: "Bathrooms", value: "2.5" },
        { label: "Terrace", value: "240 SQ.FT." },
      ],
      img: "https://via.placeholder.com/300x300/f3f3f3/999999?text=Floor+Plan+A" 
    },
    {
      title: "The Meridian Loft",
      type: "TYPE B | 2,150 SQ.FT.",
      specs: [
        { label: "Bedrooms", value: "03" },
        { label: "Bathrooms", value: "3.5" },
        { label: "Library", value: "Included" },
      ],
      img: "https://via.placeholder.com/300x300/f3f3f3/999999?text=Floor+Plan+B"
    },
    {
      title: "The Zenith Vista",
      type: "TYPE C | 3,800 SQ.FT.",
      specs: [
        { label: "Bedrooms", value: "04" },
        { label: "Bathrooms", value: "4.5" },
        { label: "Private Lift", value: "Direct Access" },
      ],
      img: "https://via.placeholder.com/300x300/f3f3f3/999999?text=Floor+Plan+C"
    }
  ];

  return (
    <div className="bg-[#f2f2f2] py-20 px-6 md:px-16 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Title */}
        <div className="mb-12 border-l-2 border-[#b5a48b] pl-6">
          <h2 className="text-4xl md:text-5xl font-serif text-[#1a1a1a]">Space Design</h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div key={index} className="bg-white p-10 flex flex-col shadow-sm">
              
              {/* Floor Plan Image Container */}
              <div className="aspect-square bg-[#f9f9f9] border border-gray-100 flex items-center justify-center mb-8 p-8">
                <img src={plan.img} alt={plan.title} className="max-w-full h-auto mix-blend-multiply opacity-80" />
              </div>

              {/* Text Info */}
              <div className="mb-8">
                <h3 className="text-2xl font-serif text-[#1a1a1a] mb-1">{plan.title}</h3>
                <p className="text-[10px] tracking-widest text-gray-400 font-bold mb-6">{plan.type}</p>
                
                {/* Specs List */}
                <div className="space-y-4">
                  {plan.specs.map((spec, i) => (
                    <div key={i} className="flex justify-between text-sm border-b border-gray-50 pb-2">
                      <span className="text-gray-500 font-light">{spec.label}</span>
                      <span className="text-[#1a1a1a] font-medium">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <button className="mt-auto w-full border border-gray-200 py-4 text-[10px] tracking-[0.2em] font-bold text-gray-500 hover:bg-black hover:text-white hover:border-black transition-all duration-300">
                DOWNLOAD PDF
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default D;