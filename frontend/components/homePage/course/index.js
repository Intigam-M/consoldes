import React from 'react'
import CourseCard from './courseCard'
import javascript from '@/assets/images/javascript.png'
import react from '@/assets/images/react.png'
import project from '@/assets/images/javascript project.png'

function Course() {
    return (
        <div className='bg-white'>
            <div className='container py-16'>
                <div className='flex items-center flex-col md:py-10 px-10 md:px-0 pb-6'>
                    <div className='md:w-1/3 w-full pb-6'>
                        <p className='text-4xl text-center text-[#761574] font-bold'>Find The Right Online Course For You</p>
                    </div>

                    <p className='text-[#761574]'>You dont have to struggle alone, youve got our assistance and help.</p>
                </div>
                <div className='grid md:grid-cols-3 grid-cols-1 gap-5 py-10 px-5 md:px-0'>
                <CourseCard image={javascript} lesson="61" title="JavaScript Fundamental Biliklər" price="Free"/>
                <CourseCard image={react} lesson="20" title="Yeni Başlayanlar üçün React JS" price="Free"/>
                <CourseCard image={project} lesson="40" title="JavaScript Projects" price="Free"/>
                    
                </div>
            </div>
        </div>
    )
}

export default Course