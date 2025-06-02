import React from 'react'

export default function ExploreCards({world}) {
  return (
    <div className='text-center mx-auto border-2 border-blue-100 relative cursor-pointer hover:shadow-blue-600 rounded-lg gradient-05 w-full sm:mx-auto mt-14 shadow-xl text-gray-900 px-10 py-8 sm:p-8'>
        <div className='mx-auto -mt-[85px] w-32 h-32 relative border-4 border-white rounded-full overflow-hidden  '>
            <img src={world.img} alt="" className='object-center object-cover h-32 '/>
        </div>
      <div className='mt-6'>
        <h2 className='text-xl font-black text-blue-950'>{world.title}</h2>
        <p className='text-gray-700 mt-6'>{world.description}</p>
      </div>
    </div>
  )
}
