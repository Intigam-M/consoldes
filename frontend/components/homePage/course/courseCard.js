import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

function CourseCard({lesson,title,price,image}) {
    return (
        <div className='bg-[#FDFDFD] h-[500px] rounded shadow-lg flex flex-col mb-6'>
            <div className=' h-2/4 rounded'>
                <Image src={image}  alt=""/>
            </div>
            <div></div>

            <div className='p-6 border-b'>
                <p>Lesson: {lesson}</p>
                <p className='mt-6 text-lg font-medium'>{title}</p>
                <p className='mt-10'>Author:<b className='font-bold'> Narmin M.Geybullayeva</b>  </p>
            </div>
            <div className='flex justify-between px-6 py-3 text-[#005B8F]'>
                <p>{price}</p>
                <Link href="course/detail " className='hover:text-[#0f2f42]'>Know Details</Link>
            </div>
        </div>
    )
}

export default CourseCard