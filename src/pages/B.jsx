import React from 'react'

const B = () => {
  return (
    <div className="max-w-7xl mx-auto flex gap-6 p-10">
        <div className='max-w-2xl w-100 h-[400px]  bg-red-300 mx-auto relative  '>
            <img className='absolute object-cover inset-0 w-full h-full '  src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1500" alt="" />
            
             <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
             

        </div>
        <div className='min-w-3xl  bg-[#e2e1e0]/50'>

        </div>

      
    </div>
  )
}

export default B
