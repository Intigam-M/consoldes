import React from 'react'
import Image from "next/image";
import hero from '../../../assets/images/hero.png'

function Hero({ dictionary }) {
    console.log(dictionary);
    return (
        <div className='bg-gradient-to-r from-fuchsia-500 to-violet-500'>
            <div className='container flex flex-col md:flex-row gap-10'>
                <div className='md:w-1/2 w-full grid items-center justify-items-center md:justify-items-start'>
                    <div>
                        <h1 className='text-6xl font-bold pb-5  text-white  leading-snug'>
                          {dictionary.heroTitle}
                        </h1>
                        <p className='font-bold text-xl tracking-wide text-white text-opacity-60'>{dictionary.heroSpan}</p>
                    </div>
                </div>
                <div className='md:w-1/2 w-full h-[700px] grid  items-center  '>
                    <Image className='w-max' src={hero} alt="hero" width={700} height={500} />
                </div>
            </div>
        </div>
    )
}

export default Hero