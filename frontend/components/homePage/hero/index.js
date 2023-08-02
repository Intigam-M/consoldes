import React from 'react'
import Image from "next/image";
import hero from '../../../assets/images/hero.png'

function Hero({ dictionary }) {
    console.log(dictionary);
    return (
        <div className='bg-[#9584FF]'>
            <div className='container flex flex-col md:flex-row gap-10'>
                <div className='md:w-5/12 w-full grid items-center justify-items-center md:justify-items-start'>
                    <div>
                        <h1 className='text-5xl font-bold pb-5  text-white  leading-tight'>
                          {dictionary.heroTitle}
                        </h1>
                        <p className='font-bold tracking-wide text-white text-opacity-60'>{dictionary.heroSpan}</p>
                    </div>
                </div>
                <div className='md:w-7/12 w-full h-[700px] grid overflow-hidden items-center  '>
                    <Image src={hero} alt="hero" width={700} height={500} />
                </div>
            </div>
        </div>
    )
}

export default Hero