import React from 'react'
import Image from 'next/image'


function PathStep({image, title, content, color}) {
  return (
    <div className={`${color} h-56 md:h-96 md:w-64 rounded items-center shadow-lg p-8 flex flex-col justify-between mb-6`}>
        <Image src={image} width={100} height={100}  />

        <p className='text-white font-bold text-2xl'>{title}</p>
        <p className='text-white text-clip'>{content} </p>
    </div>
  )
}

export default PathStep