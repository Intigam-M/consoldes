import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

function CourseCard({lesson,title,price,image}) {
    return (
        <div className='bg-slate-100 h-[500px] rounded shadow-lg flex flex-col mb-6'>
            <div className=' h-2/4 rounded'>
                <Image src={image}  />
            </div>
            <div></div>

            <div className='p-6 border-b'>
                <p className='text-stone-500'>Lesson: {lesson}</p>
                <p className='mt-6 text-lg font-medium'>{title}</p>
                <p className='mt-10'>Author:<b className='font-bold'> Narmin M.Geybullayeva</b>  </p>
            </div>
            <div className='flex justify-between px-6 py-3'>
                <p>{price}</p>
                <Link href="course/detail">Know Details</Link>
            </div>
        </div>
    )
}

export default CourseCard