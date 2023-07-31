import React from 'react'
import CourseCard from './courseCard'

function Course() {
    return (
        <div className='bg-[#edeef3]'>
            <div className='container py-16'>
                <div className='flex items-center flex-col md:py-10 px-10 md:px-0 pb-6'>
                    <div className='md:w-1/3 w-full pb-6'>
                        <p className='text-4xl font-bold'>Find The Right Online Course For You</p>
                    </div>

                    <p className='text-slate-600'>You dont have to struggle alone, youve got our assistance and help.</p>
                </div>
                <div className='grid md:grid-cols-3 grid-cols-1 gap-5 py-10 px-5 md:px-0'>
                    <CourseCard />
                    <CourseCard />
                    <CourseCard />
                </div>
            </div>
        </div>
    )
}

export default Course