import React from 'react'
import Image from 'next/image'
import target from '@/assets/images/target.png'

function About(image) {
  return (
    <div>
      <div><p className='text-center text-5xl text-[#761574] font-bold'>Achieve Your Goals</p></div>
        <div className='container py-16 pb-16 flex md:flex-row flex-col justify-between'>
          
            
            <div className='md:w-1/2 '>
            <Image src={target} width={700} height={700} />
            </div>
            <div className='md:w-1/2'>
                <p className='text-4xl font-medium text-[#361235]'>Why CONSOLDES?</p><br />
                <p className='text-3xl font-medium'>Features and Benefits</p>
                <p className=' my-6'>Lost the plot bobby such a fibber bleeding bits and bobs get shirty with me bugger all mate chinwag super pukka william barney, horse play buggered.</p>
                <li>Fast-track your learning</li>
                <li>Step-by-step lessons</li>
                <li>Hands-on learning</li>
                <li>Real-world projects</li>
                <li>Courses for everyone</li>
            </div>
        </div>
    </div>
  )
}

export default About