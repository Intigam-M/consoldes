import React from 'react'
import Link from 'next/link'

function CourseCard() {
    return (
        <div className='bg-green-300 h-[500px] rounded shadow-lg flex flex-col mb-6'>
            <div className='bg-red-300 h-2/4 rounded'>Image here</div>
            <div></div>

            <div className='p-6 border-b'>
                <p className='text-stone-500'>43 Lessons</p>
                <p className='mt-6 text-lg font-medium'>Become a product Manager learn the skills & job. </p>
                <p className='mt-10'>Author:<b className='font-bold'> Narmin Mammadli</b>  </p>
            </div>
            <div className='flex justify-between px-6 py-3'>
                <p>Price: 100$</p>
                <Link href="course/detail">Know Details</Link>
            </div>
        </div>
    )
}

export default CourseCard