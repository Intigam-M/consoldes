import React from 'react'
import Image from "next/image";
import hero from '../../../assets/images/hero.png'

function Hero({ dictionary }) {
    return (
        <div className='bg-[#b8dde3]'>
            <div className='container flex flex-col md:flex-row'>
                <div className='md:w-1/2 w-full grid items-center justify-items-center md:justify-items-start'>
                    <div>
                        <h1 className='text-5xl font-bold pb-5'>
                            {dictionary}
                        </h1>
                        <p className='font-bold'>Unlimited access to all 60+ instructors.</p>
                    </div>
                </div>
                <div className='md:w-1/2 w-full h-[800px] overflow-hidden'>
                    <Image src={hero} alt="hero" width={800} height={500} />
                </div>
            </div>
        </div>
    )
}

export default Hero